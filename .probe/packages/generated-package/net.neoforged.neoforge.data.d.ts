declare module "net.neoforged.neoforge.data.event.GatherDataEvent$DataGeneratorConfig" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$File$$Type} from "java.io.File"
import {$Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DataGenerator} from "net.minecraft.data.DataGenerator"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $GatherDataEvent$DataGeneratorConfig {
/**
 * 
 * @deprecated
 */
constructor(arg0: $Set$$Type<(StringJS)>, arg1: $Path$$Type, arg2: $Collection$$Type<($Path$$Type)>, arg3: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean)
constructor(arg0: $Set$$Type<(StringJS)>, arg1: $Path$$Type, arg2: $Collection$$Type<($Path$$Type)>, arg3: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: StringJS, arg11: $File$$Type, arg12: $Collection$$Type<($Path$$Type)>)

public "getInputs"(): $Collection<($Path)>
public "getMods"(): $Set<(StringJS)>
public "makeGenerator"(arg0: $Function$$Type<($Path), ($Path$$Type)>, arg1: boolean): $DataGenerator
public "isFlat"(): boolean
public "runAll"(): void
get "inputs"(): $Collection<($Path)>
get "mods"(): $Set<(StringJS)>
get "flat"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$DataGeneratorConfig$$Type = ($GatherDataEvent$DataGeneratorConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatherDataEvent$DataGeneratorConfig$$Original = $GatherDataEvent$DataGeneratorConfig;}
declare module "net.neoforged.neoforge.data.event.GatherDataEvent$DataProviderFromOutputLookup" {
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $GatherDataEvent$DataProviderFromOutputLookup$$Interface<T extends $DataProvider> {

(arg0: $PackOutput, arg1: $CompletableFuture<($HolderLookup$Provider)>): T
}

export class $GatherDataEvent$DataProviderFromOutputLookup<T extends $DataProvider> implements $GatherDataEvent$DataProviderFromOutputLookup$$Interface {
 "create"(arg0: $PackOutput$$Type, arg1: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$DataProviderFromOutputLookup$$Type<T> = ((arg0: $PackOutput, arg1: $CompletableFuture<($HolderLookup$Provider)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatherDataEvent$DataProviderFromOutputLookup$$Original<T> = $GatherDataEvent$DataProviderFromOutputLookup<(T)>;}
declare module "net.neoforged.neoforge.data.event.GatherDataEvent$DataProviderFromOutput" {
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"

export interface $GatherDataEvent$DataProviderFromOutput$$Interface<T extends $DataProvider> {

(arg0: $PackOutput): T
}

export class $GatherDataEvent$DataProviderFromOutput<T extends $DataProvider> implements $GatherDataEvent$DataProviderFromOutput$$Interface {
 "create"(arg0: $PackOutput$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$DataProviderFromOutput$$Type<T> = ((arg0: $PackOutput) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatherDataEvent$DataProviderFromOutput$$Original<T> = $GatherDataEvent$DataProviderFromOutput<(T)>;}
declare module "net.neoforged.neoforge.data.event.GatherDataEvent$ItemTagsProvider" {
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$$Type} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TagsProvider, $TagsProvider$$Type} from "net.minecraft.data.tags.TagsProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $GatherDataEvent$ItemTagsProvider$$Interface {

(arg0: $PackOutput, arg1: $CompletableFuture<($HolderLookup$Provider)>, arg2: $CompletableFuture<($TagsProvider$TagLookup<($Block)>)>): $TagsProvider$$Type<($Item$$Type)>
}

export class $GatherDataEvent$ItemTagsProvider implements $GatherDataEvent$ItemTagsProvider$$Interface {
 "create"(arg0: $PackOutput$$Type, arg1: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg2: $CompletableFuture$$Type<($TagsProvider$TagLookup$$Type<($Block$$Type)>)>): $TagsProvider<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$ItemTagsProvider$$Type = ((arg0: $PackOutput, arg1: $CompletableFuture<($HolderLookup$Provider)>, arg2: $CompletableFuture<($TagsProvider$TagLookup<($Block)>)>) => $TagsProvider$$Type<($Item$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatherDataEvent$ItemTagsProvider$$Original = $GatherDataEvent$ItemTagsProvider;}
declare module "net.neoforged.neoforge.data.event.GatherDataEvent" {
import {$List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Set, $Set$$Type} from "java.util.Set"
import {$GatherDataEvent$DataProviderFromOutput$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent$DataProviderFromOutput"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DataGenerator, $DataGenerator$$Type} from "net.minecraft.data.DataGenerator"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"
import {$Collection} from "java.util.Collection"
import {$Map$$Type} from "java.util.Map"
import {$GatherDataEvent$ItemTagsProvider$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent$ItemTagsProvider"
import {$TagsProvider$$Type} from "net.minecraft.data.tags.TagsProvider"
import {$GatherDataEvent$DataProviderFromOutputLookup$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent$DataProviderFromOutputLookup"
import {$GatherDataEvent$DataGeneratorConfig$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent$DataGeneratorConfig"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderLookup$Provider} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RegistrySetBuilder$$Type} from "net.minecraft.core.RegistrySetBuilder"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$Path} from "java.nio.file.Path"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"

export class $GatherDataEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $ModContainer$$Type, arg1: $DataGenerator$$Type, arg2: $GatherDataEvent$DataGeneratorConfig$$Type, arg3: $ExistingFileHelper$$Type)

public "validate"(): boolean
public "addProvider"<T extends $DataProvider>(arg0: T): T
public "createDatapackRegistryObjects"(arg0: $RegistrySetBuilder$$Type, arg1: $Map$$Type<($ResourceKey$$Type<(never)>), ($List$$Type<($ICondition$$Type)>)>, arg2: $Set$$Type<(StringJS)>): void
public "createDatapackRegistryObjects"(arg0: $RegistrySetBuilder$$Type, arg1: $Map$$Type<($ResourceKey$$Type<(never)>), ($List$$Type<($ICondition$$Type)>)>): void
public "createDatapackRegistryObjects"(arg0: $RegistrySetBuilder$$Type, arg1: $Set$$Type<(StringJS)>): void
public "createDatapackRegistryObjects"(arg0: $RegistrySetBuilder$$Type): void
public "createDatapackRegistryObjects"(arg0: $RegistrySetBuilder$$Type, arg1: $Consumer$$Type<($BiConsumer<($ResourceKey<(never)>), ($ICondition)>)>, arg2: $Set$$Type<(StringJS)>): void
public "createDatapackRegistryObjects"(arg0: $RegistrySetBuilder$$Type, arg1: $Consumer$$Type<($BiConsumer<($ResourceKey<(never)>), ($ICondition)>)>): void
public "getGenerator"(): $DataGenerator
public "includeDev"(): boolean
public "getResourceManager"(arg0: $PackType$$Type): $ResourceManager
public "getInputs"(): $Collection<($Path)>
public "getMods"(): $Set<(StringJS)>
public "getModContainer"(): $ModContainer
public "includeServer"(): boolean
public "getLookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "includeClient"(): boolean
public "includeReports"(): boolean
public "createBlockAndItemTags"(arg0: $GatherDataEvent$DataProviderFromOutputLookup$$Type<($TagsProvider$$Type<($Block$$Type)>)>, arg1: $GatherDataEvent$ItemTagsProvider$$Type): void
public "getExistingFileHelper"(): $ExistingFileHelper
public "createProvider"<T extends $DataProvider>(arg0: $GatherDataEvent$DataProviderFromOutputLookup$$Type<(T)>): T
public "createProvider"<T extends $DataProvider>(arg0: $GatherDataEvent$DataProviderFromOutput$$Type<(T)>): T
get "generator"(): $DataGenerator
get "inputs"(): $Collection<($Path)>
get "mods"(): $Set<(StringJS)>
get "modContainer"(): $ModContainer
get "lookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "existingFileHelper"(): $ExistingFileHelper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$$Type = ($GatherDataEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatherDataEvent$$Original = $GatherDataEvent;}
