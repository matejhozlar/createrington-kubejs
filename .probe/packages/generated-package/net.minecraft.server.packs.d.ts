declare module "net.minecraft.server.packs.resources.ResourceManagerReloadListener" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export interface $ResourceManagerReloadListener$$Interface extends $PreparableReloadListener$$Interface {

(arg0: $ResourceManager): void
get "name"(): StringJS
}

export class $ResourceManagerReloadListener implements $ResourceManagerReloadListener$$Interface {
 "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
 "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
 "getName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceManagerReloadListener$$Type = ((arg0: $ResourceManager) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceManagerReloadListener$$Original = $ResourceManagerReloadListener;}
declare module "net.minecraft.server.packs.AbstractPackResources" {
import {$PackLocationInfo} from "net.minecraft.server.packs.PackLocationInfo"
import {$KnownPack} from "net.minecraft.server.packs.repository.KnownPack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$Optional} from "java.util.Optional"
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$PackResources$$Interface} from "net.minecraft.server.packs.PackResources"
import {$PackResources$ResourceOutput$$Type} from "net.minecraft.server.packs.PackResources$ResourceOutput"
import {$Set} from "java.util.Set"
import {$IoSupplier} from "net.minecraft.server.packs.resources.IoSupplier"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export class $AbstractPackResources implements $PackResources$$Interface {
public "toString"(): StringJS
public "location"(): $PackLocationInfo
public static "getMetadataFromStream"<T>(arg0: $MetadataSectionSerializer$$Type<(T)>, arg1: $InputStream$$Type): T
public "getMetadataSection"<T>(arg0: $MetadataSectionSerializer$$Type<(T)>): T
public "getResource"(arg0: $PackType$$Type, arg1: $ResourceLocation$$Type): $IoSupplier<($InputStream)>
public "close"(): void
public "getNamespaces"(arg0: $PackType$$Type): $Set<(StringJS)>
public "listResources"(arg0: $PackType$$Type, arg1: StringJS, arg2: StringJS, arg3: $PackResources$ResourceOutput$$Type): void
public "packId"(): StringJS
public "getRootResource"(...arg0: (StringJS)[]): $IoSupplier<($InputStream)>
public "knownPackInfo"(): $Optional<($KnownPack)>
public "isHidden"(): boolean
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPackResources$$Type = ($AbstractPackResources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPackResources$$Original = $AbstractPackResources;}
declare module "net.minecraft.server.packs.resources.ReloadInstance" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"

export interface $ReloadInstance$$Interface {
get "actualProgress"(): float
}

export class $ReloadInstance implements $ReloadInstance$$Interface {
 "done"(): $CompletableFuture<(never)>
 "isDone"(): boolean
 "checkExceptions"(): void
 "getActualProgress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadInstance$$Type = ($ReloadInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadInstance$$Original = $ReloadInstance;}
declare module "net.minecraft.server.packs.resources.SimplePreparableReloadListener" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ContextAwareReloadListener} from "net.neoforged.neoforge.resource.ContextAwareReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $SimplePreparableReloadListener<T> extends $ContextAwareReloadListener implements $PreparableReloadListener$$Interface {
constructor()

public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplePreparableReloadListener$$Type<T> = ($SimplePreparableReloadListener<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimplePreparableReloadListener$$Original<T> = $SimplePreparableReloadListener<(T)>;}
declare module "net.minecraft.server.packs.metadata.MetadataSectionSerializer" {
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $MetadataSectionSerializer$$Interface<T> {
get "metadataSectionName"(): StringJS
}

export class $MetadataSectionSerializer<T> implements $MetadataSectionSerializer$$Interface {
 "getMetadataSectionName"(): StringJS
 "fromJson"(arg0: $JsonObject$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetadataSectionSerializer$$Type<T> = ($MetadataSectionSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetadataSectionSerializer$$Original<T> = $MetadataSectionSerializer<(T)>;}
declare module "net.minecraft.server.packs.resources.ResourceProvider" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BufferedReader} from "java.io.BufferedReader"
import {$InputStream} from "java.io.InputStream"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $ResourceProvider$$Interface {

(arg0: $ResourceLocation): ($Resource$$Type)?
}

export class $ResourceProvider implements $ResourceProvider$$Interface {
static readonly "EMPTY": $ResourceProvider

 "getResource"(arg0: $ResourceLocation$$Type): $Optional<($Resource)>
 "open"(arg0: $ResourceLocation$$Type): $InputStream
static "fromMap"(arg0: $Map$$Type<($ResourceLocation$$Type), ($Resource$$Type)>): $ResourceProvider
 "openAsReader"(arg0: $ResourceLocation$$Type): $BufferedReader
 "getResourceOrThrow"(arg0: $ResourceLocation$$Type): $Resource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceProvider$$Type = ((arg0: $ResourceLocation) => ($Resource$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceProvider$$Original = $ResourceProvider;}
declare module "net.minecraft.server.packs.repository.Pack" {
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$FusionPackMetadata} from "com.supermartijn642.fusion.resources.FusionPackMetadata"
import {$PackLocationInfo, $PackLocationInfo$$Type} from "net.minecraft.server.packs.PackLocationInfo"
import {$PackMetadataSection$$Type} from "net.minecraft.server.packs.metadata.pack.PackMetadataSection"
import {$List, $List$$Type} from "java.util.List"
import {$Pack$Metadata, $Pack$Metadata$$Type} from "net.minecraft.server.packs.repository.Pack$Metadata"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$PackResources} from "net.minecraft.server.packs.PackResources"
import {$PackSource} from "net.minecraft.server.packs.repository.PackSource"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Pack$ResourcesSupplier$$Type} from "net.minecraft.server.packs.repository.Pack$ResourcesSupplier"
import {$FabricResourcePackProfile$$Interface} from "net.fabricmc.fabric.impl.resource.loader.FabricResourcePackProfile"
import {$Pack$Position} from "net.minecraft.server.packs.repository.Pack$Position"
import {$InclusiveRange} from "net.minecraft.util.InclusiveRange"
import {$PackCompatibility} from "net.minecraft.server.packs.repository.PackCompatibility"
import {$PackExtension$$Interface} from "com.supermartijn642.fusion.extensions.PackExtension"
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$PackSelectionConfig, $PackSelectionConfig$$Type} from "net.minecraft.server.packs.PackSelectionConfig"
import {$Set$$Type} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"

export class $Pack implements $PackExtension$$Interface, $FabricResourcePackProfile$$Interface {
constructor(arg0: $PackLocationInfo$$Type, arg1: $Pack$ResourcesSupplier$$Type, arg2: $Pack$Metadata$$Type, arg3: $PackSelectionConfig$$Type)

public "getDescription"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "location"(): $PackLocationInfo
public "getId"(): StringJS
public "open"(): $PackResources
public "getChildren"(): $List<($Pack)>
public static "getDeclaredPackVersions"(arg0: StringJS, arg1: $PackMetadataSection$$Type): $InclusiveRange<(integer)>
public "fabric_setParentsPredicate"(arg0: $Predicate$$Type): void
public "getRequestedFeatures"(): $FeatureFlagSet
public "streamSelfAndChildren"(): $Stream<($Pack)>
public "fabric_parentsEnabled"(arg0: $Set$$Type): boolean
public "hidden"(): $Pack
public "isRequired"(): boolean
public "fabric_isHidden"(): boolean
public "getChatLink"(arg0: boolean): $Component
public "getFusionMetadata"(): $FusionPackMetadata
public "getPackSource"(): $PackSource
public "withChildren"(arg0: $List$$Type<($Pack$$Type)>): $Pack
public "getTitle"(): $Component
public "getCompatibility"(): $PackCompatibility
public "isFixedPosition"(): boolean
public static "readMetaAndCreate"(arg0: $PackLocationInfo$$Type, arg1: $Pack$ResourcesSupplier$$Type, arg2: $PackType$$Type, arg3: $PackSelectionConfig$$Type): $Pack
public static "readPackMetadata"(arg0: $PackLocationInfo$$Type, arg1: $Pack$ResourcesSupplier$$Type, arg2: integer): $Pack$Metadata
public "selectionConfig"(): $PackSelectionConfig
public "getDefaultPosition"(): $Pack$Position
get "description"(): $Component
get "id"(): StringJS
get "children"(): $List<($Pack)>
get "requestedFeatures"(): $FeatureFlagSet
get "required"(): boolean
get "fusionMetadata"(): $FusionPackMetadata
get "packSource"(): $PackSource
get "title"(): $Component
get "compatibility"(): $PackCompatibility
get "fixedPosition"(): boolean
get "defaultPosition"(): $Pack$Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pack$$Type = ($Pack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pack$$Original = $Pack;}
declare module "net.minecraft.server.packs.resources.CloseableResourceManager" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$PackResources} from "net.minecraft.server.packs.PackResources"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$BufferedReader} from "java.io.BufferedReader"
import {$Set} from "java.util.Set"
import {$InputStream} from "java.io.InputStream"
import {$Stream} from "java.util.stream.Stream"
import {$ResourceManager$$Interface} from "net.minecraft.server.packs.resources.ResourceManager"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $CloseableResourceManager$$Interface extends $ResourceManager$$Interface, $AutoCloseable$$Interface {
get "namespaces"(): $Set<(StringJS)>
}

export class $CloseableResourceManager implements $CloseableResourceManager$$Interface {
 "close"(): void
 "getNamespaces"(): $Set<(StringJS)>
 "listResources"(arg0: StringJS, arg1: $Predicate$$Type<($ResourceLocation)>): $Map<($ResourceLocation), ($Resource)>
 "listPacks"(): $Stream<($PackResources)>
 "getResourceStack"(arg0: $ResourceLocation$$Type): $List<($Resource)>
 "listResourceStacks"(arg0: StringJS, arg1: $Predicate$$Type<($ResourceLocation)>): $Map<($ResourceLocation), ($List<($Resource)>)>
 "getResource"(arg0: $ResourceLocation$$Type): $Optional<($Resource)>
 "open"(arg0: $ResourceLocation$$Type): $InputStream
static "fromMap"(arg0: $Map$$Type<($ResourceLocation$$Type), ($Resource$$Type)>): $ResourceProvider
 "openAsReader"(arg0: $ResourceLocation$$Type): $BufferedReader
 "getResourceOrThrow"(arg0: $ResourceLocation$$Type): $Resource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloseableResourceManager$$Type = ($CloseableResourceManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CloseableResourceManager$$Original = $CloseableResourceManager;}
declare module "net.minecraft.server.packs.repository.Pack$ResourcesSupplier" {
import {$PackLocationInfo$$Type} from "net.minecraft.server.packs.PackLocationInfo"
import {$Pack$Metadata$$Type} from "net.minecraft.server.packs.repository.Pack$Metadata"
import {$PackResources} from "net.minecraft.server.packs.PackResources"

export interface $Pack$ResourcesSupplier$$Interface {
}

export class $Pack$ResourcesSupplier implements $Pack$ResourcesSupplier$$Interface {
 "openFull"(arg0: $PackLocationInfo$$Type, arg1: $Pack$Metadata$$Type): $PackResources
 "openPrimary"(arg0: $PackLocationInfo$$Type): $PackResources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pack$ResourcesSupplier$$Type = ($Pack$ResourcesSupplier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pack$ResourcesSupplier$$Original = $Pack$ResourcesSupplier;}
declare module "net.minecraft.server.packs.metadata.pack.PackMetadataSection" {
import {$InclusiveRange, $InclusiveRange$$Type} from "net.minecraft.util.InclusiveRange"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MetadataSectionType} from "net.minecraft.server.packs.metadata.MetadataSectionType"
import {$Record} from "java.lang.Record"

export class $PackMetadataSection extends $Record {
static readonly "CODEC": $Codec<($PackMetadataSection)>
static readonly "TYPE": $MetadataSectionType<($PackMetadataSection)>

constructor(arg0: $Component$$Type, arg1: integer)
constructor(description: $Component$$Type, packFormat: integer, supportedFormats: ($InclusiveRange$$Type<(integer)>)?)

public "packFormat"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "description"(): $Component
public "supportedFormats"(): $Optional<($InclusiveRange<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackMetadataSection$$Type = ({"packFormat"?: integer, "supportedFormats"?: ($InclusiveRange$$Type<(integer)>)?, "description"?: $Component$$Type}) | ([packFormat?: integer, supportedFormats?: ($InclusiveRange$$Type<(integer)>)?, description?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackMetadataSection$$Original = $PackMetadataSection;}
declare module "net.minecraft.server.packs.PackResources$ResourceOutput" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BiConsumer, $BiConsumer$$Type, $BiConsumer$$Interface} from "java.util.function.BiConsumer"
import {$IoSupplier, $IoSupplier$$Type} from "net.minecraft.server.packs.resources.IoSupplier"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export interface $PackResources$ResourceOutput$$Interface extends $BiConsumer$$Interface<($ResourceLocation), ($IoSupplier<($InputStream)>)> {

(arg0: $ResourceLocation, arg1: $IoSupplier<($InputStream$$Type)>): void
}

export class $PackResources$ResourceOutput implements $PackResources$ResourceOutput$$Interface {
 "accept"(arg0: $ResourceLocation$$Type, arg1: $IoSupplier$$Type<($InputStream$$Type)>): void
 "andThen"(arg0: $BiConsumer$$Type<($ResourceLocation), ($IoSupplier<($InputStream)>)>): $BiConsumer<($ResourceLocation), ($IoSupplier<($InputStream)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackResources$ResourceOutput$$Type = ((arg0: $ResourceLocation, arg1: $IoSupplier<($InputStream)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackResources$ResourceOutput$$Original = $PackResources$ResourceOutput;}
declare module "net.minecraft.server.packs.resources.Resource" {
import {$FabricResource$$Interface} from "net.fabricmc.fabric.impl.resource.loader.FabricResource"
import {$KnownPack} from "net.minecraft.server.packs.repository.KnownPack"
import {$Optional} from "java.util.Optional"
import {$BufferedReader} from "java.io.BufferedReader"
import {$PackResources, $PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$IoSupplier$$Type} from "net.minecraft.server.packs.resources.IoSupplier"
import {$PackSource} from "net.minecraft.server.packs.repository.PackSource"
import {$ResourceMetadata, $ResourceMetadata$$Type} from "net.minecraft.server.packs.resources.ResourceMetadata"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export class $Resource implements $FabricResource$$Interface {
constructor(arg0: $PackResources$$Type, arg1: $IoSupplier$$Type<($InputStream$$Type)>, arg2: $IoSupplier$$Type<($ResourceMetadata$$Type)>)
constructor(arg0: $PackResources$$Type, arg1: $IoSupplier$$Type<($InputStream$$Type)>)

public "source"(): $PackResources
public "open"(): $InputStream
public "metadata"(): $ResourceMetadata
public "sourcePackId"(): StringJS
public "knownPackInfo"(): $Optional<($KnownPack)>
public "openAsReader"(): $BufferedReader
public "getFabricPackSource"(): $PackSource
get "fabricPackSource"(): $PackSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$$Type = ($Resource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Resource$$Original = $Resource;}
declare module "net.minecraft.server.packs.VanillaPackResources" {
import {$PackLocationInfo} from "net.minecraft.server.packs.PackLocationInfo"
import {$KnownPack} from "net.minecraft.server.packs.repository.KnownPack"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$Optional} from "java.util.Optional"
import {$PackResources$$Interface} from "net.minecraft.server.packs.PackResources"
import {$IoSupplier} from "net.minecraft.server.packs.resources.IoSupplier"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$PackResources$ResourceOutput$$Type} from "net.minecraft.server.packs.PackResources$ResourceOutput"
import {$Set} from "java.util.Set"
import {$InputStream} from "java.io.InputStream"
import {$Path$$Type} from "java.nio.file.Path"

export class $VanillaPackResources implements $PackResources$$Interface {
public "asProvider"(): $ResourceProvider
public "getResource"(arg0: $PackType$$Type, arg1: $ResourceLocation$$Type): $IoSupplier<($InputStream)>
public "location"(): $PackLocationInfo
public "close"(): void
public "getNamespaces"(arg0: $PackType$$Type): $Set<(StringJS)>
public "listResources"(arg0: $PackType$$Type, arg1: StringJS, arg2: StringJS, arg3: $PackResources$ResourceOutput$$Type): void
public "getMetadataSection"<T>(arg0: $MetadataSectionSerializer$$Type<(T)>): T
public "getRootResource"(...arg0: (StringJS)[]): $IoSupplier<($InputStream)>
public "listRawPaths"(arg0: $PackType$$Type, arg1: $ResourceLocation$$Type, arg2: $Consumer$$Type<($Path)>): void
public "packId"(): StringJS
public "knownPackInfo"(): $Optional<($KnownPack)>
public "isHidden"(): boolean
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPackResources$$Type = ($VanillaPackResources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaPackResources$$Original = $VanillaPackResources;}
declare module "net.minecraft.server.packs.PackType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $PackType extends $Enum<($PackType)> implements $StringRepresentable$$Interface {
static readonly "CLIENT_RESOURCES": $PackType
static readonly "SERVER_DATA": $PackType

public static "values"(): ($PackType)[]
public static "valueOf"(arg0: StringJS): $PackType
public "getSerializedName"(): StringJS
public "getDirectory"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "directory"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackType$$Type = (("client_resources") | ("server_data"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackType$$Original = $PackType;}
declare module "net.minecraft.server.packs.PackSelectionConfig" {
import {$Pack$Position, $Pack$Position$$Type} from "net.minecraft.server.packs.repository.Pack$Position"
import {$Record} from "java.lang.Record"

export class $PackSelectionConfig extends $Record {
constructor(arg0: boolean, arg1: $Pack$Position$$Type, arg2: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "required"(): boolean
public "defaultPosition"(): $Pack$Position
public "fixedPosition"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackSelectionConfig$$Type = ({"required"?: boolean, "defaultPosition"?: $Pack$Position$$Type, "fixedPosition"?: boolean}) | ([required?: boolean, defaultPosition?: $Pack$Position$$Type, fixedPosition?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackSelectionConfig$$Original = $PackSelectionConfig;}
declare module "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Gson$$Type} from "com.google.gson.Gson"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<($Map<($ResourceLocation), ($JsonElement)>)> {
constructor(arg0: $Gson$$Type, arg1: StringJS)

public static "scanDirectory"(arg0: $ResourceManager$$Type, arg1: StringJS, arg2: $Gson$$Type, arg3: $Map$$Type<($ResourceLocation$$Type), ($JsonElement$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleJsonResourceReloadListener$$Type = ($SimpleJsonResourceReloadListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleJsonResourceReloadListener$$Original = $SimpleJsonResourceReloadListener;}
declare module "net.minecraft.server.packs.metadata.MetadataSectionType" {
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$MetadataSectionSerializer$$Interface} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $MetadataSectionType$$Interface<T> extends $MetadataSectionSerializer$$Interface<(T)> {
get "metadataSectionName"(): StringJS
}

export class $MetadataSectionType<T> implements $MetadataSectionType$$Interface {
 "toJson"(arg0: T): $JsonObject
static "fromCodec"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>): $MetadataSectionType<(T)>
 "getMetadataSectionName"(): StringJS
 "fromJson"(arg0: $JsonObject$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetadataSectionType$$Type<T> = ($MetadataSectionType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetadataSectionType$$Original<T> = $MetadataSectionType<(T)>;}
declare module "net.minecraft.server.packs.resources.IoSupplier" {
import {$Path$$Type} from "java.nio.file.Path"
import {$InputStream} from "java.io.InputStream"
import {$ZipFile$$Type} from "java.util.zip.ZipFile"
import {$ZipEntry$$Type} from "java.util.zip.ZipEntry"

export interface $IoSupplier$$Interface<T> {

(): T
}

export class $IoSupplier<T> implements $IoSupplier$$Interface {
 "get"(): T
static "create"(arg0: $Path$$Type): $IoSupplier<($InputStream)>
static "create"(arg0: $ZipFile$$Type, arg1: $ZipEntry$$Type): $IoSupplier<($InputStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IoSupplier$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IoSupplier$$Original<T> = $IoSupplier<(T)>;}
declare module "net.minecraft.server.packs.repository.PackCompatibility" {
import {$InclusiveRange$$Type} from "net.minecraft.util.InclusiveRange"
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $PackCompatibility extends $Enum<($PackCompatibility)> {
static readonly "TOO_OLD": $PackCompatibility
static readonly "COMPATIBLE": $PackCompatibility
static readonly "TOO_NEW": $PackCompatibility

public "getDescription"(): $Component
public static "values"(): ($PackCompatibility)[]
public static "valueOf"(arg0: StringJS): $PackCompatibility
public static "forVersion"(arg0: $InclusiveRange$$Type<(integer)>, arg1: integer): $PackCompatibility
public "getConfirmation"(): $Component
public "isCompatible"(): boolean
get "description"(): $Component
get "confirmation"(): $Component
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackCompatibility$$Type = (("too_old") | ("too_new") | ("compatible"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackCompatibility$$Original = $PackCompatibility;}
declare module "net.minecraft.server.packs.repository.PackRepository" {
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$PackRepositoryAccessor$$Interface} from "com.blackgear.platform.core.mixin.access.PackRepositoryAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$PackResources} from "net.minecraft.server.packs.PackResources"
import {$Set, $Set$$Type} from "java.util.Set"
import {$RepositorySource, $RepositorySource$$Type} from "net.minecraft.server.packs.repository.RepositorySource"
import {$Pack, $Pack$$Type} from "net.minecraft.server.packs.repository.Pack"

export class $PackRepository implements $PackRepositoryAccessor$$Interface {
 "sources": $Set<($RepositorySource)>

constructor(...arg0: ($RepositorySource$$Type)[])

public "reload"(): void
public "getRequestedFeatureFlags"(): $FeatureFlagSet
public "removePack"(arg0: StringJS): boolean
public "addPack"(arg0: StringJS): boolean
public "getPack"(arg0: StringJS): $Pack
public "getSources"(): $Set
public "setSources"(arg0: $Set$$Type): void
public "handler$dik000$fabric_resource_loader_v0$construct"(arg0: ($RepositorySource$$Type)[], arg1: $CallbackInfo$$Type): void
public "isAvailable"(arg0: StringJS): boolean
public "setSelected"(arg0: $Collection$$Type<(StringJS)>): void
public "openAllSelected"(): $List<($PackResources)>
public "getSelectedPacks"(): $Collection<($Pack)>
public static "displayPackList"(arg0: $Collection$$Type<($Pack$$Type)>): StringJS
public "getSelectedIds"(): $Collection<(StringJS)>
public "rebuildSelected"(arg0: $Collection$$Type<(StringJS)>): $List<($Pack)>
public "getAvailableIds"(): $Collection<(StringJS)>
public "getAvailablePacks"(): $Collection<($Pack)>
public "addPackFinder"(arg0: $RepositorySource$$Type): void
get "requestedFeatureFlags"(): $FeatureFlagSet
set "selected"(value: $Collection$$Type<(StringJS)>)
get "selectedPacks"(): $Collection<($Pack)>
get "selectedIds"(): $Collection<(StringJS)>
get "availableIds"(): $Collection<(StringJS)>
get "availablePacks"(): $Collection<($Pack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackRepository$$Type = ($PackRepository);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackRepository$$Original = $PackRepository;}
declare module "net.minecraft.server.packs.repository.Pack$Position" {
import {$Enum} from "java.lang.Enum"
import {$Function$$Type} from "java.util.function.Function"
import {$List$$Type} from "java.util.List"
import {$PackSelectionConfig$$Type} from "net.minecraft.server.packs.PackSelectionConfig"

export class $Pack$Position extends $Enum<($Pack$Position)> {
static readonly "TOP": $Pack$Position
static readonly "BOTTOM": $Pack$Position

public static "values"(): ($Pack$Position)[]
public "insert"<T>(arg0: $List$$Type<(T)>, arg1: T, arg2: $Function$$Type<(T), ($PackSelectionConfig$$Type)>, arg3: boolean): integer
public static "valueOf"(arg0: StringJS): $Pack$Position
public "opposite"(): $Pack$Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pack$Position$$Type = (("top") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pack$Position$$Original = $Pack$Position;}
declare module "net.minecraft.server.packs.resources.ResourceMetadata" {
import {$Collection$$Type} from "java.util.Collection"
import {$MetadataSectionSerializer, $MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IoSupplier} from "net.minecraft.server.packs.resources.IoSupplier"
import {$InputStream$$Type} from "java.io.InputStream"

export interface $ResourceMetadata$$Interface {

(arg0: $MetadataSectionSerializer<(T)>): (T)?
}

export class $ResourceMetadata implements $ResourceMetadata$$Interface {
static readonly "EMPTY_SUPPLIER": $IoSupplier<($ResourceMetadata)>
static readonly "EMPTY": $ResourceMetadata

 "getSection"<T>(arg0: $MetadataSectionSerializer$$Type<(T)>): $Optional<(T)>
static "fromJsonStream"(arg0: $InputStream$$Type): $ResourceMetadata
 "copySections"(arg0: $Collection$$Type<($MetadataSectionSerializer$$Type<(never)>)>): $ResourceMetadata
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceMetadata$$Type = ((arg0: $MetadataSectionSerializer<(T)>) => (T)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceMetadata$$Original = $ResourceMetadata;}
declare module "net.minecraft.server.packs.resources.PreparableReloadListener" {
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener$PreparationBarrier, $PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$ProfilerFiller, $ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"

export interface $PreparableReloadListener$$Interface {

(arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor): $CompletableFuture$$Type<(void)>
get "name"(): StringJS
}

export class $PreparableReloadListener implements $PreparableReloadListener$$Interface {
 "getName"(): StringJS
 "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreparableReloadListener$$Type = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor) => $CompletableFuture$$Type<(void)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PreparableReloadListener$$Original = $PreparableReloadListener;}
declare module "net.minecraft.server.packs.PackLocationInfo" {
import {$KnownPack, $KnownPack$$Type} from "net.minecraft.server.packs.repository.KnownPack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PackSource, $PackSource$$Type} from "net.minecraft.server.packs.repository.PackSource"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $PackLocationInfo extends $Record {
constructor(arg0: StringJS, arg1: $Component$$Type, arg2: $PackSource$$Type, arg3: ($KnownPack$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "source"(): $PackSource
public "title"(): $Component
public "knownPackInfo"(): $Optional<($KnownPack)>
public "createChatLink"(arg0: boolean, arg1: $Component$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackLocationInfo$$Type = ({"title"?: $Component$$Type, "knownPackInfo"?: ($KnownPack$$Type)?, "id"?: StringJS, "source"?: $PackSource$$Type}) | ([title?: $Component$$Type, knownPackInfo?: ($KnownPack$$Type)?, id?: StringJS, source?: $PackSource$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackLocationInfo$$Original = $PackLocationInfo;}
declare module "net.minecraft.server.packs.repository.KnownPack" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $KnownPack extends $Record {
static readonly "VANILLA_NAMESPACE": StringJS
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($KnownPack)>

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)

public static "vanilla"(arg0: StringJS): $KnownPack
public "isVanilla"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "namespace"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnownPack$$Type = ({"namespace"?: StringJS, "id"?: StringJS, "version"?: StringJS}) | ([namespace?: StringJS, id?: StringJS, version?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KnownPack$$Original = $KnownPack;}
declare module "net.minecraft.server.packs.resources.ResourceManager" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$PackResources} from "net.minecraft.server.packs.PackResources"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider, $ResourceProvider$$Interface} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$BufferedReader} from "java.io.BufferedReader"
import {$Set} from "java.util.Set"
import {$InputStream} from "java.io.InputStream"
import {$Stream} from "java.util.stream.Stream"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $ResourceManager$$Interface extends $ResourceProvider$$Interface {
get "namespaces"(): $Set<(StringJS)>
}

export class $ResourceManager implements $ResourceManager$$Interface {
 "getNamespaces"(): $Set<(StringJS)>
 "listResources"(arg0: StringJS, arg1: $Predicate$$Type<($ResourceLocation)>): $Map<($ResourceLocation), ($Resource)>
 "listPacks"(): $Stream<($PackResources)>
 "getResourceStack"(arg0: $ResourceLocation$$Type): $List<($Resource)>
 "listResourceStacks"(arg0: StringJS, arg1: $Predicate$$Type<($ResourceLocation)>): $Map<($ResourceLocation), ($List<($Resource)>)>
 "getResource"(arg0: $ResourceLocation$$Type): $Optional<($Resource)>
 "open"(arg0: $ResourceLocation$$Type): $InputStream
static "fromMap"(arg0: $Map$$Type<($ResourceLocation$$Type), ($Resource$$Type)>): $ResourceProvider
 "openAsReader"(arg0: $ResourceLocation$$Type): $BufferedReader
 "getResourceOrThrow"(arg0: $ResourceLocation$$Type): $Resource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceManager$$Type = ($ResourceManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceManager$$Original = $ResourceManager;}
declare module "net.minecraft.server.packs.repository.Pack$Metadata" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$PackCompatibility, $PackCompatibility$$Type} from "net.minecraft.server.packs.repository.PackCompatibility"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $Pack$Metadata extends $Record {
/**
 * 
 * @deprecated
 */
constructor(arg0: $Component$$Type, arg1: $PackCompatibility$$Type, arg2: $FeatureFlagSet$$Type, arg3: $List$$Type<(StringJS)>)
constructor(description: $Component$$Type, compatibility: $PackCompatibility$$Type, requestedFeatures: $FeatureFlagSet$$Type, overlays: $List$$Type<(StringJS)>, isHidden: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isHidden"(): boolean
public "description"(): $Component
public "overlays"(): $List<(StringJS)>
public "compatibility"(): $PackCompatibility
public "requestedFeatures"(): $FeatureFlagSet
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pack$Metadata$$Type = ({"overlays"?: $List$$Type<(StringJS)>, "compatibility"?: $PackCompatibility$$Type, "isHidden"?: boolean, "requestedFeatures"?: $FeatureFlagSet$$Type, "description"?: $Component$$Type}) | ([overlays?: $List$$Type<(StringJS)>, compatibility?: $PackCompatibility$$Type, isHidden?: boolean, requestedFeatures?: $FeatureFlagSet$$Type, description?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pack$Metadata$$Original = $Pack$Metadata;}
declare module "net.minecraft.server.packs.resources.ReloadableResourceManager" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$PackResources, $PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$PreparableReloadListener$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$CloseableResourceManager} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$ReloadInstance} from "net.minecraft.server.packs.resources.ReloadInstance"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$BufferedReader} from "java.io.BufferedReader"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Set} from "java.util.Set"
import {$InputStream} from "java.io.InputStream"
import {$Stream} from "java.util.stream.Stream"
import {$ResourceManager$$Interface} from "net.minecraft.server.packs.resources.ResourceManager"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"
import {$Unit$$Type} from "net.minecraft.util.Unit"

export class $ReloadableResourceManager implements $ResourceManager$$Interface, $AutoCloseable$$Interface {
 "resources": $CloseableResourceManager

constructor(arg0: $PackType$$Type)

public "registerReloadListenerIfNotPresent"(arg0: $PreparableReloadListener$$Type): void
public "getResource"(arg0: $ResourceLocation$$Type): $Optional<($Resource)>
public "close"(): void
public "getNamespaces"(): $Set<(StringJS)>
public "listResources"(arg0: StringJS, arg1: $Predicate$$Type<($ResourceLocation)>): $Map<($ResourceLocation), ($Resource)>
public "createReload"(arg0: $Executor$$Type, arg1: $Executor$$Type, arg2: $CompletableFuture$$Type<($Unit$$Type)>, arg3: $List$$Type<($PackResources$$Type)>): $ReloadInstance
public "listPacks"(): $Stream<($PackResources)>
public "getResourceStack"(arg0: $ResourceLocation$$Type): $List<($Resource)>
public "listResourceStacks"(arg0: StringJS, arg1: $Predicate$$Type<($ResourceLocation)>): $Map<($ResourceLocation), ($List<($Resource)>)>
public "registerReloadListener"(arg0: $PreparableReloadListener$$Type): void
public "open"(arg0: $ResourceLocation$$Type): $InputStream
public static "fromMap"(arg0: $Map$$Type<($ResourceLocation$$Type), ($Resource$$Type)>): $ResourceProvider
public "openAsReader"(arg0: $ResourceLocation$$Type): $BufferedReader
public "getResourceOrThrow"(arg0: $ResourceLocation$$Type): $Resource
get "namespaces"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableResourceManager$$Type = ($ReloadableResourceManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableResourceManager$$Original = $ReloadableResourceManager;}
declare module "net.minecraft.server.packs.PackResources" {
import {$PackLocationInfo} from "net.minecraft.server.packs.PackLocationInfo"
import {$KnownPack} from "net.minecraft.server.packs.repository.KnownPack"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$Optional} from "java.util.Optional"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$IoSupplier} from "net.minecraft.server.packs.resources.IoSupplier"
import {$IPackResourcesExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IPackResourcesExtension"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$PackResources$ResourceOutput$$Type} from "net.minecraft.server.packs.PackResources$ResourceOutput"
import {$Set} from "java.util.Set"
import {$InputStream} from "java.io.InputStream"

export interface $PackResources$$Interface extends $AutoCloseable$$Interface, $IPackResourcesExtension$$Interface {
get "hidden"(): boolean
}

export class $PackResources implements $PackResources$$Interface {
static readonly "PACK_META": StringJS
static readonly "METADATA_EXTENSION": StringJS

 "getResource"(arg0: $PackType$$Type, arg1: $ResourceLocation$$Type): $IoSupplier<($InputStream)>
 "location"(): $PackLocationInfo
 "close"(): void
 "getNamespaces"(arg0: $PackType$$Type): $Set<(StringJS)>
 "listResources"(arg0: $PackType$$Type, arg1: StringJS, arg2: StringJS, arg3: $PackResources$ResourceOutput$$Type): void
 "packId"(): StringJS
 "getMetadataSection"<T>(arg0: $MetadataSectionSerializer$$Type<(T)>): T
 "getRootResource"(...arg0: (StringJS)[]): $IoSupplier<($InputStream)>
 "knownPackInfo"(): $Optional<($KnownPack)>
 "isHidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackResources$$Type = ($PackResources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackResources$$Original = $PackResources;}
declare module "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier" {
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"

export interface $PreparableReloadListener$PreparationBarrier$$Interface {

(arg0: T): $CompletableFuture$$Type<(T)>
}

export class $PreparableReloadListener$PreparationBarrier implements $PreparableReloadListener$PreparationBarrier$$Interface {
 "wait"<T>(arg0: T): $CompletableFuture<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreparableReloadListener$PreparationBarrier$$Type = ((arg0: T) => $CompletableFuture$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PreparableReloadListener$PreparationBarrier$$Original = $PreparableReloadListener$PreparationBarrier;}
declare module "net.minecraft.server.packs.repository.RepositorySource" {
import {$Pack, $Pack$$Type} from "net.minecraft.server.packs.repository.Pack"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RepositorySource$$Interface {

(arg0: $Consumer<($Pack)>): void
}

export class $RepositorySource implements $RepositorySource$$Interface {
 "loadPacks"(arg0: $Consumer$$Type<($Pack)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepositorySource$$Type = ((arg0: $Consumer<($Pack)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepositorySource$$Original = $RepositorySource;}
declare module "net.minecraft.server.packs.repository.PackSource" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $PackSource$$Interface {
}

export class $PackSource implements $PackSource$$Interface {
static readonly "BUILT_IN": $PackSource
static readonly "SERVER": $PackSource
static readonly "FEATURE": $PackSource
static readonly "NO_DECORATION": $UnaryOperator<($Component)>
static readonly "WORLD": $PackSource
static readonly "DEFAULT": $PackSource

static "create"(arg0: $UnaryOperator$$Type<($Component)>, arg1: boolean): $PackSource
 "shouldAddAutomatically"(): boolean
 "decorate"(arg0: $Component$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackSource$$Type = ($PackSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackSource$$Original = $PackSource;}
