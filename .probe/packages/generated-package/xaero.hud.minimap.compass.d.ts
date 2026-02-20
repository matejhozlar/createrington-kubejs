declare module "xaero.hud.minimap.compass.render.CompassRenderer" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $CompassRenderer {
constructor(arg0: $HudMod$$Type, arg1: $Minecraft$$Type)

public "drawCompass"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: double, arg4: double, arg5: double, arg6: boolean, arg7: float, arg8: boolean, arg9: $MultiBufferSource$BufferSource$$Type, arg10: $VertexConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassRenderer$$Type = ($CompassRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompassRenderer$$Original = $CompassRenderer;}
