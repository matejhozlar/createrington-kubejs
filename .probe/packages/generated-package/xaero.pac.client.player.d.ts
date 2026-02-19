declare module "xaero.pac.client.player.config.api.IPlayerConfigClientStorageAPI" {
import {$IPlayerConfigOptionSpecAPI$$Type} from "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI"
import {$Comparable} from "java.lang.Comparable"
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"
import {$IPlayerConfigStringableOptionClientStorageAPI} from "xaero.pac.client.player.config.api.IPlayerConfigStringableOptionClientStorageAPI"
import {$Stream} from "java.util.stream.Stream"
import {$PlayerConfigType} from "xaero.pac.common.server.player.config.api.PlayerConfigType"

export interface $IPlayerConfigClientStorageAPI$$Interface {
get "subCount"(): integer
get "subConfigLimit"(): integer
get "type"(): $PlayerConfigType
get "owner"(): $UUID
get "subConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI)>
get "beingDeleted"(): boolean
get "subConfigIds"(): $List<(StringJS)>
}

export class $IPlayerConfigClientStorageAPI implements $IPlayerConfigClientStorageAPI$$Interface {
 "getSubCount"(): integer
 "getSubConfigLimit"(): integer
 "getSubConfig"(arg0: StringJS): $IPlayerConfigClientStorageAPI
 "getType"(): $PlayerConfigType
 "getOwner"(): $UUID
 "getEffectiveSubConfig"(arg0: StringJS): $IPlayerConfigClientStorageAPI
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI)>
 "getOptionStorage"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): $IPlayerConfigStringableOptionClientStorageAPI<(never)>
 "subConfigExists"(arg0: StringJS): boolean
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(StringJS)>
 "optionStream"(): $Stream<($IPlayerConfigStringableOptionClientStorageAPI<(never)>)>
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
