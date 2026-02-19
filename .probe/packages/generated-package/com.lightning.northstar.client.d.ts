declare module "com.lightning.northstar.client.TilingAnchor" {
import {$Enum} from "java.lang.Enum"

export class $TilingAnchor extends $Enum<($TilingAnchor)> {
static readonly "TOP_LEFT": $TilingAnchor
static readonly "BOTTOM_RIGHT": $TilingAnchor
readonly "left": boolean
readonly "bottom": boolean
static readonly "TOP_RIGHT": $TilingAnchor
static readonly "BOTTOM_LEFT": $TilingAnchor

public static "values"(): ($TilingAnchor)[]
public static "valueOf"(name: StringJS): $TilingAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TilingAnchor$$Type = (("bottom_left") | ("bottom_right") | ("top_left") | ("top_right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TilingAnchor$$Original = $TilingAnchor;}
