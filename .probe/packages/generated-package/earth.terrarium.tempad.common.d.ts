declare module "earth.terrarium.tempad.common.mixin.PlayerModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerModelAccessor$$Interface {

(): boolean
get "slim"(): boolean
}

export class $PlayerModelAccessor implements $PlayerModelAccessor$$Interface {
 "getSlim"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerModelAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerModelAccessor$$Original = $PlayerModelAccessor;}
declare module "earth.terrarium.tempad.common.entity.TimedoorEntity" {
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TimedoorEntity$Companion} from "earth.terrarium.tempad.common.entity.TimedoorEntity$Companion"
import {$NamedGlobalVec3$$Type} from "earth.terrarium.tempad.api.locations.NamedGlobalVec3"
import {$SynchedEntityData} from "net.minecraft.network.syncher.SynchedEntityData"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Color, $Color$$Type} from "com.teamresourceful.resourcefullib.common.color.Color"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$TimedoorPlacementSettings, $TimedoorPlacementSettings$$Type} from "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Object2DoubleMap} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $TimedoorEntity extends $Entity {
 "firstTick": boolean
 "wasEyeInWater": boolean
 "hasImpulse": boolean
static readonly "ENTITY_COUNTER": $AtomicInteger
 "uuid": $UUID
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
static readonly "FLAG_ONFIRE": integer
static readonly "BOARDING_COOLDOWN": integer
 "sodiumdynamiclights$luminance": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "FLAG_FALL_FLYING": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "boardingCooldown": integer
 "zo": double
 "create_diesel_generators$turretPos": $BlockPos
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
readonly "entityData": $SynchedEntityData
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "ANIMATION_LENGTH": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
static readonly "Companion": $TimedoorEntity$Companion
readonly "random": $RandomSource
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "IDLE_BEFORE_START": integer
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "stringUUID": StringJS
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "FLAG_GLOWING": integer
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<(never)>, arg1: $Level$$Type)

public "remove"(arg0: $Entity$RemovalReason$$Type): void
public "load"(arg0: $CompoundTag$$Type): void
public "getOwner"(): $UUID
public "setOwner"(arg0: $UUID$$Type): void
public "tick"(): void
public "setColor"(arg0: $Color$$Type): void
public "getDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "setLocation"(arg0: $NamedGlobalVec3$$Type): void
public "isAlwaysTicking"(): boolean
public "setAnimationOffset"(arg0: integer): void
public "getColor"(): $Color
public "getOriginal"(): boolean
public "getSizing"(): $TimedoorPlacementSettings
public "setSizing"(arg0: $TimedoorPlacementSettings$$Type): void
public "setOriginal"(arg0: boolean): void
public static "access$getPosFail$cp"(): $MutableComponent
public static "access$getInterDimFail$cp"(): $MutableComponent
public "getLinkedPortalEntity"(): $TimedoorEntity
public static "access$getLeavingFail$cp"(): $MutableComponent
public static "access$getEnteringFail$cp"(): $MutableComponent
public static "access$getIntraDimFail$cp"(): $MutableComponent
public "getTargetAngle"(): float
public "setGlitching"(arg0: boolean): void
public "getTargetPos"(): $Vec3
public "fireImmune"(): boolean
public "saveWithoutId"(arg0: $CompoundTag$$Type): $CompoundTag
public "onAddedToLevel"(): void
public static "access$getIntraDimAllFail$cp"(): $MutableComponent
public static "access$tryInitReceivingPortal"(arg0: $TimedoorEntity$$Type): void
public static "access$getNoChrononsFail$cp"(): $MutableComponent
public "getClosingTime"(): integer
public "getGlitching"(): boolean
public "getLinkedPortalId"(): $UUID
public "getAnimationOffset"(): integer
public static "access$getFail$cp"(): $MutableComponent
public "getBeganClosing"(): integer
public "setLinkedPortalId"(arg0: $UUID$$Type): void
public "setTargetPos"(arg0: $Vec3$$Type): void
public "setTargetAngle"(arg0: float): void
public "setBeganClosing"(arg0: integer): void
public "getTargetDimension"(): $ResourceKey<($Level)>
public "setClosingTime"(arg0: integer): void
public "setTargetDimension"(arg0: $ResourceKey$$Type<($Level)>): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
set "color"(value: $Color$$Type)
set "location"(value: $NamedGlobalVec3$$Type)
get "alwaysTicking"(): boolean
set "animationOffset"(value: integer)
get "color"(): $Color
get "original"(): boolean
get "sizing"(): $TimedoorPlacementSettings
set "sizing"(value: $TimedoorPlacementSettings$$Type)
set "original"(value: boolean)
get "linkedPortalEntity"(): $TimedoorEntity
get "targetAngle"(): float
set "glitching"(value: boolean)
get "targetPos"(): $Vec3
get "closingTime"(): integer
get "glitching"(): boolean
get "linkedPortalId"(): $UUID
get "animationOffset"(): integer
get "beganClosing"(): integer
set "linkedPortalId"(value: $UUID$$Type)
set "targetPos"(value: $Vec3$$Type)
set "targetAngle"(value: float)
set "beganClosing"(value: integer)
get "targetDimension"(): $ResourceKey<($Level)>
set "closingTime"(value: integer)
set "targetDimension"(value: $ResourceKey$$Type<($Level)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEntity$$Type = ($TimedoorEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEntity$$Original = $TimedoorEntity;}
declare module "earth.terrarium.tempad.common.entity.TimedoorEntity$Companion" {
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$UUID$$Type} from "java.util.UUID"
import {$Unit$$Type} from "kotlin.Unit"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SyncableContext$$Type} from "earth.terrarium.tempad.api.context.SyncableContext"
import {$NamedGlobalVec3$$Type} from "earth.terrarium.tempad.api.locations.NamedGlobalVec3"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TimedoorEntity, $TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TimedoorPlacementSettings$$Type} from "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Function1$$Type} from "kotlin.jvm.functions.Function1"

