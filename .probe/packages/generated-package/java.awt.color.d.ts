declare module "java.awt.color.ColorSpace" {
import {$Serializable$$Interface} from "java.io.Serializable"

export class $ColorSpace implements $Serializable$$Interface {
static readonly "TYPE_ECLR": integer
static readonly "TYPE_Lab": integer
static readonly "TYPE_Luv": integer
static readonly "TYPE_RGB": integer
static readonly "TYPE_GRAY": integer
static readonly "TYPE_CMY": integer
static readonly "TYPE_CCLR": integer
static readonly "TYPE_ACLR": integer
static readonly "TYPE_HSV": integer
static readonly "TYPE_YCbCr": integer
static readonly "TYPE_7CLR": integer
static readonly "CS_LINEAR_RGB": integer
static readonly "TYPE_9CLR": integer
static readonly "TYPE_5CLR": integer
static readonly "CS_sRGB": integer
static readonly "TYPE_3CLR": integer
static readonly "CS_PYCC": integer
static readonly "TYPE_XYZ": integer
static readonly "TYPE_FCLR": integer
static readonly "TYPE_DCLR": integer
static readonly "TYPE_HLS": integer
static readonly "TYPE_CMYK": integer
static readonly "TYPE_BCLR": integer
static readonly "CS_GRAY": integer
static readonly "TYPE_8CLR": integer
static readonly "TYPE_6CLR": integer
static readonly "TYPE_4CLR": integer
static readonly "TYPE_Yxy": integer
static readonly "TYPE_2CLR": integer
static readonly "CS_CIEXYZ": integer

public "getName"(arg0: integer): StringJS
public static "getInstance"(arg0: integer): $ColorSpace
public "getType"(): integer
public "getMinValue"(arg0: integer): float
public "getMaxValue"(arg0: integer): float
public "getNumComponents"(): integer
public "toRGB"(arg0: (float)[]): (float)[]
public "toCIEXYZ"(arg0: (float)[]): (float)[]
public "fromCIEXYZ"(arg0: (float)[]): (float)[]
public "isCS_sRGB"(): boolean
public "fromRGB"(arg0: (float)[]): (float)[]
get "type"(): integer
get "numComponents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorSpace$$Type = ($ColorSpace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorSpace$$Original = $ColorSpace;}
