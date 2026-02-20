declare module "xaero.common.server.level.LevelMapProperties" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BufferedReader$$Type} from "java.io.BufferedReader"
import {$PrintWriter$$Type} from "java.io.PrintWriter"

export class $LevelMapProperties {
constructor()

public "write"(arg0: $FriendlyByteBuf$$Type): void
public "write"(arg0: $PrintWriter$$Type): void
public "read"(arg0: $BufferedReader$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $LevelMapProperties
public "getId"(): integer
public "isUsable"(): boolean
public "setUsable"(arg0: boolean): void
get "id"(): integer
get "usable"(): boolean
set "usable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelMapProperties$$Type = ($LevelMapProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelMapProperties$$Original = $LevelMapProperties;}
