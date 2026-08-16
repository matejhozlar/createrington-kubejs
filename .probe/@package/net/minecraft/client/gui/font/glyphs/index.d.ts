import { $GlyphInfo, $SheetGlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $Function_ } from "@package/java/util/function";
import { $ReverseRenderableBakedGlyph } from "@package/com/kipti/bnb/mixin_accessor";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $Enum } from "@package/java/lang";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $BakedGlyphAccessor } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        a: number;
        r: number;
        b: number;
        depth: number;
        y0: number;
        g: number;
        x0: number;
        y1: number;
        x1: number;
        constructor(x0: number, y0: number, x1: number, y1: number, depth: number, r: number, g: number, b: number, a: number);
    }
    export class $BakedGlyph implements $ReverseRenderableBakedGlyph, $BakedGlyphAccessor {
        renderType(displayMode: $Font$DisplayMode_): $RenderType;
        render(italic: boolean, x: number, y: number, matrix: $Matrix4f, buffer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, packedLight: number): void;
        renderEffect(effect: $BakedGlyph$Effect, matrix: $Matrix4f, buffer: $VertexConsumer, packedLight: number): void;
        bits_n_bobs$renderReverse(italic: boolean, x: number, y: number, matrix: $Matrix4f, buffer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, packedLight: number): void;
        dragonlib$setU1(arg0: number): void;
        dragonlib$getV1(): number;
        dragonlib$setU0(arg0: number): void;
        dragonlib$getV0(): number;
        dragonlib$setV1(arg0: number): void;
        dragonlib$setV0(arg0: number): void;
        dragonlib$getU1(): number;
        dragonlib$getU0(): number;
        constructor(renderTypes: $GlyphRenderTypes_, u0: number, u1: number, v0: number, v1: number, left: number, right: number, up: number, down: number);
    }
    export class $SpecialGlyphs$PixelProvider {
    }
    export interface $SpecialGlyphs$PixelProvider {
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs$PixelProvider}.
     */
    export type $SpecialGlyphs$PixelProvider_ = (() => void);
    export class $EmptyGlyph extends $BakedGlyph {
        static INSTANCE: $EmptyGlyph;
        constructor();
    }
    export class $SpecialGlyphs extends $Enum<$SpecialGlyphs> implements $GlyphInfo {
        static values(): $SpecialGlyphs[];
        static valueOf(arg0: string): $SpecialGlyphs;
        getAdvance(): number;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getAdvance(bold: boolean): number;
        getBoldOffset(): number;
        getShadowOffset(): number;
        image: $NativeImage;
        static WHITE: $SpecialGlyphs;
        static MISSING: $SpecialGlyphs;
        get boldOffset(): number;
        get shadowOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs}.
     */
    export type $SpecialGlyphs_ = "white" | "missing";
}
