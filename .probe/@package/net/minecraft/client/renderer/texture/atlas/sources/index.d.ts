import { $IntUnaryOperator, $Supplier_, $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $SpriteSource$SpriteSupplier, $SpriteResourceLoader, $SpriteSource$Output, $SpriteSourceType, $SpriteResourceLoader_, $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $ResourceLocationPattern } from "@package/net/minecraft/util";
import { $SpriteSourceListMixin$PalettedPermutationsAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/client";

declare module "@package/net/minecraft/client/renderer/texture/atlas/sources" {
    export class $SingleFile implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SingleFile>;
        constructor(resourceId: $ResourceLocation_, spriteId: ($ResourceLocation_) | undefined);
    }
    export class $PalettedPermutations implements $SpriteSource, $SpriteSourceListMixin$PalettedPermutationsAccessor {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        getTextures(): $List<any>;
        static loadPaletteEntryFromImage(resourceMananger: $ResourceManager, palette: $ResourceLocation_): number[];
        static createPaletteMapping(arg0: number[], arg1: number[]): $IntUnaryOperator;
        setTextures(arg0: $List_<any>): void;
        setPermutations(arg0: $Map_<any, any>): void;
        getPaletteKey(): $ResourceLocation;
        getPermutations(): $Map<any, any>;
        static CODEC: $MapCodec<$PalettedPermutations>;
        static LOGGER: $Logger;
        constructor(textures: $List_<$ResourceLocation_>, paletteKey: $ResourceLocation_, permutations: $Map_<string, $ResourceLocation_>);
        get paletteKey(): $ResourceLocation;
    }
    export class $LazyLoadedImage {
        get(): $NativeImage;
        release(): void;
        constructor(id: $ResourceLocation_, resource: $Resource, referenceCount: number);
    }
    export class $Unstitcher$RegionInstance implements $SpriteSource$SpriteSupplier {
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        discard(): void;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(image: $LazyLoadedImage, region: $Unstitcher$Region_, xDivisor: number, arg3: number);
    }
    export class $Unstitcher implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$Unstitcher>;
        static LOGGER: $Logger;
        constructor(resource: $ResourceLocation_, regions: $List_<$Unstitcher$Region_>, xDivisor: number, arg3: number);
    }
    export class $DirectoryLister implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$DirectoryLister>;
        constructor(sourcePath: string, idPrefix: string);
    }
    export class $SourceFilter implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SourceFilter>;
        constructor(filter: $ResourceLocationPattern);
    }
    export class $PalettedPermutations$PalettedSpriteSupplier extends $Record implements $SpriteSource$SpriteSupplier {
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        palette(): $Supplier<$IntUnaryOperator>;
        discard(): void;
        permutationLocation(): $ResourceLocation;
        baseImage(): $LazyLoadedImage;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(arg0: $LazyLoadedImage, arg1: $Supplier_<$IntUnaryOperator>, arg2: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PalettedPermutations$PalettedSpriteSupplier}.
     */
    export type $PalettedPermutations$PalettedSpriteSupplier_ = { permutationLocation?: $ResourceLocation_, palette?: $Supplier_<$IntUnaryOperator>, baseImage?: $LazyLoadedImage,  } | [permutationLocation?: $ResourceLocation_, palette?: $Supplier_<$IntUnaryOperator>, baseImage?: $LazyLoadedImage, ];
    export class $Unstitcher$Region extends $Record {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        sprite(): $ResourceLocation;
        static CODEC: $Codec<$Unstitcher$Region>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Unstitcher$Region}.
     */
    export type $Unstitcher$Region_ = { sprite?: $ResourceLocation_, height?: number, x?: number, y?: number, width?: number,  } | [sprite?: $ResourceLocation_, height?: number, x?: number, y?: number, width?: number, ];
}
