declare module "dev.architectury.event.forge.EventHandlerImplCommon$LevelEventAttachment" {
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export interface $EventHandlerImplCommon$LevelEventAttachment$$Interface {
}

export class $EventHandlerImplCommon$LevelEventAttachment implements $EventHandlerImplCommon$LevelEventAttachment$$Interface {
 "architectury$getAttachedLevel"(): $LevelAccessor
 "architectury$attachLevel"(arg0: $LevelAccessor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandlerImplCommon$LevelEventAttachment$$Type = ($EventHandlerImplCommon$LevelEventAttachment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventHandlerImplCommon$LevelEventAttachment$$Original = $EventHandlerImplCommon$LevelEventAttachment;}
