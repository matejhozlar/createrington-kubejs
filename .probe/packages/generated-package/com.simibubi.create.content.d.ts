declare module "com.simibubi.create.content.trains.track.ITrackBlock" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$Affine, $Affine$$Type} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType$$Type} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Function$$Type} from "java.util.function.Function"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ITrackBlock$$Interface {
get "material"(): $TrackMaterial
}

export class $ITrackBlock implements $ITrackBlock$$Interface {
 "getCurveStart"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Vec3
 "getUpNormal"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $Vec3
 "getNearestTrackAxis"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Pair<($Vec3), ($Direction$AxisDirection)>
static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
 "prepareAssemblyOverlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $PoseStack$$Type): $PartialModel
 "prepareTrackOverlay"<Self extends $Affine<(object)>>(arg0: $Affine$$Type<(Self)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BezierTrackPointLocation$$Type, arg5: $Direction$AxisDirection$$Type, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
 "getElevationAtCenter"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): double
static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
 "overlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): $BlockState
 "getConnected"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean, arg4: $TrackNodeLocation$$Type): $Collection<($TrackNodeLocation$DiscoveredLocation)>
 "getYOffsetAt"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): integer
 "getTrackAxes"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($Vec3)>
 "getBogeyAnchor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
 "trackEquals"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
 "getMaterial"(): $TrackMaterial
 "isSlope"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackBlock$$Type = ($ITrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITrackBlock$$Original = $ITrackBlock;}
declare module "com.simibubi.create.content.kinetics.deployer.DeployerFakePlayer" {
import {$Iterable} from "java.lang.Iterable"
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Brain} from "net.minecraft.world.entity.ai.Brain"
import {$Optional} from "java.util.Optional"
import {$ServerGamePacketListenerImpl} from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import {$Inventory} from "net.minecraft.world.entity.player.Inventory"
import {$LivingChangeTargetEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingChangeTargetEvent"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$LivingDropsEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDropsEvent"
import {$LivingExperienceDropEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingExperienceDropEvent"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$PlayerEnderChestContainer} from "net.minecraft.world.inventory.PlayerEnderChestContainer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Object2DoubleMap} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$FakePlayer} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$SynchedEntityData} from "net.minecraft.network.syncher.SynchedEntityData"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$FoodData} from "net.minecraft.world.food.FoodData"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$DamageContainer} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityEvent$Size$$Type} from "net.neoforged.neoforge.event.entity.EntityEvent$Size"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$Team} from "net.minecraft.world.scores.Team"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $DeployerFakePlayer extends $FakePlayer {
 "lerpYRot": double
static readonly "USE_ITEM_INTERVAL": integer
 "lerpYHeadRot": double
 "useItem": $ItemStack
 "jumpTriggerTime": integer
static readonly "DATA_LIVING_ENTITY_FLAGS": $EntityDataAccessor<(byte)>
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "boardingCooldown": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "onMinecartContraption": boolean
 "walkDist": float
 "noCulling": boolean
readonly "gameMode": $ServerPlayerGameMode
 "appliedScale": float
readonly "object": any
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>
static readonly "UUID_TAG": StringJS
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "hurtDir": float
static readonly "DEFAULT_BABY_SCALE": float
static readonly "DEFAULT_BB_HEIGHT": float
 "seenCredits": boolean
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
 "wasOnFire": boolean
 "autoSpinAttackTicks": integer
 "noActionTime": integer
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "damageContainers": $Stack<($DamageContainer)>
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
 "yCloak": double
 "run": float
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "animStepO": float
 "sodiumdynamiclights$luminance": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "PLANET_GRAV": double
 "yRot": float
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "enchantmentSeed": integer
static readonly "FLAG_FALL_FLYING": integer
 "xOld": double
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
 "invulnerableTime": integer
 "wasUnderwater": boolean
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventory": $Inventory
readonly "random": $RandomSource
 "lerpSteps": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "lerpXRot": double
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
 "animStep": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
 "deathScore": integer
 "oBob": float
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "lastHurtByPlayerTime": integer
 "autoSpinAttackItemStack": $ItemStack
static readonly "DEFAULT_BASE_GRAVITY": double
 "wasEyeInWater": boolean
 "hasImpulse": boolean
static readonly "ENTITY_COUNTER": $AtomicInteger
 "yHeadRot": float
 "yCloakO": double
 "noPhysics": boolean
 "fallFlyTicks": integer
 "autoSpinAttackDmg": float
 "yo": double
 "connection": $ServerGamePacketListenerImpl
static readonly "FLAG_ONFIRE": integer
 "zza": float
 "rotOffs": float
static readonly "INTERACTION_DISTANCE_VERIFICATION_BUFFER": double
 "placedTracks": boolean
static readonly "WAKE_UP_DURATION": integer
 "xRotO": float
 "zo": double
 "wonGame": boolean
 "lastHurt": float
readonly "walkAnimation": $WalkAnimationState
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MODE_CUSTOMISATION": $EntityDataAccessor<(byte)>
 "yya": float
readonly "server": $MinecraftServer
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
 "updateClimbingMobCachingSectionOnChange": boolean
static readonly "SWIMMING_BB_HEIGHT": float
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
 "xxa": float
 "zCloak": double
 "lerpHeadSteps": integer
static readonly "fallbackID": $UUID
 "brain": $Brain<(never)>
static readonly "PASSENGERS_TAG": StringJS
 "stringUUID": StringJS
 "xCloakO": double
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
static readonly "LIVING_ENTITY_FLAG_SPIN_ATTACK": integer
 "entity": $LivingEntity
readonly "rotA": float
 "dimensions": $EntityDimensions
static readonly "ENDER_SLOT_OFFSET": integer
 "firstTick": boolean
static readonly "HELD_ITEM_SLOT": integer
 "uuid": $UUID
readonly "abilities": $Abilities
 "lastHurtByPlayer": $Player
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "enderChestInventory": $PlayerEnderChestContainer
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "oRun": float
 "bob": float
 "experienceProgress": float
 "create_diesel_generators$turretPos": $BlockPos
 "totalExperience": integer
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "useItemRemaining": integer
readonly "entityData": $SynchedEntityData
 "foodData": $FoodData
static readonly "SLEEPING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MAIN_HAND": $EntityDataAccessor<(byte)>
static readonly "EQUIPMENT_SLOT_OFFSET": integer
readonly "defaultFlySpeed": float
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
readonly "inventoryMenu": $InventoryMenu
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "LIVING_ENTITY_FLAG_OFF_HAND": integer
static readonly "DATA_SHOULDER_LEFT": $EntityDataAccessor<($CompoundTag)>
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "LIVING_ENTITY_FLAG_IS_USING": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "lerpX": double
 "lerpZ": double
 "lerpY": double
 "fishing": $FishingHook
static readonly "SWIMMING_BB_WIDTH": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "FLAG_GLOWING": integer
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "DATA_SHOULDER_RIGHT": $EntityDataAccessor<($CompoundTag)>
 "currentExplosionCause": $Entity

constructor(arg0: $ServerLevel$$Type, arg1: $UUID$$Type)

public "remove"(arg0: $Entity$RemovalReason$$Type): void
public "position"(): $Vec3
public "getDisplayName"(): $Component
public "getCurrentItemAttackStrengthDelay"(): float
public "getUuid"(): $UUID
public "getDefaultDimensions"(arg0: $Pose$$Type): $EntityDimensions
public static "deployerCollectsDropsFromKilledEntities"(arg0: $LivingDropsEvent$$Type): void
public "eat"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $FoodProperties$$Type): $ItemStack
public static "deployerKillsDoNotSpawnXP"(arg0: $LivingExperienceDropEvent$$Type): void
public static "deployerHasEyesOnHisFeet"(arg0: $EntityEvent$Size$$Type): void
public static "entitiesDontRetaliate"(arg0: $LivingChangeTargetEvent$$Type): void
public "openMenu"(arg0: $MenuProvider$$Type): $OptionalInt
public "canEat"(arg0: boolean): boolean
public "canBeAffected"(arg0: $MobEffectInstance$$Type): boolean
public "self"(): $Player
public "northstar$setRelativeEntity"(entity: $Entity$$Type, ticks: integer): void
public "northstar$getRelativeEntity"(): $Entity
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$resetDynamicLight"(): void
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "etf$getScoreboardTeam"(): $Team
public "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
public "etf$getType"(): $EntityType<(never)>
public "etf$getHandItems"(): $Iterable<($ItemStack)>
public "etf$hasCustomName"(): boolean
public "etf$getCustomName"(): $Component
/**
 * 
 * @deprecated
 */
public "etf$getPose"(): $Pose
public "etf$distanceTo"(arg0: $Entity$$Type): float
public "etf$getVelocity"(): $Vec3
public "etf$getUuid"(): $UUID
public "etf$getOptifineId"(): integer
public "etf$getArmorItems"(): $Iterable<($ItemStack)>
public "etf$canBeBright"(): boolean
public "etf$isBlockEntity"(): boolean
public "etf$getBlockY"(): integer
public "etf$getNbt"(): $CompoundTag
public "etf$getBlockPos"(): $BlockPos
public "etf$getEntityKey"(): StringJS
public "etf$getWorld"(): $Level
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "displayName"(): $Component
get "currentItemAttackStrengthDelay"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployerFakePlayer$$Type = ($DeployerFakePlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeployerFakePlayer$$Original = $DeployerFakePlayer;}
declare module "com.simibubi.create.content.trains.track.BezierConnection" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IMonorailBezier$MonorailAngles} from "com.railwayteam.railways.mixin_interfaces.IMonorailBezier$MonorailAngles"
import {$SlabBlock, $SlabBlock$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$Map} from "java.util.Map"
import {$BezierConnection$SegmentAngles} from "com.simibubi.create.content.trains.track.BezierConnection$SegmentAngles"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BezierConnection$Segment, $BezierConnection$Segment$$Type} from "com.simibubi.create.content.trains.track.BezierConnection$Segment"
import {$Spliterator} from "java.util.Spliterator"
import {$BezierConnection$GirderAngles} from "com.simibubi.create.content.trains.track.BezierConnection$GirderAngles"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$IHasTrackCasing$$Interface} from "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"
import {$IMonorailBezier$$Interface} from "com.railwayteam.railways.mixin_interfaces.IMonorailBezier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $BezierConnection implements $Iterable$$Interface<($BezierConnection$Segment)>, $IHasTrackCasing$$Interface, $IMonorailBezier$$Interface {
readonly "axes": $Couple<($Vec3)>
 "smoothing": $Couple<(integer)>
readonly "hasGirder": boolean
readonly "starts": $Couple<($Vec3)>
readonly "normals": $Couple<($Vec3)>
readonly "bePositions": $Couple<($BlockPos)>
readonly "primary": boolean

constructor(arg0: $Couple$$Type<($BlockPos$$Type)>, arg1: $Couple$$Type<($Vec3$$Type)>, arg2: $Couple$$Type<($Vec3$$Type)>, arg3: $Couple$$Type<($Vec3$$Type)>, arg4: boolean, arg5: boolean, arg6: $TrackMaterial$$Type)
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $CompoundTag$$Type, arg1: $BlockPos$$Type)

public "getPosition"(arg0: double): $Vec3
public "getHandleLength"(): double
public "getSegmentCount"(): integer
public "clone"(): $BezierConnection
public "getLength"(): double
public "iterator"(): $Iterator<($BezierConnection$Segment)>
public "getBounds"(): $AABB
public "getKey"(): $BlockPos
public "write"(arg0: $BlockPos$$Type): $CompoundTag
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "getNormal"(arg0: double): $Vec3
public "incrementT"(arg0: double, arg1: double): double
public "secondary"(): $BezierConnection
public "addItemsToPlayer"(arg0: $Player$$Type): void
public "isAlternate"(): boolean
public "getGirderItemCost"(): integer
public "getTrackItemCost"(): integer
public "getMaterial"(): $TrackMaterial
public "isPrimary"(): boolean
public "yOffsetAt"(arg0: $Vec3$$Type): integer
public "setMaterial"(arg0: $TrackMaterial$$Type): void
public "getTrackCasing"(): $SlabBlock
public "getRadius"(): double
public "spawnDestroyParticles"(arg0: $Level$$Type): void
public "spawnItems"(arg0: $Level$$Type): void
public "rasterise"(): $Map<($Pair<(integer), (integer)>), (double)>
public "equalsSansMaterial"(arg0: $BezierConnection$$Type): boolean
public "setAlternate"(arg0: boolean): void
public "setTrackCasing"(arg0: $SlabBlock$$Type): void
public "getSegmentT"(arg0: integer): float
public "getBakedSegments"(): $BezierConnection$SegmentAngles
public "getBakedGirders"(): $BezierConnection$GirderAngles
public "getBakedMonorails"(): ($IMonorailBezier$MonorailAngles)[]
public "getStepLUT"(): (float)[]
public "spliterator"(): $Spliterator<($BezierConnection$Segment)>
public "forEach"(arg0: $Consumer$$Type<($BezierConnection$Segment)>): void
public static "isAlternate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public static "getTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $SlabBlock
public static "setAlternateModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): boolean
public static "setTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $SlabBlock$$Type): void
[Symbol.iterator](): IterableIterator<$BezierConnection$Segment>;
get "handleLength"(): double
get "segmentCount"(): integer
get "length"(): double
get "bounds"(): $AABB
get "key"(): $BlockPos
get "alternate"(): boolean
get "girderItemCost"(): integer
get "trackItemCost"(): integer
get "material"(): $TrackMaterial
set "material"(value: $TrackMaterial$$Type)
get "trackCasing"(): $SlabBlock
get "radius"(): double
set "alternate"(value: boolean)
set "trackCasing"(value: $SlabBlock$$Type)
get "bakedSegments"(): $BezierConnection$SegmentAngles
get "bakedGirders"(): $BezierConnection$GirderAngles
get "bakedMonorails"(): ($IMonorailBezier$MonorailAngles)[]
get "stepLUT"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BezierConnection$$Type = ($BezierConnection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BezierConnection$$Original = $BezierConnection;}
declare module "com.simibubi.create.content.trains.track.BezierConnection$Segment" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"

