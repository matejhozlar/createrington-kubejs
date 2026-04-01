declare module "org.patryk3211.powergrid.mixin.ChunkMapAccessor" {
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
declare module "org.patryk3211.powergrid.mixin.ChunkMapAccessor$TrackedEntityAccessor" {
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
declare module "org.patryk3211.powergrid.mixin.LightningAccessor" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $LightningAccessor$$Interface {

(arg0: $BlockPos): $BlockPos$$Type
}

export class $LightningAccessor implements $LightningAccessor$$Interface {
 "invokeGetLightningPos"(arg0: $BlockPos$$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningAccessor$$Type = ((arg0: $BlockPos) => $BlockPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningAccessor$$Original = $LightningAccessor;}
declare module "org.patryk3211.powergrid.mixin.KineticBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KineticBlockEntityAccessor$$Interface {

(arg0: integer): void
set "flickerTally"(value: integer)
}

export class $KineticBlockEntityAccessor implements $KineticBlockEntityAccessor$$Interface {
 "setFlickerTally"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBlockEntityAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBlockEntityAccessor$$Original = $KineticBlockEntityAccessor;}
declare module "org.patryk3211.powergrid.mixin.forge.EntityTrackerAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$$Type} from "net.minecraft.server.network.ServerPlayerConnection"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $EntityTrackerAccessor$$Interface {

(): $Set$$Type<($ServerPlayerConnection$$Type)>
get "playersTracking"(): $Set<($ServerPlayerConnection)>
}

export class $EntityTrackerAccessor implements $EntityTrackerAccessor$$Interface {
 "getPlayersTracking"(): $Set<($ServerPlayerConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTrackerAccessor$$Type = (() => $Set$$Type<($ServerPlayerConnection$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTrackerAccessor$$Original = $EntityTrackerAccessor;}
declare module "org.patryk3211.powergrid.mixin.forge.ThreadedAnvilChunkStorageAccessor" {
import {$EntityTrackerAccessor, $EntityTrackerAccessor$$Type} from "org.patryk3211.powergrid.mixin.forge.EntityTrackerAccessor"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $ThreadedAnvilChunkStorageAccessor$$Interface {

(): $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>
get "entityTrackers"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}

export class $ThreadedAnvilChunkStorageAccessor implements $ThreadedAnvilChunkStorageAccessor$$Interface {
 "getEntityTrackers"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadedAnvilChunkStorageAccessor$$Type = (() => $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadedAnvilChunkStorageAccessor$$Original = $ThreadedAnvilChunkStorageAccessor;}
