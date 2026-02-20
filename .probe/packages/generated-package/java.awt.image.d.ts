declare module "java.awt.image.DataBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataBuffer {
static readonly "TYPE_INT": integer
static readonly "TYPE_DOUBLE": integer
static readonly "TYPE_SHORT": integer
static readonly "TYPE_UNDEFINED": integer
static readonly "TYPE_BYTE": integer
static readonly "TYPE_USHORT": integer
static readonly "TYPE_FLOAT": integer

public "getSize"(): integer
public "getOffset"(): integer
public "getOffsets"(): (integer)[]
public "getElem"(arg0: integer): integer
public "getElem"(arg0: integer, arg1: integer): integer
public "setElem"(arg0: integer, arg1: integer, arg2: integer): void
public "setElem"(arg0: integer, arg1: integer): void
public "getDataType"(): integer
public "getNumBanks"(): integer
public "getElemFloat"(arg0: integer, arg1: integer): float
public "getElemFloat"(arg0: integer): float
public "setElemFloat"(arg0: integer, arg1: integer, arg2: float): void
public "setElemFloat"(arg0: integer, arg1: float): void
public "getElemDouble"(arg0: integer): double
public "getElemDouble"(arg0: integer, arg1: integer): double
public "setElemDouble"(arg0: integer, arg1: integer, arg2: double): void
public "setElemDouble"(arg0: integer, arg1: double): void
public static "getDataTypeSize"(arg0: integer): integer
get "size"(): integer
get "offset"(): integer
get "offsets"(): (integer)[]
get "dataType"(): integer
get "numBanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataBuffer$$Type = ($DataBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataBuffer$$Original = $DataBuffer;}
declare module "java.awt.image.WritableRenderedImage" {
import {$ColorModel} from "java.awt.image.ColorModel"
import {$Rectangle$$Type} from "java.awt.Rectangle"
import {$TileObserver$$Type} from "java.awt.image.TileObserver"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Vector} from "java.util.Vector"
import {$SampleModel} from "java.awt.image.SampleModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"
import {$Point} from "java.awt.Point"
import {$RenderedImage, $RenderedImage$$Interface} from "java.awt.image.RenderedImage"

export interface $WritableRenderedImage$$Interface extends $RenderedImage$$Interface {
set "data"(value: $Raster$$Type)
get "writableTileIndices"(): ($Point)[]
get "minX"(): integer
get "data"(): $Raster
get "width"(): integer
get "propertyNames"(): (StringJS)[]
get "colorModel"(): $ColorModel
get "sampleModel"(): $SampleModel
get "numXTiles"(): integer
get "numYTiles"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "tileWidth"(): integer
get "tileHeight"(): integer
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "sources"(): $Vector<($RenderedImage)>
get "height"(): integer
get "minY"(): integer
}

export class $WritableRenderedImage implements $WritableRenderedImage$$Interface {
 "setData"(arg0: $Raster$$Type): void
 "addTileObserver"(arg0: $TileObserver$$Type): void
 "removeTileObserver"(arg0: $TileObserver$$Type): void
 "isTileWritable"(arg0: integer, arg1: integer): boolean
 "getWritableTileIndices"(): ($Point)[]
 "hasTileWriters"(): boolean
 "getWritableTile"(arg0: integer, arg1: integer): $WritableRaster
 "releaseWritableTile"(arg0: integer, arg1: integer): void
 "getMinX"(): integer
 "getProperty"(arg0: StringJS): any
 "getData"(arg0: $Rectangle$$Type): $Raster
 "getData"(): $Raster
 "getWidth"(): integer
 "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
 "getPropertyNames"(): (StringJS)[]
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
 "getSources"(): $Vector<($RenderedImage)>
 "getHeight"(): integer
 "getMinY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRenderedImage$$Type = ($WritableRenderedImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableRenderedImage$$Original = $WritableRenderedImage;}
declare module "java.awt.image.BufferedImageOp" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$Rectangle2D} from "java.awt.geom.Rectangle2D"
import {$ColorModel$$Type} from "java.awt.image.ColorModel"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$RenderingHints} from "java.awt.RenderingHints"

export interface $BufferedImageOp$$Interface {
get "renderingHints"(): $RenderingHints
}

