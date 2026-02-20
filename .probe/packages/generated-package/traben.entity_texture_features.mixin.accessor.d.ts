declare module "traben.entity_texture_features.mixin.accessor.TooltipAccessor" {
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$List, $List$$Type} from "java.util.List"

export interface $TooltipAccessor$$Interface {

(arg0: $List<($FormattedCharSequence)>): void
set "cachedTooltip"(value: $List$$Type<($FormattedCharSequence$$Type)>)
}

export class $TooltipAccessor implements $TooltipAccessor$$Interface {
 "setCachedTooltip"(arg0: $List$$Type<($FormattedCharSequence$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipAccessor$$Type = ((arg0: $List<($FormattedCharSequence)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipAccessor$$Original = $TooltipAccessor;}