export class $BezierConnection$Segment {
 "normal": $Vec3
 "faceNormal": $Vec3
 "index": integer
 "derivative": $Vec3
 "position": $Vec3

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BezierConnection$Segment$$Type = ($BezierConnection$Segment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BezierConnection$Segment$$Original = $BezierConnection$Segment;}
declare module "com.simibubi.create.content.trains.track.TrackMaterial$TrackType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TrackMaterial$TrackType$TrackBlockFactory$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType$TrackBlockFactory"

export class $TrackMaterial$TrackType {
readonly "id": $ResourceLocation
static readonly "STANDARD": $TrackMaterial$TrackType

constructor(arg0: $ResourceLocation$$Type, arg1: $TrackMaterial$TrackType$TrackBlockFactory$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackMaterial$TrackType$$Type = ($TrackMaterial$TrackType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackMaterial$TrackType$$Original = $TrackMaterial$TrackType;}
declare module "com.simibubi.create.content.trains.entity.Carriage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Carriage$DimensionalCarriageEntity} from "com.simibubi.create.content.trains.entity.Carriage$DimensionalCarriageEntity"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$TravellingPoint, $TravellingPoint$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$CarriageBogey, $CarriageBogey$$Type} from "com.simibubi.create.content.trains.entity.CarriageBogey"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CarriageContraptionEntity, $CarriageContraptionEntity$$Type} from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import {$Map} from "java.util.Map"
import {$CarriageContraption$$Type} from "com.simibubi.create.content.trains.entity.CarriageContraption"
import {$Train, $Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$TrainCargoManager} from "com.simibubi.create.content.contraptions.minecart.TrainCargoManager"
import {$AccessorCarriage$$Interface} from "com.railwayteam.railways.mixin.AccessorCarriage"
import {$ICarriageConductors$$Interface} from "com.railwayteam.railways.mixin_interfaces.ICarriageConductors"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$ICarriageBufferDistanceTracker$$Interface} from "com.railwayteam.railways.mixin_interfaces.ICarriageBufferDistanceTracker"

export class $Carriage implements $AccessorCarriage$$Interface, $ICarriageConductors$$Interface, $ICarriageBufferDistanceTracker$$Interface {
 "presentConductors": $Couple<(boolean)>
 "bogeys": $Couple<($CarriageBogey)>
 "blocked": boolean
 "stalled": boolean
static readonly "netIdGenerator": $AtomicInteger
 "id": integer
 "bogeySpacing": integer
 "storage": $TrainCargoManager
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Carriage)>
 "train": $Train

constructor(arg0: $CarriageBogey$$Type, arg1: $CarriageBogey$$Type, arg2: integer)

public "write"(arg0: $DimensionPalette$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $TrackGraph$$Type, arg3: $DimensionPalette$$Type): $Carriage
public "getSerialisedPassengers"(): $Map
public "railways$getLeadingDistance"(): integer
public "railways$getTrailingDistance"(): integer
public "railways$setLeadingDistance"(arg0: integer): void
public "railways$setTrailingDistance"(arg0: integer): void
public "updateConductors"(): void
public "trailingBogey"(): $CarriageBogey
public "setContraption"(arg0: $Level$$Type, arg1: $CarriageContraption$$Type): void
public "updateContraptionAnchors"(): void
public "forEachPresentEntity"(arg0: $Consumer$$Type<($CarriageContraptionEntity)>): void
public "presentInMultipleDimensions"(): boolean
public "anyAvailableDimensionalCarriage"(): $Pair<($ResourceKey<($Level)>), ($Carriage$DimensionalCarriageEntity)>
public "anyAvailableEntity"(): $CarriageContraptionEntity
public "getLeadingPoint"(): $TravellingPoint
public "leadingBogey"(): $CarriageBogey
public "getTrailingPoint"(): $TravellingPoint
public "getAnchorDiff"(): double
public "manageEntities"(arg0: $Level$$Type): void
public "setTrain"(arg0: $Train$$Type): void
public "travel"(arg0: $Level$$Type, arg1: $TrackGraph$$Type, arg2: double, arg3: $TravellingPoint$$Type, arg4: $TravellingPoint$$Type, arg5: integer): double
public "isOnIncompatibleTrack"(): boolean
public "railways$getControllingConductors"(): $List
public "alignEntity"(arg0: $Level$$Type): void
public "isOnTwoBogeys"(): boolean
public "getDimensional"(arg0: $ResourceKey$$Type<($Level)>): $Carriage$DimensionalCarriageEntity
public "getDimensional"(arg0: $Level$$Type): $Carriage$DimensionalCarriageEntity
public "getPositionInDimension"(arg0: $ResourceKey$$Type<($Level)>): $Optional<($BlockPos)>
public "getDimensionalIfPresent"(arg0: $ResourceKey$$Type<($Level)>): $Carriage$DimensionalCarriageEntity
public "getPresentDimensions"(): $List<($ResourceKey<($Level)>)>
get "serialisedPassengers"(): $Map
get "leadingPoint"(): $TravellingPoint
get "trailingPoint"(): $TravellingPoint
get "anchorDiff"(): double
get "onIncompatibleTrack"(): boolean
get "onTwoBogeys"(): boolean
get "presentDimensions"(): $List<($ResourceKey<($Level)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Carriage$$Type = ($Carriage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Carriage$$Original = $Carriage;}
declare module "com.simibubi.create.content.trains.track.TrackBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$PathType} from "net.minecraft.world.level.pathfinder.PathType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$LootTable} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Random$$Type} from "java.util.Random"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType$$Type} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$TrackShape} from "com.simibubi.create.content.trains.track.TrackShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$ITrackBlock$$Interface} from "com.simibubi.create.content.trains.track.ITrackBlock"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Affine, $Affine$$Type} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$IHaveBigOutline$$Interface} from "com.simibubi.create.foundation.block.IHaveBigOutline"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$TrackBlockEntity, $TrackBlockEntity$$Type} from "com.simibubi.create.content.trains.track.TrackBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export class $TrackBlock extends $Block implements $IBE$$Interface<($TrackBlockEntity)>, $IWrenchable$$Interface, $ITrackBlock$$Interface, $SpecialBlockItemRequirement$$Interface, $ProperWaterloggedBlock$$Interface, $IHaveBigOutline$$Interface {
 "explosionResistance": float
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "drops": $ResourceKey<($LootTable)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "dynamicShape": boolean
 "soundType": $SoundType
 "jumpFactor": float
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
 "speedFactor": float
 "friction": float
static readonly "HAS_BE": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TrackMaterial$$Type)

public "getCurveStart"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Vec3
public "getUpNormal"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $Vec3
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlockEntityType"(): $BlockEntityType<($TrackBlockEntity)>
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Random$$Type): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "prepareAssemblyOverlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $PoseStack$$Type): $PartialModel
public "prepareTrackOverlay"<Self extends $Affine<(object)>>(arg0: $Affine$$Type<(Self)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BezierTrackPointLocation$$Type, arg5: $Direction$AxisDirection$$Type, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
public "overlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): $BlockState
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getConnected"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean, arg4: $TrackNodeLocation$$Type): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public "getYOffsetAt"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): integer
public "getTrackAxes"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($Vec3)>
public "getBogeyAnchor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
public "trackEquals"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "getMaterial"(): $TrackMaterial
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockEntityClass"(): $Class<($TrackBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($TrackBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TrackBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $TrackBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($TrackBlockEntity)>
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TrackBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getNearestTrackAxis"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Pair<($Vec3), ($Direction$AxisDirection)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
public "getElevationAtCenter"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): double
public static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
public "isSlope"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($TrackBlockEntity)>
get "material"(): $TrackMaterial
get "blockEntityClass"(): $Class<($TrackBlockEntity)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBlock$$Type = ($TrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackBlock$$Original = $TrackBlock;}
declare module "com.simibubi.create.content.decoration.slidingDoor.DoorControl" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum} from "java.lang.Enum"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ScrollInput} from "com.simibubi.create.foundation.gui.widget.ScrollInput"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Label} from "com.simibubi.create.foundation.gui.widget.Label"

export class $DoorControl extends $Enum<($DoorControl)> {
static readonly "ALL": $DoorControl
static readonly "NORTH": $DoorControl
static readonly "WEST": $DoorControl
static readonly "SOUTH": $DoorControl
static readonly "NONE": $DoorControl
static readonly "EAST": $DoorControl
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DoorControl)>

