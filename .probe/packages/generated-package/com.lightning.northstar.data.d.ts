declare module "com.lightning.northstar.data.Tags$Tag" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"

export interface $Tags$Tag$$Interface<T> {

(): $TagKey$$Type<(T)>
}

export class $Tags$Tag<T> implements $Tags$Tag$$Interface {
 "tag"(): $TagKey<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tags$Tag$$Type<T> = (() => $TagKey$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tags$Tag$$Original<T> = $Tags$Tag<(T)>;}
declare module "com.lightning.northstar.data.Mod" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Runnable$$Type} from "java.lang.Runnable"

export interface $Mod$$Interface {

(): StringJS
get "loaded"(): boolean
get "modId"(): StringJS
}

export class $Mod implements $Mod$$Interface {
 "loc"(path: StringJS): $ResourceLocation
 "isLoaded"(): boolean
 "getItem"(id: StringJS): $Item
 "getModId"(): StringJS
 "getBlock"(id: StringJS): $Block
 "executeIfLoaded"(action: $Supplier$$Type<($Runnable$$Type)>): void
 "runIfLoaded"<T>(action: $Supplier$$Type<($Supplier$$Type<(T)>)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mod$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Mod$$Original = $Mod;}
