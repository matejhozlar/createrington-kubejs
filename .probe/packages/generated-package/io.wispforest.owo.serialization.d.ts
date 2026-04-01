declare module "io.wispforest.owo.serialization.OwoComponentTypeBuilder" {
import {$DataComponentType$Builder} from "net.minecraft.core.component.DataComponentType$Builder"
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $OwoComponentTypeBuilder$$Interface<T> {
}

export class $OwoComponentTypeBuilder<T> implements $OwoComponentTypeBuilder$$Interface {
 "endec"(endec: $Endec$$Type<(T)>): $DataComponentType$Builder<(T)>
 "endec"(endec: $Endec$$Type<(T)>, assumedContext: $SerializationContext$$Type): $DataComponentType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoComponentTypeBuilder$$Type<T> = ($OwoComponentTypeBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoComponentTypeBuilder$$Original<T> = $OwoComponentTypeBuilder<(T)>;}