public static "values"(): ($DoorControl)[]
public static "valueOf"(arg0: StringJS): $DoorControl
public "matches"(arg0: $Direction$$Type): boolean
public static "createWidget"(arg0: integer, arg1: integer, arg2: $Consumer$$Type<($DoorControl)>, arg3: $DoorControl$$Type): $Pair<($ScrollInput), ($Label)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorControl$$Type = (("all") | ("north") | ("east") | ("south") | ("west") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoorControl$$Original = $DoorControl;}
declare module "com.simibubi.create.content.trains.track.BezierConnection$SegmentAngles" {
import {$PoseStack$Pose} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $BezierConnection$SegmentAngles {
readonly "lightPosition": ($BlockPos)[]
readonly "length": integer
readonly "tieTransform": ($PoseStack$Pose)[]
readonly "railTransforms": ($Couple<($PoseStack$Pose)>)[]

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BezierConnection$SegmentAngles$$Type = ($BezierConnection$SegmentAngles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BezierConnection$SegmentAngles$$Original = $BezierConnection$SegmentAngles;}
declare module "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingCallback" {
import {$TransportedItemStackHandlerBehaviour, $TransportedItemStackHandlerBehaviour$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour"
import {$BeltProcessingBehaviour$ProcessingResult, $BeltProcessingBehaviour$ProcessingResult$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingResult"
import {$TransportedItemStack, $TransportedItemStack$$Type} from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"

export interface $BeltProcessingBehaviour$ProcessingCallback$$Interface {

(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour): $BeltProcessingBehaviour$ProcessingResult$$Type
}

export class $BeltProcessingBehaviour$ProcessingCallback implements $BeltProcessingBehaviour$ProcessingCallback$$Interface {
 "apply"(arg0: $TransportedItemStack$$Type, arg1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeltProcessingBehaviour$ProcessingCallback$$Type = ((arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour) => $BeltProcessingBehaviour$ProcessingResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeltProcessingBehaviour$ProcessingCallback$$Original = $BeltProcessingBehaviour$ProcessingCallback;}
declare module "com.simibubi.create.content.trains.station.StationMapData" {
import {$StationMarker$$Type} from "com.simibubi.create.content.trains.station.StationMarker"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$StationBlockEntity$$Type} from "com.simibubi.create.content.trains.station.StationBlockEntity"

export interface $StationMapData$$Interface {
}

export class $StationMapData implements $StationMapData$$Interface {
 "toggleStation"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $StationBlockEntity$$Type): boolean
 "addStationMarker"(arg0: $StationMarker$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationMapData$$Type = ($StationMapData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StationMapData$$Original = $StationMapData;}
declare module "com.simibubi.create.content.schematics.requirement.ItemRequirement$StackRequirement" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemRequirement$ItemUseType, $ItemRequirement$ItemUseType$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement$ItemUseType"

export class $ItemRequirement$StackRequirement {
readonly "stack": $ItemStack
readonly "usage": $ItemRequirement$ItemUseType

constructor(arg0: $ItemStack$$Type, arg1: $ItemRequirement$ItemUseType$$Type)

public "matches"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirement$StackRequirement$$Type = ($ItemRequirement$StackRequirement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRequirement$StackRequirement$$Original = $ItemRequirement$StackRequirement;}
declare module "com.simibubi.create.content.logistics.filter.FilterItemStack" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FilterItemStack {
public "test"(arg0: $Level$$Type, arg1: $FluidStack$$Type): boolean
public "test"(arg0: $Level$$Type, arg1: $ItemStack$$Type): boolean
public "test"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "test"(arg0: $Level$$Type, arg1: $FluidStack$$Type, arg2: boolean): boolean
public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $FilterItemStack
public static "of"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $FilterItemStack
public static "empty"(): $FilterItemStack
public "item"(): $ItemStack
public "isFilterItem"(): boolean
public "fluid"(arg0: $Level$$Type): $FluidStack
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "filterItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemStack$$Type = ($FilterItemStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterItemStack$$Original = $FilterItemStack;}
declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$PositionGetter" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$TransportedItemStack, $TransportedItemStack$$Type} from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"

export interface $TransportedItemStackHandlerBehaviour$PositionGetter$$Interface {

(arg0: $TransportedItemStack): $Vec3$$Type
}

export class $TransportedItemStackHandlerBehaviour$PositionGetter implements $TransportedItemStackHandlerBehaviour$PositionGetter$$Interface {
 "getWorldPositionVector"(arg0: $TransportedItemStack$$Type): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportedItemStackHandlerBehaviour$PositionGetter$$Type = ((arg0: $TransportedItemStack) => $Vec3$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransportedItemStackHandlerBehaviour$PositionGetter$$Original = $TransportedItemStackHandlerBehaviour$PositionGetter;}
declare module "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection" {
import {$Enum} from "java.lang.Enum"

export class $TravellingPoint$SteerDirection extends $Enum<($TravellingPoint$SteerDirection)> {
static readonly "LEFT": $TravellingPoint$SteerDirection
static readonly "RIGHT": $TravellingPoint$SteerDirection
static readonly "NONE": $TravellingPoint$SteerDirection

public static "values"(): ($TravellingPoint$SteerDirection)[]
public static "valueOf"(arg0: StringJS): $TravellingPoint$SteerDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellingPoint$SteerDirection$$Type = (("none") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellingPoint$SteerDirection$$Original = $TravellingPoint$SteerDirection;}
declare module "com.simibubi.create.content.trains.station.StationBlockEntity" {
import {$ITrackBlock$$Type} from "com.simibubi.create.content.trains.track.ITrackBlock"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DoorControlBehaviour} from "com.simibubi.create.content.decoration.slidingDoor.DoorControlBehaviour"
import {$AbstractComputerBehaviour} from "com.simibubi.create.compat.computercraft.AbstractComputerBehaviour"
import {$LerpedFloat} from "net.createmod.catnip.animation.LerpedFloat"
import {$PackagePortBlockEntity$$Type} from "com.simibubi.create.content.logistics.packagePort.PackagePortBlockEntity"
import {$BoundingBox} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Map} from "java.util.Map"
import {$Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackTargetingBehaviour} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$WorldAttached} from "net.createmod.catnip.data.WorldAttached"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$GlobalStation} from "com.simibubi.create.content.trains.station.GlobalStation"

export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity$$Interface, $IHaveGoggleInformation$$Interface {
 "worldPosition": $BlockPos
 "lastDisassembledTrainName": $Component
 "flag": $LerpedFloat
static "assemblyAreas": $WorldAttached<($Map<($BlockPos), ($BoundingBox)>)>
 "level": $Level
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "doorControls": $DoorControlBehaviour
 "lastDisassembledMapColorIndex": integer
 "hasComparators": byte
 "computerBehaviour": $AbstractComputerBehaviour
 "edgePoint": $TrackTargetingBehaviour<($GlobalStation)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "invalidate"(): void
public "remove"(): void
public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
public "tick"(): void
public "getRenderBoundingBox"(): $AABB
public "addToGoggleTooltip"(tooltip: $List$$Type, isPlayerSneaking: boolean): boolean
public "getAutoSchedule"(): $ItemStack
public "resolveFlagAngle"(): boolean
public "tryEnterAssemblyMode"(): boolean
public "refreshAssemblyInfo"(): void
public "trackClicked"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ITrackBlock$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): boolean
public "dropSchedule"(arg0: $ServerPlayer$$Type, arg1: $Train$$Type): void
public "isAssembling"(): boolean
public "getAssemblyDirection"(): $Direction
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "cancelAssembly"(): void
public "lazyTick"(): void
public "getStation"(): $GlobalStation
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "assemble"(arg0: $UUID$$Type): void
public "tryDisassembleTrain"(arg0: $ServerPlayer$$Type): boolean
public "isValidBogeyOffset"(arg0: integer): boolean
public "exitAssemblyMode"(): boolean
public "enterAssemblyMode"(arg0: $ServerPlayer$$Type): boolean
public "attachPackagePort"(arg0: $PackagePortBlockEntity$$Type): void
public "removePackagePort"(arg0: $PackagePortBlockEntity$$Type): void
public "updateMapColor"(arg0: integer): void
public "updateName"(arg0: StringJS): boolean
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getUpdatePacket"(): $Packet
get "renderBoundingBox"(): $AABB
get "autoSchedule"(): $ItemStack
get "assembling"(): boolean
get "assemblyDirection"(): $Direction
get "station"(): $GlobalStation
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationBlockEntity$$Type = ($StationBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StationBlockEntity$$Original = $StationBlockEntity;}
declare module "com.simibubi.create.content.trains.track.TrackShape" {
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"

export class $TrackShape extends $Enum<($TrackShape)> implements $StringRepresentable$$Interface {
static readonly "CR_O": $TrackShape
static readonly "TW": $TrackShape
static readonly "AE": $TrackShape
static readonly "CR_D": $TrackShape
static readonly "AN": $TrackShape
static readonly "CR_PDX": $TrackShape
static readonly "CR_NDZ": $TrackShape
static readonly "TE": $TrackShape
static readonly "AS": $TrackShape
static readonly "CR_PDZ": $TrackShape
static readonly "PD": $TrackShape
static readonly "ZO": $TrackShape
static readonly "ND": $TrackShape
static readonly "AW": $TrackShape
static readonly "CR_NDX": $TrackShape
static readonly "XO": $TrackShape
static readonly "TN": $TrackShape
static readonly "NONE": $TrackShape
static readonly "TS": $TrackShape

public static "values"(): ($TrackShape)[]
public static "valueOf"(arg0: StringJS): $TrackShape
public "rotate"(arg0: $Rotation$$Type): $TrackShape
public "mirror"(arg0: $Mirror$$Type): $TrackShape
public "getModel"(): StringJS
public "getNormal"(): $Vec3
public "getModelRotation"(): integer
public "isPortal"(): boolean
public "getSerializedName"(): StringJS
public "isJunction"(): boolean
public "getAxes"(): $List<($Vec3)>
public static "asPortal"(arg0: $Direction$$Type): $TrackShape
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "model"(): StringJS
get "normal"(): $Vec3
get "modelRotation"(): integer
get "portal"(): boolean
get "serializedName"(): StringJS
get "junction"(): boolean
get "axes"(): $List<($Vec3)>
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackShape$$Type = (("none") | ("zo") | ("xo") | ("pd") | ("nd") | ("an") | ("as") | ("ae") | ("aw") | ("tn") | ("ts") | ("te") | ("tw") | ("cr_o") | ("cr_d") | ("cr_pdx") | ("cr_pdz") | ("cr_ndx") | ("cr_ndz"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackShape$$Original = $TrackShape;}
declare module "com.simibubi.create.content.trains.track.BezierTrackPointLocation" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $BezierTrackPointLocation extends $Record {
static readonly "CODEC": $Codec<($BezierTrackPointLocation)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BezierTrackPointLocation)>

constructor(curveTarget: $BlockPos$$Type, segment: integer)

public "curveTarget"(): $BlockPos
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "segment"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BezierTrackPointLocation$$Type = ({"curveTarget"?: $BlockPos$$Type, "segment"?: integer}) | ([curveTarget?: $BlockPos$$Type, segment?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BezierTrackPointLocation$$Original = $BezierTrackPointLocation;}
declare module "com.simibubi.create.content.logistics.packagePort.PackagePortTarget" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$PackagePortBlockEntity$$Type} from "com.simibubi.create.content.logistics.packagePort.PackagePortBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $PackagePortTarget {
static readonly "CODEC": $Codec<($PackagePortTarget)>
 "relativePos": $BlockPos
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PackagePortTarget)>

constructor(arg0: $BlockPos$$Type)

public "register"(arg0: $PackagePortBlockEntity$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): void
public "setup"(arg0: $PackagePortBlockEntity$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): void
public "be"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $BlockEntity
public "export"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: boolean): boolean
public "getIcon"(): $ItemStack
public "canSupport"(arg0: $BlockEntity$$Type): boolean
public "depositImmediately"(): boolean
public "deregister"(arg0: $PackagePortBlockEntity$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): void
public "getExactTargetLocation"(arg0: $PackagePortBlockEntity$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): $Vec3
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackagePortTarget$$Type = ($PackagePortTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackagePortTarget$$Original = $PackagePortTarget;}
declare module "com.simibubi.create.content.trains.station.StationMarker" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional$$Type} from "java.util.Optional"
import {$MapDecoration} from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $StationMarker {
constructor(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: $Component$$Type)

public "getName"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $StationMarker
public "getId"(): StringJS
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getTarget"(): $BlockPos
public "getSource"(): $BlockPos
public static "fromWorld"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $StationMarker
public static "createStationDecoration"(arg0: byte, arg1: byte, arg2: ($Component$$Type)?): $MapDecoration
get "name"(): $Component
get "id"(): StringJS
get "target"(): $BlockPos
get "source"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationMarker$$Type = ($StationMarker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StationMarker$$Original = $StationMarker;}
declare module "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType$AirFlowParticleAccess" {
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $FanProcessingType$AirFlowParticleAccess$$Interface {
set "color"(value: integer)
set "alpha"(value: float)
}

export class $FanProcessingType$AirFlowParticleAccess implements $FanProcessingType$AirFlowParticleAccess$$Interface {
 "setColor"(arg0: integer): void
 "setAlpha"(arg0: float): void
 "spawnExtraParticle"(arg0: $ParticleOptions$$Type, arg1: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FanProcessingType$AirFlowParticleAccess$$Type = ($FanProcessingType$AirFlowParticleAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FanProcessingType$AirFlowParticleAccess$$Original = $FanProcessingType$AirFlowParticleAccess;}
declare module "com.simibubi.create.content.trains.schedule.ScheduleRuntime" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Train, $Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DiscoveredPath} from "com.simibubi.create.content.trains.graph.DiscoveredPath"
import {$ScheduleRuntimeAccessor, $ScheduleRuntimeAccessor$$Interface} from "de.mrjulsen.crn.mixin.ScheduleRuntimeAccessor"
import {$ScheduleRuntime$State} from "com.simibubi.create.content.trains.schedule.ScheduleRuntime$State"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ScheduleEntry$$Type} from "com.simibubi.create.content.trains.schedule.ScheduleEntry"
import {$AccessorScheduleRuntime$$Interface} from "com.railwayteam.railways.mixin.AccessorScheduleRuntime"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Schedule, $Schedule$$Type} from "com.simibubi.create.content.trains.schedule.Schedule"
import {$ScheduleInstruction$$Type} from "com.simibubi.create.content.trains.schedule.destination.ScheduleInstruction"
import {$GlobalTrainDisplayData$TrainDeparturePrediction} from "com.simibubi.create.content.trains.display.GlobalTrainDisplayData$TrainDeparturePrediction"

export class $ScheduleRuntime implements $ScheduleRuntimeAccessor$$Interface, $AccessorScheduleRuntime$$Interface {
 "paused": boolean
 "predictionTicks": $List<(integer)>
 "currentEntry": integer
 "completed": boolean
 "displayLinkUpdateRequested": boolean
 "schedule": $Schedule
 "currentTitle": StringJS
 "conditionContext": $List<($CompoundTag)>
 "isAutoSchedule": boolean
 "state": $ScheduleRuntime$State
 "conditionProgress": $List<(integer)>
 "train": $Train
 "ticksInTransit": integer

constructor(arg0: $Train$$Type)

public "setSchedule"(arg0: $Schedule$$Type, arg1: boolean): void
public "write"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "accessor"(): $ScheduleRuntimeAccessor
public "self"(): $ScheduleRuntime
public "tick"(arg0: $Level$$Type): void
public "setCooldown"(arg0: integer): void
public "startCooldown"(): void
public "getWaitingStatus"(arg0: $Level$$Type): $MutableComponent
public "submitPredictions"(): $Collection<($GlobalTrainDisplayData$TrainDeparturePrediction)>
public "getSchedule"(): $Schedule
public "returnSchedule"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "destinationReached"(): void
public "getTrain"(): $Train
public "crn$getTicksInPreviousTransit"(): integer
public "crn$getTransitTicks"(): $List
public "startCurrentInstruction"(arg0: $Level$$Type): $DiscoveredPath
public "discardSchedule"(): void
public "crn$runEstimateStayDuration"(arg0: integer): integer
public "setSchedulePresentClientside"(arg0: boolean): void
public "handler$bhj000$createrailwaysnavigator$onReset"(ci: $CallbackInfo$$Type): void
public "handler$bhj000$createrailwaysnavigator$onResetWhileInit"(ci: $CallbackInfo$$Type): void
public "handler$bhj000$createrailwaysnavigator$onSubmitPredictions"(cir: $CallbackInfoReturnable$$Type, predictions: $Collection$$Type, entryCount: integer, accumulatedTime: integer, current: integer): void
public "transitInterrupted"(): void
public "tickConditions"(arg0: $Level$$Type): void
public "crn$getTrain"(): $Train
public "crn$conditionProgress"(): $List
public "crn$conditionContext"(): $List
public "crn$predictionTicks"(): $List
public "handler$bhj000$createrailwaysnavigator$onStartCurrentInstructionRetForge"(level: $Level$$Type, cir: $CallbackInfoReturnable$$Type, entry: $ScheduleEntry$$Type, instruction: $ScheduleInstruction$$Type): void
set "cooldown"(value: integer)
set "schedulePresentClientside"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduleRuntime$$Type = ($ScheduleRuntime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScheduleRuntime$$Original = $ScheduleRuntime;}
declare module "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BeltProcessingBehaviour$ProcessingCallback$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingCallback"
import {$TransportedItemStackHandlerBehaviour$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour"
import {$BeltProcessingBehaviour$ProcessingResult} from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingResult"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$TransportedItemStack$$Type} from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BeltProcessingBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($BeltProcessingBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type)

public "getType"(): $BehaviourType<(never)>
public static "isBlocked"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "whileItemHeld"(arg0: $BeltProcessingBehaviour$ProcessingCallback$$Type): $BeltProcessingBehaviour
public "whenItemEnters"(arg0: $BeltProcessingBehaviour$ProcessingCallback$$Type): $BeltProcessingBehaviour
public "handleHeldItem"(arg0: $TransportedItemStack$$Type, arg1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
public "handleReceivedItem"(arg0: $TransportedItemStack$$Type, arg1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeltProcessingBehaviour$$Type = ($BeltProcessingBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeltProcessingBehaviour$$Original = $BeltProcessingBehaviour;}
declare module "com.simibubi.create.content.equipment.wrench.IWrenchable" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IWrenchable$$Interface {
}

export class $IWrenchable implements $IWrenchable$$Interface {
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrenchable$$Type = ($IWrenchable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWrenchable$$Original = $IWrenchable;}
declare module "com.simibubi.create.content.trains.graph.TrackGraphLocation" {
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackGraph} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$Couple} from "net.createmod.catnip.data.Couple"

export class $TrackGraphLocation {
 "edge": $Couple<($TrackNodeLocation)>
 "position": double
 "graph": $TrackGraph

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackGraphLocation$$Type = ($TrackGraphLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackGraphLocation$$Original = $TrackGraphLocation;}
declare module "com.simibubi.create.content.trains.observer.TrackObserver" {
import {$FilterItemStack} from "com.simibubi.create.content.logistics.filter.FilterItemStack"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID} from "java.util.UUID"
import {$Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SingleBlockEntityEdgePoint} from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $TrackObserver extends $SingleBlockEntityEdgePoint {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "blockEntityPos": $BlockPos
 "blockEntityDimension": $ResourceKey<($Level)>
 "id": $UUID
 "position": double

constructor()

public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): void
public "write"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: $DimensionPalette$$Type): void
public "getFilter"(): $FilterItemStack
public "tick"(arg0: $TrackGraph$$Type, arg1: boolean): void
public "keepAlive"(arg0: $Train$$Type): void
public "getCurrentTrain"(): $UUID
public "setFilterAndNotify"(arg0: $Level$$Type, arg1: $ItemStack$$Type): void
public "isActivated"(): boolean
public "blockEntityAdded"(arg0: $BlockEntity$$Type, arg1: boolean): void
get "filter"(): $FilterItemStack
get "currentTrain"(): $UUID
get "activated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackObserver$$Type = ($TrackObserver);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackObserver$$Original = $TrackObserver;}
declare module "com.simibubi.create.content.trains.signal.TrackEdgePoint" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$EdgePointType, $EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$TrackEdge$$Type} from "com.simibubi.create.content.trains.graph.TrackEdge"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TrackNodeLocation, $TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $TrackEdgePoint {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "id": $UUID
 "position": double

constructor()

public "invalidate"(arg0: $LevelAccessor$$Type): void
public "setType"(arg0: $EdgePointType$$Type<(never)>): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): void
public "write"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: $DimensionPalette$$Type): void
public "read"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "getId"(): $UUID
public "getType"(): $EdgePointType<(never)>
public "tick"(arg0: $TrackGraph$$Type, arg1: boolean): void
public "setLocation"(arg0: $Couple$$Type<($TrackNodeLocation$$Type)>, arg1: double): void
public "canMerge"(): boolean
public "setId"(arg0: $UUID$$Type): void
public "isPrimary"(arg0: $TrackNode$$Type): boolean
public "onRemoved"(arg0: $TrackGraph$$Type): void
public "getLocationOn"(arg0: $TrackEdge$$Type): double
public "handler$cnm000$create_power_loader$cpl$remove"(arg0: $CallbackInfo$$Type): void
public "handler$cnm000$create_power_loader$cpl$tick"(arg0: $TrackGraph$$Type, arg1: boolean, arg2: $CallbackInfo$$Type): void
public "canNavigateVia"(arg0: $TrackNode$$Type): boolean
public "blockEntityRemoved"(arg0: $BlockPos$$Type, arg1: boolean): void
public "canCoexistWith"(arg0: $EdgePointType$$Type<(never)>, arg1: boolean): boolean
public "blockEntityAdded"(arg0: $BlockEntity$$Type, arg1: boolean): void
set "type"(value: $EdgePointType$$Type<(never)>)
get "type"(): $EdgePointType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackEdgePoint$$Type = ($TrackEdgePoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackEdgePoint$$Original = $TrackEdgePoint;}
declare module "com.simibubi.create.content.trains.graph.TrackGraphBounds" {
import {$BezierConnection} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $TrackGraphBounds {
 "beziers": $List<($BezierConnection)>
 "box": $AABB

constructor(arg0: $TrackGraph$$Type, arg1: $ResourceKey$$Type<($Level)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackGraphBounds$$Type = ($TrackGraphBounds);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackGraphBounds$$Original = $TrackGraphBounds;}
declare module "com.simibubi.create.content.trains.track.TrackMaterial$TrackType$TrackBlockFactory" {
import {$TrackBlock, $TrackBlock$$Type} from "com.simibubi.create.content.trains.track.TrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"

export interface $TrackMaterial$TrackType$TrackBlockFactory$$Interface {

(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial): $TrackBlock$$Type
}

export class $TrackMaterial$TrackType$TrackBlockFactory implements $TrackMaterial$TrackType$TrackBlockFactory$$Interface {
 "create"(arg0: $BlockBehaviour$Properties$$Type, arg1: $TrackMaterial$$Type): $TrackBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackMaterial$TrackType$TrackBlockFactory$$Type = ((arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial) => $TrackBlock$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackMaterial$TrackType$TrackBlockFactory$$Original = $TrackMaterial$TrackType$TrackBlockFactory;}
declare module "com.simibubi.create.content.logistics.packagePort.PackagePortBlockEntity" {
import {$SmartInventory} from "com.simibubi.create.foundation.item.SmartInventory"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level} from "net.minecraft.world.level.Level"
import {$PackagePortTarget} from "com.simibubi.create.content.logistics.packagePort.PackagePortTarget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PackagePortBlockEntityAccessor$$Interface} from "net.zlt.create_vibrant_vaults.mixin.accessor.PackagePortBlockEntityAccessor"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PackagePortBlockEntity extends $SmartBlockEntity implements $MenuProvider$$Interface, $Clearable$$Interface, $PackagePortBlockEntityAccessor$$Interface {
 "acceptsPackages": boolean
 "worldPosition": $BlockPos
 "level": $Level
 "addressFilter": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasComparators": byte
 "inventory": $SmartInventory
 "target": $PackagePortTarget

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "invalidate"(): void
public "drop"(arg0: $ItemStack$$Type): void
public "destroy"(): void
public "use"(arg0: $Player$$Type): $ItemInteractionResult
public "getDisplayName"(): $Component
public "getComparatorOutput"(): integer
public "filterChanged"(): void
public "getFilterString"(): StringJS
public "lazyTick"(): void
public "isBackedUp"(): boolean
public "clearContent"(): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "createVibrantVaults$getItemHandler"(): $IItemHandler
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public static "tryClear"(arg0: any): void
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "getUpdatePacket"(): $Packet
get "displayName"(): $Component
get "comparatorOutput"(): integer
get "filterString"(): StringJS
get "backedUp"(): boolean
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackagePortBlockEntity$$Type = ($PackagePortBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackagePortBlockEntity$$Original = $PackagePortBlockEntity;}
declare module "com.simibubi.create.content.trains.entity.Navigation" {
import {$Optional} from "java.util.Optional"
import {$UUID} from "java.util.UUID"
import {$IGenerallySearchableNavigation$PointTest$$Type} from "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation$PointTest"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DiscoveredPath, $DiscoveredPath$$Type} from "com.simibubi.create.content.trains.graph.DiscoveredPath"
import {$Pair as $Pair$0, $Pair$$Type as $Pair$0$$Type} from "net.createmod.catnip.data.Pair"
import {$TravellingPoint$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint"
import {$IWaypointableNavigation$$Interface} from "com.railwayteam.railways.mixin_interfaces.IWaypointableNavigation"
import {$SignalBoundary$$Type} from "com.simibubi.create.content.trains.signal.SignalBoundary"
import {$TravellingPoint$ITrackSelector} from "com.simibubi.create.content.trains.entity.TravellingPoint$ITrackSelector"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$AccessorNavigation$$Interface} from "com.railwayteam.railways.mixin.AccessorNavigation"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Train, $Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$SignalEdgeGroup$$Type} from "com.simibubi.create.content.trains.signal.SignalEdgeGroup"
import {$Pair$$Type} from "de.mrjulsen.mcdragonlib.data.Pair"
import {$INavigationExtension$$Interface} from "de.mrjulsen.crn.data.schedule.INavigationExtension"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$IGenerallySearchableNavigation$$Interface} from "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation"
import {$Navigation$StationTest$$Type} from "com.simibubi.create.content.trains.entity.Navigation$StationTest"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$Queue} from "java.util.Queue"
import {$PriorityQueue$$Type} from "java.util.PriorityQueue"
import {$TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$Couple$$Type} from "net.createmod.catnip.data.Couple"
import {$PenaltyResult} from "de.mrjulsen.crn.util.PenaltyResult"
import {$IBufferBlockCheckableNavigation$$Interface} from "com.railwayteam.railways.mixin_interfaces.IBufferBlockCheckableNavigation"
import {$GlobalStation, $GlobalStation$$Type} from "com.simibubi.create.content.trains.station.GlobalStation"

export class $Navigation implements $INavigationExtension$$Interface, $AccessorNavigation$$Interface, $IGenerallySearchableNavigation$$Interface, $IBufferBlockCheckableNavigation$$Interface, $IWaypointableNavigation$$Interface {
 "distanceToDestination": double
 "forward": boolean
 "destination": $GlobalStation
 "delayedWaitConditions": $Queue
 "finalReasonByDirection": $Map
 "announceArrival": boolean
 "ticksWaitingForSignal": integer
 "waitingForSignal": $Pair$0<($UUID), (boolean)>
 "distanceStartedAt": double
 "destinationBehindTrain": boolean
 "distanceToSignal": double
 "train": $Train
 "currentReasons": $PenaltyResult

constructor(arg0: $Train$$Type)

public "write"(arg0: $DimensionPalette$$Type): $CompoundTag
public "read"(arg0: $CompoundTag$$Type, arg1: $TrackGraph$$Type, arg2: $DimensionPalette$$Type): void
public "search"(arg0: double, arg1: double, arg2: boolean, arg3: $ArrayList$$Type<($GlobalStation$$Type)>, arg4: $Navigation$StationTest$$Type): void
public "search"(arg0: double, arg1: boolean, arg2: $ArrayList$$Type<($GlobalStation$$Type)>, arg3: $Navigation$StationTest$$Type): void
public "isActive"(): boolean
public "tick"(arg0: $Level$$Type): void
public "control"(arg0: $TravellingPoint$$Type): $TravellingPoint$ITrackSelector
public "railways$updateControlsBlock"(arg0: boolean): void
public "findNearestApproachable"(arg0: boolean): $GlobalStation
public "findPathTo"(arg0: $GlobalStation$$Type, arg1: double): $DiscoveredPath
public "findPathTo"(arg0: $ArrayList$$Type<($GlobalStation$$Type)>, arg1: double): $DiscoveredPath
public "getCurrentPath"(): $List
public "railways$findNearestApproachableSwitch"(arg0: boolean): $Pair$0
public "startNavigation"(arg0: $DiscoveredPath$$Type): double
public "cancelNavigation"(): void
public "addDelayedWaitCondition"(pair: $Pair$$Type): void
public "getPenaltiesByDirection"(): $Optional
public "railways$isWaypointMode"(): boolean
public "isDelayedWaitConditionPending"(): boolean
public "redirect$bhm000$createrailwaysnavigator$onCheckOccupiedRedSignal"(group: $SignalEdgeGroup$$Type, signal: $SignalBoundary$$Type): boolean
public "redirect$bhm000$createrailwaysnavigator$onReadFrontierEntry"(queue: $PriorityQueue$$Type, obj: any): boolean
public "redirect$bhm000$createrailwaysnavigator$onCreateFrontierEntry"(obj: any): integer
public "railways$searchGeneral"(arg0: double, arg1: double, arg2: boolean, arg3: $IGenerallySearchableNavigation$PointTest$$Type): void
public "railways$searchGeneral"(arg0: double, arg1: boolean, arg2: $IGenerallySearchableNavigation$PointTest$$Type): void
public "handler$bhm000$createrailwaysnavigator$onTick"(level: $Level$$Type, ci: $CallbackInfo$$Type): void
public "redirect$bhm000$createrailwaysnavigator$onForceRed"(signal: $SignalBoundary$$Type, node: $TrackNode$$Type): boolean
public "redirect$bhm000$createrailwaysnavigator$onTestStation"(test: $Navigation$StationTest$$Type, distance: double, cost: double, reachedVia: $Map$$Type, current: $Pair$0$$Type, station: $GlobalStation$$Type): boolean
public "redirect$bhm000$createrailwaysnavigator$onGetPenaltyByEdge"(map: $Map$$Type, edge: any, defaultValue: any): any
public "handler$bhm000$createrailwaysnavigator$selectDirection"(destinations: $ArrayList$$Type, maxCost: double, cir: $CallbackInfoReturnable$$Type, graph: $TrackGraph$$Type, results: $Couple$$Type): void
public "handler$bhm000$createrailwaysnavigator$onStartSearch"(maxDistance: double, maxCosts: double, forward: boolean, destinations: $ArrayList$$Type, stationTest: $Navigation$StationTest$$Type, ci: $CallbackInfo$$Type): void
public "handler$bhm000$createrailwaysnavigator$resetOnCancel"(ci: $CallbackInfo$$Type): void
public "handler$bhm000$createrailwaysnavigator$onStartNavigation"(a: any, maxCost: double, cir: $CallbackInfoReturnable$$Type): void
public "handler$bhm000$createrailwaysnavigator$onEndNavigation"(a: any, maxCost: double, cir: $CallbackInfoReturnable$$Type): void
public "controlSignalScout"(): $TravellingPoint$ITrackSelector
get "active"(): boolean
get "currentPath"(): $List
get "penaltiesByDirection"(): $Optional
get "delayedWaitConditionPending"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Navigation$$Type = ($Navigation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Navigation$$Original = $Navigation;}
declare module "com.simibubi.create.content.kinetics.KineticNetwork" {
import {$FlywheelAccessibleKineticNetwork$$Interface} from "com.kipti.bnb.mixin_accessor.FlywheelAccessibleKineticNetwork"
import {$Map} from "java.util.Map"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$KineticBlockEntity, $KineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"

export class $KineticNetwork implements $FlywheelAccessibleKineticNetwork$$Interface {
 "sources": $Map<($KineticBlockEntity), (float)>
 "members": $Map<($KineticBlockEntity), (float)>
 "initialized": boolean
 "id": long

constructor()

public "remove"(arg0: $KineticBlockEntity$$Type): void
public "add"(arg0: $KineticBlockEntity$$Type): void
public "getSize"(): integer
public "sync"(): void
public "updateCapacityFor"(arg0: $KineticBlockEntity$$Type, arg1: float): void
public "updateStressFor"(arg0: $KineticBlockEntity$$Type, arg1: float): void
public "updateStress"(): void
public "initFromTE"(arg0: float, arg1: float, arg2: integer): void
public "handler$bim000$bits_n_bobs$remove"(arg0: $KineticBlockEntity$$Type, arg1: $CallbackInfo$$Type): void
public "handler$bim000$bits_n_bobs$add"(arg0: $KineticBlockEntity$$Type, arg1: $CallbackInfo$$Type): void
public "updateNetwork"(): void
public "addSilently"(arg0: $KineticBlockEntity$$Type, arg1: float, arg2: float): void
public "bits_n_bobs$updateFlywheelStresses"(): void
public "handler$bim000$bits_n_bobs$addSilently"(arg0: $KineticBlockEntity$$Type, arg1: float, arg2: float, arg3: $CallbackInfo$$Type): void
public "bits_n_bobs$getFlywheelStressReleaseCapacity"(): float
public "bits_n_bobs$getFlywheelStressAbsoptionCapacity"(): float
public "calculateCapacity"(): float
public "getActualCapacityOf"(arg0: $KineticBlockEntity$$Type): float
public "handler$bim000$bits_n_bobs$updateNetworkHead"(arg0: $CallbackInfo$$Type): void
public "calculateStress"(): float
public "updateCapacity"(): void
public "getActualStressOf"(arg0: $KineticBlockEntity$$Type): float
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticNetwork$$Type = ($KineticNetwork);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticNetwork$$Original = $KineticNetwork;}
declare module "com.simibubi.create.content.trains.track.TrackMaterial" {
import {$TrackMaterial$TrackModelHolder, $TrackMaterial$TrackModelHolder$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackModelHolder"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial$TrackType, $TrackMaterial$TrackType$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TrackMaterial$TrackType$TrackBlockFactory$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType$TrackBlockFactory"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TrackBlock, $TrackBlock$$Type} from "com.simibubi.create.content.trains.track.TrackBlock"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $TrackMaterial {
static readonly "ALL": $Map<($ResourceLocation), ($TrackMaterial)>
readonly "trackBlock": $NonNullSupplier<($NonNullSupplier<($TrackBlock)>)>
readonly "trackType": $TrackMaterial$TrackType
readonly "langName": StringJS
static readonly "ANDESITE": $TrackMaterial
readonly "particle": $ResourceLocation
readonly "id": $ResourceLocation
readonly "sleeperIngredient": $Ingredient
readonly "railsIngredient": $Ingredient

constructor(arg0: $ResourceLocation$$Type, arg1: StringJS, arg2: $NonNullSupplier$$Type<($NonNullSupplier$$Type<($TrackBlock$$Type)>)>, arg3: $ResourceLocation$$Type, arg4: $Ingredient$$Type, arg5: $Ingredient$$Type, arg6: $TrackMaterial$TrackType$$Type, arg7: $Supplier$$Type<($Supplier$$Type<($TrackMaterial$TrackModelHolder$$Type)>)>, arg8: $TrackMaterial$TrackType$TrackBlockFactory$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS, arg2: $NonNullSupplier$$Type<($NonNullSupplier$$Type<($TrackBlock$$Type)>)>, arg3: $ResourceLocation$$Type, arg4: $Ingredient$$Type, arg5: $Ingredient$$Type, arg6: $TrackMaterial$TrackType$$Type, arg7: $Supplier$$Type<($Supplier$$Type<($TrackMaterial$TrackModelHolder$$Type)>)>)

public "resourceName"(): StringJS
public "getBlock"(): $TrackBlock
public static "allFromMod"(arg0: StringJS): $List<($TrackMaterial)>
public static "fromItem"(arg0: $Item$$Type): $TrackMaterial
public "getModelHolder"(): $TrackMaterial$TrackModelHolder
public "getBlockSupplier"(): $NonNullSupplier<($TrackBlock)>
public static "allBlocksFromMod"(arg0: StringJS): $List<($NonNullSupplier<($Block)>)>
public "createBlock"(arg0: $BlockBehaviour$Properties$$Type): $TrackBlock
public static "deserialize"(arg0: StringJS): $TrackMaterial
public "asStack"(): $ItemStack
public "asStack"(arg0: integer): $ItemStack
public "isFromMod"(arg0: StringJS): boolean
public static "allBlocks"(): $List<($NonNullSupplier<($Block)>)>
get "block"(): $TrackBlock
get "modelHolder"(): $TrackMaterial$TrackModelHolder
get "blockSupplier"(): $NonNullSupplier<($TrackBlock)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackMaterial$$Type = ($TrackMaterial);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackMaterial$$Original = $TrackMaterial;}
declare module "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel" {
import {$LangBuilder} from "net.createmod.catnip.lang.LangBuilder"
import {$Enum} from "java.lang.Enum"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $IRotate$SpeedLevel extends $Enum<($IRotate$SpeedLevel)> {
static readonly "MEDIUM": $IRotate$SpeedLevel
static readonly "SLOW": $IRotate$SpeedLevel
static readonly "NONE": $IRotate$SpeedLevel
static readonly "FAST": $IRotate$SpeedLevel

public static "values"(): ($IRotate$SpeedLevel)[]
public static "valueOf"(arg0: StringJS): $IRotate$SpeedLevel
public static "of"(arg0: float): $IRotate$SpeedLevel
public "getColor"(): integer
public "getSpeedValue"(): float
public "getTextColor"(): $ChatFormatting
public static "getFormattedSpeedText"(arg0: float, arg1: boolean): $LangBuilder
public "getParticleSpeed"(): integer
get "color"(): integer
get "speedValue"(): float
get "textColor"(): $ChatFormatting
get "particleSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRotate$SpeedLevel$$Type = (("none") | ("slow") | ("medium") | ("fast"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRotate$SpeedLevel$$Original = $IRotate$SpeedLevel;}
declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$TransportedResult" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$TransportedItemStack, $TransportedItemStack$$Type} from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"

export class $TransportedItemStackHandlerBehaviour$TransportedResult {
public static "convertToAndLeaveHeld"(arg0: $List$$Type<($TransportedItemStack$$Type)>, arg1: $TransportedItemStack$$Type): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "removeItem"(): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "doNothing"(): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "convertTo"(arg0: $List$$Type<($TransportedItemStack$$Type)>): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "convertTo"(arg0: $TransportedItemStack$$Type): $TransportedItemStackHandlerBehaviour$TransportedResult
public "getOutputs"(): $List<($TransportedItemStack)>
public "doesNothing"(): boolean
public "didntChangeFrom"(arg0: $ItemStack$$Type): boolean
public "hasHeldOutput"(): boolean
public "getHeldOutput"(): $TransportedItemStack
get "outputs"(): $List<($TransportedItemStack)>
get "heldOutput"(): $TransportedItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportedItemStackHandlerBehaviour$TransportedResult$$Type = ($TransportedItemStackHandlerBehaviour$TransportedResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransportedItemStackHandlerBehaviour$TransportedResult$$Original = $TransportedItemStackHandlerBehaviour$TransportedResult;}
declare module "com.simibubi.create.content.trains.track.BezierConnection$GirderAngles" {
import {$PoseStack$Pose} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $BezierConnection$GirderAngles {
readonly "beams": ($Couple<($PoseStack$Pose)>)[]
readonly "lightPosition": ($BlockPos)[]
readonly "length": integer
readonly "beamCaps": ($Couple<($Couple<($PoseStack$Pose)>)>)[]

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BezierConnection$GirderAngles$$Type = ($BezierConnection$GirderAngles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BezierConnection$GirderAngles$$Original = $BezierConnection$GirderAngles;}
declare module "com.simibubi.create.content.trains.signal.SignalBoundary" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SignalBlockEntity$$Type} from "com.simibubi.create.content.trains.signal.SignalBlockEntity"
import {$EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SignalBlock$SignalType} from "com.simibubi.create.content.trains.signal.SignalBlock$SignalType"
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$TrackEdgePoint} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$SignalBlockEntity$SignalState} from "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$SignalBlockEntity$OverlayState} from "com.simibubi.create.content.trains.signal.SignalBlockEntity$OverlayState"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SignalBoundary extends $TrackEdgePoint {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "sidesToUpdate": $Couple<(boolean)>
 "types": $Couple<($SignalBlock$SignalType)>
 "cachedStates": $Couple<($SignalBlockEntity$SignalState)>
 "groups": $Couple<($UUID)>
 "id": $UUID
 "position": double
 "blockEntities": $Couple<($Map<($BlockPos), (boolean)>)>

constructor()

public "invalidate"(arg0: $LevelAccessor$$Type): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): void
public "write"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: $DimensionPalette$$Type): void
public "read"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "tick"(arg0: $TrackGraph$$Type, arg1: boolean): void
public "setGroup"(arg0: boolean, arg1: $UUID$$Type): void
public "updateBlockEntityPower"(arg0: $SignalBlockEntity$$Type): void
public "canMerge"(): boolean
public "cycleSignalType"(arg0: $BlockPos$$Type): void
public "getGroup"(arg0: $TrackNode$$Type): $UUID
public "onRemoved"(arg0: $TrackGraph$$Type): void
public "queueUpdate"(arg0: $TrackNode$$Type): void
public "getTypeFor"(arg0: $BlockPos$$Type): $SignalBlock$SignalType
public "setGroupAndUpdate"(arg0: $TrackNode$$Type, arg1: $UUID$$Type): void
public "canNavigateVia"(arg0: $TrackNode$$Type): boolean
public "getOverlayFor"(arg0: $BlockPos$$Type): $SignalBlockEntity$OverlayState
public "getStateFor"(arg0: $BlockPos$$Type): $SignalBlockEntity$SignalState
public "blockEntityRemoved"(arg0: $BlockPos$$Type, arg1: boolean): void
public "isForcedRed"(arg0: boolean): boolean
public "isForcedRed"(arg0: $TrackNode$$Type): boolean
public "canCoexistWith"(arg0: $EdgePointType$$Type<(never)>, arg1: boolean): boolean
public "blockEntityAdded"(arg0: $BlockEntity$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBoundary$$Type = ($SignalBoundary);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignalBoundary$$Original = $SignalBoundary;}
declare module "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType" {
import {$FanProcessingType$AirFlowParticleAccess$$Type} from "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType$AirFlowParticleAccess"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $FanProcessingType$$Interface {
get "priority"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreateFanProcessingType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreateFanProcessingTypeTag
}

export class $FanProcessingType implements $FanProcessingType$$Interface {
 "getPriority"(): integer
static "parse"(arg0: StringJS): $FanProcessingType
 "process"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $List<($ItemStack)>
static "getAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $FanProcessingType
 "canProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
 "morphAirFlow"(arg0: $FanProcessingType$AirFlowParticleAccess$$Type, arg1: $RandomSource$$Type): void
 "affectEntity"(arg0: $Entity$$Type, arg1: $Level$$Type): void
 "isValidAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "spawnProcessingParticles"(arg0: $Level$$Type, arg1: $Vec3$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FanProcessingType$$Type = (Special.CreateFanProcessingType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FanProcessingType$$Original = $FanProcessingType;}
declare module "com.simibubi.create.content.trains.graph.TrackEdgeIntersection" {
import {$TrackNodeLocation, $TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID} from "java.util.UUID"
import {$Couple} from "net.createmod.catnip.data.Couple"

export class $TrackEdgeIntersection {
 "groupId": $UUID
 "location": double
 "id": $UUID
 "targetLocation": double
 "target": $Couple<($TrackNodeLocation)>

constructor()

public "write"(arg0: $DimensionPalette$$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type, arg1: $DimensionPalette$$Type): $TrackEdgeIntersection
public "targets"(arg0: $TrackNodeLocation$$Type, arg1: $TrackNodeLocation$$Type): boolean
public "isNear"(arg0: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackEdgeIntersection$$Type = ($TrackEdgeIntersection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackEdgeIntersection$$Original = $TrackEdgeIntersection;}
declare module "com.simibubi.create.content.trains.graph.EdgeData" {
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackEdgePoint, $TrackEdgePoint$$Type} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$ISwitchDisabledEdge$$Interface} from "com.railwayteam.railways.mixin_interfaces.ISwitchDisabledEdge"
import {$TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$TrackEdgeIntersection} from "com.simibubi.create.content.trains.graph.TrackEdgeIntersection"
import {$EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$TrackEdge$$Type} from "com.simibubi.create.content.trains.graph.TrackEdge"

export class $EdgeData implements $ISwitchDisabledEdge$$Interface {
static readonly "passiveGroup": $UUID

constructor(arg0: $TrackEdge$$Type)

public "refreshIntersectingSignalGroups"(arg0: $TrackGraph$$Type): void
public "get"<T extends $TrackEdgePoint>(arg0: $EdgePointType$$Type<(T)>, arg1: double): T
public "next"<T extends $TrackEdgePoint>(arg0: $EdgePointType$$Type<(T)>, arg1: double): T
public "next"(arg0: double): $TrackEdgePoint
public "isEnabled"(): boolean
public "write"(arg0: $DimensionPalette$$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type, arg1: $TrackEdge$$Type, arg2: $TrackGraph$$Type, arg3: $DimensionPalette$$Type): $EdgeData
public "isAutomatic"(): boolean
public "setEnabled"(arg0: boolean): void
public "removePoint"(arg0: $TrackGraph$$Type, arg1: $TrackEdgePoint$$Type): void
public "getPoints"(): $List<($TrackEdgePoint)>
public "setAutomatic"(arg0: boolean): void
public "getAutomaticallySelectedPriority"(): integer
public "isAutomaticallySelected"(): boolean
public "ackAutomaticSelection"(): void
public "hasPoints"(): boolean
public "addPoint"<T extends $TrackEdgePoint>(arg0: $TrackGraph$$Type, arg1: $TrackEdgePoint$$Type): void
public "hasSignalBoundaries"(): boolean
public "getSingleSignalGroup"(): $UUID
public "setSingleSignalGroup"(arg0: $TrackGraph$$Type, arg1: $UUID$$Type): void
public "getEffectiveEdgeGroupId"(arg0: $TrackGraph$$Type): $UUID
public "setAutomaticallySelected"(): void
public "getIntersections"(): $List<($TrackEdgeIntersection)>
public "getGroupAtPosition"(arg0: $TrackGraph$$Type, arg1: double): $UUID
public "addIntersection"(arg0: $TrackGraph$$Type, arg1: $UUID$$Type, arg2: double, arg3: $TrackNode$$Type, arg4: $TrackNode$$Type, arg5: double): void
public "removeIntersection"(arg0: $TrackGraph$$Type, arg1: $UUID$$Type): void
public "hasIntersections"(): boolean
public static "isEnabled"(arg0: $TrackEdge$$Type): boolean
public static "isAutomatic"(arg0: $TrackEdge$$Type): boolean
public static "isDisabled"(arg0: $TrackEdge$$Type): boolean
public static "automaticallySelect"(arg0: $TrackEdge$$Type): void
get "enabled"(): boolean
get "automatic"(): boolean
set "enabled"(value: boolean)
get "points"(): $List<($TrackEdgePoint)>
set "automatic"(value: boolean)
get "automaticallySelectedPriority"(): integer
get "automaticallySelected"(): boolean
get "singleSignalGroup"(): $UUID
get "automaticallySelected"(): void
get "intersections"(): $List<($TrackEdgeIntersection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EdgeData$$Type = ($EdgeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EdgeData$$Original = $EdgeData;}
declare module "com.simibubi.create.content.trains.entity.TravellingPoint" {
import {$TravellingPoint$SteerDirection$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection"
import {$TrackGraphLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackGraphLocation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TravellingPoint$IEdgePointListener, $TravellingPoint$IEdgePointListener$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint$IEdgePointListener"
import {$List$$Type} from "java.util.List"
import {$TrackEdge, $TrackEdge$$Type} from "com.simibubi.create.content.trains.graph.TrackEdge"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TravellingPoint$ITurnListener, $TravellingPoint$ITurnListener$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint$ITurnListener"
import {$TravellingPoint$ITrackSelector, $TravellingPoint$ITrackSelector$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint$ITrackSelector"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$TrackNode, $TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$TravellingPoint$IPortalListener, $TravellingPoint$IPortalListener$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint$IPortalListener"

export class $TravellingPoint {
 "node2": $TrackNode
 "edge": $TrackEdge
 "blocked": boolean
 "position": double
 "node1": $TrackNode
 "upsideDown": boolean

constructor()
constructor(arg0: $TrackNode$$Type, arg1: $TrackNode$$Type, arg2: $TrackEdge$$Type, arg3: double, arg4: boolean)

public "getPosition"(arg0: $TrackGraph$$Type): $Vec3
public "getPosition"(arg0: $TrackGraph$$Type, arg1: boolean): $Vec3
public "reverse"(arg0: $TrackGraph$$Type): void
public "write"(arg0: $DimensionPalette$$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type, arg1: $TrackGraph$$Type, arg2: $DimensionPalette$$Type): $TravellingPoint
public "random"(): $TravellingPoint$ITrackSelector
public "migrateTo"(arg0: $List$$Type<($TrackGraphLocation$$Type)>): void
public "steer"(arg0: $TravellingPoint$SteerDirection$$Type, arg1: $Vec3$$Type): $TravellingPoint$ITrackSelector
public "follow"(arg0: $TravellingPoint$$Type, arg1: $Consumer$$Type<(boolean)>): $TravellingPoint$ITrackSelector
public "follow"(arg0: $TravellingPoint$$Type): $TravellingPoint$ITrackSelector
public "ignorePortals"(): $TravellingPoint$IPortalListener
public "ignoreTurns"(): $TravellingPoint$ITurnListener
public "ignoreEdgePoints"(): $TravellingPoint$IEdgePointListener
public "travel"(arg0: $TrackGraph$$Type, arg1: double, arg2: $TravellingPoint$ITrackSelector$$Type, arg3: $TravellingPoint$IEdgePointListener$$Type): double
public "travel"(arg0: $TrackGraph$$Type, arg1: double, arg2: $TravellingPoint$ITrackSelector$$Type): double
public "travel"(arg0: $TrackGraph$$Type, arg1: double, arg2: $TravellingPoint$ITrackSelector$$Type, arg3: $TravellingPoint$IEdgePointListener$$Type, arg4: $TravellingPoint$ITurnListener$$Type): double
public "travel"(arg0: $TrackGraph$$Type, arg1: double, arg2: $TravellingPoint$ITrackSelector$$Type, arg3: $TravellingPoint$IEdgePointListener$$Type, arg4: $TravellingPoint$ITurnListener$$Type, arg5: $TravellingPoint$IPortalListener$$Type): double
public "getPositionWithOffset"(arg0: $TrackGraph$$Type, arg1: double, arg2: boolean): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellingPoint$$Type = ($TravellingPoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellingPoint$$Original = $TravellingPoint;}
declare module "com.simibubi.create.content.schematics.requirement.ItemRequirement" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ItemRequirement$ItemUseType$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement$ItemUseType"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ItemRequirement$StackRequirement, $ItemRequirement$StackRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement$StackRequirement"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemRequirement {
static readonly "NONE": $ItemRequirement
static readonly "INVALID": $ItemRequirement

constructor(arg0: $ItemRequirement$ItemUseType$$Type, arg1: $List$$Type<($ItemStack$$Type)>)
constructor(arg0: $ItemRequirement$ItemUseType$$Type, arg1: $Item$$Type)
constructor(arg0: $ItemRequirement$ItemUseType$$Type, arg1: $ItemStack$$Type)
constructor(arg0: $ItemRequirement$StackRequirement$$Type)
constructor(arg0: $List$$Type<($ItemRequirement$StackRequirement$$Type)>)

public "isEmpty"(): boolean
public static "of"(arg0: $Entity$$Type): $ItemRequirement
public static "of"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public "isInvalid"(): boolean
public "union"(arg0: $ItemRequirement$$Type): $ItemRequirement
public "getRequiredItems"(): $List<($ItemRequirement$StackRequirement)>
get "empty"(): boolean
get "invalid"(): boolean
get "requiredItems"(): $List<($ItemRequirement$StackRequirement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirement$$Type = ($ItemRequirement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRequirement$$Original = $ItemRequirement;}
declare module "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType" {
import {$Enum} from "java.lang.Enum"

export class $TrackTargetingBehaviour$RenderedTrackOverlayType extends $Enum<($TrackTargetingBehaviour$RenderedTrackOverlayType)> {
static readonly "SIGNAL": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "STATION": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "DUAL_SIGNAL": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "OBSERVER": $TrackTargetingBehaviour$RenderedTrackOverlayType

public static "values"(): ($TrackTargetingBehaviour$RenderedTrackOverlayType)[]
public static "valueOf"(arg0: StringJS): $TrackTargetingBehaviour$RenderedTrackOverlayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type = (("station") | ("signal") | ("dual_signal") | ("observer"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackTargetingBehaviour$RenderedTrackOverlayType$$Original = $TrackTargetingBehaviour$RenderedTrackOverlayType;}
declare module "com.simibubi.create.content.trains.entity.TrainStatus" {
import {$TrainStatusAccessor$$Interface} from "de.mrjulsen.crn.mixin.TrainStatusAccessor"
import {$Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TrainStatus$StatusMessage$$Type} from "com.simibubi.create.content.trains.entity.TrainStatus$StatusMessage"

export class $TrainStatus implements $TrainStatusAccessor$$Interface {
 "navigation": boolean
 "track": boolean
 "conductor": boolean

constructor(arg0: $Train$$Type)

public "tick"(arg0: $Level$$Type): void
public "missingConductor"(): void
public "failedNavigation"(): void
public "foundConductor"(): void
public "addMessage"(arg0: $TrainStatus$StatusMessage$$Type): void
public "crash"(): void
public "failedMigration"(): void
public "doublePortal"(): void
public "manualControls"(): void
public "crn$navigation"(): boolean
public "crn$conductor"(): boolean
public "failedNavigationNoTarget"(arg0: StringJS): void
public "failedPackageNoTarget"(arg0: StringJS): void
public "crn$track"(): boolean
public "successfulMigration"(): void
public "trackOK"(): void
public "endOfTrack"(): void
public "highStress"(): void
public "successfulNavigation"(): void
public "missingCorrectConductor"(): void
public "newSchedule"(): void
public "displayInformation"(arg0: StringJS, arg1: boolean, ...arg2: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainStatus$$Type = ($TrainStatus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrainStatus$$Original = $TrainStatus;}
declare module "com.simibubi.create.content.trains.graph.DimensionPalette" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $DimensionPalette {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DimensionPalette)>

constructor()
constructor(arg0: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>)

public "decode"(arg0: integer): $ResourceKey<($Level)>
public "encode"(arg0: $ResourceKey$$Type<($Level)>): integer
public "write"(arg0: $CompoundTag$$Type): void
public static "read"(arg0: $CompoundTag$$Type): $DimensionPalette
public "send"(arg0: $FriendlyByteBuf$$Type): void
public static "receive"(arg0: $FriendlyByteBuf$$Type): $DimensionPalette
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionPalette$$Type = ($DimensionPalette);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionPalette$$Original = $DimensionPalette;}
declare module "com.simibubi.create.content.contraptions.StructureTransform" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StructureTransform {
 "mirror": $Mirror
 "offset": $BlockPos
 "rotationAxis": $Direction$Axis
 "rotation": $Rotation
 "angle": integer
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StructureTransform)>

constructor(arg0: $BlockPos$$Type, arg1: float, arg2: float, arg3: float)
constructor(arg0: $BlockPos$$Type, arg1: $Direction$Axis$$Type, arg2: $Rotation$$Type, arg3: $Mirror$$Type)

public "apply"(arg0: $BlockState$$Type): $BlockState
public "apply"(arg0: $BlockEntity$$Type): void
public "apply"(arg0: $BlockPos$$Type): $BlockPos
public "apply"(arg0: $Vec3$$Type): $Vec3
public "unapply"(arg0: $BlockPos$$Type): $BlockPos
public "mirrorFacing"(arg0: $Direction$$Type): $Direction
public "rotateAxis"(arg0: $Direction$Axis$$Type): $Direction$Axis
public "applyWithoutOffsetUncentered"(arg0: $Vec3$$Type): $Vec3
public "rotateFacing"(arg0: $Direction$$Type): $Direction
public "unapplyWithoutOffset"(arg0: $BlockPos$$Type): $BlockPos
public "unapplyWithoutOffset"(arg0: $Vec3$$Type): $Vec3
public "applyWithoutOffset"(arg0: $Vec3$$Type): $Vec3
public "applyWithoutOffset"(arg0: $BlockPos$$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTransform$$Type = ($StructureTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTransform$$Original = $StructureTransform;}
declare module "com.simibubi.create.content.kinetics.base.KineticBlockEntity" {
import {$KineticEffectHandler} from "com.simibubi.create.content.kinetics.base.KineticEffectHandler"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$KineticBlockEntityAccessor$$Interface} from "dev.lopyluna.gnkinetics.mixins.KineticBlockEntityAccessor"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveHoveringInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveHoveringInformation"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$KineticNetwork} from "com.simibubi.create.content.kinetics.KineticNetwork"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IRotate$$Type} from "com.simibubi.create.content.kinetics.base.IRotate"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation$$Interface, $IHaveHoveringInformation$$Interface, $KineticBlockEntityAccessor$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "worldPosition": $BlockPos
 "level": $Level
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "hasComparators": byte
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "remove"(): void
public "initialize"(): void
public "tick"(): void
public "calculateAddedStressCapacity"(): float
public "calculateStressApplied"(): float
public "getTheoreticalSpeed"(): float
public "getGeneratedSpeed"(): float
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "attachKinetics"(): void
public "warnOfMovement"(): void
public "isSpeedRequirementFulfilled"(): boolean
public "addToTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public static "convertToDirection"(arg0: float, arg1: $Direction$$Type): float
public "detachKinetics"(): void
public "removeSource"(): void
public "getOrCreateNetwork"(): $KineticNetwork
public "setSource"(arg0: $BlockPos$$Type): void
public static "convertToLinear"(arg0: float): float
public "isCustomConnection"(arg0: $KineticBlockEntity$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): boolean
public static "convertToAngular"(arg0: float): float
public "isOverStressed"(): boolean
public "isSource"(): boolean
public "tickAudio"(): void
public "effects"(): $KineticEffectHandler
public "hasNetwork"(): boolean
public "onSpeedChanged"(arg0: float): void
public static "switchToBlockState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "getFlickerScore"(): integer
public "updateFromNetwork"(arg0: float, arg1: float, arg2: integer): void
public "needsSpeedUpdate"(): boolean
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "handler$foe000$gnkinetics$propagateRotationTo"(arg0: $KineticBlockEntity$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: boolean, arg5: boolean, arg6: $CallbackInfoReturnable$$Type): void
public "getSpeed"(): float
public "setSpeed"(arg0: float): void
public "addPropagationLocations"(arg0: $IRotate$$Type, arg1: $BlockState$$Type, arg2: $List$$Type<($BlockPos$$Type)>): $List<($BlockPos)>
public "propagateRotationTo"(arg0: $KineticBlockEntity$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: boolean, arg5: boolean): float
public "getRotationAngleOffset"(arg0: $Direction$Axis$$Type): integer
public "setNetwork"(arg0: long): void
public "hasSource"(): boolean
public "requestModelDataUpdate"(): void
public "clearKineticInformation"(): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getUpdatePacket"(): $Packet
get "theoreticalSpeed"(): float
get "generatedSpeed"(): float
get "speedRequirementFulfilled"(): boolean
get "orCreateNetwork"(): $KineticNetwork
get "overStressed"(): boolean
get "flickerScore"(): integer
get "speed"(): float
set "speed"(value: float)
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBlockEntity$$Type = ($KineticBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBlockEntity$$Original = $KineticBlockEntity;}
declare module "com.simibubi.create.content.trains.graph.TrackNodeLocation" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $TrackNodeLocation extends $Vec3i {
static readonly "ZERO": $Vec3i
static readonly "CODEC": $Codec<($Vec3i)>
 "yOffsetPixels": integer
 "dimension": $ResourceKey<($Level)>

constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getLocation"(): $Vec3
public "write"(arg0: $DimensionPalette$$Type): $CompoundTag
public "in"(arg0: $ResourceKey$$Type<($Level)>): $TrackNodeLocation
public "in"(arg0: $Level$$Type): $TrackNodeLocation
public static "read"(arg0: $CompoundTag$$Type, arg1: $DimensionPalette$$Type): $TrackNodeLocation
public "getDimension"(): $ResourceKey<($Level)>
public "equalsIgnoreDim"(arg0: any): boolean
public "send"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public static "receive"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): $TrackNodeLocation
public "allAdjacent"(): $Collection<($BlockPos)>
get "location"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackNodeLocation$$Type = ($TrackNodeLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackNodeLocation$$Original = $TrackNodeLocation;}
declare module "com.simibubi.create.content.kinetics.transmission.sequencer.SequencerInstructions" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum} from "java.lang.Enum"
import {$AllGuiTextures, $AllGuiTextures$$Type} from "com.simibubi.create.foundation.gui.AllGuiTextures"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $SequencerInstructions extends $Enum<($SequencerInstructions)> {
readonly "translationKey": StringJS
readonly "maxValue": integer
readonly "defaultValue": integer
static readonly "AWAIT": $SequencerInstructions
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SequencerInstructions)>
static readonly "TURN_DISTANCE": $SequencerInstructions
readonly "shiftStep": integer
readonly "descriptiveTranslationKey": StringJS
readonly "hasValueParameter": boolean
readonly "background": $AllGuiTextures
readonly "parameterKey": StringJS
readonly "hasSpeedParameter": boolean
static readonly "END": $SequencerInstructions
static readonly "TURN_ANGLE": $SequencerInstructions
static readonly "DELAY": $SequencerInstructions

public static "values"(): ($SequencerInstructions)[]
public static "valueOf"(arg0: StringJS): $SequencerInstructions
public static "invokeInit$create_connected_$md$6d3b50$1"(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: $AllGuiTextures$$Type, arg4: boolean, arg5: boolean, arg6: integer, arg7: integer, arg8: integer): $SequencerInstructions
public static "invokeInit$create_connected_$md$6d3b50$0"(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: $AllGuiTextures$$Type): $SequencerInstructions
public "needsPropagation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencerInstructions$$Type = (("turn_angle") | ("turn_distance") | ("delay") | ("await") | ("end") | ("turn_await") | ("turn_time") | ("loop"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencerInstructions$$Original = $SequencerInstructions;}
declare module "com.simibubi.create.content.decoration.slidingDoor.DoorControlBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$DoorControl, $DoorControl$$Type} from "com.simibubi.create.content.decoration.slidingDoor.DoorControl"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DoorControlBehaviour extends $BlockEntityBehaviour {
 "mode": $DoorControl
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($DoorControlBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type)

public "set"(arg0: $DoorControl$$Type): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getType"(): $BehaviourType<(never)>
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorControlBehaviour$$Type = ($DoorControlBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoorControlBehaviour$$Original = $DoorControlBehaviour;}
declare module "com.simibubi.create.content.kinetics.deployer.DeployerRecipeSearchEvent" {
import {$Optional$$Type} from "java.util.Optional"
import {$DeployerBlockEntity, $DeployerBlockEntity$$Type} from "com.simibubi.create.content.kinetics.deployer.DeployerBlockEntity"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"

export class $DeployerRecipeSearchEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $DeployerBlockEntity$$Type, arg1: $RecipeWrapper$$Type)

public "getInventory"(): $RecipeWrapper
public "getBlockEntity"(): $DeployerBlockEntity
public "getRecipe"(): $RecipeHolder<($Recipe<($RecipeInput)>)>
public "addRecipe"(arg0: $Supplier$$Type<(($RecipeHolder$$Type<($Recipe$$Type<($RecipeInput$$Type)>)>)?)>, arg1: integer): void
public "shouldAddRecipeWithPriority"(arg0: integer): boolean
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "inventory"(): $RecipeWrapper
get "blockEntity"(): $DeployerBlockEntity
get "recipe"(): $RecipeHolder<($Recipe<($RecipeInput)>)>
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployerRecipeSearchEvent$$Type = ($DeployerRecipeSearchEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeployerRecipeSearchEvent$$Original = $DeployerRecipeSearchEvent;}
declare module "com.simibubi.create.content.trains.signal.SignalBlock$SignalType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SignalBlock$SignalType extends $Enum<($SignalBlock$SignalType)> implements $StringRepresentable$$Interface {
static readonly "ENTRY_SIGNAL": $SignalBlock$SignalType
static readonly "CROSS_SIGNAL": $SignalBlock$SignalType

public static "values"(): ($SignalBlock$SignalType)[]
public static "valueOf"(arg0: StringJS): $SignalBlock$SignalType
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBlock$SignalType$$Type = (("entry_signal") | ("cross_signal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignalBlock$SignalType$$Original = $SignalBlock$SignalType;}
declare module "com.simibubi.create.content.trains.signal.SignalBlockEntity" {
import {$AbstractComputerBehaviour} from "com.simibubi.create.compat.computercraft.AbstractComputerBehaviour"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List$$Type} from "java.util.List"
import {$TrackTargetingBehaviour} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"
import {$Level} from "net.minecraft.world.level.Level"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$SignalBoundary} from "com.simibubi.create.content.trains.signal.SignalBoundary"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$$Type} from "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SignalBlockEntity$OverlayState, $SignalBlockEntity$OverlayState$$Type} from "com.simibubi.create.content.trains.signal.SignalBlockEntity$OverlayState"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SignalBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity$$Interface {
 "worldPosition": $BlockPos
 "level": $Level
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasComparators": byte
 "computerBehaviour": $AbstractComputerBehaviour
 "edgePoint": $TrackTargetingBehaviour<($SignalBoundary)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "invalidate"(): void
public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
public "getState"(): $SignalBlockEntity$SignalState
public "tick"(): void
public "getOverlay"(): $SignalBlockEntity$OverlayState
public "getSignal"(): $SignalBoundary
public "setOverlay"(arg0: $SignalBlockEntity$OverlayState$$Type): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "isPowered"(): boolean
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getReportedPower"(): boolean
public "enterState"(arg0: $SignalBlockEntity$SignalState$$Type): void
public "getUpdatePacket"(): $Packet
get "state"(): $SignalBlockEntity$SignalState
get "overlay"(): $SignalBlockEntity$OverlayState
get "signal"(): $SignalBoundary
set "overlay"(value: $SignalBlockEntity$OverlayState$$Type)
get "powered"(): boolean
get "reportedPower"(): boolean
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBlockEntity$$Type = ($SignalBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignalBlockEntity$$Original = $SignalBlockEntity;}
declare module "com.simibubi.create.content.trains.graph.EdgePointType" {
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$TrackEdgePoint} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$TrackObserver} from "com.simibubi.create.content.trains.observer.TrackObserver"
import {$GlobalStation} from "com.simibubi.create.content.trains.station.GlobalStation"
import {$SignalBoundary} from "com.simibubi.create.content.trains.signal.SignalBoundary"

export class $EdgePointType<T extends $TrackEdgePoint> {
static readonly "TYPES": $Map<($ResourceLocation), ($EdgePointType<(never)>)>
static readonly "SIGNAL": $EdgePointType<($SignalBoundary)>
static readonly "STATION": $EdgePointType<($GlobalStation)>
static readonly "OBSERVER": $EdgePointType<($TrackObserver)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Supplier$$Type<(T)>)

public static "register"<T extends $TrackEdgePoint>(arg0: $ResourceLocation$$Type, arg1: $Supplier$$Type<(T)>): $EdgePointType<(T)>
public static "read"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): $TrackEdgePoint
public "getId"(): $ResourceLocation
public "create"(): T
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EdgePointType$$Type<T> = ($EdgePointType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EdgePointType$$Original<T> = $EdgePointType<(T)>;}
declare module "com.simibubi.create.content.trains.entity.Train" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TravellingPoint$SteerDirection} from "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection"
import {$TravellingPoint$IEdgePointListener} from "com.simibubi.create.content.trains.entity.TravellingPoint$IEdgePointListener"
import {$Optional} from "java.util.Optional"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AccessorTrain$$Interface} from "com.railwayteam.railways.mixin.AccessorTrain"
import {$TrainIconType, $TrainIconType$$Type} from "com.simibubi.create.content.trains.entity.TrainIconType"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TravellingPoint$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IBufferBlockedTrain$$Interface} from "com.railwayteam.railways.mixin_interfaces.IBufferBlockedTrain"
import {$IStrictSignalTrain$$Interface} from "com.railwayteam.railways.mixin_interfaces.IStrictSignalTrain"
import {$ScheduleRuntime} from "com.simibubi.create.content.trains.schedule.ScheduleRuntime"
import {$ICrashAdvancement$$Interface} from "com.railwayteam.railways.mixin_interfaces.ICrashAdvancement"
import {$Set} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IHandcarTrain$$Interface} from "com.railwayteam.railways.mixin_interfaces.IHandcarTrain"
import {$IIndexedSchedule$$Interface} from "com.railwayteam.railways.mixin_interfaces.IIndexedSchedule"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Carriage, $Carriage$$Type} from "com.simibubi.create.content.trains.entity.Carriage"
import {$CPLTrain$$Interface} from "com.hlysine.create_power_loader.content.trains.CPLTrain"
import {$TrainStatus} from "com.simibubi.create.content.trains.entity.TrainStatus"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TrackGraph, $TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TrackNode, $TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Navigation} from "com.simibubi.create.content.trains.entity.Navigation"
import {$IOccupiedCouplers$$Interface} from "com.railwayteam.railways.mixin_interfaces.IOccupiedCouplers"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$TrainChunkLoader, $TrainChunkLoader$$Type} from "com.hlysine.create_power_loader.content.trains.TrainChunkLoader"
import {$GlobalStation, $GlobalStation$$Type} from "com.simibubi.create.content.trains.station.GlobalStation"

export class $Train implements $CPLTrain$$Interface, $AccessorTrain$$Interface, $IStrictSignalTrain$$Interface, $IIndexedSchedule$$Interface, $IBufferBlockedTrain$$Interface, $ICrashAdvancement$$Interface, $IHandcarTrain$$Interface, $IOccupiedCouplers$$Interface {
 "throttle": double
 "lowHonk": boolean
 "speedBeforeStall": double
 "icon": $TrainIconType
 "doubleEnded": boolean
 "backwardsDriver": $Player
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Train)>
 "speed": double
 "manualTick": boolean
 "currentlyBackwards": boolean
 "honkPitch": integer
 "railways$occupiedCouplers": $Set
 "navigation": $Navigation
 "carriages": $List<($Carriage)>
 "currentStation": $UUID
 "honkTicks": integer
 "id": $UUID
 "owner": $UUID
 "targetSpeed": double
 "occupiedSignalBlocks": $Map<($UUID), ($UUID)>
 "carriageWaitingForChunks": integer
 "accumulatedSteamRelease": float
 "reservedSignalBlocks": $Set<($UUID)>
 "updateSignalBlocks": boolean
 "migrationCooldown": integer
 "runtime": $ScheduleRuntime
 "occupiedObservers": $Set<($UUID)>
 "derailed": boolean
 "carriageSpacing": $List<(integer)>
 "graph": $TrackGraph
 "cachedObserverFiltering": $Map<($UUID), ($Pair<(integer), (boolean)>)>
 "cpl$chunkLoader": $TrainChunkLoader
 "honk": boolean
 "mapColorIndex": integer
 "name": $Component
 "invalid": boolean
 "status": $TrainStatus
 "manualSteer": $TravellingPoint$SteerDirection
 "fuelTicks": integer

constructor(arg0: $UUID$$Type, arg1: $UUID$$Type, arg2: $TrackGraph$$Type, arg3: $List$$Type<($Carriage$$Type)>, arg4: $List$$Type<(integer)>, arg5: boolean, arg6: $Component$$Type, arg7: $TrainIconType$$Type, arg8: integer)
constructor(arg0: $UUID$$Type, arg1: $UUID$$Type, arg2: $TrackGraph$$Type, arg3: $List$$Type<($Carriage$$Type)>, arg4: $List$$Type<(integer)>, arg5: boolean, arg6: integer)

public "write"(arg0: $DimensionPalette$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Map$$Type<($UUID$$Type), ($TrackGraph$$Type)>, arg3: $DimensionPalette$$Type): $Train
public "self"(): $Train
public "getOwner"(arg0: $Level$$Type): $LivingEntity
public "getLoader"(): $TrainChunkLoader
public "tick"(arg0: $Level$$Type): void
public "countPlayerPassengers"(): integer
public "disassemble"(arg0: $Direction$$Type, arg1: $BlockPos$$Type): boolean
public "crash"(): void
public "earlyTick"(arg0: $Level$$Type): void
public "shouldCarriageSyncThisTick"(arg0: long, arg1: integer): boolean
public "railways$isControlBlocked"(): boolean
public "railways$getBlockedSign"(): integer
public "approachTargetSpeed"(arg0: float): void
public "getTotalLength"(): integer
public "forEachTravellingPointBackwards"(arg0: $BiConsumer$$Type<($TravellingPoint), (double)>): void
public "railways$awardCrashAdvancements"(): void
public "handler$dej000$railways$maxSpeed"(arg0: $CallbackInfoReturnable$$Type): void
public "burnFuel"(): void
public "canDisassemble"(): boolean
public "railways$setIndex"(arg0: integer): void
public "maxSpeed"(): float
public "backSignalListener"(): $TravellingPoint$IEdgePointListener
public "isTravellingOn"(arg0: $TrackNode$$Type): boolean
public "detachFromTracks"(): void
public "findCollidingTrain"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: $ResourceKey$$Type<($Level)>): $Pair<($Train), ($Vec3)>
public "reattachToTracks"(arg0: $Level$$Type): void
public "railways$getIndex"(): integer
public "getEndpointEdges"(): $Couple<($Couple<($TrackNode)>)>
public "leaveStation"(): void
public "cancelStall"(): void
public "railways$isHandcar"(): boolean
public "acceleration"(): float
public "hasBackwardConductor"(): boolean
public "hasForwardConductor"(): boolean
public "handler$dej000$railways$acceleration"(arg0: $CallbackInfoReturnable$$Type): void
public "handler$dej000$railways$maxTurnSpeed"(arg0: $CallbackInfoReturnable$$Type): void
public "railways$getOccupiedCouplers"(): $Set
public "collectInitiallyOccupiedSignalBlocks"(): void
public "getCurrentStation"(): $GlobalStation
public "setCurrentStation"(arg0: $GlobalStation$$Type): void
public "setLoader"(arg0: $TrainChunkLoader$$Type): void
public "maxTurnSpeed"(): float
public "railways$setHandcar"(arg0: boolean): void
public "determineHonk"(arg0: $Level$$Type): void
public "railways$getStress"(): (double)[]
public "railways$setStress"(arg0: (double)[]): void
public "railways$setStrictSignals"(arg0: boolean): void
public "distanceToLocationSqr"(arg0: $Level$$Type, arg1: $Vec3$$Type): float
public "getNavigationPenalty"(): integer
public "railways$setControlBlocked"(arg0: boolean, arg1: boolean): void
public "frontSignalListener"(): $TravellingPoint$IEdgePointListener
public "forEachTravellingPoint"(arg0: $Consumer$$Type<($TravellingPoint)>): void
public "getPositionInDimension"(arg0: $ResourceKey$$Type<($Level)>): $Optional<($BlockPos)>
public "getPresentDimensions"(): $List<($ResourceKey<($Level)>)>
public "handler$bhl000$createrailwaysnavigator$onArriveAt"(station: $GlobalStation$$Type, ci: $CallbackInfo$$Type): void
public "arriveAt"(arg0: $GlobalStation$$Type): void
public "handler$bhl000$createrailwaysnavigator$onLeaveStation"(ci: $CallbackInfo$$Type, currentStation: $GlobalStation$$Type): void
get "loader"(): $TrainChunkLoader
get "totalLength"(): integer
get "endpointEdges"(): $Couple<($Couple<($TrackNode)>)>
set "loader"(value: $TrainChunkLoader$$Type)
get "navigationPenalty"(): integer
get "presentDimensions"(): $List<($ResourceKey<($Level)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Train$$Type = ($Train);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Train$$Original = $Train;}
declare module "com.simibubi.create.content.trains.graph.TrackEdge" {
import {$BezierConnection, $BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$EdgeData} from "com.simibubi.create.content.trains.graph.EdgeData"
import {$TrackNode, $TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"

export class $TrackEdge {
 "node2": $TrackNode
 "node1": $TrackNode

constructor(arg0: $TrackNode$$Type, arg1: $TrackNode$$Type, arg2: $BezierConnection$$Type, arg3: $TrackMaterial$$Type)

public "getPosition"(arg0: $TrackGraph$$Type, arg1: double): $Vec3
public "getLength"(): double
public "write"(arg0: $DimensionPalette$$Type): $CompoundTag
public static "read"(arg0: $TrackNode$$Type, arg1: $TrackNode$$Type, arg2: $CompoundTag$$Type, arg3: $TrackGraph$$Type, arg4: $DimensionPalette$$Type): $TrackEdge
public "getTrackMaterial"(): $TrackMaterial
public "getNormal"(arg0: $TrackGraph$$Type, arg1: double): $Vec3
public "incrementT"(arg0: double, arg1: double): double
public "isTurn"(): boolean
public "getTurn"(): $BezierConnection
public "isInterDimensional"(): boolean
public "canTravelTo"(arg0: $TrackEdge$$Type): boolean
public "getEdgeData"(): $EdgeData
public "getDirection"(arg0: boolean): $Vec3
public "getDirectionAt"(arg0: double): $Vec3
public "getIntersection"(arg0: $TrackNode$$Type, arg1: $TrackNode$$Type, arg2: $TrackEdge$$Type, arg3: $TrackNode$$Type, arg4: $TrackNode$$Type): $Collection<((double)[])>
public "getNormalSmoothed"(arg0: $TrackGraph$$Type, arg1: double): $Vec3
public "getPositionSmoothed"(arg0: $TrackGraph$$Type, arg1: double): $Vec3
get "length"(): double
get "trackMaterial"(): $TrackMaterial
get "turn"(): boolean
get "turn"(): $BezierConnection
get "interDimensional"(): boolean
get "edgeData"(): $EdgeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackEdge$$Type = ($TrackEdge);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackEdge$$Original = $TrackEdge;}
declare module "com.simibubi.create.content.trains.station.GlobalPackagePort" {
import {$IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $GlobalPackagePort {
 "address": StringJS
 "primed": boolean
 "offlineBuffer": $ItemStackHandler

constructor()

public "saveOfflineBuffer"(arg0: $IItemHandlerModifiable$$Type): void
public "restoreOfflineBuffer"(arg0: $IItemHandlerModifiable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalPackagePort$$Type = ($GlobalPackagePort);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlobalPackagePort$$Original = $GlobalPackagePort;}
declare module "com.simibubi.create.content.kinetics.deployer.DeployerBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BeltProcessingBehaviour} from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$DeployerBlockEntityAccessor$$Interface} from "plus.dragons.createcentralkitchen.mixin.create.DeployerBlockEntityAccessor"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$DeployerFakePlayer} from "com.simibubi.create.content.kinetics.deployer.DeployerFakePlayer"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DeployerBlockEntity extends $KineticBlockEntity implements $Clearable$$Interface, $DeployerBlockEntityAccessor$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "worldPosition": $BlockPos
 "level": $Level
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "hasComparators": byte
 "processingBehaviour": $BeltProcessingBehaviour
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "invalidate"(): void
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "tick"(): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getHeldItem"(): $ItemStack
public "addToTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getPlayer"(): $DeployerFakePlayer
public "changeMode"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRecipe"(arg0: $ItemStack$$Type): $RecipeHolder<($Recipe<($RecipeInput)>)>
public "clearContent"(): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "discardPlayer"(): void
public "redstoneUpdate"(): void
public "getHandPose"(): $PartialModel
public "getHandOffset"(arg0: float): float
public "setAnimatedOffset"(arg0: float): void
public "triggerFistBump"(): void
public "startFistBump"(arg0: $Direction$$Type): boolean
public static "tryClear"(arg0: any): void
public "getUpdatePacket"(): $Packet
get "heldItem"(): $ItemStack
get "player"(): $DeployerFakePlayer
get "handPose"(): $PartialModel
set "animatedOffset"(value: float)
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployerBlockEntity$$Type = ($DeployerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeployerBlockEntity$$Original = $DeployerBlockEntity;}
declare module "com.simibubi.create.content.trains.graph.TrackNode" {
import {$TrackNodeLocation, $TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export class $TrackNode {
constructor(arg0: $TrackNodeLocation$$Type, arg1: integer, arg2: $Vec3$$Type)

public "getLocation"(): $TrackNodeLocation
public "getNormal"(): $Vec3
public "getNetId"(): integer
get "location"(): $TrackNodeLocation
get "normal"(): $Vec3
get "netId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackNode$$Type = ($TrackNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackNode$$Original = $TrackNode;}
declare module "com.simibubi.create.content.trains.station.GlobalStation" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ILimitedGlobalStation$$Interface} from "com.railwayteam.railways.mixin_interfaces.ILimitedGlobalStation"
import {$UUID} from "java.util.UUID"
import {$Train, $Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$Level} from "net.minecraft.world.level.Level"
import {$StationChunkLoader, $StationChunkLoader$$Type} from "com.hlysine.create_power_loader.content.trains.StationChunkLoader"
import {$CPLGlobalStation$$Interface} from "com.hlysine.create_power_loader.content.trains.CPLGlobalStation"
import {$GlobalPackagePort} from "com.simibubi.create.content.trains.station.GlobalPackagePort"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SingleBlockEntityEdgePoint} from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $GlobalStation extends $SingleBlockEntityEdgePoint implements $CPLGlobalStation$$Interface, $ILimitedGlobalStation$$Interface {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "blockEntityPos": $BlockPos
 "cpl$chunkLoader": $StationChunkLoader
 "connectedPorts": $Map<($BlockPos), ($GlobalPackagePort)>
 "blockEntityDimension": $ResourceKey<($Level)>
 "name": StringJS
 "assembling": boolean
 "id": $UUID
 "position": double
 "nearestTrain": $WeakReference<($Train)>

constructor()

public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): void
public "write"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: $DimensionPalette$$Type): void
public "getLoader"(): $StationChunkLoader
public "isStationEnabled"(): boolean
public "canApproachFrom"(arg0: $TrackNode$$Type): boolean
public "getDisablingTrain"(): $Train
public "orDisablingTrain"(arg0: $Train$$Type, arg1: $Train$$Type): $Train
public "setLimitEnabled"(arg0: boolean): void
public "cancelReservation"(arg0: $Train$$Type): void
public "runMailTransfer"(): void
public "trainDeparted"(arg0: $Train$$Type): void
public "getPresentTrain"(): $Train
public "isLimitEnabled"(): boolean
public "canNavigateVia"(arg0: $TrackNode$$Type): boolean
public "blockEntityAdded"(arg0: $BlockEntity$$Type, arg1: boolean): void
public "getImminentTrain"(): $Train
public "getNearestTrain"(): $Train
public "reserveFor"(arg0: $Train$$Type): void
public "setLoader"(arg0: $StationChunkLoader$$Type): void
get "loader"(): $StationChunkLoader
get "stationEnabled"(): boolean
get "disablingTrain"(): $Train
set "limitEnabled"(value: boolean)
get "presentTrain"(): $Train
get "limitEnabled"(): boolean
get "imminentTrain"(): $Train
set "loader"(value: $StationChunkLoader$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalStation$$Type = ($GlobalStation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlobalStation$$Original = $GlobalStation;}
declare module "com.simibubi.create.content.trains.entity.TravellingPoint$IEdgePointListener" {
import {$BiPredicate, $BiPredicate$$Type, $BiPredicate$$Interface} from "java.util.function.BiPredicate"
import {$TrackEdgePoint, $TrackEdgePoint$$Type} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$TrackNode, $TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"

export interface $TravellingPoint$IEdgePointListener$$Interface extends $BiPredicate$$Interface<(double), ($Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>)> {

(arg0: double, arg1: $Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>): boolean
}

export class $TravellingPoint$IEdgePointListener implements $TravellingPoint$IEdgePointListener$$Interface {
 "test"(arg0: double, arg1: $Pair$$Type<($TrackEdgePoint$$Type), ($Couple$$Type<($TrackNode$$Type)>)>): boolean
 "or"(arg0: $BiPredicate$$Type<(double), ($Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>)>): $BiPredicate<(double), ($Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>)>
 "negate"(): $BiPredicate<(double), ($Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>)>
 "and"(arg0: $BiPredicate$$Type<(double), ($Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>)>): $BiPredicate<(double), ($Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellingPoint$IEdgePointListener$$Type = ((arg0: double, arg1: $Pair<($TrackEdgePoint), ($Couple<($TrackNode)>)>) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellingPoint$IEdgePointListener$$Original = $TravellingPoint$IEdgePointListener;}
declare module "com.simibubi.create.content.trains.track.TrackBlockEntity" {
import {$BezierConnection, $BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SlabBlock, $SlabBlock$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$IHasTrackCasing$$Interface} from "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$IMergeableBE$$Interface} from "com.simibubi.create.foundation.blockEntity.IMergeableBE"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackBlockEntityTilt} from "com.simibubi.create.content.trains.track.TrackBlockEntityTilt"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity$$Interface, $IMergeableBE$$Interface, $IHasTrackCasing$$Interface {
 "worldPosition": $BlockPos
 "level": $Level
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "boundLocation": $Pair<($ResourceKey<($Level)>), ($BlockPos)>
 "tilt": $TrackBlockEntityTilt
 "hasComparators": byte

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "invalidate"(): void
public "addConnection"(arg0: $BezierConnection$$Type): void
public "remove"(): void
public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
public "initialize"(): void
public "accept"(arg0: $BlockEntity$$Type): void
public "bind"(arg0: $ResourceKey$$Type<($Level)>, arg1: $BlockPos$$Type): void
public "tick"(): void
public "getRenderBoundingBox"(): $AABB
public "removeInboundConnections"(arg0: boolean): void
public "validateConnections"(): void
public "removeConnection"(arg0: $BlockPos$$Type): void
public "isAlternate"(): boolean
public "getModelData"(): $ModelData
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "lazyTick"(): void
public "getConnections"(): $Map<($BlockPos), ($BezierConnection)>
public "getTrackCasing"(): $SlabBlock
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "isTilted"(): boolean
public "hasInteractableConnections"(): boolean
public "manageFakeTracksAlong"(arg0: $BezierConnection$$Type, arg1: boolean): void
public "setAlternate"(arg0: boolean): void
public "setTrackCasing"(arg0: $SlabBlock$$Type): void
public static "isAlternate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public static "getTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $SlabBlock
public static "setAlternateModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): boolean
public static "setTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $SlabBlock$$Type): void
public "getUpdatePacket"(): $Packet
get "renderBoundingBox"(): $AABB
get "alternate"(): boolean
get "modelData"(): $ModelData
get "connections"(): $Map<($BlockPos), ($BezierConnection)>
get "trackCasing"(): $SlabBlock
get "tilted"(): boolean
set "alternate"(value: boolean)
set "trackCasing"(value: $SlabBlock$$Type)
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBlockEntity$$Type = ($TrackBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackBlockEntity$$Original = $TrackBlockEntity;}
declare module "com.simibubi.create.content.kinetics.base.IRotate" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IRotate$SpeedLevel} from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IRotate$$Interface extends $IWrenchable$$Interface {
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}

export class $IRotate implements $IRotate$$Interface {
 "hideStressImpact"(): boolean
 "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
 "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
 "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
 "showCapacityWithAnnotation"(): boolean
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRotate$$Type = ($IRotate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRotate$$Original = $IRotate;}
declare module "com.simibubi.create.content.trains.track.TrackTargetingBehaviour" {
import {$ITrackBlock} from "com.simibubi.create.content.trains.track.ITrackBlock"
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$TrackGraphLocation} from "com.simibubi.create.content.trains.graph.TrackGraphLocation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BezierTrackPointLocation, $BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType$$Type} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$TrackEdgePoint, $TrackEdgePoint$$Type} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IPreAssembleCallback$$Interface} from "com.railwayteam.railways.mixin_interfaces.IPreAssembleCallback"
import {$AccessorTrackTargetingBehavior$$Interface} from "com.railwayteam.railways.mixin.AccessorTrackTargetingBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackTargetingBehaviour<T extends $TrackEdgePoint> extends $BlockEntityBehaviour implements $AccessorTrackTargetingBehavior$$Interface, $IPreAssembleCallback$$Interface {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($TrackTargetingBehaviour<(never)>)>

constructor(arg0: $SmartBlockEntity$$Type, arg1: $EdgePointType$$Type<(T)>)

public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getId"(): $UUID
public "destroy"(): void
public "getType"(): $BehaviourType<(never)>
public "tick"(): void
public "invalidateEdgePoint"(arg0: $CompoundTag$$Type): void
public "getRotatedDirection"(): $Vec3
public "getPositionForMapMarker"(): $BlockPos
public "setRotatedDirection"(arg0: $Vec3$$Type): void
public "setId"(arg0: $UUID$$Type): void
public static "render"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$AxisDirection$$Type, arg3: $BezierTrackPointLocation$$Type, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer, arg7: integer, arg8: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type, arg9: float): void
public "getGlobalPosition"(): $BlockPos
public "isOnCurve"(): boolean
public "isSafeNBT"(): boolean
public "getTargetDirection"(): $Direction$AxisDirection
public "isOrthogonal"(): boolean
public "railways$preAssemble"(): void
public "getTrack"(): $ITrackBlock
public "getTrackBlockState"(): $BlockState
public "hasValidTrack"(): boolean
public "setEdgePoint"(arg0: $TrackEdgePoint$$Type): void
public "getTargetTrack"(): $BlockPos
public "setTargetDirection"(arg0: $Direction$AxisDirection$$Type): void
public "getEdgePoint"(): T
public "setTargetTrack"(arg0: $BlockPos$$Type): void
public "determineGraphLocation"(): $TrackGraphLocation
public "getTargetBezier"(): $BezierTrackPointLocation
public "getMigrationData"(): $CompoundTag
public "setMigrationData"(arg0: $CompoundTag$$Type): void
public "getPrevDirection"(): $Vec3
public "setOrthogonal"(arg0: boolean): void
public "createEdgePoint"(): T
public "setTargetBezier"(arg0: $BezierTrackPointLocation$$Type): void
public "setPrevDirection"(arg0: $Vec3$$Type): void
get "id"(): $UUID
get "type"(): $BehaviourType<(never)>
get "rotatedDirection"(): $Vec3
get "positionForMapMarker"(): $BlockPos
set "rotatedDirection"(value: $Vec3$$Type)
set "id"(value: $UUID$$Type)
get "globalPosition"(): $BlockPos
get "onCurve"(): boolean
get "safeNBT"(): boolean
get "targetDirection"(): $Direction$AxisDirection
get "orthogonal"(): boolean
get "track"(): $ITrackBlock
get "trackBlockState"(): $BlockState
set "edgePoint"(value: $TrackEdgePoint$$Type)
get "targetTrack"(): $BlockPos
set "targetDirection"(value: $Direction$AxisDirection$$Type)
get "edgePoint"(): T
set "targetTrack"(value: $BlockPos$$Type)
get "targetBezier"(): $BezierTrackPointLocation
get "migrationData"(): $CompoundTag
set "migrationData"(value: $CompoundTag$$Type)
get "prevDirection"(): $Vec3
set "orthogonal"(value: boolean)
set "targetBezier"(value: $BezierTrackPointLocation$$Type)
set "prevDirection"(value: $Vec3$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackTargetingBehaviour$$Type<T> = ($TrackTargetingBehaviour<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackTargetingBehaviour$$Original<T> = $TrackTargetingBehaviour<(T)>;}
declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$TransportedItemStackHandlerBehaviour$PositionGetter$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$PositionGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$TransportedItemStack$$Type} from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import {$TransportedItemStackHandlerBehaviour$TransportedResult$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$TransportedResult"
import {$TransportedItemStackHandlerBehaviour$ProcessingCallback$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$ProcessingCallback"

export class $TransportedItemStackHandlerBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($TransportedItemStackHandlerBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type, arg1: $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Type)

public "getType"(): $BehaviourType<(never)>
public "handleProcessingOnItem"(arg0: $TransportedItemStack$$Type, arg1: $TransportedItemStackHandlerBehaviour$TransportedResult$$Type): void
public "handleProcessingOnAllItems"(arg0: $Function$$Type<($TransportedItemStack), ($TransportedItemStackHandlerBehaviour$TransportedResult$$Type)>): void
public "withStackPlacement"(arg0: $TransportedItemStackHandlerBehaviour$PositionGetter$$Type): $TransportedItemStackHandlerBehaviour
public "getWorldPositionOf"(arg0: $TransportedItemStack$$Type): $Vec3
public "handleCenteredProcessingOnAllItems"(arg0: float, arg1: $Function$$Type<($TransportedItemStack), ($TransportedItemStackHandlerBehaviour$TransportedResult$$Type)>): void
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportedItemStackHandlerBehaviour$$Type = ($TransportedItemStackHandlerBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransportedItemStackHandlerBehaviour$$Original = $TransportedItemStackHandlerBehaviour;}
declare module "com.simibubi.create.content.kinetics.base.KineticEffectHandler" {
import {$KineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$KineticEffectHandlerAccessor$$Interface} from "dev.lopyluna.gnkinetics.mixins.KineticEffectHandlerAccessor"

export class $KineticEffectHandler implements $KineticEffectHandlerAccessor$$Interface {
constructor(arg0: $KineticBlockEntity$$Type)

public "tick"(): void
public "triggerOverStressedEffect"(): void
public "queueRotationIndicators"(): void
public "spawnRotationIndicators"(): void
public "overStressedEffect"(): float
public "spawnEffect"(arg0: $ParticleOptions$$Type, arg1: float, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticEffectHandler$$Type = ($KineticEffectHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticEffectHandler$$Original = $KineticEffectHandler;}
declare module "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$TrackEdgePoint} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SingleBlockEntityEdgePoint extends $TrackEdgePoint {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "blockEntityPos": $BlockPos
 "blockEntityDimension": $ResourceKey<($Level)>
 "id": $UUID
 "position": double

constructor()

public "invalidate"(arg0: $LevelAccessor$$Type): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: $DimensionPalette$$Type): void
public "canMerge"(): boolean
public "blockEntityRemoved"(arg0: $BlockPos$$Type, arg1: boolean): void
public "blockEntityAdded"(arg0: $BlockEntity$$Type, arg1: boolean): void
public "getBlockEntityPos"(): $BlockPos
public "getBlockEntityDimension"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleBlockEntityEdgePoint$$Type = ($SingleBlockEntityEdgePoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleBlockEntityEdgePoint$$Original = $SingleBlockEntityEdgePoint;}
declare module "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext" {
import {$SequencerInstructions, $SequencerInstructions$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencerInstructions"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Record} from "java.lang.Record"

export class $SequencedGearshiftBlockEntity$SequenceContext extends $Record {
constructor(instruction: $SequencerInstructions$$Type, relativeValue: double)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "instruction"(): $SequencerInstructions
public "getEffectiveValue"(arg0: double): double
public static "fromNBT"(arg0: $CompoundTag$$Type): $SequencedGearshiftBlockEntity$SequenceContext
public "serializeNBT"(): $CompoundTag
public static "fromGearshift"(arg0: $SequencerInstructions$$Type, arg1: double, arg2: integer): $SequencedGearshiftBlockEntity$SequenceContext
public "relativeValue"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedGearshiftBlockEntity$SequenceContext$$Type = ({"relativeValue"?: double, "instruction"?: $SequencerInstructions$$Type}) | ([relativeValue?: double, instruction?: $SequencerInstructions$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencedGearshiftBlockEntity$SequenceContext$$Original = $SequencedGearshiftBlockEntity$SequenceContext;}
declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$ProcessingCallback" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TransportedItemStack, $TransportedItemStack$$Type} from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import {$TransportedItemStackHandlerBehaviour$TransportedResult, $TransportedItemStackHandlerBehaviour$TransportedResult$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$TransportedResult"

export interface $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Interface {

(arg0: float, arg1: $Function<($TransportedItemStack), ($TransportedItemStackHandlerBehaviour$TransportedResult$$Type)>): void
}

export class $TransportedItemStackHandlerBehaviour$ProcessingCallback implements $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Interface {
 "applyToAllItems"(arg0: float, arg1: $Function$$Type<($TransportedItemStack), ($TransportedItemStackHandlerBehaviour$TransportedResult$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Type = ((arg0: float, arg1: $Function<($TransportedItemStack), ($TransportedItemStackHandlerBehaviour$TransportedResult)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Original = $TransportedItemStackHandlerBehaviour$ProcessingCallback;}
declare module "com.simibubi.create.content.schematics.requirement.ItemRequirement$ItemUseType" {
import {$Enum} from "java.lang.Enum"

export class $ItemRequirement$ItemUseType extends $Enum<($ItemRequirement$ItemUseType)> {
static readonly "CONSUME": $ItemRequirement$ItemUseType
static readonly "DAMAGE": $ItemRequirement$ItemUseType

public static "values"(): ($ItemRequirement$ItemUseType)[]
public static "valueOf"(arg0: StringJS): $ItemRequirement$ItemUseType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirement$ItemUseType$$Type = (("consume") | ("damage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRequirement$ItemUseType$$Original = $ItemRequirement$ItemUseType;}
declare module "com.simibubi.create.content.trains.signal.SignalBlockEntity$OverlayState" {
import {$Enum} from "java.lang.Enum"

export class $SignalBlockEntity$OverlayState extends $Enum<($SignalBlockEntity$OverlayState)> {
static readonly "RENDER": $SignalBlockEntity$OverlayState
static readonly "SKIP": $SignalBlockEntity$OverlayState
static readonly "DUAL": $SignalBlockEntity$OverlayState

public static "values"(): ($SignalBlockEntity$OverlayState)[]
public static "valueOf"(arg0: StringJS): $SignalBlockEntity$OverlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBlockEntity$OverlayState$$Type = (("render") | ("skip") | ("dual"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignalBlockEntity$OverlayState$$Original = $SignalBlockEntity$OverlayState;}
declare module "com.simibubi.create.content.trains.entity.TrainIconType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $TrainIconType {
static readonly "FLIPPED_ENGINE": integer
static readonly "ENGINE": integer
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TrainIconType)>
static "REGISTRY": $Map<($ResourceLocation), ($TrainIconType)>

constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer)

public static "getDefault"(): $TrainIconType
public static "register"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer): void
public "getId"(): $ResourceLocation
public "getIconWidth"(arg0: integer): integer
public "render"(arg0: integer, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer): integer
public static "byId"(arg0: $ResourceLocation$$Type): $TrainIconType
public "getIconOffset"(arg0: integer): integer
get "default"(): $TrainIconType
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainIconType$$Type = ($TrainIconType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrainIconType$$Original = $TrainIconType;}
declare module "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingResult" {
import {$Enum} from "java.lang.Enum"

export class $BeltProcessingBehaviour$ProcessingResult extends $Enum<($BeltProcessingBehaviour$ProcessingResult)> {
static readonly "PASS": $BeltProcessingBehaviour$ProcessingResult
static readonly "REMOVE": $BeltProcessingBehaviour$ProcessingResult
static readonly "HOLD": $BeltProcessingBehaviour$ProcessingResult

public static "values"(): ($BeltProcessingBehaviour$ProcessingResult)[]
public static "valueOf"(arg0: StringJS): $BeltProcessingBehaviour$ProcessingResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeltProcessingBehaviour$ProcessingResult$$Type = (("pass") | ("hold") | ("remove"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeltProcessingBehaviour$ProcessingResult$$Original = $BeltProcessingBehaviour$ProcessingResult;}
declare module "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation" {
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$BezierConnection, $BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"

export class $TrackNodeLocation$DiscoveredLocation extends $TrackNodeLocation {
static readonly "ZERO": $Vec3i
static readonly "CODEC": $Codec<($Vec3i)>
 "yOffsetPixels": integer
 "dimension": $ResourceKey<($Level)>

constructor(arg0: $Level$$Type, arg1: $Vec3$$Type)
constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: $Vec3$$Type)
constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double)

public "materials"(arg0: $TrackMaterial$$Type, arg1: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "withYOffset"(arg0: integer): $TrackNodeLocation$DiscoveredLocation
public "withDirection"(arg0: $Vec3$$Type): $TrackNodeLocation$DiscoveredLocation
public "withNormal"(arg0: $Vec3$$Type): $TrackNodeLocation$DiscoveredLocation
public "viaTurn"(arg0: $BezierConnection$$Type): $TrackNodeLocation$DiscoveredLocation
public "materialA"(arg0: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "forceNode"(): $TrackNodeLocation$DiscoveredLocation
public "materialB"(arg0: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "getTurn"(): $BezierConnection
public "getDirection"(): $Vec3
public "connectedViaTurn"(): boolean
public "differentMaterials"(): boolean
public "notInLineWith"(arg0: $Vec3$$Type): boolean
public "shouldForceNode"(): boolean
get "turn"(): $BezierConnection
get "direction"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackNodeLocation$DiscoveredLocation$$Type = ($TrackNodeLocation$DiscoveredLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackNodeLocation$DiscoveredLocation$$Original = $TrackNodeLocation$DiscoveredLocation;}
declare module "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState" {
import {$Enum} from "java.lang.Enum"

export class $SignalBlockEntity$SignalState extends $Enum<($SignalBlockEntity$SignalState)> {
static readonly "RED": $SignalBlockEntity$SignalState
static readonly "YELLOW": $SignalBlockEntity$SignalState
static readonly "INVALID": $SignalBlockEntity$SignalState
static readonly "GREEN": $SignalBlockEntity$SignalState

public static "values"(): ($SignalBlockEntity$SignalState)[]
public static "valueOf"(arg0: StringJS): $SignalBlockEntity$SignalState
public "isYellowLight"(arg0: float): boolean
public "isGreenLight"(arg0: float): boolean
public "isRedLight"(arg0: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBlockEntity$SignalState$$Type = (("red") | ("yellow") | ("green") | ("invalid"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignalBlockEntity$SignalState$$Original = $SignalBlockEntity$SignalState;}
declare module "com.simibubi.create.content.trains.graph.TrackGraph" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$TrackEdge, $TrackEdge$$Type} from "com.simibubi.create.content.trains.graph.TrackEdge"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TrackNodeLocation, $TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$TrackEdgePoint, $TrackEdgePoint$$Type} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$Color} from "net.createmod.catnip.theme.Color"
import {$TrackNode, $TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$TrackGraphBounds} from "com.simibubi.create.content.trains.graph.TrackGraphBounds"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Set} from "java.util.Set"
import {$Couple$$Type} from "net.createmod.catnip.data.Couple"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $TrackGraph {
static readonly "graphNetIdGenerator": $AtomicInteger
static readonly "nodeNetIdGenerator": $AtomicInteger
 "color": $Color
 "id": $UUID

constructor()
constructor(arg0: $UUID$$Type)

public "getConnection"(arg0: $Couple$$Type<($TrackNode$$Type)>): $TrackEdge
public "isEmpty"(): boolean
public "getBounds"(arg0: $Level$$Type): $TrackGraphBounds
public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $DimensionPalette$$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): $TrackGraph
public "transfer"(arg0: $LevelAccessor$$Type, arg1: $TrackNode$$Type, arg2: $TrackGraph$$Type): void
public "getNode"(arg0: integer): $TrackNode
public "removeNode"(arg0: $LevelAccessor$$Type, arg1: $TrackNodeLocation$$Type): boolean
public "resolveIntersectingEdgeGroups"(arg0: $Level$$Type): void
public static "nextNodeId"(): integer
public "getPoint"<T extends $TrackEdgePoint>(arg0: $EdgePointType$$Type<(T)>, arg1: $UUID$$Type): T
public "getChecksum"(): integer
public "setId"(arg0: $UUID$$Type): void
public "removePoint"<T extends $TrackEdgePoint>(arg0: $EdgePointType$$Type<(T)>, arg1: $UUID$$Type): T
public "addNode"(arg0: $TrackNode$$Type): void
public "getPoints"<T extends $TrackEdgePoint>(arg0: $EdgePointType$$Type<(T)>): $Collection<(T)>
public "locateNode"(arg0: $Level$$Type, arg1: $Vec3$$Type): $TrackNode
public "locateNode"(arg0: $TrackNodeLocation$$Type): $TrackNode
public "setNetId"(arg0: integer): void
public "tickPoints"(arg0: boolean): void
public "markDirty"(): void
public "findDisconnectedGraphs"(arg0: $LevelAccessor$$Type, arg1: $Map$$Type<(integer), ($Pair$$Type<(integer), ($UUID$$Type)>)>): $Set<($TrackGraph)>
public "getConnectionsFrom"(arg0: $TrackNode$$Type): $Map<($TrackNode), ($TrackEdge)>
public "getNodes"(): $Set<($TrackNodeLocation)>
public "addPoint"<T extends $TrackEdgePoint>(arg0: $EdgePointType$$Type<(T)>, arg1: T): void
public "distanceToLocationSqr"(arg0: $Level$$Type, arg1: $Vec3$$Type): float
public "putConnection"(arg0: $TrackNode$$Type, arg1: $TrackNode$$Type, arg2: $TrackEdge$$Type): boolean
public "loadNode"(arg0: $TrackNodeLocation$$Type, arg1: integer, arg2: $Vec3$$Type): void
public "deferIntersectionUpdate"(arg0: $TrackEdge$$Type): void
public "transferAll"(arg0: $TrackGraph$$Type): void
public "invalidateBounds"(): void
public static "nextGraphId"(): integer
public "connectNodes"(arg0: $LevelAccessor$$Type, arg1: $TrackNodeLocation$DiscoveredLocation$$Type, arg2: $TrackNodeLocation$DiscoveredLocation$$Type, arg3: $BezierConnection$$Type): void
public "disconnectNodes"(arg0: $TrackNode$$Type, arg1: $TrackNode$$Type): void
public "createNodeIfAbsent"(arg0: $TrackNodeLocation$DiscoveredLocation$$Type): boolean
public "addNodeIfAbsent"(arg0: $TrackNode$$Type): boolean
get "empty"(): boolean
get "checksum"(): integer
set "netId"(value: integer)
get "nodes"(): $Set<($TrackNodeLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackGraph$$Type = ($TrackGraph);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackGraph$$Original = $TrackGraph;}
declare module "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FanProcessingType} from "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Direction} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TransportedItemStack implements $Comparable$$Interface<($TransportedItemStack)> {
 "lockedExternally": boolean
 "stack": $ItemStack
 "beltPosition": float
 "insertedAt": integer
 "insertedFrom": $Direction
 "prevSideOffset": float
 "angle": integer
 "prevBeltPosition": float
 "sideOffset": float
 "locked": boolean
 "processedBy": $FanProcessingType
 "processingTime": integer

constructor(arg0: $ItemStack$$Type)

public "compareTo"(arg0: $TransportedItemStack$$Type): integer
public "compareTo"(arg0: any): integer
public static "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $TransportedItemStack
public "copy"(): $TransportedItemStack
public "clearFanProcessingData"(): void
public "getSimilar"(): $TransportedItemStack
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getTargetSideOffset"(): float
get "similar"(): $TransportedItemStack
get "targetSideOffset"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportedItemStack$$Type = ($TransportedItemStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransportedItemStack$$Original = $TransportedItemStack;}
declare module "com.simibubi.create.content.trains.track.TrackMaterial$TrackModelHolder" {
import {$PartialModel, $PartialModel$$Type} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$Record} from "java.lang.Record"

export class $TrackMaterial$TrackModelHolder extends $Record {
constructor(tie: $PartialModel$$Type, leftSegment: $PartialModel$$Type, rightSegment: $PartialModel$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tie"(): $PartialModel
public "leftSegment"(): $PartialModel
public "rightSegment"(): $PartialModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackMaterial$TrackModelHolder$$Type = ({"leftSegment"?: $PartialModel$$Type, "tie"?: $PartialModel$$Type, "rightSegment"?: $PartialModel$$Type}) | ([leftSegment?: $PartialModel$$Type, tie?: $PartialModel$$Type, rightSegment?: $PartialModel$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackMaterial$TrackModelHolder$$Original = $TrackMaterial$TrackModelHolder;}
