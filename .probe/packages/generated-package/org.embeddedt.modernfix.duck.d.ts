declare module "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProfilingServerFunctionManager$$Interface {

(): StringJS
}

export class $IProfilingServerFunctionManager implements $IProfilingServerFunctionManager$$Interface {
 "mfix$getProfilingResults"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProfilingServerFunctionManager$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IProfilingServerFunctionManager$$Original = $IProfilingServerFunctionManager;}
declare module "org.embeddedt.modernfix.duck.ISafeBlockGetter" {
import {$SafeBlockGetter, $SafeBlockGetter$$Type} from "org.embeddedt.modernfix.chunk.SafeBlockGetter"

export interface $ISafeBlockGetter$$Interface {

(): $SafeBlockGetter$$Type
}

export class $ISafeBlockGetter implements $ISafeBlockGetter$$Interface {
 "mfix$getSafeBlockGetter"(): $SafeBlockGetter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISafeBlockGetter$$Type = (() => $SafeBlockGetter$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISafeBlockGetter$$Original = $ISafeBlockGetter;}
declare module "org.embeddedt.modernfix.duck.IServerLevel" {
import {$StrongholdLocationCache, $StrongholdLocationCache$$Type} from "org.embeddedt.modernfix.world.StrongholdLocationCache"

export interface $IServerLevel$$Interface {

(): $StrongholdLocationCache$$Type
}

export class $IServerLevel implements $IServerLevel$$Interface {
 "mfix$getStrongholdCache"(): $StrongholdLocationCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerLevel$$Type = (() => $StrongholdLocationCache$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerLevel$$Original = $IServerLevel;}
declare module "org.embeddedt.modernfix.duck.IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState$$Interface {
get "cacheInvalid"(): boolean
}

export class $IBlockState implements $IBlockState$$Interface {
 "clearCache"(): void
 "isCacheInvalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockState$$Type = ($IBlockState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockState$$Original = $IBlockState;}
declare module "org.embeddedt.modernfix.duck.IChunkGenerator" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export interface $IChunkGenerator$$Interface {

(arg0: $ServerLevel): void
}

export class $IChunkGenerator implements $IChunkGenerator$$Interface {
 "mfix$setAssociatedServerLevel"(arg0: $ServerLevel$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkGenerator$$Type = ((arg0: $ServerLevel) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IChunkGenerator$$Original = $IChunkGenerator;}
declare module "org.embeddedt.modernfix.duck.ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer$$Interface {

(): long
}

export class $ITimeTrackingServer implements $ITimeTrackingServer$$Interface {
 "mfix$getLastTickStartTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimeTrackingServer$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITimeTrackingServer$$Original = $ITimeTrackingServer;}
