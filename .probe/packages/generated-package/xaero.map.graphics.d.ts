declare module "xaero.map.graphics.TextureUploadBenchmark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextureUploadBenchmark {
constructor(...arg0: (integer)[])

public "pre"(): void
public "post"(arg0: integer): void
public "getAverage"(arg0: integer): long
public "getTotalsString"(): StringJS
public "isFinished"(arg0: integer): boolean
public "isFinished"(): boolean
get "totalsString"(): StringJS
get "finished"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadBenchmark$$Type = ($TextureUploadBenchmark);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUploadBenchmark$$Original = $TextureUploadBenchmark;}
declare module "xaero.map.graphics.CustomVertexConsumers" {
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {
constructor()

public "getRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "renderTypeBuffers"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomVertexConsumers$$Type = ($CustomVertexConsumers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomVertexConsumers$$Original = $CustomVertexConsumers;}
declare module "xaero.map.graphics.TextureUploader" {
import {$TextureUploadPool$BranchUpdate$$Type} from "xaero.map.pool.TextureUploadPool$BranchUpdate"
import {$TextureUpload$$Type} from "xaero.map.graphics.TextureUpload"
import {$BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$TextureUploadPool$Compressed$$Type} from "xaero.map.pool.TextureUploadPool$Compressed"
import {$TextureUploadPool$SubsequentNormal$$Type} from "xaero.map.pool.TextureUploadPool$SubsequentNormal"
import {$TextureUploadPool$Normal$$Type} from "xaero.map.pool.TextureUploadPool$Normal"
import {$TextureUploadBenchmark$$Type} from "xaero.map.graphics.TextureUploadBenchmark"
import {$TextureUploadPool$BranchDownload$$Type} from "xaero.map.pool.TextureUploadPool$BranchDownload"

export class $TextureUploader {
static readonly "BRANCHUPDATE_ALLOCATE": integer
static readonly "BRANCHDOWNLOAD": integer
static readonly "SUBSEQUENT_NORMAL": integer
static readonly "NORMALDOWNLOAD": integer
static readonly "COMPRESSED": integer
static readonly "BRANCHUPDATE": integer
static readonly "NORMAL": integer

constructor(arg0: $TextureUploadPool$Normal$$Type, arg1: $TextureUploadPool$Compressed$$Type, arg2: $TextureUploadPool$BranchUpdate$$Type, arg3: $TextureUploadPool$BranchUpdate$$Type, arg4: $TextureUploadPool$BranchDownload$$Type, arg5: $TextureUploadPool$SubsequentNormal$$Type, arg6: $TextureUploadBenchmark$$Type)

public "requestUpload"(arg0: $TextureUpload$$Type): long
public "uploadTextures"(): void
public "requestBranchUpdate"(arg0: boolean, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: long, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: integer, arg16: $BranchTextureRenderer$$Type, arg17: integer, arg18: integer): long
public "requestBranchDownload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): long
public "finishNewestRequestImmediately"(): void
public "requestSubsequentNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): long
public "requestCompressed"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): long
public "requestNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploader$$Type = ($TextureUploader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUploader$$Original = $TextureUploader;}
declare module "xaero.map.graphics.TextureUpload" {
import {$PoolUnit$$Interface} from "xaero.map.pool.PoolUnit"

export class $TextureUpload implements $PoolUnit$$Interface {
constructor()

public "run"(): void
public "create"(...arg0: (any)[]): void
public "getUploadType"(): integer
get "uploadType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$$Type = ($TextureUpload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUpload$$Original = $TextureUpload;}
