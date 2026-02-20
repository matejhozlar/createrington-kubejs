declare module "xaero.lib.client.level.IClientLevel" {
import {$ClientLevelData, $ClientLevelData$$Type} from "xaero.lib.client.level.ClientLevelData"

export interface $IClientLevel$$Interface {
}

export class $IClientLevel implements $IClientLevel$$Interface {
 "xaerolib_setData"(arg0: $ClientLevelData$$Type): void
 "xaerolib_getData"(): $ClientLevelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientLevel$$Type = ($IClientLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientLevel$$Original = $IClientLevel;}
declare module "xaero.lib.client.level.ClientLevelData" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"

export class $ClientLevelData {
constructor()

public static "get"(arg0: $ClientLevel$$Type): $ClientLevelData
public "serverHasMod"(): boolean
public "setServerHasMod"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelData$$Type = ($ClientLevelData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLevelData$$Original = $ClientLevelData;}
