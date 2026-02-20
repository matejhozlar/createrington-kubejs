declare module "net.minecraft.client.player.Input" {
import {$Vec2} from "net.minecraft.world.phys.Vec2"

export class $Input {
 "forwardImpulse": float
 "jumping": boolean
 "left": boolean
 "leftImpulse": float
 "shiftKeyDown": boolean
 "up": boolean
 "right": boolean
 "down": boolean

constructor()

public "tick"(arg0: boolean, arg1: float): void
public "hasForwardImpulse"(): boolean
public "getMoveVector"(): $Vec2
get "moveVector"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Input$$Type = ($Input);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Input$$Original = $Input;}
declare module "net.minecraft.client.player.AbstractClientPlayer" {
import {$Iterable} from "java.lang.Iterable"
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Brain} from "net.minecraft.world.entity.ai.Brain"
import {$Optional} from "java.util.Optional"
import {$Inventory} from "net.minecraft.world.entity.player.Inventory"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$PlayerEnderChestContainer} from "net.minecraft.world.inventory.PlayerEnderChestContainer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Object2DoubleMap} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$AbstractClientPlayerAccessor$$Interface} from "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor"
import {$UUID} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SynchedEntityData} from "net.minecraft.network.syncher.SynchedEntityData"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$FoodData} from "net.minecraft.world.food.FoodData"
import {$Pose} from "net.minecraft.world.entity.Pose"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$DamageContainer} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$ClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ClientPlayerKJS"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$PlayerInfo} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$PlayerSkin} from "net.minecraft.client.resources.PlayerSkin"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$Team} from "net.minecraft.world.scores.Team"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $AbstractClientPlayer extends $Player implements $ClientPlayerKJS$$Interface, $AbstractClientPlayerAccessor$$Interface {
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
 "walkDist": float
 "noCulling": boolean
 "appliedScale": float
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
 "deltaMovementOnPreviousTick": $Vec3
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
readonly "clientLevel": $ClientLevel
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
static readonly "FLAG_ONFIRE": integer
 "zza": float
 "rotOffs": float
 "elytraRotZ": float
 "elytraRotY": float
static readonly "WAKE_UP_DURATION": integer
 "elytraRotX": float
 "xRotO": float
 "zo": double
 "lastHurt": float
readonly "walkAnimation": $WalkAnimationState
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MODE_CUSTOMISATION": $EntityDataAccessor<(byte)>
 "yya": float
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

constructor(arg0: $ClientLevel$$Type, arg1: $GameProfile$$Type)

