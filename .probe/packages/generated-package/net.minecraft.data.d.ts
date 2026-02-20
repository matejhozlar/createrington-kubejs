declare module "net.minecraft.data.DataGenerator" {
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$ModContainer$$Type} from "net.fabricmc.loader.api.ModContainer"
import {$DataGenerator$PackGenerator} from "net.minecraft.data.DataGenerator$PackGenerator"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"
import {$DataProvider$Factory$$Type} from "net.minecraft.data.DataProvider$Factory"
import {$DataGeneratorExtension$$Interface} from "net.fabricmc.fabric.impl.datagen.DataGeneratorExtension"
import {$Set} from "java.util.Set"
import {$WorldVersion$$Type} from "net.minecraft.WorldVersion"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $DataGenerator implements $DataGeneratorExtension$$Interface {
 "vanillaPackOutput": $PackOutput
readonly "providersToRun": $Map<(StringJS), ($DataProvider)>
readonly "allProviderIds": $Set<(StringJS)>
readonly "rootOutputFolder": $Path

constructor(arg0: $Path$$Type, arg1: $WorldVersion$$Type, arg2: boolean)

public "run"(): void
public "merge"(arg0: $DataGenerator$$Type): void
public "addProvider"<T extends $DataProvider>(arg0: boolean, arg1: T): T
public "addProvider"<T extends $DataProvider>(arg0: boolean, arg1: $DataProvider$Factory$$Type<(T)>): T
public "createBuiltinResourcePack"(arg0: boolean, arg1: $ResourceLocation$$Type, arg2: $ModContainer$$Type, arg3: boolean): $Pair
public "getVanillaPack"(arg0: boolean): $DataGenerator$PackGenerator
public "getPackOutput"(arg0: StringJS): $PackOutput
public "getPackOutput"(): $PackOutput
public "getBuiltinDatapack"(arg0: boolean, arg1: StringJS, arg2: StringJS): $DataGenerator$PackGenerator
public "getBuiltinDatapack"(arg0: boolean, arg1: StringJS): $DataGenerator$PackGenerator
public "getProvidersView"(): $Map<(StringJS), ($DataProvider)>
public "getPackGenerator"(arg0: boolean, arg1: StringJS, arg2: StringJS): $DataGenerator$PackGenerator
public "createPack"(arg0: StringJS, arg1: $PackOutput$$Type): $DataGenerator$PackGenerator
get "packOutput"(): $PackOutput
get "providersView"(): $Map<(StringJS), ($DataProvider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataGenerator$$Type = ($DataGenerator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataGenerator$$Original = $DataGenerator;}
declare module "net.minecraft.data.CachedOutput" {
import {$HashCode, $HashCode$$Type} from "com.google.common.hash.HashCode"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $CachedOutput$$Interface {

(arg0: $Path, arg1: (byte)[], arg2: $HashCode): void
}

export class $CachedOutput implements $CachedOutput$$Interface {
static readonly "NO_CACHE": $CachedOutput

 "writeIfNeeded"(arg0: $Path$$Type, arg1: (byte)[], arg2: $HashCode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedOutput$$Type = ((arg0: $Path, arg1: (byte)[], arg2: $HashCode) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedOutput$$Original = $CachedOutput;}
declare module "net.minecraft.data.DataGenerator$PackGenerator" {
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$DataProvider} from "net.minecraft.data.DataProvider"
import {$DataProvider$Factory$$Type} from "net.minecraft.data.DataProvider$Factory"
import {$DataGenerator, $DataGenerator$$Type} from "net.minecraft.data.DataGenerator"

export class $DataGenerator$PackGenerator {
readonly "this$0": $DataGenerator

constructor(arg0: $DataGenerator$$Type, arg1: boolean, arg2: StringJS, arg3: $PackOutput$$Type)

public "addProvider"<T extends $DataProvider>(arg0: $DataProvider$Factory$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataGenerator$PackGenerator$$Type = ($DataGenerator$PackGenerator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataGenerator$PackGenerator$$Original = $DataGenerator$PackGenerator;}
declare module "net.minecraft.data.DataProvider$Factory" {
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"

export interface $DataProvider$Factory$$Interface<T extends $DataProvider> {

(arg0: $PackOutput): T
}

export class $DataProvider$Factory<T extends $DataProvider> implements $DataProvider$Factory$$Interface {
 "create"(arg0: $PackOutput$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataProvider$Factory$$Type<T> = ((arg0: $PackOutput) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataProvider$Factory$$Original<T> = $DataProvider$Factory<(T)>;}
declare module "net.minecraft.data.PackOutput$PathProvider" {
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Path} from "java.nio.file.Path"
import {$PackOutput$Target$$Type} from "net.minecraft.data.PackOutput$Target"

export class $PackOutput$PathProvider {
readonly "kind": StringJS
readonly "root": $Path

constructor(arg0: $PackOutput$$Type, arg1: $PackOutput$Target$$Type, arg2: StringJS)

public "file"(arg0: $ResourceLocation$$Type, arg1: StringJS): $Path
public "json"(arg0: $ResourceLocation$$Type): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackOutput$PathProvider$$Type = ($PackOutput$PathProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackOutput$PathProvider$$Original = $PackOutput$PathProvider;}
declare module "net.minecraft.data.PackOutput" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$PackOutput$PathProvider} from "net.minecraft.data.PackOutput$PathProvider"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$PackOutput$Target$$Type} from "net.minecraft.data.PackOutput$Target"

export class $PackOutput {
constructor(arg0: $Path$$Type)

public "createPathProvider"(arg0: $PackOutput$Target$$Type, arg1: StringJS): $PackOutput$PathProvider
public "getOutputFolder"(arg0: $PackOutput$Target$$Type): $Path
public "getOutputFolder"(): $Path
public "createRegistryElementsPathProvider"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): $PackOutput$PathProvider
public "createRegistryTagsPathProvider"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): $PackOutput$PathProvider
get "outputFolder"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackOutput$$Type = ($PackOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackOutput$$Original = $PackOutput;}
declare module "net.minecraft.data.PackOutput$Target" {
import {$Enum} from "java.lang.Enum"

export class $PackOutput$Target extends $Enum<($PackOutput$Target)> {
static readonly "REPORTS": $PackOutput$Target
static readonly "RESOURCE_PACK": $PackOutput$Target
readonly "directory": StringJS
static readonly "DATA_PACK": $PackOutput$Target

public static "values"(): ($PackOutput$Target)[]
public static "valueOf"(arg0: StringJS): $PackOutput$Target
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackOutput$Target$$Type = (("data_pack") | ("resource_pack") | ("reports"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackOutput$Target$$Original = $PackOutput$Target;}
declare module "net.minecraft.data.DataProvider" {
import {$ToIntFunction} from "java.util.function.ToIntFunction"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Comparator} from "java.util.Comparator"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Path$$Type} from "java.nio.file.Path"
import {$Logger} from "org.slf4j.Logger"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $DataProvider$$Interface {
get "name"(): StringJS
}

export class $DataProvider implements $DataProvider$$Interface {
static readonly "FIXED_ORDER_FIELDS": $ToIntFunction<(StringJS)>
static readonly "INDENT_WIDTH": $AtomicInteger
static readonly "KEY_COMPARATOR": $Comparator<(StringJS)>
static readonly "LOGGER": $Logger

 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataProvider$$Type = ($DataProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataProvider$$Original = $DataProvider;}
