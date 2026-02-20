declare module "net.irisshaders.iris.vertices.BlockSensitiveBufferBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockSensitiveBufferBuilder$$Interface {
}

export class $BlockSensitiveBufferBuilder implements $BlockSensitiveBufferBuilder$$Interface {
 "restoreBlock"(): void
 "ignoreMidBlock"(arg0: boolean): void
 "overrideBlock"(arg0: integer): void
 "endBlock"(): void
 "beginBlock"(arg0: integer, arg1: byte, arg2: byte, arg3: integer, arg4: integer, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSensitiveBufferBuilder$$Type = ($BlockSensitiveBufferBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockSensitiveBufferBuilder$$Original = $BlockSensitiveBufferBuilder;}
declare module "net.irisshaders.iris.vertices.MojangBufferAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MojangBufferAccessor$$Interface {

(): long
get "pointer"(): long
}

export class $MojangBufferAccessor implements $MojangBufferAccessor$$Interface {
 "getPointer"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MojangBufferAccessor$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MojangBufferAccessor$$Original = $MojangBufferAccessor;}
