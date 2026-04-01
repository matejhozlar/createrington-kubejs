declare module "java.awt.image.renderable.RenderContext" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export class $RenderContext implements $Cloneable$$Interface {
constructor(arg0: $AffineTransform$$Type, arg1: $Shape$$Type)
constructor(arg0: $AffineTransform$$Type, arg1: $RenderingHints$$Type)
constructor(arg0: $AffineTransform$$Type)
constructor(arg0: $AffineTransform$$Type, arg1: $Shape$$Type, arg2: $RenderingHints$$Type)

public "clone"(): any
public "getTransform"(): $AffineTransform
public "getRenderingHints"(): $RenderingHints
public "setTransform"(arg0: $AffineTransform$$Type): void
public "setRenderingHints"(arg0: $RenderingHints$$Type): void
/**
 * 
 * @deprecated
 */
public "preConcetenateTransform"(arg0: $AffineTransform$$Type): void
/**
 * 
 * @deprecated
 */
public "concetenateTransform"(arg0: $AffineTransform$$Type): void
public "preConcatenateTransform"(arg0: $AffineTransform$$Type): void
public "concatenateTransform"(arg0: $AffineTransform$$Type): void
public "setAreaOfInterest"(arg0: $Shape$$Type): void
public "getAreaOfInterest"(): $Shape
get "transform"(): $AffineTransform
get "renderingHints"(): $RenderingHints
set "transform"(value: $AffineTransform$$Type)
set "renderingHints"(value: $RenderingHints$$Type)
set "areaOfInterest"(value: $Shape$$Type)
get "areaOfInterest"(): $Shape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$$Type = ($RenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$$Original = $RenderContext;}
declare module "java.awt.image.renderable.RenderableImage" {
import {$Vector} from "java.util.Vector"
import {$RenderingHints$$Type} from "java.awt.RenderingHints"
import {$RenderedImage} from "java.awt.image.RenderedImage"
import {$RenderContext$$Type} from "java.awt.image.renderable.RenderContext"

export interface $RenderableImage$$Interface {
get "dynamic"(): boolean
get "propertyNames"(): (StringJS)[]
get "width"(): float
get "minY"(): float
get "minX"(): float
get "height"(): float
get "sources"(): $Vector<($RenderableImage)>
}

export class $RenderableImage implements $RenderableImage$$Interface {
static readonly "HINTS_OBSERVED": StringJS

 "getProperty"(arg0: StringJS): any
 "isDynamic"(): boolean
 "getPropertyNames"(): (StringJS)[]
 "getWidth"(): float
 "getMinY"(): float
 "getMinX"(): float
 "getHeight"(): float
 "getSources"(): $Vector<($RenderableImage)>
 "createScaledRendering"(arg0: integer, arg1: integer, arg2: $RenderingHints$$Type): $RenderedImage
 "createDefaultRendering"(): $RenderedImage
 "createRendering"(arg0: $RenderContext$$Type): $RenderedImage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableImage$$Type = ($RenderableImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderableImage$$Original = $RenderableImage;}
