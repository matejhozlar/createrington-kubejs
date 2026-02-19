declare module "com.supermartijn642.core.extensions.CoreLibHolderReference" {
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $CoreLibHolderReference$$Interface {

(key: $ResourceKey<(never)>, value: any): void
}

export class $CoreLibHolderReference implements $CoreLibHolderReference$$Interface {
 "supermartijn642corelibOverride"(key: $ResourceKey$$Type<(never)>, value: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreLibHolderReference$$Type = ((key: $ResourceKey<(never)>, value: any) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoreLibHolderReference$$Original = $CoreLibHolderReference;}
