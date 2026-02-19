declare module "plus.dragons.createdragonsplus.mixin.neoforge.ExistingFileHelperAccessor" {
import {$PackType, $PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export interface $ExistingFileHelperAccessor$$Interface {

(arg0: $PackType): $ResourceManager$$Type
}

export class $ExistingFileHelperAccessor implements $ExistingFileHelperAccessor$$Interface {
 "invokeGetManager"(arg0: $PackType$$Type): $ResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelperAccessor$$Type = ((arg0: $PackType) => $ResourceManager$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExistingFileHelperAccessor$$Original = $ExistingFileHelperAccessor;}
declare module "plus.dragons.createdragonsplus.mixin.minecraft.RecipeManagerAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccessor$$Interface {
get "byName"(): $Map<($ResourceLocation), ($RecipeHolder<(never)>)>
set "byType"(value: $Multimap$$Type<($RecipeType$$Type<(never)>), ($RecipeHolder$$Type<(never)>)>)
set "byName"(value: $Map$$Type<($ResourceLocation$$Type), ($RecipeHolder$$Type<(never)>)>)
get "byType"(): $Multimap<($RecipeType<(never)>), ($RecipeHolder<(never)>)>
}

export class $RecipeManagerAccessor implements $RecipeManagerAccessor$$Interface {
 "getByName"(): $Map<($ResourceLocation), ($RecipeHolder<(never)>)>
 "setByType"(arg0: $Multimap$$Type<($RecipeType$$Type<(never)>), ($RecipeHolder$$Type<(never)>)>): void
 "setByName"(arg0: $Map$$Type<($ResourceLocation$$Type), ($RecipeHolder$$Type<(never)>)>): void
 "getByType"(): $Multimap<($RecipeType<(never)>), ($RecipeHolder<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccessor$$Type = ($RecipeManagerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeManagerAccessor$$Original = $RecipeManagerAccessor;}
