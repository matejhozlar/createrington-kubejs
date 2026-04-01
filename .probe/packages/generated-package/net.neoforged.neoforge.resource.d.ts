declare module "net.neoforged.neoforge.resource.ContextAwareReloadListener" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ContextAwareReloadListener implements $PreparableReloadListener$$Interface {
constructor()

public "injectContext"(arg0: $ICondition$IContext$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getName"(): StringJS
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextAwareReloadListener$$Type = ($ContextAwareReloadListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextAwareReloadListener$$Original = $ContextAwareReloadListener;}
