declare module "com.jesz.createdieselgenerators.mixins.AgeableListModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AgeableListModelAccessor$$Interface {
get "babyYHeadOffset"(): float
get "babyHeadScale"(): float
get "babyZHeadOffset"(): float
get "scaleHead"(): boolean
}

export class $AgeableListModelAccessor implements $AgeableListModelAccessor$$Interface {
 "getBabyYHeadOffset"(): float
 "getBabyHeadScale"(): float
 "getBabyZHeadOffset"(): float
 "getScaleHead"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableListModelAccessor$$Type = ($AgeableListModelAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgeableListModelAccessor$$Original = $AgeableListModelAccessor;}
declare module "com.jesz.createdieselgenerators.mixins.LootTableAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $LootTableAccessor$$Interface {

(): $List$$Type<($LootPool$$Type)>
get "pools"(): $List<($LootPool)>
}

export class $LootTableAccessor implements $LootTableAccessor$$Interface {
 "getPools"(): $List<($LootPool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$$Type = (() => $List$$Type<($LootPool$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableAccessor$$Original = $LootTableAccessor;}
declare module "com.jesz.createdieselgenerators.mixins.UseOnContextInvoker" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $UseOnContextInvoker$$Interface {

(): $BlockHitResult$$Type
}

export class $UseOnContextInvoker implements $UseOnContextInvoker$$Interface {
 "cdg_getHitResult"(): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseOnContextInvoker$$Type = (() => $BlockHitResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseOnContextInvoker$$Original = $UseOnContextInvoker;}
declare module "com.jesz.createdieselgenerators.mixins.ModelPartAccessor" {
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$List, $List$$Type} from "java.util.List"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ModelPartAccessor$$Interface {

(): $List$$Type<($ModelPart$Cube$$Type)>
get "cubes"(): $List<($ModelPart$Cube)>
}

export class $ModelPartAccessor implements $ModelPartAccessor$$Interface {
 "getCubes"(): $List<($ModelPart$Cube)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$$Type = (() => $List$$Type<($ModelPart$Cube$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartAccessor$$Original = $ModelPartAccessor;}
declare module "com.jesz.createdieselgenerators.mixins.LootPoolAccessor" {
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $LootPoolAccessor$$Interface {

(): $List$$Type<($LootPoolEntryContainer$$Type)>
get "entries"(): $List<($LootPoolEntryContainer)>
}

export class $LootPoolAccessor implements $LootPoolAccessor$$Interface {
 "getEntries"(): $List<($LootPoolEntryContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolAccessor$$Type = (() => $List$$Type<($LootPoolEntryContainer$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootPoolAccessor$$Original = $LootPoolAccessor;}
