import {$ItemToolTierRegistryKubeEvent} from "dev.latvian.mods.kubejs.item.custom.ItemToolTierRegistryKubeEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$KubeStartupEvent} from "dev.latvian.mods.kubejs.event.KubeStartupEvent"
import {$MoldEventJS} from "com.jesz.createdieselgenerators.compat.kubejs.MoldEventJS"
import {$BlockModificationKubeEvent} from "dev.latvian.mods.kubejs.block.BlockModificationKubeEvent"
import {$KeybindRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.KeybindRegistryKubeEvent"
import {$ItemModificationKubeEvent} from "dev.latvian.mods.kubejs.item.ItemModificationKubeEvent"
import {$ItemModelPropertiesKubeEvent} from "dev.latvian.mods.kubejs.item.ItemModelPropertiesKubeEvent"
import {$MenuScreenRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.MenuScreenRegistryKubeEvent"
import {$EntityRendererRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.EntityRendererRegistryKubeEvent"
import {$BlockEntityRendererRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.BlockEntityRendererRegistryKubeEvent"
import {$CreativeTabKubeEvent} from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabKubeEvent"

declare global {
export namespace ItemEvents {
function modelProperties(handler: (event: $ItemModelPropertiesKubeEvent) => void): void
/**
 * Invoked after all items are registered to modify them.
 */
function modification(handler: (event: $ItemModificationKubeEvent) => void): void
/**
 * Invoked when the game is starting up and the item tool tiers are being registered.
 */
function toolTierRegistry(handler: (event: $ItemToolTierRegistryKubeEvent) => void): void
}
export namespace KeyBindEvents {
function registry(handler: (event: $KeybindRegistryKubeEvent) => void): void
}
export namespace ClientEvents {
function blockEntityRendererRegistry(handler: (event: $BlockEntityRendererRegistryKubeEvent) => void): void
function menuScreenRegistry(handler: (event: $MenuScreenRegistryKubeEvent) => void): void
function entityRendererRegistry(handler: (event: $EntityRendererRegistryKubeEvent) => void): void
}
export namespace StartupEvents {
function init(handler: (event: $KubeStartupEvent) => void): void
function modifyCreativeTab(extra: $ResourceLocation$$Type, handler: (event: $CreativeTabKubeEvent) => void): void
function postInit(handler: (event: $KubeStartupEvent) => void): void
}
export namespace BlockEvents {
function modification(handler: (event: $BlockModificationKubeEvent) => void): void
}
export namespace CDGEvents {
function molds(handler: (event: $MoldEventJS) => void): void
}
}