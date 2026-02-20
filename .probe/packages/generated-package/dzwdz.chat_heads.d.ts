declare module "dzwdz.chat_heads.HeadData" {
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$Record} from "java.lang.Record"

export class $HeadData extends $Record {
static "EMPTY": $HeadData

constructor(playerInfo: $PlayerInfo$$Type, codePointIndex: integer)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(playerInfo: $PlayerInfo$$Type): $HeadData
public "playerInfo"(): $PlayerInfo
public "hasHeadPosition"(): boolean
public "codePointIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadData$$Type = ({"codePointIndex"?: integer, "playerInfo"?: $PlayerInfo$$Type}) | ([codePointIndex?: integer, playerInfo?: $PlayerInfo$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeadData$$Original = $HeadData;}
