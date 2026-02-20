declare module "xaero.hud.minimap.info.InfoDisplays" {
import {$InfoDisplayManager} from "xaero.hud.minimap.info.InfoDisplayManager"
import {$InfoDisplayRenderer} from "xaero.hud.minimap.info.render.InfoDisplayRenderer"
import {$InfoDisplayIO, $InfoDisplayIO$$Type} from "xaero.hud.minimap.info.InfoDisplayIO"

export class $InfoDisplays {
constructor(arg0: $InfoDisplayIO$$Type)

public "getRenderer"(): $InfoDisplayRenderer
public "getManager"(): $InfoDisplayManager
public "clearStateCache"(): void
public "getIo"(): $InfoDisplayIO
get "renderer"(): $InfoDisplayRenderer
get "manager"(): $InfoDisplayManager
get "io"(): $InfoDisplayIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplays$$Type = ($InfoDisplays);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfoDisplays$$Original = $InfoDisplays;}
declare module "xaero.hud.minimap.info.InfoDisplayIO" {
import {$InfoDisplayManagerConfigData, $InfoDisplayManagerConfigData$$Type} from "xaero.hud.minimap.common.config.info.config.InfoDisplayManagerConfigData"

export class $InfoDisplayIO {
constructor()

public "decode"(arg0: StringJS): $InfoDisplayManagerConfigData
public "encode"(arg0: $InfoDisplayManagerConfigData$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayIO$$Type = ($InfoDisplayIO);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfoDisplayIO$$Original = $InfoDisplayIO;}
