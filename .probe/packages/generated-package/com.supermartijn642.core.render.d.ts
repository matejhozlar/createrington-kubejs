declare module "com.supermartijn642.core.render.RenderWorldEvent" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event} from "net.neoforged.bus.api.Event"

export class $RenderWorldEvent extends $Event {
constructor(poseStack: $PoseStack$$Type, partialTicks: float)

public "getPoseStack"(): $PoseStack
public "getPartialTicks"(): float
get "poseStack"(): $PoseStack
get "partialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderWorldEvent$$Type = ($RenderWorldEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderWorldEvent$$Original = $RenderWorldEvent;}
