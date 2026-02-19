declare module "net.minecraft.client.tutorial.TutorialSteps" {
import {$TutorialStepInstance} from "net.minecraft.client.tutorial.TutorialStepInstance"
import {$Enum} from "java.lang.Enum"
import {$Tutorial$$Type} from "net.minecraft.client.tutorial.Tutorial"

export class $TutorialSteps extends $Enum<($TutorialSteps)> {
static readonly "PUNCH_TREE": $TutorialSteps
static readonly "MOVEMENT": $TutorialSteps
static readonly "FIND_TREE": $TutorialSteps
static readonly "OPEN_INVENTORY": $TutorialSteps
static readonly "NONE": $TutorialSteps
static readonly "CRAFT_PLANKS": $TutorialSteps

public "getName"(): StringJS
public static "values"(): ($TutorialSteps)[]
public static "valueOf"(arg0: StringJS): $TutorialSteps
public "create"(arg0: $Tutorial$$Type): $TutorialStepInstance
public static "getByName"(arg0: StringJS): $TutorialSteps
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialSteps$$Type = (("movement") | ("find_tree") | ("punch_tree") | ("open_inventory") | ("craft_planks") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialSteps$$Original = $TutorialSteps;}
declare module "net.minecraft.client.tutorial.TutorialStepInstance" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Input$$Type} from "net.minecraft.client.player.Input"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TutorialStepInstance$$Interface {
}

export class $TutorialStepInstance implements $TutorialStepInstance$$Interface {
 "onLookAt"(arg0: $ClientLevel$$Type, arg1: $HitResult$$Type): void
 "clear"(): void
 "tick"(): void
 "onMouse"(arg0: double, arg1: double): void
 "onGetItem"(arg0: $ItemStack$$Type): void
 "onDestroyBlock"(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: float): void
 "onOpenInventory"(): void
 "onInput"(arg0: $Input$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialStepInstance$$Type = ($TutorialStepInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialStepInstance$$Original = $TutorialStepInstance;}
declare module "net.minecraft.client.tutorial.Tutorial" {
import {$Input$$Type} from "net.minecraft.client.player.Input"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TutorialSteps$$Type} from "net.minecraft.client.tutorial.TutorialSteps"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$TutorialToast$$Type} from "net.minecraft.client.gui.components.toasts.TutorialToast"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Tutorial {
constructor(arg0: $Minecraft$$Type, arg1: $Options$$Type)

public "onLookAt"(arg0: $ClientLevel$$Type, arg1: $HitResult$$Type): void
public static "key"(arg0: StringJS): $Component
public "start"(): void
public "stop"(): void
public "tick"(): void
public "onMouse"(arg0: double, arg1: double): void
public "onGetItem"(arg0: $ItemStack$$Type): void
public "setStep"(arg0: $TutorialSteps$$Type): void
public "onDestroyBlock"(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: float): void
public "removeTimedToast"(arg0: $TutorialToast$$Type): void
public "addTimedToast"(arg0: $TutorialToast$$Type, arg1: integer): void
public "onOpenInventory"(): void
public "onInput"(arg0: $Input$$Type): void
public "isSurvival"(): boolean
public "getMinecraft"(): $Minecraft
public "onInventoryAction"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ClickAction$$Type): void
set "step"(value: $TutorialSteps$$Type)
get "survival"(): boolean
get "minecraft"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tutorial$$Type = ($Tutorial);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tutorial$$Original = $Tutorial;}
