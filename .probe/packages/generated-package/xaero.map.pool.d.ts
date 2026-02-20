declare module "xaero.map.pool.TextureUploadPool$Normal" {
import {$TextureUploadPool} from "xaero.map.pool.TextureUploadPool"
import {$TextureUpload$Normal} from "xaero.map.graphics.TextureUpload$Normal"

export class $TextureUploadPool$Normal extends $TextureUploadPool<($TextureUpload$Normal)> {
constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): $TextureUpload$Normal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Normal$$Type = ($TextureUploadPool$Normal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUploadPool$Normal$$Original = $TextureUploadPool$Normal;}
declare module "xaero.map.pool.MapPool" {
import {$PoolUnit, $PoolUnit$$Type} from "xaero.map.pool.PoolUnit"

export class $MapPool<T extends $PoolUnit> {
constructor(arg0: integer)

public "size"(): integer
public "addToPool"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPool$$Type<T> = ($MapPool<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapPool$$Original<T> = $MapPool<(T)>;}
declare module "xaero.map.pool.PoolUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PoolUnit$$Interface {

(...arg0: (any)[]): void
}

export class $PoolUnit implements $PoolUnit$$Interface {
 "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoolUnit$$Type = ((arg0: (any)[]) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoolUnit$$Original = $PoolUnit;}
declare module "xaero.map.pool.TextureUploadPool$SubsequentNormal" {
import {$TextureUploadPool} from "xaero.map.pool.TextureUploadPool"
import {$TextureUpload$SubsequentNormal} from "xaero.map.graphics.TextureUpload$SubsequentNormal"

export class $TextureUploadPool$SubsequentNormal extends $TextureUploadPool<($TextureUpload$SubsequentNormal)> {
constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): $TextureUpload$SubsequentNormal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$SubsequentNormal$$Type = ($TextureUploadPool$SubsequentNormal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUploadPool$SubsequentNormal$$Original = $TextureUploadPool$SubsequentNormal;}
declare module "xaero.map.pool.TextureUploadPool$BranchDownload" {
import {$TextureUploadPool} from "xaero.map.pool.TextureUploadPool"
import {$TextureUpload$BranchDownload} from "xaero.map.graphics.TextureUpload$BranchDownload"

export class $TextureUploadPool$BranchDownload extends $TextureUploadPool<($TextureUpload$BranchDownload)> {
constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $TextureUpload$BranchDownload
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchDownload$$Type = ($TextureUploadPool$BranchDownload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUploadPool$BranchDownload$$Original = $TextureUploadPool$BranchDownload;}
declare module "xaero.map.pool.TextureUploadPool$Compressed" {
import {$TextureUploadPool} from "xaero.map.pool.TextureUploadPool"
import {$TextureUpload$Compressed} from "xaero.map.graphics.TextureUpload$Compressed"

export class $TextureUploadPool$Compressed extends $TextureUploadPool<($TextureUpload$Compressed)> {
constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): $TextureUpload$Compressed
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Compressed$$Type = ($TextureUploadPool$Compressed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUploadPool$Compressed$$Original = $TextureUploadPool$Compressed;}
declare module "xaero.map.pool.MapTilePool" {
import {$MapTile} from "xaero.map.region.MapTile"
import {$MapPool} from "xaero.map.pool.MapPool"

export class $MapTilePool extends $MapPool<($MapTile)> {
constructor()

public "get"(arg0: StringJS, arg1: integer, arg2: integer): $MapTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTilePool$$Type = ($MapTilePool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapTilePool$$Original = $MapTilePool;}
declare module "xaero.map.pool.TextureUploadPool$BranchUpdate" {
import {$TextureUploadPool} from "xaero.map.pool.TextureUploadPool"
import {$BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$TextureUpload$BranchUpdate} from "xaero.map.graphics.TextureUpload$BranchUpdate"

export class $TextureUploadPool$BranchUpdate extends $TextureUploadPool<($TextureUpload$BranchUpdate)> {
constructor(arg0: integer, arg1: boolean)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BranchTextureRenderer$$Type, arg16: integer, arg17: integer): $TextureUpload$BranchUpdate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchUpdate$$Type = ($TextureUploadPool$BranchUpdate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureUploadPool$BranchUpdate$$Original = $TextureUploadPool$BranchUpdate;}
