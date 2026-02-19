declare module "com.mojang.blaze3d.font.SheetGlyphInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SheetGlyphInfo$$Interface {
get "left"(): float
get "right"(): float
get "bottom"(): float
get "pixelHeight"(): integer
get "oversample"(): float
get "bearingLeft"(): float
get "bearingTop"(): float
get "pixelWidth"(): integer
get "top"(): float
get "colored"(): boolean
}

export class $SheetGlyphInfo implements $SheetGlyphInfo$$Interface {
 "upload"(arg0: integer, arg1: integer): void
 "getLeft"(): float
 "getRight"(): float
 "getBottom"(): float
 "getPixelHeight"(): integer
 "getOversample"(): float
 "getBearingLeft"(): float
 "getBearingTop"(): float
 "getPixelWidth"(): integer
 "getTop"(): float
 "isColored"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SheetGlyphInfo$$Type = ($SheetGlyphInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SheetGlyphInfo$$Original = $SheetGlyphInfo;}
declare module "com.mojang.blaze3d.font.GlyphProvider$Conditional" {
import {$FontOption$Filter, $FontOption$Filter$$Type} from "net.minecraft.client.gui.font.FontOption$Filter"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GlyphProvider, $GlyphProvider$$Type} from "com.mojang.blaze3d.font.GlyphProvider"
import {$Record} from "java.lang.Record"

export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable$$Interface {
constructor(arg0: $GlyphProvider$$Type, arg1: $FontOption$Filter$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filter"(): $FontOption$Filter
public "provider"(): $GlyphProvider
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphProvider$Conditional$$Type = ({"filter"?: $FontOption$Filter$$Type, "provider"?: $GlyphProvider$$Type}) | ([filter?: $FontOption$Filter$$Type, provider?: $GlyphProvider$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphProvider$Conditional$$Original = $GlyphProvider$Conditional;}
declare module "com.mojang.blaze3d.font.GlyphInfo" {
import {$SheetGlyphInfo$$Type} from "com.mojang.blaze3d.font.SheetGlyphInfo"
import {$BakedGlyph, $BakedGlyph$$Type} from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import {$Function$$Type} from "java.util.function.Function"

export interface $GlyphInfo$$Interface {
get "boldOffset"(): float
get "shadowOffset"(): float
get "advance"(): float
}

export class $GlyphInfo implements $GlyphInfo$$Interface {
 "bake"(arg0: $Function$$Type<($SheetGlyphInfo), ($BakedGlyph$$Type)>): $BakedGlyph
 "getBoldOffset"(): float
 "getShadowOffset"(): float
 "getAdvance"(arg0: boolean): float
 "getAdvance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphInfo$$Type = ($GlyphInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphInfo$$Original = $GlyphInfo;}
declare module "com.mojang.blaze3d.font.GlyphProvider" {
import {$IntSet, $IntSet$$Type} from "it.unimi.dsi.fastutil.ints.IntSet"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GlyphInfo} from "com.mojang.blaze3d.font.GlyphInfo"

export interface $GlyphProvider$$Interface extends $AutoCloseable$$Interface {

(): $IntSet$$Type
get "supportedGlyphs"(): $IntSet
}

export class $GlyphProvider implements $GlyphProvider$$Interface {
static readonly "BASELINE": float

 "close"(): void
 "getSupportedGlyphs"(): $IntSet
 "getGlyph"(arg0: integer): $GlyphInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphProvider$$Type = (() => $IntSet$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphProvider$$Original = $GlyphProvider;}
