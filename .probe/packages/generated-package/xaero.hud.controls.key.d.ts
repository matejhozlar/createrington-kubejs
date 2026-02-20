declare module "xaero.hud.controls.key.KeyMappingControllerManager" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$KeyMappingFunction$$Type} from "xaero.hud.controls.key.function.KeyMappingFunction"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$KeyMappingController, $KeyMappingController$$Type} from "xaero.hud.controls.key.KeyMappingController"

export class $KeyMappingControllerManager implements $Iterable$$Interface<($KeyMappingController)> {
constructor()

public "iterator"(): $Iterator<($KeyMappingController)>
public "getController"(arg0: $KeyMapping$$Type): $KeyMappingController
public "registerFunction"(arg0: $KeyMapping$$Type, arg1: $KeyMappingFunction$$Type): void
public "registerController"(arg0: $KeyMapping$$Type, arg1: boolean, arg2: $Consumer$$Type<($KeyMapping)>): void
public "registerController"(arg0: $KeyMapping$$Type, arg1: boolean): void
public "spliterator"(): $Spliterator<($KeyMappingController)>
public "forEach"(arg0: $Consumer$$Type<($KeyMappingController)>): void
[Symbol.iterator](): IterableIterator<$KeyMappingController>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingControllerManager$$Type = ($KeyMappingControllerManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingControllerManager$$Original = $KeyMappingControllerManager;}
declare module "xaero.hud.controls.key.KeyMappingTickHandler" {
import {$KeyMappingControllerManager$$Type} from "xaero.hud.controls.key.KeyMappingControllerManager"

export class $KeyMappingTickHandler {
static "DISABLE_KEY_MAPPING_OVERRIDES": boolean

constructor(arg0: $KeyMappingControllerManager$$Type)

public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingTickHandler$$Type = ($KeyMappingTickHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingTickHandler$$Original = $KeyMappingTickHandler;}
declare module "xaero.hud.controls.key.function.KeyMappingFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyMappingFunction {
public "onRelease"(): void
public "isHeld"(): boolean
public "onPress"(): void
get "held"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingFunction$$Type = ($KeyMappingFunction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingFunction$$Original = $KeyMappingFunction;}
declare module "xaero.hud.controls.key.KeyMappingController" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable, $Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$KeyMappingFunction, $KeyMappingFunction$$Type} from "xaero.hud.controls.key.function.KeyMappingFunction"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $KeyMappingController implements $Iterable$$Interface<($KeyMappingFunction)> {
constructor(arg0: $KeyMapping$$Type, arg1: boolean)

public "add"(arg0: $KeyMappingFunction$$Type): void
public "iterator"(): $Iterator<($KeyMappingFunction)>
public "isPressed"(): boolean
public "getKeyMapping"(): $KeyMapping
public "isXaeroKey"(): boolean
public "getFunctions"(): $Iterable<($KeyMappingFunction)>
public "setPressed"(arg0: boolean): void
public "spliterator"(): $Spliterator<($KeyMappingFunction)>
public "forEach"(arg0: $Consumer$$Type<($KeyMappingFunction)>): void
[Symbol.iterator](): IterableIterator<$KeyMappingFunction>;
get "pressed"(): boolean
get "keyMapping"(): $KeyMapping
get "xaeroKey"(): boolean
get "functions"(): $Iterable<($KeyMappingFunction)>
set "pressed"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingController$$Type = ($KeyMappingController);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingController$$Original = $KeyMappingController;}
