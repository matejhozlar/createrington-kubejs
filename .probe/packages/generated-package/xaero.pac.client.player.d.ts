declare module "xaero.pac.client.player.config.api.IPlayerConfigClientStorageAPI" {
import {$IPlayerConfigOptionSpecAPI$$Type} from "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI"
import {$UUID} from "java.util.UUID"
import {$Comparable} from "java.lang.Comparable"
import {$List} from "java.util.List"
import {$IPlayerConfigStringableOptionClientStorageAPI} from "xaero.pac.client.player.config.api.IPlayerConfigStringableOptionClientStorageAPI"
import {$Stream} from "java.util.stream.Stream"
import {$PlayerConfigType} from "xaero.pac.common.server.player.config.api.PlayerConfigType"

export interface $IPlayerConfigClientStorageAPI$$Interface {
get "type"(): $PlayerConfigType
get "owner"(): $UUID
get "subConfigLimit"(): integer
get "subCount"(): integer
get "beingDeleted"(): boolean
get "subConfigIds"(): $List<(StringJS)>
get "subConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI)>
}

export class $IPlayerConfigClientStorageAPI implements $IPlayerConfigClientStorageAPI$$Interface {
 "getType"(): $PlayerConfigType
 "getOwner"(): $UUID
 "subConfigExists"(arg0: StringJS): boolean
 "getEffectiveSubConfig"(arg0: StringJS): $IPlayerConfigClientStorageAPI
 "getSubConfigLimit"(): integer
 "getSubCount"(): integer
 "getSubConfig"(arg0: StringJS): $IPlayerConfigClientStorageAPI
 "getOptionStorage"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): $IPlayerConfigStringableOptionClientStorageAPI<(never)>
 "optionStream"(): $Stream<($IPlayerConfigStringableOptionClientStorageAPI<(never)>)>
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(StringJS)>
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigClientStorageAPI$$Type = ($IPlayerConfigClientStorageAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerConfigClientStorageAPI$$Original = $IPlayerConfigClientStorageAPI;}
