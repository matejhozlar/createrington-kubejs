import { $BigInteger } from "@package/java/math";
import { $Rectangle2D, $Point2D } from "@package/java/awt/geom";
import { $ColorSpace } from "@package/java/awt/color";
import { $RenderingHints, $Point, $ImageCapabilities, $GraphicsConfiguration, $Graphics2D, $BufferCapabilities, $Image, $Transparency, $Graphics, $Rectangle } from "@package/java/awt";
import { $Object } from "@package/java/lang";
import { $Vector, $Hashtable } from "@package/java/util";
export * as renderable from "@package/java/awt/image/renderable";

declare module "@package/java/awt/image" {
    export class $Raster {
        getBounds(): $Rectangle;
        getParent(): $Raster;
        getWidth(): number;
        createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $Raster;
        getMinX(): number;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): $Object;
        getDataElements(arg0: number, arg1: number, arg2: $Object): $Object;
        getSampleFloat(arg0: number, arg1: number, arg2: number): number;
        getSampleDouble(arg0: number, arg1: number, arg2: number): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSampleModelTranslateX(): number;
        getSampleModelTranslateY(): number;
        createTranslatedChild(arg0: number, arg1: number): $Raster;
        static createWritableRaster(arg0: $SampleModel, arg1: $Point): $WritableRaster;
        static createWritableRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $Point): $WritableRaster;
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: $Point): $WritableRaster;
        static createRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $Raster;
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getHeight(): number;
        getDataBuffer(): $DataBuffer;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createBandedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        getSampleModel(): $SampleModel;
        getNumBands(): number;
        getNumDataElements(): number;
        getMinY(): number;
        getSample(arg0: number, arg1: number, arg2: number): number;
        getTransferType(): number;
        createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): $WritableRaster;
        createCompatibleWritableRaster(arg0: $Rectangle): $WritableRaster;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        createCompatibleWritableRaster(): $WritableRaster;
        get bounds(): $Rectangle;
        get parent(): $Raster;
        get width(): number;
        get minX(): number;
        get sampleModelTranslateX(): number;
        get sampleModelTranslateY(): number;
        get height(): number;
        get dataBuffer(): $DataBuffer;
        get sampleModel(): $SampleModel;
        get numBands(): number;
        get numDataElements(): number;
        get minY(): number;
        get transferType(): number;
    }
    export class $WritableRenderedImage {
    }
    export interface $WritableRenderedImage extends $RenderedImage {
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        releaseWritableTile(arg0: number, arg1: number): void;
        setData(arg0: $Raster): void;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        get writableTileIndices(): $Point[];
        set data(value: $Raster);
    }
    export class $BufferedImage extends $Image implements $WritableRenderedImage, $Transparency {
        getProperty(arg0: string): $Object;
        getType(): number;
        getData(arg0: $Rectangle): $Raster;
        getData(): $Raster;
        getWidth(): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
        setRGB(arg0: number, arg1: number, arg2: number): void;
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        releaseWritableTile(arg0: number, arg1: number): void;
        getMinX(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        setData(arg0: $Raster): void;
        copyData(arg0: $WritableRaster): $WritableRaster;
        getPropertyNames(): string[];
        getRGB(arg0: number, arg1: number): number;
        getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
        coerceData(arg0: boolean): void;
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTile(arg0: number, arg1: number): $Raster;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        getSources(): $Vector<$RenderedImage>;
        getHeight(): number;
        getTransparency(): number;
        getColorModel(): $ColorModel;
        createGraphics(): $Graphics2D;
        getRaster(): $WritableRaster;
        getSampleModel(): $SampleModel;
        getAlphaRaster(): $WritableRaster;
        getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): $BufferedImage;
        getMinY(): number;
        isAlphaPremultiplied(): boolean;
        static TYPE_3BYTE_BGR: number;
        static TYPE_USHORT_565_RGB: number;
        static TYPE_INT_ARGB_PRE: number;
        static TYPE_USHORT_555_RGB: number;
        static TYPE_USHORT_GRAY: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static TYPE_BYTE_INDEXED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static TYPE_4BYTE_ABGR: number;
        static TYPE_INT_ARGB: number;
        static SCALE_DEFAULT: number;
        static TYPE_CUSTOM: number;
        static TYPE_INT_RGB: number;
        static TYPE_INT_BGR: number;
        static UndefinedProperty: $Object;
        static TYPE_BYTE_GRAY: number;
        static TYPE_4BYTE_ABGR_PRE: number;
        static TYPE_BYTE_BINARY: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $IndexColorModel);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ColorModel, arg1: $WritableRaster, arg2: boolean, arg3: $Hashtable<never, never>);
        get type(): number;
        get width(): number;
        get writableTileIndices(): $Point[];
        get minX(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get propertyNames(): string[];
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get sources(): $Vector<$RenderedImage>;
        get height(): number;
        get transparency(): number;
        get colorModel(): $ColorModel;
        get raster(): $WritableRaster;
        get sampleModel(): $SampleModel;
        get alphaRaster(): $WritableRaster;
        get minY(): number;
        get alphaPremultiplied(): boolean;
    }
    export class $VolatileImage extends $Image implements $Transparency {
        validate(arg0: $GraphicsConfiguration): number;
        getWidth(): number;
        getCapabilities(): $ImageCapabilities;
        getSnapshot(): $BufferedImage;
        contentsLost(): boolean;
        getHeight(): number;
        getTransparency(): number;
        createGraphics(): $Graphics2D;
        static SCALE_DEFAULT: number;
        static UndefinedProperty: $Object;
        static IMAGE_OK: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static IMAGE_RESTORED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static IMAGE_INCOMPATIBLE: number;
        get width(): number;
        get capabilities(): $ImageCapabilities;
        get snapshot(): $BufferedImage;
        get height(): number;
        get transparency(): number;
    }
    export class $BufferStrategy {
        dispose(): void;
        getDrawGraphics(): $Graphics;
        contentsRestored(): boolean;
        getCapabilities(): $BufferCapabilities;
        contentsLost(): boolean;
        show(): void;
        get drawGraphics(): $Graphics;
        get capabilities(): $BufferCapabilities;
    }
    export class $ImageObserver {
        static ABORT: number;
        static PROPERTIES: number;
        static SOMEBITS: number;
        static ALLBITS: number;
        static WIDTH: number;
        static ERROR: number;
        static HEIGHT: number;
        static FRAMEBITS: number;
    }
    export interface $ImageObserver {
        imageUpdate(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ImageObserver}.
     */
    export type $ImageObserver_ = ((arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => boolean);
    export class $ImageConsumer {
        static STATICIMAGEDONE: number;
        static SINGLEPASS: number;
        static RANDOMPIXELORDER: number;
        static TOPDOWNLEFTRIGHT: number;
        static IMAGEERROR: number;
        static SINGLEFRAMEDONE: number;
        static SINGLEFRAME: number;
        static COMPLETESCANLINES: number;
        static IMAGEABORTED: number;
    }
    export interface $ImageConsumer {
        setProperties(arg0: $Hashtable<never, never>): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        imageComplete(arg0: number): void;
        setHints(arg0: number): void;
        setDimensions(arg0: number, arg1: number): void;
        setColorModel(arg0: $ColorModel): void;
        set properties(value: $Hashtable<never, never>);
        set hints(value: number);
        set colorModel(value: $ColorModel);
    }
    export class $ColorModel implements $Transparency {
        getComponents(arg0: number, arg1: number[], arg2: number): number[];
        getComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        getNumColorComponents(): number;
        getDataElements(arg0: number, arg1: $Object): $Object;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getNormalizedComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getDataElement(arg0: number[], arg1: number): number;
        getDataElement(arg0: number[], arg1: number): number;
        static getRGBdefault(): $ColorModel;
        getPixelSize(): number;
        getRGB(arg0: number): number;
        getRGB(arg0: $Object): number;
        coerceData(arg0: $WritableRaster, arg1: boolean): $ColorModel;
        isCompatibleRaster(arg0: $Raster): boolean;
        isCompatibleSampleModel(arg0: $SampleModel): boolean;
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        getAlpha(arg0: $Object): number;
        getAlpha(arg0: number): number;
        getGreen(arg0: $Object): number;
        getGreen(arg0: number): number;
        getBlue(arg0: $Object): number;
        getBlue(arg0: number): number;
        getRed(arg0: number): number;
        getRed(arg0: $Object): number;
        getTransparency(): number;
        getComponentSize(): number[];
        getComponentSize(arg0: number): number;
        hasAlpha(): boolean;
        getAlphaRaster(arg0: $WritableRaster): $WritableRaster;
        getNumComponents(): number;
        getColorSpace(): $ColorSpace;
        getTransferType(): number;
        isAlphaPremultiplied(): boolean;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        constructor(arg0: number);
        get numColorComponents(): number;
        static get RGBdefault(): $ColorModel;
        get pixelSize(): number;
        get transparency(): number;
        get numComponents(): number;
        get colorSpace(): $ColorSpace;
        get transferType(): number;
        get alphaPremultiplied(): boolean;
    }
    export class $IndexColorModel extends $ColorModel {
        isValid(arg0: number): boolean;
        isValid(): boolean;
        getTransparentPixel(): number;
        getRGBs(arg0: number[]): void;
        getValidPixels(): $BigInteger;
        getMapSize(): number;
        getReds(arg0: number[]): void;
        getGreens(arg0: number[]): void;
        getBlues(arg0: number[]): void;
        getAlphas(arg0: number[]): void;
        convertToIntDiscrete(arg0: $Raster, arg1: boolean): $BufferedImage;
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: $BigInteger);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
        get transparentPixel(): number;
        get validPixels(): $BigInteger;
        get mapSize(): number;
    }
    export class $DataBuffer {
        getSize(): number;
        getOffset(): number;
        getOffsets(): number[];
        getElem(arg0: number): number;
        getElem(arg0: number, arg1: number): number;
        setElem(arg0: number, arg1: number, arg2: number): void;
        setElem(arg0: number, arg1: number): void;
        static getDataTypeSize(arg0: number): number;
        getNumBanks(): number;
        getElemFloat(arg0: number, arg1: number): number;
        getElemFloat(arg0: number): number;
        setElemFloat(arg0: number, arg1: number, arg2: number): void;
        setElemFloat(arg0: number, arg1: number): void;
        getElemDouble(arg0: number, arg1: number): number;
        getElemDouble(arg0: number): number;
        setElemDouble(arg0: number, arg1: number, arg2: number): void;
        setElemDouble(arg0: number, arg1: number): void;
        getDataType(): number;
        static TYPE_INT: number;
        static TYPE_DOUBLE: number;
        static TYPE_SHORT: number;
        static TYPE_UNDEFINED: number;
        static TYPE_BYTE: number;
        static TYPE_USHORT: number;
        static TYPE_FLOAT: number;
        get size(): number;
        get offset(): number;
        get offsets(): number[];
        get numBanks(): number;
        get dataType(): number;
    }
    export class $ImageProducer {
    }
    export interface $ImageProducer {
        startProduction(arg0: $ImageConsumer): void;
        addConsumer(arg0: $ImageConsumer): void;
        isConsumer(arg0: $ImageConsumer): boolean;
        removeConsumer(arg0: $ImageConsumer): void;
        requestTopDownLeftRightResend(arg0: $ImageConsumer): void;
    }
    export class $RenderedImage {
    }
    export interface $RenderedImage {
        getProperty(arg0: string): $Object;
        getData(): $Raster;
        getData(arg0: $Rectangle): $Raster;
        getWidth(): number;
        getMinX(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        copyData(arg0: $WritableRaster): $WritableRaster;
        getPropertyNames(): string[];
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTile(arg0: number, arg1: number): $Raster;
        getSources(): $Vector<$RenderedImage>;
        getHeight(): number;
        getColorModel(): $ColorModel;
        getSampleModel(): $SampleModel;
        getMinY(): number;
        get width(): number;
        get minX(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get propertyNames(): string[];
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get sources(): $Vector<$RenderedImage>;
        get height(): number;
        get colorModel(): $ColorModel;
        get sampleModel(): $SampleModel;
        get minY(): number;
    }
    export class $TileObserver {
    }
    export interface $TileObserver {
        tileUpdate(arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $TileObserver}.
     */
    export type $TileObserver_ = ((arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean) => void);
    export class $BufferedImageOp {
    }
    export interface $BufferedImageOp {
        filter(arg0: $BufferedImage, arg1: $BufferedImage): $BufferedImage;
        getPoint2D(arg0: $Point2D, arg1: $Point2D): $Point2D;
        getRenderingHints(): $RenderingHints;
        createCompatibleDestImage(arg0: $BufferedImage, arg1: $ColorModel): $BufferedImage;
        getBounds2D(arg0: $BufferedImage): $Rectangle2D;
        get renderingHints(): $RenderingHints;
    }
    export class $SampleModel {
        getWidth(): number;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): $Object;
        getDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): $Object;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): void;
        setDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): void;
        getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        getHeight(): number;
        createDataBuffer(): $DataBuffer;
        createSubsetSampleModel(arg0: number[]): $SampleModel;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        getNumBands(): number;
        getSampleSize(arg0: number): number;
        getSampleSize(): number[];
        getDataType(): number;
        getNumDataElements(): number;
        getSample(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getTransferType(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get width(): number;
        get height(): number;
        get numBands(): number;
        get dataType(): number;
        get numDataElements(): number;
        get transferType(): number;
    }
    export class $WritableRaster extends $Raster {
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setDataElements(arg0: number, arg1: number, arg2: $Raster): void;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): void;
        setDataElements(arg0: number, arg1: number, arg2: $Object): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $WritableRaster;
        setRect(arg0: $Raster): void;
        setRect(arg0: number, arg1: number, arg2: $Raster): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        getWritableParent(): $WritableRaster;
        createWritableTranslatedChild(arg0: number, arg1: number): $WritableRaster;
        get writableParent(): $WritableRaster;
    }
}