export class $BufferedImageOp implements $BufferedImageOp$$Interface {
 "filter"(arg0: $BufferedImage$$Type, arg1: $BufferedImage$$Type): $BufferedImage
 "createCompatibleDestImage"(arg0: $BufferedImage$$Type, arg1: $ColorModel$$Type): $BufferedImage
 "getBounds2D"(arg0: $BufferedImage$$Type): $Rectangle2D
 "getPoint2D"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
 "getRenderingHints"(): $RenderingHints
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedImageOp$$Type = ($BufferedImageOp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferedImageOp$$Original = $BufferedImageOp;}
declare module "java.awt.image.Raster" {
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$WritableRaster} from "java.awt.image.WritableRaster"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$Point$$Type} from "java.awt.Point"
import {$DataBuffer, $DataBuffer$$Type} from "java.awt.image.DataBuffer"

export class $Raster {
public "getMinX"(): integer
public "getBounds"(): $Rectangle
public "getParent"(): $Raster
public "getWidth"(): integer
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): (double)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): (float)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): (double)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): (float)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): (integer)[]
public "createChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $Raster
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer): double
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$$Type): $WritableRaster
public static "createBandedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public "createTranslatedChild"(arg0: integer, arg1: integer): $Raster
public "getSampleModel"(): $SampleModel
public "createCompatibleWritableRaster"(): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $WritableRaster
public "createCompatibleWritableRaster"(arg0: $Rectangle$$Type): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: (integer)[], arg4: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Point$$Type): $WritableRaster
public "getNumBands"(): integer
public "getDataElements"(arg0: integer, arg1: integer, arg2: any): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): any
public "getDataBuffer"(): $DataBuffer
public "getSampleModelTranslateX"(): integer
public "getSampleModelTranslateY"(): integer
public static "createWritableRaster"(arg0: $SampleModel$$Type, arg1: $DataBuffer$$Type, arg2: $Point$$Type): $WritableRaster
public static "createWritableRaster"(arg0: $SampleModel$$Type, arg1: $Point$$Type): $WritableRaster
public "getHeight"(): integer
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[]): (double)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[]): (float)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getMinY"(): integer
public "getSample"(arg0: integer, arg1: integer, arg2: integer): integer
public "getNumDataElements"(): integer
public "getTransferType"(): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer): float
public static "createRaster"(arg0: $SampleModel$$Type, arg1: $DataBuffer$$Type, arg2: $Point$$Type): $Raster
get "minX"(): integer
get "bounds"(): $Rectangle
get "parent"(): $Raster
get "width"(): integer
get "sampleModel"(): $SampleModel
get "numBands"(): integer
get "dataBuffer"(): $DataBuffer
get "sampleModelTranslateX"(): integer
get "sampleModelTranslateY"(): integer
get "height"(): integer
get "minY"(): integer
get "numDataElements"(): integer
get "transferType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Raster$$Type = ($Raster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Raster$$Original = $Raster;}
declare module "java.awt.image.ImageProducer" {
import {$ImageConsumer$$Type} from "java.awt.image.ImageConsumer"

export interface $ImageProducer$$Interface {
}

export class $ImageProducer implements $ImageProducer$$Interface {
 "isConsumer"(arg0: $ImageConsumer$$Type): boolean
 "removeConsumer"(arg0: $ImageConsumer$$Type): void
 "startProduction"(arg0: $ImageConsumer$$Type): void
 "requestTopDownLeftRightResend"(arg0: $ImageConsumer$$Type): void
 "addConsumer"(arg0: $ImageConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageProducer$$Type = ($ImageProducer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImageProducer$$Original = $ImageProducer;}
declare module "java.awt.image.VolatileImage" {
import {$Graphics2D} from "java.awt.Graphics2D"
import {$BufferedImage} from "java.awt.image.BufferedImage"
import {$Transparency$$Interface} from "java.awt.Transparency"
import {$Graphics} from "java.awt.Graphics"
import {$ImageProducer} from "java.awt.image.ImageProducer"
import {$Image} from "java.awt.Image"
import {$GraphicsConfiguration$$Type} from "java.awt.GraphicsConfiguration"
import {$ImageCapabilities} from "java.awt.ImageCapabilities"

export class $VolatileImage extends $Image implements $Transparency$$Interface {
static readonly "SCALE_DEFAULT": integer
static readonly "UndefinedProperty": any
static readonly "IMAGE_OK": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_AREA_AVERAGING": integer
static readonly "IMAGE_RESTORED": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "IMAGE_INCOMPATIBLE": integer

public "validate"(arg0: $GraphicsConfiguration$$Type): integer
public "getSource"(): $ImageProducer
public "getWidth"(): integer
public "getSnapshot"(): $BufferedImage
public "getTransparency"(): integer
public "getCapabilities"(): $ImageCapabilities
public "getHeight"(): integer
public "getGraphics"(): $Graphics
public "createGraphics"(): $Graphics2D
public "contentsLost"(): boolean
get "source"(): $ImageProducer
get "width"(): integer
get "snapshot"(): $BufferedImage
get "transparency"(): integer
get "capabilities"(): $ImageCapabilities
get "height"(): integer
get "graphics"(): $Graphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolatileImage$$Type = ($VolatileImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VolatileImage$$Original = $VolatileImage;}
declare module "java.awt.image.WritableRaster" {
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"

export class $WritableRaster extends $Raster {
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): void
public "getWritableParent"(): $WritableRaster
public "createWritableTranslatedChild"(arg0: integer, arg1: integer): $WritableRaster
public "setDataElements"(arg0: integer, arg1: integer, arg2: any): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: $Raster$$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): void
public "createWritableChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $WritableRaster
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[]): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setRect"(arg0: $Raster$$Type): void
public "setRect"(arg0: integer, arg1: integer, arg2: $Raster$$Type): void
get "writableParent"(): $WritableRaster
set "rect"(value: $Raster$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRaster$$Type = ($WritableRaster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableRaster$$Original = $WritableRaster;}
declare module "java.awt.image.RenderedImage" {
import {$ColorModel} from "java.awt.image.ColorModel"
import {$Rectangle$$Type} from "java.awt.Rectangle"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Vector} from "java.util.Vector"
import {$SampleModel} from "java.awt.image.SampleModel"
import {$Raster} from "java.awt.image.Raster"

export interface $RenderedImage$$Interface {
get "minX"(): integer
get "data"(): $Raster
get "width"(): integer
get "propertyNames"(): (StringJS)[]
get "colorModel"(): $ColorModel
get "sampleModel"(): $SampleModel
get "numXTiles"(): integer
get "numYTiles"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "tileWidth"(): integer
get "tileHeight"(): integer
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "sources"(): $Vector<($RenderedImage)>
get "height"(): integer
get "minY"(): integer
}

export class $RenderedImage implements $RenderedImage$$Interface {
 "getMinX"(): integer
 "getProperty"(arg0: StringJS): any
 "getData"(arg0: $Rectangle$$Type): $Raster
 "getData"(): $Raster
 "getWidth"(): integer
 "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
 "getPropertyNames"(): (StringJS)[]
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
 "getSources"(): $Vector<($RenderedImage)>
 "getHeight"(): integer
 "getMinY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedImage$$Type = ($RenderedImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderedImage$$Original = $RenderedImage;}
declare module "java.awt.image.ColorModel" {
import {$Transparency$$Interface} from "java.awt.Transparency"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Raster$$Type} from "java.awt.image.Raster"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$ColorSpace} from "java.awt.color.ColorSpace"

export class $ColorModel implements $Transparency$$Interface {
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getRed"(arg0: integer): integer
public "getRed"(arg0: any): integer
public "getGreen"(arg0: any): integer
public "getGreen"(arg0: integer): integer
public "getBlue"(arg0: integer): integer
public "getBlue"(arg0: any): integer
public "getTransparency"(): integer
public "getDataElement"(arg0: (integer)[], arg1: integer): integer
public "getDataElement"(arg0: (float)[], arg1: integer): integer
public "getUnnormalizedComponents"(arg0: (float)[], arg1: integer, arg2: (integer)[], arg3: integer): (integer)[]
public "getAlpha"(arg0: any): integer
public "getAlpha"(arg0: integer): integer
public "isCompatibleSampleModel"(arg0: $SampleModel$$Type): boolean
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public static "getRGBdefault"(): $ColorModel
public "isAlphaPremultiplied"(): boolean
public "isCompatibleRaster"(arg0: $Raster$$Type): boolean
public "coerceData"(arg0: $WritableRaster$$Type, arg1: boolean): $ColorModel
public "getColorSpace"(): $ColorSpace
public "getComponentSize"(arg0: integer): integer
public "getComponentSize"(): (integer)[]
public "getPixelSize"(): integer
public "getNumComponents"(): integer
public "getAlphaRaster"(arg0: $WritableRaster$$Type): $WritableRaster
public "getDataElements"(arg0: (integer)[], arg1: integer, arg2: any): any
public "getDataElements"(arg0: integer, arg1: any): any
public "getDataElements"(arg0: (float)[], arg1: integer, arg2: any): any
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getComponents"(arg0: any, arg1: (integer)[], arg2: integer): (integer)[]
public "getComponents"(arg0: integer, arg1: (integer)[], arg2: integer): (integer)[]
public "getRGB"(arg0: integer): integer
public "getRGB"(arg0: any): integer
public "hasAlpha"(): boolean
public "getTransferType"(): integer
public "getNumColorComponents"(): integer
public "getNormalizedComponents"(arg0: (integer)[], arg1: integer, arg2: (float)[], arg3: integer): (float)[]
public "getNormalizedComponents"(arg0: any, arg1: (float)[], arg2: integer): (float)[]
get "transparency"(): integer
get "RGBdefault"(): $ColorModel
get "alphaPremultiplied"(): boolean
get "colorSpace"(): $ColorSpace
get "componentSize"(): (integer)[]
get "pixelSize"(): integer
get "numComponents"(): integer
get "transferType"(): integer
get "numColorComponents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorModel$$Type = ($ColorModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorModel$$Original = $ColorModel;}
declare module "java.awt.image.BufferedImage" {
import {$ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$Hashtable$$Type} from "java.util.Hashtable"
import {$Transparency$$Interface} from "java.awt.Transparency"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$SampleModel} from "java.awt.image.SampleModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"
import {$Point} from "java.awt.Point"
import {$Image} from "java.awt.Image"
import {$WritableRenderedImage$$Interface} from "java.awt.image.WritableRenderedImage"
import {$Graphics2D} from "java.awt.Graphics2D"
import {$Graphics} from "java.awt.Graphics"
import {$Rectangle$$Type} from "java.awt.Rectangle"
import {$TileObserver$$Type} from "java.awt.image.TileObserver"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Vector} from "java.util.Vector"
import {$ImageProducer} from "java.awt.image.ImageProducer"
import {$IndexColorModel$$Type} from "java.awt.image.IndexColorModel"
import {$RenderedImage} from "java.awt.image.RenderedImage"

export class $BufferedImage extends $Image implements $WritableRenderedImage$$Interface, $Transparency$$Interface {
static readonly "TYPE_3BYTE_BGR": integer
static readonly "TYPE_USHORT_565_RGB": integer
static readonly "TYPE_INT_ARGB_PRE": integer
static readonly "TYPE_USHORT_555_RGB": integer
static readonly "TYPE_USHORT_GRAY": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_AREA_AVERAGING": integer
static readonly "TYPE_BYTE_INDEXED": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "TYPE_4BYTE_ABGR": integer
static readonly "TYPE_INT_ARGB": integer
static readonly "SCALE_DEFAULT": integer
static readonly "TYPE_CUSTOM": integer
static readonly "TYPE_INT_RGB": integer
static readonly "TYPE_INT_BGR": integer
static readonly "UndefinedProperty": any
static readonly "TYPE_BYTE_GRAY": integer
static readonly "TYPE_4BYTE_ABGR_PRE": integer
static readonly "TYPE_BYTE_BINARY": integer

constructor(arg0: $ColorModel$$Type, arg1: $WritableRaster$$Type, arg2: boolean, arg3: $Hashtable$$Type<(never), (never)>)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $IndexColorModel$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "getMinX"(): integer
public "getProperty"(arg0: StringJS): any
public "getProperty"(arg0: StringJS, arg1: $ImageObserver$$Type): any
public "toString"(): StringJS
public "getType"(): integer
public "getSource"(): $ImageProducer
public "getData"(arg0: $Rectangle$$Type): $Raster
public "getData"(): $Raster
public "getWidth"(): integer
public "getWidth"(arg0: $ImageObserver$$Type): integer
public "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
public "getTransparency"(): integer
public "getPropertyNames"(): (StringJS)[]
public "setData"(arg0: $Raster$$Type): void
public "getColorModel"(): $ColorModel
public "getSampleModel"(): $SampleModel
public "getNumXTiles"(): integer
public "getNumYTiles"(): integer
public "getMinTileX"(): integer
public "getMinTileY"(): integer
public "getTileWidth"(): integer
public "getTileHeight"(): integer
public "getTileGridXOffset"(): integer
public "getTileGridYOffset"(): integer
public "getTile"(arg0: integer, arg1: integer): $Raster
public "isAlphaPremultiplied"(): boolean
public "coerceData"(arg0: boolean): void
public "getAlphaRaster"(): $WritableRaster
public "getRaster"(): $WritableRaster
public "setRGB"(arg0: integer, arg1: integer, arg2: integer): void
public "setRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: integer, arg6: integer): void
public "getSubimage"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BufferedImage
public "addTileObserver"(arg0: $TileObserver$$Type): void
public "removeTileObserver"(arg0: $TileObserver$$Type): void
public "isTileWritable"(arg0: integer, arg1: integer): boolean
public "getWritableTileIndices"(): ($Point)[]
public "hasTileWriters"(): boolean
public "getWritableTile"(arg0: integer, arg1: integer): $WritableRaster
public "releaseWritableTile"(arg0: integer, arg1: integer): void
public "getSources"(): $Vector<($RenderedImage)>
public "getHeight"(arg0: $ImageObserver$$Type): integer
public "getHeight"(): integer
public "getRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: integer, arg6: integer): (integer)[]
public "getRGB"(arg0: integer, arg1: integer): integer
public "getGraphics"(): $Graphics
public "createGraphics"(): $Graphics2D
public "getMinY"(): integer
get "minX"(): integer
get "type"(): integer
get "source"(): $ImageProducer
get "data"(): $Raster
get "width"(): integer
get "transparency"(): integer
get "propertyNames"(): (StringJS)[]
set "data"(value: $Raster$$Type)
get "colorModel"(): $ColorModel
get "sampleModel"(): $SampleModel
get "numXTiles"(): integer
get "numYTiles"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "tileWidth"(): integer
get "tileHeight"(): integer
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "alphaPremultiplied"(): boolean
get "alphaRaster"(): $WritableRaster
get "raster"(): $WritableRaster
get "writableTileIndices"(): ($Point)[]
get "sources"(): $Vector<($RenderedImage)>
get "height"(): integer
get "graphics"(): $Graphics
get "minY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedImage$$Type = ($BufferedImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferedImage$$Original = $BufferedImage;}
declare module "java.awt.image.SampleModel" {
import {$DataBuffer, $DataBuffer$$Type} from "java.awt.image.DataBuffer"

export class $SampleModel {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getWidth"(): integer
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$$Type): (integer)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$$Type): (double)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$$Type): (float)[]
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$$Type): void
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$$Type): (double)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$$Type): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$$Type): (float)[]
public "getDataType"(): integer
public "createDataBuffer"(): $DataBuffer
public "createSubsetSampleModel"(arg0: (integer)[]): $SampleModel
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$$Type): double
public "getNumBands"(): integer
public "getDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$$Type): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$$Type): any
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$$Type): void
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getHeight"(): integer
public "getSampleSize"(arg0: integer): integer
public "getSampleSize"(): (integer)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$$Type): (integer)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$$Type): (float)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$$Type): (double)[]
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$$Type): void
public "getSample"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$$Type): integer
public "getNumDataElements"(): integer
public "getTransferType"(): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$$Type): float
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: $DataBuffer$$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $DataBuffer$$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double, arg4: $DataBuffer$$Type): void
get "width"(): integer
get "dataType"(): integer
get "numBands"(): integer
get "height"(): integer
get "sampleSize"(): (integer)[]
get "numDataElements"(): integer
get "transferType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleModel$$Type = ($SampleModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SampleModel$$Original = $SampleModel;}
declare module "java.awt.image.ImageObserver" {
import {$Image, $Image$$Type} from "java.awt.Image"

export interface $ImageObserver$$Interface {

(arg0: $Image, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
}

export class $ImageObserver implements $ImageObserver$$Interface {
static readonly "ABORT": integer
static readonly "PROPERTIES": integer
static readonly "SOMEBITS": integer
static readonly "ALLBITS": integer
static readonly "WIDTH": integer
static readonly "ERROR": integer
static readonly "HEIGHT": integer
static readonly "FRAMEBITS": integer

