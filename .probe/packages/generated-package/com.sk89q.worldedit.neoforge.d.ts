declare module "com.sk89q.worldedit.neoforge.mixin.AccessorServerPlayerGameMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorServerPlayerGameMode$$Interface {

(): boolean
get "destroyingBlock"(): boolean
}

export class $AccessorServerPlayerGameMode implements $AccessorServerPlayerGameMode$$Interface {
 "isDestroyingBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorServerPlayerGameMode$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorServerPlayerGameMode$$Original = $AccessorServerPlayerGameMode;}
declare module "com.sk89q.worldedit.neoforge.internal.ExtendedChunk" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ExtendedChunk$$Interface {

(pos: $BlockPos, state: $BlockState, moved: boolean, update: boolean): $BlockState$$Type
}

export class $ExtendedChunk implements $ExtendedChunk$$Interface {
 "setBlockState"(pos: $BlockPos$$Type, state: $BlockState$$Type, moved: boolean, update: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedChunk$$Type = ((pos: $BlockPos, state: $BlockState, moved: boolean, update: boolean) => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedChunk$$Original = $ExtendedChunk;}
