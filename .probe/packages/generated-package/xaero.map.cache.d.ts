declare module "xaero.map.cache.BlockStateShortShapeCache" {
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateShortShapeCache {
constructor()

public "reset"(): void
public "isShort"(arg0: $BlockState$$Type): boolean
public "supplyForIOThread"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateShortShapeCache$$Type = ($BlockStateShortShapeCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateShortShapeCache$$Original = $BlockStateShortShapeCache;}
declare module "xaero.map.cache.BrokenBlockTintCache" {
import {$Set$$Type} from "java.util.Set"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BrokenBlockTintCache {
constructor(arg0: $Set$$Type<($BlockState$$Type)>)

public "setBroken"(arg0: $BlockState$$Type): void
public "getSize"(): integer
public "isBroken"(arg0: $BlockState$$Type): boolean
set "broken"(value: $BlockState$$Type)
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrokenBlockTintCache$$Type = ($BrokenBlockTintCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrokenBlockTintCache$$Original = $BrokenBlockTintCache;}