public "tick"(): void
public "getSkin"(): $PlayerSkin
public "handler$ffg000$create_sa$getSkinMixin"(arg0: $CallbackInfoReturnable$$Type): void
public "isCreative"(): boolean
public "isSpectator"(): boolean
public "handler$fem000$platform$updateFov"(cir: $CallbackInfoReturnable$$Type, currentFov: float): void
public "getPlayerInfo"(): $PlayerInfo
public "getDeltaMovementLerped"(arg0: float): $Vec3
public "flywheel$getPlayerInfo"(): $PlayerInfo
public "getFieldOfViewModifier"(): float
public "isSelf"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "isMiningBlock"(): boolean
public "getStats"(): $PlayerStatsJS
public "notify"(notification: $NotificationToastData$$Type): void
public "self"(): $Entity
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
get "skin"(): $PlayerSkin
get "creative"(): boolean
get "spectator"(): boolean
get "playerInfo"(): $PlayerInfo
get "fieldOfViewModifier"(): float
get "miningBlock"(): boolean
get "stats"(): $PlayerStatsJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayer$$Type = ($AbstractClientPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractClientPlayer$$Original = $AbstractClientPlayer;}
declare module "net.minecraft.client.player.LocalPlayer" {
import {$Iterable} from "java.lang.Iterable"
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Brain} from "net.minecraft.world.entity.ai.Brain"
import {$Optional} from "java.util.Optional"
import {$Portal$Transition} from "net.minecraft.world.level.block.Portal$Transition"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$ClientPacketListener, $ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$JigsawBlockEntity$$Type} from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Inventory} from "net.minecraft.world.entity.player.Inventory"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$Logger} from "org.slf4j.Logger"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$Input} from "net.minecraft.client.player.Input"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IMixinLocalPlayer$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinLocalPlayer"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$PlayerEnderChestContainer} from "net.minecraft.world.inventory.PlayerEnderChestContainer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$PlayerRideableJumping} from "net.minecraft.world.entity.PlayerRideableJumping"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$BaseCommandBlock$$Type} from "net.minecraft.world.level.BaseCommandBlock"
import {$Object2DoubleMap} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"
import {$UUID} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SynchedEntityData} from "net.minecraft.network.syncher.SynchedEntityData"
import {$AbstractClientPlayer} from "net.minecraft.client.player.AbstractClientPlayer"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$FoodData} from "net.minecraft.world.food.FoodData"
import {$Pose} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$DamageContainer} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$StatsCounter, $StatsCounter$$Type} from "net.minecraft.stats.StatsCounter"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$AccessorLocalPlayer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLocalPlayer"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$LocalClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.LocalClientPlayerKJS"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$Team} from "net.minecraft.world.scores.Team"
import {$ClientRecipeBook, $ClientRecipeBook$$Type} from "net.minecraft.client.ClientRecipeBook"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$LocalPlayerInterface$$Interface} from "net.irisshaders.iris.mixinterface.LocalPlayerInterface"
import {$StructureBlockEntity$$Type} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $LocalPlayer extends $AbstractClientPlayer implements $LocalPlayerInterface$$Interface, $AccessorLocalPlayer$$Interface, $IMixinLocalPlayer$$Interface, $LocalClientPlayerKJS$$Interface {
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
 "xBob": float
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "input": $Input
 "boardingCooldown": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "walkDist": float
 "noCulling": boolean
 "appliedScale": float
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>
 "yBob": float
static readonly "UUID_TAG": StringJS
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "hurtDir": float
static readonly "DEFAULT_BABY_SCALE": float
static readonly "DEFAULT_BB_HEIGHT": float
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
 "oSpinningEffectIntensity": float
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
readonly "minecraft": $Minecraft
 "deathTime": integer
 "invulnerableTime": integer
 "wasUnderwater": boolean
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
 "deltaMovementOnPreviousTick": $Vec3
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
readonly "clientLevel": $ClientLevel
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
readonly "connection": $ClientPacketListener
static readonly "FLAG_ONFIRE": integer
 "zza": float
 "rotOffs": float
 "elytraRotZ": float
 "elytraRotY": float
static readonly "WAKE_UP_DURATION": integer
 "elytraRotX": float
 "xRotO": float
 "zo": double
 "lastHurt": float
readonly "walkAnimation": $WalkAnimationState
 "sprintTriggerTime": integer
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MODE_CUSTOMISATION": $EntityDataAccessor<(byte)>
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
 "spinningEffectIntensity": float
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
 "xBobO": float
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
 "yBobO": float
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
static readonly "LOGGER": $Logger
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

constructor(arg0: $Minecraft$$Type, arg1: $ClientLevel$$Type, arg2: $ClientPacketListener$$Type, arg3: $StatsCounter$$Type, arg4: $ClientRecipeBook$$Type, arg5: boolean, arg6: boolean)

public "drop"(arg0: boolean): boolean
public "getActivePortalLocalTransition"(): $Portal$Transition
public "handler$cca000$caelus$checkFlight"(arg0: $CallbackInfo$$Type): void
public "move"(arg0: $MoverType$$Type, arg1: $Vec3$$Type): void
public "tick"(): void
public "aiStep"(): void
public "updateTutorialInventoryAction"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ClickAction$$Type): void
public "swing"(arg0: $InteractionHand$$Type): void
public "respawn"(): void
public "isHorizontalCollisionMinor"(arg0: $Vec3$$Type): boolean
public "canSpawnSprintParticle"(): boolean
public "getRopeHoldPosition"(arg0: float): $Vec3
public "removeEffectNoUpdate"(arg0: $Holder$$Type<($MobEffect)>): $MobEffectInstance
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "openMinecartCommandBlock"(arg0: $BaseCommandBlock$$Type): void
public "sendOpenInventory"(): void
public "isLocalPlayer"(): boolean
public "isUnderWater"(): boolean
public "isCrouching"(): boolean
public "getViewXRot"(arg0: float): float
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "removeVehicle"(): void
public "getPermissionLevel"(): integer
public "updateIsUnderwater"(): boolean
public "playNotifySound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "closeMenu"(): void
public "openTextEdit"(arg0: $SignBlockEntity$$Type, arg1: boolean): void
public "openCommandBlock"(arg0: $CommandBlockEntity$$Type): void
public "openStructureBlock"(arg0: $StructureBlockEntity$$Type): void
public "openJigsawBlock"(arg0: $JigsawBlockEntity$$Type): void
public "onUpdateAbilities"(): void
public "openItemGui"(arg0: $ItemStack$$Type, arg1: $InteractionHand$$Type): void
public "clientSideCloseContainer"(): void
public "setExperienceValues"(arg0: float, arg1: integer, arg2: integer): void
public "setDoLimitedCrafting"(arg0: boolean): void
public "removeRecipeHighlight"(arg0: $RecipeHolder$$Type<(never)>): void
public "railways$getXRotLast"(): float
public "getCurrentConstantMood"(): float
public "getDoLimitedCrafting"(): boolean
public "railways$getYRotLast"(): float
public "getPermissionLevelKonkrete"(): integer
public "resetPos"(): void
public "hurtTo"(arg0: float): void
public "isUsingItem"(): boolean
public "isHandsBusy"(): boolean
public "isMovingSlowly"(): boolean
public "getRecipeBook"(): $ClientRecipeBook
public "jumpableVehicle"(): $PlayerRideableJumping
public "setPermissionLevel"(arg0: integer): void
public "isControlledCamera"(): boolean
public "setShowDeathScreen"(arg0: boolean): void
public "getCurrentMood"(): float
public "getJumpRidingScale"(): float
public "sendRidingJump"(): void
public "getMinecraft"(): $Minecraft
public "isAutoJumpEnabled"(): boolean
public "updateAutoJump"(arg0: float, arg1: float): void
public "getWaterVision"(): float
public "onGameModeChanged"(arg0: $GameType$$Type): void
public "getStatsCounter"(): $StatsCounter
public "handler$cjn000$xaerominimap$onTickStart"(arg0: $CallbackInfo$$Type): void
public "localvar$cca000$caelus$affixEmptyStack"(arg0: $ItemStack$$Type): $ItemStack
public "magicCrit"(arg0: $Entity$$Type): void
public "crit"(arg0: $Entity$$Type): void
public "shouldShowDeathScreen"(): boolean
public "displayClientMessage"(arg0: $Component$$Type, arg1: boolean): void
public "isTextFilteringEnabled"(): boolean
public "getVisualRotationYInDegrees"(): float
public "isSuppressingSlidingDownLadder"(): boolean
public "rideTick"(): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "tickDeath"(): void
public "heal"(arg0: float): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "actuallyHurt"(arg0: $DamageSource$$Type, arg1: float): void
public "handleEntityEvent"(arg0: byte): void
public "stopUsingItem"(): void
public "isEffectiveAi"(): boolean
public "startUsingItem"(arg0: $InteractionHand$$Type): void
public "serverAiStep"(): void
public "getViewYRot"(arg0: float): float
public "getUsedItemHand"(): $InteractionHand
public "isShiftKeyDown"(): boolean
public "runCommand"(command: StringJS): void
public "isSelf"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "isMiningBlock"(): boolean
public "getStats"(): $PlayerStatsJS
public "notify"(notification: $NotificationToastData$$Type): void
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "self"(): $Entity
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
get "activePortalLocalTransition"(): $Portal$Transition
get "localPlayer"(): boolean
get "underWater"(): boolean
get "crouching"(): boolean
get "permissionLevel"(): integer
set "doLimitedCrafting"(value: boolean)
get "currentConstantMood"(): float
get "doLimitedCrafting"(): boolean
get "permissionLevelKonkrete"(): integer
get "usingItem"(): boolean
get "handsBusy"(): boolean
get "movingSlowly"(): boolean
get "recipeBook"(): $ClientRecipeBook
set "permissionLevel"(value: integer)
get "controlledCamera"(): boolean
set "showDeathScreen"(value: boolean)
get "currentMood"(): float
get "jumpRidingScale"(): float
get "autoJumpEnabled"(): boolean
get "waterVision"(): float
get "statsCounter"(): $StatsCounter
get "textFilteringEnabled"(): boolean
get "visualRotationYInDegrees"(): float
get "suppressingSlidingDownLadder"(): boolean
get "effectiveAi"(): boolean
get "usedItemHand"(): $InteractionHand
get "shiftKeyDown"(): boolean
get "miningBlock"(): boolean
get "stats"(): $PlayerStatsJS
set "activePostShader"(value: $ResourceLocation$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayer$$Type = ($LocalPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalPlayer$$Original = $LocalPlayer;}
declare module "net.minecraft.client.player.inventory.Hotbar" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $Hotbar {
static readonly "CODEC": $Codec<($Hotbar)>

constructor()

public "load"(arg0: $HolderLookup$Provider$$Type): $List<($ItemStack)>
public "isEmpty"(): boolean
public "storeFrom"(arg0: $Inventory$$Type, arg1: $RegistryAccess$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hotbar$$Type = ($Hotbar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Hotbar$$Original = $Hotbar;}
