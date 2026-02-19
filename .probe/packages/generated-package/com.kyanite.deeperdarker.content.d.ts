declare module "com.kyanite.deeperdarker.content.blocks.OthersidePortalBlock$OthersidePortalShape" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $OthersidePortalBlock$OthersidePortalShape {
static readonly "MIN_WIDTH": integer
static readonly "MIN_HEIGHT": integer
static readonly "MAX_WIDTH": integer
static readonly "MAX_HEIGHT": integer

constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$Axis$$Type)

public "isValid"(): boolean
public "createPortalBlocks"(): void
public "isComplete"(): boolean
get "valid"(): boolean
get "complete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OthersidePortalBlock$OthersidePortalShape$$Type = ($OthersidePortalBlock$OthersidePortalShape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OthersidePortalBlock$OthersidePortalShape$$Original = $OthersidePortalBlock$OthersidePortalShape;}
declare module "com.kyanite.deeperdarker.content.blocks.OthersidePortalBlock$PortalSpawnEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$OthersidePortalBlock$OthersidePortalShape, $OthersidePortalBlock$OthersidePortalShape$$Type} from "com.kyanite.deeperdarker.content.blocks.OthersidePortalBlock$OthersidePortalShape"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OthersidePortalBlock$PortalSpawnEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $OthersidePortalBlock$OthersidePortalShape$$Type)

public "getSize"(): $OthersidePortalBlock$OthersidePortalShape
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "size"(): $OthersidePortalBlock$OthersidePortalShape
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OthersidePortalBlock$PortalSpawnEvent$$Type = ($OthersidePortalBlock$PortalSpawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OthersidePortalBlock$PortalSpawnEvent$$Original = $OthersidePortalBlock$PortalSpawnEvent;}
