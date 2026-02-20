declare module "com.jesz.createdieselgenerators.compat.kubejs.LighterSkinsEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Map} from "java.util.Map"

export class $LighterSkinsEventJS implements $KubeEvent$$Interface {
static readonly "removedIds": $Map<(StringJS), (StringJS)>
static readonly "addedIds": $Map<(StringJS), (StringJS)>

constructor()

/**
 * Removes a new lighter skin
 */
public "remove"(arg0: StringJS, arg1: StringJS): void
/**
 * Adds a new lighter skin
 */
public "create"(arg0: StringJS, arg1: StringJS): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LighterSkinsEventJS$$Type = ($LighterSkinsEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LighterSkinsEventJS$$Original = $LighterSkinsEventJS;}
declare module "com.jesz.createdieselgenerators.compat.kubejs.MoldEventJS" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$KubeStartupEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeStartupEvent"

export class $MoldEventJS implements $KubeStartupEvent$$Interface {
static "addedMolds": $Map<($ResourceLocation), (StringJS)>

constructor()

/**
 * Adds new mold types used for compression molding and casting recipes
 */
public "create"(arg0: StringJS, arg1: StringJS): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoldEventJS$$Type = ($MoldEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MoldEventJS$$Original = $MoldEventJS;}
declare module "com.jesz.createdieselgenerators.compat.kubejs.GetChunkOilAmountEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ChunkPos} from "net.minecraft.world.level.ChunkPos"

export class $GetChunkOilAmountEventJS implements $KubeEvent$$Interface {
 "chunkPos": $ChunkPos
 "seed": long
 "biomes": (StringJS)[]

constructor()

/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetChunkOilAmountEventJS$$Type = ($GetChunkOilAmountEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GetChunkOilAmountEventJS$$Original = $GetChunkOilAmountEventJS;}
