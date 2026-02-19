declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin" {
import {$ModelLoadingPlugin$Context, $ModelLoadingPlugin$Context$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context"

export interface $ModelLoadingPlugin$$Interface {

(arg0: $ModelLoadingPlugin$Context): void
}

export class $ModelLoadingPlugin implements $ModelLoadingPlugin$$Interface {
 "onInitializeModelLoader"(arg0: $ModelLoadingPlugin$Context$$Type): void
static "register"(arg0: $ModelLoadingPlugin$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingPlugin$$Type = ((arg0: $ModelLoadingPlugin$Context) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelLoadingPlugin$$Original = $ModelLoadingPlugin;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyPress" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AllowKeyPress$$Interface {

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): boolean
}

export class $ScreenKeyboardEvents$AllowKeyPress implements $ScreenKeyboardEvents$AllowKeyPress$$Interface {
 "allowKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AllowKeyPress$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyboardEvents$AllowKeyPress$$Original = $ScreenKeyboardEvents$AllowKeyPress;}
declare module "net.fabricmc.fabric.api.loot.v3.FabricLootPoolBuilder" {
import {$LootPool$Builder} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$Collection$$Type} from "java.util.Collection"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $FabricLootPoolBuilder$$Interface {
}

export class $FabricLootPoolBuilder implements $FabricLootPoolBuilder$$Interface {
static "copyOf"(arg0: $LootPool$$Type): $LootPool$Builder
 "apply"(arg0: $LootItemFunction$$Type): $LootPool$Builder
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootPool$Builder
 "with"(arg0: $LootPoolEntryContainer$$Type): $LootPool$Builder
 "with"(arg0: $Collection$$Type<($LootPoolEntryContainer$$Type)>): $LootPool$Builder
 "conditionally"(arg0: $LootItemCondition$$Type): $LootPool$Builder
 "conditionally"(arg0: $Collection$$Type<($LootItemCondition$$Type)>): $LootPool$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootPoolBuilder$$Type = ($FabricLootPoolBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricLootPoolBuilder$$Original = $FabricLootPoolBuilder;}
declare module "net.fabricmc.fabric.api.loot.v2.FabricLootPoolBuilder" {
import {$LootPool$Builder} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$Collection$$Type} from "java.util.Collection"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

/**
 * 
 * @deprecated
 */
export interface $FabricLootPoolBuilder$$Interface {
}

export class $FabricLootPoolBuilder implements $FabricLootPoolBuilder$$Interface {
/**
 * 
 * @deprecated
 */
static "copyOf"(arg0: $LootPool$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $LootItemFunction$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "with"(arg0: $LootPoolEntryContainer$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "with"(arg0: $Collection$$Type<($LootPoolEntryContainer$$Type)>): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "conditionally"(arg0: $LootItemCondition$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "conditionally"(arg0: $Collection$$Type<($LootItemCondition$$Type)>): $LootPool$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootPoolBuilder$$Type = ($FabricLootPoolBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricLootPoolBuilder$$Original = $FabricLootPoolBuilder;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterTick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$AfterTick$$Interface {

(arg0: $Screen): void
}

export class $ScreenEvents$AfterTick implements $ScreenEvents$AfterTick$$Interface {
 "afterTick"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$AfterTick$$Type = ((arg0: $Screen) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvents$AfterTick$$Original = $ScreenEvents$AfterTick;}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider" {
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockApiLookup$BlockEntityApiProvider$$Interface<A, C> {

(arg0: $BlockEntity, arg1: C): A
}

export class $BlockApiLookup$BlockEntityApiProvider<A, C> implements $BlockApiLookup$BlockEntityApiProvider$$Interface {
 "find"(arg0: $BlockEntity$$Type, arg1: C): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$BlockEntityApiProvider$$Type<A, C> = ((arg0: $BlockEntity, arg1: C) => A);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockApiLookup$BlockEntityApiProvider$$Original<A, C> = $BlockApiLookup$BlockEntityApiProvider<(A), (C)>;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterRender" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$AfterRender$$Interface {

(arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float): void
}

export class $ScreenEvents$AfterRender implements $ScreenEvents$AfterRender$$Interface {
 "afterRender"(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$AfterRender$$Type = ((arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvents$AfterRender$$Original = $ScreenEvents$AfterRender;}
declare module "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MaterialView$$Interface} from "net.fabricmc.fabric.api.renderer.v1.material.MaterialView"
import {$ShadeMode} from "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode"
import {$TriState} from "net.fabricmc.fabric.api.util.TriState"
import {$BlendMode} from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"

export interface $RenderMaterial$$Interface extends $MaterialView$$Interface {
}

export class $RenderMaterial implements $RenderMaterial$$Interface {
static readonly "MATERIAL_STANDARD": $ResourceLocation

/**
 * 
 * @deprecated
 */
 "spriteDepth"(): integer
 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
 "emissive"(): boolean
 "blendMode"(): $BlendMode
 "shadeMode"(): $ShadeMode
 "glint"(): $TriState
 "ambientOcclusion"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderMaterial$$Type = ($RenderMaterial);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderMaterial$$Original = $RenderMaterial;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh" {
import {$QuadEmitter$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Mesh$$Interface {

(arg0: $Consumer<($QuadView)>): void
}

export class $Mesh implements $Mesh$$Interface {
 "forEach"(arg0: $Consumer$$Type<($QuadView)>): void
 "outputTo"(arg0: $QuadEmitter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$$Type = ((arg0: $Consumer<($QuadView)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Mesh$$Original = $Mesh;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$Remove" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$Remove$$Interface {

(arg0: $Screen): void
}

export class $ScreenEvents$Remove implements $ScreenEvents$Remove$$Interface {
 "onRemove"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$Remove$$Type = ((arg0: $Screen) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvents$Remove$$Original = $ScreenEvents$Remove;}
declare module "net.fabricmc.fabric.api.object.builder.v1.block.entity.FabricBlockEntityType" {
import {$Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $FabricBlockEntityType$$Interface {
}

export class $FabricBlockEntityType implements $FabricBlockEntityType$$Interface {
 "addSupportedBlock"(arg0: $Block$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockEntityType$$Type = ($FabricBlockEntityType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBlockEntityType$$Original = $FabricBlockEntityType;}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform" {
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"

export interface $RenderContext$QuadTransform$$Interface {

(arg0: $MutableQuadView): boolean
}

export class $RenderContext$QuadTransform implements $RenderContext$QuadTransform$$Interface {
 "transform"(arg0: $MutableQuadView$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$QuadTransform$$Type = ((arg0: $MutableQuadView) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$QuadTransform$$Original = $RenderContext$QuadTransform;}
declare module "net.fabricmc.fabric.api.client.command.v2.FabricClientCommandSource" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SharedSuggestionProvider$$Interface} from "net.minecraft.commands.SharedSuggestionProvider"
import {$Message$$Type} from "com.mojang.brigadier.Message"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$Vec2} from "net.minecraft.world.phys.Vec2"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"

export interface $FabricClientCommandSource$$Interface extends $SharedSuggestionProvider$$Interface {
get "position"(): $Vec3
get "client"(): $Minecraft
get "player"(): $LocalPlayer
get "entity"(): $Entity
get "world"(): $ClientLevel
get "rotation"(): $Vec2
get "customTabSugggestions"(): $Collection<(StringJS)>
get "recipeNames"(): $Stream<($ResourceLocation)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "selectedEntities"(): $Collection<(StringJS)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "onlinePlayerNames"(): $Collection<(StringJS)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "allTeams"(): $Collection<(StringJS)>
}

export class $FabricClientCommandSource implements $FabricClientCommandSource$$Interface {
 "getPosition"(): $Vec3
 "sendFeedback"(arg0: $Component$$Type): void
 "getClient"(): $Minecraft
 "getPlayer"(): $LocalPlayer
 "getEntity"(): $Entity
 "getWorld"(): $ClientLevel
 "getRotation"(): $Vec2
 "getMeta"(arg0: StringJS): any
 "sendError"(arg0: $Component$$Type): void
 "getCustomTabSugggestions"(): $Collection<(StringJS)>
 "levels"(): $Set<($ResourceKey<($Level)>)>
static "suggest"(arg0: $Iterable$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: (StringJS)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (StringJS)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Stream$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "registryAccess"(): $RegistryAccess
 "enabledFeatures"(): $FeatureFlagSet
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: StringJS, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
static "matchesSubStr"(arg0: StringJS, arg1: StringJS): boolean
 "getSelectedEntities"(): $Collection<(StringJS)>
static "suggest2DCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getOnlinePlayerNames"(): $Collection<(StringJS)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(never)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(never)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "hasPermission"(arg0: integer): boolean
static "suggestCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
 "getAllTeams"(): $Collection<(StringJS)>
 "customSuggestion"(arg0: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricClientCommandSource$$Type = ($FabricClientCommandSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricClientCommandSource$$Original = $FabricClientCommandSource;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseClick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseClick$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export class $ScreenMouseEvents$AfterMouseClick implements $ScreenMouseEvents$AfterMouseClick$$Interface {
 "afterMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseClick$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$AfterMouseClick$$Original = $ScreenMouseEvents$AfterMouseClick;}
declare module "net.fabricmc.fabric.api.client.sound.v1.FabricSoundInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBufferLibrary$$Type} from "net.minecraft.client.sounds.SoundBufferLibrary"

export interface $FabricSoundInstance$$Interface {
}

export class $FabricSoundInstance implements $FabricSoundInstance$$Interface {
static readonly "EMPTY_SOUND": $ResourceLocation

 "getAudioStream"(arg0: $SoundBufferLibrary$$Type, arg1: $ResourceLocation$$Type, arg2: boolean): $CompletableFuture<($AudioStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricSoundInstance$$Type = ($FabricSoundInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricSoundInstance$$Original = $FabricSoundInstance;}
declare module "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$TransferVariant$$Interface} from "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant"

export interface $ItemVariant$$Interface extends $TransferVariant$$Interface<($Item)> {
get "item"(): $Item
get "registryEntry"(): $Holder<($Item)>
get "object"(): $Item
get "componentMap"(): $DataComponentMap
get "components"(): $DataComponentPatch
}

export class $ItemVariant implements $ItemVariant$$Interface {
static readonly "CODEC": $Codec<($ItemVariant)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemVariant)>

 "matches"(arg0: $ItemStack$$Type): boolean
static "of"(arg0: $ItemLike$$Type, arg1: $DataComponentPatch$$Type): $ItemVariant
static "of"(arg0: $ItemLike$$Type): $ItemVariant
static "of"(arg0: $ItemStack$$Type): $ItemVariant
 "getItem"(): $Item
 "withComponentChanges"(arg0: $DataComponentPatch$$Type): $ItemVariant
 "toStack"(): $ItemStack
 "toStack"(arg0: integer): $ItemStack
 "getRegistryEntry"(): $Holder<($Item)>
static "blank"(): $ItemVariant
 "isBlank"(): boolean
 "getObject"(): $Item
 "isOf"(arg0: $Item$$Type): boolean
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "getComponentMap"(): $DataComponentMap
 "hasComponents"(): boolean
 "getComponents"(): $DataComponentPatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariant$$Type = ($ItemVariant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemVariant$$Original = $ItemVariant;}
declare module "net.fabricmc.fabric.api.item.v1.FabricItemStack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$IItemStackExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IItemStackExtension"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EnchantingContext$$Type} from "net.fabricmc.fabric.api.item.v1.EnchantingContext"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"

export interface $FabricItemStack$$Interface extends $IItemStackExtension$$Interface {
get "recipeRemainder"(): $ItemStack
get "craftingRemainingItem"(): $ItemStack
get "enchantmentValue"(): integer
get "piglinCurrency"(): boolean
get "xpRepairRatio"(): float
get "attributeModifiers"(): $ItemAttributeModifiers
get "repairable"(): boolean
get "equipmentSlot"(): $EquipmentSlot
}

export class $FabricItemStack implements $FabricItemStack$$Interface {
 "getRecipeRemainder"(): $ItemStack
 "canBeEnchantedWith"(arg0: $Holder$$Type<($Enchantment)>, arg1: $EnchantingContext$$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
 "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
 "canFitInsideContainerItems"(): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "getEnchantmentValue"(): integer
 "hasCraftingRemainingItem"(): boolean
 "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "canGrindstoneRepair"(): boolean
 "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
 "isPiglinCurrency"(): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
 "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
 "onDroppedByPlayer"(arg0: $Player$$Type): boolean
 "getEntityLifespan"(arg0: $Level$$Type): integer
 "getHighlightTip"(arg0: $Component$$Type): $Component
 "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
 "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getXpRepairRatio"(): float
 "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "getBurnTime"(arg0: $RecipeType$$Type<(never)>): integer
 "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
 "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
 "getAttributeModifiers"(): $ItemAttributeModifiers
 "handler$zld000$fabric_entity_events_v1$canElytraFly"(arg0: $LivingEntity$$Type, arg1: $CallbackInfoReturnable$$Type): void
 "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "canPerformAction"(arg0: $ItemAbility$$Type): boolean
 "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
 "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
 "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
 "canElytraFly"(arg0: $LivingEntity$$Type): boolean
 "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
 "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
 "isRepairable"(): boolean
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "getEquipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItemStack$$Type = ($FabricItemStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricItemStack$$Original = $FabricItemStack;}
declare module "net.fabricmc.fabric.api.gamerule.v1.CustomGameRuleCategory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$GameRules$Value} from "net.minecraft.world.level.GameRules$Value"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GameRules$Key$$Type} from "net.minecraft.world.level.GameRules$Key"

export class $CustomGameRuleCategory {
constructor(arg0: $ResourceLocation$$Type, arg1: $Component$$Type)

public "getName"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public static "getCategory"<T extends $GameRules$Value<(object)>>(arg0: $GameRules$Key$$Type<(T)>): $Optional<($CustomGameRuleCategory)>
get "name"(): $Component
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomGameRuleCategory$$Type = ($CustomGameRuleCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomGameRuleCategory$$Original = $CustomGameRuleCategory;}
declare module "net.fabricmc.fabric.api.blockview.v2.RenderDataBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderDataBlockEntity$$Interface {
get "renderData"(): any
}

export class $RenderDataBlockEntity implements $RenderDataBlockEntity$$Interface {
 "getRenderData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataBlockEntity$$Type = ($RenderDataBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderDataBlockEntity$$Original = $RenderDataBlockEntity;}
declare module "net.fabricmc.fabric.api.event.Event" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $Event<T> {
static readonly "DEFAULT_PHASE": $ResourceLocation

constructor()

public "register"(arg0: $ResourceLocation$$Type, arg1: T): void
public "register"(arg0: T): void
public "invoker"(): T
public "addPhaseOrdering"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$$Type<T> = ($Event<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Event$$Original<T> = $Event<(T)>;}
declare module "net.fabricmc.fabric.api.block.v1.FabricBlockState" {
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBlockState$$Interface {
}

export class $FabricBlockState implements $FabricBlockState$$Interface {
 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockState$$Type = ($FabricBlockState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBlockState$$Original = $FabricBlockState;}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result" {
import {$Enum} from "java.lang.Enum"

export class $TransactionContext$Result extends $Enum<($TransactionContext$Result)> {
static readonly "ABORTED": $TransactionContext$Result
static readonly "COMMITTED": $TransactionContext$Result

public static "values"(): ($TransactionContext$Result)[]
public static "valueOf"(arg0: StringJS): $TransactionContext$Result
public "wasCommitted"(): boolean
public "wasAborted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$Result$$Type = (("aborted") | ("committed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionContext$Result$$Original = $TransactionContext$Result;}
declare module "net.fabricmc.fabric.api.renderer.v1.material.MaterialView" {
import {$ShadeMode} from "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode"
import {$TriState} from "net.fabricmc.fabric.api.util.TriState"
import {$BlendMode} from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"

export interface $MaterialView$$Interface {
}

export class $MaterialView implements $MaterialView$$Interface {
 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
 "emissive"(): boolean
 "blendMode"(): $BlendMode
 "shadeMode"(): $ShadeMode
 "glint"(): $TriState
 "ambientOcclusion"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialView$$Type = ($MaterialView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialView$$Original = $MaterialView;}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake" {
import {$ModelModifier$BeforeBake$Context, $ModelModifier$BeforeBake$Context$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake$Context"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelModifier$BeforeBake$$Interface {

(arg0: $UnbakedModel, arg1: $ModelModifier$BeforeBake$Context): $UnbakedModel$$Type
}

export class $ModelModifier$BeforeBake implements $ModelModifier$BeforeBake$$Interface {
 "modifyModelBeforeBake"(arg0: $UnbakedModel$$Type, arg1: $ModelModifier$BeforeBake$Context$$Type): $UnbakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$BeforeBake$$Type = ((arg0: $UnbakedModel, arg1: $ModelModifier$BeforeBake$Context) => $UnbakedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelModifier$BeforeBake$$Original = $ModelModifier$BeforeBake;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AfterKeyRelease$$Interface {

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export class $ScreenKeyboardEvents$AfterKeyRelease implements $ScreenKeyboardEvents$AfterKeyRelease$$Interface {
 "afterKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AfterKeyRelease$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyboardEvents$AfterKeyRelease$$Original = $ScreenKeyboardEvents$AfterKeyRelease;}
declare module "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"

export interface $TransferVariant$$Interface<O> {
get "blank"(): boolean
get "object"(): O
get "componentMap"(): $DataComponentMap
get "components"(): $DataComponentPatch
}

export class $TransferVariant<O> implements $TransferVariant$$Interface {
 "isBlank"(): boolean
 "getObject"(): O
 "withComponentChanges"(arg0: $DataComponentPatch$$Type): $TransferVariant<(O)>
 "isOf"(arg0: O): boolean
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "getComponentMap"(): $DataComponentMap
 "hasComponents"(): boolean
 "getComponents"(): $DataComponentPatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferVariant$$Type<O> = ($TransferVariant<(O)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransferVariant$$Original<O> = $TransferVariant<(O)>;}
declare module "net.fabricmc.fabric.api.item.v1.FabricComponentMapBuilder" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $FabricComponentMapBuilder$$Interface {
}

export class $FabricComponentMapBuilder implements $FabricComponentMapBuilder$$Interface {
 "getOrCreate"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: $Supplier$$Type<(T)>): T
 "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
 "getOrEmpty"<T>(arg0: $DataComponentType$$Type<($List$$Type<(T)>)>): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricComponentMapBuilder$$Type = ($FabricComponentMapBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricComponentMapBuilder$$Original = $FabricComponentMapBuilder;}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction$Lifecycle" {
import {$Enum} from "java.lang.Enum"

export class $Transaction$Lifecycle extends $Enum<($Transaction$Lifecycle)> {
static readonly "CLOSING": $Transaction$Lifecycle
static readonly "NONE": $Transaction$Lifecycle
static readonly "OPEN": $Transaction$Lifecycle
static readonly "OUTER_CLOSING": $Transaction$Lifecycle

public static "values"(): ($Transaction$Lifecycle)[]
public static "valueOf"(arg0: StringJS): $Transaction$Lifecycle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transaction$Lifecycle$$Type = (("none") | ("open") | ("closing") | ("outer_closing"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transaction$Lifecycle$$Original = $Transaction$Lifecycle;}
declare module "net.fabricmc.fabric.api.loot.v3.FabricLootTableBuilder" {
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$Collection$$Type} from "java.util.Collection"
import {$LootPool$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $FabricLootTableBuilder$$Interface {
}

export class $FabricLootTableBuilder implements $FabricLootTableBuilder$$Interface {
 "pools"(arg0: $Collection$$Type<($LootPool$$Type)>): $LootTable$Builder
static "copyOf"(arg0: $LootTable$$Type): $LootTable$Builder
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootTable$Builder
 "apply"(arg0: $LootItemFunction$$Type): $LootTable$Builder
 "pool"(arg0: $LootPool$$Type): $LootTable$Builder
 "modifyPools"(arg0: $Consumer$$Type<($LootPool$Builder)>): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootTableBuilder$$Type = ($FabricLootTableBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricLootTableBuilder$$Original = $FabricLootTableBuilder;}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad" {
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ModelModifier$OnLoad$Context, $ModelModifier$OnLoad$Context$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad$Context"

export interface $ModelModifier$OnLoad$$Interface {

(arg0: $UnbakedModel, arg1: $ModelModifier$OnLoad$Context): $UnbakedModel$$Type
}

export class $ModelModifier$OnLoad implements $ModelModifier$OnLoad$$Interface {
 "modifyModelOnLoad"(arg0: $UnbakedModel$$Type, arg1: $ModelModifier$OnLoad$Context$$Type): $UnbakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$OnLoad$$Type = ((arg0: $UnbakedModel, arg1: $ModelModifier$OnLoad$Context) => $UnbakedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelModifier$OnLoad$$Original = $ModelModifier$OnLoad;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyPress" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$BeforeKeyPress$$Interface {

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export class $ScreenKeyboardEvents$BeforeKeyPress implements $ScreenKeyboardEvents$BeforeKeyPress$$Interface {
 "beforeKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$BeforeKeyPress$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyboardEvents$BeforeKeyPress$$Original = $ScreenKeyboardEvents$BeforeKeyPress;}
declare module "net.fabricmc.fabric.api.loot.v2.FabricLootTableBuilder" {
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$Collection$$Type} from "java.util.Collection"
import {$LootPool$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Consumer$$Type} from "java.util.function.Consumer"

/**
 * 
 * @deprecated
 */
export interface $FabricLootTableBuilder$$Interface {
}

export class $FabricLootTableBuilder implements $FabricLootTableBuilder$$Interface {
/**
 * 
 * @deprecated
 */
 "pools"(arg0: $Collection$$Type<($LootPool$$Type)>): $LootTable$Builder
/**
 * 
 * @deprecated
 */
static "copyOf"(arg0: $LootTable$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $LootItemFunction$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "pool"(arg0: $LootPool$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "modifyPools"(arg0: $Consumer$$Type<($LootPool$Builder)>): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootTableBuilder$$Type = ($FabricLootTableBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricLootTableBuilder$$Original = $FabricLootTableBuilder;}
declare module "net.fabricmc.fabric.api.item.v1.CustomDamageHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $CustomDamageHandler$$Interface {

(arg0: $ItemStack, arg1: integer, arg2: $LivingEntity, arg3: $EquipmentSlot, arg4: $Runnable): integer
}

export class $CustomDamageHandler implements $CustomDamageHandler$$Interface {
 "damage"(arg0: $ItemStack$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $EquipmentSlot$$Type, arg4: $Runnable$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDamageHandler$$Type = ((arg0: $ItemStack, arg1: integer, arg2: $LivingEntity, arg3: $EquipmentSlot, arg4: $Runnable) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomDamageHandler$$Original = $CustomDamageHandler;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeRender" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$BeforeRender$$Interface {

(arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float): void
}

export class $ScreenEvents$BeforeRender implements $ScreenEvents$BeforeRender$$Interface {
 "beforeRender"(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$BeforeRender$$Type = ((arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvents$BeforeRender$$Original = $ScreenEvents$BeforeRender;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AllowKeyRelease$$Interface {

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): boolean
}

export class $ScreenKeyboardEvents$AllowKeyRelease implements $ScreenKeyboardEvents$AllowKeyRelease$$Interface {
 "allowKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AllowKeyRelease$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyboardEvents$AllowKeyRelease$$Original = $ScreenKeyboardEvents$AllowKeyRelease;}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake" {
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelModifier$AfterBake$Context, $ModelModifier$AfterBake$Context$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake$Context"

export interface $ModelModifier$AfterBake$$Interface {

(arg0: $BakedModel, arg1: $ModelModifier$AfterBake$Context): $BakedModel$$Type
}

export class $ModelModifier$AfterBake implements $ModelModifier$AfterBake$$Interface {
 "modifyModelAfterBake"(arg0: $BakedModel$$Type, arg1: $ModelModifier$AfterBake$Context$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$AfterBake$$Type = ((arg0: $BakedModel, arg1: $ModelModifier$AfterBake$Context) => $BakedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelModifier$AfterBake$$Original = $ModelModifier$AfterBake;}
declare module "net.fabricmc.fabric.api.renderer.v1.material.BlendMode" {
import {$Enum} from "java.lang.Enum"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $BlendMode extends $Enum<($BlendMode)> {
static readonly "CUTOUT": $BlendMode
static readonly "TRANSLUCENT": $BlendMode
static readonly "CUTOUT_MIPPED": $BlendMode
static readonly "SOLID": $BlendMode
static readonly "DEFAULT": $BlendMode
readonly "blockRenderLayer": $RenderType

public static "fromRenderLayer"(arg0: $RenderType$$Type): $BlendMode
public static "values"(): ($BlendMode)[]
public static "valueOf"(arg0: StringJS): $BlendMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendMode$$Type = (("default") | ("solid") | ("cutout_mipped") | ("cutout") | ("translucent"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlendMode$$Original = $BlendMode;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView" {
import {$Vector2fc$$Type} from "org.joml.Vector2fc"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$QuadView$$Type, $QuadView$$Interface} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $MutableQuadView$$Interface extends $QuadView$$Interface {
}

export class $MutableQuadView implements $MutableQuadView$$Interface {
static readonly "BAKE_LOCK_UV": integer
static readonly "BAKE_NORMALIZED": integer
static readonly "BAKE_FLIP_V": integer
static readonly "BAKE_ROTATE_90": integer
static readonly "BAKE_FLIP_U": integer
static readonly "BAKE_ROTATE_NONE": integer
static readonly "BAKE_ROTATE_180": integer
static readonly "BAKE_ROTATE_270": integer

 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $MutableQuadView
 "faceNormal"(): $Vector3f
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "normalZ"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightFace"(): $Direction
 "colorIndex"(): integer
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
 "cullFace"(): $Direction
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableQuadView$$Type = ($MutableQuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableQuadView$$Original = $MutableQuadView;}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context" {
import {$ModelModifier$BeforeBake} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake"
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelModifier$OnLoad} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad"
import {$ModelModifier$AfterBake} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake"
import {$ModelResolver} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$BlockStateResolver$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver"

export interface $ModelLoadingPlugin$Context$$Interface {
}

export class $ModelLoadingPlugin$Context implements $ModelLoadingPlugin$Context$$Interface {
 "registerBlockStateResolver"(arg0: $Block$$Type, arg1: $BlockStateResolver$$Type): void
 "addModels"(...arg0: ($ResourceLocation$$Type)[]): void
 "addModels"(arg0: $Collection$$Type<($ResourceLocation$$Type)>): void
 "modifyModelAfterBake"(): $Event<($ModelModifier$AfterBake)>
 "modifyModelBeforeBake"(): $Event<($ModelModifier$BeforeBake)>
 "resolveModel"(): $Event<($ModelResolver)>
 "modifyModelOnLoad"(): $Event<($ModelModifier$OnLoad)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingPlugin$Context$$Type = ($ModelLoadingPlugin$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelLoadingPlugin$Context$$Original = $ModelLoadingPlugin$Context;}
declare module "net.fabricmc.fabric.api.tag.FabricTagKey" {
import {$Component} from "net.minecraft.network.chat.Component"

export interface $FabricTagKey$$Interface {
get "name"(): $Component
get "translationKey"(): StringJS
}

export class $FabricTagKey implements $FabricTagKey$$Interface {
 "getName"(): $Component
 "getTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricTagKey$$Type = ($FabricTagKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricTagKey$$Original = $FabricTagKey;}
declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.FabricIngredient" {
import {$CustomIngredient} from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"

export interface $FabricIngredient$$Interface {
get "customIngredient"(): $CustomIngredient
}

export class $FabricIngredient implements $FabricIngredient$$Interface {
 "getCustomIngredient"(): $CustomIngredient
 "requiresTesting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricIngredient$$Type = ($FabricIngredient);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricIngredient$$Original = $FabricIngredient;}
declare module "net.fabricmc.fabric.api.item.v1.FabricItem$Settings" {
import {$EquipmentSlotProvider$$Type} from "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider"
import {$Item$Properties} from "net.minecraft.world.item.Item$Properties"
import {$CustomDamageHandler$$Type} from "net.fabricmc.fabric.api.item.v1.CustomDamageHandler"

export interface $FabricItem$Settings$$Interface {
}

export class $FabricItem$Settings implements $FabricItem$Settings$$Interface {
 "customDamage"(arg0: $CustomDamageHandler$$Type): $Item$Properties
 "equipmentSlot"(arg0: $EquipmentSlotProvider$$Type): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItem$Settings$$Type = ($FabricItem$Settings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricItem$Settings$$Original = $FabricItem$Settings;}
declare module "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Holder} from "net.minecraft.core.Holder"
import {$TransferVariant, $TransferVariant$$Interface} from "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant"

export interface $FluidVariant$$Interface extends $TransferVariant$$Interface<($Fluid)> {
get "fluid"(): $Fluid
get "registryEntry"(): $Holder<($Fluid)>
get "object"(): $Fluid
get "componentMap"(): $DataComponentMap
get "components"(): $DataComponentPatch
}

export class $FluidVariant implements $FluidVariant$$Interface {
static readonly "CODEC": $Codec<($FluidVariant)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidVariant)>

static "of"(arg0: $Fluid$$Type, arg1: $DataComponentPatch$$Type): $FluidVariant
static "of"(arg0: $Fluid$$Type): $FluidVariant
 "withComponentChanges"(arg0: $DataComponentPatch$$Type): $TransferVariant
 "getFluid"(): $Fluid
 "getRegistryEntry"(): $Holder<($Fluid)>
static "blank"(): $FluidVariant
 "isBlank"(): boolean
 "getObject"(): $Fluid
 "isOf"(arg0: $Fluid$$Type): boolean
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "getComponentMap"(): $DataComponentMap
 "hasComponents"(): boolean
 "getComponents"(): $DataComponentPatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVariant$$Type = ($FluidVariant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVariant$$Original = $FluidVariant;}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver" {
import {$BlockStateResolver$Context, $BlockStateResolver$Context$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver$Context"

export interface $BlockStateResolver$$Interface {

(arg0: $BlockStateResolver$Context): void
}

export class $BlockStateResolver implements $BlockStateResolver$$Interface {
 "resolveBlockStates"(arg0: $BlockStateResolver$Context$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateResolver$$Type = ((arg0: $BlockStateResolver$Context) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateResolver$$Original = $BlockStateResolver;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseScroll" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseScroll$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double): void
}

export class $ScreenMouseEvents$BeforeMouseScroll implements $ScreenMouseEvents$BeforeMouseScroll$$Interface {
 "beforeMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseScroll$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$BeforeMouseScroll$$Original = $ScreenMouseEvents$BeforeMouseScroll;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseRelease$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export class $ScreenMouseEvents$AfterMouseRelease implements $ScreenMouseEvents$AfterMouseRelease$$Interface {
 "afterMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseRelease$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$AfterMouseRelease$$Original = $ScreenMouseEvents$AfterMouseRelease;}
declare module "net.fabricmc.fabric.api.block.v1.FabricBlock" {
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBlock$$Interface {
}

export class $FabricBlock implements $FabricBlock$$Interface {
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlock$$Type = ($FabricBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBlock$$Original = $FabricBlock;}
declare module "net.fabricmc.fabric.api.registry.FabricBrewingRecipeRegistryBuilder$BuildCallback" {
import {$PotionBrewing$Builder, $PotionBrewing$Builder$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Builder"

export interface $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Interface {

(arg0: $PotionBrewing$Builder): void
}

export class $FabricBrewingRecipeRegistryBuilder$BuildCallback implements $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Interface {
 "build"(arg0: $PotionBrewing$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Type = ((arg0: $PotionBrewing$Builder) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Original = $FabricBrewingRecipeRegistryBuilder$BuildCallback;}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.FabricBakedModelManager" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"

export interface $FabricBakedModelManager$$Interface {
}

export class $FabricBakedModelManager implements $FabricBakedModelManager$$Interface {
 "getModel"(arg0: $ResourceLocation$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModelManager$$Type = ($FabricBakedModelManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBakedModelManager$$Original = $FabricBakedModelManager;}
declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentType" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier} from "java.util.function.Supplier"

export interface $AttachmentType$$Interface<A> {
get "synced"(): boolean
get "persistent"(): boolean
}

export class $AttachmentType<A> implements $AttachmentType$$Interface {
 "persistenceCodec"(): $Codec<(A)>
 "isSynced"(): boolean
 "identifier"(): $ResourceLocation
 "copyOnDeath"(): boolean
 "isPersistent"(): boolean
 "initializer"(): $Supplier<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$$Type<A> = ($AttachmentType<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentType$$Original<A> = $AttachmentType<(A)>;}
declare module "net.fabricmc.fabric.api.item.v1.EnchantingContext" {
import {$Enum} from "java.lang.Enum"

export class $EnchantingContext extends $Enum<($EnchantingContext)> {
static readonly "PRIMARY": $EnchantingContext
static readonly "ACCEPTABLE": $EnchantingContext

public static "values"(): ($EnchantingContext)[]
public static "valueOf"(arg0: StringJS): $EnchantingContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingContext$$Type = (("acceptable") | ("primary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingContext$$Original = $EnchantingContext;}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer" {
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

/**
 * 
 * @deprecated
 */
export interface $RenderContext$BakedModelConsumer$$Interface extends $Consumer$$Interface<($BakedModel)> {
}

export class $RenderContext$BakedModelConsumer implements $RenderContext$BakedModelConsumer$$Interface {
 "accept"(arg0: $BakedModel$$Type): void
 "accept"(arg0: $BakedModel$$Type, arg1: $BlockState$$Type): void
 "accept"(arg0: any): void
 "andThen"(arg0: $Consumer$$Type<($BakedModel)>): $Consumer<($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$BakedModelConsumer$$Type = ($RenderContext$BakedModelConsumer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$BakedModelConsumer$$Original = $RenderContext$BakedModelConsumer;}
declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Supplier$$Type} from "java.util.function.Supplier"

export interface $AttachmentTarget$$Interface {
}

export class $AttachmentTarget implements $AttachmentTarget$$Interface {
static readonly "NBT_ATTACHMENT_KEY": StringJS

 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$$Type<(never)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTarget$$Type = ($AttachmentTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentTarget$$Original = $AttachmentTarget;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseClick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseClick$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export class $ScreenMouseEvents$BeforeMouseClick implements $ScreenMouseEvents$BeforeMouseClick$$Interface {
 "beforeMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseClick$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$BeforeMouseClick$$Original = $ScreenMouseEvents$BeforeMouseClick;}
declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$CustomIngredientSerializer} from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredientSerializer"

export interface $CustomIngredient$$Interface {
get "serializer"(): $CustomIngredientSerializer<(never)>
get "matchingStacks"(): $List<($ItemStack)>
}

export class $CustomIngredient implements $CustomIngredient$$Interface {
 "getSerializer"(): $CustomIngredientSerializer<(never)>
 "test"(arg0: $ItemStack$$Type): boolean
 "toVanilla"(): $Ingredient
 "requiresTesting"(): boolean
 "getMatchingStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIngredient$$Type = ($CustomIngredient);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomIngredient$$Original = $CustomIngredient;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseClick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseClick$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): boolean
}

export class $ScreenMouseEvents$AllowMouseClick implements $ScreenMouseEvents$AllowMouseClick$$Interface {
 "allowMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseClick$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$AllowMouseClick$$Original = $ScreenMouseEvents$AllowMouseClick;}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Transaction$Lifecycle} from "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction$Lifecycle"
import {$TransactionContext$OuterCloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback"
import {$TransactionContext, $TransactionContext$$Type, $TransactionContext$$Interface} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import {$TransactionContext$CloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback"

export interface $Transaction$$Interface extends $AutoCloseable$$Interface, $TransactionContext$$Interface {
get "open"(): boolean
get "currentUnsafe"(): $TransactionContext
get "lifecycle"(): $Transaction$Lifecycle
}

export class $Transaction implements $Transaction$$Interface {
 "commit"(): void
static "isOpen"(): boolean
 "close"(): void
 "abort"(): void
static "openNested"(arg0: $TransactionContext$$Type): $Transaction
static "openOuter"(): $Transaction
/**
 * 
 * @deprecated
 */
static "getCurrentUnsafe"(): $TransactionContext
static "getLifecycle"(): $Transaction$Lifecycle
 "openNested"(): $Transaction
 "nestingDepth"(): integer
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "getOpenTransaction"(arg0: integer): $Transaction
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transaction$$Type = ($Transaction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transaction$$Original = $Transaction;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseScroll" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseScroll$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double): boolean
}

export class $ScreenMouseEvents$AllowMouseScroll implements $ScreenMouseEvents$AllowMouseScroll$$Interface {
 "allowMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseScroll$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$AllowMouseScroll$$Original = $ScreenMouseEvents$AllowMouseScroll;}
declare module "net.fabricmc.fabric.api.blockview.v2.FabricBlockView" {
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Holder} from "net.minecraft.core.Holder"

export interface $FabricBlockView$$Interface {
}

export class $FabricBlockView implements $FabricBlockView$$Interface {
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockView$$Type = ($FabricBlockView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBlockView$$Original = $FabricBlockView;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Direction} from "net.minecraft.core.Direction"
import {$RenderMaterial} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadView$$Interface {
}

export class $QuadView implements $QuadView$$Interface {
static readonly "VANILLA_QUAD_STRIDE": integer
static readonly "VANILLA_VERTEX_STRIDE": integer

 "faceNormal"(): $Vector3f
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "normalZ"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightFace"(): $Direction
 "colorIndex"(): integer
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
 "cullFace"(): $Direction
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadView$$Type = ($QuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadView$$Original = $QuadView;}
declare module "net.fabricmc.fabric.api.util.TriState" {
import {$BooleanFunction$$Type} from "net.fabricmc.fabric.api.util.BooleanFunction"
import {$Enum} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Throwable} from "java.lang.Throwable"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "FALSE": $TriState
static readonly "DEFAULT": $TriState

public "getBoxed"(): boolean
public "get"(): boolean
public static "values"(): ($TriState)[]
public static "valueOf"(arg0: StringJS): $TriState
public "map"<T>(arg0: $BooleanFunction$$Type<(T)>): $Optional<(T)>
public static "of"(arg0: boolean): $TriState
public static "of"(arg0: boolean): $TriState
public "orElse"(arg0: boolean): boolean
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): boolean
public "orElseGet"(arg0: $BooleanSupplier$$Type): boolean
get "boxed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("false") | ("default") | ("true"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriState$$Original = $TriState;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseScroll" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseScroll$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double): void
}

export class $ScreenMouseEvents$AfterMouseScroll implements $ScreenMouseEvents$AfterMouseScroll$$Interface {
 "afterMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseScroll$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$AfterMouseScroll$$Original = $ScreenMouseEvents$AfterMouseScroll;}
declare module "net.fabricmc.fabric.api.registry.FabricBrewingRecipeRegistryBuilder" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$FabricBrewingRecipeRegistryBuilder$BuildCallback} from "net.fabricmc.fabric.api.registry.FabricBrewingRecipeRegistryBuilder$BuildCallback"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export interface $FabricBrewingRecipeRegistryBuilder$$Interface {
get "enabledFeatures"(): $FeatureFlagSet
}

export class $FabricBrewingRecipeRegistryBuilder implements $FabricBrewingRecipeRegistryBuilder$$Interface {
static readonly "BUILD": $Event<($FabricBrewingRecipeRegistryBuilder$BuildCallback)>

 "registerPotionRecipe"(arg0: $Holder$$Type<($Potion)>, arg1: $Ingredient$$Type, arg2: $Holder$$Type<($Potion)>): void
 "registerRecipes"(arg0: $Ingredient$$Type, arg1: $Holder$$Type<($Potion)>): void
 "getEnabledFeatures"(): $FeatureFlagSet
 "registerItemRecipe"(arg0: $Item$$Type, arg1: $Ingredient$$Type, arg2: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBrewingRecipeRegistryBuilder$$Type = ($FabricBrewingRecipeRegistryBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBrewingRecipeRegistryBuilder$$Original = $FabricBrewingRecipeRegistryBuilder;}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext" {
import {$QuadEmitter} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$Mesh} from "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh"
import {$RenderContext$BakedModelConsumer} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer"
import {$ItemDisplayContext} from "net.minecraft.world.item.ItemDisplayContext"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderContext$QuadTransform$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$Consumer} from "java.util.function.Consumer"

export interface $RenderContext$$Interface {
get "emitter"(): $QuadEmitter
get "renderType"(): $RenderType
get "modelData"(): $ModelData
}

export class $RenderContext implements $RenderContext$$Interface {
 "getEmitter"(): $QuadEmitter
 "hasTransform"(): boolean
 "getRenderType"(): $RenderType
 "getModelData"(): $ModelData
 "itemTransformationMode"(): $ItemDisplayContext
/**
 * 
 * @deprecated
 */
 "meshConsumer"(): $Consumer<($Mesh)>
 "popTransform"(): void
 "pushTransform"(arg0: $RenderContext$QuadTransform$$Type): void
 "isFaceCulled"(arg0: $Direction$$Type): boolean
/**
 * 
 * @deprecated
 */
 "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/**
 * 
 * @deprecated
 */
 "fallbackConsumer"(): $Consumer<($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$$Type = ($RenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$$Original = $RenderContext;}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback" {
import {$TransactionContext$Result, $TransactionContext$Result$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"

export interface $TransactionContext$OuterCloseCallback$$Interface {

(arg0: $TransactionContext$Result): void
}

export class $TransactionContext$OuterCloseCallback implements $TransactionContext$OuterCloseCallback$$Interface {
 "afterOuterClose"(arg0: $TransactionContext$Result$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$OuterCloseCallback$$Type = ((arg0: $TransactionContext$Result) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionContext$OuterCloseCallback$$Original = $TransactionContext$OuterCloseCallback;}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Interface} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

/**
 * 
 * @deprecated
 */
export interface $RenderAttachedBlockView$$Interface extends $BlockAndTintGetter$$Interface {
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "minBuildHeight"(): integer
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "minSection"(): integer
}

export class $RenderAttachedBlockView implements $RenderAttachedBlockView$$Interface {
/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getLightEngine"(): $LevelLightEngine
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$$Type): integer
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getMinBuildHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getHeight"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "getMaxSection"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachedBlockView$$Type = ($RenderAttachedBlockView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderAttachedBlockView$$Original = $RenderAttachedBlockView;}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver" {
import {$ModelResolver$Context, $ModelResolver$Context$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver$Context"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelResolver$$Interface {

(arg0: $ModelResolver$Context): $UnbakedModel$$Type
}

export class $ModelResolver implements $ModelResolver$$Interface {
 "resolveModel"(arg0: $ModelResolver$Context$$Type): $UnbakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelResolver$$Type = ((arg0: $ModelResolver$Context) => $UnbakedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelResolver$$Original = $ModelResolver;}
declare module "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel" {
import {$RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBakedModel$$Interface {
get "vanillaAdapter"(): boolean
}

export class $FabricBakedModel implements $FabricBakedModel$$Interface {
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModel$$Type = ($FabricBakedModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBakedModel$$Original = $FabricBakedModel;}
declare module "net.fabricmc.fabric.api.item.v1.FabricItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$EnchantingContext$$Type} from "net.fabricmc.fabric.api.item.v1.EnchantingContext"

export interface $FabricItem$$Interface {
}

export class $FabricItem implements $FabricItem$$Interface {
 "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
 "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
 "getRecipeRemainder"(arg0: $ItemStack$$Type): $ItemStack
 "canBeEnchantedWith"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>, arg2: $EnchantingContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItem$$Type = ($FabricItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricItem$$Original = $FabricItem;}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback" {
import {$TransactionContext$Result, $TransactionContext$Result$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"
import {$TransactionContext, $TransactionContext$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"

export interface $TransactionContext$CloseCallback$$Interface {

(arg0: $TransactionContext, arg1: $TransactionContext$Result): void
}

export class $TransactionContext$CloseCallback implements $TransactionContext$CloseCallback$$Interface {
 "onClose"(arg0: $TransactionContext$$Type, arg1: $TransactionContext$Result$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$CloseCallback$$Type = ((arg0: $TransactionContext, arg1: $TransactionContext$Result) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionContext$CloseCallback$$Original = $TransactionContext$CloseCallback;}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockApiLookup$BlockApiProvider$$Interface<A, C> {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C): A
}

export class $BlockApiLookup$BlockApiProvider<A, C> implements $BlockApiLookup$BlockApiProvider$$Interface {
 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$BlockApiProvider$$Type<A, C> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => A);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockApiLookup$BlockApiProvider$$Original<A, C> = $BlockApiLookup$BlockApiProvider<(A), (C)>;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseRelease$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export class $ScreenMouseEvents$BeforeMouseRelease implements $ScreenMouseEvents$BeforeMouseRelease$$Interface {
 "beforeMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseRelease$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$BeforeMouseRelease$$Original = $ScreenMouseEvents$BeforeMouseRelease;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyPress" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AfterKeyPress$$Interface {

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export class $ScreenKeyboardEvents$AfterKeyPress implements $ScreenKeyboardEvents$AfterKeyPress$$Interface {
 "afterKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AfterKeyPress$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyboardEvents$AfterKeyPress$$Original = $ScreenKeyboardEvents$AfterKeyPress;}
declare module "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export interface $SpriteFinder$$Interface {
}

export class $SpriteFinder implements $SpriteFinder$$Interface {
static "get"(arg0: $TextureAtlas$$Type): $SpriteFinder
/**
 * 
 * @deprecated
 */
 "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinder$$Type = ($SpriteFinder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinder$$Original = $SpriteFinder;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter" {
import {$Vector2fc$$Type} from "org.joml.Vector2fc"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$MutableQuadView, $MutableQuadView$$Type, $MutableQuadView$$Interface} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadEmitter$$Interface extends $MutableQuadView$$Interface {
}

export class $QuadEmitter implements $QuadEmitter$$Interface {
static readonly "CULL_FACE_EPSILON": float

 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $QuadEmitter
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $QuadEmitter
 "color"(arg0: integer, arg1: integer): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $QuadEmitter
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $QuadEmitter
 "square"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $QuadEmitter
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $QuadEmitter
 "uv"(arg0: integer, arg1: float, arg2: float): $QuadEmitter
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "emit"(): $QuadEmitter
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $QuadEmitter
 "uvUnitSquare"(): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteUnitSquare"(arg0: integer): $QuadEmitter
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $QuadEmitter
 "fromVanilla"(arg0: (integer)[], arg1: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "faceNormal"(): $Vector3f
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "normalZ"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightFace"(): $Direction
 "colorIndex"(): integer
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
 "cullFace"(): $Direction
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadEmitter$$Type = ($QuadEmitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadEmitter$$Original = $QuadEmitter;}
declare module "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode" {
import {$Enum} from "java.lang.Enum"

export class $ShadeMode extends $Enum<($ShadeMode)> {
static readonly "ENHANCED": $ShadeMode
static readonly "VANILLA": $ShadeMode

public static "values"(): ($ShadeMode)[]
public static "valueOf"(arg0: StringJS): $ShadeMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadeMode$$Type = (("enhanced") | ("vanilla"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShadeMode$$Original = $ShadeMode;}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiCache" {
import {$BlockApiLookup, $BlockApiLookup$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockApiCache$$Interface<A, C> {
get "pos"(): $BlockPos
get "lookup"(): $BlockApiLookup<(A), (C)>
get "blockEntity"(): $BlockEntity
get "world"(): $ServerLevel
}

export class $BlockApiCache<A, C> implements $BlockApiCache$$Interface {
 "find"(arg0: C): A
 "find"(arg0: $BlockState$$Type, arg1: C): A
static "create"<A, C>(arg0: $BlockApiLookup$$Type<(A), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): $BlockApiCache<(A), (C)>
 "getPos"(): $BlockPos
 "getLookup"(): $BlockApiLookup<(A), (C)>
 "getBlockEntity"(): $BlockEntity
 "getWorld"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiCache$$Type<A, C> = ($BlockApiCache<(A), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockApiCache$$Original<A, C> = $BlockApiCache<(A), (C)>;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseRelease$$Interface {

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): boolean
}

export class $ScreenMouseEvents$AllowMouseRelease implements $ScreenMouseEvents$AllowMouseRelease$$Interface {
 "allowMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseRelease$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvents$AllowMouseRelease$$Original = $ScreenMouseEvents$AllowMouseRelease;}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockApiLookup$BlockEntityApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockApiLookup$$Interface<A, C> {
get "id"(): $ResourceLocation
}

export class $BlockApiLookup<A, C> implements $BlockApiLookup$$Interface {
static "get"<A, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(A)>, arg2: $Class$$Type<(C)>): $BlockApiLookup<(A), (C)>
 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A
 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: C): A
 "getId"(): $ResourceLocation
 "getProvider"(arg0: $Block$$Type): $BlockApiLookup$BlockApiProvider<(A), (C)>
 "apiClass"(): $Class<(A)>
 "registerForBlocks"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>, ...arg1: ($Block$$Type)[]): void
 "registerFallback"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>): void
 "contextClass"(): $Class<(C)>
 "registerSelf"(...arg0: ($BlockEntityType$$Type<(never)>)[]): void
 "registerForBlockEntities"(arg0: $BlockApiLookup$BlockEntityApiProvider$$Type<(A), (C)>, ...arg1: ($BlockEntityType$$Type<(never)>)[]): void
 "registerForBlockEntity"<T extends $BlockEntity>(arg0: $BiFunction$$Type<(T), (C), (A)>, arg1: $BlockEntityType$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$$Type<A, C> = ($BlockApiLookup<(A), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockApiLookup$$Original<A, C> = $BlockApiLookup<(A), (C)>;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$BeforeKeyRelease$$Interface {

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export class $ScreenKeyboardEvents$BeforeKeyRelease implements $ScreenKeyboardEvents$BeforeKeyRelease$$Interface {
 "beforeKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$BeforeKeyRelease$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyboardEvents$BeforeKeyRelease$$Original = $ScreenKeyboardEvents$BeforeKeyRelease;}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext" {
import {$Transaction} from "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction"
import {$TransactionContext$OuterCloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback"
import {$TransactionContext$CloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback"

export interface $TransactionContext$$Interface {
}

export class $TransactionContext implements $TransactionContext$$Interface {
 "openNested"(): $Transaction
 "nestingDepth"(): integer
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "getOpenTransaction"(arg0: integer): $Transaction
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$$Type = ($TransactionContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionContext$$Original = $TransactionContext;}
declare module "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $EquipmentSlotProvider$$Interface {

(arg0: $LivingEntity, arg1: $ItemStack): $EquipmentSlot$$Type
}

export class $EquipmentSlotProvider implements $EquipmentSlotProvider$$Interface {
 "getPreferredEquipmentSlot"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentSlotProvider$$Type = ((arg0: $LivingEntity, arg1: $ItemStack) => $EquipmentSlot$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipmentSlotProvider$$Original = $EquipmentSlotProvider;}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachmentBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * 
 * @deprecated
 */
export interface $RenderAttachmentBlockEntity$$Interface {

(): any
get "renderAttachmentData"(): any
}

export class $RenderAttachmentBlockEntity implements $RenderAttachmentBlockEntity$$Interface {
/**
 * 
 * @deprecated
 */
 "getRenderAttachmentData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachmentBlockEntity$$Type = (() => any);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderAttachmentBlockEntity$$Original = $RenderAttachmentBlockEntity;}
declare module "net.fabricmc.fabric.api.screenhandler.v1.FabricScreenHandlerFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricScreenHandlerFactory$$Interface {
}

export class $FabricScreenHandlerFactory implements $FabricScreenHandlerFactory$$Interface {
 "shouldCloseCurrentScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricScreenHandlerFactory$$Type = ($FabricScreenHandlerFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricScreenHandlerFactory$$Original = $FabricScreenHandlerFactory;}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeTick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$BeforeTick$$Interface {

(arg0: $Screen): void
}

export class $ScreenEvents$BeforeTick implements $ScreenEvents$BeforeTick$$Interface {
 "beforeTick"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$BeforeTick$$Type = ((arg0: $Screen) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvents$BeforeTick$$Original = $ScreenEvents$BeforeTick;}
declare module "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export interface $IdentifiableResourceReloadListener$$Interface extends $PreparableReloadListener$$Interface {
get "fabricDependencies"(): $Collection<($ResourceLocation)>
get "fabricId"(): $ResourceLocation
get "name"(): StringJS
}

export class $IdentifiableResourceReloadListener implements $IdentifiableResourceReloadListener$$Interface {
 "getFabricDependencies"(): $Collection<($ResourceLocation)>
 "getFabricId"(): $ResourceLocation
 "getName"(): StringJS
 "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdentifiableResourceReloadListener$$Type = ($IdentifiableResourceReloadListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdentifiableResourceReloadListener$$Original = $IdentifiableResourceReloadListener;}
declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredientSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomIngredient} from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $CustomIngredientSerializer$$Interface<T extends $CustomIngredient> {
get "packetCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
get "identifier"(): $ResourceLocation
}

export class $CustomIngredientSerializer<T extends $CustomIngredient> implements $CustomIngredientSerializer$$Interface {
static "get"(arg0: $ResourceLocation$$Type): $CustomIngredientSerializer<(never)>
static "register"(arg0: $CustomIngredientSerializer$$Type<(never)>): void
 "getPacketCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "getIdentifier"(): $ResourceLocation
 "getCodec"(arg0: boolean): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIngredientSerializer$$Type<T> = ($CustomIngredientSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomIngredientSerializer$$Original<T> = $CustomIngredientSerializer<(T)>;}
