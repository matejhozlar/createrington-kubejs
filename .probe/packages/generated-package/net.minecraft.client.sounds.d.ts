declare module "net.minecraft.client.sounds.AudioStream" {
import {$AudioFormat} from "javax.sound.sampled.AudioFormat"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export interface $AudioStream$$Interface extends $Closeable$$Interface {
get "format"(): $AudioFormat
}

export class $AudioStream implements $AudioStream$$Interface {
 "read"(arg0: integer): $ByteBuffer
 "getFormat"(): $AudioFormat
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioStream$$Type = ($AudioStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AudioStream$$Original = $AudioStream;}
declare module "net.minecraft.client.sounds.WeighedSoundEvents" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Sound, $Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$Weighted$$Type, $Weighted$$Interface} from "net.minecraft.client.sounds.Weighted"
import {$Component} from "net.minecraft.network.chat.Component"

export class $WeighedSoundEvents implements $Weighted$$Interface<($Sound)> {
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS)

public "getSound"(arg0: $RandomSource$$Type): any
public "getWeight"(): integer
public "preloadIfRequired"(arg0: $SoundEngine$$Type): void
public "getSubtitle"(): $Component
public "addSound"(arg0: $Weighted$$Type<($Sound$$Type)>): void
get "weight"(): integer
get "subtitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeighedSoundEvents$$Type = ($WeighedSoundEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeighedSoundEvents$$Original = $WeighedSoundEvents;}
declare module "net.minecraft.client.sounds.SoundManager$Preparations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundManager$Preparations {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManager$Preparations$$Type = ($SoundManager$Preparations);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundManager$Preparations$$Original = $SoundManager$Preparations;}
declare module "net.minecraft.client.sounds.ChannelAccess$ChannelHandle" {
import {$ChannelAccess$$Type} from "net.minecraft.client.sounds.ChannelAccess"
import {$Channel$$Type} from "com.mojang.blaze3d.audio.Channel"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ChannelAccess$ChannelHandle {
constructor(arg0: $ChannelAccess$$Type, arg1: $Channel$$Type)

public "execute"(arg0: $Consumer$$Type<($Channel)>): void
public "release"(): void
public "isStopped"(): boolean
get "stopped"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelAccess$ChannelHandle$$Type = ($ChannelAccess$ChannelHandle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelAccess$ChannelHandle$$Original = $ChannelAccess$ChannelHandle;}
declare module "net.minecraft.client.sounds.Weighted" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"

export interface $Weighted$$Interface<T> {
get "weight"(): integer
}

export class $Weighted<T> implements $Weighted$$Interface {
 "getSound"(arg0: $RandomSource$$Type): T
 "getWeight"(): integer
 "preloadIfRequired"(arg0: $SoundEngine$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Weighted$$Type<T> = ($Weighted<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Weighted$$Original<T> = $Weighted<(T)>;}
declare module "net.minecraft.client.sounds.MusicManager" {
import {$SoundInstance} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$MusicTrackerAccessor$$Interface} from "immersive_melodies.mixin.MusicTrackerAccessor"
import {$Music$$Type} from "net.minecraft.sounds.Music"

export class $MusicManager implements $MusicTrackerAccessor$$Interface {
constructor(arg0: $Minecraft$$Type)

public "tick"(): void
public "startPlaying"(arg0: $Music$$Type): void
public "getCurrentMusic"(): $SoundInstance
public "stopPlaying"(): void
public "stopPlaying"(arg0: $Music$$Type): void
public "isPlayingMusic"(arg0: $Music$$Type): boolean
get "currentMusic"(): $SoundInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MusicManager$$Type = ($MusicManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MusicManager$$Original = $MusicManager;}
declare module "net.minecraft.client.sounds.SoundEventListener" {
import {$WeighedSoundEvents, $WeighedSoundEvents$$Type} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $SoundEventListener$$Interface {

(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: float): void
}

export class $SoundEventListener implements $SoundEventListener$$Interface {
 "onPlaySound"(arg0: $SoundInstance$$Type, arg1: $WeighedSoundEvents$$Type, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventListener$$Type = ((arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEventListener$$Original = $SoundEventListener;}
declare module "net.minecraft.client.sounds.ChannelAccess" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Library$Pool$$Type} from "com.mojang.blaze3d.audio.Library$Pool"
import {$Library$$Type} from "com.mojang.blaze3d.audio.Library"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$Channel$$Type} from "com.mojang.blaze3d.audio.Channel"
import {$ChannelAccess$ChannelHandle} from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ChannelAccess {
constructor(arg0: $Library$$Type, arg1: $Executor$$Type)

public "clear"(): void
public "scheduleTick"(): void
public "createHandle"(arg0: $Library$Pool$$Type): $CompletableFuture<($ChannelAccess$ChannelHandle)>
public "executeOnChannels"(arg0: $Consumer$$Type<($Stream<($Channel)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelAccess$$Type = ($ChannelAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelAccess$$Original = $ChannelAccess;}
declare module "net.minecraft.client.sounds.SoundManager" {
import {$SoundManager$Preparations} from "net.minecraft.client.sounds.SoundManager$Preparations"
import {$Sound} from "net.minecraft.client.resources.sounds.Sound"
import {$Collection} from "java.util.Collection"
import {$ListenerTransform} from "com.mojang.blaze3d.audio.ListenerTransform"
import {$SoundEngine} from "net.minecraft.client.sounds.SoundEngine"
import {$List} from "java.util.List"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$SoundManagerAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.SoundManagerAccessor"
import {$TickableSoundInstance$$Type} from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$WeighedSoundEvents} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundEventListener$$Type} from "net.minecraft.client.sounds.SoundEventListener"

export class $SoundManager extends $SimplePreparableReloadListener<($SoundManager$Preparations)> implements $SoundManagerAccessor$$Interface, $IdentifiableResourceReloadListener$$Interface {
static readonly "EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND_EVENT": $WeighedSoundEvents
static readonly "EMPTY_SOUND_LOCATION": $ResourceLocation
static readonly "INTENTIONALLY_EMPTY_SOUND_LOCATION": $ResourceLocation
static readonly "INTENTIONALLY_EMPTY_SOUND": $Sound

constructor(arg0: $Options$$Type)

public "pause"(): void
public "stop"(arg0: $SoundInstance$$Type): void
public "stop"(): void
public "stop"(arg0: $ResourceLocation$$Type, arg1: $SoundSource$$Type): void
public "resume"(): void
public "destroy"(): void
public "isActive"(arg0: $SoundInstance$$Type): boolean
public "tick"(arg0: boolean): void
public "reload"(): void
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "getSoundEvent"(arg0: $ResourceLocation$$Type): $WeighedSoundEvents
public "updateSourceVolume"(arg0: $SoundSource$$Type, arg1: float): void
public "addListener"(arg0: $SoundEventListener$$Type): void
public "removeListener"(arg0: $SoundEventListener$$Type): void
public "getSoundEngine"(): $SoundEngine
public "getDebugString"(): StringJS
public "queueTickingSound"(arg0: $TickableSoundInstance$$Type): void
public "updateSource"(arg0: $Camera$$Type): void
public "emergencyShutdown"(): void
public "getAvailableSounds"(): $Collection<($ResourceLocation)>
public "play"(arg0: $SoundInstance$$Type): void
public "getFabricDependencies"(): $Collection
public "playDelayed"(arg0: $SoundInstance$$Type, arg1: integer): void
public "getFabricId"(): $ResourceLocation
public "getListenerTransform"(): $ListenerTransform
get "availableSoundDevices"(): $List<(StringJS)>
get "soundEngine"(): $SoundEngine
get "debugString"(): StringJS
get "availableSounds"(): $Collection<($ResourceLocation)>
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "listenerTransform"(): $ListenerTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManager$$Type = ($SoundManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundManager$$Original = $SoundManager;}
declare module "net.minecraft.client.sounds.SoundBufferLibrary" {
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBuffer} from "com.mojang.blaze3d.audio.SoundBuffer"

export class $SoundBufferLibrary {
constructor(arg0: $ResourceProvider$$Type)

public "clear"(): void
public "getStream"(arg0: $ResourceLocation$$Type, arg1: boolean): $CompletableFuture<($AudioStream)>
public "preload"(arg0: $Collection$$Type<($Sound$$Type)>): $CompletableFuture<(never)>
public "getCompleteBuffer"(arg0: $ResourceLocation$$Type): $CompletableFuture<($SoundBuffer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBufferLibrary$$Type = ($SoundBufferLibrary);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundBufferLibrary$$Original = $SoundBufferLibrary;}
declare module "net.minecraft.client.sounds.SoundEngine" {
import {$SoundEngineAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.SoundEngineAccessor"
import {$Map} from "java.util.Map"
import {$Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$ListenerTransform} from "com.mojang.blaze3d.audio.ListenerTransform"
import {$List} from "java.util.List"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$TickableSoundInstance$$Type} from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$SoundManager, $SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundEventListener$$Type} from "net.minecraft.client.sounds.SoundEventListener"

export class $SoundEngine implements $SoundEngineAccessor$$Interface {
static readonly "MISSING_SOUND": StringJS
readonly "soundManager": $SoundManager
static readonly "OPEN_AL_SOFT_PREFIX": StringJS
static readonly "OPEN_AL_SOFT_PREFIX_LENGTH": integer

constructor(arg0: $SoundManager$$Type, arg1: $Options$$Type, arg2: $ResourceProvider$$Type)

public "pause"(): void
public "stop"(arg0: $SoundInstance$$Type): void
public "stop"(arg0: $ResourceLocation$$Type, arg1: $SoundSource$$Type): void
public "resume"(): void
public "destroy"(): void
public "isActive"(arg0: $SoundInstance$$Type): boolean
public "isLoaded"(): boolean
public "tick"(arg0: boolean): void
public "reload"(): void
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "removeEventListener"(arg0: $SoundEventListener$$Type): void
public "addEventListener"(arg0: $SoundEventListener$$Type): void
public "getDebugString"(): StringJS
public "queueTickingSound"(arg0: $TickableSoundInstance$$Type): void
public "updateSource"(arg0: $Camera$$Type): void
public "emergencyShutdown"(): void
public "play"(arg0: $SoundInstance$$Type): void
public "requestPreload"(arg0: $Sound$$Type): void
public "stopAll"(): void
public "playDelayed"(arg0: $SoundInstance$$Type, arg1: integer): void
public "updateCategoryVolume"(arg0: $SoundSource$$Type, arg1: float): void
public "getListenerTransform"(): $ListenerTransform
public "getInstanceToChannel"(): $Map
public "callCalculateVolume"(arg0: $SoundInstance$$Type): float
get "loaded"(): boolean
get "availableSoundDevices"(): $List<(StringJS)>
get "debugString"(): StringJS
get "listenerTransform"(): $ListenerTransform
get "instanceToChannel"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngine$$Type = ($SoundEngine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEngine$$Original = $SoundEngine;}
