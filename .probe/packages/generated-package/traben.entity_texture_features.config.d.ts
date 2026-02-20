declare module "traben.entity_texture_features.config.ETFConfig$EmissiveRenderModes" {
import {$Enum} from "java.lang.Enum"

export class $ETFConfig$EmissiveRenderModes extends $Enum<($ETFConfig$EmissiveRenderModes)> {
static readonly "DULL": $ETFConfig$EmissiveRenderModes
static readonly "BRIGHT": $ETFConfig$EmissiveRenderModes

public "toString"(): StringJS
public static "values"(): ($ETFConfig$EmissiveRenderModes)[]
public static "valueOf"(name: StringJS): $ETFConfig$EmissiveRenderModes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFConfig$EmissiveRenderModes$$Type = (("dull") | ("bright"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFConfig$EmissiveRenderModes$$Original = $ETFConfig$EmissiveRenderModes;}
