declare module "fuzs.puzzleslib.neoforge.impl.data.FileHelperDataProvider" {
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"

export interface $FileHelperDataProvider$$Interface {

(arg0: $ExistingFileHelper): void
}

export class $FileHelperDataProvider implements $FileHelperDataProvider$$Interface {
 "puzzleslib$setExistingFileHelper"(arg0: $ExistingFileHelper$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileHelperDataProvider$$Type = ((arg0: $ExistingFileHelper) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileHelperDataProvider$$Original = $FileHelperDataProvider;}
