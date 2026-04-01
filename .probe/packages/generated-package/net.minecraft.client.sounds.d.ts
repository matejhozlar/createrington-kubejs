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
declare module "net.minecraft.client.sounds.SoundManager" {
import {$Sound, $Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$TickableSoundInstance$$Type} from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import {$IMixinSoundManager$$Interface} from "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundManager"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Logger} from "org.slf4j.Logger"
import {$SoundManager$Preparations, $SoundManager$Preparations$$Type} from "net.minecraft.client.sounds.SoundManager$Preparations"
import {$Collection} from "java.util.Collection"
import {$ListenerTransform} from "com.mojang.blaze3d.audio.ListenerTransform"
import {$SoundEngine} from "net.minecraft.client.sounds.SoundEngine"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$ISoundManagerDuck$$Interface} from "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.ISoundManagerDuck"
import {$SoundManagerAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.SoundManagerAccessor"
import {$WeighedSoundEvents} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundEventListener$$Type} from "net.minecraft.client.sounds.SoundEventListener"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $SoundManager extends $SimplePreparableReloadListener<($SoundManager$Preparations)> implements $SoundManagerAccessor$$Interface, $IMixinSoundManager$$Interface, $IdentifiableResourceReloadListener$$Interface, $ISoundManagerDuck$$Interface {
static readonly "EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND_EVENT": $WeighedSoundEvents
static readonly "EMPTY_SOUND_LOCATION": $ResourceLocation
static readonly "LOGGER": $Logger
static readonly "INTENTIONALLY_EMPTY_SOUND_LOCATION": $ResourceLocation
static readonly "INTENTIONALLY_EMPTY_SOUND": $Sound

constructor(arg0: $Options$$Type)

public "apply"(arg0: any, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "apply"(arg0: $SoundManager$Preparations$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "stop"(): void
public "stop"(arg0: $SoundInstance$$Type): void
public "stop"(arg0: $ResourceLocation$$Type, arg1: $SoundSource$$Type): void
public "resume"(): void
public "destroy"(): void
public "prepare"(arg0: $ResourceManager$$Type, arg1: $ProfilerFiller$$Type): $SoundManager$Preparations
public "isActive"(arg0: $SoundInstance$$Type): boolean
public "tick"(arg0: boolean): void
public "reload"(): void
public "getSoundEvent"(arg0: $ResourceLocation$$Type): $WeighedSoundEvents
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "removeListener"(arg0: $SoundEventListener$$Type): void
public "addListener"(arg0: $SoundEventListener$$Type): void
public "getFabricId"(): $ResourceLocation
public "pause"(): void
public "playDelayed"(arg0: $SoundInstance$$Type, arg1: integer): void
public "queueTickingSound"(arg0: $TickableSoundInstance$$Type): void
public "updateSourceVolume"(arg0: $SoundSource$$Type, arg1: float): void
public "getAvailableSounds"(): $Collection<($ResourceLocation)>
public "emergencyShutdown"(): void
public "getFabricDependencies"(): $Collection
public "play"(arg0: $SoundInstance$$Type): void
public "updateSource"(arg0: $Camera$$Type): void
public "ribbits$stopMaraca"(arg0: $UUID$$Type): void
public "getSoundEngine"(): $SoundEngine
public "getDebugString"(): StringJS
public static "validateSoundResource"(arg0: $Sound$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceProvider$$Type): boolean
public "getListenerTransform"(): $ListenerTransform
public "getSoundEngineMelody"(): $SoundEngine
public "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
get "availableSoundDevices"(): $List<(StringJS)>
get "fabricId"(): $ResourceLocation
get "availableSounds"(): $Collection<($ResourceLocation)>
get "fabricDependencies"(): $Collection
get "soundEngine"(): $SoundEngine
get "debugString"(): StringJS
get "listenerTransform"(): $ListenerTransform
get "soundEngineMelody"(): $SoundEngine
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
declare module "net.minecraft.client.sounds.SoundEngine" {
import {$SoundEngineAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.SoundEngineAccessor"
import {$Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$Map} from "java.util.Map"
import {$ListenerTransform} from "com.mojang.blaze3d.audio.ListenerTransform"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$TickableSoundInstance$$Type} from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import {$ISoundLists$$Interface} from "com.leobeliik.extremesoundmuffler.interfaces.ISoundLists"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$SoundManager, $SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$ISoundEngineDuck$$Interface} from "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.ISoundEngineDuck"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundEventListener$$Type} from "net.minecraft.client.sounds.SoundEventListener"
import {$IMixinSoundEngine$$Interface} from "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundEngine"

export class $SoundEngine implements $SoundEngineAccessor$$Interface, $ISoundLists$$Interface, $IMixinSoundEngine$$Interface, $ISoundEngineDuck$$Interface {
static readonly "MISSING_SOUND": StringJS
readonly "soundManager": $SoundManager
static readonly "OPEN_AL_SOFT_PREFIX": StringJS
static readonly "OPEN_AL_SOFT_PREFIX_LENGTH": integer

constructor(arg0: $SoundManager$$Type, arg1: $Options$$Type, arg2: $ResourceProvider$$Type)

public "stop"(arg0: $SoundInstance$$Type): void
public "stop"(arg0: $ResourceLocation$$Type, arg1: $SoundSource$$Type): void
public "resume"(): void
public "destroy"(): void
public "isActive"(arg0: $SoundInstance$$Type): boolean
public "isLoaded"(): boolean
public "tick"(arg0: boolean): void
public "reload"(): void
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "stopAll"(): void
public "removeEventListener"(arg0: $SoundEventListener$$Type): void
public "addEventListener"(arg0: $SoundEventListener$$Type): void
public "pause"(): void
public "playDelayed"(arg0: $SoundInstance$$Type, arg1: integer): void
public "queueTickingSound"(arg0: $TickableSoundInstance$$Type): void
public "emergencyShutdown"(): void
public "play"(arg0: $SoundInstance$$Type): void
public "updateSource"(arg0: $Camera$$Type): void
public "ribbits$stopMaraca"(arg0: $UUID$$Type): void
public "getDebugString"(): StringJS
public "requestPreload"(arg0: $Sound$$Type): void
public "getLoadedMelody"(): boolean
public "getListenerTransform"(): $ListenerTransform
public "updateCategoryVolume"(arg0: $SoundSource$$Type, arg1: float): void
public "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
public "getInstanceToChannel"(): $Map
public "callCalculateVolume"(arg0: $SoundInstance$$Type): float
get "loaded"(): boolean
get "availableSoundDevices"(): $List<(StringJS)>
get "debugString"(): StringJS
get "loadedMelody"(): boolean
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

public "getWeight"(): integer
public "getSubtitle"(): $Component
public "getSound"(arg0: $RandomSource$$Type): any
public "preloadIfRequired"(arg0: $SoundEngine$$Type): void
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
declare module "net.minecraft.client.sounds.ChannelAccess$ChannelHandle" {
import {$ChannelAccess, $ChannelAccess$$Type} from "net.minecraft.client.sounds.ChannelAccess"
import {$Channel, $Channel$$Type} from "com.mojang.blaze3d.audio.Channel"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ChannelAccess$ChannelHandle {
readonly "this$0": $ChannelAccess
 "channel": $Channel

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
 "getWeight"(): integer
 "getSound"(arg0: $RandomSource$$Type): T
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
import {$IMixinMusicManager$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMusicManager"
import {$Music$$Type} from "net.minecraft.sounds.Music"

export class $MusicManager implements $MusicTrackerAccessor$$Interface, $IMixinMusicManager$$Interface {
constructor(arg0: $Minecraft$$Type)

public "tick"(): void
public "isPlayingMusic"(arg0: $Music$$Type): boolean
public "stopPlaying"(): void
public "stopPlaying"(arg0: $Music$$Type): void
public "startPlaying"(arg0: $Music$$Type): void
public "getCurrentMusic"(): $SoundInstance
public "getCurrentMusic_FancyMenu"(): $SoundInstance
get "currentMusic"(): $SoundInstance
get "currentMusic_FancyMenu"(): $SoundInstance
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
import {$Library, $Library$$Type} from "com.mojang.blaze3d.audio.Library"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$ChannelAccess$ChannelHandle} from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"
import {$Channel$$Type} from "com.mojang.blaze3d.audio.Channel"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ChannelAccess {
readonly "library": $Library
readonly "executor": $Executor

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
declare module "net.minecraft.client.sounds.SoundBufferLibrary" {
import {$SoundBufferLibraryAccessor$$Interface} from "team.creative.ambientsounds.mixin.SoundBufferLibraryAccessor"
import {$ResourceProvider, $ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBuffer} from "com.mojang.blaze3d.audio.SoundBuffer"

export class $SoundBufferLibrary implements $SoundBufferLibraryAccessor$$Interface {
constructor(arg0: $ResourceProvider$$Type)

public "clear"(): void
public "getStream"(arg0: $ResourceLocation$$Type, arg1: boolean): $CompletableFuture<($AudioStream)>
public "preload"(arg0: $Collection$$Type<($Sound$$Type)>): $CompletableFuture<(never)>
public "getResourceManager"(): $ResourceProvider
public "getCompleteBuffer"(arg0: $ResourceLocation$$Type): $CompletableFuture<($SoundBuffer)>
get "resourceManager"(): $ResourceProvider
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
