declare module "com.mojang.blaze3d.audio.Channel" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AudioStream$$Type} from "net.minecraft.client.sounds.AudioStream"
import {$ChannelAccessor$$Interface} from "com.sonicether.soundphysics.mixin.ChannelAccessor"
import {$SoundBuffer$$Type} from "com.mojang.blaze3d.audio.SoundBuffer"

export class $Channel implements $ChannelAccessor$$Interface {
static readonly "BUFFER_DURATION_SECONDS": integer

public "playing"(): boolean
public "pause"(): void
public "setLooping"(arg0: boolean): void
public "stop"(): void
public "destroy"(): void
public "getSource"(): integer
public "setPitch"(arg0: float): void
public "setVolume"(arg0: float): void
public "stopped"(): boolean
public "unpause"(): void
public "play"(): void
public "attachBufferStream"(arg0: $AudioStream$$Type): void
public "linearAttenuation"(arg0: float): void
public "disableAttenuation"(): void
public "setSelfPosition"(arg0: $Vec3$$Type): void
public "attachStaticBuffer"(arg0: $SoundBuffer$$Type): void
public "updateStream"(): void
public "setRelative"(arg0: boolean): void
set "looping"(value: boolean)
get "source"(): integer
set "pitch"(value: float)
set "volume"(value: float)
set "selfPosition"(value: $Vec3$$Type)
set "relative"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$$Type = ($Channel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Channel$$Original = $Channel;}
declare module "com.mojang.blaze3d.audio.ListenerTransform" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Record} from "java.lang.Record"

export class $ListenerTransform extends $Record {
static readonly "INITIAL": $ListenerTransform

constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vec3
public "right"(): $Vec3
public "up"(): $Vec3
public "forward"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListenerTransform$$Type = ({"up"?: $Vec3$$Type, "forward"?: $Vec3$$Type, "position"?: $Vec3$$Type}) | ([up?: $Vec3$$Type, forward?: $Vec3$$Type, position?: $Vec3$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListenerTransform$$Original = $ListenerTransform;}
declare module "com.mojang.blaze3d.audio.SoundBuffer" {
import {$AudioFormat$$Type} from "javax.sound.sampled.AudioFormat"
import {$OptionalInt} from "java.util.OptionalInt"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $SoundBuffer {
constructor(arg0: $ByteBuffer$$Type, arg1: $AudioFormat$$Type)

public "discardAlBuffer"(): void
public "releaseAlBuffer"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBuffer$$Type = ($SoundBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundBuffer$$Original = $SoundBuffer;}
declare module "com.mojang.blaze3d.audio.Library$Pool" {
import {$Enum} from "java.lang.Enum"

export class $Library$Pool extends $Enum<($Library$Pool)> {
static readonly "STREAMING": $Library$Pool
static readonly "STATIC": $Library$Pool

public static "values"(): ($Library$Pool)[]
public static "valueOf"(arg0: StringJS): $Library$Pool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Library$Pool$$Type = (("static") | ("streaming"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Library$Pool$$Original = $Library$Pool;}
declare module "com.mojang.blaze3d.audio.Library" {
import {$Library$Pool$$Type} from "com.mojang.blaze3d.audio.Library$Pool"
import {$List} from "java.util.List"
import {$Listener} from "com.mojang.blaze3d.audio.Listener"
import {$Channel, $Channel$$Type} from "com.mojang.blaze3d.audio.Channel"

export class $Library {
constructor()

public "init"(arg0: StringJS, arg1: boolean): void
public "cleanup"(): void
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "getListener"(): $Listener
public "getDebugString"(): StringJS
public "acquireChannel"(arg0: $Library$Pool$$Type): $Channel
public "releaseChannel"(arg0: $Channel$$Type): void
public "isCurrentDeviceDisconnected"(): boolean
public static "getDefaultDeviceName"(): StringJS
public "hasDefaultDeviceChanged"(): boolean
public "getCurrentDeviceName"(): StringJS
get "availableSoundDevices"(): $List<(StringJS)>
get "listener"(): $Listener
get "debugString"(): StringJS
get "currentDeviceDisconnected"(): boolean
get "defaultDeviceName"(): StringJS
get "currentDeviceName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Library$$Type = ($Library);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Library$$Original = $Library;}
