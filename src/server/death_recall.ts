// Gives a Parallel Worlds Death Recall Token on respawn so players can return
// to where they died. Parallel Worlds only hands out the token for deaths in
// its exploration dimensions; this fills the gap for every other death
// (overworld, nether, end, Sable sub-levels, etc.).

// KubeJS loads every server script into one shared scope, so top-level const/
// function declarations (BlockPos, ResourceLocation, loadClass, ...) collide
// with identically named globals from other scripts and throw "redeclaration
// of var" on reload. Wrapping the whole script in an IIFE keeps every name
// function-scoped so nothing leaks into that shared scope.
(function () {
  function loadClass(name: string): any {
    try {
      return Java.loadClass(name);
    } catch (e) {
      return null;
    }
  }

  const PWConfig = loadClass("com.agent772.parallelworlds.config.PWConfig");
  const DimensionUtils = loadClass(
    "com.agent772.parallelworlds.dimension.DimensionUtils",
  );
  const DeathRecallItem = loadClass(
    "com.agent772.parallelworlds.item.DeathRecallItem",
  );
  const ResourceLocation = loadClass(
    "net.minecraft.resources.ResourceLocation",
  );
  const BlockPos = loadClass("net.minecraft.core.BlockPos");

  const ENABLED =
    PWConfig &&
    DimensionUtils &&
    DeathRecallItem &&
    ResourceLocation &&
    BlockPos;

  if (!ENABLED) {
    console.warn(
      "[death_recall] parallelworlds not installed - death recall tokens disabled",
    );
    return;
  }

  // uuid -> { dim, x, y, z, yRot, xRot }. The player entity is recreated on
  // respawn, so the death location is carried across the boundary in memory.
  const pendingRecall: { [uuid: string]: any } = {};

  // True when Parallel Worlds itself will hand out a token for this death,
  // which is exactly when its recall config is on and the death was in an
  // exploration dimension. Used only to avoid giving a duplicate; it is not a
  // master switch.
  function parallelWorldsGivesToken(loc: any): boolean {
    try {
      return (
        PWConfig.isDeathRecallEnabled() &&
        DimensionUtils.isExplorationDimension(loc)
      );
    } catch (e) {
      return false;
    }
  }

  EntityEvents.death("minecraft:player", (event) => {
    const player = event.entity;
    if (!player || player.isCreative() || player.isSpectator()) return;
    pendingRecall[player.stringUUID] = {
      dim: player.level.dimension.toString(),
      x: Math.floor(player.getX()),
      y: Math.floor(player.getY()),
      z: Math.floor(player.getZ()),
      yRot: player.getYRot(),
      xRot: player.getXRot(),
    };
  });

  PlayerEvents.respawned((event) => {
    const player = event.player;
    if (!player) return;

    const data = pendingRecall[player.stringUUID];
    delete pendingRecall[player.stringUUID];
    if (!data) return; // end-return, or died in creative/spectator

    // KubeJS's Rhino fork mishandles let/const declared inside nested blocks
    // (try/for/if), hoisting them to a function-scoped var and then throwing
    // "redeclaration of var" at runtime. Use var for locals inside this try,
    // matching the pattern the /home script already relies on.
    try {
      var loc = ResourceLocation.parse(data.dim);
      if (parallelWorldsGivesToken(loc)) return;

      // createFor bakes expiry and charge-up from PWConfig, so KubeJS tokens
      // expire exactly like PW-issued ones (deathRecallExpireSeconds, default
      // 300s; -1 disables expiry).
      var pos = new BlockPos(data.x, data.y, data.z);
      var token = DeathRecallItem.createFor(loc, pos, data.yRot, data.xRot);
      player.give(token);
    } catch (e) {
      console.warn(`[death_recall] failed to give token: ${e}`);
    }
  });

  PlayerEvents.loggedOut((event) => {
    const player = event.player;
    if (player) delete pendingRecall[player.stringUUID];
  });
})();
