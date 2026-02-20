declare module "com.mojang.blaze3d.pipeline.RenderTarget" {
import {$Blaze3dRenderTargetExt$$Interface} from "net.irisshaders.iris.targets.Blaze3dRenderTargetExt"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"

export class $RenderTarget implements $Blaze3dRenderTargetExt$$Interface {
readonly "useDepth": boolean
 "filterMode": integer
 "viewWidth": integer
 "frameBufferId": integer
 "width": integer
 "viewHeight": integer
 "height": integer

constructor(arg0: boolean)

public "finalize"(): void
public "clear"(arg0: boolean): void
public "resize"(arg0: integer, arg1: integer, arg2: boolean): void
public "handler$cfk000$sodium$blitToScreen"(arg0: integer, arg1: integer, arg2: boolean, arg3: $CallbackInfo$$Type): void
public "bindWrite"(arg0: boolean): void
public "destroyBuffers"(): void
public "isStencilEnabled"(): boolean
public "enableStencil"(): void
public "bindRead"(): void
public "unbindRead"(): void
public "checkStatus"(): void
public "blitToScreen"(arg0: integer, arg1: integer, arg2: boolean): void
public "blitToScreen"(arg0: integer, arg1: integer): void
public "unbindWrite"(): void
public "setClearColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setFilterMode"(arg0: integer): void
public "createBuffers"(arg0: integer, arg1: integer, arg2: boolean): void
public "copyDepthFrom"(arg0: $RenderTarget$$Type): void
public "getColorTextureId"(): integer
public "getDepthTextureId"(): integer
public "iris$getColorBufferVersion"(): integer
public "iris$getDepthBufferVersion"(): integer
get "stencilEnabled"(): boolean
get "colorTextureId"(): integer
get "depthTextureId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTarget$$Type = ($RenderTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTarget$$Original = $RenderTarget;}
