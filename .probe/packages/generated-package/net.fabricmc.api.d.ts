declare module "net.fabricmc.api.EnvType" {
import {$Enum} from "java.lang.Enum"

export class $EnvType extends $Enum<($EnvType)> {
static readonly "SERVER": $EnvType
static readonly "CLIENT": $EnvType

public static "values"(): ($EnvType)[]
public static "valueOf"(name: StringJS): $EnvType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnvType$$Type = (("client") | ("server"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnvType$$Original = $EnvType;}
