declare module "earth.terrarium.tempad.common.entity.TimedoorEntity$Companion" {
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$UUID$$Type} from "java.util.UUID"
import {$Unit$$Type} from "kotlin.Unit"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$NamedGlobalVec3$$Type} from "earth.terrarium.tempad.api.locations.NamedGlobalVec3"
import {$SyncableContext$$Type} from "earth.terrarium.tempad.api.context.SyncableContext"
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

public "getFail"(): $MutableComponent
public "getPosFail"(): $MutableComponent
public "getTimedoor"(arg0: $Level$$Type, arg1: $NamedGlobalVec3$$Type, arg2: boolean): $Either<($TimedoorEntity), ($Component)>
public "openTimedoor"(arg0: $Player$$Type, arg1: $SyncableContext$$Type<(never)>, arg2: $ResourceLocation$$Type, arg3: $UUID$$Type, arg4: $NamedGlobalVec3$$Type, arg5: $Function1$$Type<($TimedoorEntity$$Type), ($Unit$$Type)>): $Component
public "openTimedoor"(arg0: $GameProfile$$Type, arg1: $BlockEntity$$Type, arg2: $ResourceLocation$$Type, arg3: $UUID$$Type, arg4: $NamedGlobalVec3$$Type, arg5: $TimedoorPlacementSettings$$Type, arg6: $Function1$$Type<($TimedoorEntity$$Type), ($Unit$$Type)>): $Component
public static "openTimedoor$default"(arg0: $TimedoorEntity$Companion$$Type, arg1: $GameProfile$$Type, arg2: $BlockEntity$$Type, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type, arg5: $NamedGlobalVec3$$Type, arg6: $TimedoorPlacementSettings$$Type, arg7: $Function1$$Type, arg8: integer, arg9: any): $Component
public static "openTimedoor$default"(arg0: $TimedoorEntity$Companion$$Type, arg1: $Player$$Type, arg2: $SyncableContext$$Type, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type, arg5: $NamedGlobalVec3$$Type, arg6: $Function1$$Type, arg7: integer, arg8: any): $Component
public "getEnteringFail"(): $MutableComponent
public "getIntraDimFail"(): $MutableComponent
public "getLeavingFail"(): $MutableComponent
public "getInterDimFail"(): $MutableComponent
public "getIntraDimAllFail"(): $MutableComponent
public "getNoChrononsFail"(): $MutableComponent
public static "getTimedoor$default"(arg0: $TimedoorEntity$Companion$$Type, arg1: $Level$$Type, arg2: $NamedGlobalVec3$$Type, arg3: boolean, arg4: integer, arg5: any): $Either
get "fail"(): $MutableComponent
get "posFail"(): $MutableComponent
get "enteringFail"(): $MutableComponent
get "intraDimFail"(): $MutableComponent
get "leavingFail"(): $MutableComponent
get "interDimFail"(): $MutableComponent
get "intraDimAllFail"(): $MutableComponent
get "noChrononsFail"(): $MutableComponent
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
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Color, $Color$$Type} from "com.teamresourceful.resourcefullib.common.color.Color"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TimedoorEntity$Companion} from "earth.terrarium.tempad.common.entity.TimedoorEntity$Companion"
import {$NamedGlobalVec3$$Type} from "earth.terrarium.tempad.api.locations.NamedGlobalVec3"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$TimedoorPlacementSettings, $TimedoorPlacementSettings$$Type} from "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $TimedoorEntity extends $Entity {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "create_diesel_generators$turretPos": $BlockPos
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
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
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
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
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<(never)>, arg1: $Level$$Type)

public "getOriginal"(): boolean
public "getColor"(): $Color
public "fireImmune"(): boolean
public "getTargetPos"(): $Vec3
public "setOriginal"(arg0: boolean): void
public "remove"(arg0: $Entity$RemovalReason$$Type): void
public "load"(arg0: $CompoundTag$$Type): void
public "getOwner"(): $UUID
public "setOwner"(arg0: $UUID$$Type): void
public "tick"(): void
public "setColor"(arg0: $Color$$Type): void
public "getDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "getSizing"(): $TimedoorPlacementSettings
public "setSizing"(arg0: $TimedoorPlacementSettings$$Type): void
public "getLinkedPortalEntity"(): $TimedoorEntity
public static "access$getLeavingFail$cp"(): $MutableComponent
public static "access$getInterDimFail$cp"(): $MutableComponent
public static "access$getEnteringFail$cp"(): $MutableComponent
public static "access$getPosFail$cp"(): $MutableComponent
public static "access$getIntraDimFail$cp"(): $MutableComponent
public "setLocation"(arg0: $NamedGlobalVec3$$Type): void
public "setAnimationOffset"(arg0: integer): void
public "getTargetAngle"(): float
public "saveWithoutId"(arg0: $CompoundTag$$Type): $CompoundTag
public "onAddedToLevel"(): void
public "isAlwaysTicking"(): boolean
public "setBeganClosing"(arg0: integer): void
public "setTargetAngle"(arg0: float): void
public "setTargetPos"(arg0: $Vec3$$Type): void
public "getLinkedPortalId"(): $UUID
public "setLinkedPortalId"(arg0: $UUID$$Type): void
public "setTargetDimension"(arg0: $ResourceKey$$Type<($Level)>): void
public "getAnimationOffset"(): integer
public "getTargetDimension"(): $ResourceKey<($Level)>
public "getGlitching"(): boolean
public "getBeganClosing"(): integer
public static "access$getFail$cp"(): $MutableComponent
public "setClosingTime"(arg0: integer): void
public "getClosingTime"(): integer
public "setGlitching"(arg0: boolean): void
public static "access$getIntraDimAllFail$cp"(): $MutableComponent
public static "access$tryInitReceivingPortal"(arg0: $TimedoorEntity$$Type): void
public static "access$getNoChrononsFail$cp"(): $MutableComponent
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "original"(): boolean
get "color"(): $Color
get "targetPos"(): $Vec3
set "original"(value: boolean)
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
set "color"(value: $Color$$Type)
get "sizing"(): $TimedoorPlacementSettings
set "sizing"(value: $TimedoorPlacementSettings$$Type)
get "linkedPortalEntity"(): $TimedoorEntity
set "location"(value: $NamedGlobalVec3$$Type)
set "animationOffset"(value: integer)
get "targetAngle"(): float
get "alwaysTicking"(): boolean
set "beganClosing"(value: integer)
set "targetAngle"(value: float)
set "targetPos"(value: $Vec3$$Type)
get "linkedPortalId"(): $UUID
set "linkedPortalId"(value: $UUID$$Type)
set "targetDimension"(value: $ResourceKey$$Type<($Level)>)
get "animationOffset"(): integer
get "targetDimension"(): $ResourceKey<($Level)>
get "glitching"(): boolean
get "beganClosing"(): integer
set "closingTime"(value: integer)
get "closingTime"(): integer
set "glitching"(value: boolean)
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
