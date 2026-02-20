declare module "com.mojang.blaze3d.shaders.Program$Type" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$ProgramTypeAccessor$$Interface} from "net.irisshaders.iris.mixin.ProgramTypeAccessor"

export class $Program$Type extends $Enum<($Program$Type)> implements $ProgramTypeAccessor$$Interface {
static readonly "VERTEX": $Program$Type
static readonly "FRAGMENT": $Program$Type

public "getName"(): StringJS
public static "values"(): ($Program$Type)[]
public static "valueOf"(arg0: StringJS): $Program$Type
public "getExtension"(): StringJS
public "getGlType"(): integer
public "getPrograms"(): $Map<(StringJS), ($Program)>
public static "createProgramType$iris_$md$6d3b50$0"(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: StringJS, arg4: integer): $Program$Type
public static "createProgramType"(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: StringJS, arg4: integer): $Program$Type
get "name"(): StringJS
get "extension"(): StringJS
get "glType"(): integer
get "programs"(): $Map<(StringJS), ($Program)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Program$Type$$Type = (("vertex") | ("fragment") | ("geometry") | ("tess_control") | ("tess_eval"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Program$Type$$Original = $Program$Type;}
declare module "com.mojang.blaze3d.shaders.Program" {
import {$GlslPreprocessor$$Type} from "com.mojang.blaze3d.preprocessor.GlslPreprocessor"
import {$Shader$$Type} from "com.mojang.blaze3d.shaders.Shader"
import {$InputStream$$Type} from "java.io.InputStream"
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $Program {
constructor(arg0: $Program$Type$$Type, arg1: integer, arg2: StringJS)

public "getName"(): StringJS
public "getId"(): integer
public "close"(): void
public "attachToShader"(arg0: $Shader$$Type): void
public static "compileShader"(arg0: $Program$Type$$Type, arg1: StringJS, arg2: $InputStream$$Type, arg3: StringJS, arg4: $GlslPreprocessor$$Type): $Program
get "name"(): StringJS
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Program$$Type = ($Program);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Program$$Original = $Program;}
declare module "com.mojang.blaze3d.shaders.AbstractUniform" {
import {$Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f$$Type} from "org.joml.Matrix3f"

export class $AbstractUniform {
constructor()

public "setSafe"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setSafe"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "set"(arg0: $Matrix3f$$Type): void
public "set"(arg0: (float)[]): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "set"(arg0: $Matrix4f$$Type): void
public "set"(arg0: $Vector3f$$Type): void
public "set"(arg0: $Vector4f$$Type): void
public "set"(arg0: float, arg1: float): void
public "set"(arg0: float): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "set"(arg0: integer): void
public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setMat2x2"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setMat2x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat3x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat3x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat3x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): void
public "setMat4x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat4x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat4x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float, arg15: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractUniform$$Type = ($AbstractUniform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractUniform$$Original = $AbstractUniform;}
declare module "com.mojang.blaze3d.shaders.FogShape" {
import {$Enum} from "java.lang.Enum"

export class $FogShape extends $Enum<($FogShape)> {
static readonly "CYLINDER": $FogShape
static readonly "SPHERE": $FogShape

public static "values"(): ($FogShape)[]
public static "valueOf"(arg0: StringJS): $FogShape
public "getIndex"(): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FogShape$$Type = (("sphere") | ("cylinder"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FogShape$$Original = $FogShape;}
declare module "com.mojang.blaze3d.shaders.BlendMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlendMode {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(): void
public "isOpaque"(): boolean
public static "stringToBlendFunc"(arg0: StringJS): integer
public static "stringToBlendFactor"(arg0: StringJS): integer
get "opaque"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendMode$$Type = ($BlendMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlendMode$$Original = $BlendMode;}
declare module "com.mojang.blaze3d.shaders.Uniform" {
import {$FloatBuffer} from "java.nio.FloatBuffer"
import {$Shader$$Type} from "com.mojang.blaze3d.shaders.Shader"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$IntBuffer} from "java.nio.IntBuffer"
import {$Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f$$Type} from "org.joml.Matrix3f"

export class $Uniform extends $AbstractUniform implements $AutoCloseable$$Interface {
static readonly "UT_INT4": integer
static readonly "UT_INT3": integer
static readonly "UT_MAT4": integer
static readonly "UT_FLOAT2": integer
static readonly "UT_MAT3": integer
static readonly "UT_FLOAT3": integer
static readonly "UT_MAT2": integer
static readonly "UT_INT2": integer
static readonly "UT_INT1": integer
static readonly "UT_FLOAT1": integer
static readonly "UT_FLOAT4": integer

constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: $Shader$$Type)

public "setSafe"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setSafe"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getName"(): StringJS
public "getLocation"(): integer
public "set"(arg0: integer): void
public "set"(arg0: $Vector4f$$Type): void
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: $Matrix3f$$Type): void
public "set"(arg0: $Matrix4f$$Type): void
public "set"(arg0: (float)[]): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: float): void
public "set"(arg0: float, arg1: float): void
public "set"(arg0: integer, arg1: float): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "set"(arg0: $Vector3f$$Type): void
public "getCount"(): integer
public "close"(): void
public "getType"(): integer
public "setLocation"(arg0: integer): void
public "upload"(): void
public static "uploadInteger"(arg0: integer, arg1: integer): void
public static "getTypeFromString"(arg0: StringJS): integer
public "getIntBuffer"(): $IntBuffer
public "getFloatBuffer"(): $FloatBuffer
public static "glBindAttribLocation"(arg0: integer, arg1: integer, arg2: charseq): void
public static "glGetUniformLocation"(arg0: integer, arg1: charseq): integer
public static "glGetAttribLocation"(arg0: integer, arg1: charseq): integer
public "setMat2x2"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setMat2x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat3x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat3x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat3x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): void
public "setMat4x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat4x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat4x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float, arg15: float): void
get "name"(): StringJS
get "location"(): integer
get "count"(): integer
get "type"(): integer
set "location"(value: integer)
get "intBuffer"(): $IntBuffer
get "floatBuffer"(): $FloatBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Uniform$$Type = ($Uniform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Uniform$$Original = $Uniform;}
declare module "com.mojang.blaze3d.shaders.EffectProgram" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$InputStream$$Type} from "java.io.InputStream"
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"
import {$Effect$$Type} from "com.mojang.blaze3d.shaders.Effect"

export class $EffectProgram extends $Program {
public "close"(): void
public static "compileShader"(arg0: $Program$Type$$Type, arg1: StringJS, arg2: $InputStream$$Type, arg3: StringJS): $EffectProgram
public "attachToEffect"(arg0: $Effect$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectProgram$$Type = ($EffectProgram);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectProgram$$Original = $EffectProgram;}
declare module "com.mojang.blaze3d.shaders.Shader" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"

export interface $Shader$$Interface {
get "id"(): integer
get "vertexProgram"(): $Program
get "fragmentProgram"(): $Program
}

export class $Shader implements $Shader$$Interface {
 "getId"(): integer
 "attachToProgram"(): void
 "getVertexProgram"(): $Program
 "getFragmentProgram"(): $Program
 "markDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shader$$Type = ($Shader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Shader$$Original = $Shader;}
declare module "com.mojang.blaze3d.shaders.Effect" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$Shader$$Interface} from "com.mojang.blaze3d.shaders.Shader"

export interface $Effect$$Interface extends $Shader$$Interface {
get "id"(): integer
get "vertexProgram"(): $Program
get "fragmentProgram"(): $Program
}

export class $Effect implements $Effect$$Interface {
 "getId"(): integer
 "attachToProgram"(): void
 "getVertexProgram"(): $Program
 "getFragmentProgram"(): $Program
 "markDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Effect$$Type = ($Effect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Effect$$Original = $Effect;}
