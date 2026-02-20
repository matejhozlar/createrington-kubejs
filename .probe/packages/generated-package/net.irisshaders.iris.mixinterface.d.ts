declare module "net.irisshaders.iris.mixinterface.LocalPlayerInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalPlayerInterface$$Interface {

(): float
get "currentConstantMood"(): float
}

export class $LocalPlayerInterface implements $LocalPlayerInterface$$Interface {
 "getCurrentConstantMood"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerInterface$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalPlayerInterface$$Original = $LocalPlayerInterface;}
declare module "net.irisshaders.iris.mixinterface.ExtendedBiome" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedBiome$$Interface {
get "downfall"(): float
get "biomeCategory"(): integer
set "biomeCategory"(value: integer)
}

export class $ExtendedBiome implements $ExtendedBiome$$Interface {
 "getDownfall"(): float
 "getBiomeCategory"(): integer
 "setBiomeCategory"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBiome$$Type = ($ExtendedBiome);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedBiome$$Original = $ExtendedBiome;}
declare module "net.irisshaders.iris.mixinterface.ShaderInstanceInterface" {
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$MethodHandle$$Type} from "java.lang.invoke.MethodHandle"

export interface $ShaderInstanceInterface$$Interface {
set "shouldSkip"(value: $MethodHandle$$Type)
}

export class $ShaderInstanceInterface implements $ShaderInstanceInterface$$Interface {
 "iris$createExtraShaders"(arg0: $ResourceProvider$$Type, arg1: StringJS): void
 "setShouldSkip"(arg0: $MethodHandle$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstanceInterface$$Type = ($ShaderInstanceInterface);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderInstanceInterface$$Original = $ShaderInstanceInterface;}
