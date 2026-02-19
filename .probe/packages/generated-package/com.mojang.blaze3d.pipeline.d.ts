declare module "com.mojang.blaze3d.pipeline.RenderTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderTarget {
readonly "useDepth": boolean
 "filterMode": integer
 "viewWidth": integer
 "frameBufferId": integer
 "width": integer
 "viewHeight": integer
 "height": integer

constructor(arg0: boolean)

public "bindWrite"(arg0: boolean): void
public "clear"(arg0: boolean): void
public "resize"(arg0: integer, arg1: integer, arg2: boolean): void
public "setClearColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "checkStatus"(): void
public "blitToScreen"(arg0: integer, arg1: integer, arg2: boolean): void
public "blitToScreen"(arg0: integer, arg1: integer): void
public "unbindWrite"(): void
public "bindRead"(): void
public "unbindRead"(): void
public "destroyBuffers"(): void
public "createBuffers"(arg0: integer, arg1: integer, arg2: boolean): void
public "copyDepthFrom"(arg0: $RenderTarget$$Type): void
public "setFilterMode"(arg0: integer): void
public "getColorTextureId"(): integer
public "getDepthTextureId"(): integer
public "enableStencil"(): void
public "isStencilEnabled"(): boolean
get "colorTextureId"(): integer
get "depthTextureId"(): integer
get "stencilEnabled"(): boolean
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
