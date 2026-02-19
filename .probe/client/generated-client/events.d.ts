import {$BlockRightClickedKubeEvent} from "dev.latvian.mods.kubejs.block.BlockRightClickedKubeEvent"
import {$ParticleProviderRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.ParticleProviderRegistryKubeEvent"
import {$BlockStoppedFallingKubeEvent} from "dev.latvian.mods.kubejs.block.BlockStoppedFallingKubeEvent"
import {$ExplosionKubeEvent$After} from "dev.latvian.mods.kubejs.level.ExplosionKubeEvent$After"
import {$KubeJSKeybinds$TickingKeyEvent} from "dev.latvian.mods.kubejs.client.KubeJSKeybinds$TickingKeyEvent"
import {$FoodEatenKubeEvent} from "dev.latvian.mods.kubejs.item.FoodEatenKubeEvent"
import {$CheckLivingEntitySpawnKubeEvent} from "dev.latvian.mods.kubejs.entity.CheckLivingEntitySpawnKubeEvent"
import {$DynamicItemTooltipsKubeEvent} from "dev.latvian.mods.kubejs.item.DynamicItemTooltipsKubeEvent"
import {$InventoryKubeEvent} from "dev.latvian.mods.kubejs.player.InventoryKubeEvent"
import {$SimpleLevelKubeEvent} from "dev.latvian.mods.kubejs.level.SimpleLevelKubeEvent"
import {$ItemSmeltedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemSmeltedKubeEvent"
import {$AddEntriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.AddEntriesKubeEvent"
import {$BlockLeftClickedKubeEvent} from "dev.latvian.mods.kubejs.block.BlockLeftClickedKubeEvent"
import {$AfterLivingEntityHurtKubeEvent} from "dev.latvian.mods.kubejs.entity.AfterLivingEntityHurtKubeEvent"
import {$LivingEntityDeathKubeEvent} from "dev.latvian.mods.kubejs.entity.LivingEntityDeathKubeEvent"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$RemoveEntriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RemoveEntriesKubeEvent"
import {$ItemCraftedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemCraftedKubeEvent"
import {$BeforeLivingEntityHurtKubeEvent} from "dev.latvian.mods.kubejs.entity.BeforeLivingEntityHurtKubeEvent"
import {$AddInformationKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.AddInformationKubeEvent"
import {$FarmlandTrampledKubeEvent} from "dev.latvian.mods.kubejs.block.FarmlandTrampledKubeEvent"
import {$CodeGenerationEventJS} from "moe.wolfgirl.probejs.events.CodeGenerationEventJS"
import {$LighterSkinsEventJS} from "com.jesz.createdieselgenerators.compat.kubejs.LighterSkinsEventJS"
import {$ChestKubeEvent} from "dev.latvian.mods.kubejs.player.ChestKubeEvent"
import {$RegisterSubtypesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RegisterSubtypesKubeEvent"
import {$DetectorBlockKubeEvent} from "dev.latvian.mods.kubejs.block.DetectorBlockKubeEvent"
import {$ItemDestroyedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemDestroyedKubeEvent"
import {$NetworkKubeEvent} from "dev.latvian.mods.kubejs.net.NetworkKubeEvent"
import {$SnippetGenerationEventJS} from "moe.wolfgirl.probejs.events.SnippetGenerationEventJS"
import {$BlockBrokenKubeEvent} from "dev.latvian.mods.kubejs.block.BlockBrokenKubeEvent"
import {$KubeAssetGenerator} from "dev.latvian.mods.kubejs.generator.KubeAssetGenerator"
import {$ItemPickedUpKubeEvent} from "dev.latvian.mods.kubejs.item.ItemPickedUpKubeEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$HighlightKubeEvent} from "dev.latvian.mods.kubejs.client.highlight.HighlightKubeEvent"
import {$BlockEntityTickKubeEvent} from "dev.latvian.mods.kubejs.block.entity.BlockEntityTickKubeEvent"
import {$String} from "java.lang.String"
import {$ClientPlayerKubeEvent} from "dev.latvian.mods.kubejs.client.ClientPlayerKubeEvent"
import {$RemoveRecipesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RemoveRecipesKubeEvent"
import {$TypingModificationEventJS} from "moe.wolfgirl.probejs.events.TypingModificationEventJS"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntitySpawnedKubeEvent} from "dev.latvian.mods.kubejs.entity.EntitySpawnedKubeEvent"
import {$Item} from "net.minecraft.world.item.Item"
import {$RemoveCategoriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RemoveCategoriesKubeEvent"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AtlasSpriteRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.AtlasSpriteRegistryKubeEvent"
import {$StageChangedEvent} from "dev.latvian.mods.kubejs.player.StageChangedEvent"
import {$ModifyItemTooltipsKubeEvent} from "dev.latvian.mods.kubejs.item.ModifyItemTooltipsKubeEvent"
import {$LivingEntityDropsKubeEvent} from "dev.latvian.mods.kubejs.entity.LivingEntityDropsKubeEvent"
import {$InventoryChangedKubeEvent} from "dev.latvian.mods.kubejs.player.InventoryChangedKubeEvent"
import {$KubeJSKeybinds$KeyEvent} from "dev.latvian.mods.kubejs.client.KubeJSKeybinds$KeyEvent"
import {$DebugInfoKubeEvent} from "dev.latvian.mods.kubejs.client.DebugInfoKubeEvent"
import {$BlockStartedFallingKubeEvent} from "dev.latvian.mods.kubejs.block.BlockStartedFallingKubeEvent"
import {$BlockPlacedKubeEvent} from "dev.latvian.mods.kubejs.block.BlockPlacedKubeEvent"
import {$SimplePlayerKubeEvent} from "dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeneratedDataStage} from "dev.latvian.mods.kubejs.script.data.GeneratedDataStage"
import {$LangKubeEvent} from "dev.latvian.mods.kubejs.client.LangKubeEvent"
import {$ItemDroppedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemDroppedKubeEvent"
import {$ItemEntityInteractedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemEntityInteractedKubeEvent"
import {$ItemClickedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemClickedKubeEvent"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$ExplosionKubeEvent$Before} from "dev.latvian.mods.kubejs.level.ExplosionKubeEvent$Before"
import {$GroupEntriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.GroupEntriesKubeEvent"
import {$BlockPickedKubeEvent} from "dev.latvian.mods.kubejs.block.BlockPickedKubeEvent"
import {$TypeAssignmentEventJS} from "moe.wolfgirl.probejs.events.TypeAssignmentEventJS"

declare global {
export namespace ItemEvents {
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function rightClicked(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemClickedKubeEvent) => void): void
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function rightClicked(handler: (event: $ItemClickedKubeEvent) => void): void
/**
 * Invoked when a player crafts an item.
 */
function crafted(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemCraftedKubeEvent) => void): void
/**
 * Invoked when a player crafts an item.
 */
function crafted(handler: (event: $ItemCraftedKubeEvent) => void): void
/**
 * Invoked when a player drops an item.
 */
function dropped(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemDroppedKubeEvent) => void): void
/**
 * Invoked when a player drops an item.
 */
function dropped(handler: (event: $ItemDroppedKubeEvent) => void): void
function dynamicTooltips(extra: $String$$Type, handler: (event: $DynamicItemTooltipsKubeEvent) => void): void
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function firstRightClicked(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemClickedKubeEvent) => void): void
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function firstRightClicked(handler: (event: $ItemClickedKubeEvent) => void): void
/**
 * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
 */
function pickedUp(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemPickedUpKubeEvent) => void): void
/**
 * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
 */
function pickedUp(handler: (event: $ItemPickedUpKubeEvent) => void): void
function destroyed(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemDestroyedKubeEvent) => void): void
function destroyed(handler: (event: $ItemDestroyedKubeEvent) => void): void
/**
 * Invoked when a player right clicks on an entity.
 */
function entityInteracted(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemEntityInteractedKubeEvent) => void): void
/**
 * Invoked when a player right clicks on an entity.
 */
function entityInteracted(handler: (event: $ItemEntityInteractedKubeEvent) => void): void
/**
 * Invoked when an entity eats food.
 */
function foodEaten(extra: $ResourceKey$$Type<($Item)>, handler: (event: $FoodEatenKubeEvent) => void): void
/**
 * Invoked when an entity eats food.
 */
function foodEaten(handler: (event: $FoodEatenKubeEvent) => void): void
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function firstLeftClicked(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemClickedKubeEvent) => void): void
/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
function firstLeftClicked(handler: (event: $ItemClickedKubeEvent) => void): void
/**
 * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
 */
function canPickUp(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemPickedUpKubeEvent) => void): void
/**
 * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
 */
function canPickUp(handler: (event: $ItemPickedUpKubeEvent) => void): void
/**
 * Invoked when an item is smelted by a player.
 */
function smelted(extra: $ResourceKey$$Type<($Item)>, handler: (event: $ItemSmeltedKubeEvent) => void): void
/**
 * Invoked when an item is smelted by a player.
 */
function smelted(handler: (event: $ItemSmeltedKubeEvent) => void): void
function modifyTooltips(handler: (event: $ModifyItemTooltipsKubeEvent) => void): void
}
export namespace LevelEvents {
/**
 * Invoked right before an explosion happens.
 */
function beforeExplosion(extra: $ResourceKey$$Type<($Level)>, handler: (event: $ExplosionKubeEvent$Before) => void): void
/**
 * Invoked right before an explosion happens.
 */
function beforeExplosion(handler: (event: $ExplosionKubeEvent$Before) => void): void
function tick(extra: $ResourceKey$$Type<($Level)>, handler: (event: $SimpleLevelKubeEvent) => void): void
function tick(handler: (event: $SimpleLevelKubeEvent) => void): void
/**
 * Invoked right after an explosion happens.
 */
function afterExplosion(extra: $ResourceKey$$Type<($Level)>, handler: (event: $ExplosionKubeEvent$After) => void): void
/**
 * Invoked right after an explosion happens.
 */
function afterExplosion(handler: (event: $ExplosionKubeEvent$After) => void): void
}
export namespace ProbeEvents {
function codegen(extra: $String$$Type, handler: (event: $CodeGenerationEventJS) => void): void
function snippets(handler: (event: $SnippetGenerationEventJS) => void): void
function assignType(handler: (event: $TypeAssignmentEventJS) => void): void
function modifyClass(handler: (event: $TypingModificationEventJS) => void): void
}
export namespace NetworkEvents {
/**
 * Invoked when a network packet is received.
 * 
 * Note that the behaviour of this event is depending on the **script type**.
 * 
 * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
 * 
 * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
 */
function dataReceived(extra: $String$$Type, handler: (event: $NetworkKubeEvent) => void): void
}
export namespace RecipeViewerEvents {
function addEntries(extra: $String$$Type, handler: (event: $AddEntriesKubeEvent) => void): void
function removeEntriesCompletely(extra: $String$$Type, handler: (event: $RemoveEntriesKubeEvent) => void): void
function addInformation(extra: $String$$Type, handler: (event: $AddInformationKubeEvent) => void): void
function removeRecipes(handler: (event: $RemoveRecipesKubeEvent) => void): void
function removeEntries(extra: $String$$Type, handler: (event: $RemoveEntriesKubeEvent) => void): void
function removeCategories(handler: (event: $RemoveCategoriesKubeEvent) => void): void
function registerSubtypes(extra: $String$$Type, handler: (event: $RegisterSubtypesKubeEvent) => void): void
function groupEntries(extra: $String$$Type, handler: (event: $GroupEntriesKubeEvent) => void): void
}
export namespace EntityEvents {
/**
 * Invoked after an entity is hurt by a damage source.
 */
function afterHurt(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $AfterLivingEntityHurtKubeEvent) => void): void
/**
 * Invoked after an entity is hurt by a damage source.
 */
function afterHurt(handler: (event: $AfterLivingEntityHurtKubeEvent) => void): void
/**
 * Invoked when an entity is about to be added to the world.
 * 
 * This event also fires for existing entities when they are loaded from a save.
 */
function spawned(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $EntitySpawnedKubeEvent) => void): void
/**
 * Invoked when an entity is about to be added to the world.
 * 
 * This event also fires for existing entities when they are loaded from a save.
 */
function spawned(handler: (event: $EntitySpawnedKubeEvent) => void): void
function drops(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $LivingEntityDropsKubeEvent) => void): void
function drops(handler: (event: $LivingEntityDropsKubeEvent) => void): void
/**
 * Invoked before an entity is spawned into the world.
 * 
 * Only entities from a `BaseSpawner` or world generation will trigger this event.
 */
function checkSpawn(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $CheckLivingEntitySpawnKubeEvent) => void): void
/**
 * Invoked before an entity is spawned into the world.
 * 
 * Only entities from a `BaseSpawner` or world generation will trigger this event.
 */
function checkSpawn(handler: (event: $CheckLivingEntitySpawnKubeEvent) => void): void
/**
 * Invoked before a living entity dies.
 * 
 * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
 */
function death(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $LivingEntityDeathKubeEvent) => void): void
/**
 * Invoked before a living entity dies.
 * 
 * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
 */
