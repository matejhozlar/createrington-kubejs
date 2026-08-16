import { $SoundSource } from "@package/net/minecraft/sounds";
import { $WeighedSoundEvents, $AudioStream, $SoundBufferLibrary, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundInstance$Attenuation, $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sound" {
    export class $SoundInstanceDelegated {
    }
    export interface $SoundInstanceDelegated {
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        getDelegate(): $MovingSoundInstanceDelegate;
    }
    export class $MovingSoundInstanceDelegate implements $SoundInstance, $TickableSoundInstance {
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        isRelative(): boolean;
        unload(arg0: $Channel): void;
        tick(): void;
        getSource(): $SoundSource;
        getPitch(): number;
        getVolume(): number;
        getSound(): $Sound;
        getDelay(): number;
        getY(): number;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        isStopped(): boolean;
        canPlaySound(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        canStartSilent(): boolean;
        getX(): number;
        getZ(): number;
        tickWithChannel(arg0: $Channel): void;
        isLooping(): boolean;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get pitch(): number;
        get volume(): number;
        get sound(): $Sound;
        get delay(): number;
        get y(): number;
        get stopped(): boolean;
        get attenuation(): $SoundInstance$Attenuation;
        get x(): number;
        get z(): number;
        get looping(): boolean;
    }
}