export class $TimedoorEntity$Companion {
constructor(arg0: $DefaultConstructorMarker$$Type)

public static "openTimedoor$default"(arg0: $TimedoorEntity$Companion$$Type, arg1: $Player$$Type, arg2: $SyncableContext$$Type, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type, arg5: $NamedGlobalVec3$$Type, arg6: $Function1$$Type, arg7: integer, arg8: any): $Component
public static "openTimedoor$default"(arg0: $TimedoorEntity$Companion$$Type, arg1: $GameProfile$$Type, arg2: $BlockEntity$$Type, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type, arg5: $NamedGlobalVec3$$Type, arg6: $TimedoorPlacementSettings$$Type, arg7: $Function1$$Type, arg8: integer, arg9: any): $Component
public "getFail"(): $MutableComponent
public "getPosFail"(): $MutableComponent
public "openTimedoor"(arg0: $Player$$Type, arg1: $SyncableContext$$Type<(never)>, arg2: $ResourceLocation$$Type, arg3: $UUID$$Type, arg4: $NamedGlobalVec3$$Type, arg5: $Function1$$Type<($TimedoorEntity$$Type), ($Unit$$Type)>): $Component
public "openTimedoor"(arg0: $GameProfile$$Type, arg1: $BlockEntity$$Type, arg2: $ResourceLocation$$Type, arg3: $UUID$$Type, arg4: $NamedGlobalVec3$$Type, arg5: $TimedoorPlacementSettings$$Type, arg6: $Function1$$Type<($TimedoorEntity$$Type), ($Unit$$Type)>): $Component
public "getTimedoor"(arg0: $Level$$Type, arg1: $NamedGlobalVec3$$Type, arg2: boolean): $Either<($TimedoorEntity), ($Component)>
public "getIntraDimFail"(): $MutableComponent
public "getInterDimFail"(): $MutableComponent
public "getNoChrononsFail"(): $MutableComponent
public "getIntraDimAllFail"(): $MutableComponent
public "getEnteringFail"(): $MutableComponent
public "getLeavingFail"(): $MutableComponent
public static "getTimedoor$default"(arg0: $TimedoorEntity$Companion$$Type, arg1: $Level$$Type, arg2: $NamedGlobalVec3$$Type, arg3: boolean, arg4: integer, arg5: any): $Either
get "fail"(): $MutableComponent
get "posFail"(): $MutableComponent
get "intraDimFail"(): $MutableComponent
get "interDimFail"(): $MutableComponent
get "noChrononsFail"(): $MutableComponent
get "intraDimAllFail"(): $MutableComponent
get "enteringFail"(): $MutableComponent
get "leavingFail"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEntity$Companion$$Type = ($TimedoorEntity$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEntity$Companion$$Original = $TimedoorEntity$Companion;}
