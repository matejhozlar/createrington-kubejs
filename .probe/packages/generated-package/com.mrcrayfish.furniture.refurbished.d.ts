declare module "com.mrcrayfish.furniture.refurbished.electricity.Connection" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IElectricityNode, $IElectricityNode$$Type} from "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode"

export class $Connection {
public "isConnected"(arg0: $Level$$Type): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $Connection
public "getOtherNode"(arg0: $IElectricityNode$$Type): $IElectricityNode
public "isPowered"(arg0: $Level$$Type): boolean
public "getPosA"(): $BlockPos
public "isCrossingPowerableZone"(arg0: $Level$$Type): boolean
public "getPosB"(): $BlockPos
public "getNodeB"(arg0: $Level$$Type): $IElectricityNode
public "getNodeA"(arg0: $Level$$Type): $IElectricityNode
get "posA"(): $BlockPos
get "posB"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$$Type = ($Connection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Connection$$Original = $Connection;}
declare module "com.mrcrayfish.furniture.refurbished.mixin.EntityAccessor" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $EntityAccessor$$Interface {

(): $BlockPos$$Type
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "refurbishedFurnitureBlockPosAffectsMovement"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = (() => $BlockPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "com.mrcrayfish.furniture.refurbished.electricity.LinkManager$Access" {
import {$LinkManager, $LinkManager$$Type} from "com.mrcrayfish.furniture.refurbished.electricity.LinkManager"

export interface $LinkManager$Access$$Interface {

(): $LinkManager$$Type
}

export class $LinkManager$Access implements $LinkManager$Access$$Interface {
 "refurbishedFurniture$GetLinkManager"(): $LinkManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkManager$Access$$Type = (() => $LinkManager$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkManager$Access$$Original = $LinkManager$Access;}
declare module "com.mrcrayfish.furniture.refurbished.electricity.LinkManager" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IElectricityNode$$Type} from "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $LinkManager {
static readonly "MAX_LINK_LENGTH": double

constructor()

public static "get"(arg0: $MinecraftServer$$Type): $Optional<($LinkManager)>
public "onPlayerLoggedOut"(arg0: $Player$$Type): void
public "onPlayerTick"(arg0: $Player$$Type): void
public "onNodeInteract"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $IElectricityNode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkManager$$Type = ($LinkManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkManager$$Original = $LinkManager;}
declare module "com.mrcrayfish.furniture.refurbished.mixin.client.ScreenAccessor" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"

export interface $ScreenAccessor$$Interface {
get "children"(): $List<($GuiEventListener)>
get "narratables"(): $List<($NarratableEntry)>
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "getChildren"(): $List<($GuiEventListener)>
 "getNarratables"(): $List<($NarratableEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IElectricityNode$$Type} from "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode"

export class $ElectricityTicker {
constructor(arg0: $Level$$Type)

public static "get"(arg0: $Level$$Type): $ElectricityTicker
public "tick"(): void
public "addElectricityNode"(arg0: $IElectricityNode$$Type): void
public "earlyTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricityTicker$$Type = ($ElectricityTicker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricityTicker$$Original = $ElectricityTicker;}
declare module "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker$Access" {
import {$ElectricityTicker, $ElectricityTicker$$Type} from "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker"

export interface $ElectricityTicker$Access$$Interface {

(): $ElectricityTicker$$Type
}

export class $ElectricityTicker$Access implements $ElectricityTicker$Access$$Interface {
 "refurbishedFurniture$GetElectricityTicker"(): $ElectricityTicker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricityTicker$Access$$Type = (() => $ElectricityTicker$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricityTicker$Access$$Original = $ElectricityTicker$Access;}
declare module "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection, $Connection$$Type} from "com.mrcrayfish.furniture.refurbished.electricity.Connection"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IElectricityNode$$Interface {
get "nodeValid"(): boolean
set "nodeReceivingPower"(value: boolean)
get "nodeMaximumConnections"(): integer
get "nodeReceivingPower"(): boolean
get "nodeInPowerableNetwork"(): boolean
set "nodePowered"(value: boolean)
get "nodePosition"(): $BlockPos
get "nodeLevel"(): $Level
get "nodeOwner"(): $BlockEntity
get "nodePowered"(): boolean
get "nodeConnections"(): $Set<($Connection)>
get "sourceNode"(): boolean
get "nodeInteractBox"(): $AABB
get "powerSources"(): $Set<($BlockPos)>
get "nodeConnectionLimitReached"(): boolean
get "positionedNodeInteractBox"(): $AABB
}

export class $IElectricityNode implements $IElectricityNode$$Interface {
static "searchNodes"(arg0: $IElectricityNode$$Type, arg1: integer, arg2: boolean, arg3: $Predicate$$Type<($IElectricityNode)>, arg4: $Predicate$$Type<($IElectricityNode)>): $List<($IElectricityNode)>
static "searchNodes"(arg0: $IElectricityNode$$Type): $List<($IElectricityNode)>
 "isNodeValid"(): boolean
 "isConnectedToNode"(arg0: $IElectricityNode$$Type): boolean
 "setNodeReceivingPower"(arg0: boolean): void
 "getNodeMaximumConnections"(): integer
 "isNodeReceivingPower"(): boolean
 "removeAllNodeConnections"(): void
 "updateNodeConnections"(): void
 "isNodeInPowerableNetwork"(arg0: $BlockPos$$Type): boolean
 "isNodeInPowerableNetwork"(): boolean
 "removeNodeConnection"(arg0: $Connection$$Type): void
 "syncDataToTrackingClients"(): void
 "canPowerTraverseNode"(): boolean
 "setNodePowered"(arg0: boolean): void
 "earlyNodeTick"(arg0: $Level$$Type): void
 "getNodePosition"(): $BlockPos
 "connectToNode"(arg0: $IElectricityNode$$Type): boolean
 "readNodeNbt"(arg0: $CompoundTag$$Type): void
 "onNodeConnectedTo"(arg0: $IElectricityNode$$Type): void
 "writeNodeNbt"(arg0: $CompoundTag$$Type): void
 "saveNodeNbtToItem"(arg0: $ItemStack$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getNodeLevel"(): $Level
 "getNodeOwner"(): $BlockEntity
 "isNodePowered"(): boolean
 "getNodeConnections"(): $Set<($Connection)>
 "isSourceNode"(): boolean
 "getNodeInteractBox"(): $AABB
 "getPowerSources"(): $Set<($BlockPos)>
 "onNodeDestroyed"(): void
 "updateAndGetNodeConnections"(): $Set<($Connection)>
 "isNodeConnectionLimitReached"(): boolean
 "getPositionedNodeInteractBox"(): $AABB
 "registerElectricityNodeTicker"(arg0: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElectricityNode$$Type = ($IElectricityNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IElectricityNode$$Original = $IElectricityNode;}
