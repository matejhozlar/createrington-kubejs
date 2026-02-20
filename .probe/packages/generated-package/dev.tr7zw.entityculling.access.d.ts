declare module "dev.tr7zw.entityculling.access.EntityRendererInter" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AABB} from "net.minecraft.world.phys.AABB"

export interface $EntityRendererInter$$Interface<T extends $Entity> {
}

export class $EntityRendererInter<T extends $Entity> implements $EntityRendererInter$$Interface {
 "entityCullingIgnoresCulling"(arg0: T): boolean
 "shadowShouldShowName"(arg0: T): boolean
 "shadowRenderNameTag"(arg0: T, arg1: $Component$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: float): void
 "entityCullingGetCullingBox"(arg0: T): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererInter$$Type<T> = ($EntityRendererInter<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererInter$$Original<T> = $EntityRendererInter<(T)>;}
