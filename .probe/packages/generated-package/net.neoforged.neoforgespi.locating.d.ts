declare module "net.neoforged.neoforgespi.locating.ModFileDiscoveryAttributes" {
import {$IDependencyLocator, $IDependencyLocator$$Type} from "net.neoforged.neoforgespi.locating.IDependencyLocator"
import {$IModFile, $IModFile$$Type} from "net.neoforged.neoforgespi.locating.IModFile"
import {$IModFileCandidateLocator, $IModFileCandidateLocator$$Type} from "net.neoforged.neoforgespi.locating.IModFileCandidateLocator"
import {$IModFileReader, $IModFileReader$$Type} from "net.neoforged.neoforgespi.locating.IModFileReader"
import {$Record} from "java.lang.Record"

export class $ModFileDiscoveryAttributes extends $Record {
static readonly "DEFAULT": $ModFileDiscoveryAttributes

constructor(parent: $IModFile$$Type, reader: $IModFileReader$$Type, locator: $IModFileCandidateLocator$$Type, dependencyLocator: $IDependencyLocator$$Type)

public "parent"(): $IModFile
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "merge"(arg0: $ModFileDiscoveryAttributes$$Type): $ModFileDiscoveryAttributes
public "reader"(): $IModFileReader
public "locator"(): $IModFileCandidateLocator
public "withReader"(arg0: $IModFileReader$$Type): $ModFileDiscoveryAttributes
public "withParent"(arg0: $IModFile$$Type): $ModFileDiscoveryAttributes
public "withDependencyLocator"(arg0: $IDependencyLocator$$Type): $ModFileDiscoveryAttributes
public "withLocator"(arg0: $IModFileCandidateLocator$$Type): $ModFileDiscoveryAttributes
public "dependencyLocator"(): $IDependencyLocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileDiscoveryAttributes$$Type = ({"dependencyLocator"?: $IDependencyLocator$$Type, "parent"?: $IModFile$$Type, "locator"?: $IModFileCandidateLocator$$Type, "reader"?: $IModFileReader$$Type}) | ([dependencyLocator?: $IDependencyLocator$$Type, parent?: $IModFile$$Type, locator?: $IModFileCandidateLocator$$Type, reader?: $IModFileReader$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFileDiscoveryAttributes$$Original = $ModFileDiscoveryAttributes;}
declare module "net.neoforged.neoforgespi.locating.ForgeFeature$Bound" {
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"
import {$Record} from "java.lang.Record"

export class $ForgeFeature$Bound extends $Record {
constructor(featureName: StringJS, featureBound: StringJS, modInfo: $IModInfo$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bound"<T>(): T
public "modInfo"(): $IModInfo
public "featureBound"(): StringJS
public "featureName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFeature$Bound$$Type = ({"modInfo"?: $IModInfo$$Type, "featureName"?: StringJS, "featureBound"?: StringJS}) | ([modInfo?: $IModInfo$$Type, featureName?: StringJS, featureBound?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForgeFeature$Bound$$Original = $ForgeFeature$Bound;}
declare module "net.neoforged.neoforgespi.locating.ModFileInfoParser" {
import {$IModFileInfo, $IModFileInfo$$Type} from "net.neoforged.neoforgespi.language.IModFileInfo"
import {$IModFile, $IModFile$$Type} from "net.neoforged.neoforgespi.locating.IModFile"

export interface $ModFileInfoParser$$Interface {

(arg0: $IModFile): $IModFileInfo$$Type
}

export class $ModFileInfoParser implements $ModFileInfoParser$$Interface {
 "build"(arg0: $IModFile$$Type): $IModFileInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileInfoParser$$Type = ((arg0: $IModFile) => $IModFileInfo$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFileInfoParser$$Original = $ModFileInfoParser;}
declare module "net.neoforged.neoforgespi.locating.IModFile$Type" {
import {$Enum} from "java.lang.Enum"

export class $IModFile$Type extends $Enum<($IModFile$Type)> {
static readonly "MOD": $IModFile$Type
static readonly "GAMELIBRARY": $IModFile$Type
static readonly "LIBRARY": $IModFile$Type

public static "values"(): ($IModFile$Type)[]
public static "valueOf"(arg0: StringJS): $IModFile$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$Type$$Type = (("mod") | ("library") | ("gamelibrary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModFile$Type$$Original = $IModFile$Type;}
declare module "net.neoforged.neoforgespi.locating.IModFile" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$IModFile$Type, $IModFile$Type$$Type} from "net.neoforged.neoforgespi.locating.IModFile$Type"
import {$ModFileInfoParser$$Type} from "net.neoforged.neoforgespi.locating.ModFileInfoParser"
import {$IModInfo} from "net.neoforged.neoforgespi.language.IModInfo"
import {$IModFileInfo} from "net.neoforged.neoforgespi.language.IModFileInfo"
import {$Supplier} from "java.util.function.Supplier"
import {$SecureJar, $SecureJar$$Type} from "cpw.mods.jarhandling.SecureJar"
import {$SecureJar$Status$$Type} from "cpw.mods.jarhandling.SecureJar$Status"
import {$ModFileScanData} from "net.neoforged.neoforgespi.language.ModFileScanData"
import {$Path} from "java.nio.file.Path"
import {$ModFileDiscoveryAttributes, $ModFileDiscoveryAttributes$$Type} from "net.neoforged.neoforgespi.locating.ModFileDiscoveryAttributes"

export interface $IModFile$$Interface {
get "type"(): $IModFile$Type
get "fileName"(): StringJS
get "discoveryAttributes"(): $ModFileDiscoveryAttributes
get "filePath"(): $Path
get "modInfos"(): $List<($IModInfo)>
get "scanResult"(): $ModFileScanData
get "modFileInfo"(): $IModFileInfo
get "secureJar"(): $SecureJar
get "substitutionMap"(): $Supplier<($Map<(StringJS), (any)>)>
set "securityStatus"(value: $SecureJar$Status$$Type)
}

export class $IModFile implements $IModFile$$Interface {
 "findResource"(...arg0: (StringJS)[]): $Path
 "getType"(): $IModFile$Type
static "create"(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type): $IModFile
static "create"(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type, arg2: $ModFileDiscoveryAttributes$$Type): $IModFile
static "create"(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type, arg2: $IModFile$Type$$Type, arg3: $ModFileDiscoveryAttributes$$Type): $IModFile
 "getFileName"(): StringJS
 "getDiscoveryAttributes"(): $ModFileDiscoveryAttributes
 "getFilePath"(): $Path
 "getModInfos"(): $List<($IModInfo)>
 "getScanResult"(): $ModFileScanData
 "getModFileInfo"(): $IModFileInfo
 "getSecureJar"(): $SecureJar
 "getSubstitutionMap"(): $Supplier<($Map<(StringJS), (any)>)>
 "setSecurityStatus"(arg0: $SecureJar$Status$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$$Type = ($IModFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModFile$$Original = $IModFile;}
