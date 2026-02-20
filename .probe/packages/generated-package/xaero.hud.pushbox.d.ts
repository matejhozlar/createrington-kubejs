declare module "xaero.hud.pushbox.PushboxManager" {
import {$Iterable} from "java.lang.Iterable"
import {$PushBox, $PushBox$$Type} from "xaero.hud.pushbox.PushBox"

export class $PushboxManager {
constructor()

public "add"(arg0: $PushBox$$Type): void
public "getAll"(): $Iterable<($PushBox)>
get "all"(): $Iterable<($PushBox)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxManager$$Type = ($PushboxManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PushboxManager$$Original = $PushboxManager;}
declare module "xaero.hud.pushbox.PushboxHandler$State" {
import {$ModuleSession$$Type} from "xaero.hud.module.ModuleSession"

export class $PushboxHandler$State {
 "w": integer
 "x": integer
 "h": integer
 "y": integer

constructor()

public "resetForModule"(arg0: $ModuleSession$$Type<(never)>, arg1: integer, arg2: integer, arg3: double): $PushboxHandler$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxHandler$State$$Type = ($PushboxHandler$State);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PushboxHandler$State$$Original = $PushboxHandler$State;}
declare module "xaero.hud.pushbox.PushboxHandler" {
import {$PushboxManager$$Type} from "xaero.hud.pushbox.PushboxManager"
import {$PushboxHandler$State$$Type} from "xaero.hud.pushbox.PushboxHandler$State"

export class $PushboxHandler {
constructor()

public "updateAll"(arg0: $PushboxManager$$Type): void
public "postUpdateAll"(arg0: $PushboxManager$$Type): void
public "applyPushboxes"(arg0: $PushboxManager$$Type, arg1: $PushboxHandler$State$$Type, arg2: integer, arg3: integer, arg4: double): void
public "applyScreenEdges"(arg0: $PushboxHandler$State$$Type, arg1: integer, arg2: integer, arg3: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxHandler$$Type = ($PushboxHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PushboxHandler$$Original = $PushboxHandler;}
