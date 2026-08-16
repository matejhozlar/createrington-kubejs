import { $Goal, $PanicGoal, $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Sensing } from "@package/net/minecraft/world/entity/ai/sensing";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $IEntityDataHolder } from "@package/com/natamus/collective_common_neoforge/data";
import { $ListTag, $CompoundTag_, $Tag, $CompoundTag, $Tag_ } from "@package/net/minecraft/nbt";
import { $IClumpedOrb } from "@package/com/blamejared/clumps/helper";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $EntityExtension as $EntityExtension$1 } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_collision";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $Panda, $Fox, $SnowGolem, $Wolf, $Animal, $Cod, $Chicken, $Cat, $Squid, $Sheep, $Bee, $Dolphin, $Parrot, $Turtle, $Salmon, $Pufferfish, $IronGolem, $Ocelot, $PolarBear, $Cow, $Pig, $TropicalFish, $MushroomCow, $Rabbit } from "@package/net/minecraft/world/entity/animal";
import { $ILivingEntityExtension, $IEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Brain$Provider, $Brain } from "@package/net/minecraft/world/entity/ai";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MotionAwareEntity } from "@package/com/blackgear/vanillabackport/common/api/extensions";
import { $EntityAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $DynamicLightSource } from "@package/toni/sodiumdynamiclights";
import { $Component_, $HoverEvent, $Component } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $EntityExtension as $EntityExtension$2 } from "@package/foundry/veil/ext";
import { $TheFasterEntityCollisionContext } from "@package/dev/ryanhcode/sable/mixinhelpers/entity/entity_collision";
import { $Snowball, $Projectile, $ShulkerBullet, $FishingHook, $WitherSkull, $DragonFireball, $SmallFireball, $SpectralArrow, $LargeFireball, $FireworkRocketEntity, $ThrownExperienceBottle, $EyeOfEnder, $Arrow, $ThrownEgg, $ThrownPotion, $ThrownTrident, $EvokerFangs, $ProjectileDeflection, $LlamaSpit, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $BalmEntity } from "@package/net/blay09/mods/balm/api/entity";
import { $ExperienceOrbAccess } from "@package/com/blamejared/clumps/mixin";
import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $SubLevelEntityCollision$CollisionInfo } from "@package/dev/ryanhcode/sable/sublevel/entity_collision";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $ZombifiedPiglin, $Stray, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $Vector3d, $Vector3f } from "@package/org/joml";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $LeashableCallback, $LeashDataExtension } from "@package/com/blackgear/vanillabackport/common/api/leash";
import { $GameEvent, $DynamicGameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $AccessorEntity as $AccessorEntity$1 } from "@package/top/theillusivec4/curios/mixin/core";
import { $Attribute, $AttributeMap, $AttributeSupplier$Builder, $AttributeInstance, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $LivingEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Painting, $ArmorStand, $ItemFrame, $GlowItemFrame, $LeashFenceKnotEntity } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Set_, $List, $Collection_, $List_, $Iterator, $UUID, $Optional, $Stack, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Donkey, $Llama, $Mule, $ZombieHorse, $Horse, $SkeletonHorse, $TraderLlama } from "@package/net/minecraft/world/entity/animal/horse";
import { $DynamicLightHandlerHolder } from "@package/toni/sodiumdynamiclights/accessor";
import { $HolderLookup$Provider, $NonNullList, $Direction, $Holder_, $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $Vec3i, $Holder, $Direction$Axis_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Enum, $Iterable, $Class, $Object, $Record } from "@package/java/lang";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/dev/tr7zw/transition/mixin";
import { $ChunkPos, $Level_, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $EntityPotionEffectsJS } from "@package/dev/latvian/mods/kubejs/entity";
import { $SynchedEntityData$Builder, $SyncedDataHolder, $EntityDataAccessor_, $EntityDataAccessor, $SynchedEntityData, $SynchedEntityData$DataValue_ } from "@package/net/minecraft/network/syncher";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $EntityStickExtension, $LivingEntityStickExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels";
import { $Tadpole, $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $EntityAccess } from "@package/snownee/jade/mixin";
import { $ExtensionHolder } from "@package/dev/tr7zw/transition/mc/extending";
import { $ChangeSubscriber$CountChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSources, $DamageSource_, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $Triple, $Triple_ } from "@package/com/supermartijn642/fusion/util";
import { $Codec, $Dynamic } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $SableBeyondEntityMassNbtAccess } from "@package/me/yassigame/sable_beyond/api/entity";
import { $BreezeWindCharge, $WindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $FluidType, $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $EntityAccessor as $EntityAccessor$4 } from "@package/net/mehvahdjukaar/amendments/mixins";
import { $AccessorWalkAnimationState, $AccessorEntity } from "@package/com/railwayteam/railways/mixin/client";
import { $StringRepresentable$EnumCodec, $FormattedCharSequence_, $Brightness, $FormattedCharSequence, $RandomSource, $Brightness_, $OptionEnum, $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_, $Nameable, $Container, $InteractionResult, $DifficultyInstance, $InteractionHand } from "@package/net/minecraft/world";
import { $CrashReportCategory, $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $SoundEvent, $SoundSource, $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $EntityAccessor as $EntityAccessor$5 } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $MobAccessor } from "@package/net/p3pp3rf1y/sophisticatedbackpacks/mixin";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $EntityAccessor as $EntityAccessor$2, $LivingEntityAccessor as $LivingEntityAccessor$1 } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $EntityAccess as $EntityAccess$1, $EntityInLevelCallback, $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $SoundAction, $IShearable, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $EntityExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $ProjectileWeaponItem, $ItemStack_, $ItemStack, $ItemDisplayContext_, $ItemDisplayContext, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $EquipmentEntity, $EquipmentEntity$TickableEnchantmentTrackingEntity, $NavigatingEntity, $EquipmentEntity$EquipmentTrackingEntity } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DynamicLightHandler, $DynamicLightHandler_ } from "@package/dev/lambdaurora/lambdynlights/api";
import { $EntityExtension as $EntityExtension$3 } from "@package/dev/ryanhcode/sable/mixinterface";
import { $EntityMovementExtension, $LivingEntityMovementExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $InjectedEntityTypeExtension } from "@package/dev/architectury/extensions/injected";
import { $EnchantmentLocationBasedEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Portal_, $Mirror_, $Portal$Transition, $Rotation_, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityKJS, $EntityTypeKJS, $LivingEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Transformation } from "@package/com/mojang/math";
import { $AABB_, $Vec3_, $HitResult, $AABB, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $MinecartFurnace, $MinecartHopper, $MinecartChest, $MinecartTNT, $MinecartCommandBlock, $Boat, $ChestBoat, $MinecartSpawner, $Minecart } from "@package/net/minecraft/world/entity/vehicle";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $MoveControl, $LookControl, $JumpControl, $BodyRotationControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $SpawnPlacementsAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $FabricEntityTypeImpl, $FabricEntityTypeImpl$Builder, $FabricEntityTypeImpl$Builder$Mob, $FabricEntityTypeImpl$Builder$Living } from "@package/net/fabricmc/fabric/impl/object/builder";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $EntityData, $IEntity } from "@package/xaero/pac/common/entity";
import { $LivingEntityAccessor as $LivingEntityAccessor$2 } from "@package/com/adonis/createfisheryindustry/mixin/accessor";
import { $FabricEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/entity";
import { $EntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $IntFunction, $Predicate_, $Function_, $Supplier_, $BiConsumer_, $ToIntFunction_, $Consumer_, $Predicate, $Consumer, $BiPredicate_ } from "@package/java/util/function";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $LimbAnimatorAccessor, $EntityAccessor as $EntityAccessor$3, $LivingEntityAccessor as $LivingEntityAccessor$3 } from "@package/com/furiusmax/bjornlib/neo/mixin";
import { $ParticleEmitter } from "@package/foundry/veil/api/quasar/particle";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $LootParams, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { LocalPlayer, AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $DisplayAccessor } from "@package/dev/tr7zw/entityculling/mixin";
import { $PiglinBrute, $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $EMFEntity } from "@package/traben/entity_model_features/utils";
import { $VecDeltaCodec, $ClientboundAddEntityPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Stream } from "@package/java/util/stream";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $PotionContents_ } from "@package/net/minecraft/world/item/alchemy";
import { $PlayerTeam, $ScoreHolder, $Team } from "@package/net/minecraft/world/scores";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as ai from "@package/net/minecraft/world/entity/ai";
export * as animal from "@package/net/minecraft/world/entity/animal";
export * as projectile from "@package/net/minecraft/world/entity/projectile";
export * as npc from "@package/net/minecraft/world/entity/npc";
export * as boss from "@package/net/minecraft/world/entity/boss";
export * as player from "@package/net/minecraft/world/entity/player";
export * as monster from "@package/net/minecraft/world/entity/monster";
export * as decoration from "@package/net/minecraft/world/entity/decoration";
export * as vehicle from "@package/net/minecraft/world/entity/vehicle";
export * as schedule from "@package/net/minecraft/world/entity/schedule";
export * as ambient from "@package/net/minecraft/world/entity/ambient";
export * as raid from "@package/net/minecraft/world/entity/raid";
export * as item from "@package/net/minecraft/world/entity/item";

