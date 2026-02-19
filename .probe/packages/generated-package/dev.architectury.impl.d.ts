declare module "dev.architectury.impl.ItemPropertiesExtensionImpl" {
import {$CreativeModeTab} from "net.minecraft.world.item.CreativeModeTab"
import {$DeferredSupplier} from "dev.architectury.registry.registries.DeferredSupplier"

export interface $ItemPropertiesExtensionImpl$$Interface {
}

export class $ItemPropertiesExtensionImpl implements $ItemPropertiesExtensionImpl$$Interface {
 "arch$getTab"(): $CreativeModeTab
 "arch$getTabSupplier"(): $DeferredSupplier<($CreativeModeTab)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertiesExtensionImpl$$Type = ($ItemPropertiesExtensionImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPropertiesExtensionImpl$$Original = $ItemPropertiesExtensionImpl;}
