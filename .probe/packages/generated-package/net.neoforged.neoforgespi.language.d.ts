declare module "net.neoforged.neoforgespi.language.IModInfo$DependencyType" {
import {$Enum} from "java.lang.Enum"

export class $IModInfo$DependencyType extends $Enum<($IModInfo$DependencyType)> {
static readonly "OPTIONAL": $IModInfo$DependencyType
static readonly "DISCOURAGED": $IModInfo$DependencyType
static readonly "REQUIRED": $IModInfo$DependencyType
static readonly "INCOMPATIBLE": $IModInfo$DependencyType

public static "values"(): ($IModInfo$DependencyType)[]
public static "valueOf"(arg0: StringJS): $IModInfo$DependencyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$DependencyType$$Type = (("required") | ("optional") | ("incompatible") | ("discouraged"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModInfo$DependencyType$$Original = $IModInfo$DependencyType;}
declare module "net.neoforged.neoforgespi.language.IModLanguageLoader" {
import {$IIssueReporting$$Type} from "net.neoforged.neoforgespi.IIssueReporting"
import {$Collection$$Type} from "java.util.Collection"
import {$ModuleLayer$$Type} from "java.lang.ModuleLayer"
import {$IModFile$$Type} from "net.neoforged.neoforgespi.locating.IModFile"
import {$ModFileScanData$$Type} from "net.neoforged.neoforgespi.language.ModFileScanData"
import {$IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

export interface $IModLanguageLoader$$Interface {
}

export class $IModLanguageLoader implements $IModLanguageLoader$$Interface {
 "loadMod"(arg0: $IModInfo$$Type, arg1: $ModFileScanData$$Type, arg2: $ModuleLayer$$Type): $ModContainer
 "name"(): StringJS
 "version"(): StringJS
 "validate"(arg0: $IModFile$$Type, arg1: $Collection$$Type<($ModContainer$$Type)>, arg2: $IIssueReporting$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModLanguageLoader$$Type = ($IModLanguageLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModLanguageLoader$$Original = $IModLanguageLoader;}
declare module "net.neoforged.neoforgespi.language.IConfigurable" {
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"

export interface $IConfigurable$$Interface {
}

export class $IConfigurable implements $IConfigurable$$Interface {
 "getConfigList"(...arg0: (StringJS)[]): $List<($IConfigurable)>
 "getConfigElement"<T>(...arg0: (StringJS)[]): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$$Type = ($IConfigurable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigurable$$Original = $IConfigurable;}
declare module "net.neoforged.neoforgespi.language.ModFileScanData$ClassData" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$Type, $Type$$Type} from "org.objectweb.asm.Type"
import {$Record} from "java.lang.Record"

export class $ModFileScanData$ClassData extends $Record {
constructor(clazz: $Type$$Type, parent: $Type$$Type, interfaces: $Set$$Type<($Type$$Type)>)

public "clazz"(): $Type
public "parent"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "interfaces"(): $Set<($Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$ClassData$$Type = ({"parent"?: $Type$$Type, "interfaces"?: $Set$$Type<($Type$$Type)>, "clazz"?: $Type$$Type}) | ([parent?: $Type$$Type, interfaces?: $Set$$Type<($Type$$Type)>, clazz?: $Type$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFileScanData$ClassData$$Original = $ModFileScanData$ClassData;}
declare module "net.neoforged.neoforgespi.language.IModInfo$ModVersion" {
import {$IModInfo$DependencySide} from "net.neoforged.neoforgespi.language.IModInfo$DependencySide"
import {$Optional} from "java.util.Optional"
import {$IModInfo$DependencyType} from "net.neoforged.neoforgespi.language.IModInfo$DependencyType"
import {$URL} from "java.net.URL"
import {$IModInfo$Ordering} from "net.neoforged.neoforgespi.language.IModInfo$Ordering"
import {$VersionRange} from "org.apache.maven.artifact.versioning.VersionRange"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"

export interface $IModInfo$ModVersion$$Interface {
get "reason"(): $Optional<(StringJS)>
get "type"(): $IModInfo$DependencyType
get "owner"(): $IModInfo
set "owner"(value: $IModInfo$$Type)
get "ordering"(): $IModInfo$Ordering
get "versionRange"(): $VersionRange
get "referralURL"(): $Optional<($URL)>
get "modId"(): StringJS
get "side"(): $IModInfo$DependencySide
}

export class $IModInfo$ModVersion implements $IModInfo$ModVersion$$Interface {
 "getReason"(): $Optional<(StringJS)>
 "getType"(): $IModInfo$DependencyType
 "getOwner"(): $IModInfo
 "setOwner"(arg0: $IModInfo$$Type): void
 "getOrdering"(): $IModInfo$Ordering
 "getVersionRange"(): $VersionRange
 "getReferralURL"(): $Optional<($URL)>
 "getModId"(): StringJS
 "getSide"(): $IModInfo$DependencySide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$ModVersion$$Type = ($IModInfo$ModVersion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModInfo$ModVersion$$Original = $IModInfo$ModVersion;}
declare module "net.neoforged.neoforgespi.language.ModFileScanData$AnnotationData" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Type, $Type$$Type} from "org.objectweb.asm.Type"
import {$ElementType, $ElementType$$Type} from "java.lang.annotation.ElementType"
import {$Record} from "java.lang.Record"

export class $ModFileScanData$AnnotationData extends $Record {
constructor(annotationType: $Type$$Type, targetType: $ElementType$$Type, clazz: $Type$$Type, memberName: StringJS, annotationData: $Map$$Type<(StringJS), (any)>)

public "clazz"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "annotationData"(): $Map<(StringJS), (any)>
public "annotationType"(): $Type
public "targetType"(): $ElementType
public "memberName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$AnnotationData$$Type = ({"memberName"?: StringJS, "clazz"?: $Type$$Type, "annotationData"?: $Map$$Type<(StringJS), (any)>, "annotationType"?: $Type$$Type, "targetType"?: $ElementType$$Type}) | ([memberName?: StringJS, clazz?: $Type$$Type, annotationData?: $Map$$Type<(StringJS), (any)>, annotationType?: $Type$$Type, targetType?: $ElementType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFileScanData$AnnotationData$$Original = $ModFileScanData$AnnotationData;}
declare module "net.neoforged.neoforgespi.language.IModInfo$Ordering" {
import {$Enum} from "java.lang.Enum"

export class $IModInfo$Ordering extends $Enum<($IModInfo$Ordering)> {
static readonly "BEFORE": $IModInfo$Ordering
static readonly "AFTER": $IModInfo$Ordering
static readonly "NONE": $IModInfo$Ordering

public static "values"(): ($IModInfo$Ordering)[]
public static "valueOf"(arg0: StringJS): $IModInfo$Ordering
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$Ordering$$Type = (("before") | ("after") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModInfo$Ordering$$Original = $IModInfo$Ordering;}
declare module "net.neoforged.neoforgespi.language.IModInfo" {
import {$ArtifactVersion} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$IModFileInfo} from "net.neoforged.neoforgespi.language.IModFileInfo"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$IModInfo$ModVersion} from "net.neoforged.neoforgespi.language.IModInfo$ModVersion"
import {$IConfigurable} from "net.neoforged.neoforgespi.language.IConfigurable"
import {$List} from "java.util.List"
import {$URL} from "java.net.URL"
import {$ForgeFeature$Bound} from "net.neoforged.neoforgespi.locating.ForgeFeature$Bound"
import {$VersionRange} from "org.apache.maven.artifact.versioning.VersionRange"
import {$IModLanguageLoader} from "net.neoforged.neoforgespi.language.IModLanguageLoader"

export interface $IModInfo$$Interface {
get "description"(): StringJS
get "loader"(): $IModLanguageLoader
get "displayName"(): StringJS
get "version"(): $ArtifactVersion
get "forgeFeatures"(): $List<($ForgeFeature$Bound)>
get "logoFile"(): $Optional<(StringJS)>
get "logoBlur"(): boolean
get "dependencies"(): $List<($IModInfo$ModVersion)>
get "owningFile"(): $IModFileInfo
get "modProperties"(): $Map<(StringJS), (any)>
get "updateURL"(): $Optional<($URL)>
get "namespace"(): StringJS
get "modURL"(): $Optional<($URL)>
get "modId"(): StringJS
get "config"(): $IConfigurable
}

export class $IModInfo implements $IModInfo$$Interface {
static readonly "UNBOUNDED": $VersionRange

 "getDescription"(): StringJS
 "getLoader"(): $IModLanguageLoader
 "getDisplayName"(): StringJS
 "getVersion"(): $ArtifactVersion
 "getForgeFeatures"(): $List<($ForgeFeature$Bound)>
 "getLogoFile"(): $Optional<(StringJS)>
 "getLogoBlur"(): boolean
 "getDependencies"(): $List<($IModInfo$ModVersion)>
 "getOwningFile"(): $IModFileInfo
 "getModProperties"(): $Map<(StringJS), (any)>
 "getUpdateURL"(): $Optional<($URL)>
 "getNamespace"(): StringJS
 "getModURL"(): $Optional<($URL)>
 "getModId"(): StringJS
 "getConfig"(): $IConfigurable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$$Type = ($IModInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModInfo$$Original = $IModInfo;}
declare module "net.neoforged.neoforgespi.language.ModFileScanData" {
import {$IModFileInfo, $IModFileInfo$$Type} from "net.neoforged.neoforgespi.language.IModFileInfo"
import {$Annotation$$Type} from "java.lang.annotation.Annotation"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$Set} from "java.util.Set"
import {$ModFileScanData$ClassData} from "net.neoforged.neoforgespi.language.ModFileScanData$ClassData"
import {$Stream} from "java.util.stream.Stream"
import {$ElementType$$Type} from "java.lang.annotation.ElementType"
import {$ModFileScanData$AnnotationData} from "net.neoforged.neoforgespi.language.ModFileScanData$AnnotationData"

export class $ModFileScanData {
constructor()

public "getClasses"(): $Set<($ModFileScanData$ClassData)>
public "getAnnotations"(): $Set<($ModFileScanData$AnnotationData)>
public "getAnnotatedBy"(arg0: $Class$$Type<($Annotation$$Type)>, arg1: $ElementType$$Type): $Stream<($ModFileScanData$AnnotationData)>
public "getIModInfoData"(): $List<($IModFileInfo)>
public "addModFileInfo"(arg0: $IModFileInfo$$Type): void
get "classes"(): $Set<($ModFileScanData$ClassData)>
get "annotations"(): $Set<($ModFileScanData$AnnotationData)>
get "IModInfoData"(): $List<($IModFileInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$$Type = ($ModFileScanData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFileScanData$$Original = $ModFileScanData;}
declare module "net.neoforged.neoforgespi.language.IModFileInfo" {
import {$Map} from "java.util.Map"
import {$IModFileInfo$LanguageSpec} from "net.neoforged.neoforgespi.language.IModFileInfo$LanguageSpec"
import {$IModFile} from "net.neoforged.neoforgespi.locating.IModFile"
import {$IConfigurable} from "net.neoforged.neoforgespi.language.IConfigurable"
import {$List} from "java.util.List"
import {$IModInfo} from "net.neoforged.neoforgespi.language.IModInfo"

export interface $IModFileInfo$$Interface {
get "file"(): $IModFile
get "fileProperties"(): $Map<(StringJS), (any)>
get "license"(): StringJS
get "mods"(): $List<($IModInfo)>
get "config"(): $IConfigurable
}

export class $IModFileInfo implements $IModFileInfo$$Interface {
 "moduleName"(): StringJS
 "getFile"(): $IModFile
 "showAsDataPack"(): boolean
 "showAsResourcePack"(): boolean
 "usesServices"(): $List<(StringJS)>
 "getFileProperties"(): $Map<(StringJS), (any)>
 "getLicense"(): StringJS
 "getMods"(): $List<($IModInfo)>
 "versionString"(): StringJS
 "requiredLanguageLoaders"(): $List<($IModFileInfo$LanguageSpec)>
 "getConfig"(): $IConfigurable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$$Type = ($IModFileInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModFileInfo$$Original = $IModFileInfo;}
declare module "net.neoforged.neoforgespi.language.IModInfo$DependencySide" {
import {$Enum} from "java.lang.Enum"
import {$Dist$$Type} from "net.neoforged.api.distmarker.Dist"

export class $IModInfo$DependencySide extends $Enum<($IModInfo$DependencySide)> {
static readonly "SERVER": $IModInfo$DependencySide
static readonly "CLIENT": $IModInfo$DependencySide
static readonly "BOTH": $IModInfo$DependencySide

public static "values"(): ($IModInfo$DependencySide)[]
public static "valueOf"(arg0: StringJS): $IModInfo$DependencySide
public "isCorrectSide"(): boolean
public "isContained"(arg0: $Dist$$Type): boolean
get "correctSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$DependencySide$$Type = (("client") | ("server") | ("both"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModInfo$DependencySide$$Original = $IModInfo$DependencySide;}
declare module "net.neoforged.neoforgespi.language.IModFileInfo$LanguageSpec" {
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$Record} from "java.lang.Record"

export class $IModFileInfo$LanguageSpec extends $Record {
constructor(languageName: StringJS, acceptedVersions: $VersionRange$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "languageName"(): StringJS
public "acceptedVersions"(): $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$LanguageSpec$$Type = ({"languageName"?: StringJS, "acceptedVersions"?: $VersionRange$$Type}) | ([languageName?: StringJS, acceptedVersions?: $VersionRange$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModFileInfo$LanguageSpec$$Original = $IModFileInfo$LanguageSpec;}
