declare module "com.railwayteam.railways.neoforge.mixin.ContainerLevelAccessMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerLevelAccessMixin$$Interface {
}

export class $ContainerLevelAccessMixin implements $ContainerLevelAccessMixin$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerLevelAccessMixin$$Type = ($ContainerLevelAccessMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerLevelAccessMixin$$Original = $ContainerLevelAccessMixin;}
declare module "com.railwayteam.railways.neoforge.mixin.ChunkMapAccessor" {
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $ChunkMapAccessor$$Interface {

(): $Int2ObjectMap$$Type<(never)>
get "entityMap"(): $Int2ObjectMap<(never)>
}

export class $ChunkMapAccessor implements $ChunkMapAccessor$$Interface {
 "getEntityMap"(): $Int2ObjectMap<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccessor$$Type = (() => $Int2ObjectMap$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkMapAccessor$$Original = $ChunkMapAccessor;}
declare module "com.railwayteam.railways.neoforge.mixin.ChunkMapAccessor$TrackedEntityAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$$Type} from "net.minecraft.server.network.ServerPlayerConnection"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $ChunkMapAccessor$TrackedEntityAccessor$$Interface {

(): $Set$$Type<($ServerPlayerConnection$$Type)>
get "seenBy"(): $Set<($ServerPlayerConnection)>
}

export class $ChunkMapAccessor$TrackedEntityAccessor implements $ChunkMapAccessor$TrackedEntityAccessor$$Interface {
 "getSeenBy"(): $Set<($ServerPlayerConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccessor$TrackedEntityAccessor$$Type = (() => $Set$$Type<($ServerPlayerConnection$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkMapAccessor$TrackedEntityAccessor$$Original = $ChunkMapAccessor$TrackedEntityAccessor;}
