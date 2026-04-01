declare module "dev.djefrey.colorwheel.ColorwheelBufferBuilder" {
import {$BlockSensitiveBufferBuilder$$Interface} from "net.irisshaders.iris.vertices.BlockSensitiveBufferBuilder"

export interface $ColorwheelBufferBuilder$$Interface extends $BlockSensitiveBufferBuilder$$Interface {
}

export class $ColorwheelBufferBuilder implements $ColorwheelBufferBuilder$$Interface {
 "clrwlEndBlock"(): void
 "clrwlBeginBlock"(block: integer, renderType: byte, lightEmission: byte, isTerrain: boolean, posX: integer, posY: integer, posZ: integer): void
 "overrideBlock"(arg0: integer): void
 "ignoreMidBlock"(arg0: boolean): void
 "restoreBlock"(): void
 "beginBlock"(arg0: integer, arg1: byte, arg2: byte, arg3: integer, arg4: integer, arg5: integer): void
 "endBlock"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorwheelBufferBuilder$$Type = ($ColorwheelBufferBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorwheelBufferBuilder$$Original = $ColorwheelBufferBuilder;}
