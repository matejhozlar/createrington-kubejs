declare module "com.possible_triangle.sliceanddice.mixins.RecipeManagerAccessor" {
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
