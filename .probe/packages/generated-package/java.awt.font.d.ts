declare module "java.awt.font.GlyphMetrics" {
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"

export class $GlyphMetrics {
static readonly "COMBINING": byte
static readonly "WHITESPACE": byte
static readonly "LIGATURE": byte
static readonly "COMPONENT": byte
static readonly "STANDARD": byte

constructor(arg0: float, arg1: $Rectangle2D$$Type, arg2: byte)
constructor(arg0: boolean, arg1: float, arg2: float, arg3: $Rectangle2D$$Type, arg4: byte)

public "isWhitespace"(): boolean
public "getType"(): integer
public "isStandard"(): boolean
public "getBounds2D"(): $Rectangle2D
public "getAdvance"(): float
public "getAdvanceX"(): float
public "getAdvanceY"(): float
public "getLSB"(): float
public "getRSB"(): float
public "isLigature"(): boolean
public "isCombining"(): boolean
public "isComponent"(): boolean
get "whitespace"(): boolean
get "type"(): integer
get "standard"(): boolean
get "bounds2D"(): $Rectangle2D
get "advance"(): float
get "advanceX"(): float
get "advanceY"(): float
get "LSB"(): float
get "RSB"(): float
get "ligature"(): boolean
get "combining"(): boolean
get "component"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphMetrics$$Type = ($GlyphMetrics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphMetrics$$Original = $GlyphMetrics;}
declare module "java.awt.font.GlyphJustificationInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GlyphJustificationInfo {
readonly "growRightLimit": float
static readonly "PRIORITY_WHITESPACE": integer
readonly "shrinkLeftLimit": float
readonly "weight": float
readonly "shrinkRightLimit": float
readonly "shrinkAbsorb": boolean
readonly "growPriority": integer
static readonly "PRIORITY_KASHIDA": integer
readonly "growAbsorb": boolean
static readonly "PRIORITY_NONE": integer
readonly "growLeftLimit": float
static readonly "PRIORITY_INTERCHAR": integer
readonly "shrinkPriority": integer

constructor(arg0: float, arg1: boolean, arg2: integer, arg3: float, arg4: float, arg5: boolean, arg6: integer, arg7: float, arg8: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphJustificationInfo$$Type = ($GlyphJustificationInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphJustificationInfo$$Original = $GlyphJustificationInfo;}
declare module "java.awt.font.FontRenderContext" {
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $FontRenderContext {
constructor(arg0: $AffineTransform$$Type, arg1: any, arg2: any)
constructor(arg0: $AffineTransform$$Type, arg1: boolean, arg2: boolean)

public "equals"(arg0: any): boolean
public "equals"(arg0: $FontRenderContext$$Type): boolean
public "hashCode"(): integer
public "getTransform"(): $AffineTransform
public "isTransformed"(): boolean
public "isAntiAliased"(): boolean
public "usesFractionalMetrics"(): boolean
public "getAntiAliasingHint"(): any
public "getFractionalMetricsHint"(): any
public "getTransformType"(): integer
get "transform"(): $AffineTransform
get "transformed"(): boolean
get "antiAliased"(): boolean
get "antiAliasingHint"(): any
get "fractionalMetricsHint"(): any
get "transformType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontRenderContext$$Type = ($FontRenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontRenderContext$$Original = $FontRenderContext;}
declare module "java.awt.font.GlyphVector" {
import {$GlyphMetrics} from "java.awt.font.GlyphMetrics"
import {$Shape} from "java.awt.Shape"
import {$Rectangle2D} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Rectangle} from "java.awt.Rectangle"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$FontRenderContext, $FontRenderContext$$Type} from "java.awt.font.FontRenderContext"
import {$Font} from "java.awt.Font"
import {$GlyphJustificationInfo} from "java.awt.font.GlyphJustificationInfo"

export class $GlyphVector implements $Cloneable$$Interface {
static readonly "FLAG_HAS_TRANSFORMS": integer
static readonly "FLAG_HAS_POSITION_ADJUSTMENTS": integer
static readonly "FLAG_MASK": integer
static readonly "FLAG_COMPLEX_GLYPHS": integer
static readonly "FLAG_RUN_RTL": integer

public "getFont"(): $Font
public "equals"(arg0: $GlyphVector$$Type): boolean
public "getOutline"(): $Shape
public "getOutline"(arg0: float, arg1: float): $Shape
public "getGlyphCharIndex"(arg0: integer): integer
public "getVisualBounds"(): $Rectangle2D
public "getGlyphOutline"(arg0: integer): $Shape
public "getGlyphOutline"(arg0: integer, arg1: float, arg2: float): $Shape
public "getGlyphVisualBounds"(arg0: integer): $Shape
public "performDefaultLayout"(): void
public "getNumGlyphs"(): integer
public "getGlyphCode"(arg0: integer): integer
public "getGlyphCodes"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getGlyphCharIndices"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getLogicalBounds"(): $Rectangle2D
public "getPixelBounds"(arg0: $FontRenderContext$$Type, arg1: float, arg2: float): $Rectangle
public "getGlyphPosition"(arg0: integer): $Point2D
public "setGlyphPosition"(arg0: integer, arg1: $Point2D$$Type): void
public "getGlyphTransform"(arg0: integer): $AffineTransform
public "setGlyphTransform"(arg0: integer, arg1: $AffineTransform$$Type): void
public "getLayoutFlags"(): integer
public "getGlyphPositions"(arg0: integer, arg1: integer, arg2: (float)[]): (float)[]
public "getGlyphLogicalBounds"(arg0: integer): $Shape
public "getGlyphPixelBounds"(arg0: integer, arg1: $FontRenderContext$$Type, arg2: float, arg3: float): $Rectangle
public "getGlyphMetrics"(arg0: integer): $GlyphMetrics
public "getGlyphJustificationInfo"(arg0: integer): $GlyphJustificationInfo
public "getFontRenderContext"(): $FontRenderContext
get "font"(): $Font
get "outline"(): $Shape
get "visualBounds"(): $Rectangle2D
get "numGlyphs"(): integer
get "logicalBounds"(): $Rectangle2D
get "layoutFlags"(): integer
get "fontRenderContext"(): $FontRenderContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphVector$$Type = ($GlyphVector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphVector$$Original = $GlyphVector;}
declare module "java.awt.font.TextAttribute" {
import {$AttributedCharacterIterator$Attribute} from "java.text.AttributedCharacterIterator$Attribute"

export class $TextAttribute extends $AttributedCharacterIterator$Attribute {
static readonly "WEIGHT_BOLD": float
static readonly "UNDERLINE_LOW_GRAY": integer
static readonly "NUMERIC_SHAPING": $TextAttribute
static readonly "WIDTH_SEMI_CONDENSED": float
static readonly "WIDTH_REGULAR": float
static readonly "SWAP_COLORS": $TextAttribute
static readonly "WIDTH_SEMI_EXTENDED": float
static readonly "RUN_DIRECTION": $TextAttribute
static readonly "WIDTH_EXTENDED": float
static readonly "CHAR_REPLACEMENT": $TextAttribute
static readonly "BIDI_EMBEDDING": $TextAttribute
static readonly "UNDERLINE_LOW_DASHED": integer
static readonly "INPUT_METHOD_HIGHLIGHT": $TextAttribute
static readonly "STRIKETHROUGH_ON": boolean
static readonly "TRANSFORM": $TextAttribute
static readonly "WEIGHT": $TextAttribute
static readonly "SWAP_COLORS_ON": boolean
static readonly "JUSTIFICATION_FULL": float
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "WEIGHT_HEAVY": float
static readonly "SIZE": $TextAttribute
static readonly "POSTURE_REGULAR": float
static readonly "KERNING_ON": integer
static readonly "BACKGROUND": $TextAttribute
static readonly "RUN_DIRECTION_LTR": boolean
static readonly "RUN_DIRECTION_RTL": boolean
static readonly "WIDTH_CONDENSED": float
static readonly "LIGATURES_ON": integer
static readonly "SUPERSCRIPT": $TextAttribute
static readonly "JUSTIFICATION": $TextAttribute
static readonly "KERNING": $TextAttribute
static readonly "WEIGHT_SEMIBOLD": float
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "LIGATURES": $TextAttribute
static readonly "WEIGHT_DEMILIGHT": float
static readonly "WEIGHT_ULTRABOLD": float
static readonly "JUSTIFICATION_NONE": float
static readonly "UNDERLINE_LOW_ONE_PIXEL": integer
static readonly "UNDERLINE_ON": integer
static readonly "POSTURE_OBLIQUE": float
static readonly "WEIGHT_REGULAR": float
static readonly "WIDTH": $TextAttribute
static readonly "SUPERSCRIPT_SUPER": integer
static readonly "UNDERLINE": $TextAttribute
static readonly "FAMILY": $TextAttribute
static readonly "WEIGHT_LIGHT": float
static readonly "POSTURE": $TextAttribute
static readonly "TRACKING_LOOSE": float
static readonly "WEIGHT_EXTRA_LIGHT": float
static readonly "TRACKING": $TextAttribute
static readonly "READING": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_UNDERLINE": $TextAttribute
static readonly "TRACKING_TIGHT": float
static readonly "UNDERLINE_LOW_DOTTED": integer
static readonly "SUPERSCRIPT_SUB": integer
static readonly "FONT": $TextAttribute
static readonly "FOREGROUND": $TextAttribute
static readonly "STRIKETHROUGH": $TextAttribute
static readonly "WEIGHT_DEMIBOLD": float
static readonly "WEIGHT_EXTRABOLD": float
static readonly "WEIGHT_MEDIUM": float
static readonly "UNDERLINE_LOW_TWO_PIXEL": integer

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextAttribute$$Type = ($TextAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextAttribute$$Original = $TextAttribute;}
declare module "java.awt.font.LineMetrics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LineMetrics {
public "getHeight"(): float
public "getNumChars"(): integer
public "getBaselineIndex"(): integer
public "getBaselineOffsets"(): (float)[]
public "getStrikethroughOffset"(): float
public "getStrikethroughThickness"(): float
public "getUnderlineOffset"(): float
public "getUnderlineThickness"(): float
public "getAscent"(): float
public "getDescent"(): float
public "getLeading"(): float
get "height"(): float
get "numChars"(): integer
get "baselineIndex"(): integer
get "baselineOffsets"(): (float)[]
get "strikethroughOffset"(): float
get "strikethroughThickness"(): float
get "underlineOffset"(): float
get "underlineThickness"(): float
get "ascent"(): float
get "descent"(): float
get "leading"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LineMetrics$$Type = ($LineMetrics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LineMetrics$$Original = $LineMetrics;}
