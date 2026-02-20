declare module "net.minecraft.client.resources.server.PackReloadConfig" {
import {$PackReloadConfig$Callbacks, $PackReloadConfig$Callbacks$$Type} from "net.minecraft.client.resources.server.PackReloadConfig$Callbacks"

export interface $PackReloadConfig$$Interface {

(arg0: $PackReloadConfig$Callbacks): void
}

export class $PackReloadConfig implements $PackReloadConfig$$Interface {
 "scheduleReload"(arg0: $PackReloadConfig$Callbacks$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackReloadConfig$$Type = ((arg0: $PackReloadConfig$Callbacks) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackReloadConfig$$Original = $PackReloadConfig;}
declare module "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$NineSlice" {
import {$GuiSpriteScaling$$Interface} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling"
import {$GuiSpriteScaling$NineSlice$Border, $GuiSpriteScaling$NineSlice$Border$$Type} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$NineSlice$Border"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$GuiSpriteScaling$Type} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$Type"
import {$Record} from "java.lang.Record"

export class $GuiSpriteScaling$NineSlice extends $Record implements $GuiSpriteScaling$$Interface {
static readonly "CODEC": $MapCodec<($GuiSpriteScaling$NineSlice)>

constructor(arg0: integer, arg1: integer, arg2: $GuiSpriteScaling$NineSlice$Border$$Type)

public "type"(): $GuiSpriteScaling$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "height"(): integer
public "border"(): $GuiSpriteScaling$NineSlice$Border
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteScaling$NineSlice$$Type = ({"height"?: integer, "width"?: integer, "border"?: $GuiSpriteScaling$NineSlice$Border$$Type}) | ([height?: integer, width?: integer, border?: $GuiSpriteScaling$NineSlice$Border$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteScaling$NineSlice$$Original = $GuiSpriteScaling$NineSlice;}
declare module "net.minecraft.client.resources.SkinManager$TextureCache" {
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$MinecraftProfileTexture$$Type} from "com.mojang.authlib.minecraft.MinecraftProfileTexture"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$HttpTexture$$Type} from "net.minecraft.client.renderer.texture.HttpTexture"
import {$MinecraftProfileTexture$Type$$Type} from "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type"
import {$Path$$Type} from "java.nio.file.Path"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $SkinManager$TextureCache {
readonly "textureManager": $TextureManager

constructor(arg0: $TextureManager$$Type, arg1: $Path$$Type, arg2: $MinecraftProfileTexture$Type$$Type)

public "getOrLoad"(arg0: $MinecraftProfileTexture$$Type): $CompletableFuture<($ResourceLocation)>
public "handler$bbi000$chat_heads$chatheads$rememberTextureLocation"(cir: $CallbackInfoReturnable$$Type, id: $ResourceLocation$$Type, httpTexture: $HttpTexture$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinManager$TextureCache$$Type = ($SkinManager$TextureCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkinManager$TextureCache$$Original = $SkinManager$TextureCache;}
declare module "net.minecraft.client.resources.model.ModelBakery$TextureGetter" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"

export interface $ModelBakery$TextureGetter$$Interface {

(arg0: $ModelResourceLocation, arg1: $Material): $TextureAtlasSprite$$Type
}

export class $ModelBakery$TextureGetter implements $ModelBakery$TextureGetter$$Interface {
 "get"(arg0: $ModelResourceLocation$$Type, arg1: $Material$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakery$TextureGetter$$Type = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakery$TextureGetter$$Original = $ModelBakery$TextureGetter;}
declare module "net.minecraft.client.resources.TextureAtlasHolder" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Set$$Type} from "java.util.Set"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureAtlasHolder implements $PreparableReloadListener$$Interface, $AutoCloseable$$Interface {
readonly "textureAtlas": $TextureAtlas

constructor(arg0: $TextureManager$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type)
constructor(arg0: $TextureManager$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $Set$$Type<($MetadataSectionSerializer$$Type<(never)>)>)

public "close"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasHolder$$Type = ($TextureAtlasHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasHolder$$Original = $TextureAtlasHolder;}
declare module "net.minecraft.client.resources.server.PackReloadConfig$Callbacks" {
import {$PackReloadConfig$IdAndPath} from "net.minecraft.client.resources.server.PackReloadConfig$IdAndPath"
import {$List} from "java.util.List"

export interface $PackReloadConfig$Callbacks$$Interface {
}

export class $PackReloadConfig$Callbacks implements $PackReloadConfig$Callbacks$$Interface {
 "onFailure"(arg0: boolean): void
 "onSuccess"(): void
 "packsToLoad"(): $List<($PackReloadConfig$IdAndPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackReloadConfig$Callbacks$$Type = ($PackReloadConfig$Callbacks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackReloadConfig$Callbacks$$Original = $PackReloadConfig$Callbacks;}
declare module "net.minecraft.client.resources.model.Material" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Comparator} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $Material {
static readonly "COMPARATOR": $Comparator<($Material)>

constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "buffer"(arg0: $MultiBufferSource$$Type, arg1: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>, arg2: boolean): $VertexConsumer
public "buffer"(arg0: $MultiBufferSource$$Type, arg1: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>): $VertexConsumer
public "renderType"(arg0: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>): $RenderType
public "sprite"(): $TextureAtlasSprite
public "atlasLocation"(): $ResourceLocation
public "texture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Material$$Type = ($Material);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Material$$Original = $Material;}
declare module "net.minecraft.client.resources.sounds.Sound" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SampledFloat, $SampledFloat$$Type} from "net.minecraft.util.valueproviders.SampledFloat"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$Weighted$$Interface} from "net.minecraft.client.sounds.Weighted"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$Sound$Type, $Sound$Type$$Type} from "net.minecraft.client.resources.sounds.Sound$Type"

export class $Sound implements $Weighted$$Interface<($Sound)> {
static readonly "SOUND_LISTER": $FileToIdConverter

constructor(arg0: $ResourceLocation$$Type, arg1: $SampledFloat$$Type, arg2: $SampledFloat$$Type, arg3: integer, arg4: $Sound$Type$$Type, arg5: boolean, arg6: boolean, arg7: integer)

public "toString"(): StringJS
public "getLocation"(): $ResourceLocation
public "getType"(): $Sound$Type
public "getPath"(): $ResourceLocation
public "getSound"(arg0: $RandomSource$$Type): $Sound
public "getWeight"(): integer
public "getPitch"(): $SampledFloat
public "getVolume"(): $SampledFloat
public "shouldPreload"(): boolean
public "preloadIfRequired"(arg0: $SoundEngine$$Type): void
public "shouldStream"(): boolean
public "getAttenuationDistance"(): integer
get "location"(): $ResourceLocation
get "type"(): $Sound$Type
get "path"(): $ResourceLocation
get "weight"(): integer
get "pitch"(): $SampledFloat
get "volume"(): $SampledFloat
get "attenuationDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sound$$Type = ($Sound);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sound$$Original = $Sound;}
declare module "net.minecraft.client.resources.PlayerSkin$Model" {
import {$Enum} from "java.lang.Enum"

export class $PlayerSkin$Model extends $Enum<($PlayerSkin$Model)> {
static readonly "SLIM": $PlayerSkin$Model
static readonly "WIDE": $PlayerSkin$Model

public static "values"(): ($PlayerSkin$Model)[]
public static "valueOf"(arg0: StringJS): $PlayerSkin$Model
public "id"(): StringJS
public static "byName"(arg0: StringJS): $PlayerSkin$Model
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSkin$Model$$Type = (("slim") | ("wide"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSkin$Model$$Original = $PlayerSkin$Model;}
declare module "net.minecraft.client.resources.metadata.animation.AnimationMetadataSectionSerializer" {
import {$MetadataSectionSerializer$$Interface} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$AnimationMetadataSection} from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export class $AnimationMetadataSectionSerializer implements $MetadataSectionSerializer$$Interface<($AnimationMetadataSection)> {
constructor()

public "fromJson"(arg0: $JsonObject$$Type): $AnimationMetadataSection
public "getMetadataSectionName"(): StringJS
get "metadataSectionName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationMetadataSectionSerializer$$Type = ($AnimationMetadataSectionSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationMetadataSectionSerializer$$Original = $AnimationMetadataSectionSerializer;}
declare module "net.minecraft.client.resources.server.ServerPackManager" {
import {$PackLoadFeedback, $PackLoadFeedback$$Type} from "net.minecraft.client.resources.server.PackLoadFeedback"
import {$PackReloadConfig$$Type} from "net.minecraft.client.resources.server.PackReloadConfig"
import {$PackDownloader$$Type} from "net.minecraft.client.resources.server.PackDownloader"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$URL$$Type} from "java.net.URL"
import {$ServerPackManager$PackPromptStatus$$Type} from "net.minecraft.client.resources.server.ServerPackManager$PackPromptStatus"
import {$ServerPackManager$ServerPackData} from "net.minecraft.client.resources.server.ServerPackManager$ServerPackData"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HashCode$$Type} from "com.google.common.hash.HashCode"
import {$Path$$Type} from "java.nio.file.Path"

export class $ServerPackManager {
readonly "packLoadFeedback": $PackLoadFeedback
readonly "packs": $List<($ServerPackManager$ServerPackData)>

constructor(arg0: $PackDownloader$$Type, arg1: $PackLoadFeedback$$Type, arg2: $PackReloadConfig$$Type, arg3: $Runnable$$Type, arg4: $ServerPackManager$PackPromptStatus$$Type)

public "popAll"(): void
public "tick"(): void
public "registerForUpdate"(): void
public "pushPack"(arg0: $UUID$$Type, arg1: $URL$$Type, arg2: $HashCode$$Type): void
public "popPack"(arg0: $UUID$$Type): void
public "pushLocalPack"(arg0: $UUID$$Type, arg1: $Path$$Type): void
public "resetPromptStatus"(): void
public "allowServerPacks"(): void
public "rejectServerPacks"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPackManager$$Type = ($ServerPackManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPackManager$$Original = $ServerPackManager;}
declare module "net.minecraft.client.resources.server.ServerPackManager$ServerPackData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ServerPackManager$ServerPackData {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPackManager$ServerPackData$$Type = ($ServerPackManager$ServerPackData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPackManager$ServerPackData$$Original = $ServerPackManager$ServerPackData;}
declare module "net.minecraft.client.resources.sounds.Sound$Type" {
import {$Enum} from "java.lang.Enum"

export class $Sound$Type extends $Enum<($Sound$Type)> {
static readonly "SOUND_EVENT": $Sound$Type
static readonly "FILE": $Sound$Type

public static "values"(): ($Sound$Type)[]
public static "valueOf"(arg0: StringJS): $Sound$Type
public static "getByName"(arg0: StringJS): $Sound$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sound$Type$$Type = (("file") | ("sound_event"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sound$Type$$Original = $Sound$Type;}
declare module "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$NineSlice$Border" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $GuiSpriteScaling$NineSlice$Border extends $Record {
static readonly "CODEC": $Codec<($GuiSpriteScaling$NineSlice$Border)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "bottom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "top"(): integer
public "left"(): integer
public "right"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteScaling$NineSlice$Border$$Type = ({"bottom"?: integer, "left"?: integer, "top"?: integer, "right"?: integer}) | ([bottom?: integer, left?: integer, top?: integer, right?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteScaling$NineSlice$Border$$Original = $GuiSpriteScaling$NineSlice$Border;}
declare module "net.minecraft.client.resources.language.LanguageManager" {
import {$Collection} from "java.util.Collection"
import {$ClientLanguage$$Type} from "net.minecraft.client.resources.language.ClientLanguage"
import {$Locale} from "java.util.Locale"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$LanguageInfo} from "net.minecraft.client.resources.language.LanguageInfo"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$SortedMap} from "java.util.SortedMap"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $LanguageManager implements $ResourceManagerReloadListener$$Interface, $IdentifiableResourceReloadListener$$Interface {
constructor(arg0: StringJS, arg1: $Consumer$$Type<($ClientLanguage)>)

public "getLanguage"(arg0: StringJS): $LanguageInfo
public "getJavaLocale"(): $Locale
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getSelected"(): StringJS
public "getFabricId"(): $ResourceLocation
public "setSelected"(arg0: StringJS): void
public "getFabricDependencies"(): $Collection
public "getLanguages"(): $SortedMap<(StringJS), ($LanguageInfo)>
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "javaLocale"(): $Locale
get "selected"(): StringJS
get "fabricId"(): $ResourceLocation
set "selected"(value: StringJS)
get "fabricDependencies"(): $Collection
get "languages"(): $SortedMap<(StringJS), ($LanguageInfo)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageManager$$Type = ($LanguageManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LanguageManager$$Original = $LanguageManager;}
declare module "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$GuiSpriteScaling} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GuiSpriteScaling$Type extends $Enum<($GuiSpriteScaling$Type)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($GuiSpriteScaling$Type)>
static readonly "STRETCH": $GuiSpriteScaling$Type
static readonly "TILE": $GuiSpriteScaling$Type
static readonly "NINE_SLICE": $GuiSpriteScaling$Type

public static "values"(): ($GuiSpriteScaling$Type)[]
public static "valueOf"(arg0: StringJS): $GuiSpriteScaling$Type
public "getSerializedName"(): StringJS
public "codec"(): $MapCodec<($GuiSpriteScaling)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteScaling$Type$$Type = (("stretch") | ("tile") | ("nine_slice"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteScaling$Type$$Original = $GuiSpriteScaling$Type;}
declare module "net.minecraft.client.resources.model.BlockStateModelLoader" {
import {$Map$$Type} from "java.util.Map"
import {$Comparable} from "java.lang.Comparable"
import {$List$$Type} from "java.util.List"
import {$BlockStatesLoaderHooks$LoadingOverride$$Type} from "net.fabricmc.fabric.impl.client.model.loading.BlockStatesLoaderHooks$LoadingOverride"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockStatesLoaderHooks$$Interface} from "net.fabricmc.fabric.impl.client.model.loading.BlockStatesLoaderHooks"
import {$UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$BlockStateModelLoader$LoadedJson$$Type} from "net.minecraft.client.resources.model.BlockStateModelLoader$LoadedJson"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateModelLoader implements $BlockStatesLoaderHooks$$Interface {
static readonly "SINGLETON_MODEL_GROUP": integer
static readonly "BLOCKSTATE_LISTER": $FileToIdConverter

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($List$$Type<($BlockStateModelLoader$LoadedJson$$Type)>)>, arg1: $ProfilerFiller$$Type, arg2: $UnbakedModel$$Type, arg3: $BlockColors$$Type, arg4: $BiConsumer$$Type<($ModelResourceLocation), ($UnbakedModel)>)

public static "getValueHelper"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: StringJS): T
public "getModelGroups"(): $Object2IntMap<($BlockState)>
public "loadBlockStateDefinitions"(arg0: $ResourceLocation$$Type, arg1: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>): void
public "loadAllBlockStates"(): void
public "fabric_setLoadingOverride"(arg0: $BlockStatesLoaderHooks$LoadingOverride$$Type): void
get "modelGroups"(): $Object2IntMap<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateModelLoader$$Type = ($BlockStateModelLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateModelLoader$$Original = $BlockStateModelLoader;}
declare module "net.minecraft.client.resources.metadata.animation.AnimationFrame" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AnimationFrame {
static readonly "UNKNOWN_FRAME_TIME": integer

constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "getIndex"(): integer
public "getTime"(arg0: integer): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFrame$$Type = ($AnimationFrame);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationFrame$$Original = $AnimationFrame;}
declare module "net.minecraft.client.resources.sounds.TickableSoundInstance" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Sound, $Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$SoundInstance$Attenuation} from "net.minecraft.client.resources.sounds.SoundInstance$Attenuation"
import {$WeighedSoundEvents} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundSource} from "net.minecraft.sounds.SoundSource"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$SoundInstance$$Interface} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBufferLibrary$$Type} from "net.minecraft.client.sounds.SoundBufferLibrary"

export interface $TickableSoundInstance$$Interface extends $SoundInstance$$Interface {
get "stopped"(): boolean
get "location"(): $ResourceLocation
get "relative"(): boolean
get "source"(): $SoundSource
get "looping"(): boolean
get "x"(): double
get "z"(): double
get "sound"(): $Sound
get "y"(): double
get "delay"(): integer
get "attenuation"(): $SoundInstance$Attenuation
get "pitch"(): float
get "volume"(): float
}

export class $TickableSoundInstance implements $TickableSoundInstance$$Interface {
 "tick"(): void
 "isStopped"(): boolean
 "getLocation"(): $ResourceLocation
 "resolve"(arg0: $SoundManager$$Type): $WeighedSoundEvents
 "isRelative"(): boolean
 "getSource"(): $SoundSource
 "getStream"(arg0: $SoundBufferLibrary$$Type, arg1: $Sound$$Type, arg2: boolean): $CompletableFuture
 "isLooping"(): boolean
 "getX"(): double
 "getZ"(): double
 "getSound"(): $Sound
 "getY"(): double
 "getDelay"(): integer
static "createUnseededRandom"(): $RandomSource
 "canStartSilent"(): boolean
 "canPlaySound"(): boolean
 "getAttenuation"(): $SoundInstance$Attenuation
 "getPitch"(): float
 "getVolume"(): float
 "getAudioStream"(arg0: $SoundBufferLibrary$$Type, arg1: $ResourceLocation$$Type, arg2: boolean): $CompletableFuture<($AudioStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableSoundInstance$$Type = ($TickableSoundInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickableSoundInstance$$Original = $TickableSoundInstance;}
declare module "net.minecraft.client.resources.server.PackReloadConfig$IdAndPath" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Record} from "java.lang.Record"

export class $PackReloadConfig$IdAndPath extends $Record {
constructor(arg0: $UUID$$Type, arg1: $Path$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $UUID
public "path"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackReloadConfig$IdAndPath$$Type = ({"path"?: $Path$$Type, "id"?: $UUID$$Type}) | ([path?: $Path$$Type, id?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackReloadConfig$IdAndPath$$Original = $PackReloadConfig$IdAndPath;}
declare module "net.minecraft.client.resources.SplashManager" {
import {$User$$Type} from "net.minecraft.client.User"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import {$SplashRenderer} from "net.minecraft.client.gui.components.SplashRenderer"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"

export class $SplashManager extends $SimplePreparableReloadListener<($List<(StringJS)>)> {
static readonly "SPLASHES_LOCATION": $ResourceLocation

constructor(arg0: $User$$Type)

public "apply"(arg0: any, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "apply"(arg0: $List$$Type<(StringJS)>, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "prepare"(arg0: $ResourceManager$$Type, arg1: $ProfilerFiller$$Type): any
public "getSplash"(): $SplashRenderer
get "splash"(): $SplashRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashManager$$Type = ($SplashManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashManager$$Original = $SplashManager;}
declare module "net.minecraft.client.resources.server.PackLoadFeedback" {
import {$UUID$$Type} from "java.util.UUID"
import {$PackLoadFeedback$Update$$Type} from "net.minecraft.client.resources.server.PackLoadFeedback$Update"
import {$PackLoadFeedback$FinalResult$$Type} from "net.minecraft.client.resources.server.PackLoadFeedback$FinalResult"

export interface $PackLoadFeedback$$Interface {
}

export class $PackLoadFeedback implements $PackLoadFeedback$$Interface {
 "reportFinalResult"(arg0: $UUID$$Type, arg1: $PackLoadFeedback$FinalResult$$Type): void
 "reportUpdate"(arg0: $UUID$$Type, arg1: $PackLoadFeedback$Update$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackLoadFeedback$$Type = ($PackLoadFeedback);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackLoadFeedback$$Original = $PackLoadFeedback;}
declare module "net.minecraft.client.resources.model.UnbakedModel" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Function$$Type} from "java.util.function.Function"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"

export interface $UnbakedModel$$Interface {
get "dependencies"(): $Collection<($ResourceLocation)>
}

export class $UnbakedModel implements $UnbakedModel$$Interface {
 "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
 "getDependencies"(): $Collection<($ResourceLocation)>
 "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnbakedModel$$Type = ($UnbakedModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnbakedModel$$Original = $UnbakedModel;}
declare module "net.minecraft.client.resources.PlayerSkin" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PlayerSkin$Model, $PlayerSkin$Model$$Type} from "net.minecraft.client.resources.PlayerSkin$Model"
import {$Record} from "java.lang.Record"

export class $PlayerSkin extends $Record {
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $PlayerSkin$Model$$Type, arg5: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "capeTexture"(): $ResourceLocation
public "model"(): $PlayerSkin$Model
public "textureUrl"(): StringJS
public "secure"(): boolean
public "texture"(): $ResourceLocation
public "elytraTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSkin$$Type = ({"capeTexture"?: $ResourceLocation$$Type, "elytraTexture"?: $ResourceLocation$$Type, "model"?: $PlayerSkin$Model$$Type, "secure"?: boolean, "textureUrl"?: StringJS, "texture"?: $ResourceLocation$$Type}) | ([capeTexture?: $ResourceLocation$$Type, elytraTexture?: $ResourceLocation$$Type, model?: $PlayerSkin$Model$$Type, secure?: boolean, textureUrl?: StringJS, texture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSkin$$Original = $PlayerSkin;}
declare module "net.minecraft.client.resources.server.DownloadedPackSource" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$GameConfig$UserData$$Type} from "net.minecraft.client.main.GameConfig$UserData"
import {$ServerPackManager$PackPromptStatus$$Type} from "net.minecraft.client.resources.server.ServerPackManager$PackPromptStatus"
import {$HttpUtil$DownloadProgressListener} from "net.minecraft.util.HttpUtil$DownloadProgressListener"
import {$RepositorySource} from "net.minecraft.server.packs.repository.RepositorySource"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ServerPackManager} from "net.minecraft.client.resources.server.ServerPackManager"
import {$PackLoadFeedback} from "net.minecraft.client.resources.server.PackLoadFeedback"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$URL$$Type} from "java.net.URL"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Path$$Type} from "java.nio.file.Path"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$Logger} from "org.slf4j.Logger"

export class $DownloadedPackSource implements $AutoCloseable$$Interface {
readonly "minecraft": $Minecraft
readonly "manager": $ServerPackManager
static readonly "LOGGER": $Logger
 "packFeedback": $PackLoadFeedback

constructor(arg0: $Minecraft$$Type, arg1: $Path$$Type, arg2: $GameConfig$UserData$$Type)

public "popAll"(): void
public "close"(): void
public "handler$bbe000$chat_heads$chatheads$checkForDisableResource"(list: $List$$Type, cir: $CallbackInfoReturnable$$Type): void
public "onRecovery"(): void
public "onRecoveryFailure"(): void
public "onReloadSuccess"(): void
public "pushPack"(arg0: $UUID$$Type, arg1: $URL$$Type, arg2: StringJS): void
public "createRepositorySource"(): $RepositorySource
public "cleanupAfterDisconnect"(): void
public "createDownloadNotifier"(arg0: integer): $HttpUtil$DownloadProgressListener
public "popPack"(arg0: $UUID$$Type): void
public "pushLocalPack"(arg0: $UUID$$Type, arg1: $Path$$Type): void
public "allowServerPacks"(): void
public "rejectServerPacks"(): void
public "configureForServerControl"(arg0: $Connection$$Type, arg1: $ServerPackManager$PackPromptStatus$$Type): void
public "configureForLocalWorld"(): void
public "waitForPackFeedback"(arg0: $UUID$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DownloadedPackSource$$Type = ($DownloadedPackSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DownloadedPackSource$$Original = $DownloadedPackSource;}
declare module "net.minecraft.client.resources.server.PackDownloader" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$DownloadQueue$DownloadRequest, $DownloadQueue$DownloadRequest$$Type} from "net.minecraft.server.packs.DownloadQueue$DownloadRequest"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$DownloadQueue$BatchResult, $DownloadQueue$BatchResult$$Type} from "net.minecraft.server.packs.DownloadQueue$BatchResult"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $PackDownloader$$Interface {

(arg0: $Map<($UUID), ($DownloadQueue$DownloadRequest)>, arg1: $Consumer<($DownloadQueue$BatchResult)>): void
}

export class $PackDownloader implements $PackDownloader$$Interface {
 "download"(arg0: $Map$$Type<($UUID$$Type), ($DownloadQueue$DownloadRequest$$Type)>, arg1: $Consumer$$Type<($DownloadQueue$BatchResult)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackDownloader$$Type = ((arg0: $Map<($UUID), ($DownloadQueue$DownloadRequest)>, arg1: $Consumer<($DownloadQueue$BatchResult)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackDownloader$$Original = $PackDownloader;}
declare module "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection" {
import {$AnimationMetadataSectionAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.AnimationMetadataSectionAccessor"
import {$List$$Type} from "java.util.List"
import {$AnimationMetadataSection$FrameOutput$$Type} from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection$FrameOutput"
import {$AnimationMetadataSectionSerializer} from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSectionSerializer"
import {$FrameSize} from "net.minecraft.client.resources.metadata.animation.FrameSize"
import {$AnimationFrame$$Type} from "net.minecraft.client.resources.metadata.animation.AnimationFrame"

export class $AnimationMetadataSection implements $AnimationMetadataSectionAccessor$$Interface {
static readonly "SECTION_NAME": StringJS
 "frameHeight": integer
 "frameWidth": integer
static readonly "SERIALIZER": $AnimationMetadataSectionSerializer
static readonly "UNKNOWN_SIZE": integer
static readonly "DEFAULT_FRAME_TIME": integer
static readonly "EMPTY": $AnimationMetadataSection

constructor(arg0: $List$$Type<($AnimationFrame$$Type)>, arg1: integer, arg2: integer, arg3: integer, arg4: boolean)

public "forEachFrame"(arg0: $AnimationMetadataSection$FrameOutput$$Type): void
public "setFrameHeight"(arg0: integer): void
public "setFrameWidth"(arg0: integer): void
public "calculateFrameSize"(arg0: integer, arg1: integer): $FrameSize
public "getFrameWidth"(): integer
public "getFrameHeight"(): integer
public "getDefaultFrameTime"(): integer
public "isInterpolatedFrames"(): boolean
get "defaultFrameTime"(): integer
get "interpolatedFrames"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationMetadataSection$$Type = ($AnimationMetadataSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationMetadataSection$$Original = $AnimationMetadataSection;}
declare module "net.minecraft.client.resources.model.ModelState" {
import {$ModelStateExtension$$Interface} from "net.neoforged.neoforge.client.extensions.ModelStateExtension"
import {$Transformation} from "com.mojang.math.Transformation"

export interface $ModelState$$Interface extends $ModelStateExtension$$Interface {
get "rotation"(): $Transformation
get "uvLocked"(): boolean
}

export class $ModelState implements $ModelState$$Interface {
 "getRotation"(): $Transformation
 "isUvLocked"(): boolean
 "mayApplyArbitraryRotation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelState$$Type = ($ModelState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelState$$Original = $ModelState;}
declare module "net.minecraft.client.resources.sounds.SoundInstance" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$FabricSoundInstance$$Interface} from "net.fabricmc.fabric.api.client.sound.v1.FabricSoundInstance"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Sound, $Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$SoundInstance$Attenuation} from "net.minecraft.client.resources.sounds.SoundInstance$Attenuation"
import {$WeighedSoundEvents} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundSource} from "net.minecraft.sounds.SoundSource"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBufferLibrary$$Type} from "net.minecraft.client.sounds.SoundBufferLibrary"

export interface $SoundInstance$$Interface extends $FabricSoundInstance$$Interface {
get "location"(): $ResourceLocation
get "relative"(): boolean
get "source"(): $SoundSource
get "looping"(): boolean
get "x"(): double
get "z"(): double
get "sound"(): $Sound
get "y"(): double
get "delay"(): integer
get "attenuation"(): $SoundInstance$Attenuation
get "pitch"(): float
get "volume"(): float
}

export class $SoundInstance implements $SoundInstance$$Interface {
 "getLocation"(): $ResourceLocation
 "resolve"(arg0: $SoundManager$$Type): $WeighedSoundEvents
 "isRelative"(): boolean
 "getSource"(): $SoundSource
 "getStream"(arg0: $SoundBufferLibrary$$Type, arg1: $Sound$$Type, arg2: boolean): $CompletableFuture
 "isLooping"(): boolean
 "getX"(): double
 "getZ"(): double
 "getSound"(): $Sound
 "getY"(): double
 "getDelay"(): integer
static "createUnseededRandom"(): $RandomSource
 "canStartSilent"(): boolean
 "canPlaySound"(): boolean
 "getAttenuation"(): $SoundInstance$Attenuation
 "getPitch"(): float
 "getVolume"(): float
 "getAudioStream"(arg0: $SoundBufferLibrary$$Type, arg1: $ResourceLocation$$Type, arg2: boolean): $CompletableFuture<($AudioStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundInstance$$Type = ($SoundInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundInstance$$Original = $SoundInstance;}
declare module "net.minecraft.client.resources.MapDecorationTextureManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MapDecoration$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"

export class $MapDecorationTextureManager extends $TextureAtlasHolder {
readonly "textureAtlas": $TextureAtlas

constructor(arg0: $TextureManager$$Type)

public "get"(arg0: $MapDecoration$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorationTextureManager$$Type = ($MapDecorationTextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDecorationTextureManager$$Original = $MapDecorationTextureManager;}
declare module "net.minecraft.client.resources.model.BlockStateModelLoader$LoadedJson" {
import {$BlockModelDefinition} from "net.minecraft.client.renderer.block.model.BlockModelDefinition"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$BlockModelDefinition$Context$$Type} from "net.minecraft.client.renderer.block.model.BlockModelDefinition$Context"
import {$Record} from "java.lang.Record"

export class $BlockStateModelLoader$LoadedJson extends $Record {
constructor(arg0: StringJS, arg1: $JsonElement$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): $JsonElement
public "source"(): StringJS
public "parse"(arg0: $ResourceLocation$$Type, arg1: $BlockModelDefinition$Context$$Type): $BlockModelDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateModelLoader$LoadedJson$$Type = ({"source"?: StringJS, "data"?: $JsonElement$$Type}) | ([source?: StringJS, data?: $JsonElement$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateModelLoader$LoadedJson$$Original = $BlockStateModelLoader$LoadedJson;}
declare module "net.minecraft.client.resources.model.ModelBakery$BakedCacheKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$Record} from "java.lang.Record"

export class $ModelBakery$BakedCacheKey extends $Record {
constructor(id: $ResourceLocation$$Type, transformation: $Transformation$$Type, isUvLocked: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "transformation"(): $Transformation
public "isUvLocked"(): boolean
get "uvLocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakery$BakedCacheKey$$Type = ({"id"?: $ResourceLocation$$Type, "isUvLocked"?: boolean, "transformation"?: $Transformation$$Type}) | ([id?: $ResourceLocation$$Type, isUvLocked?: boolean, transformation?: $Transformation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakery$BakedCacheKey$$Original = $ModelBakery$BakedCacheKey;}
declare module "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection$FrameOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimationMetadataSection$FrameOutput$$Interface {

(arg0: integer, arg1: integer): void
}

export class $AnimationMetadataSection$FrameOutput implements $AnimationMetadataSection$FrameOutput$$Interface {
 "accept"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationMetadataSection$FrameOutput$$Type = ((arg0: integer, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationMetadataSection$FrameOutput$$Original = $AnimationMetadataSection$FrameOutput;}
declare module "net.minecraft.client.resources.SkinManager" {
import {$UUID$$Type} from "java.util.UUID"
import {$MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$PlayerSkin} from "net.minecraft.client.resources.PlayerSkin"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$SkinManager$TextureCache} from "net.minecraft.client.resources.SkinManager$TextureCache"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Supplier} from "java.util.function.Supplier"
import {$MinecraftProfileTextures$$Type} from "com.mojang.authlib.minecraft.MinecraftProfileTextures"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Path$$Type} from "java.nio.file.Path"
import {$Logger} from "org.slf4j.Logger"

export class $SkinManager {
readonly "skinTextures": $SkinManager$TextureCache
static readonly "LOGGER": $Logger

constructor(arg0: $TextureManager$$Type, arg1: $Path$$Type, arg2: $MinecraftSessionService$$Type, arg3: $Executor$$Type)

public "getOrLoad"(arg0: $GameProfile$$Type): $CompletableFuture<($PlayerSkin)>
public "registerTextures"(arg0: $UUID$$Type, arg1: $MinecraftProfileTextures$$Type): $CompletableFuture<($PlayerSkin)>
public "lookupInsecure"(arg0: $GameProfile$$Type): $Supplier<($PlayerSkin)>
public "getInsecureSkin"(arg0: $GameProfile$$Type): $PlayerSkin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinManager$$Type = ($SkinManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkinManager$$Original = $SkinManager;}
declare module "net.minecraft.client.resources.model.ModelManager" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$FabricBakedModelManager$$Interface} from "net.fabricmc.fabric.api.client.model.loading.v1.FabricBakedModelManager"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ModelBakery} from "net.minecraft.client.resources.model.ModelBakery"
import {$BakedModelManagerAccessor$$Interface} from "dev.emi.emi.mixin.accessor.BakedModelManagerAccessor"
import {$BlockModelShaper} from "net.minecraft.client.renderer.block.BlockModelShaper"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ModelManager implements $PreparableReloadListener$$Interface, $AutoCloseable$$Interface, $FabricBakedModelManager$$Interface, $BakedModelManagerAccessor$$Interface, $IdentifiableResourceReloadListener$$Interface {
 "bakedRegistry": $Map<($ModelResourceLocation), ($BakedModel)>

constructor(arg0: $TextureManager$$Type, arg1: $BlockColors$$Type, arg2: integer)

public "close"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getAtlas"(arg0: $ResourceLocation$$Type): $TextureAtlas
public "getModel"(arg0: $ModelResourceLocation$$Type): $BakedModel
public "updateMaxMipLevel"(arg0: integer): void
public "getFabricId"(): $ResourceLocation
public "getMissingModel"(): $BakedModel
public "getModelBakery"(): $ModelBakery
public "getBlockModelShaper"(): $BlockModelShaper
public "requiresRender"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "getFabricDependencies"(): $Collection
public "getModels"(): $Map
public "getName"(): StringJS
public "getModel"(arg0: $ResourceLocation$$Type): $BakedModel
get "fabricId"(): $ResourceLocation
get "missingModel"(): $BakedModel
get "modelBakery"(): $ModelBakery
get "blockModelShaper"(): $BlockModelShaper
get "fabricDependencies"(): $Collection
get "models"(): $Map
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelManager$$Type = ($ModelManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelManager$$Original = $ModelManager;}
declare module "net.minecraft.client.resources.server.PackLoadFeedback$FinalResult" {
import {$Enum} from "java.lang.Enum"

export class $PackLoadFeedback$FinalResult extends $Enum<($PackLoadFeedback$FinalResult)> {
static readonly "DISCARDED": $PackLoadFeedback$FinalResult
static readonly "ACTIVATION_FAILED": $PackLoadFeedback$FinalResult
static readonly "DECLINED": $PackLoadFeedback$FinalResult
static readonly "DOWNLOAD_FAILED": $PackLoadFeedback$FinalResult
static readonly "APPLIED": $PackLoadFeedback$FinalResult

public static "values"(): ($PackLoadFeedback$FinalResult)[]
public static "valueOf"(arg0: StringJS): $PackLoadFeedback$FinalResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackLoadFeedback$FinalResult$$Type = (("declined") | ("applied") | ("discarded") | ("download_failed") | ("activation_failed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackLoadFeedback$FinalResult$$Original = $PackLoadFeedback$FinalResult;}
declare module "net.minecraft.client.resources.server.ServerPackManager$PackPromptStatus" {
import {$Enum} from "java.lang.Enum"

export class $ServerPackManager$PackPromptStatus extends $Enum<($ServerPackManager$PackPromptStatus)> {
static readonly "ALLOWED": $ServerPackManager$PackPromptStatus
static readonly "PENDING": $ServerPackManager$PackPromptStatus
static readonly "DECLINED": $ServerPackManager$PackPromptStatus

public static "values"(): ($ServerPackManager$PackPromptStatus)[]
public static "valueOf"(arg0: StringJS): $ServerPackManager$PackPromptStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPackManager$PackPromptStatus$$Type = (("pending") | ("allowed") | ("declined"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPackManager$PackPromptStatus$$Original = $ServerPackManager$PackPromptStatus;}
declare module "net.minecraft.client.resources.model.ModelResourceLocation" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $ModelResourceLocation extends $Record {
static readonly "INVENTORY_VARIANT": StringJS
static readonly "STANDALONE_VARIANT": StringJS

constructor(id: $ResourceLocation$$Type, variant: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public static "standalone"(arg0: $ResourceLocation$$Type): $ModelResourceLocation
public "getVariant"(): StringJS
public "variant"(): StringJS
public static "inventory"(arg0: $ResourceLocation$$Type): $ModelResourceLocation
public static "vanilla"(arg0: StringJS, arg1: StringJS): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelResourceLocation$$Type = ({"variant"?: StringJS, "id"?: $ResourceLocation$$Type}) | ([variant?: StringJS, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelResourceLocation$$Original = $ModelResourceLocation;}
declare module "net.minecraft.client.resources.model.BakedModel" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemOverrides} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$IBakedModelExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IBakedModelExtension"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FabricBakedModel$$Interface} from "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemTransforms} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ChunkRenderTypeSet} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BakedModelMixin$$Interface} from "net.fabricmc.fabric.mixin.renderer.client.BakedModelMixin"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"

export interface $BakedModel$$Interface extends $IBakedModelExtension$$Interface, $FabricBakedModel$$Interface, $BakedModelMixin$$Interface {
get "gui3d"(): boolean
get "transforms"(): $ItemTransforms
get "overrides"(): $ItemOverrides
get "particleIcon"(): $TextureAtlasSprite
get "customRenderer"(): boolean
get "vanillaAdapter"(): boolean
}

export class $BakedModel implements $BakedModel$$Interface {
 "isGui3d"(): boolean
/**
 * 
 * @deprecated
 */
 "getTransforms"(): $ItemTransforms
 "getOverrides"(): $ItemOverrides
 "usesBlockLight"(): boolean
/**
 * 
 * @deprecated
 */
 "getParticleIcon"(): $TextureAtlasSprite
 "useAmbientOcclusion"(): boolean
 "isCustomRenderer"(): boolean
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type, arg2: $RenderContext$$Type): void
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type, arg4: $RenderContext$$Type): void
/**
 * 
 * @deprecated
 */
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type): $List<($BakedQuad)>
 "applyTransform"(arg0: $ItemDisplayContext$$Type, arg1: $PoseStack$$Type, arg2: boolean): $BakedModel
 "getParticleIcon"(arg0: $ModelData$$Type): $TextureAtlasSprite
 "getModelData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ModelData$$Type): $ModelData
 "useAmbientOcclusion"(arg0: $BlockState$$Type, arg1: $ModelData$$Type, arg2: $RenderType$$Type): $TriState
 "getRenderTypes"(arg0: $ItemStack$$Type, arg1: boolean): $List<($RenderType)>
 "getRenderTypes"(arg0: $BlockState$$Type, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
 "getRenderPasses"(arg0: $ItemStack$$Type, arg1: boolean): $List<($BakedModel)>
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type, arg3: $ModelData$$Type, arg4: $RenderType$$Type): $List<($BakedQuad)>
 "isVanillaAdapter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModel$$Type = ($BakedModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedModel$$Original = $BakedModel;}
declare module "net.minecraft.client.resources.sounds.SoundInstance$Attenuation" {
import {$Enum} from "java.lang.Enum"

export class $SoundInstance$Attenuation extends $Enum<($SoundInstance$Attenuation)> {
static readonly "NONE": $SoundInstance$Attenuation
static readonly "LINEAR": $SoundInstance$Attenuation

public static "values"(): ($SoundInstance$Attenuation)[]
public static "valueOf"(arg0: StringJS): $SoundInstance$Attenuation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundInstance$Attenuation$$Type = (("none") | ("linear"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundInstance$Attenuation$$Original = $SoundInstance$Attenuation;}
declare module "net.minecraft.client.resources.language.LanguageInfo" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $LanguageInfo extends $Record {
static readonly "CODEC": $Codec<($LanguageInfo)>

constructor(arg0: StringJS, arg1: StringJS, arg2: boolean)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "region"(): StringJS
public "toComponent"(): $Component
public "bidirectional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageInfo$$Type = ({"bidirectional"?: boolean, "region"?: StringJS, "name"?: StringJS}) | ([bidirectional?: boolean, region?: StringJS, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LanguageInfo$$Original = $LanguageInfo;}
declare module "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$GuiSpriteScaling$Type, $GuiSpriteScaling$Type$$Type} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$Type"

export interface $GuiSpriteScaling$$Interface {

(): $GuiSpriteScaling$Type$$Type
}

export class $GuiSpriteScaling implements $GuiSpriteScaling$$Interface {
static readonly "CODEC": $Codec<($GuiSpriteScaling)>
static readonly "DEFAULT": $GuiSpriteScaling

 "type"(): $GuiSpriteScaling$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteScaling$$Type = (() => $GuiSpriteScaling$Type$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteScaling$$Original = $GuiSpriteScaling;}
declare module "net.minecraft.client.resources.model.ModelBaker" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$IModelBakerExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IModelBakerExtension"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelBaker$$Interface extends $IModelBakerExtension$$Interface {
get "modelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
}

export class $ModelBaker implements $ModelBaker$$Interface {
/**
 * 
 * @deprecated
 */
 "bake"(arg0: $ResourceLocation$$Type, arg1: $ModelState$$Type): $BakedModel
 "getModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
 "bake"(arg0: $ResourceLocation$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
 "bakeUncached"(arg0: $UnbakedModel$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
 "getTopLevelModel"(arg0: $ModelResourceLocation$$Type): $UnbakedModel
 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBaker$$Type = ($ModelBaker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBaker$$Original = $ModelBaker;}
declare module "net.minecraft.client.resources.server.PackLoadFeedback$Update" {
import {$Enum} from "java.lang.Enum"

export class $PackLoadFeedback$Update extends $Enum<($PackLoadFeedback$Update)> {
static readonly "ACCEPTED": $PackLoadFeedback$Update
static readonly "DOWNLOADED": $PackLoadFeedback$Update

public static "values"(): ($PackLoadFeedback$Update)[]
public static "valueOf"(arg0: StringJS): $PackLoadFeedback$Update
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackLoadFeedback$Update$$Type = (("accepted") | ("downloaded"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackLoadFeedback$Update$$Original = $PackLoadFeedback$Update;}
declare module "net.minecraft.client.resources.metadata.animation.FrameSize" {
import {$Record} from "java.lang.Record"

export class $FrameSize extends $Record {
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameSize$$Type = ({"height"?: integer, "width"?: integer}) | ([height?: integer, width?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrameSize$$Original = $FrameSize;}
declare module "net.minecraft.client.resources.PaintingTextureManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$PaintingVariant$$Type} from "net.minecraft.world.entity.decoration.PaintingVariant"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"

export class $PaintingTextureManager extends $TextureAtlasHolder {
readonly "textureAtlas": $TextureAtlas

constructor(arg0: $TextureManager$$Type)

public "get"(arg0: $PaintingVariant$$Type): $TextureAtlasSprite
public "getBackSprite"(): $TextureAtlasSprite
get "backSprite"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingTextureManager$$Type = ($PaintingTextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintingTextureManager$$Original = $PaintingTextureManager;}
declare module "net.minecraft.client.resources.language.ClientLanguage" {
import {$IMixinClientLanguage$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientLanguage"
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$Map} from "java.util.Map"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List$$Type} from "java.util.List"
import {$IMixinClientLanguage$$Interface as $IMixinClientLanguage$0$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinClientLanguage"
import {$Language} from "net.minecraft.locale.Language"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ClientLanguage extends $Language implements $IMixinClientLanguage$$Interface, $IMixinClientLanguage$0$$Interface {
 "storage": $Map<(StringJS), (StringJS)>
static readonly "DEFAULT": StringJS

public "getOrDefault"(arg0: StringJS, arg1: StringJS): StringJS
public "has"(arg0: StringJS): boolean
public "getVisualOrder"(arg0: $FormattedText$$Type): $FormattedCharSequence
public "getStorageFancyMenu"(): $Map
public "isDefaultRightToLeft"(): boolean
public static "loadFrom"(arg0: $ResourceManager$$Type, arg1: $List$$Type<(StringJS)>, arg2: boolean): $ClientLanguage
public "getComponent"(arg0: StringJS): $Component
public "getStorageKonkrete"(): $Map
public "getLanguageData"(): $Map<(StringJS), (StringJS)>
get "storageFancyMenu"(): $Map
get "defaultRightToLeft"(): boolean
get "storageKonkrete"(): $Map
get "languageData"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLanguage$$Type = ($ClientLanguage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLanguage$$Original = $ClientLanguage;}
declare module "net.minecraft.client.resources.model.ModelBakery" {
import {$ModelWrappingHandler, $ModelWrappingHandler$$Type} from "me.pepperbell.continuity.client.resource.ModelWrappingHandler"
import {$EmissiveModelWrapperHolder$$Interface} from "com.blackgear.platform.client.v2.emissive.EmissiveModelWrapperHolder"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$ModelBakeryAccessor$$Interface} from "net.blay09.mods.balm.mixin.ModelBakeryAccessor"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ModelBakery$TextureGetter$$Type} from "net.minecraft.client.resources.model.ModelBakery$TextureGetter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelLoaderExtension$$Interface} from "me.pepperbell.continuity.client.mixinterface.ModelLoaderExtension"
import {$BlockStateModelLoader, $BlockStateModelLoader$$Type} from "net.minecraft.client.resources.model.BlockStateModelLoader"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$ModelLoaderHooks$$Interface} from "net.fabricmc.fabric.impl.client.model.loading.ModelLoaderHooks"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Material} from "net.minecraft.client.resources.model.Material"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$EmissiveModelWrapper, $EmissiveModelWrapper$$Type} from "com.blackgear.platform.client.v2.emissive.EmissiveModelWrapper"
import {$ModelLoadingEventDispatcher} from "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher"
import {$ModelBakery$BakedCacheKey} from "net.minecraft.client.resources.model.ModelBakery$BakedCacheKey"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ItemModelGenerator} from "net.minecraft.client.renderer.block.model.ItemModelGenerator"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$BlockStateModelLoader$LoadedJson$$Type} from "net.minecraft.client.resources.model.BlockStateModelLoader$LoadedJson"

export class $ModelBakery implements $ModelBakeryAccessor$$Interface, $ModelLoaderExtension$$Interface, $EmissiveModelWrapperHolder$$Interface, $ModelLoaderHooks$$Interface {
static readonly "BLOCK_ENTITY_MARKER": $BlockModel
static readonly "ITEM_MODEL_GENERATOR": $ItemModelGenerator
readonly "topLevelModels": $Map<($ModelResourceLocation), ($UnbakedModel)>
static readonly "NO_PATTERN_SHIELD": $Material
static readonly "DESTROY_STAGE_COUNT": integer
static readonly "DESTROY_STAGES": $List<($ResourceLocation)>
static readonly "BANNER_BASE": $Material
static readonly "GENERATION_MARKER": $BlockModel
static readonly "BREAKING_LOCATIONS": $List<($ResourceLocation)>
static readonly "MISSING_MODEL_LOCATION": $ResourceLocation
static readonly "DESTROY_TYPES": $List<($RenderType)>
static readonly "MISSING_MODEL_MESH": StringJS
static readonly "FIRE_1": $Material
static readonly "LAVA_FLOW": $Material
readonly "bakedCache": $Map<($ModelBakery$BakedCacheKey), ($BakedModel)>
static readonly "SHIELD_BASE": $Material
static readonly "FIRE_0": $Material
static readonly "WATER_FLOW": $Material
static readonly "MODEL_LISTER": $FileToIdConverter
static readonly "WATER_OVERLAY": $Material
static readonly "MISSING_MODEL_VARIANT": $ModelResourceLocation

constructor(arg0: $BlockColors$$Type, arg1: $ProfilerFiller$$Type, arg2: $Map$$Type<($ResourceLocation$$Type), ($BlockModel$$Type)>, arg3: $Map$$Type<($ResourceLocation$$Type), ($List$$Type<($BlockStateModelLoader$LoadedJson$$Type)>)>)

public "getModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
public "bakeModels"(arg0: $ModelBakery$TextureGetter$$Type): void
public "callGetModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
public "getModelWrapper"(): $EmissiveModelWrapper
public "getBakedTopLevelModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
public "continuity$getModelWrappingHandler"(): $ModelWrappingHandler
public "getModelGroups"(): $Object2IntMap<($BlockState)>
public "setModelWrapper"(wrapper: $EmissiveModelWrapper$$Type): void
public "fabric_getMissingModel"(): $UnbakedModel
public "fabric_getOrLoadModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
public "fabric_getDispatcher"(): $ModelLoadingEventDispatcher
public "fabric_add"(arg0: $ModelResourceLocation$$Type, arg1: $UnbakedModel$$Type): void
public "handler$coj000$immersive_melodies$immersiveMelodies$inject"(arg0: $ModelResourceLocation$$Type, arg1: $CallbackInfo$$Type): void
public "localvar$cnf000$puzzleslib$init"(blockStateModelLoader: $BlockStateModelLoader$$Type): $BlockStateModelLoader
public "continuity$setModelWrappingHandler"(handler: $ModelWrappingHandler$$Type): void
public "registerModelAndLoadDependencies"(arg0: $ModelResourceLocation$$Type, arg1: $UnbakedModel$$Type): void
public "handler$ffa000$platform$addModel"(ci: $CallbackInfo$$Type): void
get "modelWrapper"(): $EmissiveModelWrapper
get "bakedTopLevelModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
get "modelGroups"(): $Object2IntMap<($BlockState)>
set "modelWrapper"(value: $EmissiveModelWrapper$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakery$$Type = ($ModelBakery);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakery$$Original = $ModelBakery;}
declare module "net.minecraft.client.resources.MobEffectTextureManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export class $MobEffectTextureManager extends $TextureAtlasHolder {
readonly "textureAtlas": $TextureAtlas

constructor(arg0: $TextureManager$$Type)

public "get"(arg0: $Holder$$Type<($MobEffect)>): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectTextureManager$$Type = ($MobEffectTextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectTextureManager$$Original = $MobEffectTextureManager;}
