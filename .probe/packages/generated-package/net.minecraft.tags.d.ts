declare module "net.minecraft.tags.TagManager$LoadResult" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $TagManager$LoadResult<T> extends $Record {
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceKey<($Registry<(T)>)>
public "tags"(): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagManager$LoadResult$$Type<T> = ({"tags"?: $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>, "key"?: $ResourceKey$$Type<($Registry<(T)>)>}) | ([tags?: $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>, key?: $ResourceKey$$Type<($Registry<(T)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagManager$LoadResult$$Original<T> = $TagManager$LoadResult<(T)>;}
declare module "net.minecraft.tags.TagEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TagEntry$Lookup$$Type} from "net.minecraft.tags.TagEntry$Lookup"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ExtraCodecs$TagOrElementLocation} from "net.minecraft.util.ExtraCodecs$TagOrElementLocation"

export class $TagEntry {
static "CODEC": $Codec<($TagEntry)>
readonly "id": $ResourceLocation
readonly "required": boolean

constructor(arg0: $ResourceLocation$$Type, arg1: boolean, arg2: boolean)

public "toString"(): StringJS
public "getId"(): $ResourceLocation
public static "element"(arg0: $ResourceLocation$$Type): $TagEntry
public "build"<T>(arg0: $TagEntry$Lookup$$Type<(T)>, arg1: $Consumer$$Type<(T)>): boolean
public static "tag"(arg0: $ResourceLocation$$Type): $TagEntry
public "elementOrTag"(): $ExtraCodecs$TagOrElementLocation
public "withRequired"(arg0: boolean): $TagEntry
public static "optionalTag"(arg0: $ResourceLocation$$Type): $TagEntry
public "isRequired"(): boolean
public static "optionalElement"(arg0: $ResourceLocation$$Type): $TagEntry
public "isTag"(): boolean
public "verifyIfPresent"(arg0: $Predicate$$Type<($ResourceLocation)>, arg1: $Predicate$$Type<($ResourceLocation)>): boolean
public "visitRequiredDependencies"(arg0: $Consumer$$Type<($ResourceLocation)>): void
public "visitOptionalDependencies"(arg0: $Consumer$$Type<($ResourceLocation)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEntry$$Type = ($TagEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagEntry$$Original = $TagEntry;}
declare module "net.minecraft.tags.TagKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional} from "java.util.Optional"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKeyMixin$$Interface} from "net.fabricmc.fabric.mixin.tag.TagKeyMixin"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component} from "net.minecraft.network.chat.Component"
import {$FabricTagKey$$Interface} from "net.fabricmc.fabric.api.tag.FabricTagKey"
import {$Record} from "java.lang.Record"

export class $TagKey<T> extends $Record implements $FabricTagKey$$Interface, $TagKeyMixin$$Interface {
/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cast"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($TagKey<(E)>)>
public "location"(): $ResourceLocation
public static "create"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceLocation$$Type): $TagKey<(T)>
public "registry"(): $ResourceKey<($Registry<(T)>)>
public static "codec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Codec<($TagKey<(T)>)>
public "isFor"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): boolean
public static "hashedCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Codec<($TagKey<(T)>)>
public "getName"(): $Component
public "getTranslationKey"(): StringJS
get "name"(): $Component
get "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagKey$$Type<T> = (Special.TagOf<(T)>) | ($TagKey<(T)>) | ({"registry"?: $ResourceKey$$Type<($Registry<(T)>)>, "location"?: $ResourceLocation$$Type}) | ([registry?: $ResourceKey$$Type<($Registry<(T)>)>, location?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagKey$$Original<T> = $TagKey<(T)>;}
declare module "net.minecraft.tags.TagBuilder" {
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.tags.TagEntry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$ITagBuilderExtension$$Interface} from "net.neoforged.neoforge.common.extensions.ITagBuilderExtension"

export class $TagBuilder implements $ITagBuilderExtension$$Interface {
readonly "entries": $List<($TagEntry)>

constructor()

public "remove"(arg0: $TagEntry$$Type): $TagBuilder
public "replace"(): $TagBuilder
public "replace"(arg0: boolean): $TagBuilder
public "add"(arg0: $TagEntry$$Type): $TagBuilder
public static "create"(): $TagBuilder
public "build"(): $List<($TagEntry)>
public "addOptionalTag"(arg0: $ResourceLocation$$Type): $TagBuilder
public "addOptionalElement"(arg0: $ResourceLocation$$Type): $TagBuilder
public "addElement"(arg0: $ResourceLocation$$Type): $TagBuilder
public "addTag"(arg0: $ResourceLocation$$Type): $TagBuilder
public "isReplace"(): boolean
public "getRemoveEntries"(): $Stream<($TagEntry)>
/**
 * 
 * @deprecated
 */
public "remove"(arg0: $TagEntry$$Type, arg1: StringJS): $TagBuilder
/**
 * 
 * @deprecated
 */
public "removeElement"(arg0: $ResourceLocation$$Type, arg1: StringJS): $TagBuilder
public "removeElement"(arg0: $ResourceLocation$$Type): $TagBuilder
public "getRawBuilder"(): $TagBuilder
/**
 * 
 * @deprecated
 */
public "removeTag"(arg0: $ResourceLocation$$Type, arg1: StringJS): $TagBuilder
public "removeTag"(arg0: $ResourceLocation$$Type): $TagBuilder
get "removeEntries"(): $Stream<($TagEntry)>
get "rawBuilder"(): $TagBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagBuilder$$Type = ($TagBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagBuilder$$Original = $TagBuilder;}
declare module "net.minecraft.tags.TagManager" {
import {$TagManager$LoadResult} from "net.minecraft.tags.TagManager$LoadResult"
import {$Collection} from "java.util.Collection"
import {$List} from "java.util.List"
import {$ReloadableServerResourcesKJS, $ReloadableServerResourcesKJS$$Type} from "dev.latvian.mods.kubejs.core.ReloadableServerResourcesKJS"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$TagManagerKJS$$Interface} from "dev.latvian.mods.kubejs.core.TagManagerKJS"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TagManager implements $PreparableReloadListener$$Interface, $TagManagerKJS$$Interface, $IdentifiableResourceReloadListener$$Interface {
constructor(arg0: $RegistryAccess$$Type)

public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getResult"(): $List<($TagManager$LoadResult<(never)>)>
public "getFabricId"(): $ResourceLocation
public "getFabricDependencies"(): $Collection
public "kjs$setResources"(resources: $ReloadableServerResourcesKJS$$Type): void
public "kjs$getResources"(): $ReloadableServerResourcesKJS
public "getName"(): StringJS
get "result"(): $List<($TagManager$LoadResult<(never)>)>
get "fabricId"(): $ResourceLocation
get "fabricDependencies"(): $Collection
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagManager$$Type = ($TagManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagManager$$Original = $TagManager;}
declare module "net.minecraft.tags.TagLoader$EntryWithSource" {
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.tags.TagEntry"
import {$Record} from "java.lang.Record"

export class $TagLoader$EntryWithSource extends $Record {
constructor(arg0: $TagEntry$$Type, arg1: StringJS)
constructor(entry: $TagEntry$$Type, source: StringJS, remove: boolean)

public "remove"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "source"(): StringJS
public "entry"(): $TagEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagLoader$EntryWithSource$$Type = ({"remove"?: boolean, "source"?: StringJS, "entry"?: $TagEntry$$Type}) | ([remove?: boolean, source?: StringJS, entry?: $TagEntry$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagLoader$EntryWithSource$$Original = $TagLoader$EntryWithSource;}
declare module "net.minecraft.tags.TagNetworkSerialization$NetworkPayload" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"

export class $TagNetworkSerialization$NetworkPayload {
readonly "tags": $Map<($ResourceLocation), ($IntList)>

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IntList$$Type)>)

public "size"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $TagNetworkSerialization$NetworkPayload
public "applyToRegistry"<T>(arg0: $Registry$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagNetworkSerialization$NetworkPayload$$Type = ($TagNetworkSerialization$NetworkPayload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagNetworkSerialization$NetworkPayload$$Original = $TagNetworkSerialization$NetworkPayload;}
declare module "net.minecraft.tags.TagEntry$Lookup" {
import {$Collection} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $TagEntry$Lookup$$Interface<T> {
}

export class $TagEntry$Lookup<T> implements $TagEntry$Lookup$$Interface {
 "element"(arg0: $ResourceLocation$$Type): T
 "tag"(arg0: $ResourceLocation$$Type): $Collection<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEntry$Lookup$$Type<T> = ($TagEntry$Lookup<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagEntry$Lookup$$Original<T> = $TagEntry$Lookup<(T)>;}
