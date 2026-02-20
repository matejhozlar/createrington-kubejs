declare module "com.simibubi.create.api.event.PipeCollisionEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PipeCollisionEvent extends $Event {
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
public "getLevel"(): $Level
public "getPos"(): $BlockPos
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
get "level"(): $Level
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeCollisionEvent$$Type = ($PipeCollisionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeCollisionEvent$$Original = $PipeCollisionEvent;}
declare module "com.simibubi.create.api.event.PipeCollisionEvent$Spill" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PipeCollisionEvent} from "com.simibubi.create.api.event.PipeCollisionEvent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PipeCollisionEvent$Spill extends $PipeCollisionEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Fluid$$Type, arg4: $BlockState$$Type)

public "getPipeFluid"(): $Fluid
public "getWorldFluid"(): $Fluid
get "pipeFluid"(): $Fluid
get "worldFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeCollisionEvent$Spill$$Type = ($PipeCollisionEvent$Spill);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeCollisionEvent$Spill$$Original = $PipeCollisionEvent$Spill;}
declare module "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IHaveCustomOverlayIcon$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon"

export interface $IHaveGoggleInformation$$Interface extends $IHaveCustomOverlayIcon$$Interface {
}

export class $IHaveGoggleInformation implements $IHaveGoggleInformation$$Interface {
 "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
 "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
 "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveGoggleInformation$$Type = ($IHaveGoggleInformation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveGoggleInformation$$Original = $IHaveGoggleInformation;}
declare module "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement" {
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SpecialBlockItemRequirement$$Interface {

(arg0: $BlockState, arg1: $BlockEntity): $ItemRequirement$$Type
}

export class $SpecialBlockItemRequirement implements $SpecialBlockItemRequirement$$Interface {
 "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialBlockItemRequirement$$Type = ((arg0: $BlockState, arg1: $BlockEntity) => $ItemRequirement$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialBlockItemRequirement$$Original = $SpecialBlockItemRequirement;}
declare module "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity" {
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"

export interface $TransformableBlockEntity$$Interface {

(arg0: $BlockEntity, arg1: $StructureTransform): void
}

export class $TransformableBlockEntity implements $TransformableBlockEntity$$Interface {
 "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableBlockEntity$$Type = ((arg0: $BlockEntity, arg1: $StructureTransform) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformableBlockEntity$$Original = $TransformableBlockEntity;}
declare module "com.simibubi.create.api.event.TrackGraphMergeEvent" {
import {$TrackGraph, $TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$Event} from "net.neoforged.bus.api.Event"

export class $TrackGraphMergeEvent extends $Event {
constructor(arg0: $TrackGraph$$Type, arg1: $TrackGraph$$Type)

public "getGraphMergedInto"(): $TrackGraph
public "getGraphMergedFrom"(): $TrackGraph
get "graphMergedInto"(): $TrackGraph
get "graphMergedFrom"(): $TrackGraph
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackGraphMergeEvent$$Type = ($TrackGraphMergeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackGraphMergeEvent$$Original = $TrackGraphMergeEvent;}
declare module "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"

export interface $IHaveCustomOverlayIcon$$Interface {
}

export class $IHaveCustomOverlayIcon implements $IHaveCustomOverlayIcon$$Interface {
 "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveCustomOverlayIcon$$Type = ($IHaveCustomOverlayIcon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveCustomOverlayIcon$$Original = $IHaveCustomOverlayIcon;}
declare module "com.simibubi.create.api.schematic.nbt.PartialSafeNBT" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $PartialSafeNBT$$Interface {

(arg0: $CompoundTag, arg1: $HolderLookup$Provider): void
}

export class $PartialSafeNBT implements $PartialSafeNBT$$Interface {
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialSafeNBT$$Type = ((arg0: $CompoundTag, arg1: $HolderLookup$Provider) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartialSafeNBT$$Original = $PartialSafeNBT;}
declare module "com.simibubi.create.api.event.PipeCollisionEvent$Flow" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PipeCollisionEvent} from "com.simibubi.create.api.event.PipeCollisionEvent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PipeCollisionEvent$Flow extends $PipeCollisionEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Fluid$$Type, arg4: $BlockState$$Type)

public "getFirstFluid"(): $Fluid
public "getSecondFluid"(): $Fluid
get "firstFluid"(): $Fluid
get "secondFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeCollisionEvent$Flow$$Type = ($PipeCollisionEvent$Flow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeCollisionEvent$Flow$$Original = $PipeCollisionEvent$Flow;}
declare module "com.simibubi.create.api.equipment.goggles.IHaveHoveringInformation" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IHaveCustomOverlayIcon$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon"

export interface $IHaveHoveringInformation$$Interface extends $IHaveCustomOverlayIcon$$Interface {
}

export class $IHaveHoveringInformation implements $IHaveHoveringInformation$$Interface {
 "addToTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
 "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveHoveringInformation$$Type = ($IHaveHoveringInformation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveHoveringInformation$$Original = $IHaveHoveringInformation;}
declare module "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement" {
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SpecialBlockEntityItemRequirement$$Interface {

(arg0: $BlockState): $ItemRequirement$$Type
}

export class $SpecialBlockEntityItemRequirement implements $SpecialBlockEntityItemRequirement$$Interface {
 "getRequiredItems"(arg0: $BlockState$$Type): $ItemRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialBlockEntityItemRequirement$$Type = ((arg0: $BlockState) => $ItemRequirement$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialBlockEntityItemRequirement$$Original = $SpecialBlockEntityItemRequirement;}
declare module "com.simibubi.create.api.event.BlockEntityBehaviourEvent" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Map$$Type} from "java.util.Map"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $BlockEntityBehaviourEvent extends $Event {
constructor(arg0: $SmartBlockEntity$$Type, arg1: $Map$$Type<($BehaviourType$$Type<(never)>), ($BlockEntityBehaviour$$Type)>)

public "remove"(arg0: $BehaviourType$$Type<(never)>): $BlockEntityBehaviour
public "attach"(arg0: $BlockEntityBehaviour$$Type): void
public "forType"<T extends $SmartBlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBehaviourEvent$$Type = ($BlockEntityBehaviourEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBehaviourEvent$$Original = $BlockEntityBehaviourEvent;}