declare module "@package/net/minecraft/world/entity" {
    export class $GlowSquid extends $Squid {
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getDarkTicksRemaining(): number;
        static checkGlowSquidSpawnRules(glowSquid: $EntityType_<$LivingEntity>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        lootTable: $ResourceKey<$LootTable>;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        tentacleAngle: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        oldTentacleAngle: number;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zBodyRot: number;
        boardingCooldown: number;
        zo: number;
        xBodyRot: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        zBodyRotO: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        xBodyRotO: number;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        tentacleMovement: number;
        bodyArmorDropChance: number;
        levelCallback: $EntityInLevelCallback;
        oldTentacleMovement: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType_<$GlowSquid>, level: $Level_);
        get darkTicksRemaining(): number;
    }
    /**
     * @return null or the LivingEntity it was ignited by
     */
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $LivingEntityAccessor$1, $EquipmentEntity, $ChangeSubscriber$CountChangeSubscriber<any>, $EquipmentEntity$TickableEnchantmentTrackingEntity, $EquipmentEntity$EquipmentTrackingEntity, $LivingEntityAccessor$2, $DynamicLightSource, $LivingEntityAccessor$3, $LivingEntityKJS, $LivingEntityAccessor, $LivingEntityStickExtension, $LivingEntityMovementExtension {
        getAttributes(): $AttributeMap;
        getAttribute(attribute: $Holder_<$Attribute>): $AttributeInstance;
        /**
         * Called when the entity picks up an item.
         */
        take(entity: $Entity, amount: number): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBlocking(): boolean;
        /**
         * @deprecated
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        goDownInWater(): void;
        /**
         * @deprecated
         */
        jumpInLiquid(fluidTag: $TagKey_<$Fluid>): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getWaterSlowDown(): number;
        canStandOnFluid(fluidState: $FluidState): boolean;
        setItemInHand(hand: $InteractionHand_, stack: $ItemStack_): void;
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        hasItemInSlot(slot: $EquipmentSlot_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateSwingTime(): void;
        getArmorSlots(): $Iterable<$ItemStack>;
        getHandSlots(): $Iterable<$ItemStack>;
        getOffhandItem(): $ItemStack;
        getAllSlots(): $Iterable<$ItemStack>;
        /**
         * Renders broken item particles using the given ItemStack
         */
        verifyEquippedItem(stack: $ItemStack_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playBlockFallSound(): void;
        getHurtSound(damageSource: $DamageSource_): $SoundEvent;
        getDrinkingSound(stack: $ItemStack_): $SoundEvent;
        getEatingSound(stack: $ItemStack_): $SoundEvent;
        getFallSounds(): $LivingEntity$Fallsounds;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        onClimbable(): boolean;
        setHealth(yaw: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tickDeath(): void;
        getBrain(): $Brain<never>;
        makeBrain(dynamic: $Dynamic<never>): $Brain<never>;
        addEffect(effectInstance: $MobEffectInstance): boolean;
        addEffect(effectInstance: $MobEffectInstance, entity: $Entity | null): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBaby(): boolean;
        canAttack(target: $LivingEntity): boolean;
        canAttack(livingentity: $LivingEntity, condition: $TargetingConditions): boolean;
        getEffect(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHealth(): number;
        hasEffect(effect: $Holder_<$MobEffect>): boolean;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        hurtHelmet(damageSource: $DamageSource_, damageAmount: number): void;
        /**
         * Called when the mob's health reaches 0.
         */
        die(damageSource: $DamageSource_): void;
        knockback(strength: number, arg1: number, x: number): void;
        setSpeed(yaw: number): void;
        makeSound(sound: $SoundEvent_ | null): void;
        heal(yaw: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHurtDir(): number;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        hurtArmor(damageSource: $DamageSource_, damageAmount: number): void;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getHitbox(): $AABB;
        canUseSlot(slot: $EquipmentSlot_): boolean;
        isHolding(item: $Item_): boolean;
        isHolding(predicate: $Predicate_<$ItemStack>): boolean;
        tickRidden(player: $Player, travelVector: $Vec3_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSpeed(): number;
        travel(travelVector: $Vec3_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isImmobile(): boolean;
        doPush(vehicle: $Entity): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        aiStep(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        attackable(): boolean;
        eat(level: $Level_, food: $ItemStack_, foodProperties: $FoodProperties_): $ItemStack;
        eat(level: $Level_, food: $ItemStack_): $ItemStack;
        getMainArm(): $HumanoidArm;
        getUseItem(): $ItemStack;
        wrapOperation$dpj000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        handler$boo000$fabric_entity_events_v1$injectElytraTick(arg0: $CallbackInfo): void;
        redirect$hfi000$sable$maxAltitude$mixinextras$bridge$432(arg0: number, arg1: number, arg2: $LocalRef<any>): number;
        getLootTable(): $ResourceKey<$LootTable>;
        getKnockback(attacker: $Entity, damageSource: $DamageSource_): number;
        getLootTableSeed(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getVoicePitch(): number;
        indicateDamage(xDistance: number, arg1: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSoundVolume(): number;
        getDeathSound(): $SoundEvent;
        /**
         * Called when the mob's health reaches 0.
         */
        playHurtSound(damageSource: $DamageSource_): void;
        blockedByShield(attacker: $LivingEntity): void;
        /**
         * 1.8.9
         */
        getCombatTracker(): $CombatTracker;
        getKillCredit(): $LivingEntity;
        dropAllDeathLoot(level: $ServerLevel, damageSource: $DamageSource_): void;
        createWitherRose(attacker: $LivingEntity | null): void;
        dropFromLootTable(damageSource: $DamageSource_, hitByPlayer: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        dropEquipment(): void;
        dropExperience(vehicle: $Entity | null): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasInfiniteMaterials(): boolean;
        redirect$boj000$fabric_entity_events_v1$beforeEntityKilled(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): boolean;
        wrapMethod$ima000$petrolpark$effectsCancelHurtSound(arg0: $DamageSource_, arg1: $Operation_<any>): void;
        wrapMethod$ima000$petrolpark$effectsForgetDamageSource(arg0: $Operation_<any>): $DamageSource;
        handler$zzp000$openpartiesandclaims$onDropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        wrapWithCondition$ima000$petrolpark$effectsCancelLimbSwing(arg0: $WalkAnimationState, arg1: number): boolean;
        wrapWithCondition$ima000$petrolpark$effectsCancelHurtSound(arg0: $LivingEntity, arg1: $SoundEvent_, arg2: number, arg3: number): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArrowCount(): number;
        setArrowCount(ticks: number): void;
        doHurtEquipment(damageSource: $DamageSource_, damageAmount: number, ...slots: $EquipmentSlot_[]): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArmorValue(): number;
        getAttributeValue(attribute: $Holder_<$Attribute>): number;
        wrapMethod$ima000$petrolpark$effectsForgetAttacker(arg0: $LivingEntity, arg1: $Operation_<any>): void;
        handler$zzp000$openpartiesandclaims$onDiePre(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        wrapOperation$hfi000$sable$onDismountVehicle(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        handler$zzp000$openpartiesandclaims$onDiePost(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$zzp000$openpartiesandclaims$onAddEffect(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfoReturnable<any>): void;
        static resetForwardDirectionOfRelativePortalPosition(deltaMovement: $Vec3_): $Vec3;
        handler$bdj000$quickrightclick$stopSleeping(arg0: $CallbackInfo): void;
        internalSetAbsorptionAmount(yaw: number): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSuppressingSlidingDownLadder(): boolean;
        getFluidFallingAdjustedMovement(gravity: number, arg1: boolean, isFalling: $Vec3_): $Vec3;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxHeadRotationRelativeToBody(): number;
        wouldNotSuffocateAtTargetPose(pose: $Pose_): boolean;
        lithium$onEquipmentReplaced(arg0: $ItemStack_, arg1: $ItemStack_): void;
        redirect$hfi000$sable$maxAltitude(arg0: number, arg1: number, arg2: $Entity): number;
        dismountVehicle(vehicle: $Entity): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpPower(): number;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getJumpPower(partialTick: number): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        jumpFromGround(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpBoostPower(): number;
        setStingerCount(ticks: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getStingerCount(): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getBaseExperienceReward(): number;
        setLastHurtByPlayer(player: $Player | null): void;
        hurtCurrentlyUsedShield(yaw: number): void;
        getVisibilityPercent(lookingEntity: $Entity | null): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtMobTimestamp(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeEffectParticles(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isInvertedHealAndHarm(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAlwaysExperienceDropper(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDiscardFriction(): boolean;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        sendEffectToPassengers(effectInstance: $MobEffectInstance): void;
        /**
         * Returns `true` if all the potion effects in the specified collection are ambient.
         */
        static areAllEffectsAmbient(potionEffects: $Collection_<$MobEffectInstance>): boolean;
        /**
         * @deprecated
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBreatheUnderwater(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getArmorCoverPercentage(): number;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        setAbsorptionAmount(yaw: number): void;
        isDamageSourceBlocked(damageSource: $DamageSource_): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtByMobTimestamp(): number;
        triggerOnDeathMobEffects(reason: $Entity$RemovalReason_): void;
        getExperienceReward(level: $ServerLevel, killer: $Entity | null): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateInvisibilityStatus(): void;
        removeEffectNoUpdate(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDropExperience(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAbsorptionAmount(): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getUseItemRemainingTicks(): number;
        triggerItemUseEffects(stack: $ItemStack_, amount: number): void;
        dropCustomDeathLoot(level: $ServerLevel, damageSource: $DamageSource_, recentlyHit: boolean): void;
        getLastDamageSource(): $DamageSource;
        collectEquipmentChanges(): $Map<$EquipmentSlot, $ItemStack>;
        doAutoAttackOnTouch(attacker: $LivingEntity): void;
        updateWalkAnimation(yaw: number): void;
        calculateEntityAnimation(includeHeight: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        detectEquipmentUpdates(): void;
        lerpHeadRotationStep(lerpHeadSteps: number, lerpYHeadRot: number): void;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        calculateFallDamage(fallDistance: number, damageMultiplier: number): number;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getCurrentSwingDuration(): number;
        getLastClimbablePos(): ($BlockPos) | undefined;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        /**
         * Reduces damage, depending on armor
         */
        getDamageAfterArmorAbsorb(damageSource: $DamageSource_, damageAmount: number): number;
        equipmentHasChanged(oldItem: $ItemStack_, newItem: $ItemStack_): boolean;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        /**
         * Reduces damage, depending on armor
         */
        getDamageAfterMagicAbsorb(damageSource: $DamageSource_, damageAmount: number): number;
        checkAutoSpinAttack(boundingBoxBeforeSpin: $AABB_, boundingBoxAfterSpin: $AABB_): void;
        getComfortableFallDistance(health: number): number;
        setLivingEntityFlag(key: number, value: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateEffectVisibility(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        wasExperienceConsumed(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        sable$getLerpTarget(): $Vec3;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        lithium$onEquipmentChanged(): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        shouldRiderFaceForward(player: $Player): boolean;
        lithium$forceUnsubscribe(stack: $ItemStack_, amount: number): void;
        sable$getInheritedVelocity(): $Vector3d;
        /**
         * Called when a record starts or stops playing. Used to make parrots start or stop partying.
         */
        setRecordPlayingNearby(jukebox: $BlockPos_, partyParrot: boolean): void;
        getLocalBoundsForPose(pose: $Pose_): $AABB;
        getEquipmentSlotForItem(stack: $ItemStack_): $EquipmentSlot;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAffectedByPotions(): boolean;
        onEquippedItemBroken(item: $Item_, slot: $EquipmentSlot_): void;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        setLastHurtByMob(attacker: $LivingEntity | null): void;
        getLastAttacker(): $LivingEntity;
        doesEmitEquipEvent(slot: $EquipmentSlot_): boolean;
        onEquipItem(slot: $EquipmentSlot_, oldItem: $ItemStack_, newItem: $ItemStack_): void;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getSwimAmount(partialTick: number): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeFrost(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDropLoot(): boolean;
        /**
         * Decrements the entity's air supply when underwater
         */
        decreaseAirSupply(currentAir: number): number;
        setLastHurtMob(vehicle: $Entity): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryAddFrost(): void;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        sanitizeScale(partialTick: number): number;
        onChangedBlock(level: $ServerLevel, pos: $BlockPos_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tickEffects(): void;
        getSleepingPos(): ($BlockPos) | undefined;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAffectedByFluids(): boolean;
        /**
         * Decrements the entity's air supply when underwater
         */
        increaseAirSupply(currentAir: number): number;
        getLastHurtByMob(): $LivingEntity;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getNoActionTime(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAgeScale(): number;
        setNoActionTime(ticks: number): void;
        setDiscardFriction(includeHeight: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasLandedInLiquid(): boolean;
        getLastHurtMob(): $LivingEntity;
        onEffectUpdated(effectInstance: $MobEffectInstance, forced: boolean, entity: $Entity | null): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        removeAllEffects(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopSleeping(): void;
        onEffectRemoved(effectInstance: $MobEffectInstance): void;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        setSleepingPos(pos: $BlockPos_): void;
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxAbsorption(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenByAnyone(): boolean;
        onEffectAdded(instance: $MobEffectInstance, entity: $Entity | null): void;
        blockUsingShield(attacker: $LivingEntity): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenAsEnemy(): boolean;
        removeEffect(effect: $Holder_<$MobEffect>): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isFallFlying(): boolean;
        /**
         * @deprecated
         */
        canBeAffected(effectInstance: $MobEffectInstance): boolean;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        actuallyHurt(damageSource: $DamageSource_, damageAmount: number): void;
        brainProvider(): $Brain$Provider<never>;
        canAttackType(entityType: $EntityType_<never>): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        skipDropExperience(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxHealth(): number;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getAttackAnim(partialTick: number): number;
        getRiddenSpeed(player: $Player): number;
        getUsedItemHand(): $InteractionHand;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        pushEntities(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSensitiveToWater(): boolean;
        getRiddenInput(player: $Player, travelVector: $Vec3_): $Vec3;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAutoSpinAttack(): boolean;
        onItemPickup(itemEntity: $ItemEntity): void;
        hasLineOfSight(target: $Entity): boolean;
        /**
         * Renders broken item particles using the given ItemStack
         */
        updateUsingItem(stack: $ItemStack_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onLeaveCombat(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopUsingItem(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onEnterCombat(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getFlyingSpeed(): number;
        tickHeadTurn(yRot: number, animStep: number): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        completeUsingItem(): void;
        startUsingItem(hand: $InteractionHand_): void;
        doHurtTarget(target: $Entity): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        serverAiStep(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearSleepingPos(): void;
        getProjectile(weaponStack: $ItemStack_): $ItemStack;
        static getSlotForHand(hand: $InteractionHand_): $EquipmentSlot;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksUsingItem(): number;
        randomTeleport(x: number, arg1: number, y: number, arg3: boolean): boolean;
        startSleeping(pos: $BlockPos_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canDisableShield(): boolean;
        getDismountPoses(): $ImmutableList<$Pose>;
        canTakeItem(stack: $ItemStack_): boolean;
        /**
         * Gets the `Direction` for the camera if this entity is sleeping.
         */
        getBedOrientation(): $Direction;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getFallFlyingTicks(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$setupLerp(): void;
        lithium$notify(stack: $ItemStack_, amount: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$applyLerp(): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        handler$zzp000$openpartiesandclaims$onDie(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        lithium$notifyAfterEnchantmentChange(stack: $ItemStack_, amount: number): void;
        handler$hfp000$sable$beforeAnimation(arg0: $Vec3_, arg1: $CallbackInfo): void;
        handler$heb001$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        handler$boa000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        handler$cei000$lithium$handleStopRiding(arg0: $CallbackInfo): void;
        lithium$updateHasTickableEnchantments(arg0: $ItemStack_, arg1: $ItemStack_): void;
        handler$hfi000$sable$jumpFromGround(arg0: $CallbackInfo): void;
        handleRelativeFrictionAndCalculateMovement(deltaMovement: $Vec3_, friction: number): $Vec3;
        forceAddEffect(instance: $MobEffectInstance, entity: $Entity | null): void;
        swing(hand: $InteractionHand_, updateSelf: boolean): void;
        swing(hand: $InteractionHand_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSleeping(): boolean;
        getMainHandItem(): $ItemStack;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isDeadOrDying(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUsingItem(): boolean;
        getItemInHand(hand: $InteractionHand_): $ItemStack;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        releaseUsingItem(): void;
        wrapWithCondition$ima000$petrolpark$effectsCancelLimbSwingClient(arg0: $WalkAnimationState, arg1: number): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getScale(): number;
        self(): $LivingEntity;
        /**
         * Performs what to do when an entity attempts to go down or "sink" in a fluid.
         */
        sinkInFluid(type: $FluidType_): void;
        /**
         * Executes in `LivingEntity#hurt(DamageSource, float)` after all damage and
         * effects have applied. Overriding this method is preferred over overriding the
         * hurt method in custom entities where special behavior is desired after vanilla
         * logic.
         */
        onDamageTaken(damageContainer: $DamageContainer): void;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        moveInFluid(state: $FluidState, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canDrownInFluidType(type: $FluidType_): boolean;
        /**
         * Performs what to do when an entity attempts to go down or "sink" in a fluid.
         */
        jumpInFluid(type: $FluidType_): void;
        swing(hand: $InteractionHand_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        swing(): void;
        setDefaultMovementSpeed(renderDistWeight: number): void;
        getDefaultMovementSpeed(): number;
        setMovementSpeedAddition(renderDistWeight: number): void;
        getMainHandItem(): $ItemStack;
        getHeadArmorItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        getChestArmorItem(): $ItemStack;
        getLegsArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setFeetArmorItem(stack: $ItemStack_): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setHeadArmorItem(stack: $ItemStack_): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setChestArmorItem(stack: $ItemStack_): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setLegsArmorItem(stack: $ItemStack_): void;
        getTotalMovementSpeed(): number;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setMainHandItem(stack: $ItemStack_): void;
        getReachDistance(): number;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        canEntityBeSeen(target: $LivingEntity): boolean;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        getOffHandItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setOffHandItem(stack: $ItemStack_): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        damageHeldItem(): void;
        rayTrace(): $KubeRayTraceResult;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(yaw: number): void;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUndead(): boolean;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setHeldItem(hand: $InteractionHand_, stack: $ItemStack_): void;
        setDefaultMovementSpeedMultiplier(renderDistWeight: number): void;
        setTotalMovementSpeedMultiplier(renderDistWeight: number): void;
        setJumping(includeHeight: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isJumping(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        getJumping(): boolean;
        create$callSpawnItemParticles(stack: $ItemStack_, amount: number): void;
        callCalculateFallDamage(fallDistance: number, damageMultiplier: number): number;
        callGetFallDamageSound(height: number): $SoundEvent;
        getLastArmorItemStacks(): $NonNullList<$ItemStack>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        callUpdatingUsingItem(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        callPlayBlockFallSound(): void;
        callSetLivingEntityFlag(key: number, value: boolean): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSwimAmount(): number;
        setNoJumpDelay(ticks: number): void;
        callGetHurtSound(damageSource: $DamageSource_): $SoundEvent;
        callGetDeathSound(): $SoundEvent;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getNoJumpDelay(): number;
        setSwimAmount(yaw: number): void;
        setSwimAmountO(yaw: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSwimAmountO(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        callGetVoicePitch(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        callGetSoundVolume(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        lastHurtByPlayer: $Player;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType_<$LivingEntity>, level: $Level_);
        get attributes(): $AttributeMap;
        get blocking(): boolean;
        get waterSlowDown(): number;
        get armorSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get offhandItem(): $ItemStack;
        get allSlots(): $Iterable<$ItemStack>;
        get fallSounds(): $LivingEntity$Fallsounds;
        get baby(): boolean;
        get hurtDir(): number;
        get hitbox(): $AABB;
        get immobile(): boolean;
        get mainArm(): $HumanoidArm;
        get lootTable(): $ResourceKey<$LootTable>;
        get lootTableSeed(): number;
        get voicePitch(): number;
        get soundVolume(): number;
        get deathSound(): $SoundEvent;
        get combatTracker(): $CombatTracker;
        get killCredit(): $LivingEntity;
        get armorValue(): number;
        get suppressingSlidingDownLadder(): boolean;
        get maxHeadRotationRelativeToBody(): number;
        get jumpBoostPower(): number;
        get baseExperienceReward(): number;
        get lastHurtMobTimestamp(): number;
        get invertedHealAndHarm(): boolean;
        get alwaysExperienceDropper(): boolean;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get armorCoverPercentage(): number;
        get lastHurtByMobTimestamp(): number;
        get useItemRemainingTicks(): number;
        get lastDamageSource(): $DamageSource;
        get currentSwingDuration(): number;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get affectedByPotions(): boolean;
        get lastAttacker(): $LivingEntity;
        get affectedByFluids(): boolean;
        get ageScale(): number;
        set discardFriction(value: boolean);
        get activeEffects(): $Collection<$MobEffectInstance>;
        get maxAbsorption(): number;
        get fallFlying(): boolean;
        get usedItemHand(): $InteractionHand;
        get sensitiveToWater(): boolean;
        get autoSpinAttack(): boolean;
        get flyingSpeed(): number;
        get ticksUsingItem(): number;
        get dismountPoses(): $ImmutableList<$Pose>;
        get bedOrientation(): $Direction;
        get fallFlyingTicks(): number;
        get sleeping(): boolean;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        get scale(): number;
        set movementSpeedAddition(value: number);
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
        get reachDistance(): number;
        get undead(): boolean;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get lastArmorItemStacks(): $NonNullList<$ItemStack>;
    }
    export class $SpawnGroupData {
    }
    export interface $SpawnGroupData {
    }
    export class $Display$TextDisplay$CachedInfo extends $Record {
        lines(): $List<$Display$TextDisplay$CachedLine>;
        width(): number;
        constructor(arg0: $List_<$Display$TextDisplay$CachedLine_>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedInfo}.
     */
    export type $Display$TextDisplay$CachedInfo_ = { lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number,  } | [lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number, ];
    export class $EntityAttachments$Builder {
        build(width: number, height: number): $EntityAttachments;
        attach(attachment: $EntityAttachment_, poas: $Vec3_): $EntityAttachments$Builder;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityAttachments$Builder;
        constructor();
    }
    export class $EntityEvent {
        static STOP_ATTACKING: number;
        static REDUCED_DEBUG_INFO: number;
        static OFFER_FLOWER: number;
        static MAINHAND_BREAK: number;
        static DEATH: number;
        static DOLPHIN_LOOKING_FOR_TREASURE: number;
        static JUMP: number;
        static SHAKE_WETNESS: number;
        static SILVERFISH_MERGE_ANIM: number;
        static TRUSTING_SUCCEEDED: number;
        static HONEY_SLIDE: number;
        static HEAD_BREAK: number;
        static STOP_OFFER_FLOWER: number;
        static TRUSTING_FAILED: number;
        static EAT_GRASS: number;
        static TALISMAN_ACTIVATE: number;
        static TENDRILS_SHIVER: number;
        static SONIC_CHARGE: number;
        static OFFHAND_BREAK: number;
        static FEET_BREAK: number;
        static PERMISSION_LEVEL_GAMEMASTERS: number;
        static VILLAGER_ANGRY: number;
        static CANCEL_SHAKE_WETNESS: number;
        static LOVE_HEARTS: number;
        static ZOMBIE_CONVERTING: number;
        static PERMISSION_LEVEL_ALL: number;
        static POOF: number;
        static RAVAGER_STUNNED: number;
        static TELEPORT: number;
        static FISHING_ROD_REEL_IN: number;
        static ARMADILLO_PEEK: number;
        static SQUID_ANIM_SYNCH: number;
        static GUARDIAN_ATTACK_SOUND: number;
        static START_RAM: number;
        static VILLAGER_HAPPY: number;
        static SHIELD_DISABLED: number;
        static ARMORSTAND_WOBBLE: number;
        static IN_LOVE_HEARTS: number;
        static BODY_BREAK: number;
        static START_ATTACKING: number;
        static FIREWORKS_EXPLODE: number;
        static ATTACK_BLOCKED: number;
        static USE_ITEM_COMPLETE: number;
        static TAMING_FAILED: number;
        static SNIFFER_DIGGING_SOUND: number;
        static CHEST_BREAK: number;
        static END_RAM: number;
        static PERMISSION_LEVEL_ADMINS: number;
        static TAMING_SUCCEEDED: number;
        static FOX_EAT: number;
        static FULL_DEBUG_INFO: number;
        static PERMISSION_LEVEL_OWNERS: number;
        static LEGS_BREAK: number;
        static SWAP_HANDS: number;
        static PERMISSION_LEVEL_MODERATORS: number;
        static VILLAGER_SWEAT: number;
        static HONEY_JUMP: number;
        static WITCH_HAT_MAGIC: number;
        constructor();
    }
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$1, $CommandSource, $ScoreHolder, $IEntityExtension, $EntityExtension$2, $BalmEntity, $EntityAccessor$2, $MotionAwareEntity, $LeashableCallback, $AccessorEntity$1, $ExtensionHolder, $EntityAccessor$1, $EntityAccessor$5, $EntityExtension, $EntityAccessor, $Cullable, $AccessorEntity, $DynamicLightSource, $EMFEntity, $ETFEntity, $EntityAccessor$3, $EntityKJS, $EntityAccessor$4, $EntityStickExtension, $EntityExtension$1, $EntityExtension$3, $SableBeyondEntityMassNbtAccess, $EntityAccess, $IEntityDataHolder, $EntityMovementExtension, $IEntity {
        getName(): $Component;
        remove(reason: $Entity$RemovalReason_): void;
        load(compound: $CompoundTag_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        position(): $Vec3;
        getTypeName(): $Component;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlive(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getId(): number;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        save(compound: $CompoundTag_): boolean;
        getEntityType(): $EntityType<never>;
        getSlot(slot: number): $SlotAccess;
        pick(hitDistance: number, arg1: number, partialTicks: boolean): $HitResult;
        is(passenger: $Entity): boolean;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        collide(vec: $Vec3_): $Vec3;
        /**
         * Transforms the entity's current yaw with the given Rotation and returns it. This does not have a side-effect.
         */
        rotate(transformRotation: $Rotation_): number;
        push(passenger: $Entity): void;
        addMotion(x: number, arg1: number, y: number): void;
        push(addend: $Vec3_): void;
        getDisplayName(): $Component;
        move(type: $MoverType_, pos: $Vec3_): void;
        /**
         * Gets called every tick from main Entity class
         */
        tick(): void;
        isSupportedBy(pos: $BlockPos_): boolean;
        getExtension(key: $Object, type: $Class<any>): $Object;
        setExtension(key: $Object, value: $Object): void;
        setLevel(level: $Level_): void;
        getDimensions(pose: $Pose_): $EntityDimensions;
        getPosition(partialTicks: number): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        kill(): void;
        addDeltaMovement(addend: $Vec3_): void;
        getDefaultGravity(): number;
        /**
         * Gets called every tick from main Entity class
         */
        onBelowWorld(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFreezing(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSprint(): boolean;
        emf$getX(): number;
        emf$getY(): number;
        emf$prevX(): number;
        emf$getZ(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isWet(): boolean;
        emf$prevZ(): number;
        emf$getYaw(): number;
        emf$age(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCulled(): boolean;
        emf$prevY(): number;
        setCulled(downwards: boolean): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getMassNbt(): $CompoundTag;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxFallDistance(): number;
        causeFallDamage(fallDistance: number, multiplier: number, source: $DamageSource_): boolean;
        animateHurt(yaw: number): void;
        deflection(projectile: $Projectile): $ProjectileDeflection;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLiquid(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWater(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        clearFire(): void;
        /**
         * Gets called every tick from main Entity class
         */
        baseTick(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWall(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        fireImmune(): boolean;
        setPos(addend: $Vec3_): void;
        setPos(x: number, arg1: number, y: number): void;
        getRandomX(scale: number): number;
        getRandomY(): number;
        getRandomZ(scale: number): number;
        getRandom(): $RandomSource;
        gameEvent(gameEvent: $Holder_<$GameEvent>, entity: $Entity | null): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDiscrete(): boolean;
        playSound(sound: $SoundEvent_): void;
        playSound(sound: $SoundEvent_, volume: number, pitch: number): void;
        setPose(pose: $Pose_): void;
        /**
         * Gets called every tick from main Entity class
         */
        markHurt(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onGround(): boolean;
        /**
         * Get entity this is riding
         */
        getVehicle(): $Entity;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        getGravity(): number;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        isFree(x: number, arg1: number, y: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLava(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        stopRiding(): void;
        lerpTo(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number): void;
        lerpHeadTo(yaw: number, pitch: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        rideTick(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canFreeze(): boolean;
        getEyeY(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPickable(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPushable(): boolean;
        hasPose(pose: $Pose_): boolean;
        getPose(): $Pose;
        maxUpStep(): number;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        absMoveTo(x: number, arg1: number, y: number, arg3: number, z: number): void;
        absMoveTo(x: number, arg1: number, y: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        revive(): void;
        getOnPos(yOffset: number): $BlockPos;
        getOnPos(): $BlockPos;
        setRot(yRot: number, xRot: number): void;
        /**
         * Checks if this `Entity` can trample a `Block`.
         */
        canTrample(state: $BlockState_, pos: $BlockPos_, fallDistance: number): boolean;
        dismountTo(x: number, arg1: number, y: number): void;
        getTeam(): $PlayerTeam;
        /**
         * Returns whether this Entity is on the given scoreboard team.
         */
        isAlliedTo(team: $Team): boolean;
        isOnSameTeam(passenger: $Entity): boolean;
        spawnAtLocation(stack: $ItemStack_): $ItemEntity;
        /**
         * Drops an item at the position of the entity.
         */
        spawnAtLocation(stack: $ItemStack_, offsetY: number): $ItemEntity;
        getWeaponItem(): $ItemStack;
        setMotion(x: number, arg1: number, y: number): void;
        setDeltaMovement(addend: $Vec3_): void;
        getYHeadRot(): number;
        awardKillScore(killed: $Entity, scoreValue: number, source: $DamageSource_): void;
        captureDrops(): $Collection<$ItemEntity>;
        captureDrops(captureDrops: $Collection_<$ItemEntity> | null): $Collection<$ItemEntity>;
        setUUID(uniqueId: $UUID_): void;
        handler$flg000$collective$Entity_load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$hfg000$sable$onPositionRider(arg0: $Entity, arg1: $CallbackInfo): void;
        moveTo(addend: $Vec3_): void;
        moveTo(pos: $Vec3_, yRot: number, xRot: number): void;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, arg1: number, y: number, arg3: number, z: number): void;
        moveToBlockPos(pos: $BlockPos_, yRot: number, xRot: number): void;
        moveTo(x: number, arg1: number, y: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        discard(): void;
        setId(ticks: number): void;
        handler$hdp000$sable$checkInsideBlocks(arg0: $CallbackInfo): void;
        handler$hjd000$sable$calculateViewVector(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        wrapOperation$hio000$sable$inWaterCheck(arg0: $Entity, arg1: boolean, arg2: $Operation_<any>): void;
        handler$ibg000$sable$subLevelFluidOnEyes(arg0: $CallbackInfo): void;
        redirect$hfg000$sable$fixPassengerSaving(arg0: $CompoundTag_, arg1: string, arg2: $Tag_): $Tag;
        modifyReturnValue$jmj000$create_sa$create$onFireImmune(allowPassengers: boolean): boolean;
        handler$zzh000$openpartiesandclaims$onIsInvulnerableTo(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hio000$sable$updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<any>, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        static setViewScale(renderDistWeight: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallyCrawling(): boolean;
        onAboveBubbleCol(downwards: boolean): void;
        createHoverEvent(): $HoverEvent;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        isInvisibleTo(player: $Player): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canControlVehicle(): boolean;
        static getViewScale(): number;
        teleportRelative(x: number, arg1: number, y: number): void;
        restoreFrom(passenger: $Entity): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getPermissionLevel(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAttackable(): boolean;
        /**
         * Returns the string that identifies this Entity's class
         */
        getScoreboardName(): string;
        ignoreExplosion(explosion: $Explosion): boolean;
        setSwimming(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onlyOpCanSetNbt(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        getLeashOffset(partialTicks: number): $Vec3;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        startSeenByPlayer(serverPlayer: $ServerPlayer): void;
        /**
         * @deprecated
         * Gets called every tick from main Entity class
         */
        fixupDimensions(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsFailure(): boolean;
        makeStuckInBlock(state: $BlockState_, motionMultiplier: $Vec3_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldInformAdmins(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        trackingPosition(): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        checkDespawn(): void;
        setIsInPowderSnow(downwards: boolean): void;
        changeDimension(transition: $DimensionTransition_): $Entity;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        hasPermissions(flag: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsSuccess(): boolean;
        onExplosionHit(passenger: $Entity | null): void;
        getRemovalReason(): $Entity$RemovalReason;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        stopSeenByPlayer(serverPlayer: $ServerPlayer): void;
        setShiftKeyDown(downwards: boolean): void;
        placePortalTicket(pos: $BlockPos_): void;
        shouldBlockExplode(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, explosionPower: number): boolean;
        broadcastToPlayer(player: $ServerPlayer): boolean;
        setInvulnerable(downwards: boolean): void;
        copyPosition(passenger: $Entity): void;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getMotionDirection(): $Direction;
        /**
         * Get entity this is riding
         */
        getRootVehicle(): $Entity;
        getAddEntityPacket(entity: $ServerEntity): $Packet<$ClientGamePacketListener>;
        setForgeBalmData(compound: $CompoundTag_): void;
        setFabricBalmData(compound: $CompoundTag_): void;
        veil$addEmitter(arg0: $ParticleEmitter): void;
        static collideBoundingBox(entity: $Entity, vec: $Vec3_, collisionBox: $AABB_, level: $Level_, potentialHits: $List_<any>): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isForcedVisible(): boolean;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getFabricBalmData(): $CompoundTag;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getForgeBalmData(): $CompoundTag;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        veil$getEmitters(): $List<any>;
        getFusionModel(layerIndex: number): $Triple<any, any, any>;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getKnownSpeed(): $Vec3;
        setFusionModel(layerIndex: number, model: $Triple_<any, any, any>): void;
        setFluidTypeHeight(arg0: $FluidType_, arg1: number): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getKnownMovement(): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        unsetRemoved(): void;
        setOutOfCamera(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOutOfCamera(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlwaysTicking(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        computeSpeed(): void;
        mayInteract(level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldBeSaved(): boolean;
        emf$getPitch(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isSneaking(): boolean;
        setXaero_OPAC_data(arg0: $EntityData): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isInvisible(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isGlowing(): boolean;
        emf$prevPitch(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isOnGround(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$hasVehicle(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$hasPassengers(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isSprinting(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isOnFire(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isInLava(): boolean;
        emf$getVariableMap(): $Map<any, any>;
        /**
         * Returns the string that identifies this Entity's class
         */
        emf$getTypeString(): string;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isAlive(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        emf$getVelocity(): $Vec3;
        sable$setPosField(addend: $Vec3_): void;
        getXaero_OPAC_data(): $EntityData;
        sable$getTrackingSubLevel(): $SubLevel;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        handler$ill000$petrolpark$postEntityFallOnEvent(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo, arg3: $BlockPos_, arg4: $BlockState_): void;
        wrapOperation$hfn000$sable$updateEntityAfterFallOn(arg0: $Block_, arg1: $BlockGetter, arg2: $Entity, arg3: $Operation_<any>): void;
        handler$fbk000$sodiumdynamiclights$onRemove(ci: $CallbackInfo): void;
        wrapOperation$hio000$sable$occludeFluidOnEyes(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidState;
        static callCollideWithShapes$vanillabackport_$md$66668e$3(deltaMovement: $Vec3_, entityBB: $AABB_, shapes: $List_<any>): $Vec3;
        handler$zzh000$openpartiesandclaims$onHandlePortal(arg0: $CallbackInfo): void;
        handler$flg000$collective$Entity_saveWithoutId(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isControlledByLocalInstance(): boolean;
        getDismountLocationForPassenger(passenger: $LivingEntity): $Vec3;
        getPassengerAttachmentPoint(entity: $Entity, dimensions: $EntityDimensions_, partialTick: number): $Vec3;
        lerpPositionAndRotationStep(steps: number, targetX: number, arg2: number, targetY: number, arg4: number, targetZ: number): void;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        sdl$shouldUpdateDynamicLight(): boolean;
        getY(scale: number): number;
        getY(): number;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        canRide(passenger: $Entity): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getForward(): $Vec3;
        lerpMotion(x: number, arg1: number, y: number): void;
        thunderHit(level: $ServerLevel, lightning: $LightningBolt): void;
        nextStep(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVehicle(): boolean;
        turn(yRot: number, arg1: number): void;
        addTag(tag: string): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        unRide(): void;
        closerThan(entity: $Entity, distance: number): boolean;
        closerThan(entity: $Entity, horizontalDistance: number, arg2: number): boolean;
        setPosRaw(x: number, arg1: number, y: number): void;
        setRemoved(reason: $Entity$RemovalReason_): void;
        getTags(): $Set<string>;
        /**
         * Gets called every tick from main Entity class
         */
        lavaHurt(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnRails(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFlapping(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        onFlap(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSwimming(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldShowName(): boolean;
        setSprinting(downwards: boolean): void;
        /**
         * Transforms the entity's current yaw with the given Mirror and returns it. This does not have a side-effect.
         */
        mirror(transformMirror: $Mirror_): number;
        getPickRadius(): number;
        /**
         * Returns the Entity's pitch and yaw as a `Vec2`.
         */
        getRotationVector(): $Vec2;
        setAsInsidePortal(portal: $Portal_, pos: $BlockPos_): void;
        moveRelative(amount: number, relative: $Vec3_): void;
        /**
         * @deprecated
         */
        getFluidHeight(fluidTag: $TagKey_<$Fluid>): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnPortalCooldown(): boolean;
        igniteForSeconds(yaw: number): void;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        /**
         * Gets called every tick from main Entity class
         */
        onClientRemoval(): void;
        /**
         * Gets called every tick from main Entity class
         */
        handlePortal(): void;
        /**
         * Gets called every tick from main Entity class
         */
        setPortalCooldown(): void;
        setPortalCooldown(ticks: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        waterSwimSound(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCrouching(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        checkInsideBlocks(): void;
        setBoundingBox(bb: $AABB_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTeamColor(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFireImmuneTicks(): number;
        isColliding(pos: $BlockPos_, state: $BlockState_): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        ejectPassengers(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasGlowingTag(): boolean;
        getPositionCodec(): $VecDeltaCodec;
        getEntityData(): $SynchedEntityData;
        onPassengerTurned(passenger: $Entity): void;
        /**
         * Gets called every tick from main Entity class
         */
        checkBelowWorld(): void;
        /**
         * Gets called every tick from main Entity class
         */
        updateSwimming(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getPortalCooldown(): number;
        absRotateTo(yRot: number, xRot: number): void;
        canCollideWith(passenger: $Entity): boolean;
        setCustomName(component: $Component_ | null): void;
        playSwimSound(yaw: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        applyGravity(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dampensVibrations(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrRain(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeCollidedWith(): boolean;
        /**
         * Called by a player entity when they collide with an entity
         */
        playerTouch(player: $Player): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isNoGravity(): boolean;
        /**
         * @deprecated
         */
        isEyeInFluid(fluidTag: $TagKey_<$Fluid>): boolean;
        getBlockStateOn(): $BlockState;
        getUpVector(partialTicks: number): $Vec3;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        shouldRender(x: number, arg1: number, y: number): boolean;
        playStepSound(pos: $BlockPos_, state: $BlockState_): void;
        getSwimSplashSound(): $SoundEvent;
        setGlowing(downwards: boolean): void;
        /**
         * Gets called every tick from main Entity class
         */
        setOldPosAndRot(): void;
        getSwimSound(): $SoundEvent;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        saveAsPassenger(compound: $CompoundTag_): boolean;
        onInsideBlock(state: $BlockState_): void;
        /**
         * Returns a new NBTTagList filled with the specified floats
         */
        newFloatList(...numbers: number[]): $ListTag;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrBubble(): boolean;
        calculateUpVector(xRot: number, yRot: number): $Vec3;
        setAirSupply(ticks: number): void;
        /**
         * creates a NBT list from the array of doubles passed to this function
         */
        newDoubleList(...numbers: number[]): $ListTag;
        getViewXRot(partialTick: number): number;
        setNoGravity(downwards: boolean): void;
        canAddPassenger(passenger: $Entity): boolean;
        addPassenger(passenger: $Entity): void;
        /**
         * Gets called every tick from main Entity class
         */
        removeVehicle(): void;
        removePassenger(passenger: $Entity): void;
        positionRider(passenger: $Entity, callback: $Entity$MoveFunction_): void;
        positionRider(passenger: $Entity): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        showVehicleHealth(): boolean;
        /**
         * Get entity this is riding
         */
        getFirstPassenger(): $Entity;
        getAttachments(): $EntityAttachments;
        startRiding(passenger: $Entity): boolean;
        startRiding(vehicle: $Entity, force: boolean): boolean;
        hasPassenger(predicate: $Predicate_<$Entity>): boolean;
        hasPassenger(passenger: $Entity): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        setTimeout(): void;
        getBlockJumpFactor(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSprinting(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDescending(): boolean;
        lookAt(anchor: $EntityAnchorArgument$Anchor_, target: $Vec3_): void;
        handleDamageEvent(damageSource: $DamageSource_): void;
        /**
         * Handles an entity event received from a `ClientboundEntityEventPacket`.
         */
        handleEntityEvent(id: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isRemoved(): boolean;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        getBlockSpeedFactor(): number;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterRainOrBubble(): boolean;
        getRelativePortalPosition(axis: $Direction$Axis_, portal: $BlockUtil$FoundRectangle): $Vec3;
        getPassengerRidingPosition(entity: $Entity): $Vec3;
        getFluidJumpThreshold(): number;
        /**
         * Gets called every tick from main Entity class
         */
        checkSlowFallDistance(): void;
        /**
         * Returns the fluid that is on the entity's eyes.
         */
        getMaxHeightFluidType(): $FluidType;
        /**
         * Gets called every tick from main Entity class
         */
        tryCheckInsideBlocks(): void;
        syncPacketPositionCodec(x: number, arg1: number, y: number): void;
        calculateViewVector(xRot: number, yRot: number): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCustomNameVisible(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksRequiredToFreeze(): number;
        getControllingPassenger(): $LivingEntity;
        sable$setPlotPosition(addend: $Vec3_): void;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        sable$getInBlockStatePos(): $BlockPos;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        sable$vanillaCollide(vec: $Vec3_): $Vec3;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        sable$getPlotPosition(): $Vec3;
        onSyncedDataUpdated(key: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(dataValues: $List_<$SynchedEntityData$DataValue_<never>>): void;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBoxForCulling(): $AABB;
        getPreciseBodyRotation(partialTick: number): number;
        /**
         * @deprecated
         */
        getBlockStateOnLegacy(): $BlockState;
        /**
         * Gets called every tick from main Entity class
         */
        sdl$dynamicLightTick(): void;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        sdl$getDynamicLightLevel(): $Level;
        /**
         * Gets called every tick from main Entity class
         */
        sdl$resetDynamicLight(): void;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightZ(): number;
        sdl$getDynamicLightX(): number;
        createCommandSourceStack(): $CommandSourceStack;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getCommandSenderWorld(): $Level;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getDeltaMovement(): $Vec3;
        /**
         * Returns whether the fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>, forAllTypes: boolean): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInFluidType(): boolean;
        getSoundSource(): $SoundSource;
        getPercentFrozen(): number;
        checkFallDamage(y: number, arg1: boolean, onGround: $BlockState_, state: $BlockPos_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksFrozen(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxAirSupply(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getAirSupply(): number;
        /**
         * Gets called every tick from main Entity class
         */
        extinguish(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvulnerable(): boolean;
        /**
         * Returns whether this Entity is invulnerable to the given DamageSource.
         */
        isInvulnerableTo(source: $DamageSource_): boolean;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        getSharedFlag(flag: number): boolean;
        /**
         * Enable or disable an entity flag, see `#getEntityFlag` to read the known flags.
         */
        setSharedFlag(flag: number, set: boolean): void;
        /**
         * Returns the string that identifies this Entity's class
         */
        getStringUuid(): string;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvisible(): boolean;
        damageSources(): $DamageSources;
        defineSynchedData(builder: $SynchedEntityData$Builder): void;
        /**
         * Gets called every tick from main Entity class
         */
        reapplyPosition(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSilent(): boolean;
        setSilent(downwards: boolean): void;
        getLightProbePosition(partialTicks: number): $Vec3;
        etf$getScoreboardTeam(): $Team;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        etf$getOptifineVehicleId(): number;
        etf$getItemsEquipped(): $Iterable<any>;
        lerpTargetZ(): number;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        getFluidTypeHeight(type: $FluidType_): number;
        /**
         * Gets called every tick from main Entity class
         */
        refreshDimensions(): void;
        lerpTargetX(): number;
        lerpTargetY(): number;
        getViewYRot(partialTick: number): number;
        setYHeadRot(yaw: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPassenger(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFullyFrozen(): boolean;
        lerpTargetYRot(): number;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(yaw: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        resetFallDistance(): void;
        lerpTargetXRot(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallySwimming(): boolean;
        getInBlockState(): $BlockState;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isEffectiveAi(): boolean;
        setTicksFrozen(ticks: number): void;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        makeBoundingBox(): $AABB;
        igniteForTicks(ticks: number): void;
        recreateFromPacket(packet: $ClientboundAddEntityPacket): void;
        canUsePortal(allowPassengers: boolean): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isShiftKeyDown(): boolean;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        sdl$getLuminance(): number;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getForgePersistentData(): $CompoundTag;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAddedToLevel(): boolean;
        /**
         * Writes this entity, including passengers, to NBT, regardless as to whether it is removed or a passenger. Does **not** include the entity's type ID, so the NBT is insufficient to recreate the entity using `AnvilChunkLoader#readWorldEntity`. Use `#writeUnlessPassenger` for that purpose.
         */
        saveWithoutId(compound: $CompoundTag_): $CompoundTag;
        /**
         * Returns the fluid that is on the entity's eyes.
         */
        getEyeInFluidType(): $FluidType;
        /**
         * Returns the string that identifies this Entity's class
         */
        getEncodeId(): string;
        getPickResult(): $ItemStack;
        /**
         * Gets called every tick from main Entity class
         */
        onAddedToLevel(): void;
        /**
         * Gets called every tick from main Entity class
         */
        onRemovedFromLevel(): void;
        /**
         * @deprecated
         * Return whether this entity should be rendered as on fire.
         */
        isPushedByFluid(): boolean;
        killedEntity(level: $ServerLevel, entity: $LivingEntity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canStartSwimming(): boolean;
        getCustomName(): $Component;
        distanceToSqr(vec: $Vec3_): number;
        /**
         * Measures the **square** of a distance of entity to another entity.
         * Returns the squared distance to the entity.
         */
        distanceToEntitySqr(entity: $Entity): number;
        /**
         * Gets the squared distance to the position.
         */
        distanceToSqr(x: number, arg1: number, y: number): number;
        getEyePosition(partialTicks: number): $Vec3;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getEyePosition(): $Vec3;
        getViewVector(partialTicks: number): $Vec3;
        setOnGround(downwards: boolean): void;
        sendSystemMessage(component: $Component_): void;
        /**
         * Gets called every tick from main Entity class
         */
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        sodiumdynamiclights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        emf$isTouchingWater(): boolean;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        touchingUnloadedChunk(): boolean;
        getIndirectPassengers(): $Iterable<any>;
        getRopeHoldPosition(partialTicks: number): $Vec3;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getNeoForgeBalmData(): $CompoundTag;
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
        sable$setPosSuperRaw(addend: $Vec3_): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        collective_getStored(): $CompoundTag;
        collective_setStored(compound: $CompoundTag_): void;
        setNeoForgeBalmData(compound: $CompoundTag_): void;
        getEffectiveGravity(): number;
        getPistonPushReaction(): $PushReaction;
        getPassengersAndSelf(): $Stream<any>;
        /**
         * Gets called every tick from main Entity class
         */
        markFusionRecomputeModels(): void;
        /**
         * Get entity this is riding
         */
        getControlledVehicle(): $Entity;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        shouldFusionRecomputeModel(flag: number): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        processFlappingMovement(): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        setOnGroundWithMovement(onGround: boolean, movement: $Vec3_): void;
        setRemainingFireTicks(ticks: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getDimensionChangingDelay(): number;
        setSharedFlagOnFire(downwards: boolean): void;
        /**
         * Gets called every tick from main Entity class
         */
        processPortalCooldown(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getRemainingFireTicks(): number;
        maybeBackOffFromEdge(vec: $Vec3_, mover: $MoverType_): $Vec3;
        handler$bfl000$veil$remove(arg0: $CallbackInfo): void;
        isHorizontalCollisionMinor(deltaMovement: $Vec3_): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        spawnSprintParticle(): void;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        limitPistonMovement(vec: $Vec3_): $Vec3;
        checkSupportingBlock(onGround: boolean, movement: $Vec3_ | null): void;
        getMovementEmission(): $Entity$MovementEmission;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSpawnSprintParticle(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        repositionEntityAfterLoad(): boolean;
        getVehicleAttachmentPoint(entity: $Entity): $Vec3;
        canChangeDimensions(oldLevel: $Level_, newLevel: $Level_): boolean;
        onInsideBubbleColumn(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dismountsUnderwater(): boolean;
        skipAttackInteraction(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isIgnoringBlockTriggers(): boolean;
        /**
         * @deprecated
         * Return whether this entity should be rendered as on fire.
         */
        couldAcceptPassenger(): boolean;
        playMuffledStepSound(arg0: $BlockState_, arg1: $BlockPos_): void;
        playCombinationStepSounds(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSuppressingBounce(): boolean;
        moveTowardsClosestSpace(x: number, arg1: number, y: number): void;
        /**
         * Checks if the entity is in range to render.
         */
        shouldRenderAtSqrDistance(distance: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeHitByProjectile(): boolean;
        getHandHoldingItemAngle(item: $Item_): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        doWaterSplashEffect(): void;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getNearestViewDirection(): $Direction;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSteppingCarefully(): boolean;
        isPassengerOfSameVehicle(passenger: $Entity): boolean;
        adjustSpawnLocation(level: $ServerLevel, pos: $BlockPos_): $BlockPos;
        setCustomNameVisible(downwards: boolean): void;
        getSelfAndPassengers(): $Stream<any>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        displayFireAnimation(): boolean;
        hasIndirectPassenger(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasControllingPassenger(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        countPlayerPassengers(): number;
        handler$fbk004$sodiumdynamiclights$onTick(ci: $CallbackInfo): void;
        wrapOperation$hfn000$sable$moveInject(arg0: $Entity, arg1: boolean, arg2: $Vec3_, arg3: $Operation_<any>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        updateInWaterStateAndDoFluidPushing(): boolean;
        interact(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockY(): number;
        /**
         * Applies the given player interaction to this Entity.
         */
        interactAt(player: $Player, vec: $Vec3_, hand: $InteractionHand_): $InteractionResult;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockZ(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockX(): number;
        redirect$hfn000$sable$collideRedirect(arg0: $Entity, arg1: $Vec3_): $Vec3;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLookAngle(): $Vec3;
        blockPosition(): $BlockPos;
        registryAccess(): $RegistryAccess;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSpectator(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isUnderWater(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isGlowing(): boolean;
        chunkPosition(): $ChunkPos;
        getEyeHeight(pose: $Pose_): number;
        getEyeHeight(): number;
        setInvisible(downwards: boolean): void;
        getX(): number;
        getX(scale: number): number;
        getZ(scale: number): number;
        getZ(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasCustomName(): boolean;
        etf$getType(): $EntityType<any>;
        etf$getCustomName(): $Component;
        /**
         * Returns the distance to the entity.
         */
        etf$distanceTo(entity: $Entity): number;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        etf$getVelocity(): $Vec3;
        getBbHeight(): number;
        etf$getPose(): $Pose;
        /**
         * Returns the string that identifies this Entity's class
         */
        etf$getEntityKey(): string;
        etf$getUuid(): $UUID;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBox(): $AABB;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        etf$isBlockEntity(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        etf$canBeBright(): boolean;
        etf$getBlockPos(): $BlockPos;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        etf$getBlockY(): number;
        etf$getArmorItems(): $Iterable<any>;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        etf$getWorld(): $Level;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        etf$getOptifineId(): number;
        etf$getHandItems(): $Iterable<any>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        etf$hasCustomName(): boolean;
        getUuid(): $UUID;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnFire(): boolean;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        etf$getNbt(): $CompoundTag;
        getBbWidth(): number;
        handler$hea000$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        removeTag(tag: string): boolean;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getHorizontalFacing(): $Direction;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(fluidTag: $TagKey_<$Fluid>, motionScale: number): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        updateFluidHeightAndDoFluidPushing(): void;
        updateDynamicGameEventListener(listenerConsumer: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        static getDefaultPassengerAttachmentPoint(vehicle: $Entity, passenger: $Entity, attachments: $EntityAttachments): $Vec3;
        handler$hfg000$sable$onRidingTick(arg0: $CallbackInfo): void;
        handler$hfn000$sable$tickInject(arg0: $CallbackInfo): void;
        getSwimHighSpeedSplashSound(): $SoundEvent;
        handler$hfn000$sable$moveInject(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getPrimaryStepSoundBlockPos(pos: $BlockPos_): $BlockPos;
        handler$hfg000$sable$moveRelative(arg0: number, arg1: $Vec3_, arg2: $CallbackInfo): void;
        /**
         * Gets called every tick from main Entity class
         */
        playEntityOnFireExtinguishedSound(): void;
        static getCollisionHorizontalEscapeVector(vehicleWidth: number, arg1: number, passengerWidth: number): $Vec3;
        fudgePositionAfterSizeChange(dimensions: $EntityDimensions_): boolean;
        sable$setLastTrackingSubLevelID(uniqueId: $UUID_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasExactlyOnePlayerPassenger(): boolean;
        /**
         * Explosion resistance of a block relative to this entity
         */
        getBlockExplosionResistance(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, fluidState: $FluidState, explosionPower: number): number;
        sable$getLastTrackingSubLevelID(): $UUID;
        /**
         * Gets called every tick from main Entity class
         */
        removeAfterChangingDimensions(): void;
        /**
         * Returns the distance to the entity.
         */
        distanceTo(entity: $Entity): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        /**
         * Gets the individual sub parts that make up this entity.
         * 
         * The entities returned by this method are NOT saved to the world in nay way, they exist as an extension
         * of their host entity. The child entity does not track its server-side(or client-side) counterpart, and
         * the host entity is responsible for moving and managing these children.
         * 
         * Only used if `#isMultipartEntity()` returns true.
         * 
         * See `EnderDragon` for an example implementation.
         */
        getParts(): $PartEntity<never>[];
        /**
         * Returns how much the fluid should scale the damage done to a falling
         * entity when hitting the ground per tick.
         * 
         * Implementation: If the entity is in many fluids, the smallest modifier
         * is applied.
         */
        getFluidFallDistanceModifier(type: $FluidType_): number;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canHydrateInFluidType(type: $FluidType_): boolean;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        getFluidMotionScale(type: $FluidType_): number;
        /**
         * Returns whether the entity can ride in this vehicle under the fluid.
         */
        canBeRiddenUnderFluidType(type: $FluidType_, rider: $Entity): boolean;
        /**
         * Copies the serialized attachments from another entity to this entity.
         * 
         * This does not trigger syncing of the copied attachments.
         */
        copyAttachmentsFrom(other: $Entity, isDeath: boolean): void;
        /**
         * Returns a sound to play when a certain action is performed by the
         * entity in the fluid. If no sound is present, then the sound will be
         * `null`.
         */
        getSoundFromFluidType(type: $FluidType_, action: $SoundAction): $SoundEvent;
        /**
         * Returns whether any fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>): boolean;
        /**
         * Returns whether the entity is within the fluid type of the state.
         */
        isInFluidType(state: $FluidState): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isInFluidType(type: $FluidType_): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canFluidExtinguish(type: $FluidType_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldRiderSit(): boolean;
        /**
         * @deprecated
         * Deserialize from a compound tag.
         */
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $CompoundTag_): void;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isEyeInFluidType(type: $FluidType_): boolean;
        /**
         * Returns The classification of this entity
         */
        getClassification(forSpawnCount: boolean): $MobCategory;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isPushedByFluid(type: $FluidType_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canRiderInteract(): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canSwimInFluidType(type: $FluidType_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isMultipartEntity(): boolean;
        /**
         * Sends the pairing data to the client.
         */
        sendPairingData(serverPlayer: $ServerPlayer, bundleBuilder: $Consumer_<$CustomPacketPayload>): void;
        /**
         * Called when a user uses the creative pick block button on this entity.
         */
        getPickedResult(target: $HitResult): $ItemStack;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getHeadLookAngle(): $Vec3;
        vb$whenLeashedTo(passenger: $Entity): void;
        vb$notifyLeashHolder(leashee: $Leashable): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        vb$supportsQuadLeash(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        vb$onElasticLeashPull(): void;
        vb$leashElasticDistance(): number;
        vb$leashSnapDistance(): number;
        vb$getQuadLeashOffsets(): $Vec3[];
        vb$getQuadLeashHolderOffsets(): $Vec3[];
        /**
         * Return whether this entity should be rendered as on fire.
         */
        vb$supportsQuadLeashAsHolder(): boolean;
        sdl$setDynamicLightEnabled(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        sdl$isDynamicLightEnabled(): boolean;
        etf$getETFRenderState(): $ETFEntityRenderState;
        setX(renderDistWeight: number): void;
        /**
         * Checks if the entity is an item entity.
         * Return whether this entity should be rendered as on fire.
         */
        isItem(): this is $ItemEntity;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getNbt(): $CompoundTag;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         * Called when the entity is attacked.
         */
        attack(source: $DamageSource_, amount: number): boolean;
        setNbt(compound: $CompoundTag_): void;
        /**
         * Gets called every tick from main Entity class
         */
        spawn(): void;
        setZ(renderDistWeight: number): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         * Return whether this entity should be rendered as on fire.
         */
        isSelf(): this is LocalPlayer;
        setY(renderDistWeight: number): void;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(component: $Component_): void;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(tag: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         * Return whether this entity should be rendered as on fire.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, y: number, y: number, yaw: number, z: number): void;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         * Return whether this entity should be rendered as on fire.
         */
        isPeacefulCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is an ambient creature.
         * Return whether this entity should be rendered as on fire.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a water creature.
         * Return whether this entity should be rendered as on fire.
         */
        isWaterCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        /**
         * Checks if the entity is a `LivingEntity`.
         * Return whether this entity should be rendered as on fire.
         */
        isLiving(): this is $LivingEntity;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        getMotionZ(): number;
        getScriptType(): $ScriptType;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        teleportTo(x: number, y: number, y: number, yaw: number, z: number): void;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, y: number): void;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(vec: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         * Gets the squared distance to the position.
         */
        distanceTo(x: number, y: number, y: number): number;
        getMotionX(): number;
        setRotation(yRot: number, xRot: number): void;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Checks if the entity is a client-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Checks if the entity is a monster.
         * Return whether this entity should be rendered as on fire.
         */
        isMonster(): boolean;
        /**
         * Returns the string that identifies this Entity's class
         */
        getType(): string;
        setMotionZ(renderDistWeight: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistance(x: number, y: number, y: number): number;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         * Returns the string that identifies this Entity's class
         */
        getUsername(): string;
        setMotionX(renderDistWeight: number): void;
        /**
         * Checks if the entity is an animal.
         * Return whether this entity should be rendered as on fire.
         */
        isAnimal(): boolean;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         * Returns the string that identifies this Entity's class
         */
        getTeamId(): string;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         * Gets the horizontal facing direction of this Entity.
         */
        getFacing(): $Direction;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        setMotionY(renderDistWeight: number): void;
        getMotionY(): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistanceSq(x: number, y: number, y: number): number;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         * Returns the string that identifies this Entity's class
         */
        getTeamName(): string;
        /**
         * Checks if the entity is an item frame entity.
         * Return whether this entity should be rendered as on fire.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a player entity.
         * Return whether this entity should be rendered as on fire.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a server-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getLevel(): $Level;
        setPosition(x: number, y: number, y: number): void;
        setPosition(block: $LevelBlock): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        setActivePostShader(id: $ResourceLocation_): void;
        setStatusMessage(component: $Component_): void;
        getDimensions(): $EntityDimensions;
        setVehicle(passenger: $Entity): void;
        callSetRot(yRot: number, xRot: number): void;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        callCollide(vec: $Vec3_): $Vec3;
        getNextStep(): number;
        /**
         * Enable or disable an entity flag, see `#getEntityFlag` to read the known flags.
         */
        shape_callSetFlag(flag: number, set: boolean): void;
        setNextStep(yaw: number): void;
        setPassengers(arg0: $ImmutableList<$Entity>): void;
        callGetTypeName(): $Component;
        setTouchingWater(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        getFirstTick(): boolean;
        /**
         * Returns the string that identifies this Entity's class
         */
        callGetEncodeId(): string;
        getChangeListener(): $EntityInLevelCallback;
        callIsStateClimbable(state: $BlockState_): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        callReapplyPosition(): void;
        callCalculateViewVector(xRot: number, yRot: number): $Vec3;
        catnip$callSetLevel(level: $Level_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        transition$getRawPosition(): $Vec3;
        shape_callPlayStepSound(pos: $BlockPos_, state: $BlockState_): void;
        transition$setRawPosition(addend: $Vec3_): void;
        invokeGetSwimSplashSound(): $SoundEvent;
        getXRot(): number;
        setYRot(yaw: number): void;
        getYRot(): number;
        setXRot(yaw: number): void;
        callGetBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        callVibrationAndSoundEffectsFromBlock(pos: $BlockPos_, state: $BlockState_, playStepSound: boolean, broadcastGameEvent: boolean, entityPos: $Vec3_): boolean;
        invokeGetSwimHighSpeedSplashSound(): $SoundEvent;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get typeName(): $Component;
        get alive(): boolean;
        get entityType(): $EntityType<never>;
        get defaultGravity(): number;
        get freezing(): boolean;
        get massNbt(): $CompoundTag;
        get maxFallDistance(): number;
        get inLiquid(): boolean;
        get inWater(): boolean;
        get inWall(): boolean;
        get randomY(): number;
        get discrete(): boolean;
        get gravity(): number;
        get inLava(): boolean;
        get eyeY(): number;
        get pickable(): boolean;
        get pushable(): boolean;
        get team(): $PlayerTeam;
        get weaponItem(): $ItemStack;
        set UUID(value: $UUID_);
        get visuallyCrawling(): boolean;
        get permissionLevel(): number;
        get attackable(): boolean;
        get scoreboardName(): string;
        get motionDirection(): $Direction;
        get rootVehicle(): $Entity;
        get forcedVisible(): boolean;
        get knownSpeed(): $Vec3;
        get knownMovement(): $Vec3;
        get alwaysTicking(): boolean;
        get controlledByLocalInstance(): boolean;
        get forward(): $Vec3;
        get tags(): $Set<string>;
        get onRails(): boolean;
        get flapping(): boolean;
        get pickRadius(): number;
        get rotationVector(): $Vec2;
        get onPortalCooldown(): boolean;
        get onPosLegacy(): $BlockPos;
        get crouching(): boolean;
        get teamColor(): number;
        get fireImmuneTicks(): number;
        get positionCodec(): $VecDeltaCodec;
        get inWaterOrRain(): boolean;
        get blockStateOn(): $BlockState;
        get swimSplashSound(): $SoundEvent;
        get swimSound(): $SoundEvent;
        get inWaterOrBubble(): boolean;
        get firstPassenger(): $Entity;
        get attachments(): $EntityAttachments;
        get blockJumpFactor(): number;
        get descending(): boolean;
        get blockSpeedFactor(): number;
        get inWaterRainOrBubble(): boolean;
        get fluidJumpThreshold(): number;
        get maxHeightFluidType(): $FluidType;
        get ticksRequiredToFreeze(): number;
        get controllingPassenger(): $LivingEntity;
        get boundingBoxForCulling(): $AABB;
        get blockStateOnLegacy(): $BlockState;
        get commandSenderWorld(): $Level;
        get persistentData(): $CompoundTag;
        get soundSource(): $SoundSource;
        get percentFrozen(): number;
        get maxAirSupply(): number;
        get stringUuid(): string;
        get passenger(): boolean;
        get fullyFrozen(): boolean;
        get visuallySwimming(): boolean;
        get inBlockState(): $BlockState;
        get effectiveAi(): boolean;
        get forgePersistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get encodeId(): string;
        get pickResult(): $ItemStack;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get indirectPassengers(): $Iterable<any>;
        get effectiveGravity(): number;
        get pistonPushReaction(): $PushReaction;
        get passengersAndSelf(): $Stream<any>;
        get controlledVehicle(): $Entity;
        get dimensionChangingDelay(): number;
        set sharedFlagOnFire(value: boolean);
        get movementEmission(): $Entity$MovementEmission;
        get ignoringBlockTriggers(): boolean;
        get suppressingBounce(): boolean;
        get nearestViewDirection(): $Direction;
        get steppingCarefully(): boolean;
        get selfAndPassengers(): $Stream<any>;
        get blockY(): number;
        get blockZ(): number;
        get blockX(): number;
        get lookAngle(): $Vec3;
        get spectator(): boolean;
        get underWater(): boolean;
        get bbHeight(): number;
        get onFire(): boolean;
        get bbWidth(): number;
        get horizontalFacing(): $Direction;
        get lightLevelDependentMagicValue(): number;
        get swimHighSpeedSplashSound(): $SoundEvent;
        get feedbackDisplayName(): $Component;
        get parts(): $PartEntity<never>[];
        get multipartEntity(): boolean;
        get headLookAngle(): $Vec3;
        get self(): boolean;
        get peacefulCreature(): boolean;
        get ambientCreature(): boolean;
        get waterCreature(): boolean;
        get living(): boolean;
        get scriptType(): $ScriptType;
        get clientPlayer(): boolean;
        get monster(): boolean;
        get type(): string;
        get profile(): $GameProfile;
        get username(): string;
        get animal(): boolean;
        get teamId(): string;
        get facing(): $Direction;
        get block(): $LevelBlock;
        get teamName(): string;
        get frame(): boolean;
        get player(): boolean;
        get serverPlayer(): boolean;
        set activePostShader(value: $ResourceLocation_);
        set statusMessage(value: $Component_);
        set touchingWater(value: boolean);
        get changeListener(): $EntityInLevelCallback;
    }
    export class $Display$ColorInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$ColorInterpolator}.
     */
    export type $Display$ColorInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $SpawnPlacements$Data extends $Record {
        predicate(): $SpawnPlacements$SpawnPredicate<never>;
        placement(): $SpawnPlacementType;
        heightMap(): $Heightmap$Types;
        constructor(heightMap: $Heightmap$Types_, placement: $SpawnPlacementType_, predicate: $SpawnPlacements$SpawnPredicate_<never>);
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$Data}.
     */
    export type $SpawnPlacements$Data_ = { predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_, heightMap?: $Heightmap$Types_,  } | [predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_, heightMap?: $Heightmap$Types_, ];
    export class $Display$TextDisplay$LineSplitter {
    }
    export interface $Display$TextDisplay$LineSplitter {
        split(text: $Component_, maxWidth: number): $Display$TextDisplay$CachedInfo;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$LineSplitter}.
     */
    export type $Display$TextDisplay$LineSplitter_ = ((arg0: $Component, arg1: number) => $Display$TextDisplay$CachedInfo_);
    export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $EntityTypeExtension<any>, $FabricEntityTypeImpl, $DynamicLightHandlerHolder<any>, $EntityTypeKJS, $InjectedEntityTypeExtension {
        static getKey(entityType: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        create(level: $Level_): T;
        static create(tag: $CompoundTag_, level: $Level_): ($Entity) | undefined;
        create(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        is(entityType: $HolderSet_<$EntityType<never>>): boolean;
        /**
         * Checks if this entity type is contained in the tag
         */
        is(tag: $TagKey_<$EntityType<never>>): boolean;
        getDimensions(): $EntityDimensions;
        getDescription(): $Component;
        fireImmune(): boolean;
        kjs$getId(): string;
        spawn(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        spawn(level: $ServerLevel, pos: $BlockPos_, spawnType: $MobSpawnType_): T;
        spawn(serverLevel: $ServerLevel, stack: $ItemStack_ | null, player: $Player | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        /**
         * Tries to get the entity type associated by the key.
         */
        static byString(key: string): ($EntityType<never>) | undefined;
        getWidth(): number;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        getCategory(): $MobCategory;
        canSerialize(): boolean;
        static updateCustomEntityTag(level: $Level_, player: $Player | null, entity: $Entity | null, customData: $CustomData): void;
        clientTrackingRange(): number;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        static loadEntitiesRecursive(tags: $List_<$Tag_>, level: $Level_): $Stream<$Entity>;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        static createDefaultStackConfig<T extends $Entity>(serverLevel: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        static loadEntityRecursive(compound: $CompoundTag_, level: $Level_, entityFunction: $Function_<$Entity, $Entity>): $Entity;
        static appendDefaultStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        static appendCustomNameConfig<T extends $Entity>(consumer: $Consumer_<T>, stack: $ItemStack_): $Consumer<T>;
        canSpawnFarFromPlayer(): boolean;
        static appendCustomEntityStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        sodiumdynamiclights$getSetting(): boolean;
        sodiumdynamiclights$getName(): $Component;
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
        kjs$getKey(): $ResourceKey<any>;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        requiredFeatures(): $FeatureFlagSet;
        static by(compound: $CompoundTag_): ($EntityType<never>) | undefined;
        getDescriptionId(): string;
        handler$djk000$fabric_object_builder_api_v1$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        getHeight(): number;
        canSummon(): boolean;
        static getYOffset(level: $LevelReader, pos: $BlockPos_, shouldOffsetYMore: boolean, box: $AABB_): number;
        sodiumdynamiclights$getDynamicLightHandler(): $DynamicLightHandler<any>;
        sodiumdynamiclights$setDynamicLightHandler(handler: $DynamicLightHandler_<any>): void;
        kjs$asHolder(): $Holder<any>;
        getSpawnAABB(x: number, arg1: number, y: number): $AABB;
        updateInterval(): number;
        isBlockDangerous(state: $BlockState_): boolean;
        getBaseClass(): $Class<$Entity>;
        trackDeltas(): boolean;
        tryCast(entity: $Entity): T;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        arch$holder(): $Holder<$EntityType<never>>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        getIdLocation(): $ResourceLocation;
        arch$registryName(): $ResourceLocation;
        static MOOSHROOM: $EntityType<$MushroomCow>;
        static MAGMA_CUBE: $EntityType<$MagmaCube>;
        static SILVERFISH: $EntityType<$Silverfish>;
        static MULE: $EntityType<$Mule>;
        static HOGLIN: $EntityType<$Hoglin>;
        static LEASH_KNOT: $EntityType<$LeashFenceKnotEntity>;
        static HUSK: $EntityType<$Husk>;
        static VINDICATOR: $EntityType<$Vindicator>;
        static WARDEN: $EntityType<$Warden>;
        static OMINOUS_ITEM_SPAWNER: $EntityType<$OminousItemSpawner>;
        static HOPPER_MINECART: $EntityType<$MinecartHopper>;
        static PILLAGER: $EntityType<$Pillager>;
        static SHULKER_BULLET: $EntityType<$ShulkerBullet>;
        static VILLAGER: $EntityType<$Villager>;
        static AREA_EFFECT_CLOUD: $EntityType<$AreaEffectCloud>;
        static PAINTING: $EntityType<$Painting>;
        static TURTLE: $EntityType<$Turtle>;
        static TRADER_LLAMA: $EntityType<$TraderLlama>;
        static SMALL_FIREBALL: $EntityType<$SmallFireball>;
        static TNT: $EntityType<$PrimedTnt>;
        static CAVE_SPIDER: $EntityType<$CaveSpider>;
        static SLIME: $EntityType<$Slime>;
        static DROWNED: $EntityType<$Drowned>;
        static FIREBALL: $EntityType<$LargeFireball>;
        static EVOKER: $EntityType<$Evoker>;
        static MARKER: $EntityType<$Marker>;
        static ENDERMITE: $EntityType<$Endermite>;
        static EXPERIENCE_BOTTLE: $EntityType<$ThrownExperienceBottle>;
        static AXOLOTL: $EntityType<$Axolotl>;
        static COMMAND_BLOCK_MINECART: $EntityType<$MinecartCommandBlock>;
        static PLAYER: $EntityType<$Player>;
        static ITEM: $EntityType<$ItemEntity>;
        static TEXT_DISPLAY: $EntityType<$Display$TextDisplay>;
        static SALMON: $EntityType<$Salmon>;
        static ZOMBIE: $EntityType<$Zombie>;
        static GOAT: $EntityType<$Goat>;
        static STRIDER: $EntityType<$Strider>;
        static PANDA: $EntityType<$Panda>;
        static OCELOT: $EntityType<$Ocelot>;
        static ENDERMAN: $EntityType<$EnderMan>;
        static CHEST_MINECART: $EntityType<$MinecartChest>;
        static ZOMBIE_VILLAGER: $EntityType<$ZombieVillager>;
        static LLAMA: $EntityType<$Llama>;
        static ENDER_DRAGON: $EntityType<$EnderDragon>;
        static WITCH: $EntityType<$Witch>;
        static EXPERIENCE_ORB: $EntityType<$ExperienceOrb>;
        static ARMADILLO: $EntityType<$Armadillo>;
        static ITEM_FRAME: $EntityType<$ItemFrame>;
        static WITHER: $EntityType<$WitherBoss>;
        static ARROW: $EntityType<$Arrow>;
        static CREEPER: $EntityType<$Creeper>;
        static BOGGED: $EntityType<$Bogged>;
        static ILLUSIONER: $EntityType<$Illusioner>;
        static BREEZE: $EntityType<$Breeze>;
        static CAMEL: $EntityType<$Camel>;
        static COD: $EntityType<$Cod>;
        static ZOMBIE_HORSE: $EntityType<$ZombieHorse>;
        static FURNACE_MINECART: $EntityType<$MinecartFurnace>;
        static RAVAGER: $EntityType<$Ravager>;
        static BOAT: $EntityType<$Boat>;
        static SHULKER: $EntityType<$Shulker>;
        static SNIFFER: $EntityType<$Sniffer>;
        static BEE: $EntityType<$Bee>;
        static ITEM_DISPLAY: $EntityType<$Display$ItemDisplay>;
        static PHANTOM: $EntityType<$Phantom>;
        static BLAZE: $EntityType<$Blaze>;
        static SKELETON_HORSE: $EntityType<$SkeletonHorse>;
        static COW: $EntityType<$Cow>;
        static WANDERING_TRADER: $EntityType<$WanderingTrader>;
        static END_CRYSTAL: $EntityType<$EndCrystal>;
        static PIG: $EntityType<$Pig>;
        static ZOGLIN: $EntityType<$Zoglin>;
        static BREEZE_WIND_CHARGE: $EntityType<$BreezeWindCharge>;
        static WOLF: $EntityType<$Wolf>;
        static IRON_GOLEM: $EntityType<$IronGolem>;
        static FROG: $EntityType<$Frog>;
        static SHEEP: $EntityType<$Sheep>;
        static VEX: $EntityType<$Vex>;
        static ENDER_PEARL: $EntityType<$ThrownEnderpearl>;
        static BLOCK_DISPLAY: $EntityType<$Display$BlockDisplay>;
        static TRIDENT: $EntityType<$ThrownTrident>;
        static PIGLIN_BRUTE: $EntityType<$PiglinBrute>;
        static POLAR_BEAR: $EntityType<$PolarBear>;
        static MINECART: $EntityType<$Minecart>;
        static LIGHTNING_BOLT: $EntityType<$LightningBolt>;
        static POTION: $EntityType<$ThrownPotion>;
        static FISHING_BOBBER: $EntityType<$FishingHook>;
        static CHEST_BOAT: $EntityType<$ChestBoat>;
        static SQUID: $EntityType<$Squid>;
        static DRAGON_FIREBALL: $EntityType<$DragonFireball>;
        static ELDER_GUARDIAN: $EntityType<$ElderGuardian>;
        static HORSE: $EntityType<$Horse>;
        static TNT_MINECART: $EntityType<$MinecartTNT>;
        static ARMOR_STAND: $EntityType<$ArmorStand>;
        static PARROT: $EntityType<$Parrot>;
        static EVOKER_FANGS: $EntityType<$EvokerFangs>;
        static FOX: $EntityType<$Fox>;
        static GIANT: $EntityType<$Giant>;
        static STRAY: $EntityType<$Stray>;
        static SPECTRAL_ARROW: $EntityType<$SpectralArrow>;
        static CAT: $EntityType<$Cat>;
        static RABBIT: $EntityType<$Rabbit>;
        static DONKEY: $EntityType<$Donkey>;
        static EYE_OF_ENDER: $EntityType<$EyeOfEnder>;
        static SPAWNER_MINECART: $EntityType<$MinecartSpawner>;
        static GLOW_ITEM_FRAME: $EntityType<$GlowItemFrame>;
        static INTERACTION: $EntityType<$Interaction>;
        static TROPICAL_FISH: $EntityType<$TropicalFish>;
        static ALLAY: $EntityType<$Allay>;
        static SPIDER: $EntityType<$Spider>;
        static SKELETON: $EntityType<$Skeleton>;
        static WITHER_SKELETON: $EntityType<$WitherSkeleton>;
        static CHICKEN: $EntityType<$Chicken>;
        static ZOMBIFIED_PIGLIN: $EntityType<$ZombifiedPiglin>;
        static SNOWBALL: $EntityType<$Snowball>;
        static GLOW_SQUID: $EntityType<$GlowSquid>;
        static SNOW_GOLEM: $EntityType<$SnowGolem>;
        static WITHER_SKULL: $EntityType<$WitherSkull>;
        static PUFFERFISH: $EntityType<$Pufferfish>;
        static GUARDIAN: $EntityType<$Guardian>;
        static EGG: $EntityType<$ThrownEgg>;
        static LLAMA_SPIT: $EntityType<$LlamaSpit>;
        static WIND_CHARGE: $EntityType<$WindCharge>;
        static FALLING_BLOCK: $EntityType<$FallingBlockEntity>;
        static PIGLIN: $EntityType<$Piglin>;
        static GHAST: $EntityType<$Ghast>;
        static BAT: $EntityType<$Bat>;
        static DOLPHIN: $EntityType<$Dolphin>;
        static TADPOLE: $EntityType<$Tadpole>;
        static FIREWORK_ROCKET: $EntityType<$FireworkRocketEntity>;
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        constructor(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_, serialize: boolean, summon: boolean, fireImmune: boolean, canSpawnFarFromPlayer: boolean, immuneTo: $ImmutableSet<$Block_>, dimensions: $EntityDimensions_, spawnDimensionsScale: number, clientTrackingRange: number, updateInterval: number, requiredFeatures: $FeatureFlagSet);
        get dimensions(): $EntityDimensions;
        get description(): $Component;
        get width(): number;
        get category(): $MobCategory;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get descriptionId(): string;
        get height(): number;
        get baseClass(): $Class<$Entity>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EntityType}.
     */
    export type $EntityType_<T> = RegistryTypes.EntityType;
    export class $LerpingModel {
    }
    export interface $LerpingModel {
        getModelRotationValues(): $Map<string, $Vector3f>;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    /**
     * Values that may be interpreted as {@link $LerpingModel}.
     */
    export type $LerpingModel_ = (() => $Map_<string, $Vector3f>);
    export class $Display$TransformationInterpolator extends $Record implements $Display$GenericInterpolator<$Transformation> {
    }
    /**
     * Values that may be interpreted as {@link $Display$TransformationInterpolator}.
     */
    export type $Display$TransformationInterpolator_ = { previous?: $Transformation, current?: $Transformation,  } | [previous?: $Transformation, current?: $Transformation, ];
    export class $SpawnPlacements implements $SpawnPlacementsAccessor {
        /**
         * @deprecated
         */
        static register<T extends $Mob>(entityType: $EntityType_<T>, spawnPlacementType: $SpawnPlacementType_, heightmapType: $Heightmap$Types_, predicate: $SpawnPlacements$SpawnPredicate_<T>): void;
        static checkSpawnRules<T extends $Entity>(entityType: $EntityType_<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        static isSpawnPositionOk(entityType: $EntityType_<never>, level: $LevelReader, pos: $BlockPos_): boolean;
        static fireSpawnPlacementEvent(): void;
        static getPlacementType(entityType: $EntityType_<never>): $SpawnPlacementType;
        static getHeightmapType(entityType: $EntityType_<never> | null): $Heightmap$Types;
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        static getDATA_BY_TYPE$platform_$md$66668e$0(): $Map<any, any>;
        static DATA_BY_TYPE: $Map<$EntityType<never>, $SpawnPlacements$Data>;
        constructor();
        static get DATA_BY_TYPE$platform_$md$66668e$0(): $Map<any, any>;
    }
    export class $Display$FloatInterpolator {
        static constant(value: number): $Display$FloatInterpolator;
    }
    export interface $Display$FloatInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$FloatInterpolator}.
     */
    export type $Display$FloatInterpolator_ = ((arg0: number) => number);
    export class $Display$IntInterpolator {
        static constant(value: number): $Display$IntInterpolator;
    }
    export interface $Display$IntInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$IntInterpolator}.
     */
    export type $Display$IntInterpolator_ = ((arg0: number) => number);
    export class $Leashable {
        static tickLeash<E extends $Entity>(entity: E): void;
        static LEASH_TAG: string;
        static LEASH_ELASTIC_DIST: number;
        static LEASH_TOO_FAR_DIST: number;
    }
    export interface $Leashable {
        dropLeash(broadcastPacket: boolean, dropItem: boolean): void;
        getLeashHolder(): $Entity;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        mayBeLeashed(): boolean;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        canBeLeashed(): boolean;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        getLeashData(): $Leashable$LeashData;
        isLeashed(): boolean;
        closeRangeLeashBehaviour(entity: $Entity): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        leashTooFarBehaviour(): void;
        setDelayedLeashHolderId(delayedLeashHolderId: number): void;
        canHaveALeashAttachedToIt(): boolean;
        get leashHolder(): $Entity;
        get leashed(): boolean;
        set delayedLeashHolderId(value: number);
    }
    export class $EntityAttachment$Fallback {
        static ZERO: $List<$Vec3>;
        static AT_CENTER: $EntityAttachment$Fallback;
        static AT_FEET: $EntityAttachment$Fallback;
        static AT_HEIGHT: $EntityAttachment$Fallback;
    }
    export interface $EntityAttachment$Fallback {
        create(width: number, height: number): $List<$Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment$Fallback}.
     */
    export type $EntityAttachment$Fallback_ = ((arg0: number, arg1: number) => $List_<$Vec3_>);
    export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
        static values(): $Display$BillboardConstraints[];
        static valueOf(arg0: string): $Display$BillboardConstraints;
        getId(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$BillboardConstraints;
        static CODEC: $Codec<$Display$BillboardConstraints>;
        static VERTICAL: $Display$BillboardConstraints;
        static FIXED: $Display$BillboardConstraints;
        static BY_ID: $IntFunction<$Display$BillboardConstraints>;
        static HORIZONTAL: $Display$BillboardConstraints;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$BillboardConstraints}.
     */
    export type $Display$BillboardConstraints_ = "fixed" | "vertical" | "horizontal" | "center";
    export class $Attackable {
    }
    export interface $Attackable {
        getLastAttacker(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Attackable}.
     */
    export type $Attackable_ = (() => $LivingEntity);
    export class $Display$GenericInterpolator<T> {
        static constant<T>(value: T): $Display$GenericInterpolator<T>;
    }
    export interface $Display$GenericInterpolator<T> {
        get(partialTick: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Display$GenericInterpolator}.
     */
    export type $Display$GenericInterpolator_<T> = ((arg0: number) => T);
    export class $HasCustomInventoryScreen {
    }
    export interface $HasCustomInventoryScreen {
        openCustomInventoryScreen(player: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $HasCustomInventoryScreen}.
     */
    export type $HasCustomInventoryScreen_ = ((arg0: $Player) => void);
    export class $PowerableMob {
    }
    export interface $PowerableMob {
        isPowered(): boolean;
        get powered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PowerableMob}.
     */
    export type $PowerableMob_ = (() => boolean);
    export class $SpawnPlacementType {
    }
    export interface $SpawnPlacementType {
        adjustSpawnPosition(level: $LevelReader, pos: $BlockPos_): $BlockPos;
        isSpawnPositionOk(level: $LevelReader, pos: $BlockPos_, entityType: $EntityType_<never> | null): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        getTarget(): $LivingEntity;
        getWidth(): number;
        setHeight(height: number): void;
        setWidth(height: number): void;
        getLastAttacker(): $LivingEntity;
        getHeight(): number;
        /**
         * Return whether this entity should NOT trigger a pressure plate or a tripwire.
         */
        getResponse(): boolean;
        setResponse(response: boolean): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        get target(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    export class $FlyingMob extends $Mob {
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        lootTable: $ResourceKey<$LootTable>;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType_<$FlyingMob>, level: $Level_);
    }
    export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
        static values(): $Display$TextDisplay$Align[];
        static valueOf(arg0: string): $Display$TextDisplay$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$TextDisplay$Align;
        static CODEC: $Codec<$Display$TextDisplay$Align>;
        static LEFT: $Display$TextDisplay$Align;
        static RIGHT: $Display$TextDisplay$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$Align}.
     */
    export type $Display$TextDisplay$Align_ = "center" | "left" | "right";
    export interface $EntityType<T> extends RegistryMarked<RegistryTypes.EntityTypeTag, RegistryTypes.EntityType> {}
    export class $Display$BlockDisplay$BlockRenderState extends $Record {
        blockState(): $BlockState;
        constructor(arg0: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $Display$BlockDisplay$BlockRenderState}.
     */
    export type $Display$BlockDisplay$BlockRenderState_ = { blockState?: $BlockState_,  } | [blockState?: $BlockState_, ];
    export class $SpawnPlacementTypes {
        static IN_LAVA: $SpawnPlacementType;
        static IN_WATER: $SpawnPlacementType;
        static NO_RESTRICTIONS: $SpawnPlacementType;
        static ON_GROUND: $SpawnPlacementType;
    }
    export interface $SpawnPlacementTypes {
    }
    export class $TamableAnimal extends $Animal implements $OwnableEntity {
        isOwnedBy(target: $LivingEntity): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isTame(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isOrderedToSit(): boolean;
        setOrderedToSit(sitting: boolean): void;
        setInSittingPose(sitting: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canFlyToOwner(): boolean;
        wantsToAttack(target: $LivingEntity, owner: $LivingEntity): boolean;
        spawnTamingParticles(sitting: boolean): void;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        applyTamingSideEffects(): void;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        tryToTeleportToOwner(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isInSittingPose(): boolean;
        setOwnerUUID(uuid: $UUID_ | null): void;
        getOwnerUUID(): $UUID;
        setTame(tame: boolean, applyTamingSideEffects: boolean): void;
        tame(player: $Player): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTryTeleportToOwner(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        unableToMoveToOwner(): boolean;
        getOwner(): $LivingEntity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        static DATA_FLAGS_ID: $EntityDataAccessor<number>;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        lootTable: $ResourceKey<$LootTable>;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        forcedAgeTimer: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static TELEPORT_WHEN_DISTANCE_IS_SQ: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        forcedAge: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        static PARENT_AGE_AFTER_BREEDING: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        static DATA_OWNERUUID_ID: $EntityDataAccessor<($UUID) | undefined>;
        animStepO: number;
        lastHurtByPlayer: $Player;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        constructor(entityType: $EntityType_<$TamableAnimal>, level: $Level_);
        get owner(): $LivingEntity;
    }
    export class $PlayerRideable {
    }
    export interface $PlayerRideable {
    }
    export class $Crackiness {
        byFraction(fraction: number): $Crackiness$Level;
        byDamage(damage: number, durability: number): $Crackiness$Level;
        byDamage(stack: $ItemStack_): $Crackiness$Level;
        static GOLEM: $Crackiness;
        static WOLF_ARMOR: $Crackiness;
    }
    export class $Interaction$PlayerAction extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Interaction$PlayerAction}.
     */
    export type $Interaction$PlayerAction_ = { player?: $UUID_, timestamp?: number,  } | [player?: $UUID_, timestamp?: number, ];
    export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $MobCategory[];
        static valueOf(arg0: string): $MobCategory;
        /**
         * Gets whether this creature type is peaceful.
         */
        isFriendly(): boolean;
        static getExtensionInfo(): $ExtensionInfo;
        getDespawnDistance(): number;
        /**
         * Gets whether this creature type is peaceful.
         */
        isPersistent(): boolean;
        getNoDespawnDistance(): number;
        getSerializedName(): string;
        getMaxInstancesPerChunk(): number;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND_WATER_CREATURE: $MobCategory;
        static WATER_CREATURE: $MobCategory;
        static WATER_AMBIENT: $MobCategory;
        static AXOLOTLS: $MobCategory;
        static CODEC: $Codec<$MobCategory>;
        static AMBIENT: $MobCategory;
        static CREATURE: $MobCategory;
        static MISC: $MobCategory;
        static MONSTER: $MobCategory;
        get friendly(): boolean;
        static get extensionInfo(): $ExtensionInfo;
        get despawnDistance(): number;
        get persistent(): boolean;
        get noDespawnDistance(): number;
        get serializedName(): string;
        get maxInstancesPerChunk(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        backgroundColor(): $Display$IntInterpolator;
        lineWidth(): number;
        textOpacity(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$TextRenderState}.
     */
    export type $Display$TextDisplay$TextRenderState_ = { lineWidth?: number, backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number, text?: $Component_,  } | [lineWidth?: number, backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number, text?: $Component_, ];
    export class $Display$BlockDisplay extends $Display {
        getBlockState(): $BlockState;
        setBlockState(blockState: $BlockState_): void;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static TAG_BLOCK_STATE: string;
        wasOnFire: boolean;
        zOld: number;
        updateRenderState: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $ItemSteerable {
    }
    export interface $ItemSteerable {
        boost(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSteerable}.
     */
    export type $ItemSteerable_ = (() => boolean);
    export class $PlayerRideableJumping {
    }
    export interface $PlayerRideableJumping extends $PlayerRideable {
        onPlayerJump(jumpPower: number): void;
        getJumpCooldown(): number;
        canJump(): boolean;
        handleStartJump(jumpPower: number): void;
        handleStopJump(): void;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity {
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $SpawnPlacements$SpawnPredicate<T extends $Entity> {
    }
    export interface $SpawnPlacements$SpawnPredicate<T extends $Entity> {
        test(entityType: $EntityType_<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$SpawnPredicate}.
     */
    export type $SpawnPlacements$SpawnPredicate_<T> = ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean);
    export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
        static values(): $EquipmentSlot$Type[];
        static valueOf(arg0: string): $EquipmentSlot$Type;
        static ANIMAL_ARMOR: $EquipmentSlot$Type;
        static HUMANOID_ARMOR: $EquipmentSlot$Type;
        static HAND: $EquipmentSlot$Type;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot$Type}.
     */
    export type $EquipmentSlot$Type_ = "hand" | "humanoid_armor" | "animal_armor";
    export class $Display$TextDisplay extends $Display {
        getText(): $Component;
        getFlags(): number;
        setText(text: $Component_): void;
        setFlags(flags: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getBackgroundColor(): number;
        static getAlign(flags: number): $Display$TextDisplay$Align;
        cacheDisplay(splitter: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        setLineWidth(backgroundColor: number): void;
        setBackgroundColor(backgroundColor: number): void;
        setTextOpacity(flags: number): void;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        getTextOpacity(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getLineWidth(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        static FLAG_SHADOW: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ALIGN_RIGHT: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static TAG_TEXT: string;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static INITIAL_BACKGROUND: number;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static FLAG_SEE_THROUGH: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static FLAG_USE_DEFAULT_BACKGROUND: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FLAG_ALIGN_LEFT: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        updateRenderState: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $Display$LinearFloatInterpolator extends $Record implements $Display$FloatInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearFloatInterpolator}.
     */
    export type $Display$LinearFloatInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EquipmentSlot extends $Enum<$EquipmentSlot> implements $StringRepresentable {
        getName(): string;
        static values(): $EquipmentSlot[];
        static valueOf(targetName: string): $EquipmentSlot;
        limit(stack: $ItemStack_): $ItemStack;
        getType(): $EquipmentSlot$Type;
        /**
         * Gets the actual slot index.
         */
        getIndex(): number;
        getIndex(baseIndex: number): number;
        static byName(targetName: string): $EquipmentSlot;
        /**
         * Gets the actual slot index.
         */
        getFilterFlag(): number;
        isArmor(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentSlot;
        static HEAD: $EquipmentSlot;
        static CODEC: $StringRepresentable$EnumCodec<$EquipmentSlot>;
        static OFFHAND: $EquipmentSlot;
        static MAINHAND: $EquipmentSlot;
        static LEGS: $EquipmentSlot;
        static NO_COUNT_LIMIT: number;
        static BODY: $EquipmentSlot;
        static FEET: $EquipmentSlot;
        get type(): $EquipmentSlot$Type;
        get filterFlag(): number;
        get armor(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot}.
     */
    export type $EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "body";
    export class $VariantHolder<T> {
    }
    export interface $VariantHolder<T> {
        getVariant(): T;
        setVariant(variant: T): void;
    }
    export class $EquipmentUser {
    }
    export interface $EquipmentUser {
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
        setDropChance(slot: $EquipmentSlot_, dropChance: number): void;
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
    }
    export class $WalkAnimationState implements $AccessorWalkAnimationState, $LimbAnimatorAccessor {
        update(newSpeed: number, partialTick: number): void;
        position(partialTick: number): number;
        position(): number;
        isMoving(): boolean;
        speed(partialTick: number): number;
        speed(): number;
        setSpeed(speed: number): void;
        setPos(speed: number): void;
        setPosition(speed: number): void;
        setPrevSpeed(speed: number): void;
        getPrevSpeed(): number;
        setSpeedOld(speed: number): void;
        getSpeedOld(): number;
        constructor();
        get moving(): boolean;
        set pos(value: number);
    }
    export class $SlotAccess {
        static of(getter: $Supplier_<$ItemStack>, setter: $Consumer_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_): $SlotAccess;
        static forContainer(inventory: $Container, slot: number, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static forContainer(inventory: $Container, slot: number): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(stack: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getCause(): $ServerPlayer;
        setCause(cause: $ServerPlayer | null): void;
        getDamage(): number;
        getHitEntities(): $Stream<$Entity>;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getBlocksSetOnFire(): number;
        setVisualOnly(visualOnly: boolean): void;
        setDamage(seconds: number): void;
        localvar$zzo000$openpartiesandclaims$onSetCause(arg0: $ServerPlayer): $ServerPlayer;
        handler$jdf000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        seed: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        visualOnly: boolean;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$LightningBolt>, level: $Level_);
        get hitEntities(): $Stream<$Entity>;
        get blocksSetOnFire(): number;
    }
    export class $LivingEntity$Fallsounds extends $Record {
        big(): $SoundEvent;
        small(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $LivingEntity$Fallsounds}.
     */
    export type $LivingEntity$Fallsounds_ = { small?: $SoundEvent_, big?: $SoundEvent_,  } | [small?: $SoundEvent_, big?: $SoundEvent_, ];
    export class $Display$ItemDisplay extends $Display {
        getItemStack(): $ItemStack;
        setItemStack(itemStack: $ItemStack_): void;
        setItemTransform(itemTransform: $ItemDisplayContext_): void;
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        getItemTransform(): $ItemDisplayContext;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        updateRenderState: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
    }
    export class $EntitySelector$MobCanWearArmorEntitySelector implements $Predicate<$Entity> {
        test(entity: $Entity | null): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        constructor(stack: $ItemStack_);
    }
    export class $Entity$MovementEmission extends $Enum<$Entity$MovementEmission> {
        static values(): $Entity$MovementEmission[];
        static valueOf(arg0: string): $Entity$MovementEmission;
        emitsAnything(): boolean;
        emitsSounds(): boolean;
        emitsEvents(): boolean;
        static ALL: $Entity$MovementEmission;
        static EVENTS: $Entity$MovementEmission;
        sounds: boolean;
        static SOUNDS: $Entity$MovementEmission;
        static NONE: $Entity$MovementEmission;
        events: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MovementEmission}.
     */
    export type $Entity$MovementEmission_ = "none" | "sounds" | "events" | "all";
    export class $AnimationState {
        start(tickCount: number): void;
        stop(): void;
        isStarted(): boolean;
        updateTime(ageInTicks: number, speed: number): void;
        fastForward(duration: number, speed: number): void;
        getAccumulatedTime(): number;
        startIfStopped(tickCount: number): void;
        animateWhen(condition: boolean, tickCount: number): void;
        ifStarted(action: $Consumer_<$AnimationState>): void;
        constructor();
        get started(): boolean;
        get accumulatedTime(): number;
    }
    /**
     * @deprecated
     */
    export class $Shearable {
    }
    export interface $Shearable extends $IShearable {
        /**
         * @deprecated
         */
        shear(source: $SoundSource_): void;
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        getOwner(): $LivingEntity;
        setOwner(owner: $LivingEntity | null): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDuration(): number;
        addEffect(effectInstance: $MobEffectInstance): void;
        setDuration(duration: number): void;
        setRadiusPerTick(radius: number): void;
        setWaitTime(duration: number): void;
        setPotionContents(potionContents: $PotionContents_): void;
        setParticle(particleOption: $ParticleOptions_): void;
        setRadiusOnUse(radius: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getWaitTime(): number;
        getRadiusOnUse(): number;
        getRadiusPerTick(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDurationOnUse(): number;
        getParticle(): $ParticleOptions;
        setDurationOnUse(duration: number): void;
        /**
         * Sets if the cloud is waiting. While waiting, the radius is ignored and the cloud shows fewer particles in its area.
         */
        setWaiting(waiting: boolean): void;
        /**
         * Returns `true` if the cloud is waiting. While waiting, the radius is ignored and the cloud shows fewer particles in its area.
         */
        isWaiting(): boolean;
        getRadius(): number;
        setRadius(radius: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static DEFAULT_WIDTH: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        reapplicationDelay: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static HEIGHT: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$AreaEffectCloud>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        set potionContents(value: $PotionContents_);
    }
    export class $PathfinderMob extends $Mob {
        getWalkTargetValue(pos: $BlockPos_, level: $LevelReader): number;
        getWalkTargetValue(pos: $BlockPos_): number;
        /**
         * Returns whether the entity got a `Path`.
         */
        isPathFinding(): boolean;
        followLeashSpeed(): number;
        /**
         * Returns whether the entity got a `Path`.
         */
        isPanicking(): boolean;
        /**
         * Returns whether the entity got a `Path`.
         */
        shouldStayCloseToLeashHolder(): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        lootTable: $ResourceKey<$LootTable>;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType_<$PathfinderMob>, level: $Level_);
        get pathFinding(): boolean;
        get panicking(): boolean;
    }
    export class $Display$RenderState extends $Record {
        shadowRadius(): $Display$FloatInterpolator;
        shadowStrength(): $Display$FloatInterpolator;
        transformation(): $Display$GenericInterpolator<$Transformation>;
        billboardConstraints(): $Display$BillboardConstraints;
        brightnessOverride(): number;
        glowColorOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$RenderState}.
     */
    export type $Display$RenderState_ = { brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_, shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_,  } | [brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_, shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_, ];
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static unpack(packedMovements: number): $Set<$RelativeMovement>;
        static pack(movements: $Set_<$RelativeMovement_>): number;
        static ROTATION: $Set<$RelativeMovement>;
        static ALL: $Set<$RelativeMovement>;
        static Y_ROT: $RelativeMovement;
        static X_ROT: $RelativeMovement;
        static X: $RelativeMovement;
        static Y: $RelativeMovement;
        static Z: $RelativeMovement;
    }
    /**
     * Values that may be interpreted as {@link $RelativeMovement}.
     */
    export type $RelativeMovement_ = "x" | "y" | "z" | "y_rot" | "x_rot";
    export class $Display$PosRotInterpolationTarget {
    }
    export class $OminousItemSpawner extends $Entity {
        static create(level: $Level_, item: $ItemStack_): $OminousItemSpawner;
        getItem(): $ItemStack;
        /**
         * Called to update the entity's position/logic.
         */
        addParticles(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        static TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$OminousItemSpawner>, level: $Level_);
        get item(): $ItemStack;
    }
    export class $EntityType$Builder<T extends $Entity> implements $FabricEntityTypeImpl$Builder, $FabricEntityType$Builder<any> {
        static of<T extends $Entity>(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_): $EntityType$Builder<T>;
        build(key: string): $EntityType<$Object>;
        build(): $EntityType<any>;
        attach(attachment: $EntityAttachment_, pos: $Vec3_): $EntityType$Builder<$Object>;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityType$Builder<$Object>;
        fireImmune(): $EntityType$Builder<$Object>;
        eyeHeight(eyeHeight: number): $EntityType$Builder<$Object>;
        clientTrackingRange(clientTrackingRange: number): $EntityType$Builder<$Object>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<any>;
        passengerAttachments(...attachPoints: $Vec3_[]): $EntityType$Builder<$Object>;
        passengerAttachments(...attachPoints: number[]): $EntityType$Builder<$Object>;
        spawnDimensionsScale(eyeHeight: number): $EntityType$Builder<$Object>;
        canSpawnFarFromPlayer(): $EntityType$Builder<$Object>;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $EntityType$Builder<$Object>;
        noSummon(): $EntityType$Builder<$Object>;
        setUpdateInterval(clientTrackingRange: number): $EntityType$Builder<$Object>;
        setTrackingRange(clientTrackingRange: number): $EntityType$Builder<$Object>;
        immuneTo(...blocks: $Block_[]): $EntityType$Builder<$Object>;
        sized(width: number, height: number): $EntityType$Builder<$Object>;
        vehicleAttachment(attachPoint: $Vec3_): $EntityType$Builder<$Object>;
        static createNothing<T extends $Entity>(category: $MobCategory_): $EntityType$Builder<T>;
        nameTagOffset(eyeHeight: number): $EntityType$Builder<$Object>;
        updateInterval(clientTrackingRange: number): $EntityType$Builder<$Object>;
        ridingOffset(eyeHeight: number): $EntityType$Builder<$Object>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<$Object>;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<any>): void;
        noSave(): $EntityType$Builder<$Object>;
        fabric_setMobEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Mob<any>): void;
        set trackingRange(value: number);
        set shouldReceiveVelocityUpdates(value: boolean);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        width(): number;
        contents(): $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedLine}.
     */
    export type $Display$TextDisplay$CachedLine_ = { width?: number, contents?: $FormattedCharSequence_,  } | [width?: number, contents?: $FormattedCharSequence_, ];
    export class $EquipmentTable extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        slotDropChances(): $Map<$EquipmentSlot, number>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    /**
     * Values that may be interpreted as {@link $EquipmentTable}.
     */
    export type $EquipmentTable_ = { slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>,  } | [slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>, ];
    export class $PortalProcessor {
        hasExpired(): boolean;
        isSamePortal(portal: $Portal_): boolean;
        getPortalTime(): number;
        updateEntryPosition(entryPosition: $BlockPos_): void;
        getPortalDestination(level: $ServerLevel, entity: $Entity): $DimensionTransition;
        processPortalTeleportation(level: $ServerLevel, entity: $Entity, canChangeDimensions: boolean): boolean;
        setAsInsidePortalThisTick(insidePortalThisTick: boolean): void;
        getPortalLocalTransition(): $Portal$Transition;
        isInsidePortalThisTick(): boolean;
        getEntryPosition(): $BlockPos;
        constructor(portal: $Portal_, entryPosition: $BlockPos_);
        get portalTime(): number;
        set asInsidePortalThisTick(value: boolean);
        get portalLocalTransition(): $Portal$Transition;
        get insidePortalThisTick(): boolean;
        get entryPosition(): $BlockPos;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static ignoresLightRequirements(spawnType: $MobSpawnType_): boolean;
        static isSpawner(spawnType: $MobSpawnType_): boolean;
        static CONVERSION: $MobSpawnType;
        static STRUCTURE: $MobSpawnType;
        static BUCKET: $MobSpawnType;
        static DISPENSER: $MobSpawnType;
        static SPAWNER: $MobSpawnType;
        static EVENT: $MobSpawnType;
        static MOB_SUMMONED: $MobSpawnType;
        static NATURAL: $MobSpawnType;
        static SPAWN_EGG: $MobSpawnType;
        static PATROL: $MobSpawnType;
        static CHUNK_GENERATION: $MobSpawnType;
        static TRIAL_SPAWNER: $MobSpawnType;
        static BREEDING: $MobSpawnType;
        static REINFORCEMENT: $MobSpawnType;
        static COMMAND: $MobSpawnType;
        static TRIGGERED: $MobSpawnType;
        static JOCKEY: $MobSpawnType;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnType}.
     */
    export type $MobSpawnType_ = "natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol" | "trial_spawner";
    export class $ExperienceOrb extends $Entity implements $ExperienceOrbAccess, $IClumpedOrb {
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getValue(): number;
        static award(level: $ServerLevel, pos: $Vec3_, amount: number): void;
        /**
         * Get a fragment of the maximum experience points value for the supplied value of experience points value.
         */
        static getExperienceValue(expValue: number): number;
        static tryMergeToExisting(level: $ServerLevel, pos: $Vec3_, amount: number): boolean;
        repairPlayerItems(player: $ServerPlayer, value: number): number;
        /**
         * Returns `true` if it's possible to attack this entity with an item.
         */
        clumps$resolve(): boolean;
        clumps$getClumpedMap(): $Map<any, any>;
        clumps$setClumpedMap(arg0: $Map_<any, any>): void;
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getIcon(): number;
        localvar$jba000$clumps$captureCurrentEntry(arg0: $Optional<any>): $Optional<any>;
        handler$jba000$clumps$repairPlayerItems(arg0: $ServerPlayer, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$jba000$clumps$readAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$jba001$clumps$addAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$zzi000$openpartiesandclaims$onPlayerTouch(arg0: $Player, arg1: $CallbackInfo): void;
        handler$jba000$clumps$playerTouch(arg0: $Player, arg1: $CallbackInfo): void;
        handler$jba000$clumps$merge(arg0: $ExperienceOrb, arg1: $CallbackInfo): void;
        clumps$setAge(id: number): void;
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        clumps$getAge(): number;
        clumps$setCount(id: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        clumps$clumpedMap: $Map<any, any>;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        count: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        clumps$currentEntry: $Optional<any>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        value: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: number);
        constructor(entityType: $EntityType_<$ExperienceOrb>, level: $Level_);
        get icon(): number;
    }
    export class $Display$LinearIntInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearIntInterpolator}.
     */
    export type $Display$LinearIntInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EntityDimensions extends $Record {
        scale(width: number, height: number): $EntityDimensions;
        scale(factor: number): $EntityDimensions;
        fixed(): boolean;
        static fixed(width: number, height: number): $EntityDimensions;
        width(): number;
        static scalable(width: number, height: number): $EntityDimensions;
        height(): number;
        eyeHeight(): number;
        attachments(): $EntityAttachments;
        makeBoundingBox(x: number, arg1: number, y: number): $AABB;
        makeBoundingBox(pos: $Vec3_): $AABB;
        withEyeHeight(factor: number): $EntityDimensions;
        withAttachments(attachments: $EntityAttachments$Builder): $EntityDimensions;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $EntityAttachments, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityDimensions}.
     */
    export type $EntityDimensions_ = { height?: number, fixed?: boolean, attachments?: $EntityAttachments, width?: number, eyeHeight?: number,  } | [height?: number, fixed?: boolean, attachments?: $EntityAttachments, width?: number, eyeHeight?: number, ];
    export class $EntityAttachment extends $Enum<$EntityAttachment> {
        static values(): $EntityAttachment[];
        static valueOf(arg0: string): $EntityAttachment;
        createFallbackPoints(width: number, height: number): $List<$Vec3>;
        static VEHICLE: $EntityAttachment;
        static NAME_TAG: $EntityAttachment;
        static PASSENGER: $EntityAttachment;
        static WARDEN_CHEST: $EntityAttachment;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment}.
     */
    export type $EntityAttachment_ = "passenger" | "vehicle" | "name_tag" | "warden_chest";
    export class $TraceableEntity {
    }
    export interface $TraceableEntity {
        getOwner(): $Entity;
        get owner(): $Entity;
    }
    /**
     * Values that may be interpreted as {@link $TraceableEntity}.
     */
    export type $TraceableEntity_ = (() => $Entity);
    export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum, $StringRepresentable {
        static values(): $HumanoidArm[];
        static valueOf(arg0: string): $HumanoidArm;
        getKey(): string;
        getId(): number;
        getOpposite(): $HumanoidArm;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get key(): string;
        get id(): number;
        get opposite(): $HumanoidArm;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidArm}.
     */
    export type $HumanoidArm_ = "left" | "right";
    export class $EntityType$EntityFactory<T extends $Entity> {
    }
    export interface $EntityType$EntityFactory<T extends $Entity> {
        create(entityType: $EntityType_<T>, level: $Level_): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityType$EntityFactory}.
     */
    export type $EntityType$EntityFactory_<T> = ((arg0: $EntityType<T>, arg1: $Level) => T);
    export class $MoverType extends $Enum<$MoverType> {
        static values(): $MoverType[];
        static valueOf(arg0: string): $MoverType;
        static PLAYER: $MoverType;
        static PISTON: $MoverType;
        static SHULKER_BOX: $MoverType;
        static SELF: $MoverType;
        static SHULKER: $MoverType;
    }
    /**
     * Values that may be interpreted as {@link $MoverType}.
     */
    export type $MoverType_ = "self" | "player" | "piston" | "shulker_box" | "shulker";
    export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
        static values(): $Entity$RemovalReason[];
        static valueOf(arg0: string): $Entity$RemovalReason;
        shouldDestroy(): boolean;
        shouldSave(): boolean;
        static UNLOADED_TO_CHUNK: $Entity$RemovalReason;
        static UNLOADED_WITH_PLAYER: $Entity$RemovalReason;
        static DISCARDED: $Entity$RemovalReason;
        static CHANGED_DIMENSION: $Entity$RemovalReason;
        static KILLED: $Entity$RemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $Entity$RemovalReason}.
     */
    export type $Entity$RemovalReason_ = "killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension";
    export class $Saddleable {
    }
    export interface $Saddleable {
        isSaddled(): boolean;
        isSaddleable(): boolean;
        equipSaddle(stack: $ItemStack_, soundSource: $SoundSource_ | null): void;
        getSaddleSoundEvent(): $SoundEvent;
        get saddled(): boolean;
        get saddleable(): boolean;
        get saddleSoundEvent(): $SoundEvent;
    }
    export class $Targeting {
    }
    export interface $Targeting {
        getTarget(): $LivingEntity;
        get target(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Targeting}.
     */
    export type $Targeting_ = (() => $LivingEntity);
    export class $Pose extends $Enum<$Pose> {
        static values(): $Pose[];
        static valueOf(arg0: string): $Pose;
        id(): number;
        static SLEEPING: $Pose;
        static SNIFFING: $Pose;
        static EMERGING: $Pose;
        static INHALING: $Pose;
        static FALL_FLYING: $Pose;
        static LONG_JUMPING: $Pose;
        static BY_ID: $IntFunction<$Pose>;
        static DYING: $Pose;
        static CROAKING: $Pose;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pose>;
        static STANDING: $Pose;
        static SWIMMING: $Pose;
        static SITTING: $Pose;
        static SHOOTING: $Pose;
        static SLIDING: $Pose;
        static USING_TONGUE: $Pose;
        static CROUCHING: $Pose;
        static ROARING: $Pose;
        static DIGGING: $Pose;
        static SPIN_ATTACK: $Pose;
    }
    /**
     * Values that may be interpreted as {@link $Pose}.
     */
    export type $Pose_ = "standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "sliding" | "shooting" | "inhaling";
    export class $OwnableEntity {
    }
    export interface $OwnableEntity {
        getOwner(): $LivingEntity;
        level(): $EntityGetter;
        getOwnerUUID(): $UUID;
        get owner(): $LivingEntity;
        get ownerUUID(): $UUID;
    }
    export class $EquipmentSlotGroup extends $Enum<$EquipmentSlotGroup> implements $StringRepresentable {
        static values(): $EquipmentSlotGroup[];
        test(slot: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentSlotGroup;
        static bySlot(slot: $EquipmentSlot_): $EquipmentSlotGroup;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAD: $EquipmentSlotGroup;
        static CODEC: $Codec<$EquipmentSlotGroup>;
        static OFFHAND: $EquipmentSlotGroup;
        static ARMOR: $EquipmentSlotGroup;
        static MAINHAND: $EquipmentSlotGroup;
        static LEGS: $EquipmentSlotGroup;
        static BY_ID: $IntFunction<$EquipmentSlotGroup>;
        static ANY: $EquipmentSlotGroup;
        static HAND: $EquipmentSlotGroup;
        static FEET: $EquipmentSlotGroup;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentSlotGroup>;
        static CHEST: $EquipmentSlotGroup;
        static BODY: $EquipmentSlotGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotGroup}.
     */
    export type $EquipmentSlotGroup_ = "any" | "mainhand" | "offhand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body";
    export class $Display extends $Entity implements $DisplayAccessor {
        getWidth(): number;
        setHeight(height: number): void;
        setWidth(height: number): void;
        setTransformationInterpolationDelay(glowColorOverride: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTransformationInterpolationDuration(): number;
        setTransformationInterpolationDuration(glowColorOverride: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTransformationInterpolationDelay(): number;
        getViewRange(): number;
        setTransformation(transformation: $Transformation): void;
        getShadowStrength(): number;
        renderState(): $Display$RenderState;
        setShadowRadius(height: number): void;
        setViewRange(height: number): void;
        getShadowRadius(): number;
        setShadowStrength(height: number): void;
        getHeight(): number;
        setBrightnessOverride(brightnessOverride: $Brightness_ | null): void;
        setGlowColorOverride(glowColorOverride: number): void;
        getBrightnessOverride(): $Brightness;
        setBillboardConstraints(billboardConstraints: $Display$BillboardConstraints_): void;
        updateRenderSubState(interpolate: boolean, partialTick: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getGlowColorOverride(): number;
        getBillboardConstraints(): $Display$BillboardConstraints;
        static createTransformation(synchedEntityData: $SynchedEntityData): $Transformation;
        calculateInterpolationProgress(partialTick: number): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getPosRotInterpolationDuration(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getPackedBrightnessOverride(): number;
        setPosRotInterpolationDuration(glowColorOverride: number): void;
        invokeSetWidth(height: number): void;
        invokeSetHeight(height: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        static NO_BRIGHTNESS_OVERRIDE: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        updateRenderState: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<never>, level: $Level_);
        set transformation(value: $Transformation);
        get packedBrightnessOverride(): number;
    }
    export class $Crackiness$Level extends $Enum<$Crackiness$Level> {
        static values(): $Crackiness$Level[];
        static valueOf(arg0: string): $Crackiness$Level;
        static HIGH: $Crackiness$Level;
        static MEDIUM: $Crackiness$Level;
        static LOW: $Crackiness$Level;
        static NONE: $Crackiness$Level;
    }
    /**
     * Values that may be interpreted as {@link $Crackiness$Level}.
     */
    export type $Crackiness$Level_ = "none" | "low" | "medium" | "high";
    export class $Mob extends $LivingEntity implements $EquipmentUser, $Leashable, $Targeting, $EquipmentEntity, $NavigatingEntity, $MobAccessor {
        /**
         * Gets the active target the Goal system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Sets the active target the Goal system uses for tracking
         */
        setTarget(target: $LivingEntity | null): void;
        restrictTo(pos: $BlockPos_, distance: number): void;
        convertTo<T extends $Mob>(entityType: $EntityType_<T>, transferInventory: boolean): T;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        setPersistenceRequired(): void;
        checkSpawnObstruction(level: $LevelReader): boolean;
        redirect$jfk000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        handler$blh000$vanillabackport$vb$tick(ci: $CallbackInfo): void;
        populateDefaultEquipmentEnchantments(level: $ServerLevelAccessor, random: $RandomSource, difficulty: $DifficultyInstance): void;
        /**
         * Removes the leash from this entity
         */
        dropLeash(broadcastPacket: boolean, dropLeash: boolean): void;
        isWithinMeleeAttackRange(entity: $LivingEntity): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isPersistenceRequired(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        shouldDespawnInPeaceful(): boolean;
        checkSpawnRules(level: $LevelAccessor, reason: $MobSpawnType_): boolean;
        /**
         * Changes the X and Y rotation so that this entity is facing the given entity.
         */
        lookAt(entity: $Entity, maxYRotIncrease: number, maxXRotIncrease: number): void;
        setDropChance(slot: $EquipmentSlot_, chance: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearRestriction(): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getHeadRotSpeed(): number;
        getSpawnType(): $MobSpawnType;
        getPickupReach(): $Vec3i;
        /**
         * Returns whether the entity is in a server world
         */
        hasRestriction(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopInPlace(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        customServerAiStep(): void;
        setSpawnCancelled(aggressive: boolean): void;
        wantsToPickUp(stack: $ItemStack_): boolean;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        getRestrictCenter(): $BlockPos;
        setAggressive(aggressive: boolean): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRestrictRadius(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateControlFlags(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeFreeWill(): void;
        setCanPickUpLoot(aggressive: boolean): void;
        removeWhenFarAway(distanceToClosestPlayer: number): boolean;
        setGuaranteedDrop(slot: $EquipmentSlot_): void;
        /**
         * Returns whether the entity is in a server world
         */
        isAggressive(): boolean;
        canHoldItem(stack: $ItemStack_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playAttackSound(): void;
        getBodyArmorItem(): $ItemStack;
        /**
         * Returns whether the entity is in a server world
         */
        canBeLeashed(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendDebugPackets(): void;
        mobInteract(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Returns whether the entity is in a server world
         */
        isLeftHanded(): boolean;
        setLeftHanded(aggressive: boolean): void;
        getLeashData(): $Leashable$LeashData;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        /**
         * Returns whether the entity is in a server world
         */
        isSunBurnTick(): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadYRot(): number;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        /**
         * Tests if this entity should pick up a weapon or an armor piece. Entity drops current weapon or armor if the new one is better.
         */
        pickUpItem(itemEntity: $ItemEntity): void;
        getNavigation(): $PathNavigation;
        setPathfindingMalus(pathType: $PathType_, malus: number): void;
        canReplaceEqualItem(candidate: $ItemStack_, existing: $ItemStack_): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getAmbientSoundInterval(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clampHeadRotationToBody(): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxSpawnClusterSize(): number;
        static getEquipmentForSlot(slot: $EquipmentSlot_, chance: number): $Item;
        isWithinRestriction(pos: $BlockPos_): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isWithinRestriction(): boolean;
        equipItemIfPossible(stack: $ItemStack_): $ItemStack;
        canFireProjectileWeapon(projectileWeapon: $ProjectileWeaponItem): boolean;
        enchantSpawnedArmor(level: $ServerLevelAccessor, random: $RandomSource, slot: $EquipmentSlot_, difficulty: $DifficultyInstance): void;
        getPathfindingMalus(pathType: $PathType_): number;
        static createMobAttributes(): $AttributeSupplier$Builder;
        enchantSpawnedWeapon(level: $ServerLevelAccessor, random: $RandomSource, difficulty: $DifficultyInstance): void;
        isMaxGroupSizeReached(size: number): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        dropPreservedEquipment(): void;
        dropPreservedEquipment(predicate: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        onOffspringSpawnedFromEgg(player: $Player, child: $Mob): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        leashTooFarBehaviour(): void;
        /**
         * Returns whether the entity is in a server world
         */
        requiresCustomPersistence(): boolean;
        canReplaceCurrentItem(candidate: $ItemStack_, existing: $ItemStack_): boolean;
        getEquipmentDropChance(slot: $EquipmentSlot_): number;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getAttackBoundingBox(): $AABB;
        modifyExpressionValue$gka000$create$mobRidingContraptionsMaintainTheirAttackBox(entity: $Entity): $Entity;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        lithium$updateNavigationRegistration(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isNoAi(): boolean;
        setNoAi(aggressive: boolean): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setXxa(speed: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        ate(): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setZza(speed: number): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setYya(speed: number): void;
        getSensing(): $Sensing;
        lithium$getRegisteredNavigation(): $PathNavigation;
        /**
         * Returns whether the entity is in a server world
         */
        lithium$isRegisteredToWorld(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        spawnAnim(): void;
        handler$blh000$vanillabackport$vb$finalizeSpawn(level: $ServerLevelAccessor, difficulty: $DifficultyInstance, reason: $MobSpawnType_, spawnData: $SpawnGroupData, cir: $CallbackInfoReturnable<any>): void;
        handler$zca000$openpartiesandclaims$onAiStepPre(arg0: $CallbackInfo): void;
        handler$zca000$openpartiesandclaims$onAiStepPost(arg0: $CallbackInfo): void;
        setItemSlotAndDropWhenKilled(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        lithium$setRegisteredToWorld(arg0: $PathNavigation): void;
        populateDefaultEquipmentSlots(random: $RandomSource, difficulty: $DifficultyInstance): void;
        /**
         * Returns whether the entity is in a server world
         */
        shouldPassengersInheritMalus(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isSpawnCancelled(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playAmbientSound(): void;
        setBaby(aggressive: boolean): void;
        handler$blh000$vanillabackport$vb$readAdditionalSaveData(tag: $CompoundTag_, ci: $CallbackInfo): void;
        handler$blh000$vanillabackport$vb$defineSynchedData(builder: $SynchedEntityData$Builder, ci: $CallbackInfo): void;
        handler$blh000$vanillabackport$vb$addAdditionalSaveData(tag: $CompoundTag_, ci: $CallbackInfo): void;
        handler$zce000$openpartiesandclaims$onAiStepItemPickup(arg0: $CallbackInfo, arg1: $Vec3i, arg2: $Iterator<any>, arg3: $ItemEntity): void;
        /**
         * @deprecated
         */
        finalizeSpawn(level: $ServerLevelAccessor, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, spawnGroupData: $SpawnGroupData | null): $SpawnGroupData;
        createNavigation(level: $Level_): $PathNavigation;
        /**
         * Returns whether the entity is in a server world
         */
        canPickUpLoot(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingDone(): void;
        getLookControl(): $LookControl;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadXRot(): number;
        getMoveControl(): $MoveControl;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingStart(): void;
        getJumpControl(): $JumpControl;
        getAmbientSound(): $SoundEvent;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        registerGoals(): void;
        /**
         * Gets the active target the Goal system uses for tracking
         */
        getTargetFromBrain(): $LivingEntity;
        static checkMobSpawnRules(type: $EntityType_<$Mob>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        createBodyControl(): $BodyRotationControl;
        setBodyArmorItem(stack: $ItemStack_): void;
        /**
         * Returns whether the entity is in a server world
         */
        isWearingBodyArmor(): boolean;
        isBodyArmorItem(stack: $ItemStack_): boolean;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
        getLeashHolder(): $Entity;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        /**
         * Returns whether the entity is in a server world
         */
        mayBeLeashed(): boolean;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        /**
         * Returns whether the entity is in a server world
         */
        isLeashed(): boolean;
        closeRangeLeashBehaviour(passenger: $Entity): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        /**
         * Sets the amount of arrows stuck in the entity. Used for rendering those.
         */
        setDelayedLeashHolderId(count: number): void;
        /**
         * Returns whether the entity is in a server world
         */
        canHaveALeashAttachedToIt(): boolean;
        sophisticatedbackpacks$getAmbientSound(): $SoundEvent;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        lootTable: $ResourceKey<$LootTable>;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType_<$Mob>, level: $Level_);
        get headRotSpeed(): number;
        get spawnType(): $MobSpawnType;
        get pickupReach(): $Vec3i;
        get restrictCenter(): $BlockPos;
        get restrictRadius(): number;
        set guaranteedDrop(value: $EquipmentSlot_);
        get sunBurnTick(): boolean;
        get maxHeadYRot(): number;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get ambientSoundInterval(): number;
        get maxSpawnClusterSize(): number;
        get attackBoundingBox(): $AABB;
        get sensing(): $Sensing;
        set baby(value: boolean);
        get maxHeadXRot(): number;
        get ambientSound(): $SoundEvent;
        get targetFromBrain(): $LivingEntity;
        get wearingBodyArmor(): boolean;
        get leashHolder(): $Entity;
        get leashed(): boolean;
        set delayedLeashHolderId(value: number);
    }
    export class $Leashable$LeashData implements $LeashDataExtension {
        angularMomentum(): number;
        setAngularMomentum(momentum: number): void;
        setLeashHolder(leashHolder: $Entity): void;
        delayedLeashHolderId: number;
        leashHolder: $Entity;
        delayedLeashInfo: $Either<$UUID, $BlockPos>;
        constructor(delayedLeashInfoId: number);
        constructor(leashHolder: $Entity);
        constructor(delayedLeashInfo: $Either<$UUID_, $BlockPos_>);
    }
    export class $Entity$MoveFunction {
    }
    export interface $Entity$MoveFunction {
        accept(entity: $Entity, x: number, arg2: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MoveFunction}.
     */
    export type $Entity$MoveFunction_ = ((arg0: $Entity, arg1: number, arg2: number, arg3: number) => void);
    export class $EntityAttachments {
        get(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        scale(xScale: number, yScale: number, zScale: number): $EntityAttachments;
        static builder(): $EntityAttachments$Builder;
        getClamped(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        static createDefault(width: number, height: number): $EntityAttachments;
        getNullable(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        constructor(attachments: $Map_<$EntityAttachment_, $List_<$Vec3_>>);
    }
    export class $EntitySelector {
        static pushableBy(entity: $Entity): $Predicate<$Entity>;
        static notRiding(entity: $Entity): $Predicate<$Entity>;
        static withinDistance(x: number, arg1: number, y: number, arg3: number): $Predicate<$Entity>;
        static ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static NO_SPECTATORS: $Predicate<$Entity>;
        static ENTITY_NOT_BEING_RIDDEN: $Predicate<$Entity>;
        static LIVING_ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static CAN_BE_COLLIDED_WITH: $Predicate<$Entity>;
        static NO_CREATIVE_OR_SPECTATOR: $Predicate<$Entity>;
        static CONTAINER_ENTITY_SELECTOR: $Predicate<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = string;
    export class $AgeableMob extends $PathfinderMob {
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getAge(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        ageBoundaryReached(): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $AgeableMob;
        ageUp(amount: number): void;
        ageUp(amount: number, forced: boolean): void;
        /**
         * If Animal, checks if the age timer is negative
         */
        canBreed(): boolean;
        static getSpeedUpSecondsWhenFeeding(ticksUntilAdult: number): number;
        setAge(amount: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        lootTable: $ResourceKey<$LootTable>;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        forcedAgeTimer: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        forcedAge: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        sodiumdynamiclights$luminance: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        constructor(entityType: $EntityType_<$AgeableMob>, level: $Level_);
    }
    export class $ItemBasedSteering {
        boost(random: $RandomSource): boolean;
        addAdditionalSaveData(nbt: $CompoundTag_): void;
        readAdditionalSaveData(nbt: $CompoundTag_): void;
        onSynced(): void;
        tickBoost(): void;
        setSaddle(saddled: boolean): void;
        hasSaddle(): boolean;
        boostFactor(): number;
        constructor(entityData: $SynchedEntityData, boostTimeAccessor: $EntityDataAccessor_<number>, hasSaddleAccessor: $EntityDataAccessor_<boolean>);
        set saddle(value: boolean);
    }
    export class $NeutralMob {
        static TAG_ANGRY_AT: string;
        static TAG_ANGER_TIME: string;
    }
    export interface $NeutralMob {
        /**
         * Gets the active target the Task system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setTarget(livingEntity: $LivingEntity | null): void;
        canAttack(entity: $LivingEntity): boolean;
        playerDied(player: $Player): void;
        isAngry(): boolean;
        isAngryAt(entity: $LivingEntity): boolean;
        stopBeingAngry(): void;
        setLastHurtByPlayer(player: $Player | null): void;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setLastHurtByMob(livingEntity: $LivingEntity | null): void;
        /**
         * Gets the active target the Task system uses for tracking
         */
        getLastHurtByMob(): $LivingEntity;
        addPersistentAngerSaveData(nbt: $CompoundTag_): void;
        getPersistentAngerTarget(): $UUID;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        startPersistentAngerTimer(): void;
        isAngryAtAllPlayers(level: $Level_): boolean;
        setPersistentAngerTarget(persistentAngerTarget: $UUID_ | null): void;
        setRemainingPersistentAngerTime(remainingPersistentAngerTime: number): void;
        readPersistentAngerSaveData(level: $Level_, tag: $CompoundTag_): void;
        getRemainingPersistentAngerTime(): number;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        get angry(): boolean;
        set lastHurtByPlayer(value: $Player | null);
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        increaseGroupSizeByOne(): void;
        getBabySpawnChance(): number;
        isShouldSpawnBaby(): boolean;
        getGroupSize(): number;
        constructor(babySpawnChance: number);
        constructor(shouldSpawnBaby: boolean);
        get babySpawnChance(): number;
        get shouldSpawnBaby(): boolean;
        get groupSize(): number;
    }
    export class $ReputationEventHandler {
    }
    export interface $ReputationEventHandler {
        onReputationEventFrom(type: $ReputationEventType, target: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ReputationEventHandler}.
     */
    export type $ReputationEventHandler_ = ((arg0: $ReputationEventType, arg1: $Entity) => void);
    export class $TamableAnimal$TamableAnimalPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
        speedModifier: number;
        posX: number;
        mob: $PathfinderMob;
        posY: number;
        posZ: number;
        this$0: $TamableAnimal;
    }
    export class $Display$ItemDisplay$ItemRenderState extends $Record {
        itemStack(): $ItemStack;
        itemTransform(): $ItemDisplayContext;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
    /**
     * Values that may be interpreted as {@link $Display$ItemDisplay$ItemRenderState}.
     */
    export type $Display$ItemDisplay$ItemRenderState_ = { itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_,  } | [itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_, ];
}
