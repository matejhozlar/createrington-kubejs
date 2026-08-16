import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SortedMap } from "@package/java/util";

declare module "@package/com/leobeliik/extremesoundmuffler/utils" {
    export class $Anchor {
        getName(): string;
        getDimension(): $ResourceLocation;
        static getAnchor(arg0: $SoundInstance): $Anchor;
        getAnchorId(): number;
        getY(): string;
        addSound(arg0: $ResourceLocation_, arg1: number): void;
        editAnchor(arg0: string, arg1: number): void;
        getX(): string;
        getZ(): string;
        getMuffledSounds(): $SortedMap<$ResourceLocation, number>;
        setAnchor(arg0: number): void;
        getRadius(): number;
        setRadius(arg0: number): void;
        removeSound(arg0: $ResourceLocation_): void;
        deleteAnchor(): void;
        getAnchorPos(): $BlockPos;
        setMuffledSounds(arg0: $SortedMap<$ResourceLocation_, number>): void;
        replaceSound(arg0: $ResourceLocation_, arg1: number): void;
        constructor(arg0: number, arg1: string);
        constructor(arg0: number, arg1: string, arg2: $BlockPos_, arg3: $ResourceLocation_, arg4: number, arg5: $SortedMap<string, number>);
        get name(): string;
        get dimension(): $ResourceLocation;
        get anchorId(): number;
        get y(): string;
        get x(): string;
        get z(): string;
        get anchorPos(): $BlockPos;
    }
}