function death(handler: (event: $LivingEntityDeathKubeEvent) => void): void
/**
 * Invoked before an entity is hurt by a damage source.
 */
function beforeHurt(extra: $ResourceKey$$Type<($EntityType<(object)>)>, handler: (event: $BeforeLivingEntityHurtKubeEvent) => void): void
/**
 * Invoked before an entity is hurt by a damage source.
 */
function beforeHurt(handler: (event: $BeforeLivingEntityHurtKubeEvent) => void): void
}
export namespace KeyBindEvents {
function pressed(extra: $String$$Type, handler: (event: $KubeJSKeybinds$KeyEvent) => void): void
function tick(extra: $String$$Type, handler: (event: $KubeJSKeybinds$TickingKeyEvent) => void): void
function released(extra: $String$$Type, handler: (event: $KubeJSKeybinds$TickingKeyEvent) => void): void
}
export namespace ClientEvents {
/**
 * Invoked when the debug info is rendered.
 */
function rightDebugInfo(handler: (event: $DebugInfoKubeEvent) => void): void
/**
 * Invoked when the debug info is rendered.
 */
function leftDebugInfo(handler: (event: $DebugInfoKubeEvent) => void): void
function atlasSpriteRegistry(extra: $ResourceLocation$$Type, handler: (event: $AtlasSpriteRegistryKubeEvent) => void): void
function loggedOut(handler: (event: $ClientPlayerKubeEvent) => void): void
function generateAssets(extra: $GeneratedDataStage$$Type, handler: (event: $KubeAssetGenerator) => void): void
function tick(handler: (event: $ClientPlayerKubeEvent) => void): void
/**
 * Invoked when block and entity highlight is rendered.
 */
function highlight(handler: (event: $HighlightKubeEvent) => void): void
function particleProviderRegistry(handler: (event: $ParticleProviderRegistryKubeEvent) => void): void
function loggedIn(handler: (event: $ClientPlayerKubeEvent) => void): void
function lang(extra: $String$$Type, handler: (event: $LangKubeEvent) => void): void
}
export namespace BlockEvents {
/**
 * Invoked when a block is destroyed by a player.
 */
function broken(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockBrokenKubeEvent) => void): void
/**
 * Invoked when a block is destroyed by a player.
 */
