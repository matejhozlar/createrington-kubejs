declare module "javax.sound.sampled.AudioFormat$Encoding" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AudioFormat$Encoding {
static readonly "PCM_UNSIGNED": $AudioFormat$Encoding
static readonly "ULAW": $AudioFormat$Encoding
static readonly "PCM_FLOAT": $AudioFormat$Encoding
static readonly "PCM_SIGNED": $AudioFormat$Encoding
static readonly "ALAW": $AudioFormat$Encoding

constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioFormat$Encoding$$Type = ($AudioFormat$Encoding);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AudioFormat$Encoding$$Original = $AudioFormat$Encoding;}
declare module "javax.sound.sampled.AudioFormat" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$AudioFormat$Encoding, $AudioFormat$Encoding$$Type} from "javax.sound.sampled.AudioFormat$Encoding"

export class $AudioFormat {
constructor(arg0: $AudioFormat$Encoding$$Type, arg1: float, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: boolean)
constructor(arg0: float, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean)
constructor(arg0: $AudioFormat$Encoding$$Type, arg1: float, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: boolean, arg7: $Map$$Type<(StringJS), (any)>)

public "getChannels"(): integer
public "getProperty"(arg0: StringJS): any
public "toString"(): StringJS
public "matches"(arg0: $AudioFormat$$Type): boolean
public "properties"(): $Map<(StringJS), (any)>
public "isBigEndian"(): boolean
public "getEncoding"(): $AudioFormat$Encoding
public "getSampleSizeInBits"(): integer
public "getFrameSize"(): integer
public "getFrameRate"(): float
public "getSampleRate"(): float
get "channels"(): integer
get "bigEndian"(): boolean
get "encoding"(): $AudioFormat$Encoding
get "sampleSizeInBits"(): integer
get "frameSize"(): integer
get "frameRate"(): float
get "sampleRate"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioFormat$$Type = ($AudioFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AudioFormat$$Original = $AudioFormat;}
