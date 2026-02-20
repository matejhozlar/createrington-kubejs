declare module "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer" {
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"

export interface $RenderDataMapConsumer$$Interface {

(arg0: $Long2ObjectMap<(any)>): void
}

export class $RenderDataMapConsumer implements $RenderDataMapConsumer$$Interface {
 "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataMapConsumer$$Type = ((arg0: $Long2ObjectMap<(any)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderDataMapConsumer$$Original = $RenderDataMapConsumer;}
declare module "net.fabricmc.fabric.impl.transfer.item.ItemVariantCache" {
import {$ItemVariant, $ItemVariant$$Type} from "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant"

export interface $ItemVariantCache$$Interface {

(): $ItemVariant$$Type
}

export class $ItemVariantCache implements $ItemVariantCache$$Interface {
 "fabric_getCachedItemVariant"(): $ItemVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariantCache$$Type = (() => $ItemVariant$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemVariantCache$$Original = $ItemVariantCache;}
declare module "net.fabricmc.fabric.impl.object.builder.FabricEntityTypeImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricEntityTypeImpl$$Interface {

(arg0: boolean): void
}

export class $FabricEntityTypeImpl implements $FabricEntityTypeImpl$$Interface {
 "fabric_setAlwaysUpdateVelocity"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricEntityTypeImpl$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricEntityTypeImpl$$Original = $FabricEntityTypeImpl;}
declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$List$$Type} from "java.util.List"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$ModelBakery$$Type} from "net.minecraft.client.resources.model.ModelBakery"
import {$ModelLoadingPlugin$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelLoadingEventDispatcher {
constructor(arg0: $ModelBakery$$Type, arg1: $List$$Type<($ModelLoadingPlugin$$Type)>)

public "modifyModelAfterBake"(arg0: $BakedModel$$Type, arg1: $ResourceLocation$$Type, arg2: $ModelResourceLocation$$Type, arg3: $UnbakedModel$$Type, arg4: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg5: $ModelState$$Type, arg6: $ModelBaker$$Type): $BakedModel
public "modifyModelBeforeBake"(arg0: $UnbakedModel$$Type, arg1: $ResourceLocation$$Type, arg2: $ModelResourceLocation$$Type, arg3: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg4: $ModelState$$Type, arg5: $ModelBaker$$Type): $UnbakedModel
public "resolveModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
public "modifyModelOnLoad"(arg0: $UnbakedModel$$Type, arg1: $ResourceLocation$$Type, arg2: $ModelResourceLocation$$Type): $UnbakedModel
public "addExtraModels"(arg0: $Consumer$$Type<($ResourceLocation)>): void
public "loadBlockStateModels"(arg0: $ResourceLocation$$Type, arg1: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingEventDispatcher$$Type = ($ModelLoadingEventDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelLoadingEventDispatcher$$Original = $ModelLoadingEventDispatcher;}
declare module "net.fabricmc.fabric.impl.resource.loader.FabricOriginalKnownPacksGetter" {
import {$KnownPack, $KnownPack$$Type} from "net.minecraft.server.packs.repository.KnownPack"
import {$List, $List$$Type} from "java.util.List"

export interface $FabricOriginalKnownPacksGetter$$Interface {

(): $List$$Type<($KnownPack$$Type)>
}

export class $FabricOriginalKnownPacksGetter implements $FabricOriginalKnownPacksGetter$$Interface {
 "fabric_getOriginalKnownPacks"(): $List<($KnownPack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricOriginalKnownPacksGetter$$Type = (() => $List$$Type<($KnownPack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricOriginalKnownPacksGetter$$Original = $FabricOriginalKnownPacksGetter;}
declare module "net.fabricmc.fabric.impl.biome.MultiNoiseSamplerHooks" {
import {$ImprovedNoise} from "net.minecraft.world.level.levelgen.synth.ImprovedNoise"

export interface $MultiNoiseSamplerHooks$$Interface {
}

export class $MultiNoiseSamplerHooks implements $MultiNoiseSamplerHooks$$Interface {
 "fabric_setSeed"(arg0: long): void
 "fabric_getSeed"(): long
 "fabric_getEndBiomesSampler"(): $ImprovedNoise
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiNoiseSamplerHooks$$Type = ($MultiNoiseSamplerHooks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiNoiseSamplerHooks$$Original = $MultiNoiseSamplerHooks;}
declare module "net.fabricmc.fabric.impl.gamerule.RuleKeyExtensions" {
import {$CustomGameRuleCategory, $CustomGameRuleCategory$$Type} from "net.fabricmc.fabric.api.gamerule.v1.CustomGameRuleCategory"

export interface $RuleKeyExtensions$$Interface {
}

export class $RuleKeyExtensions implements $RuleKeyExtensions$$Interface {
 "fabric_getCustomCategory"(): $CustomGameRuleCategory
 "fabric_setCustomCategory"(arg0: $CustomGameRuleCategory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuleKeyExtensions$$Type = ($RuleKeyExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuleKeyExtensions$$Original = $RuleKeyExtensions;}
declare module "net.fabricmc.fabric.impl.item.ItemStackExtensions" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ItemStackExtensions$$Interface {
}

export class $ItemStackExtensions implements $ItemStackExtensions$$Interface {
 "fabric_setLivingEntity"(arg0: $LivingEntity$$Type): void
 "fabric_getLivingEntity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackExtensions$$Type = ($ItemStackExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackExtensions$$Original = $ItemStackExtensions;}
declare module "net.fabricmc.fabric.impl.datagen.DataGeneratorExtension" {
import {$ModContainer$$Type} from "net.fabricmc.loader.api.ModContainer"
import {$DataGenerator$PackGenerator} from "net.minecraft.data.DataGenerator$PackGenerator"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Path} from "java.nio.file.Path"

export interface $DataGeneratorExtension$$Interface {
}

export class $DataGeneratorExtension implements $DataGeneratorExtension$$Interface {
 "createBuiltinResourcePack"(arg0: boolean, arg1: $ResourceLocation$$Type, arg2: $ModContainer$$Type, arg3: boolean): $Pair<($DataGenerator$PackGenerator), ($Path)>
 "createPack"(arg0: StringJS, arg1: $PackOutput$$Type): $DataGenerator$PackGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataGeneratorExtension$$Type = ($DataGeneratorExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataGeneratorExtension$$Original = $DataGeneratorExtension;}
declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiLookupImpl" {
import {$BlockApiLookup$BlockEntityApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider"
import {$List} from "java.util.List"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockApiLookup, $BlockApiLookup$$Interface} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockApiLookupImpl<A, C> implements $BlockApiLookup$$Interface<(A), (C)> {
public static "get"<A, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(A)>, arg2: $Class$$Type<(C)>): $BlockApiLookup<(A), (C)>
public "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A
public "getId"(): $ResourceLocation
public "getProvider"(arg0: $Block$$Type): $BlockApiLookup$BlockApiProvider<(A), (C)>
public "apiClass"(): $Class<(A)>
public "registerForBlocks"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>, ...arg1: ($Block$$Type)[]): void
public "getFallbackProviders"(): $List<($BlockApiLookup$BlockApiProvider<(A), (C)>)>
public "registerForBlockEntities"(arg0: $BlockApiLookup$BlockEntityApiProvider$$Type<(A), (C)>, ...arg1: ($BlockEntityType$$Type<(never)>)[]): void
public "contextClass"(): $Class<(C)>
public "registerSelf"(...arg0: ($BlockEntityType$$Type<(never)>)[]): void
public "registerFallback"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>): void
public "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: C): A
public "registerForBlockEntity"<T extends $BlockEntity>(arg0: $BiFunction$$Type<(T), (C), (A)>, arg1: $BlockEntityType$$Type<(T)>): void
get "id"(): $ResourceLocation
get "fallbackProviders"(): $List<($BlockApiLookup$BlockApiProvider<(A), (C)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookupImpl$$Type<A, C> = ($BlockApiLookupImpl<(A), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockApiLookupImpl$$Original<A, C> = $BlockApiLookupImpl<(A), (C)>;}
declare module "net.fabricmc.fabric.impl.client.screen.ScreenExtensions" {
import {$ScreenKeyboardEvents$BeforeKeyRelease} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyRelease"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyboardEvents$AfterKeyPress} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyPress"
import {$List} from "java.util.List"
import {$ScreenMouseEvents$AfterMouseClick} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseClick"
import {$ScreenKeyboardEvents$AllowKeyPress} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyPress"
import {$ScreenMouseEvents$BeforeMouseScroll} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseScroll"
import {$ScreenMouseEvents$AllowMouseRelease} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseRelease"
import {$ScreenEvents$Remove} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$Remove"
import {$ScreenMouseEvents$AfterMouseScroll} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseScroll"
import {$ScreenMouseEvents$BeforeMouseClick} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseClick"
import {$ScreenMouseEvents$BeforeMouseRelease} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseRelease"
import {$ScreenMouseEvents$AllowMouseScroll} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseScroll"
import {$ScreenMouseEvents$AfterMouseRelease} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseRelease"
import {$ScreenEvents$AfterRender} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterRender"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$ScreenEvents$BeforeTick} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeTick"
import {$ScreenEvents$AfterTick} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterTick"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$ScreenKeyboardEvents$AllowKeyRelease} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyRelease"
import {$ScreenKeyboardEvents$BeforeKeyPress} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyPress"
import {$ScreenMouseEvents$AllowMouseClick} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseClick"
import {$ScreenKeyboardEvents$AfterKeyRelease} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyRelease"
import {$ScreenEvents$BeforeRender} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeRender"

export interface $ScreenExtensions$$Interface {
}

export class $ScreenExtensions implements $ScreenExtensions$$Interface {
static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
 "fabric_getBeforeTickEvent"(): $Event<($ScreenEvents$BeforeTick)>
 "fabric_getRemoveEvent"(): $Event<($ScreenEvents$Remove)>
 "fabric_getAfterRenderEvent"(): $Event<($ScreenEvents$AfterRender)>
 "fabric_getAfterTickEvent"(): $Event<($ScreenEvents$AfterTick)>
 "fabric_getAfterMouseClickEvent"(): $Event<($ScreenMouseEvents$AfterMouseClick)>
 "fabric_getAllowMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AllowMouseRelease)>
 "fabric_getAfterMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AfterMouseRelease)>
 "fabric_getBeforeMouseReleaseEvent"(): $Event<($ScreenMouseEvents$BeforeMouseRelease)>
 "fabric_getAllowMouseScrollEvent"(): $Event<($ScreenMouseEvents$AllowMouseScroll)>
 "fabric_getBeforeMouseScrollEvent"(): $Event<($ScreenMouseEvents$BeforeMouseScroll)>
 "fabric_getAfterMouseScrollEvent"(): $Event<($ScreenMouseEvents$AfterMouseScroll)>
 "fabric_getBeforeRenderEvent"(): $Event<($ScreenEvents$BeforeRender)>
 "fabric_getAllowKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyPress)>
 "fabric_getBeforeKeyPressEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyPress)>
 "fabric_getAfterKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyPress)>
 "fabric_getBeforeKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyRelease)>
 "fabric_getAfterKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyRelease)>
 "fabric_getAllowMouseClickEvent"(): $Event<($ScreenMouseEvents$AllowMouseClick)>
 "fabric_getAllowKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyRelease)>
 "fabric_getBeforeMouseClickEvent"(): $Event<($ScreenMouseEvents$BeforeMouseClick)>
 "fabric_getButtons"(): $List<($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenExtensions$$Type = ($ScreenExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenExtensions$$Original = $ScreenExtensions;}
declare module "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttachmentTarget} from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import {$AttachmentTargetInfo$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo$Type"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $AttachmentTargetInfo$$Interface<T> {
get "id"(): byte
get "type"(): $AttachmentTargetInfo$Type<(T)>
}

export class $AttachmentTargetInfo<T> implements $AttachmentTargetInfo$$Interface {
static readonly "PACKET_CODEC": $StreamCodec<($ByteBuf), ($AttachmentTargetInfo<(never)>)>
static readonly "MAX_SIZE_IN_BYTES": integer

 "getId"(): byte
 "getType"(): $AttachmentTargetInfo$Type<(T)>
 "getTarget"(arg0: $Level$$Type): $AttachmentTarget
 "appendDebugInformation"(arg0: $MutableComponent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTargetInfo$$Type<T> = ($AttachmentTargetInfo<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentTargetInfo$$Original<T> = $AttachmentTargetInfo<(T)>;}
declare module "net.fabricmc.fabric.impl.event.lifecycle.LoadedChunksCache" {
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$Set} from "java.util.Set"

export interface $LoadedChunksCache$$Interface {
}

export class $LoadedChunksCache implements $LoadedChunksCache$$Interface {
 "fabric_markUnloaded"(arg0: $LevelChunk$$Type): void
 "fabric_getLoadedChunks"(): $Set<($LevelChunk)>
 "fabric_markLoaded"(arg0: $LevelChunk$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedChunksCache$$Type = ($LoadedChunksCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoadedChunksCache$$Original = $LoadedChunksCache;}
declare module "net.fabricmc.fabric.impl.item.ItemExtensions" {
import {$EquipmentSlotProvider, $EquipmentSlotProvider$$Type} from "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider"
import {$CustomDamageHandler, $CustomDamageHandler$$Type} from "net.fabricmc.fabric.api.item.v1.CustomDamageHandler"

export interface $ItemExtensions$$Interface {
}

export class $ItemExtensions implements $ItemExtensions$$Interface {
 "fabric_setEquipmentSlotProvider"(arg0: $EquipmentSlotProvider$$Type): void
 "fabric_getEquipmentSlotProvider"(): $EquipmentSlotProvider
 "fabric_getCustomDamageHandler"(): $CustomDamageHandler
 "fabric_setCustomDamageHandler"(arg0: $CustomDamageHandler$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExtensions$$Type = ($ItemExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemExtensions$$Original = $ItemExtensions;}
declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map$$Type} from "java.util.Map"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteFinder$$Interface} from "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export class $SpriteFinderImpl implements $SpriteFinder$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, arg1: $TextureAtlas$$Type)

public static "get"(arg0: $TextureAtlas$$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
/**
 * 
 * @deprecated
 */
public "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$$Type = ($SpriteFinderImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinderImpl$$Original = $SpriteFinderImpl;}
declare module "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttachmentType, $AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$AttachmentTargetInfo, $AttachmentTargetInfo$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"
import {$Record} from "java.lang.Record"

export class $AttachmentChange extends $Record {
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AttachmentChange)>

constructor(targetInfo: $AttachmentTargetInfo$$Type<(never)>, type: $AttachmentType$$Type<(never)>, data: (byte)[])

public "type"(): $AttachmentType<(never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): (byte)[]
public static "create"(arg0: $AttachmentTargetInfo$$Type<(never)>, arg1: $AttachmentType$$Type<(never)>, arg2: any, arg3: $RegistryAccess$$Type): $AttachmentChange
public static "partitionAndSendPackets"(arg0: $List$$Type<($AttachmentChange$$Type)>, arg1: $ServerPlayer$$Type): void
public "targetInfo"(): $AttachmentTargetInfo<(never)>
public "tryApply"(arg0: $Level$$Type): void
public "decodeValue"(arg0: $RegistryAccess$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentChange$$Type = ({"data"?: (byte)[], "type"?: $AttachmentType$$Type<(never)>, "targetInfo"?: $AttachmentTargetInfo$$Type<(never)>}) | ([data?: (byte)[], type?: $AttachmentType$$Type<(never)>, targetInfo?: $AttachmentTargetInfo$$Type<(never)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentChange$$Original = $AttachmentChange;}
declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$$Type} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess$$Interface {

(): $SpriteFinderImpl$$Type
}

export class $SpriteFinderImpl$SpriteFinderAccess implements $SpriteFinderImpl$SpriteFinderAccess$$Interface {
 "fabric_spriteFinder"(): $SpriteFinderImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Type = (() => $SpriteFinderImpl$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Original = $SpriteFinderImpl$SpriteFinderAccess;}
declare module "net.fabricmc.fabric.impl.lookup.block.ServerWorldCache" {
import {$BlockApiCacheImpl$$Type} from "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ServerWorldCache$$Interface {
}

export class $ServerWorldCache implements $ServerWorldCache$$Interface {
 "fabric_invalidateCache"(arg0: $BlockPos$$Type): void
 "fabric_registerCache"(arg0: $BlockPos$$Type, arg1: $BlockApiCacheImpl$$Type<(never), (never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldCache$$Type = ($ServerWorldCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerWorldCache$$Original = $ServerWorldCache;}
declare module "net.fabricmc.fabric.impl.transfer.fluid.FluidVariantCache" {
import {$FluidVariant, $FluidVariant$$Type} from "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant"

export interface $FluidVariantCache$$Interface {

(): $FluidVariant$$Type
}

export class $FluidVariantCache implements $FluidVariantCache$$Interface {
 "fabric_getCachedFluidVariant"(): $FluidVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVariantCache$$Type = (() => $FluidVariant$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVariantCache$$Original = $FluidVariantCache;}
declare module "net.fabricmc.fabric.impl.resource.loader.FabricResourcePackProfile" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set$$Type} from "java.util.Set"

export interface $FabricResourcePackProfile$$Interface {
}

export class $FabricResourcePackProfile implements $FabricResourcePackProfile$$Interface {
 "fabric_parentsEnabled"(arg0: $Set$$Type<(StringJS)>): boolean
 "fabric_setParentsPredicate"(arg0: $Predicate$$Type<($Set<(StringJS)>)>): void
 "fabric_isHidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricResourcePackProfile$$Type = ($FabricResourcePackProfile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricResourcePackProfile$$Original = $FabricResourcePackProfile;}
declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoaderHooks" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ModelLoadingEventDispatcher} from "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelLoaderHooks$$Interface {
}

export class $ModelLoaderHooks implements $ModelLoaderHooks$$Interface {
 "fabric_getMissingModel"(): $UnbakedModel
 "fabric_getOrLoadModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
 "fabric_getDispatcher"(): $ModelLoadingEventDispatcher
 "fabric_add"(arg0: $ModelResourceLocation$$Type, arg1: $UnbakedModel$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoaderHooks$$Type = ($ModelLoaderHooks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelLoaderHooks$$Original = $ModelLoaderHooks;}
declare module "net.fabricmc.fabric.impl.blockrenderlayer.ExtendedChunkRenderTypeSet" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $ExtendedChunkRenderTypeSet$$Interface {

(): $RenderType$$Type
}

export class $ExtendedChunkRenderTypeSet implements $ExtendedChunkRenderTypeSet$$Interface {
 "sinytra$firstLayer"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedChunkRenderTypeSet$$Type = (() => $RenderType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedChunkRenderTypeSet$$Original = $ExtendedChunkRenderTypeSet;}
declare module "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TransactionContext$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"

export interface $SpecialLogicInventory$$Interface {
}

export class $SpecialLogicInventory implements $SpecialLogicInventory$$Interface {
 "fabric_onTransfer"(arg0: integer, arg1: $TransactionContext$$Type): void
 "fabric_setSuppress"(arg0: boolean): void
 "fabric_onFinalCommit"(arg0: integer, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialLogicInventory$$Type = ($SpecialLogicInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialLogicInventory$$Original = $SpecialLogicInventory;}
declare module "net.fabricmc.fabric.impl.attachment.sync.s2c.AttachmentSyncPayloadS2C" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$AttachmentChange, $AttachmentChange$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record} from "java.lang.Record"

export class $AttachmentSyncPayloadS2C extends $Record implements $CustomPacketPayload$$Interface {
static readonly "PACKET_ID": $ResourceLocation
static readonly "CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AttachmentSyncPayloadS2C)>
static readonly "ID": $CustomPacketPayload$Type<($AttachmentSyncPayloadS2C)>

constructor(attachments: $List$$Type<($AttachmentChange$$Type)>)

public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "attachments"(): $List<($AttachmentChange)>
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentSyncPayloadS2C$$Type = ({"attachments"?: $List$$Type<($AttachmentChange$$Type)>}) | ([attachments?: $List$$Type<($AttachmentChange$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentSyncPayloadS2C$$Original = $AttachmentSyncPayloadS2C;}
declare module "net.fabricmc.fabric.impl.client.model.loading.BlockStatesLoaderHooks" {
import {$BlockStatesLoaderHooks$LoadingOverride, $BlockStatesLoaderHooks$LoadingOverride$$Type} from "net.fabricmc.fabric.impl.client.model.loading.BlockStatesLoaderHooks$LoadingOverride"

export interface $BlockStatesLoaderHooks$$Interface {

(arg0: $BlockStatesLoaderHooks$LoadingOverride): void
}

export class $BlockStatesLoaderHooks implements $BlockStatesLoaderHooks$$Interface {
 "fabric_setLoadingOverride"(arg0: $BlockStatesLoaderHooks$LoadingOverride$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatesLoaderHooks$$Type = ((arg0: $BlockStatesLoaderHooks$LoadingOverride) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStatesLoaderHooks$$Original = $BlockStatesLoaderHooks;}
declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl" {
import {$BlockApiCache, $BlockApiCache$$Interface} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiCache"
import {$BlockApiLookupImpl$$Type} from "net.fabricmc.fabric.impl.lookup.block.BlockApiLookupImpl"
import {$BlockApiLookup, $BlockApiLookup$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockApiCacheImpl<A, C> implements $BlockApiCache$$Interface<(A), (C)> {
constructor(arg0: $BlockApiLookupImpl$$Type<(A), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type)

public "invalidate"(): void
public "find"(arg0: $BlockState$$Type, arg1: C): A
public "getPos"(): $BlockPos
public "getBlockEntity"(): $BlockEntity
public "getLookup"(): $BlockApiLookup
public "getWorld"(): $ServerLevel
public "find"(arg0: C): A
public static "create"<A, C>(arg0: $BlockApiLookup$$Type<(A), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): $BlockApiCache<(A), (C)>
get "pos"(): $BlockPos
get "blockEntity"(): $BlockEntity
get "lookup"(): $BlockApiLookup
get "world"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiCacheImpl$$Type<A, C> = ($BlockApiCacheImpl<(A), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockApiCacheImpl$$Original<A, C> = $BlockApiCacheImpl<(A), (C)>;}
declare module "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl" {
import {$AttachmentTarget$$Interface} from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentSyncPayloadS2C$$Type} from "net.fabricmc.fabric.impl.attachment.sync.s2c.AttachmentSyncPayloadS2C"
import {$AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AttachmentChange$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$AttachmentTargetInfo} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"

export interface $AttachmentTargetImpl$$Interface extends $AttachmentTarget$$Interface {

(): $RegistryAccess$$Type
}

export class $AttachmentTargetImpl implements $AttachmentTargetImpl$$Interface {
 "acknowledgeSyncedEntry"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentChange$$Type): void
 "fabric_getSyncTargetInfo"(): $AttachmentTargetInfo<(never)>
 "fabric_shouldTryToSync"(): boolean
 "fabric_syncChange"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentSyncPayloadS2C$$Type): void
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "fabric_computeInitialSyncChanges"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($AttachmentChange)>): void
 "fabric_getDynamicRegistryManager"(): $RegistryAccess
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$$Type<(never)>): boolean
 "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTargetImpl$$Type = (() => $RegistryAccess$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentTargetImpl$$Original = $AttachmentTargetImpl;}
declare module "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$AttachmentTargetInfo, $AttachmentTargetInfo$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"
import {$Record} from "java.lang.Record"

export class $AttachmentTargetInfo$Type<T> extends $Record {
constructor(id: byte, packetCodec: $StreamCodec$$Type<($ByteBuf$$Type), ($AttachmentTargetInfo$$Type<(T)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): byte
public "packetCodec"(): $StreamCodec<($ByteBuf), ($AttachmentTargetInfo<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTargetInfo$Type$$Type<T> = ({"id"?: byte, "packetCodec"?: $StreamCodec$$Type<($ByteBuf$$Type), ($AttachmentTargetInfo$$Type<(T)>)>}) | ([id?: byte, packetCodec?: $StreamCodec$$Type<($ByteBuf$$Type), ($AttachmentTargetInfo$$Type<(T)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentTargetInfo$Type$$Original<T> = $AttachmentTargetInfo$Type<(T)>;}
declare module "net.fabricmc.fabric.impl.resource.loader.FabricResource" {
import {$PackSource} from "net.minecraft.server.packs.repository.PackSource"

export interface $FabricResource$$Interface {
get "fabricPackSource"(): $PackSource
}

export class $FabricResource implements $FabricResource$$Interface {
 "getFabricPackSource"(): $PackSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricResource$$Type = ($FabricResource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricResource$$Original = $FabricResource;}
declare module "net.fabricmc.fabric.impl.client.model.loading.BlockStatesLoaderHooks$LoadingOverride" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockStatesLoaderHooks$LoadingOverride$$Interface {

(arg0: $ResourceLocation, arg1: $StateDefinition<($Block), ($BlockState)>): boolean
}

export class $BlockStatesLoaderHooks$LoadingOverride implements $BlockStatesLoaderHooks$LoadingOverride$$Interface {
 "loadBlockStates"(arg0: $ResourceLocation$$Type, arg1: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatesLoaderHooks$LoadingOverride$$Type = ((arg0: $ResourceLocation, arg1: $StateDefinition<($Block), ($BlockState)>) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStatesLoaderHooks$LoadingOverride$$Original = $BlockStatesLoaderHooks$LoadingOverride;}
declare module "net.fabricmc.fabric.impl.attachment.sync.SupportedAttachmentsClientConnection" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $SupportedAttachmentsClientConnection$$Interface {
}

export class $SupportedAttachmentsClientConnection implements $SupportedAttachmentsClientConnection$$Interface {
 "fabric_setSupportedAttachments"(arg0: $Set$$Type<($ResourceLocation$$Type)>): void
 "fabric_getSupportedAttachments"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportedAttachmentsClientConnection$$Type = ($SupportedAttachmentsClientConnection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportedAttachmentsClientConnection$$Original = $SupportedAttachmentsClientConnection;}
