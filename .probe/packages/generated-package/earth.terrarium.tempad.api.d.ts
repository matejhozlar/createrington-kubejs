declare module "earth.terrarium.tempad.api.event.TimedoorEvent$OpenWithItem" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$UUID$$Type} from "java.util.UUID"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$TimedoorEvent$Open} from "earth.terrarium.tempad.api.event.TimedoorEvent$Open"
import {$SyncableContext, $SyncableContext$$Type} from "earth.terrarium.tempad.api.context.SyncableContext"

export class $TimedoorEvent$OpenWithItem extends $TimedoorEvent$Open {
constructor(arg0: $TimedoorEntity$$Type, arg1: $GameProfile$$Type, arg2: $SyncableContext$$Type<(never)>, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type)

public "getTempadCtx"(): $SyncableContext<(never)>
get "tempadCtx"(): $SyncableContext<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEvent$OpenWithItem$$Type = ($TimedoorEvent$OpenWithItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEvent$OpenWithItem$$Original = $TimedoorEvent$OpenWithItem;}
declare module "earth.terrarium.tempad.api.event.TimedoorEvent$Close" {
import {$TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$TimedoorEvent} from "earth.terrarium.tempad.api.event.TimedoorEvent"

export class $TimedoorEvent$Close extends $TimedoorEvent {
constructor(arg0: $TimedoorEntity$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEvent$Close$$Type = ($TimedoorEvent$Close);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEvent$Close$$Original = $TimedoorEvent$Close;}
declare module "earth.terrarium.tempad.api.context.ContextHolder" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$ContextHolder$Companion} from "earth.terrarium.tempad.api.context.ContextHolder$Companion"
import {$ContextType, $ContextType$$Type} from "earth.terrarium.tempad.api.context.ContextType"
import {$SyncableContext} from "earth.terrarium.tempad.api.context.SyncableContext"
import {$ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $ContextHolder<T> {
static readonly "Companion": $ContextHolder$Companion

constructor(arg0: $ContextType$$Type<(T)>, arg1: T)

public static "copy$default"(arg0: $ContextHolder$$Type, arg1: $ContextType$$Type, arg2: any, arg3: integer, arg4: any): $ContextHolder
public "component1"(): $ContextType<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "encode"(arg0: $ByteBuf$$Type): void
public "getType"(): $ContextType<(T)>
public "copy"(arg0: $ContextType$$Type<(T)>, arg1: T): $ContextHolder<(T)>
public "getData"(): T
public "getCtx"(arg0: $Player$$Type): $SyncableContext<(T)>
public "component2"(): T
public static "access$getCodec$cp"(): $ByteCodec
get "type"(): $ContextType<(T)>
get "data"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextHolder$$Type<T> = ($ContextHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextHolder$$Original<T> = $ContextHolder<(T)>;}
declare module "earth.terrarium.tempad.api.context.SyncableContext" {
import {$ItemContext$$Interface} from "earth.terrarium.tempad.api.context.ItemContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContextHolder} from "earth.terrarium.tempad.api.context.ContextHolder"
import {$ContextType} from "earth.terrarium.tempad.api.context.ContextType"

export interface $SyncableContext$$Interface<T> extends $ItemContext$$Interface {
get "type"(): $ContextType<(T)>
get "data"(): T
get "holder"(): $ContextHolder<(T)>
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
}

export class $SyncableContext<T> implements $SyncableContext$$Interface {
 "getType"(): $ContextType<(T)>
 "getData"(): T
 "getHolder"(): $ContextHolder<(T)>
 "getStack"(): $ItemStack
 "addStack"(arg0: $ItemStack$$Type): void
 "setStack"(arg0: $ItemStack$$Type): void
 "exchange"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncableContext$$Type<T> = ($SyncableContext<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncableContext$$Original<T> = $SyncableContext<(T)>;}
declare module "earth.terrarium.tempad.api.sizing.SizingType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TimedoorPlacementSettings} from "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings"
import {$SizingType$Companion} from "earth.terrarium.tempad.api.sizing.SizingType$Companion"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SizingType<T extends $TimedoorPlacementSettings> {
static readonly "Companion": $SizingType$Companion

constructor(arg0: $ResourceLocation$$Type, arg1: $ByteCodec$$Type<(T)>, arg2: $MapCodec$$Type<(T)>)

public static "copy$default"(arg0: $SizingType$$Type, arg1: $ResourceLocation$$Type, arg2: $ByteCodec$$Type, arg3: $MapCodec$$Type, arg4: integer, arg5: any): $SizingType
public "component1"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "copy"(arg0: $ResourceLocation$$Type, arg1: $ByteCodec$$Type<(T)>, arg2: $MapCodec$$Type<(T)>): $SizingType<(T)>
public "component3"(): $MapCodec<(T)>
public "component2"(): $ByteCodec<(T)>
public "getCodec"(): $MapCodec<(T)>
public "getByteCodec"(): $ByteCodec<(T)>
public static "access$getCodec$cp"(): $Codec
public static "access$getByteCodec$cp"(): $ByteCodec
get "id"(): $ResourceLocation
get "codec"(): $MapCodec<(T)>
get "byteCodec"(): $ByteCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizingType$$Type<T> = ($SizingType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizingType$$Original<T> = $SizingType<(T)>;}
declare module "earth.terrarium.tempad.api.sizing.DoorType" {
import {$Enum} from "java.lang.Enum"
import {$EnumEntries} from "kotlin.enums.EnumEntries"

export class $DoorType extends $Enum<($DoorType)> {
static readonly "ENTRY": $DoorType
static readonly "EXIT": $DoorType

public static "values"(): ($DoorType)[]
public static "valueOf"(arg0: StringJS): $DoorType
public static "getEntries"(): $EnumEntries<($DoorType)>
get "entries"(): $EnumEntries<($DoorType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorType$$Type = (("entry") | ("exit"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoorType$$Original = $DoorType;}
declare module "earth.terrarium.tempad.api.event.TimedoorEvent$Open" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$TimedoorEvent} from "earth.terrarium.tempad.api.event.TimedoorEvent"

export class $TimedoorEvent$Open extends $TimedoorEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $TimedoorEntity$$Type, arg1: $ResourceLocation$$Type, arg2: $UUID$$Type, arg3: $GameProfile$$Type)

public "fail"(arg0: $Component$$Type): void
public "getProvider"(): $ResourceLocation
public "getErrorMessage"(): $Component
public "setErrorMessage"(arg0: $Component$$Type): void
public "getLocationId"(): $UUID
public "getOpener"(): $GameProfile
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "provider"(): $ResourceLocation
get "errorMessage"(): $Component
set "errorMessage"(value: $Component$$Type)
get "locationId"(): $UUID
get "opener"(): $GameProfile
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEvent$Open$$Type = ($TimedoorEvent$Open);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEvent$Open$$Original = $TimedoorEvent$Open;}
declare module "earth.terrarium.tempad.api.locations.NamedGlobalVec3" {
import {$TooltipComponent$$Interface} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Color, $Color$$Type} from "com.teamresourceful.resourcefullib.common.color.Color"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$NamedGlobalVec3$Companion} from "earth.terrarium.tempad.api.locations.NamedGlobalVec3$Companion"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $NamedGlobalVec3 implements $TooltipComponent$$Interface {
static readonly "Companion": $NamedGlobalVec3$Companion

constructor(arg0: $Component$$Type, arg1: $Vec3$$Type, arg2: $ResourceKey$$Type<($Level)>, arg3: float, arg4: $Color$$Type)

public static "copy$default"(arg0: $NamedGlobalVec3$$Type, arg1: $Component$$Type, arg2: $Vec3$$Type, arg3: $ResourceKey$$Type, arg4: float, arg5: $Color$$Type, arg6: integer, arg7: any): $NamedGlobalVec3
public "getX"(): integer
public "getZ"(): integer
public "component1"(): $Component
public "getColor"(): $Color
public "getName"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "copy"(arg0: $Component$$Type, arg1: $Vec3$$Type, arg2: $ResourceKey$$Type<($Level)>, arg3: float, arg4: $Color$$Type): $NamedGlobalVec3
public "getDimension"(): $ResourceKey<($Level)>
public "getPos"(): $Vec3
public "getAngle"(): float
public "getY"(): integer
public "component5"(): $Color
public "component3"(): $ResourceKey<($Level)>
public "component4"(): float
public "component2"(): $Vec3
public static "access$getCODEC$cp"(): $MapCodec
public static "access$getBYTE_CODEC$cp"(): $ByteCodec
public static "access$getNowhere$cp"(): $NamedGlobalVec3
public "getDimensionText"(): $MutableComponent
public "getOffsetLocation"(): $Vec3
get "x"(): integer
get "z"(): integer
get "color"(): $Color
get "name"(): $Component
get "dimension"(): $ResourceKey<($Level)>
get "pos"(): $Vec3
get "angle"(): float
get "y"(): integer
get "dimensionText"(): $MutableComponent
get "offsetLocation"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedGlobalVec3$$Type = ($NamedGlobalVec3);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NamedGlobalVec3$$Original = $NamedGlobalVec3;}
declare module "earth.terrarium.tempad.api.locations.NamedGlobalVec3$Companion" {
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$NamedGlobalVec3} from "earth.terrarium.tempad.api.locations.NamedGlobalVec3"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $NamedGlobalVec3$Companion {
constructor(arg0: $DefaultConstructorMarker$$Type)

public "getCODEC"(): $MapCodec<($NamedGlobalVec3)>
public "getNowhere"(): $NamedGlobalVec3
public "getBYTE_CODEC"(): $ByteCodec<($NamedGlobalVec3)>
get "CODEC"(): $MapCodec<($NamedGlobalVec3)>
get "nowhere"(): $NamedGlobalVec3
get "BYTE_CODEC"(): $ByteCodec<($NamedGlobalVec3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedGlobalVec3$Companion$$Type = ($NamedGlobalVec3$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NamedGlobalVec3$Companion$$Original = $NamedGlobalVec3$Companion;}
declare module "earth.terrarium.tempad.api.context.ItemContext" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemContext$$Interface {
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
}

export class $ItemContext implements $ItemContext$$Interface {
 "getStack"(): $ItemStack
 "addStack"(arg0: $ItemStack$$Type): void
 "setStack"(arg0: $ItemStack$$Type): void
 "exchange"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemContext$$Type = ($ItemContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemContext$$Original = $ItemContext;}
declare module "earth.terrarium.tempad.api.event.TimedoorEvent$OpenWithBlock" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$UUID$$Type} from "java.util.UUID"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$TimedoorEvent$Open} from "earth.terrarium.tempad.api.event.TimedoorEvent$Open"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $TimedoorEvent$OpenWithBlock extends $TimedoorEvent$Open {
constructor(arg0: $TimedoorEntity$$Type, arg1: $GameProfile$$Type, arg2: $BlockEntity$$Type, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type)

public "getBlock"(): $BlockEntity
get "block"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEvent$OpenWithBlock$$Type = ($TimedoorEvent$OpenWithBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEvent$OpenWithBlock$$Original = $TimedoorEvent$OpenWithBlock;}
declare module "earth.terrarium.tempad.api.event.TimedoorEvent$Exit" {
import {$TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TimedoorEvent} from "earth.terrarium.tempad.api.event.TimedoorEvent"

export class $TimedoorEvent$Exit extends $TimedoorEvent {
constructor(arg0: $TimedoorEntity$$Type, arg1: $Entity$$Type)

public "getTeleportee"(): $Entity
get "teleportee"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEvent$Exit$$Type = ($TimedoorEvent$Exit);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEvent$Exit$$Original = $TimedoorEvent$Exit;}
declare module "earth.terrarium.tempad.api.event.TimedoorEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$TimedoorEntity, $TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"

export class $TimedoorEvent extends $EntityEvent {
constructor(arg0: $TimedoorEntity$$Type)

public "getEntity"(): $TimedoorEntity
get "entity"(): $TimedoorEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEvent$$Type = ($TimedoorEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEvent$$Original = $TimedoorEvent;}
declare module "earth.terrarium.tempad.api.context.ContextHolder$Companion" {
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ContextHolder} from "earth.terrarium.tempad.api.context.ContextHolder"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"

export class $ContextHolder$Companion {
constructor(arg0: $DefaultConstructorMarker$$Type)

public "getCodec"(): $ByteCodec<($ContextHolder<(never)>)>
get "codec"(): $ByteCodec<($ContextHolder<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextHolder$Companion$$Type = ($ContextHolder$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextHolder$Companion$$Original = $ContextHolder$Companion;}
declare module "earth.terrarium.tempad.api.context.ContextType" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ContextHolder} from "earth.terrarium.tempad.api.context.ContextHolder"
import {$ContextType$Companion} from "earth.terrarium.tempad.api.context.ContextType$Companion"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$SyncableContext} from "earth.terrarium.tempad.api.context.SyncableContext"
import {$ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $ContextType<T> {
static readonly "Companion": $ContextType$Companion

constructor(arg0: $ResourceLocation$$Type, arg1: $ByteCodec$$Type<(T)>)

public static "copy$default"(arg0: $ContextType$$Type, arg1: $ResourceLocation$$Type, arg2: $ByteCodec$$Type, arg3: integer, arg4: any): $ContextType
public "component1"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decode"(arg0: $ByteBuf$$Type): $ContextHolder<(T)>
public "getId"(): $ResourceLocation
public "copy"(arg0: $ResourceLocation$$Type, arg1: $ByteCodec$$Type<(T)>): $ContextType<(T)>
public "getCtx"(arg0: $Player$$Type, arg1: T): $SyncableContext<(T)>
public "component2"(): $ByteCodec<(T)>
public "getCodec"(): $ByteCodec<(T)>
public static "access$getCodec$cp"(): $ByteCodec
get "id"(): $ResourceLocation
get "codec"(): $ByteCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextType$$Type<T> = ($ContextType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextType$$Original<T> = $ContextType<(T)>;}
declare module "earth.terrarium.tempad.api.event.TimedoorEvent$Enter" {
import {$TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TimedoorEvent} from "earth.terrarium.tempad.api.event.TimedoorEvent"

export class $TimedoorEvent$Enter extends $TimedoorEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $TimedoorEntity$$Type, arg1: $Entity$$Type)

public "getTeleportee"(): $Entity
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "teleportee"(): $Entity
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorEvent$Enter$$Type = ($TimedoorEvent$Enter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorEvent$Enter$$Original = $TimedoorEvent$Enter;}
declare module "earth.terrarium.tempad.api.context.ContextType$Companion" {
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$ContextType} from "earth.terrarium.tempad.api.context.ContextType"

export class $ContextType$Companion {
constructor(arg0: $DefaultConstructorMarker$$Type)

public "getCodec"(): $ByteCodec<($ContextType<(never)>)>
get "codec"(): $ByteCodec<($ContextType<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextType$Companion$$Type = ($ContextType$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextType$Companion$$Original = $ContextType$Companion;}
declare module "earth.terrarium.tempad.api.sizing.SizingType$Companion" {
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$SizingType} from "earth.terrarium.tempad.api.sizing.SizingType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"

export class $SizingType$Companion {
constructor(arg0: $DefaultConstructorMarker$$Type)

public "getCodec"(): $Codec<($SizingType<(never)>)>
public "getByteCodec"(): $ByteCodec<($SizingType<(never)>)>
get "codec"(): $Codec<($SizingType<(never)>)>
get "byteCodec"(): $ByteCodec<($SizingType<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizingType$Companion$$Type = ($SizingType$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizingType$Companion$$Original = $SizingType$Companion;}
declare module "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings$Companion" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$TimedoorPlacementSettings} from "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"

export class $TimedoorPlacementSettings$Companion {
public "getCodec"(): $Codec<($TimedoorPlacementSettings)>
public "getByteCodec"(): $ByteCodec<($TimedoorPlacementSettings)>
get "codec"(): $Codec<($TimedoorPlacementSettings)>
get "byteCodec"(): $ByteCodec<($TimedoorPlacementSettings)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorPlacementSettings$Companion$$Type = ($TimedoorPlacementSettings$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorPlacementSettings$Companion$$Original = $TimedoorPlacementSettings$Companion;}
declare module "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$SizingType} from "earth.terrarium.tempad.api.sizing.SizingType"
import {$TimedoorEntity$$Type} from "earth.terrarium.tempad.common.entity.TimedoorEntity"
import {$DoorType$$Type} from "earth.terrarium.tempad.api.sizing.DoorType"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TimedoorPlacementSettings$Companion} from "earth.terrarium.tempad.api.sizing.TimedoorPlacementSettings$Companion"

export interface $TimedoorPlacementSettings$$Interface {
get "type"(): $SizingType<(never)>
get "dimensions"(): $EntityDimensions
get "showLineAnimation"(): boolean
}

export class $TimedoorPlacementSettings implements $TimedoorPlacementSettings$$Interface {
static readonly "Companion": $TimedoorPlacementSettings$Companion

 "getType"(): $SizingType<(never)>
 "getDimensions"(): $EntityDimensions
 "isInside"(arg0: $TimedoorEntity$$Type, arg1: $Entity$$Type): boolean
 "widthAtPercent"(arg0: float): float
 "depthAtPercent"(arg0: float): float
 "placeTimedoor"(arg0: $DoorType$$Type, arg1: $Vec3$$Type, arg2: float, arg3: $TimedoorEntity$$Type): void
 "heightAtPercent"(arg0: float): float
 "getShowLineAnimation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedoorPlacementSettings$$Type = ($TimedoorPlacementSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimedoorPlacementSettings$$Original = $TimedoorPlacementSettings;}
