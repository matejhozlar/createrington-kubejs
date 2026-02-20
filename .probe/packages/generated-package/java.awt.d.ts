declare module "java.awt.PaintContext" {
import {$ColorModel} from "java.awt.image.ColorModel"
import {$Raster} from "java.awt.image.Raster"

export interface $PaintContext$$Interface {
get "colorModel"(): $ColorModel
}

export class $PaintContext implements $PaintContext$$Interface {
 "dispose"(): void
 "getColorModel"(): $ColorModel
 "getRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Raster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintContext$$Type = ($PaintContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintContext$$Original = $PaintContext;}
declare module "java.awt.Image" {
import {$ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$Graphics} from "java.awt.Graphics"
import {$ImageProducer} from "java.awt.image.ImageProducer"
import {$GraphicsConfiguration$$Type} from "java.awt.GraphicsConfiguration"
import {$ImageCapabilities} from "java.awt.ImageCapabilities"

export class $Image {
static readonly "SCALE_DEFAULT": integer
static readonly "UndefinedProperty": any
static readonly "SCALE_FAST": integer
static readonly "SCALE_AREA_AVERAGING": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer

public "getProperty"(arg0: StringJS, arg1: $ImageObserver$$Type): any
public "flush"(): void
public "getSource"(): $ImageProducer
public "getWidth"(arg0: $ImageObserver$$Type): integer
public "getCapabilities"(arg0: $GraphicsConfiguration$$Type): $ImageCapabilities
public "setAccelerationPriority"(arg0: float): void
public "getScaledInstance"(arg0: integer, arg1: integer, arg2: integer): $Image
public "getAccelerationPriority"(): float
public "getHeight"(arg0: $ImageObserver$$Type): integer
public "getGraphics"(): $Graphics
get "source"(): $ImageProducer
set "accelerationPriority"(value: float)
get "accelerationPriority"(): float
get "graphics"(): $Graphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Image$$Type = ($Image);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Image$$Original = $Image;}
declare module "java.awt.Composite" {
import {$CompositeContext, $CompositeContext$$Type} from "java.awt.CompositeContext"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export interface $Composite$$Interface {

(arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints): $CompositeContext$$Type
}

export class $Composite implements $Composite$$Interface {
 "createContext"(arg0: $ColorModel$$Type, arg1: $ColorModel$$Type, arg2: $RenderingHints$$Type): $CompositeContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Composite$$Type = ((arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints) => $CompositeContext$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Composite$$Original = $Composite;}
declare module "java.awt.FontMetrics" {
import {$Rectangle2D} from "java.awt.geom.Rectangle2D"
import {$LineMetrics} from "java.awt.font.LineMetrics"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Graphics$$Type} from "java.awt.Graphics"
import {$CharacterIterator$$Type} from "java.text.CharacterIterator"
import {$FontRenderContext} from "java.awt.font.FontRenderContext"
import {$Font} from "java.awt.Font"

export class $FontMetrics implements $Serializable$$Interface {
public "toString"(): StringJS
public "getFont"(): $Font
public "stringWidth"(arg0: StringJS): integer
public "getHeight"(): integer
public "charWidth"(arg0: character): integer
public "charWidth"(arg0: integer): integer
public "getDescent"(): integer
public "getLeading"(): integer
public "hasUniformLineMetrics"(): boolean
public "getLineMetrics"(arg0: StringJS, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(arg0: StringJS, arg1: $Graphics$$Type): $LineMetrics
public "getMaxCharBounds"(arg0: $Graphics$$Type): $Rectangle2D
public "getMaxDescent"(): integer
public "getWidths"(): (integer)[]
public "charsWidth"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "getMaxAscent"(): integer
/**
 * 
 * @deprecated
 */
public "getMaxDecent"(): integer
public "getMaxAdvance"(): integer
public "bytesWidth"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "getAscent"(): integer
public "getFontRenderContext"(): $FontRenderContext
public "getStringBounds"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(arg0: StringJS, arg1: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(arg0: StringJS, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $Rectangle2D
get "font"(): $Font
get "height"(): integer
get "descent"(): integer
get "leading"(): integer
get "maxDescent"(): integer
get "widths"(): (integer)[]
get "maxAscent"(): integer
get "maxDecent"(): integer
get "maxAdvance"(): integer
get "ascent"(): integer
get "fontRenderContext"(): $FontRenderContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontMetrics$$Type = ($FontMetrics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontMetrics$$Original = $FontMetrics;}
declare module "java.awt.Graphics" {
import {$AttributedCharacterIterator$$Type} from "java.text.AttributedCharacterIterator"
import {$ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$FontMetrics} from "java.awt.FontMetrics"
import {$Polygon$$Type} from "java.awt.Polygon"
import {$Image$$Type} from "java.awt.Image"
import {$Font, $Font$$Type} from "java.awt.Font"

export class $Graphics {
public "fillRoundRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
/**
 * 
 * @deprecated
 */
public "finalize"(): void
public "toString"(): StringJS
public "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Graphics
public "create"(): $Graphics
public "setColor"(arg0: $Color$$Type): void
public "dispose"(): void
public "getFont"(): $Font
public "drawString"(arg0: StringJS, arg1: integer, arg2: integer): void
public "drawString"(arg0: $AttributedCharacterIterator$$Type, arg1: integer, arg2: integer): void
public "drawRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getColor"(): $Color
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getClipBounds"(arg0: $Rectangle$$Type): $Rectangle
public "getClipBounds"(): $Rectangle
public "setClip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setClip"(arg0: $Shape$$Type): void
public "hitClip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "clipRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getClip"(): $Shape
public "drawLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setFont"(arg0: $Font$$Type): void
public "getFontMetrics"(arg0: $Font$$Type): $FontMetrics
public "getFontMetrics"(): $FontMetrics
public "translate"(arg0: integer, arg1: integer): void
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $Color$$Type, arg10: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Color$$Type, arg6: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: $Color$$Type, arg4: $ImageObserver$$Type): boolean
public "drawArc"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "clearRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "copyArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawPolygon"(arg0: $Polygon$$Type): void
public "drawPolygon"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "fillPolygon"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "fillPolygon"(arg0: $Polygon$$Type): void
public "setPaintMode"(): void
public "setXORMode"(arg0: $Color$$Type): void
public "drawRoundRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "draw3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "fill3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "drawOval"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "fillOval"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "fillArc"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawPolyline"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "drawChars"(arg0: (character)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawBytes"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
public "getClipRect"(): $Rectangle
set "color"(value: $Color$$Type)
get "font"(): $Font
get "color"(): $Color
get "clipBounds"(): $Rectangle
set "clip"(value: $Shape$$Type)
get "clip"(): $Shape
set "font"(value: $Font$$Type)
get "fontMetrics"(): $FontMetrics
get "paintMode"(): void
set "XORMode"(value: $Color$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graphics$$Type = ($Graphics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Graphics$$Original = $Graphics;}
declare module "java.awt.Point" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Point2D} from "java.awt.geom.Point2D"

export class $Point extends $Point2D implements $Serializable$$Interface {
 "x": integer
 "y": integer

constructor(arg0: integer, arg1: integer)
constructor(arg0: $Point$$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "getLocation"(): $Point
public "move"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $Point$$Type): void
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: integer, arg1: integer): void
public "getX"(): double
public "getY"(): double
public "translate"(arg0: integer, arg1: integer): void
get "location"(): $Point
set "location"(value: $Point$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point$$Type = ($Point);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Point$$Original = $Point;}
declare module "java.awt.RenderingHints$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderingHints$Key {
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isCompatibleValue"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$Key$$Type = ($RenderingHints$Key);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderingHints$Key$$Original = $RenderingHints$Key;}
declare module "java.awt.Shape" {
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D$$Type} from "java.awt.geom.Point2D"
import {$Rectangle} from "java.awt.Rectangle"
import {$PathIterator} from "java.awt.geom.PathIterator"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export interface $Shape$$Interface {
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
}

export class $Shape implements $Shape$$Interface {
 "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "contains"(arg0: double, arg1: double): boolean
 "contains"(arg0: $Rectangle2D$$Type): boolean
 "contains"(arg0: $Point2D$$Type): boolean
 "getBounds"(): $Rectangle
 "intersects"(arg0: $Rectangle2D$$Type): boolean
 "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
 "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
 "getBounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shape$$Type = ($Shape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Shape$$Original = $Shape;}
declare module "java.awt.Dimension" {
import {$Dimension2D} from "java.awt.geom.Dimension2D"
import {$Serializable$$Interface} from "java.io.Serializable"

export class $Dimension extends $Dimension2D implements $Serializable$$Interface {
 "width": integer
 "height": integer

constructor(arg0: $Dimension$$Type)
constructor()
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getSize"(): $Dimension
public "setSize"(arg0: $Dimension$$Type): void
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: integer, arg1: integer): void
public "getWidth"(): double
public "getHeight"(): double
get "size"(): $Dimension
set "size"(value: $Dimension$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension$$Type = ($Dimension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dimension$$Original = $Dimension;}
declare module "java.awt.Graphics2D" {
import {$AttributedCharacterIterator$$Type} from "java.text.AttributedCharacterIterator"
import {$ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$Stroke, $Stroke$$Type} from "java.awt.Stroke"
import {$Map$$Type} from "java.util.Map"
import {$Shape$$Type} from "java.awt.Shape"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$BufferedImageOp$$Type} from "java.awt.image.BufferedImageOp"
import {$Image$$Type} from "java.awt.Image"
import {$Composite, $Composite$$Type} from "java.awt.Composite"
import {$GraphicsConfiguration} from "java.awt.GraphicsConfiguration"
import {$RenderingHints} from "java.awt.RenderingHints"
import {$BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$RenderableImage$$Type} from "java.awt.image.renderable.RenderableImage"
import {$Paint, $Paint$$Type} from "java.awt.Paint"
import {$Rectangle$$Type} from "java.awt.Rectangle"
import {$Graphics} from "java.awt.Graphics"
import {$RenderingHints$Key$$Type} from "java.awt.RenderingHints$Key"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$FontRenderContext} from "java.awt.font.FontRenderContext"
import {$GlyphVector$$Type} from "java.awt.font.GlyphVector"
import {$RenderedImage$$Type} from "java.awt.image.RenderedImage"

export class $Graphics2D extends $Graphics {
public "scale"(arg0: double, arg1: double): void
public "fill"(arg0: $Shape$$Type): void
public "transform"(arg0: $AffineTransform$$Type): void
public "rotate"(arg0: double): void
public "rotate"(arg0: double, arg1: double, arg2: double): void
public "hit"(arg0: $Rectangle$$Type, arg1: $Shape$$Type, arg2: boolean): boolean
public "getTransform"(): $AffineTransform
public "drawString"(arg0: $AttributedCharacterIterator$$Type, arg1: float, arg2: float): void
public "drawString"(arg0: $AttributedCharacterIterator$$Type, arg1: integer, arg2: integer): void
public "drawString"(arg0: StringJS, arg1: float, arg2: float): void
public "drawString"(arg0: StringJS, arg1: integer, arg2: integer): void
public "getComposite"(): $Composite
public "clip"(arg0: $Shape$$Type): void
public "setBackground"(arg0: $Color$$Type): void
public "draw"(arg0: $Shape$$Type): void
public "getBackground"(): $Color
public "shear"(arg0: double, arg1: double): void
public "setRenderingHint"(arg0: $RenderingHints$Key$$Type, arg1: any): void
public "translate"(arg0: integer, arg1: integer): void
public "translate"(arg0: double, arg1: double): void
public "setTransform"(arg0: $AffineTransform$$Type): void
public "drawImage"(arg0: $BufferedImage$$Type, arg1: $BufferedImageOp$$Type, arg2: integer, arg3: integer): void
public "drawImage"(arg0: $Image$$Type, arg1: $AffineTransform$$Type, arg2: $ImageObserver$$Type): boolean
public "getRenderingHints"(): $RenderingHints
public "setComposite"(arg0: $Composite$$Type): void
public "draw3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "fill3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "getPaint"(): $Paint
public "drawRenderedImage"(arg0: $RenderedImage$$Type, arg1: $AffineTransform$$Type): void
public "drawRenderableImage"(arg0: $RenderableImage$$Type, arg1: $AffineTransform$$Type): void
public "drawGlyphVector"(arg0: $GlyphVector$$Type, arg1: float, arg2: float): void
public "getDeviceConfiguration"(): $GraphicsConfiguration
public "setStroke"(arg0: $Stroke$$Type): void
public "getRenderingHint"(arg0: $RenderingHints$Key$$Type): any
public "setRenderingHints"(arg0: $Map$$Type<(never), (never)>): void
public "addRenderingHints"(arg0: $Map$$Type<(never), (never)>): void
public "getStroke"(): $Stroke
public "getFontRenderContext"(): $FontRenderContext
public "setPaint"(arg0: $Paint$$Type): void
get "composite"(): $Composite
set "background"(value: $Color$$Type)
get "background"(): $Color
get "renderingHints"(): $RenderingHints
set "composite"(value: $Composite$$Type)
get "paint"(): $Paint
get "deviceConfiguration"(): $GraphicsConfiguration
set "stroke"(value: $Stroke$$Type)
set "renderingHints"(value: $Map$$Type<(never), (never)>)
get "stroke"(): $Stroke
get "fontRenderContext"(): $FontRenderContext
set "paint"(value: $Paint$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graphics2D$$Type = ($Graphics2D);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Graphics2D$$Original = $Graphics2D;}
declare module "java.awt.BufferCapabilities" {
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$BufferCapabilities$FlipContents, $BufferCapabilities$FlipContents$$Type} from "java.awt.BufferCapabilities$FlipContents"
import {$ImageCapabilities, $ImageCapabilities$$Type} from "java.awt.ImageCapabilities"

export class $BufferCapabilities implements $Cloneable$$Interface {
constructor(arg0: $ImageCapabilities$$Type, arg1: $ImageCapabilities$$Type, arg2: $BufferCapabilities$FlipContents$$Type)

public "clone"(): any
public "isPageFlipping"(): boolean
public "getFlipContents"(): $BufferCapabilities$FlipContents
public "getFrontBufferCapabilities"(): $ImageCapabilities
public "getBackBufferCapabilities"(): $ImageCapabilities
public "isFullScreenRequired"(): boolean
public "isMultiBufferAvailable"(): boolean
get "pageFlipping"(): boolean
get "flipContents"(): $BufferCapabilities$FlipContents
get "frontBufferCapabilities"(): $ImageCapabilities
get "backBufferCapabilities"(): $ImageCapabilities
get "fullScreenRequired"(): boolean
get "multiBufferAvailable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferCapabilities$$Type = ($BufferCapabilities);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferCapabilities$$Original = $BufferCapabilities;}
declare module "java.awt.ImageCapabilities" {
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export class $ImageCapabilities implements $Cloneable$$Interface {
constructor(arg0: boolean)

public "clone"(): any
public "isAccelerated"(): boolean
public "isTrueVolatile"(): boolean
get "accelerated"(): boolean
get "trueVolatile"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageCapabilities$$Type = ($ImageCapabilities);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImageCapabilities$$Original = $ImageCapabilities;}
declare module "java.awt.Rectangle" {
import {$Dimension, $Dimension$$Type} from "java.awt.Dimension"
import {$Shape$$Interface} from "java.awt.Shape"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Point2D$$Type} from "java.awt.geom.Point2D"
import {$PathIterator} from "java.awt.geom.PathIterator"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $Rectangle extends $Rectangle2D implements $Shape$$Interface, $Serializable$$Interface {
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
 "x": integer
 "width": integer
 "y": integer
static readonly "OUT_BOTTOM": integer
static readonly "OUT_LEFT": integer
 "height": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Dimension$$Type)
constructor(arg0: $Point$$Type, arg1: $Dimension$$Type)
constructor(arg0: $Point$$Type)
constructor(arg0: $Rectangle$$Type)
constructor()
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "isEmpty"(): boolean
public "add"(arg0: $Point$$Type): void
public "add"(arg0: $Rectangle$$Type): void
public "add"(arg0: integer, arg1: integer): void
public "contains"(arg0: $Rectangle$$Type): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "contains"(arg0: $Point$$Type): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "getBounds"(): $Rectangle
public "getLocation"(): $Point
public "getSize"(): $Dimension
public "grow"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "resize"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "move"(arg0: integer, arg1: integer): void
public "setSize"(arg0: integer, arg1: integer): void
public "setSize"(arg0: $Dimension$$Type): void
public "union"(arg0: $Rectangle$$Type): $Rectangle
public "intersects"(arg0: $Rectangle$$Type): boolean
public "getWidth"(): double
public "setLocation"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $Point$$Type): void
public "getX"(): double
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "getY"(): double
/**
 * 
 * @deprecated
 */
public "reshape"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "outcode"(arg0: double, arg1: double): integer
public "createIntersection"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "intersection"(arg0: $Rectangle$$Type): $Rectangle
public "setBounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setBounds"(arg0: $Rectangle$$Type): void
public "getHeight"(): double
public "translate"(arg0: integer, arg1: integer): void
public "getBounds2D"(): $Rectangle2D
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
get "empty"(): boolean
get "bounds"(): $Rectangle
get "location"(): $Point
get "size"(): $Dimension
set "size"(value: $Dimension$$Type)
set "location"(value: $Point$$Type)
set "bounds"(value: $Rectangle$$Type)
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$$Type = ($Rectangle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rectangle$$Original = $Rectangle;}
declare module "java.awt.GraphicsConfiguration" {
import {$BufferedImage} from "java.awt.image.BufferedImage"
import {$GraphicsDevice} from "java.awt.GraphicsDevice"
import {$ColorModel} from "java.awt.image.ColorModel"
import {$VolatileImage} from "java.awt.image.VolatileImage"
import {$Rectangle} from "java.awt.Rectangle"
import {$BufferCapabilities} from "java.awt.BufferCapabilities"
import {$AffineTransform} from "java.awt.geom.AffineTransform"
import {$ImageCapabilities, $ImageCapabilities$$Type} from "java.awt.ImageCapabilities"

export class $GraphicsConfiguration {
public "getBounds"(): $Rectangle
public "getColorModel"(): $ColorModel
public "getColorModel"(arg0: integer): $ColorModel
public "isTranslucencyCapable"(): boolean
public "getDevice"(): $GraphicsDevice
public "createCompatibleImage"(arg0: integer, arg1: integer, arg2: integer): $BufferedImage
public "createCompatibleImage"(arg0: integer, arg1: integer): $BufferedImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: $ImageCapabilities$$Type): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: integer): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: $ImageCapabilities$$Type, arg3: integer): $VolatileImage
public "getImageCapabilities"(): $ImageCapabilities
public "getDefaultTransform"(): $AffineTransform
public "getNormalizingTransform"(): $AffineTransform
public "getBufferCapabilities"(): $BufferCapabilities
get "bounds"(): $Rectangle
get "colorModel"(): $ColorModel
get "translucencyCapable"(): boolean
get "device"(): $GraphicsDevice
get "imageCapabilities"(): $ImageCapabilities
get "defaultTransform"(): $AffineTransform
get "normalizingTransform"(): $AffineTransform
get "bufferCapabilities"(): $BufferCapabilities
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsConfiguration$$Type = ($GraphicsConfiguration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GraphicsConfiguration$$Original = $GraphicsConfiguration;}
declare module "java.awt.Polygon" {
import {$Shape$$Interface} from "java.awt.Shape"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Point2D$$Type} from "java.awt.geom.Point2D"
import {$Rectangle} from "java.awt.Rectangle"
import {$PathIterator} from "java.awt.geom.PathIterator"
import {$Point$$Type} from "java.awt.Point"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $Polygon implements $Shape$$Interface, $Serializable$$Interface {
 "ypoints": (integer)[]
 "xpoints": (integer)[]
 "npoints": integer

constructor()
constructor(arg0: (integer)[], arg1: (integer)[], arg2: integer)

public "invalidate"(): void
public "reset"(): void
public "contains"(arg0: integer, arg1: integer): boolean
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: $Point$$Type): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "getBounds"(): $Rectangle
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
/**
 * 
 * @deprecated
 */
public "getBoundingBox"(): $Rectangle
public "translate"(arg0: integer, arg1: integer): void
public "addPoint"(arg0: integer, arg1: integer): void
public "getBounds2D"(): $Rectangle2D
get "bounds"(): $Rectangle
get "boundingBox"(): $Rectangle
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Polygon$$Type = ($Polygon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Polygon$$Original = $Polygon;}
declare module "java.awt.Stroke" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"

export interface $Stroke$$Interface {

(arg0: $Shape): $Shape$$Type
}

export class $Stroke implements $Stroke$$Interface {
 "createStrokedShape"(arg0: $Shape$$Type): $Shape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stroke$$Type = ((arg0: $Shape) => $Shape$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stroke$$Original = $Stroke;}
declare module "java.awt.Transparency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Transparency$$Interface {

(): integer
get "transparency"(): integer
}

export class $Transparency implements $Transparency$$Interface {
static readonly "OPAQUE": integer
static readonly "TRANSLUCENT": integer
static readonly "BITMASK": integer

 "getTransparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transparency$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transparency$$Original = $Transparency;}
declare module "java.awt.RenderingHints" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$RenderingHints$Key, $RenderingHints$Key$$Type} from "java.awt.RenderingHints$Key"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $RenderingHints implements $Map$$Interface<(any), (any)>, $Cloneable$$Interface {
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VBGR": any
static readonly "KEY_FRACTIONALMETRICS": $RenderingHints$Key
static readonly "VALUE_RESOLUTION_VARIANT_SIZE_FIT": any
static readonly "VALUE_TEXT_ANTIALIAS_DEFAULT": any
static readonly "VALUE_TEXT_ANTIALIAS_OFF": any
static readonly "VALUE_ANTIALIAS_OFF": any
static readonly "VALUE_INTERPOLATION_BICUBIC": any
static readonly "VALUE_COLOR_RENDER_QUALITY": any
static readonly "VALUE_COLOR_RENDER_DEFAULT": any
static readonly "VALUE_STROKE_DEFAULT": any
static readonly "VALUE_RENDER_DEFAULT": any
static readonly "VALUE_RENDER_QUALITY": any
static readonly "KEY_ALPHA_INTERPOLATION": $RenderingHints$Key
static readonly "KEY_DITHERING": $RenderingHints$Key
static readonly "VALUE_FRACTIONALMETRICS_OFF": any
static readonly "VALUE_ANTIALIAS_DEFAULT": any
static readonly "VALUE_ALPHA_INTERPOLATION_SPEED": any
static readonly "KEY_TEXT_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_TEXT_ANTIALIAS_GASP": any
static readonly "KEY_TEXT_LCD_CONTRAST": $RenderingHints$Key
static readonly "VALUE_RENDER_SPEED": any
static readonly "VALUE_FRACTIONALMETRICS_ON": any
static readonly "VALUE_RESOLUTION_VARIANT_DEFAULT": any
static readonly "KEY_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_DITHER_ENABLE": any
static readonly "KEY_STROKE_CONTROL": $RenderingHints$Key
static readonly "VALUE_STROKE_PURE": any
static readonly "KEY_RENDERING": $RenderingHints$Key
static readonly "VALUE_DITHER_DEFAULT": any
static readonly "KEY_RESOLUTION_VARIANT": $RenderingHints$Key
static readonly "VALUE_INTERPOLATION_BILINEAR": any
static readonly "VALUE_ALPHA_INTERPOLATION_QUALITY": any
static readonly "VALUE_RESOLUTION_VARIANT_BASE": any
static readonly "KEY_COLOR_RENDERING": $RenderingHints$Key
static readonly "VALUE_RESOLUTION_VARIANT_DPI_FIT": any
static readonly "VALUE_ANTIALIAS_ON": any
static readonly "VALUE_STROKE_NORMALIZE": any
static readonly "VALUE_FRACTIONALMETRICS_DEFAULT": any
static readonly "VALUE_INTERPOLATION_NEAREST_NEIGHBOR": any
static readonly "VALUE_DITHER_DISABLE": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HBGR": any
static readonly "KEY_INTERPOLATION": $RenderingHints$Key
static readonly "VALUE_ALPHA_INTERPOLATION_DEFAULT": any
static readonly "VALUE_TEXT_ANTIALIAS_ON": any
static readonly "VALUE_COLOR_RENDER_SPEED": any

constructor(arg0: $Map$$Type<($RenderingHints$Key$$Type), (never)>)
constructor(arg0: $RenderingHints$Key$$Type, arg1: any)

public "remove"(arg0: any): any
public "size"(): integer
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: $RenderingHints$$Type): void
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$$Type<(never), (never)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$$Type<(any), (any)>): $Map<(any), (any)>
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replace"(arg0: any, arg1: any): any
public "replaceAll"(arg0: $BiFunction$$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any): $Map<(any), (any)>
public static "of"<K, V>(): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any, arg18: any, arg19: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): $Map<(any), (any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type<(any), (any), (any)>): any
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
public static "entry"<K, V>(arg0: any, arg1: any): $Map$Entry<(any), (any)>
public "forEach"(arg0: $BiConsumer$$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: any, arg1: $Function$$Type<(any), (any)>): any
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(any), (any)>)[]): $Map<(any), (any)>
[index: string | number]: any
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$$Type = ($RenderingHints);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderingHints$$Original = $RenderingHints;}
declare module "java.awt.Paint" {
import {$Transparency$$Interface} from "java.awt.Transparency"
import {$Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$ColorModel$$Type} from "java.awt.image.ColorModel"
import {$Rectangle$$Type} from "java.awt.Rectangle"
import {$PaintContext} from "java.awt.PaintContext"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RenderingHints$$Type} from "java.awt.RenderingHints"

export interface $Paint$$Interface extends $Transparency$$Interface {
get "transparency"(): integer
}

export class $Paint implements $Paint$$Interface {
 "createContext"(arg0: $ColorModel$$Type, arg1: $Rectangle$$Type, arg2: $Rectangle2D$$Type, arg3: $AffineTransform$$Type, arg4: $RenderingHints$$Type): $PaintContext
 "getTransparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paint$$Type = ($Paint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Paint$$Original = $Paint;}
declare module "java.awt.GraphicsDevice" {
import {$DisplayMode, $DisplayMode$$Type} from "java.awt.DisplayMode"
import {$GraphicsDevice$WindowTranslucency$$Type} from "java.awt.GraphicsDevice$WindowTranslucency"
import {$GraphicsConfiguration} from "java.awt.GraphicsConfiguration"
import {$Window, $Window$$Type} from "java.awt.Window"
import {$GraphicsConfigTemplate$$Type} from "java.awt.GraphicsConfigTemplate"

export class $GraphicsDevice {
static readonly "TYPE_IMAGE_BUFFER": integer
static readonly "TYPE_RASTER_SCREEN": integer
static readonly "TYPE_PRINTER": integer

public "getConfigurations"(): ($GraphicsConfiguration)[]
public "getType"(): integer
public "getDisplayMode"(): $DisplayMode
public "getDefaultConfiguration"(): $GraphicsConfiguration
public "isWindowTranslucencySupported"(arg0: $GraphicsDevice$WindowTranslucency$$Type): boolean
public "setDisplayMode"(arg0: $DisplayMode$$Type): void
public "getFullScreenWindow"(): $Window
public "getIDstring"(): StringJS
public "getBestConfiguration"(arg0: $GraphicsConfigTemplate$$Type): $GraphicsConfiguration
public "setFullScreenWindow"(arg0: $Window$$Type): void
public "isFullScreenSupported"(): boolean
public "isDisplayChangeSupported"(): boolean
public "getDisplayModes"(): ($DisplayMode)[]
public "getAvailableAcceleratedMemory"(): integer
get "configurations"(): ($GraphicsConfiguration)[]
get "type"(): integer
get "displayMode"(): $DisplayMode
get "defaultConfiguration"(): $GraphicsConfiguration
set "displayMode"(value: $DisplayMode$$Type)
get "fullScreenWindow"(): $Window
get "IDstring"(): StringJS
set "fullScreenWindow"(value: $Window$$Type)
get "fullScreenSupported"(): boolean
get "displayChangeSupported"(): boolean
get "displayModes"(): ($DisplayMode)[]
get "availableAcceleratedMemory"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsDevice$$Type = ($GraphicsDevice);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GraphicsDevice$$Original = $GraphicsDevice;}
declare module "java.awt.Font" {
import {$TextAttribute} from "java.awt.font.TextAttribute"
import {$Map, $Map$$Type} from "java.util.Map"
import {$File$$Type} from "java.io.File"
import {$Rectangle2D} from "java.awt.geom.Rectangle2D"
import {$CharacterIterator$$Type} from "java.text.CharacterIterator"
import {$Locale$$Type} from "java.util.Locale"
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type} from "java.text.AttributedCharacterIterator$Attribute"
import {$LineMetrics} from "java.awt.font.LineMetrics"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$InputStream$$Type} from "java.io.InputStream"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$GlyphVector} from "java.awt.font.GlyphVector"
import {$FontRenderContext$$Type} from "java.awt.font.FontRenderContext"

export class $Font implements $Serializable$$Interface {
static readonly "PLAIN": integer
static readonly "ITALIC": integer
static readonly "CENTER_BASELINE": integer
static readonly "HANGING_BASELINE": integer
static readonly "DIALOG": StringJS
static readonly "MONOSPACED": StringJS
static readonly "DIALOG_INPUT": StringJS
static readonly "LAYOUT_NO_LIMIT_CONTEXT": integer
static readonly "LAYOUT_RIGHT_TO_LEFT": integer
static readonly "SANS_SERIF": StringJS
static readonly "SERIF": StringJS
static readonly "TRUETYPE_FONT": integer
static readonly "ROMAN_BASELINE": integer
static readonly "LAYOUT_NO_START_CONTEXT": integer
static readonly "LAYOUT_LEFT_TO_RIGHT": integer
static readonly "BOLD": integer
static readonly "TYPE1_FONT": integer

constructor(arg0: $Map$$Type<($AttributedCharacterIterator$Attribute$$Type), (never)>)
constructor(arg0: StringJS, arg1: integer, arg2: integer)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "decode"(arg0: StringJS): $Font
public "getSize"(): integer
public "getAttributes"(): $Map<($TextAttribute), (never)>
public "getFamily"(): StringJS
public "getFamily"(arg0: $Locale$$Type): StringJS
public "isTransformed"(): boolean
public static "getFont"(arg0: StringJS): $Font
public static "getFont"(arg0: $Map$$Type<($AttributedCharacterIterator$Attribute$$Type), (never)>): $Font
public static "getFont"(arg0: StringJS, arg1: $Font$$Type): $Font
public static "createFont"(arg0: integer, arg1: $File$$Type): $Font
public static "createFont"(arg0: integer, arg1: $InputStream$$Type): $Font
public "getTransform"(): $AffineTransform
public "isBold"(): boolean
public "isItalic"(): boolean
public "getStyle"(): integer
public "isPlain"(): boolean
public "getNumGlyphs"(): integer
public "getFontName"(): StringJS
public "getFontName"(arg0: $Locale$$Type): StringJS
public "hasLayoutAttributes"(): boolean
public "getMissingGlyphCode"(): integer
public "getBaselineFor"(arg0: character): byte
public "canDisplay"(arg0: integer): boolean
public "canDisplay"(arg0: character): boolean
public "getItalicAngle"(): float
public static "textRequiresLayout"(arg0: (character)[], arg1: integer, arg2: integer): boolean
public static "createFonts"(arg0: $InputStream$$Type): ($Font)[]
public static "createFonts"(arg0: $File$$Type): ($Font)[]
public "getPSName"(): StringJS
public "getSize2D"(): float
public "getAvailableAttributes"(): ($AttributedCharacterIterator$Attribute)[]
public "deriveFont"(arg0: integer): $Font
public "deriveFont"(arg0: float): $Font
public "deriveFont"(arg0: $AffineTransform$$Type): $Font
public "deriveFont"(arg0: $Map$$Type<($AttributedCharacterIterator$Attribute$$Type), (never)>): $Font
public "deriveFont"(arg0: integer, arg1: $AffineTransform$$Type): $Font
public "deriveFont"(arg0: integer, arg1: float): $Font
public "canDisplayUpTo"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "canDisplayUpTo"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer): integer
public "canDisplayUpTo"(arg0: StringJS): integer
public "hasUniformLineMetrics"(): boolean
public "getLineMetrics"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(arg0: StringJS, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(arg0: StringJS, arg1: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $LineMetrics
public "getMaxCharBounds"(arg0: $FontRenderContext$$Type): $Rectangle2D
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: (integer)[]): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: (character)[]): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: StringJS): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: $CharacterIterator$$Type): $GlyphVector
public "layoutGlyphVector"(arg0: $FontRenderContext$$Type, arg1: (character)[], arg2: integer, arg3: integer, arg4: integer): $GlyphVector
public "getStringBounds"(arg0: StringJS, arg1: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(arg0: StringJS, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $Rectangle2D
get "name"(): StringJS
get "size"(): integer
get "attributes"(): $Map<($TextAttribute), (never)>
get "family"(): StringJS
get "transformed"(): boolean
get "transform"(): $AffineTransform
get "bold"(): boolean
get "italic"(): boolean
get "style"(): integer
get "plain"(): boolean
get "numGlyphs"(): integer
get "fontName"(): StringJS
get "missingGlyphCode"(): integer
get "italicAngle"(): float
get "PSName"(): StringJS
get "size2D"(): float
get "availableAttributes"(): ($AttributedCharacterIterator$Attribute)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$$Type = ($Font);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Font$$Original = $Font;}
declare module "java.awt.CompositeContext" {
import {$WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Raster$$Type} from "java.awt.image.Raster"

export interface $CompositeContext$$Interface {
}

export class $CompositeContext implements $CompositeContext$$Interface {
 "compose"(arg0: $Raster$$Type, arg1: $Raster$$Type, arg2: $WritableRaster$$Type): void
 "dispose"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeContext$$Type = ($CompositeContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompositeContext$$Original = $CompositeContext;}
declare module "java.awt.Color" {
import {$Paint$$Interface} from "java.awt.Paint"
import {$Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ColorModel$$Type} from "java.awt.image.ColorModel"
import {$Rectangle$$Type} from "java.awt.Rectangle"
import {$ColorSpace, $ColorSpace$$Type} from "java.awt.color.ColorSpace"
import {$PaintContext} from "java.awt.PaintContext"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RenderingHints$$Type} from "java.awt.RenderingHints"

export class $Color implements $Paint$$Interface, $Serializable$$Interface {
static readonly "lightGray": $Color
static readonly "magenta": $Color
static readonly "GRAY": $Color
static readonly "pink": $Color
static readonly "BLUE": $Color
static readonly "yellow": $Color
static readonly "cyan": $Color
static readonly "red": $Color
static readonly "gray": $Color
static readonly "PINK": $Color
static readonly "white": $Color
static readonly "BLACK": $Color
static readonly "ORANGE": $Color
static readonly "WHITE": $Color
static readonly "green": $Color
static readonly "black": $Color
static readonly "GREEN": $Color
static readonly "RED": $Color
static readonly "orange": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "blue": $Color
static readonly "darkGray": $Color
static readonly "MAGENTA": $Color
static readonly "YELLOW": $Color
static readonly "DARK_GRAY": $Color
static readonly "CYAN": $Color

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ColorSpace$$Type, arg1: (float)[], arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "decode"(arg0: StringJS): $Color
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "getTransparency"(): integer
public "createContext"(arg0: $ColorModel$$Type, arg1: $Rectangle$$Type, arg2: $Rectangle2D$$Type, arg3: $AffineTransform$$Type, arg4: $RenderingHints$$Type): $PaintContext
public "getAlpha"(): integer
public static "getColor"(arg0: StringJS): $Color
public static "getColor"(arg0: StringJS, arg1: integer): $Color
public static "getColor"(arg0: StringJS, arg1: $Color$$Type): $Color
public "getColorSpace"(): $ColorSpace
public "getComponents"(arg0: $ColorSpace$$Type, arg1: (float)[]): (float)[]
public "getComponents"(arg0: (float)[]): (float)[]
public "getRGB"(): integer
public "getRGBComponents"(arg0: (float)[]): (float)[]
public static "HSBtoRGB"(arg0: float, arg1: float, arg2: float): integer
public "getRGBColorComponents"(arg0: (float)[]): (float)[]
public "brighter"(): $Color
public "darker"(): $Color
public static "RGBtoHSB"(arg0: integer, arg1: integer, arg2: integer, arg3: (float)[]): (float)[]
public static "getHSBColor"(arg0: float, arg1: float, arg2: float): $Color
public "getColorComponents"(arg0: $ColorSpace$$Type, arg1: (float)[]): (float)[]
public "getColorComponents"(arg0: (float)[]): (float)[]
get "transparency"(): integer
get "alpha"(): integer
get "colorSpace"(): $ColorSpace
get "RGB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ($Color);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color$$Original = $Color;}
