declare module "de.maxhenkel.opus4j.OpusEncoder$Application" {
import {$Enum} from "java.lang.Enum"

export class $OpusEncoder$Application extends $Enum<($OpusEncoder$Application)> {
static readonly "VOIP": $OpusEncoder$Application
static readonly "AUDIO": $OpusEncoder$Application
static readonly "LOW_DELAY": $OpusEncoder$Application

public static "values"(): ($OpusEncoder$Application)[]
public static "valueOf"(arg0: StringJS): $OpusEncoder$Application
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpusEncoder$Application$$Type = (("voip") | ("audio") | ("low_delay"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpusEncoder$Application$$Original = $OpusEncoder$Application;}
