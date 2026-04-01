declare module "umpaz.brewinandchewin.common.mixin.DataFixTypesAccessor" {
import {$DSL$TypeReference, $DSL$TypeReference$$Type} from "com.mojang.datafixers.DSL$TypeReference"

export interface $DataFixTypesAccessor$$Interface {

(): $DSL$TypeReference$$Type
}

export class $DataFixTypesAccessor implements $DataFixTypesAccessor$$Interface {
 "brewinandchewin$getType"(): $DSL$TypeReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFixTypesAccessor$$Type = (() => $DSL$TypeReference$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataFixTypesAccessor$$Original = $DataFixTypesAccessor;}
declare module "umpaz.brewinandchewin.common.mixin.client.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor$$Interface {

(): integer
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "brewinandchewin$getTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "umpaz.brewinandchewin.common.mixin.LootContextAccessor" {
import {$LootParams, $LootParams$$Type} from "net.minecraft.world.level.storage.loot.LootParams"

export interface $LootContextAccessor$$Interface {

(): $LootParams$$Type
}

export class $LootContextAccessor implements $LootContextAccessor$$Interface {
 "brewinandchewin$getParams"(): $LootParams
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextAccessor$$Type = (() => $LootParams$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootContextAccessor$$Original = $LootContextAccessor;}
declare module "umpaz.brewinandchewin.common.mixin.LootParamsAccessor" {
import {$LootContextParam, $LootContextParam$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $LootParamsAccessor$$Interface {

(): $Map$$Type<($LootContextParam$$Type<(never)>), (any)>
}

export class $LootParamsAccessor implements $LootParamsAccessor$$Interface {
 "brewinandchewin$getParams"(): $Map<($LootContextParam<(never)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootParamsAccessor$$Type = (() => $Map$$Type<($LootContextParam$$Type<(never)>), (any)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootParamsAccessor$$Original = $LootParamsAccessor;}
declare module "umpaz.brewinandchewin.common.mixin.client.ModelBakeryAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelBakeryAccessor$$Interface {

(arg0: $ResourceLocation): $UnbakedModel$$Type
}

export class $ModelBakeryAccessor implements $ModelBakeryAccessor$$Interface {
 "brewinandchewin$getModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$$Type = ((arg0: $ResourceLocation) => $UnbakedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakeryAccessor$$Original = $ModelBakeryAccessor;}
declare module "umpaz.brewinandchewin.common.mixin.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor$$Interface {

(): void
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "brewinandchewin$invokeUpdateEffectVisibility"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
