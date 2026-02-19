declare module "net.minecraft.data.tags.TagsProvider" {
import {$Map} from "java.util.Map"
import {$TagsProvider$TagLookup} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$FileHelperDataProvider$$Interface} from "fuzs.puzzleslib.neoforge.impl.data.FileHelperDataProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagBuilder} from "net.minecraft.tags.TagBuilder"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$DataProvider$$Interface} from "net.minecraft.data.DataProvider"
import {$ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$Path$$Type} from "java.nio.file.Path"

export class $TagsProvider<T> implements $DataProvider$$Interface, $FileHelperDataProvider$$Interface {
readonly "builders": $Map<($ResourceLocation), ($TagBuilder)>

public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
public "puzzleslib$setExistingFileHelper"(fileHelper: $ExistingFileHelper$$Type): void
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(never)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsProvider$$Type<T> = ($TagsProvider<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagsProvider$$Original<T> = $TagsProvider<(T)>;}
declare module "net.minecraft.data.tags.TagsProvider$TagLookup" {
import {$TagBuilder, $TagBuilder$$Type} from "net.minecraft.tags.TagBuilder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"

export interface $TagsProvider$TagLookup$$Interface<T> extends $Function$$Interface<($TagKey<(T)>), ($Optional<($TagBuilder)>)> {

(arg0: $TagKey<(T)>): ($TagBuilder$$Type)?
}

export class $TagsProvider$TagLookup<T> implements $TagsProvider$TagLookup$$Interface {
 "contains"(arg0: $TagKey$$Type<(T)>): boolean
static "empty"<T>(): $TagsProvider$TagLookup<(T)>
 "apply"(arg0: $TagKey$$Type<(T)>): $Optional<($TagBuilder)>
static "identity"<T>(): $Function<($TagKey<(T)>), ($TagKey<(T)>)>
 "compose"<V>(arg0: $Function$$Type<(V), ($TagKey$$Type<(T)>)>): $Function<(V), ($Optional<($TagBuilder)>)>
 "andThen"<V>(arg0: $Function$$Type<($Optional<($TagBuilder)>), (V)>): $Function<($TagKey<(T)>), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsProvider$TagLookup$$Type<T> = ((arg0: $TagKey<(T)>) => ($TagBuilder$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagsProvider$TagLookup$$Original<T> = $TagsProvider$TagLookup<(T)>;}
