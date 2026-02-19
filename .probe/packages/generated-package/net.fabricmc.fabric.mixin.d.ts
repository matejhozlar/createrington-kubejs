declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockAccessor" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $AbstractBlockAccessor$$Interface {

(): $BlockBehaviour$Properties$$Type
get "properties"(): $BlockBehaviour$Properties
}

export class $AbstractBlockAccessor implements $AbstractBlockAccessor$$Interface {
 "getProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockAccessor$$Type = (() => $BlockBehaviour$Properties$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBlockAccessor$$Original = $AbstractBlockAccessor;}
declare module "net.fabricmc.fabric.mixin.transfer.ContainerComponentAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ContainerComponentAccessor$$Interface {

(): $NonNullList$$Type<($ItemStack$$Type)>
}

export class $ContainerComponentAccessor implements $ContainerComponentAccessor$$Interface {
 "fabric_getStacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerComponentAccessor$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerComponentAccessor$$Original = $ContainerComponentAccessor;}
declare module "net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KeyBindingAccessor$$Interface {

(): integer
}

export class $KeyBindingAccessor implements $KeyBindingAccessor$$Interface {
 "fabric_getTimesPressed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyBindingAccessor$$Original = $KeyBindingAccessor;}
declare module "net.fabricmc.fabric.mixin.networking.accessor.ServerCommonNetworkHandlerAccessor" {
import {$Connection} from "net.minecraft.network.Connection"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export interface $ServerCommonNetworkHandlerAccessor$$Interface {
get "server"(): $MinecraftServer
get "connection"(): $Connection
}

export class $ServerCommonNetworkHandlerAccessor implements $ServerCommonNetworkHandlerAccessor$$Interface {
 "getServer"(): $MinecraftServer
 "getConnection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommonNetworkHandlerAccessor$$Type = ($ServerCommonNetworkHandlerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerCommonNetworkHandlerAccessor$$Original = $ServerCommonNetworkHandlerAccessor;}
declare module "net.fabricmc.fabric.mixin.transfer.BundleContentsComponentAccessor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fraction} from "org.apache.commons.lang3.math.Fraction"

export interface $BundleContentsComponentAccessor$$Interface {
}

export class $BundleContentsComponentAccessor implements $BundleContentsComponentAccessor$$Interface {
static "getOccupancy"(arg0: $ItemStack$$Type): $Fraction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleContentsComponentAccessor$$Type = ($BundleContentsComponentAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundleContentsComponentAccessor$$Original = $BundleContentsComponentAccessor;}
declare module "net.fabricmc.fabric.mixin.client.rendering.DimensionEffectsAccessor" {
import {$DimensionSpecialEffects} from "net.minecraft.client.renderer.DimensionSpecialEffects"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Object2ObjectMap} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"

export interface $DimensionEffectsAccessor$$Interface {
get "identifierMap"(): $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>
}

export class $DimensionEffectsAccessor implements $DimensionEffectsAccessor$$Interface {
static "getIdentifierMap"(): $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionEffectsAccessor$$Type = ($DimensionEffectsAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionEffectsAccessor$$Original = $DimensionEffectsAccessor;}
declare module "net.fabricmc.fabric.mixin.item.EnchantmentBuilderAccessor" {
import {$Enchantment} from "net.minecraft.world.item.enchantment.Enchantment"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$Enchantment$EnchantmentDefinition} from "net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DataComponentMap$Builder} from "net.minecraft.core.component.DataComponentMap$Builder"

export interface $EnchantmentBuilderAccessor$$Interface {
get "definition"(): $Enchantment$EnchantmentDefinition
get "effectMap"(): $DataComponentMap$Builder
get "exclusiveSet"(): $HolderSet<($Enchantment)>
}

export class $EnchantmentBuilderAccessor implements $EnchantmentBuilderAccessor$$Interface {
 "getDefinition"(): $Enchantment$EnchantmentDefinition
 "getEffectMap"(): $DataComponentMap$Builder
 "getExclusiveSet"(): $HolderSet<($Enchantment)>
 "invokeGetEffectsList"<E>(arg0: $DataComponentType$$Type<($List$$Type<(E)>)>): $List<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentBuilderAccessor$$Type = ($EnchantmentBuilderAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentBuilderAccessor$$Original = $EnchantmentBuilderAccessor;}
declare module "net.fabricmc.fabric.mixin.loot.LootTableAccessor" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LootItemFunction} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$LootPool} from "net.minecraft.world.level.storage.loot.LootPool"

export interface $LootTableAccessor$$Interface {
}

export class $LootTableAccessor implements $LootTableAccessor$$Interface {
 "fabric_getFunctions"(): $List<($LootItemFunction)>
 "fabric_getRandomSequenceId"(): $Optional<($ResourceLocation)>
 "fabric_getPools"(): $List<($LootPool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$$Type = ($LootTableAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableAccessor$$Original = $LootTableAccessor;}
declare module "net.fabricmc.fabric.mixin.attachment.AttachmentTypeAccessor" {
import {$IAttachmentSerializer, $IAttachmentSerializer$$Type} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"

export interface $AttachmentTypeAccessor$$Interface {

(): $IAttachmentSerializer$$Type<(never), (never)>
get "serializer"(): $IAttachmentSerializer<(never), (never)>
}

export class $AttachmentTypeAccessor implements $AttachmentTypeAccessor$$Interface {
 "getSerializer"(): $IAttachmentSerializer<(never), (never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTypeAccessor$$Type = (() => $IAttachmentSerializer$$Type<(never), (never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentTypeAccessor$$Original = $AttachmentTypeAccessor;}
declare module "net.fabricmc.fabric.mixin.networking.client.accessor.MinecraftClientAccessor" {
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export interface $MinecraftClientAccessor$$Interface {

(): $Connection$$Type
get "connection"(): $Connection
}

export class $MinecraftClientAccessor implements $MinecraftClientAccessor$$Interface {
 "getConnection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$$Type = (() => $Connection$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftClientAccessor$$Original = $MinecraftClientAccessor;}
declare module "net.fabricmc.fabric.mixin.item.ItemAccessor" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"

export interface $ItemAccessor$$Interface {

(arg0: $DataComponentMap): void
set "components"(value: $DataComponentMap$$Type)
}

export class $ItemAccessor implements $ItemAccessor$$Interface {
 "setComponents"(arg0: $DataComponentMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAccessor$$Type = ((arg0: $DataComponentMap) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAccessor$$Original = $ItemAccessor;}
declare module "net.fabricmc.fabric.mixin.renderer.client.BakedModelMixin" {
import {$RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$FabricBakedModel$$Interface} from "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BakedModelMixin$$Interface extends $FabricBakedModel$$Interface {
get "vanillaAdapter"(): boolean
}

export class $BakedModelMixin implements $BakedModelMixin$$Interface {
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelMixin$$Type = ($BakedModelMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedModelMixin$$Original = $BakedModelMixin;}
declare module "net.fabricmc.fabric.mixin.blockview.BlockViewMixin" {
import {$FabricBlockView$$Interface} from "net.fabricmc.fabric.api.blockview.v2.FabricBlockView"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Holder} from "net.minecraft.core.Holder"

export interface $BlockViewMixin$$Interface extends $FabricBlockView$$Interface {
}

export class $BlockViewMixin implements $BlockViewMixin$$Interface {
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockViewMixin$$Type = ($BlockViewMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockViewMixin$$Original = $BlockViewMixin;}
declare module "net.fabricmc.fabric.mixin.networking.accessor.ServerChunkLoadingManagerAccessor" {
import {$EntityTrackerAccessor, $EntityTrackerAccessor$$Type} from "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $ServerChunkLoadingManagerAccessor$$Interface {

(): $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>
get "entityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}

export class $ServerChunkLoadingManagerAccessor implements $ServerChunkLoadingManagerAccessor$$Interface {
 "getEntityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkLoadingManagerAccessor$$Type = (() => $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerChunkLoadingManagerAccessor$$Original = $ServerChunkLoadingManagerAccessor;}
declare module "net.fabricmc.fabric.mixin.attachment.CustomPayloadS2CPacketAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomPayloadS2CPacketAccessor$$Interface {
get "maxPayloadSize"(): integer
}

export class $CustomPayloadS2CPacketAccessor implements $CustomPayloadS2CPacketAccessor$$Interface {
static "getMaxPayloadSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPayloadS2CPacketAccessor$$Type = ($CustomPayloadS2CPacketAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomPayloadS2CPacketAccessor$$Original = $CustomPayloadS2CPacketAccessor;}
declare module "net.fabricmc.fabric.mixin.client.keybinding.KeyBindingAccessor" {
import {$Map} from "java.util.Map"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyBindingAccessor$$Interface {

(): $InputConstants$Key$$Type
}

export class $KeyBindingAccessor implements $KeyBindingAccessor$$Interface {
static "fabric_getCategoryMap"(): $Map<(StringJS), (integer)>
 "fabric_getBoundKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$$Type = (() => $InputConstants$Key$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyBindingAccessor$$Original = $KeyBindingAccessor;}
declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesAccessor" {
import {$Map} from "java.util.Map"
import {$GameRules$Type} from "net.minecraft.world.level.GameRules$Type"
import {$GameRules$Key} from "net.minecraft.world.level.GameRules$Key"

export interface $GameRulesAccessor$$Interface {
get "ruleTypes"(): $Map<($GameRules$Key<(never)>), ($GameRules$Type<(never)>)>
}

export class $GameRulesAccessor implements $GameRulesAccessor$$Interface {
static "getRuleTypes"(): $Map<($GameRules$Key<(never)>), ($GameRules$Type<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesAccessor$$Type = ($GameRulesAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRulesAccessor$$Original = $GameRulesAccessor;}
declare module "net.fabricmc.fabric.mixin.screen.ScreenAccessor" {
import {$Font} from "net.minecraft.client.gui.Font"
import {$Minecraft} from "net.minecraft.client.Minecraft"

export interface $ScreenAccessor$$Interface {
get "font"(): $Font
get "minecraft"(): $Minecraft
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "getFont"(): $Font
 "getMinecraft"(): $Minecraft
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
declare module "net.fabricmc.fabric.mixin.attachment.IAttachmentHolderMixin" {
import {$AttachmentTargetImpl$$Interface} from "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentSyncPayloadS2C$$Type} from "net.fabricmc.fabric.impl.attachment.sync.s2c.AttachmentSyncPayloadS2C"
import {$AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AttachmentChange$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$AttachmentTargetInfo} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"

export interface $IAttachmentHolderMixin$$Interface extends $AttachmentTargetImpl$$Interface {

(): $RegistryAccess$$Type
}

export class $IAttachmentHolderMixin implements $IAttachmentHolderMixin$$Interface {
 "acknowledgeSyncedEntry"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentChange$$Type): void
 "fabric_getSyncTargetInfo"(): $AttachmentTargetInfo<(never)>
 "fabric_shouldTryToSync"(): boolean
 "fabric_syncChange"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentSyncPayloadS2C$$Type): void
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "fabric_getDynamicRegistryManager"(): $RegistryAccess
 "fabric_computeInitialSyncChanges"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($AttachmentChange)>): void
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentHolderMixin$$Type = (() => $RegistryAccess$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttachmentHolderMixin$$Original = $IAttachmentHolderMixin;}
declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesIntRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesIntRuleAccessor$$Interface {
get "value"(): integer
set "value"(value: integer)
}

export class $GameRulesIntRuleAccessor implements $GameRulesIntRuleAccessor$$Interface {
 "getValue"(): integer
 "setValue"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesIntRuleAccessor$$Type = ($GameRulesIntRuleAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRulesIntRuleAccessor$$Original = $GameRulesIntRuleAccessor;}
declare module "net.fabricmc.fabric.mixin.client.indigo.renderer.ItemRendererAccessor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemRendererAccessor$$Interface {
}

export class $ItemRendererAccessor implements $ItemRendererAccessor$$Interface {
static "fabric_callUsesDynamicDisplay"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = ($ItemRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRendererAccessor$$Original = $ItemRendererAccessor;}
declare module "net.fabricmc.fabric.mixin.block.IBlockStateExtensionMixin" {
import {$FabricBlockState$$Interface} from "net.fabricmc.fabric.api.block.v1.FabricBlockState"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockStateExtensionMixin$$Interface extends $FabricBlockState$$Interface {
}

export class $IBlockStateExtensionMixin implements $IBlockStateExtensionMixin$$Interface {
 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockStateExtensionMixin$$Type = ($IBlockStateExtensionMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockStateExtensionMixin$$Original = $IBlockStateExtensionMixin;}
declare module "net.fabricmc.fabric.mixin.tag.TagKeyMixin" {
import {$Component} from "net.minecraft.network.chat.Component"
import {$FabricTagKey$$Interface} from "net.fabricmc.fabric.api.tag.FabricTagKey"

export interface $TagKeyMixin$$Interface extends $FabricTagKey$$Interface {
get "name"(): $Component
get "translationKey"(): StringJS
}

export class $TagKeyMixin implements $TagKeyMixin$$Interface {
 "getName"(): $Component
 "getTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagKeyMixin$$Type = ($TagKeyMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagKeyMixin$$Original = $TagKeyMixin;}
declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockSettingsAccessor" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$BlockBehaviour$OffsetFunction, $BlockBehaviour$OffsetFunction$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$OffsetFunction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NoteBlockInstrument} from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import {$ToIntFunction} from "java.util.function.ToIntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BlockBehaviour$StateArgumentPredicate} from "net.minecraft.world.level.block.state.BlockBehaviour$StateArgumentPredicate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$BlockBehaviour$StatePredicate} from "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $AbstractBlockSettingsAccessor$$Interface {
get "dynamicShape"(): boolean
get "isValidSpawn"(): boolean
get "instrument"(): $NoteBlockInstrument
get "isViewBlocking"(): boolean
get "destroyTime"(): float
get "ignitedByLava"(): boolean
get "replaceable"(): boolean
get "luminance"(): $ToIntFunction<($BlockState)>
get "canOcclude"(): boolean
get "isSuffocating"(): boolean
get "offsetFunction"(): $BlockBehaviour$OffsetFunction
get "forceSolidOff"(): boolean
get "forceSolidOn"(): boolean
get "hasCollision"(): boolean
get "hasPostProcess"(): $BlockBehaviour$StatePredicate
get "pushReaction"(): $PushReaction
get "isRandomlyTicking"(): boolean
get "isRedstoneConductor"(): boolean
get "emissiveRendering"(): $BlockBehaviour$StatePredicate
get "spawnTerrainParticles"(): boolean
set "requiredFeatures"(value: $FeatureFlagSet$$Type)
get "requiredFeatures"(): $FeatureFlagSet
set "spawnTerrainParticles"(value: boolean)
set "isRandomlyTicking"(value: boolean)
set "canOcclude"(value: boolean)
set "mapColor"(value: $Function$$Type<($BlockState), ($MapColor$$Type)>)
set "hasCollision"(value: boolean)
set "forceSolidOn"(value: boolean)
set "offsetFunction"(value: $BlockBehaviour$OffsetFunction$$Type)
set "ignitedByLava"(value: boolean)
set "replaceable"(value: boolean)
set "dynamicShape"(value: boolean)
set "forceSolidOff"(value: boolean)
get "requiresCorrectToolForDrops"(): boolean
set "requiresCorrectToolForDrops"(value: boolean)
get "explosionResistance"(): float
get "soundType"(): $SoundType
get "friction"(): float
get "jumpFactor"(): float
get "speedFactor"(): float
get "drops"(): $ResourceKey<($LootTable)>
get "mapColor"(): $Function<($BlockState), ($MapColor)>
get "isAir"(): boolean
set "isAir"(value: boolean)
set "drops"(value: $ResourceKey$$Type<($LootTable)>)
set "liquid"(value: boolean)
get "liquid"(): boolean
}

export class $AbstractBlockSettingsAccessor implements $AbstractBlockSettingsAccessor$$Interface {
 "getDynamicShape"(): boolean
 "getIsValidSpawn"(): $BlockBehaviour$StateArgumentPredicate<($EntityType<(never)>)>
 "getInstrument"(): $NoteBlockInstrument
 "getIsViewBlocking"(): $BlockBehaviour$StatePredicate
 "getDestroyTime"(): float
 "getIgnitedByLava"(): boolean
 "getReplaceable"(): boolean
 "getLuminance"(): $ToIntFunction<($BlockState)>
 "getCanOcclude"(): boolean
 "getIsSuffocating"(): $BlockBehaviour$StatePredicate
 "getOffsetFunction"(): $BlockBehaviour$OffsetFunction
 "getForceSolidOff"(): boolean
 "getForceSolidOn"(): boolean
 "getHasCollision"(): boolean
 "getHasPostProcess"(): $BlockBehaviour$StatePredicate
 "getPushReaction"(): $PushReaction
 "getIsRandomlyTicking"(): boolean
 "getIsRedstoneConductor"(): $BlockBehaviour$StatePredicate
 "getEmissiveRendering"(): $BlockBehaviour$StatePredicate
 "getSpawnTerrainParticles"(): boolean
 "setRequiredFeatures"(arg0: $FeatureFlagSet$$Type): void
 "getRequiredFeatures"(): $FeatureFlagSet
 "setSpawnTerrainParticles"(arg0: boolean): void
 "setIsRandomlyTicking"(arg0: boolean): void
 "setCanOcclude"(arg0: boolean): void
 "setMapColor"(arg0: $Function$$Type<($BlockState), ($MapColor$$Type)>): void
 "setHasCollision"(arg0: boolean): void
 "setForceSolidOn"(arg0: boolean): void
 "setOffsetFunction"(arg0: $BlockBehaviour$OffsetFunction$$Type): void
 "setIgnitedByLava"(arg0: boolean): void
 "setReplaceable"(arg0: boolean): void
 "setDynamicShape"(arg0: boolean): void
 "setForceSolidOff"(arg0: boolean): void
 "isRequiresCorrectToolForDrops"(): boolean
 "setRequiresCorrectToolForDrops"(arg0: boolean): void
 "getExplosionResistance"(): float
 "getSoundType"(): $SoundType
 "getFriction"(): float
 "getJumpFactor"(): float
 "getSpeedFactor"(): float
 "getDrops"(): $ResourceKey<($LootTable)>
 "getMapColor"(): $Function<($BlockState), ($MapColor)>
 "getIsAir"(): boolean
 "setIsAir"(arg0: boolean): void
 "setDrops"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "setLiquid"(arg0: boolean): void
 "getLiquid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockSettingsAccessor$$Type = ($AbstractBlockSettingsAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBlockSettingsAccessor$$Original = $AbstractBlockSettingsAccessor;}
declare module "net.fabricmc.fabric.mixin.rendering.data.WorldViewMixin" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
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
import {$RenderAttachedBlockView$$Interface} from "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $WorldViewMixin$$Interface extends $RenderAttachedBlockView$$Interface {
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "minBuildHeight"(): integer
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "minSection"(): integer
}

export class $WorldViewMixin implements $WorldViewMixin$$Interface {
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
export type $WorldViewMixin$$Type = ($WorldViewMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldViewMixin$$Original = $WorldViewMixin;}
declare module "net.fabricmc.fabric.mixin.content.registry.VillagerEntityAccessor" {
import {$Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $VillagerEntityAccessor$$Interface {
}

export class $VillagerEntityAccessor implements $VillagerEntityAccessor$$Interface {
static "fabric_setGatherableItems"(arg0: $Set$$Type<($Item$$Type)>): void
static "fabric_getGatherableItems"(): $Set<($Item)>
static "fabric_setItemFoodValues"(arg0: $Map$$Type<($Item$$Type), (integer)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerEntityAccessor$$Type = ($VillagerEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillagerEntityAccessor$$Original = $VillagerEntityAccessor;}
declare module "net.fabricmc.fabric.mixin.client.particle.ParticleManagerAccessor" {
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $ParticleManagerAccessor$$Interface {

(): $TextureAtlas$$Type
get "particleAtlasTexture"(): $TextureAtlas
}

export class $ParticleManagerAccessor implements $ParticleManagerAccessor$$Interface {
 "getParticleAtlasTexture"(): $TextureAtlas
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManagerAccessor$$Type = (() => $TextureAtlas$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleManagerAccessor$$Original = $ParticleManagerAccessor;}
declare module "net.fabricmc.fabric.mixin.block.IBlockExtensionMixin" {
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$FabricBlock$$Interface} from "net.fabricmc.fabric.api.block.v1.FabricBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockExtensionMixin$$Interface extends $FabricBlock$$Interface {
}

export class $IBlockExtensionMixin implements $IBlockExtensionMixin$$Interface {
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockExtensionMixin$$Type = ($IBlockExtensionMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockExtensionMixin$$Original = $IBlockExtensionMixin;}
declare module "net.fabricmc.fabric.mixin.attachment.AttachmentHolderAccessor" {
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $AttachmentHolderAccessor$$Interface {

(): $Map$$Type<($AttachmentType$$Type<(never)>), (any)>
}

export class $AttachmentHolderAccessor implements $AttachmentHolderAccessor$$Interface {
 "invokeGetAttachmentMap"(): $Map<($AttachmentType<(never)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolderAccessor$$Type = (() => $Map$$Type<($AttachmentType$$Type<(never)>), (any)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentHolderAccessor$$Original = $AttachmentHolderAccessor;}
declare module "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$$Type} from "net.minecraft.server.network.ServerPlayerConnection"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $EntityTrackerAccessor$$Interface {

(): $Set$$Type<($ServerPlayerConnection$$Type)>
get "playersTracking"(): $Set<($ServerPlayerConnection)>
}

export class $EntityTrackerAccessor implements $EntityTrackerAccessor$$Interface {
 "getPlayersTracking"(): $Set<($ServerPlayerConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTrackerAccessor$$Type = (() => $Set$$Type<($ServerPlayerConnection$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTrackerAccessor$$Original = $EntityTrackerAccessor;}
declare module "net.fabricmc.fabric.mixin.client.rendering.LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"

export interface $LivingEntityRendererAccessor$$Interface<T extends $LivingEntity, M extends $EntityModel<(object)>> {

(arg0: $RenderLayer<(T), (M)>): boolean
}

export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(object)>> implements $LivingEntityRendererAccessor$$Interface {
 "callAddFeature"(arg0: $RenderLayer$$Type<(T), (M)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$$Type<T, M> = ((arg0: $RenderLayer<(T), (M)>) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRendererAccessor$$Original<T, M> = $LivingEntityRendererAccessor<(T), (M)>;}
declare module "net.fabricmc.fabric.mixin.loot.LootPoolAccessor" {
import {$LootItemFunction} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List} from "java.util.List"
import {$LootItemCondition} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export interface $LootPoolAccessor$$Interface {
}

export class $LootPoolAccessor implements $LootPoolAccessor$$Interface {
 "fabric_getRolls"(): $NumberProvider
 "fabric_getEntries"(): $List<($LootPoolEntryContainer)>
 "fabric_getBonusRolls"(): $NumberProvider
 "fabric_getFunctions"(): $List<($LootItemFunction)>
 "fabric_getConditions"(): $List<($LootItemCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolAccessor$$Type = ($LootPoolAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootPoolAccessor$$Original = $LootPoolAccessor;}
