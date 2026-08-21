(function () {

  // Edit these to tune teleport behavior (0 disables the feature).
  const COOLDOWN_SECONDS = 3; // minimum seconds between /home uses
  const WARMUP_SECONDS = 3; // seconds a player must stand still before teleporting

  // Set to true to print step-by-step Sable detection info to the server console.
  // Leave on while diagnosing sub-level homes; turn off once confirmed working.
  const HOME_DEBUG = false;

  const TICKS_PER_SECOND = 20;
  const MOVE_EPSILON = 0.25; // horizontal distance that counts as "moved"

  // uuid -> pending warmup { targetTick, startX, startY, startZ, startHealth }
  const pendingHome: { [uuid: string]: any } = {};

  const round = (n: number) => Math.round(n * 10) / 10;

  function debug(msg: string) {
    if (HOME_DEBUG) console.info(`[home] ${msg}`);
  }

  // Sable stores structures at fixed plot coordinates but renders them at moving
  // world poses, so a home saved on one must be kept in the structure's local
  // frame and re-projected through its current pose on teleport.
  function loadClass(name: string): any {
    try {
      return Java.loadClass(name);
    } catch (e) {
      debug(`loadClass ${name} failed: ${e}`);
      return null;
    }
  }

  const Vec3Class = loadClass("net.minecraft.world.phys.Vec3");
  const SubLevelContainerClass = loadClass(
    "dev.ryanhcode.sable.api.sublevel.SubLevelContainer",
  );

  // Above-hotbar text. displayClientMessage(component, true) targets the action
  // bar; strings are coerced to a Component the same way player.tell does.
  function actionBar(player: any, text: string) {
    player.displayClientMessage(text, true);
  }

  // KubeJS exposes Level.dimension as a ResourceLocation property, not a method.
  function dimensionId(player: any): string {
    return player.level.dimension.toString();
  }

  // Level.getGameTime() is not exposed to scripts; read it off the level data.
  function gameTime(player: any): number {
    return player.level.getLevelData().getGameTime();
  }

  // Builds a Minecraft Vec3, or falls back to a plain [x, y, z] that KubeJS can
  // still coerce to a Vec3 argument if the class could not be loaded.
  function makeVec3(x: number, y: number, z: number): any {
    if (Vec3Class) return new Vec3Class(x, y, z);
    return [x, y, z];
  }

  // Resolves the Sable sub-level container for the player's level. Prefers the
  // level's own accessor (no Java.loadClass, so it is not affected by KubeJS's
  // class filter) and falls back to the static API.
  function subLevelContainer(player: any): any {
    var level = player.level;
    var container = null;
    try {
      if (level.sable$getPlotContainer) {
        container = level.sable$getPlotContainer();
        if (container) return container;
      }
    } catch (e) {
      debug(`sable$getPlotContainer failed: ${e}`);
    }
    try {
      if (SubLevelContainerClass) {
        container = SubLevelContainerClass.getContainer(level);
        if (container) return container;
      }
    } catch (e) {
      debug(`SubLevelContainer.getContainer failed: ${e}`);
    }
    return null;
  }

  // Finds the Sable sub-level the player is standing on/inside. A sub-level's
  // blocks live at extreme "plot" coordinates but render at a world pose, so we
  // test both frames: the world-space bounding box against the player's world
  // position, and the plot-space bounding box against the player position mapped
  // into the structure's local frame. Whichever frame boundingBox() reports in,
  // one test matches. Purely positional, so it works flying or on foot.
  function findSubLevelAt(player: any): any {
    var container = subLevelContainer(player);
    if (!container) {
      debug("no sub-level container for this level");
      return null;
    }

    var px = player.getX();
    var py = player.getY();
    var pz = player.getZ();
    var pad = 0.35;

    var subs = null;
    try {
      subs = container.getAllSubLevels();
    } catch (e) {
      debug(`getAllSubLevels failed: ${e}`);
      return null;
    }
    var count = subs.size();
    debug(`player at ${px}, ${py}, ${pz}; ${count} sub-level(s) loaded`);

    var i = 0;
    var candidate = null;
    var worldBox = null;
    var localPoint = null;
    var plotBox = null;
    for (i = 0; i < count; i++) {
      candidate = subs.get(i);

      try {
        worldBox = candidate.boundingBox();
        debug(
          `  #${i} worldBB x[${worldBox.minX()}..${worldBox.maxX()}] y[${worldBox.minY()}..${worldBox.maxY()}] z[${worldBox.minZ()}..${worldBox.maxZ()}]`,
        );
        if (
          worldBox.intersects(
            px - pad,
            py - 0.6,
            pz - pad,
            px + pad,
            py + 0.6,
            pz + pad,
          )
        ) {
          debug(`  #${i} matched in world space`);
          return candidate;
        }
      } catch (e) {
        debug(`  #${i} world test failed: ${e}`);
      }

      try {
        localPoint = candidate
          .logicalPose()
          .transformPositionInverse(player.position());
        plotBox = candidate.getPlot().getBoundingBox();
        debug(
          `  #${i} local ${localPoint.x}, ${localPoint.y}, ${localPoint.z}; plotBB x[${plotBox.minX()}..${plotBox.maxX()}] y[${plotBox.minY()}..${plotBox.maxY()}] z[${plotBox.minZ()}..${plotBox.maxZ()}]`,
        );
        if (
          plotBox.contains(localPoint.x, localPoint.y, localPoint.z) ||
          plotBox.contains(localPoint.x, localPoint.y - 0.6, localPoint.z)
        ) {
          debug(`  #${i} matched in plot space`);
          return candidate;
        }
      } catch (e) {
        debug(`  #${i} local test failed: ${e}`);
      }
    }

    debug("no sub-level matched the player position");
    return null;
  }

  // If the player is on a Sable sub-level, returns their position in that
  // sub-level's local frame plus its UUID; otherwise null.
  function captureSubLevel(player: any): any {
    try {
      var found = findSubLevelAt(player);
      if (!found) return null;
      var local = found.logicalPose().transformPositionInverse(player.position());
      return {
        subLevelId: found.getUniqueId().toString(),
        lx: local.x,
        ly: local.y,
        lz: local.z,
      };
    } catch (e) {
      debug(`captureSubLevel failed: ${e}`);
      return null;
    }
  }

  // Re-projects a stored local position through the sub-level's current pose to
  // get fresh world coordinates. The sub-level is matched by UUID string so no
  // UUID class needs to load. Returns null (falling back to world coordinates)
  // if the structure is gone or the API is unavailable.
  function resolveSubLevelWorld(player: any, home: any): any {
    try {
      var container = subLevelContainer(player);
      if (!container) return null;

      var wanted = home.getString("SubLevel");
      var subs = container.getAllSubLevels();
      var count = subs.size();
      var target = null;
      var candidate = null;
      var i = 0;
      for (i = 0; i < count; i++) {
        candidate = subs.get(i);
        if (candidate.getUniqueId().toString() === wanted) {
          target = candidate;
          break;
        }
      }
      if (!target) {
        debug(`resolve: sub-level ${wanted} not found among ${count}`);
        return null;
      }

      var local = makeVec3(
        home.getDouble("LocalX"),
        home.getDouble("LocalY"),
        home.getDouble("LocalZ"),
      );
      var world = target.logicalPose().transformPosition(local);
      debug(`resolve: local -> world ${world.x}, ${world.y}, ${world.z}`);
      return { x: world.x, y: world.y, z: world.z };
    } catch (e) {
      debug(`resolveSubLevelWorld failed: ${e}`);
      return null;
    }
  }

  function setHome(player: any): number {
    const home = player.persistentData.getCompound("HomeData");
    home.putDouble("X", player.getX());
    home.putDouble("Y", player.getY());
    home.putDouble("Z", player.getZ());
    home.putFloat("Yaw", player.getYRot());
    home.putFloat("Pitch", player.getXRot());
    home.putString("Dimension", dimensionId(player));

    const sub = captureSubLevel(player);
    home.putBoolean("OnSubLevel", !!sub);
    if (sub) {
      home.putString("SubLevel", sub.subLevelId);
      home.putDouble("LocalX", sub.lx);
      home.putDouble("LocalY", sub.ly);
      home.putDouble("LocalZ", sub.lz);
    }
    player.persistentData.put("HomeData", home);

    if (sub) {
      player.tell(
        `Home set on a Sable structure at ${round(sub.lx)}, ${round(
          sub.ly,
        )}, ${round(sub.lz)} (relative to the structure). It will follow the structure when it moves.`,
      );
    } else {
      player.tell(
        `Home set at ${round(player.getX())}, ${round(player.getY())}, ${round(
          player.getZ(),
        )} in ${dimensionId(player)}.`,
      );
    }
    return 1;
  }

  function teleportHome(player: any) {
    const home = player.persistentData.getCompound("HomeData");
    const yaw = home.getFloat("Yaw");
    const pitch = home.getFloat("Pitch");
    const dim = home.getString("Dimension");

    let x = home.getDouble("X");
    let y = home.getDouble("Y");
    let z = home.getDouble("Z");
    let onStructure = false;

    if (home.getBoolean("OnSubLevel")) {
      const world = resolveSubLevelWorld(player, home);
      if (world) {
        x = world.x;
        y = world.y;
        z = world.z;
        onStructure = true;
      } else {
        // The structure this home lived on is gone (deleted, or its sub-level is
        // no longer loaded). Falling back to the stale world coordinates would
        // drop the player in mid-air where it used to be, so abort instead.
        player.tell(
          "Your home was on a Sable structure that no longer exists. Use /sethome to set a new home.",
        );
        return;
      }
    }

    // Routing through /tp goes via Sable's teleportTo mixin so sub-levels stay
    // coherent.
    player.server.runCommandSilent(
      `execute in ${dim} run tp ${player.username} ${x} ${y} ${z} ${yaw} ${pitch}`,
    );

    player.persistentData.putLong("HomeLastTeleport", gameTime(player));
    actionBar(
      player,
      `Welcome home! Teleported to ${round(x)}, ${round(y)}, ${round(z)}${
        onStructure ? " (on a Sable structure)" : ""
      }.`,
    );
  }

  function goHome(player: any): number {
    const data = player.persistentData;
    if (!data.contains("HomeData")) {
      player.tell("No home set. Use /sethome first.");
      return 1;
    }

    const now = gameTime(player);

    if (COOLDOWN_SECONDS > 0 && data.contains("HomeLastTeleport")) {
      const elapsed = now - data.getLong("HomeLastTeleport");
      const cooldownTicks = COOLDOWN_SECONDS * TICKS_PER_SECOND;
      if (elapsed >= 0 && elapsed < cooldownTicks) {
        const remaining = Math.ceil((cooldownTicks - elapsed) / TICKS_PER_SECOND);
        player.tell(
          `You must wait ${remaining} more second(s) before using /home again.`,
        );
        return 1;
      }
    }

    if (WARMUP_SECONDS > 0) {
      pendingHome[player.stringUUID] = {
        targetTick: now + WARMUP_SECONDS * TICKS_PER_SECOND,
        startX: player.getX(),
        startY: player.getY(),
        startZ: player.getZ(),
        startHealth: player.getHealth(),
      };
      actionBar(
        player,
        `Teleporting home in ${WARMUP_SECONDS}s. Don't move or take damage.`,
      );
      return 1;
    }

    teleportHome(player);
    return 1;
  }

  function cancelWarmup(player: any, reason: string) {
    const key = player.stringUUID;
    if (pendingHome[key]) {
      delete pendingHome[key];
      actionBar(player, `Teleport cancelled, ${reason}.`);
    }
  }

  ServerEvents.commandRegistry((event) => {
    const { commands: Commands } = event;

    event.register(
      Commands.literal("sethome").executes((ctx) => {
        const player = ctx.source.player;
        if (!player) return 1;
        return setHome(player);
      }),
    );

    event.register(
      Commands.literal("home").executes((ctx) => {
        const player = ctx.source.player;
        if (!player) return 1;
        return goHome(player);
      }),
    );
  });

  PlayerEvents.tick((event) => {
    const player = event.player;
    if (!player) return;

    const key = player.stringUUID;
    const pending = pendingHome[key];
    if (!pending) return;

    if (player.getHealth() < pending.startHealth) {
      cancelWarmup(player, "you took damage");
      return;
    }

    const dx = player.getX() - pending.startX;
    const dz = player.getZ() - pending.startZ;
    if (dx * dx + dz * dz > MOVE_EPSILON * MOVE_EPSILON) {
      cancelWarmup(player, "you moved");
      return;
    }

    const now = gameTime(player);
    if (now >= pending.targetTick) {
      delete pendingHome[key];
      teleportHome(player);
      return;
    }

    const remaining = Math.ceil((pending.targetTick - now) / TICKS_PER_SECOND);
    actionBar(
      player,
      `Teleporting home in ${remaining}s. Don't move or take damage.`,
    );
  });

  EntityEvents.afterHurt("minecraft:player", (event) => {
    const player = event.entity;
    if (!player) return;
    cancelWarmup(player, "you took damage");
  });

  PlayerEvents.loggedOut((event) => {
    const player = event.player;
    if (player) delete pendingHome[player.stringUUID];
  });

})();