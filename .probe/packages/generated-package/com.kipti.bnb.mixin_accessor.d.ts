declare module "com.kipti.bnb.mixin_accessor.ReverseRenderableBakedGlyph" {
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $ReverseRenderableBakedGlyph$$Interface {

(arg0: boolean, arg1: float, arg2: float, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer): void
}

export class $ReverseRenderableBakedGlyph implements $ReverseRenderableBakedGlyph$$Interface {
 "bits_n_bobs$renderReverse"(arg0: boolean, arg1: float, arg2: float, arg3: $Matrix4f$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReverseRenderableBakedGlyph$$Type = ((arg0: boolean, arg1: float, arg2: float, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReverseRenderableBakedGlyph$$Original = $ReverseRenderableBakedGlyph;}
declare module "com.kipti.bnb.mixin_accessor.FontAccess" {
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $FontAccess$$Interface {

(arg0: $ResourceLocation): $FontSet$$Type
}

export class $FontAccess implements $FontAccess$$Interface {
 "bits_n_bobs$getFontSet"(arg0: $ResourceLocation$$Type): $FontSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontAccess$$Type = ((arg0: $ResourceLocation) => $FontSet$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontAccess$$Original = $FontAccess;}
declare module "com.kipti.bnb.mixin_accessor.FlywheelAccessibleKineticNetwork" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FlywheelAccessibleKineticNetwork$$Interface {
}

export class $FlywheelAccessibleKineticNetwork implements $FlywheelAccessibleKineticNetwork$$Interface {
 "bits_n_bobs$updateFlywheelStresses"(): void
 "bits_n_bobs$getFlywheelStressReleaseCapacity"(): float
 "bits_n_bobs$getFlywheelStressAbsoptionCapacity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlywheelAccessibleKineticNetwork$$Type = ($FlywheelAccessibleKineticNetwork);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlywheelAccessibleKineticNetwork$$Original = $FlywheelAccessibleKineticNetwork;}
