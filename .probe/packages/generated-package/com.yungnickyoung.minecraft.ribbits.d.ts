declare module "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.IChannelDuck" {
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundBuffer$$Type} from "com.mojang.blaze3d.audio.SoundBuffer"

export interface $IChannelDuck$$Interface {
}

export class $IChannelDuck implements $IChannelDuck$$Interface {
 "ribbits$attachStaticBufferWithByteOffset"(arg0: $SoundInstance$$Type, arg1: $SoundBuffer$$Type, arg2: integer): void
 "ribbits$attachStaticBufferWithTickOffset"(arg0: $SoundInstance$$Type, arg1: $SoundBuffer$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChannelDuck$$Type = ($IChannelDuck);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IChannelDuck$$Original = $IChannelDuck;}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.ISoundEngineDuck" {
import {$UUID$$Type} from "java.util.UUID"

export interface $ISoundEngineDuck$$Interface {
}

export class $ISoundEngineDuck implements $ISoundEngineDuck$$Interface {
 "ribbits$stopMaraca"(arg0: $UUID$$Type): void
 "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundEngineDuck$$Type = ($ISoundEngineDuck);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISoundEngineDuck$$Original = $ISoundEngineDuck;}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.mixins.accessor.DoorBlockAccessor" {
import {$DoorBlock} from "net.minecraft.world.level.block.DoorBlock"
import {$BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $DoorBlockAccessor$$Interface {
}

export class $DoorBlockAccessor implements $DoorBlockAccessor$$Interface {
static "createDoorBlock"(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorBlockAccessor$$Type = ($DoorBlockAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoorBlockAccessor$$Original = $DoorBlockAccessor;}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.mixins.client.accessor.SoundBufferAccessor" {
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"

export interface $SoundBufferAccessor$$Interface {

(): $OptionalInt$$Type
}

export class $SoundBufferAccessor implements $SoundBufferAccessor$$Interface {
 "callGetAlBuffer"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBufferAccessor$$Type = (() => $OptionalInt$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundBufferAccessor$$Original = $SoundBufferAccessor;}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.mixins.client.accessor.ClientLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelEntityGetter, $LevelEntityGetter$$Type} from "net.minecraft.world.level.entity.LevelEntityGetter"

export interface $ClientLevelAccessor$$Interface {

(): $LevelEntityGetter$$Type<($Entity$$Type)>
}

export class $ClientLevelAccessor implements $ClientLevelAccessor$$Interface {
 "callGetEntities"(): $LevelEntityGetter<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelAccessor$$Type = (() => $LevelEntityGetter$$Type<($Entity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLevelAccessor$$Original = $ClientLevelAccessor;}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.ISoundManagerDuck" {
import {$UUID$$Type} from "java.util.UUID"

export interface $ISoundManagerDuck$$Interface {
}

export class $ISoundManagerDuck implements $ISoundManagerDuck$$Interface {
 "ribbits$stopMaraca"(arg0: $UUID$$Type): void
 "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundManagerDuck$$Type = ($ISoundManagerDuck);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISoundManagerDuck$$Original = $ISoundManagerDuck;}