function broken(handler: (event: $BlockBrokenKubeEvent) => void): void
/**
 * Invoked when a block is placed.
 */
function placed(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockPlacedKubeEvent) => void): void
/**
 * Invoked when a block is placed.
 */
function placed(handler: (event: $BlockPlacedKubeEvent) => void): void
/**
 * Invoked when a player left clicks on a block.
 */
function leftClicked(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockLeftClickedKubeEvent) => void): void
/**
 * Invoked when a player left clicks on a block.
 */
function leftClicked(handler: (event: $BlockLeftClickedKubeEvent) => void): void
/**
 * Invoked when a player right clicks on a block.
 */
function rightClicked(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockRightClickedKubeEvent) => void): void
/**
 * Invoked when a player right clicks on a block.
 */
function rightClicked(handler: (event: $BlockRightClickedKubeEvent) => void): void
/**
 * Invoked when a falling block starts to fall.
 */
function startedFalling(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockStartedFallingKubeEvent) => void): void
/**
 * Invoked when a falling block starts to fall.
 */
function startedFalling(handler: (event: $BlockStartedFallingKubeEvent) => void): void
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorPowered(extra: $String$$Type, handler: (event: $DetectorBlockKubeEvent) => void): void
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorPowered(handler: (event: $DetectorBlockKubeEvent) => void): void
/**
 * Invoked when an entity attempts to trample farmland.
 */
