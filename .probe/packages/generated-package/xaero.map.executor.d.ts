declare module "xaero.map.executor.Executor" {
import {$BlockableEventLoop} from "net.minecraft.util.thread.BlockableEventLoop"
import {$Thread$$Type} from "java.lang.Thread"
import {$Runnable} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Executor extends $BlockableEventLoop<($Runnable)> {
constructor(arg0: StringJS, arg1: $Thread$$Type)

public "runAllTasks"(): void
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$$Type = ($Executor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Executor$$Original = $Executor;}
