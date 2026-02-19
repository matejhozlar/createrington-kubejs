declare module "org.slf4j.event.Level" {
import {$Enum} from "java.lang.Enum"

export class $Level extends $Enum<($Level)> {
static readonly "TRACE": $Level
static readonly "ERROR": $Level
static readonly "INFO": $Level
static readonly "DEBUG": $Level
static readonly "WARN": $Level

public "toString"(): StringJS
public static "values"(): ($Level)[]
public static "valueOf"(arg0: StringJS): $Level
public static "intToLevel"(arg0: integer): $Level
public "toInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Level$$Type = (("error") | ("warn") | ("info") | ("debug") | ("trace"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Level$$Original = $Level;}
