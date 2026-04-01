declare module "xaero.pac.client.player.config.api.IPlayerConfigClientStorageAPI" {
import {$IPlayerConfigOptionSpecAPI$$Type} from "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI"
import {$Comparable} from "java.lang.Comparable"
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"
import {$IPlayerConfigStringableOptionClientStorageAPI} from "xaero.pac.client.player.config.api.IPlayerConfigStringableOptionClientStorageAPI"
import {$Stream} from "java.util.stream.Stream"
import {$PlayerConfigType} from "xaero.pac.common.server.player.config.api.PlayerConfigType"

export interface $IPlayerConfigClientStorageAPI$$Interface {
get "type"(): $PlayerConfigType
get "owner"(): $UUID
get "subConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI)>
get "subConfigIds"(): $List<(StringJS)>
get "beingDeleted"(): boolean
get "subConfigLimit"(): integer
get "subCount"(): integer
}

export class $IPlayerConfigClientStorageAPI implements $IPlayerConfigClientStorageAPI$$Interface {
 "getType"(): $PlayerConfigType
 "getOwner"(): $UUID
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI)>
 "getSubConfigIds"(): $List<(StringJS)>
 "optionStream"(): $Stream<($IPlayerConfigStringableOptionClientStorageAPI<(never)>)>
 "isBeingDeleted"(): boolean
 "getOptionStorage"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): $IPlayerConfigStringableOptionClientStorageAPI<(never)>
 "getEffectiveSubConfig"(arg0: StringJS): $IPlayerConfigClientStorageAPI
 "getSubConfig"(arg0: StringJS): $IPlayerConfigClientStorageAPI
 "subConfigExists"(arg0: StringJS): boolean
 "getSubConfigLimit"(): integer
 "getSubCount"(): integer
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
