import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ItemPredicate} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$RegisterSubtypesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RegisterSubtypesKubeEvent"
import {$AddInformationKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.AddInformationKubeEvent"
import {$AddEntriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.AddEntriesKubeEvent"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$GroupEntriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.GroupEntriesKubeEvent"
import {$FluidIngredient} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$RemoveEntriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RemoveEntriesKubeEvent"

declare global {
export namespace RecipeViewerEvents {
function addEntries(extra: "item", handler: (event: $AddEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function addEntries(extra: "fluid", handler: (event: $AddEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function removeEntriesCompletely(extra: "item", handler: (event: $RemoveEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function removeEntriesCompletely(extra: "fluid", handler: (event: $RemoveEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function addInformation(extra: "item", handler: (event: $AddInformationKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function addInformation(extra: "fluid", handler: (event: $AddInformationKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function removeEntries(extra: "item", handler: (event: $RemoveEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function removeEntries(extra: "fluid", handler: (event: $RemoveEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function registerSubtypes(extra: "item", handler: (event: $RegisterSubtypesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function registerSubtypes(extra: "fluid", handler: (event: $RegisterSubtypesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function groupEntries(extra: "item", handler: (event: $GroupEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function groupEntries(extra: "fluid", handler: (event: $GroupEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
}
}