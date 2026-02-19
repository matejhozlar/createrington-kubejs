declare module "net.neoforged.api.distmarker.Dist" {
import {$Enum} from "java.lang.Enum"

export class $Dist extends $Enum<($Dist)> {
static readonly "DEDICATED_SERVER": $Dist
static readonly "CLIENT": $Dist

public static "values"(): ($Dist)[]
public static "valueOf"(arg0: StringJS): $Dist
public "isClient"(): boolean
public "isDedicatedServer"(): boolean
get "client"(): boolean
get "dedicatedServer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dist$$Type = (("client") | ("dedicated_server"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dist$$Original = $Dist;}