function farmlandTrampled(extra: $ResourceKey$$Type<($Block)>, handler: (event: $FarmlandTrampledKubeEvent) => void): void
/**
 * Invoked when an entity attempts to trample farmland.
 */
function farmlandTrampled(handler: (event: $FarmlandTrampledKubeEvent) => void): void
/**
 * Invoked when a falling block finishes falling.
 */
function stoppedFalling(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockStoppedFallingKubeEvent) => void): void
/**
 * Invoked when a falling block finishes falling.
 */
function stoppedFalling(handler: (event: $BlockStoppedFallingKubeEvent) => void): void
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorUnpowered(extra: $String$$Type, handler: (event: $DetectorBlockKubeEvent) => void): void
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorUnpowered(handler: (event: $DetectorBlockKubeEvent) => void): void
/**
 * Invoked when player middle-clicks on a block.
 */
function picked(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockPickedKubeEvent) => void): void
/**
 * Invoked when player middle-clicks on a block.
 */
function picked(handler: (event: $BlockPickedKubeEvent) => void): void
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorChanged(extra: $String$$Type, handler: (event: $DetectorBlockKubeEvent) => void): void
/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
function detectorChanged(handler: (event: $DetectorBlockKubeEvent) => void): void
function blockEntityTick(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockEntityTickKubeEvent) => void): void
}
export namespace PlayerEvents {
/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
function chestOpened(extra: $ResourceKey$$Type<($MenuType<(object)>)>, handler: (event: $ChestKubeEvent) => void): void
/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
function chestOpened(handler: (event: $ChestKubeEvent) => void): void
function tick(handler: (event: $SimplePlayerKubeEvent) => void): void
function stageRemoved(extra: $String$$Type, handler: (event: $StageChangedEvent) => void): void
function stageRemoved(handler: (event: $StageChangedEvent) => void): void
function stageAdded(extra: $String$$Type, handler: (event: $StageChangedEvent) => void): void
function stageAdded(handler: (event: $StageChangedEvent) => void): void
/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
function chestClosed(extra: $ResourceKey$$Type<($MenuType<(object)>)>, handler: (event: $ChestKubeEvent) => void): void
/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
function chestClosed(handler: (event: $ChestKubeEvent) => void): void
/**
 * Invoked when a player opens or closes a container.
 */
function inventoryClosed(extra: $ResourceKey$$Type<($MenuType<(object)>)>, handler: (event: $InventoryKubeEvent) => void): void
/**
 * Invoked when a player opens or closes a container.
 */
function inventoryClosed(handler: (event: $InventoryKubeEvent) => void): void
/**
 * Invoked when a player's inventory changes.
 */
function inventoryChanged(extra: $ResourceKey$$Type<($Item)>, handler: (event: $InventoryChangedKubeEvent) => void): void
/**
 * Invoked when a player's inventory changes.
 */
function inventoryChanged(handler: (event: $InventoryChangedKubeEvent) => void): void
/**
 * Invoked when a player opens or closes a container.
 */
function inventoryOpened(extra: $ResourceKey$$Type<($MenuType<(object)>)>, handler: (event: $InventoryKubeEvent) => void): void
/**
 * Invoked when a player opens or closes a container.
 */
function inventoryOpened(handler: (event: $InventoryKubeEvent) => void): void
}
export namespace CDGEvents {
function lighterSkins(handler: (event: $LighterSkinsEventJS) => void): void
}
}