 "imageUpdate"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageObserver$$Type = ((arg0: $Image, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImageObserver$$Original = $ImageObserver;}
declare module "java.awt.image.TileObserver" {
import {$WritableRenderedImage, $WritableRenderedImage$$Type} from "java.awt.image.WritableRenderedImage"

export interface $TileObserver$$Interface {

(arg0: $WritableRenderedImage, arg1: integer, arg2: integer, arg3: boolean): void
}

export class $TileObserver implements $TileObserver$$Interface {
 "tileUpdate"(arg0: $WritableRenderedImage$$Type, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileObserver$$Type = ((arg0: $WritableRenderedImage, arg1: integer, arg2: integer, arg3: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TileObserver$$Original = $TileObserver;}
declare module "java.awt.image.IndexColorModel" {
import {$BufferedImage} from "java.awt.image.BufferedImage"
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$ColorModel} from "java.awt.image.ColorModel"
import {$WritableRaster} from "java.awt.image.WritableRaster"
import {$Raster$$Type} from "java.awt.image.Raster"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"

export class $IndexColorModel extends $ColorModel {
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[], arg5: (byte)[])
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: integer, arg4: boolean)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: integer, arg4: boolean, arg5: integer)
constructor(arg0: integer, arg1: integer, arg2: (integer)[], arg3: integer, arg4: integer, arg5: $BigInteger$$Type)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[], arg5: integer)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[])
constructor(arg0: integer, arg1: integer, arg2: (integer)[], arg3: integer, arg4: boolean, arg5: integer, arg6: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isValid"(): boolean
public "isValid"(arg0: integer): boolean
public "getRed"(arg0: integer): integer
public "getGreen"(arg0: integer): integer
public "getBlue"(arg0: integer): integer
public "getTransparency"(): integer
public "getTransparentPixel"(): integer
public "getRGBs"(arg0: (integer)[]): void
public "getDataElement"(arg0: (integer)[], arg1: integer): integer
public "getValidPixels"(): $BigInteger
public "getAlpha"(arg0: integer): integer
public "isCompatibleSampleModel"(arg0: $SampleModel$$Type): boolean
public "getReds"(arg0: (byte)[]): void
public "getGreens"(arg0: (byte)[]): void
public "getBlues"(arg0: (byte)[]): void
public "getAlphas"(arg0: (byte)[]): void
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public "getMapSize"(): integer
public "isCompatibleRaster"(arg0: $Raster$$Type): boolean
public "getComponentSize"(): (integer)[]
public "getDataElements"(arg0: (integer)[], arg1: integer, arg2: any): any
public "getDataElements"(arg0: integer, arg1: any): any
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getComponents"(arg0: any, arg1: (integer)[], arg2: integer): (integer)[]
public "getComponents"(arg0: integer, arg1: (integer)[], arg2: integer): (integer)[]
public "getRGB"(arg0: integer): integer
public "convertToIntDiscrete"(arg0: $Raster$$Type, arg1: boolean): $BufferedImage
get "valid"(): boolean
get "transparency"(): integer
get "transparentPixel"(): integer
get "validPixels"(): $BigInteger
get "mapSize"(): integer
get "componentSize"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndexColorModel$$Type = ($IndexColorModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndexColorModel$$Original = $IndexColorModel;}
declare module "java.awt.image.ImageConsumer" {
import {$Hashtable$$Type} from "java.util.Hashtable"
import {$ColorModel$$Type} from "java.awt.image.ColorModel"

export interface $ImageConsumer$$Interface {
set "properties"(value: $Hashtable$$Type<(never), (never)>)
set "colorModel"(value: $ColorModel$$Type)
set "hints"(value: integer)
}

export class $ImageConsumer implements $ImageConsumer$$Interface {
static readonly "STATICIMAGEDONE": integer
static readonly "SINGLEPASS": integer
static readonly "RANDOMPIXELORDER": integer
static readonly "TOPDOWNLEFTRIGHT": integer
static readonly "IMAGEERROR": integer
static readonly "SINGLEFRAMEDONE": integer
static readonly "SINGLEFRAME": integer
static readonly "COMPLETESCANLINES": integer
static readonly "IMAGEABORTED": integer

 "setProperties"(arg0: $Hashtable$$Type<(never), (never)>): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$$Type, arg5: (byte)[], arg6: integer, arg7: integer): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$$Type, arg5: (integer)[], arg6: integer, arg7: integer): void
 "imageComplete"(arg0: integer): void
 "setDimensions"(arg0: integer, arg1: integer): void
 "setColorModel"(arg0: $ColorModel$$Type): void
 "setHints"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageConsumer$$Type = ($ImageConsumer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImageConsumer$$Original = $ImageConsumer;}
