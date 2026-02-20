import {$BlockRightClickedKubeEvent} from "dev.latvian.mods.kubejs.block.BlockRightClickedKubeEvent"
import {$CommandRegistryKubeEvent} from "dev.latvian.mods.kubejs.command.CommandRegistryKubeEvent"
import {$BlockStoppedFallingKubeEvent} from "dev.latvian.mods.kubejs.block.BlockStoppedFallingKubeEvent"
import {$ExplosionKubeEvent$After} from "dev.latvian.mods.kubejs.level.ExplosionKubeEvent$After"
import {$FoodEatenKubeEvent} from "dev.latvian.mods.kubejs.item.FoodEatenKubeEvent"
import {$NorthstarKubeDataEvent} from "com.lightning.northstar.compat.kubejs.event.NorthstarKubeDataEvent"
import {$CheckLivingEntitySpawnKubeEvent} from "dev.latvian.mods.kubejs.entity.CheckLivingEntitySpawnKubeEvent"
import {$KubeDataGenerator} from "dev.latvian.mods.kubejs.generator.KubeDataGenerator"
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
import {$CommandKubeEvent} from "dev.latvian.mods.kubejs.server.CommandKubeEvent"
import {$BeforeLivingEntityHurtKubeEvent} from "dev.latvian.mods.kubejs.entity.BeforeLivingEntityHurtKubeEvent"
import {$AddInformationKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.AddInformationKubeEvent"
import {$FarmlandTrampledKubeEvent} from "dev.latvian.mods.kubejs.block.FarmlandTrampledKubeEvent"
import {$AfterRecipesLoadedKubeEvent} from "dev.latvian.mods.kubejs.recipe.AfterRecipesLoadedKubeEvent"
import {$PlayerAdvancementKubeEvent} from "dev.latvian.mods.kubejs.player.PlayerAdvancementKubeEvent"
import {$TagKubeEvent} from "dev.latvian.mods.kubejs.server.tag.TagKubeEvent"
import {$ChestKubeEvent} from "dev.latvian.mods.kubejs.player.ChestKubeEvent"
import {$RegisterSubtypesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RegisterSubtypesKubeEvent"
import {$DetectorBlockKubeEvent} from "dev.latvian.mods.kubejs.block.DetectorBlockKubeEvent"
import {$BlockDropsKubeEvent} from "dev.latvian.mods.kubejs.block.BlockDropsKubeEvent"
import {$PlayerClonedKubeEvent} from "dev.latvian.mods.kubejs.player.PlayerClonedKubeEvent"
import {$ItemDestroyedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemDestroyedKubeEvent"
import {$NetworkKubeEvent} from "dev.latvian.mods.kubejs.net.NetworkKubeEvent"
import {$BlockBrokenKubeEvent} from "dev.latvian.mods.kubejs.block.BlockBrokenKubeEvent"
import {$ItemPickedUpKubeEvent} from "dev.latvian.mods.kubejs.item.ItemPickedUpKubeEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$PlayerRespawnedKubeEvent} from "dev.latvian.mods.kubejs.player.PlayerRespawnedKubeEvent"
import {$BlockEntityTickKubeEvent} from "dev.latvian.mods.kubejs.block.entity.BlockEntityTickKubeEvent"
import {$ModifyCraftingItemKubeEvent} from "dev.latvian.mods.kubejs.recipe.ModifyCraftingItemKubeEvent"
import {$String} from "java.lang.String"
import {$RemoveRecipesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RemoveRecipesKubeEvent"
import {$RecipeSchemaRegistry} from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchemaRegistry"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipesKubeEvent} from "dev.latvian.mods.kubejs.recipe.RecipesKubeEvent"
import {$EntitySpawnedKubeEvent} from "dev.latvian.mods.kubejs.entity.EntitySpawnedKubeEvent"
import {$RecipeMappingRegistry} from "dev.latvian.mods.kubejs.recipe.schema.RecipeMappingRegistry"
import {$Item} from "net.minecraft.world.item.Item"
import {$RemoveCategoriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.RemoveCategoriesKubeEvent"
import {$GetChunkOilAmountEventJS} from "com.jesz.createdieselgenerators.compat.kubejs.GetChunkOilAmountEventJS"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$StageChangedEvent} from "dev.latvian.mods.kubejs.player.StageChangedEvent"
import {$ModifyItemTooltipsKubeEvent} from "dev.latvian.mods.kubejs.item.ModifyItemTooltipsKubeEvent"
import {$LivingEntityDropsKubeEvent} from "dev.latvian.mods.kubejs.entity.LivingEntityDropsKubeEvent"
import {$InventoryChangedKubeEvent} from "dev.latvian.mods.kubejs.player.InventoryChangedKubeEvent"
import {$BlockStartedFallingKubeEvent} from "dev.latvian.mods.kubejs.block.BlockStartedFallingKubeEvent"
import {$SimplePlayerKubeEvent} from "dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent"
import {$BasicCommandKubeEvent} from "dev.latvian.mods.kubejs.server.BasicCommandKubeEvent"
import {$BlockPlacedKubeEvent} from "dev.latvian.mods.kubejs.block.BlockPlacedKubeEvent"
import {$PlayerChatReceivedKubeEvent} from "dev.latvian.mods.kubejs.player.PlayerChatReceivedKubeEvent"
import {$GeneratedDataStage} from "dev.latvian.mods.kubejs.script.data.GeneratedDataStage"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CompostableRecipesKubeEvent} from "dev.latvian.mods.kubejs.recipe.CompostableRecipesKubeEvent"
import {$RandomTickKubeEvent} from "dev.latvian.mods.kubejs.block.RandomTickKubeEvent"
import {$ItemEntityInteractedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemEntityInteractedKubeEvent"
import {$ItemDroppedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemDroppedKubeEvent"
import {$Registry} from "net.minecraft.core.Registry"
import {$ItemClickedKubeEvent} from "dev.latvian.mods.kubejs.item.ItemClickedKubeEvent"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$SpecialRecipeSerializerManager} from "dev.latvian.mods.kubejs.recipe.special.SpecialRecipeSerializerManager"
import {$ExplosionKubeEvent$Before} from "dev.latvian.mods.kubejs.level.ExplosionKubeEvent$Before"
import {$ServerKubeEvent} from "dev.latvian.mods.kubejs.server.ServerKubeEvent"
import {$GroupEntriesKubeEvent} from "dev.latvian.mods.kubejs.recipe.viewer.GroupEntriesKubeEvent"
import {$BlockPickedKubeEvent} from "dev.latvian.mods.kubejs.block.BlockPickedKubeEvent"

declare global {
export namespace ServerEvents {
function recipeMappingRegistry(handler: (event: $RecipeMappingRegistry) => void): void
function recipes(handler: (event: $RecipesKubeEvent) => void): void
function specialRecipeSerializers(handler: (event: $SpecialRecipeSerializerManager) => void): void
function compostableRecipes(handler: (event: $CompostableRecipesKubeEvent) => void): void
function recipeSchemaRegistry(handler: (event: $RecipeSchemaRegistry) => void): void
function modifyRecipeResult(extra: $String$$Type, handler: (event: $ModifyCraftingItemKubeEvent) => void): void
function tick(handler: (event: $ServerKubeEvent) => void): void
function command(extra: $String$$Type, handler: (event: $CommandKubeEvent) => void): void
function command(handler: (event: $CommandKubeEvent) => void): void
function tags(extra: $ResourceKey$$Type<($Registry<(object)>)>, handler: (event: $TagKubeEvent) => void): void
function loaded(handler: (event: $ServerKubeEvent) => void): void
function commandRegistry(handler: (event: $CommandRegistryKubeEvent) => void): void
function afterRecipes(handler: (event: $AfterRecipesLoadedKubeEvent) => void): void
function unloaded(handler: (event: $ServerKubeEvent) => void): void
function modifyRecipeIngredient(extra: $String$$Type, handler: (event: $ModifyCraftingItemKubeEvent) => void): void
function basicCommand(extra: $String$$Type, handler: (event: $BasicCommandKubeEvent) => void): void
function generateData(extra: $GeneratedDataStage$$Type, handler: (event: $KubeDataGenerator) => void): void
function basicPublicCommand(extra: $String$$Type, handler: (event: $BasicCommandKubeEvent) => void): void
}
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
function loaded(extra: $ResourceKey$$Type<($Level)>, handler: (event: $SimpleLevelKubeEvent) => void): void
function loaded(handler: (event: $SimpleLevelKubeEvent) => void): void
function unloaded(extra: $ResourceKey$$Type<($Level)>, handler: (event: $SimpleLevelKubeEvent) => void): void
function unloaded(handler: (event: $SimpleLevelKubeEvent) => void): void
/**
 * Invoked right before an explosion happens.
 */
function beforeExplosion(extra: $ResourceKey$$Type<($Level)>, handler: (event: $ExplosionKubeEvent$Before) => void): void
/**
 * Invoked right before an explosion happens.
 */
function beforeExplosion(handler: (event: $ExplosionKubeEvent$Before) => void): void
function saved(extra: $ResourceKey$$Type<($Level)>, handler: (event: $SimpleLevelKubeEvent) => void): void
function saved(handler: (event: $SimpleLevelKubeEvent) => void): void
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
export namespace NorthstarEvents {
function generateData(handler: (event: $NorthstarKubeDataEvent) => void): void
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
function randomTick(extra: $ResourceKey$$Type<($Block)>, handler: (event: $RandomTickKubeEvent) => void): void
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
 * Modify dropped items and xp from block.
 */
function drops(extra: $ResourceKey$$Type<($Block)>, handler: (event: $BlockDropsKubeEvent) => void): void
/**
 * Modify dropped items and xp from block.
 */
function drops(handler: (event: $BlockDropsKubeEvent) => void): void
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
function loggedOut(handler: (event: $SimplePlayerKubeEvent) => void): void
function tick(handler: (event: $SimplePlayerKubeEvent) => void): void
function stageRemoved(extra: $String$$Type, handler: (event: $StageChangedEvent) => void): void
function stageRemoved(handler: (event: $StageChangedEvent) => void): void
/**
 * Invoked when a player respawns.
 * 
 * The reason of respawn can be either death or returning from the end.
 */
function respawned(handler: (event: $PlayerRespawnedKubeEvent) => void): void
function decorateChat(handler: (event: $PlayerChatReceivedKubeEvent) => void): void
/**
 * Invoked when a player respawns.
 * 
 * The reason of respawn can be either death or returning from the end.
 */
function cloned(handler: (event: $PlayerClonedKubeEvent) => void): void
function stageAdded(extra: $String$$Type, handler: (event: $StageChangedEvent) => void): void
function stageAdded(handler: (event: $StageChangedEvent) => void): void
/**
 * Invoked when a player gets an advancement.
 */
function advancement(extra: $ResourceLocation$$Type, handler: (event: $PlayerAdvancementKubeEvent) => void): void
/**
 * Invoked when a player gets an advancement.
 */
function advancement(handler: (event: $PlayerAdvancementKubeEvent) => void): void
function chat(handler: (event: $PlayerChatReceivedKubeEvent) => void): void
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
function loggedIn(handler: (event: $SimplePlayerKubeEvent) => void): void
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
function oilAmount(handler: (event: $GetChunkOilAmountEventJS) => void): void
}
}