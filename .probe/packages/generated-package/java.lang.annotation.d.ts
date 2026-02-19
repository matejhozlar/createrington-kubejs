declare module "java.lang.annotation.Annotation" {
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Annotation$$Interface {
}

export class $Annotation implements $Annotation$$Interface {
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "annotationType"(): $Class<($Annotation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Annotation$$Type = ($Annotation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Annotation$$Original = $Annotation;}
declare module "java.lang.annotation.ElementType" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ElementType extends $Enum<($ElementType)> {
static readonly "ANNOTATION_TYPE": $ElementType
static readonly "MODULE": $ElementType
static readonly "LOCAL_VARIABLE": $ElementType
static readonly "FIELD": $ElementType
static readonly "PACKAGE": $ElementType
static readonly "TYPE_PARAMETER": $ElementType
static readonly "METHOD": $ElementType
static readonly "RECORD_COMPONENT": $ElementType
static readonly "TYPE_USE": $ElementType
static readonly "CONSTRUCTOR": $ElementType
static readonly "TYPE": $ElementType
static readonly "PARAMETER": $ElementType

public static "values"(): ($ElementType)[]
public static "valueOf"(arg0: StringJS): $ElementType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementType$$Type = (("type") | ("field") | ("method") | ("parameter") | ("constructor") | ("local_variable") | ("annotation_type") | ("package") | ("type_parameter") | ("type_use") | ("module") | ("record_component"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElementType$$Original = $ElementType;}
