declare module "cpw.mods.jarhandling.SecureJar$Status" {
import {$Enum} from "java.lang.Enum"

export class $SecureJar$Status extends $Enum<($SecureJar$Status)> {
static readonly "UNVERIFIED": $SecureJar$Status
static readonly "NONE": $SecureJar$Status
static readonly "INVALID": $SecureJar$Status
static readonly "VERIFIED": $SecureJar$Status

public static "values"(): ($SecureJar$Status)[]
public static "valueOf"(arg0: StringJS): $SecureJar$Status
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureJar$Status$$Type = (("none") | ("invalid") | ("unverified") | ("verified"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SecureJar$Status$$Original = $SecureJar$Status;}
declare module "cpw.mods.jarhandling.SecureJar" {
import {$Attributes} from "java.util.jar.Attributes"
import {$JarContents$$Type} from "cpw.mods.jarhandling.JarContents"
import {$SecureJar$ModuleDataProvider} from "cpw.mods.jarhandling.SecureJar$ModuleDataProvider"
import {$SecureJar$Status} from "cpw.mods.jarhandling.SecureJar$Status"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$JarMetadata$$Type} from "cpw.mods.jarhandling.JarMetadata"
import {$CodeSigner} from "java.security.CodeSigner"

export interface $SecureJar$$Interface {
get "primaryPath"(): $Path
get "manifestSigners"(): ($CodeSigner)[]
get "rootPath"(): $Path
}

export class $SecureJar implements $SecureJar$$Interface {
 "name"(): StringJS
static "from"(arg0: $JarContents$$Type, arg1: $JarMetadata$$Type): $SecureJar
static "from"(arg0: $JarContents$$Type): $SecureJar
static "from"(...arg0: ($Path$$Type)[]): $SecureJar
 "close"(): void
 "getPath"(arg0: StringJS, ...arg1: (StringJS)[]): $Path
 "moduleDataProvider"(): $SecureJar$ModuleDataProvider
 "getPrimaryPath"(): $Path
 "verifyPath"(arg0: $Path$$Type): $SecureJar$Status
 "getFileStatus"(arg0: StringJS): $SecureJar$Status
 "getManifestSigners"(): ($CodeSigner)[]
 "hasSecurityData"(): boolean
 "getRootPath"(): $Path
 "getTrustedManifestEntries"(arg0: StringJS): $Attributes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureJar$$Type = ($SecureJar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SecureJar$$Original = $SecureJar;}
