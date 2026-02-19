declare module "net.fabricmc.loader.api.metadata.ModMetadata" {
import {$ModDependency} from "net.fabricmc.loader.api.metadata.ModDependency"
import {$ContactInformation} from "net.fabricmc.loader.api.metadata.ContactInformation"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$Person} from "net.fabricmc.loader.api.metadata.Person"
import {$Optional} from "java.util.Optional"
import {$Version} from "net.fabricmc.loader.api.Version"
import {$CustomValue} from "net.fabricmc.loader.api.metadata.CustomValue"
import {$ModEnvironment} from "net.fabricmc.loader.api.metadata.ModEnvironment"

export interface $ModMetadata$$Interface {
get "description"(): StringJS
get "environment"(): $ModEnvironment
get "name"(): StringJS
get "id"(): StringJS
get "type"(): StringJS
get "version"(): $Version
get "license"(): $Collection<(StringJS)>
get "dependencies"(): $Collection<($ModDependency)>
get "customValues"(): $Map<(StringJS), ($CustomValue)>
get "conflicts"(): $Collection<($ModDependency)>
get "recommends"(): $Collection<($ModDependency)>
get "provides"(): $Collection<(StringJS)>
get "suggests"(): $Collection<($ModDependency)>
get "contributors"(): $Collection<($Person)>
get "authors"(): $Collection<($Person)>
get "contact"(): $ContactInformation
get "depends"(): $Collection<($ModDependency)>
get "breaks"(): $Collection<($ModDependency)>
}

export class $ModMetadata implements $ModMetadata$$Interface {
 "getDescription"(): StringJS
 "getEnvironment"(): $ModEnvironment
 "getName"(): StringJS
 "getId"(): StringJS
 "getType"(): StringJS
 "getVersion"(): $Version
 "getLicense"(): $Collection<(StringJS)>
 "getDependencies"(): $Collection<($ModDependency)>
 "getCustomValues"(): $Map<(StringJS), ($CustomValue)>
/**
 * 
 * @deprecated
 */
 "getConflicts"(): $Collection<($ModDependency)>
 "getCustomValue"(arg0: StringJS): $CustomValue
/**
 * 
 * @deprecated
 */
 "getRecommends"(): $Collection<($ModDependency)>
 "getIconPath"(arg0: integer): $Optional<(StringJS)>
 "getProvides"(): $Collection<(StringJS)>
/**
 * 
 * @deprecated
 */
 "getSuggests"(): $Collection<($ModDependency)>
 "getContributors"(): $Collection<($Person)>
 "getAuthors"(): $Collection<($Person)>
 "getContact"(): $ContactInformation
/**
 * 
 * @deprecated
 */
 "getDepends"(): $Collection<($ModDependency)>
/**
 * 
 * @deprecated
 */
 "getBreaks"(): $Collection<($ModDependency)>
/**
 * 
 * @deprecated
 */
 "containsCustomElement"(arg0: StringJS): boolean
 "containsCustomValue"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModMetadata$$Type = ($ModMetadata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModMetadata$$Original = $ModMetadata;}
declare module "net.fabricmc.loader.api.metadata.ModDependency$Kind" {
import {$Enum} from "java.lang.Enum"

export class $ModDependency$Kind extends $Enum<($ModDependency$Kind)> {
static readonly "CONFLICTS": $ModDependency$Kind
static readonly "RECOMMENDS": $ModDependency$Kind
static readonly "BREAKS": $ModDependency$Kind
static readonly "DEPENDS": $ModDependency$Kind
static readonly "SUGGESTS": $ModDependency$Kind

public static "values"(): ($ModDependency$Kind)[]
public static "valueOf"(arg0: StringJS): $ModDependency$Kind
public "getKey"(): StringJS
public static "parse"(arg0: StringJS): $ModDependency$Kind
public "isPositive"(): boolean
public "isSoft"(): boolean
get "key"(): StringJS
get "positive"(): boolean
get "soft"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModDependency$Kind$$Type = (("depends") | ("recommends") | ("suggests") | ("conflicts") | ("breaks"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModDependency$Kind$$Original = $ModDependency$Kind;}
declare module "net.fabricmc.loader.api.metadata.CustomValue" {
import {$CustomValue$CvArray} from "net.fabricmc.loader.api.metadata.CustomValue$CvArray"
import {$CustomValue$CvType} from "net.fabricmc.loader.api.metadata.CustomValue$CvType"
import {$CustomValue$CvObject} from "net.fabricmc.loader.api.metadata.CustomValue$CvObject"

export interface $CustomValue$$Interface {
get "type"(): $CustomValue$CvType
get "asBoolean"(): boolean
get "asString"(): StringJS
get "asNumber"(): number
get "asObject"(): $CustomValue$CvObject
get "asArray"(): $CustomValue$CvArray
}

export class $CustomValue implements $CustomValue$$Interface {
 "getType"(): $CustomValue$CvType
 "getAsBoolean"(): boolean
 "getAsString"(): StringJS
 "getAsNumber"(): number
 "getAsObject"(): $CustomValue$CvObject
 "getAsArray"(): $CustomValue$CvArray
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomValue$$Type = ($CustomValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomValue$$Original = $CustomValue;}
declare module "net.fabricmc.loader.api.metadata.ContactInformation" {
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"

export interface $ContactInformation$$Interface {
}

export class $ContactInformation implements $ContactInformation$$Interface {
static readonly "EMPTY": $ContactInformation

 "get"(arg0: StringJS): $Optional<(StringJS)>
 "asMap"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContactInformation$$Type = ($ContactInformation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContactInformation$$Original = $ContactInformation;}
declare module "net.fabricmc.loader.api.metadata.CustomValue$CvType" {
import {$Enum} from "java.lang.Enum"

export class $CustomValue$CvType extends $Enum<($CustomValue$CvType)> {
static readonly "NUMBER": $CustomValue$CvType
static readonly "ARRAY": $CustomValue$CvType
static readonly "NULL": $CustomValue$CvType
static readonly "STRING": $CustomValue$CvType
static readonly "OBJECT": $CustomValue$CvType
static readonly "BOOLEAN": $CustomValue$CvType

public static "values"(): ($CustomValue$CvType)[]
public static "valueOf"(arg0: StringJS): $CustomValue$CvType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomValue$CvType$$Type = (("object") | ("array") | ("string") | ("number") | ("boolean") | ("null"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomValue$CvType$$Original = $CustomValue$CvType;}
declare module "net.fabricmc.loader.api.metadata.CustomValue$CvArray" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$Spliterator} from "java.util.Spliterator"
import {$CustomValue, $CustomValue$$Type, $CustomValue$$Interface} from "net.fabricmc.loader.api.metadata.CustomValue"
import {$CustomValue$CvType} from "net.fabricmc.loader.api.metadata.CustomValue$CvType"
import {$CustomValue$CvObject} from "net.fabricmc.loader.api.metadata.CustomValue$CvObject"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomValue$CvArray$$Interface extends $CustomValue$$Interface, $Iterable$$Interface<($CustomValue)> {
[Symbol.iterator](): IterableIterator<$CustomValue>;
get "type"(): $CustomValue$CvType
get "asBoolean"(): boolean
get "asString"(): StringJS
get "asNumber"(): number
get "asObject"(): $CustomValue$CvObject
get "asArray"(): $CustomValue$CvArray
}

export class $CustomValue$CvArray implements $CustomValue$CvArray$$Interface {
 "size"(): integer
 "get"(arg0: integer): $CustomValue
 "getType"(): $CustomValue$CvType
 "getAsBoolean"(): boolean
 "getAsString"(): StringJS
 "getAsNumber"(): number
 "getAsObject"(): $CustomValue$CvObject
 "getAsArray"(): $CustomValue$CvArray
 "iterator"(): $Iterator<($CustomValue)>
 "spliterator"(): $Spliterator<($CustomValue)>
 "forEach"(arg0: $Consumer$$Type<($CustomValue)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomValue$CvArray$$Type = ($CustomValue$CvArray);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomValue$CvArray$$Original = $CustomValue$CvArray;}
declare module "net.fabricmc.loader.api.metadata.version.VersionPredicate" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$VersionInterval} from "net.fabricmc.loader.api.metadata.version.VersionInterval"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Version, $Version$$Type} from "net.fabricmc.loader.api.Version"
import {$VersionPredicate$PredicateTerm} from "net.fabricmc.loader.api.metadata.version.VersionPredicate$PredicateTerm"

export interface $VersionPredicate$$Interface extends $Predicate$$Interface<($Version)> {
get "interval"(): $VersionInterval
get "terms"(): $Collection<($VersionPredicate$PredicateTerm)>
}

export class $VersionPredicate implements $VersionPredicate$$Interface {
static "parse"(arg0: $Collection$$Type<(StringJS)>): $Collection<($VersionPredicate)>
static "parse"(arg0: StringJS): $VersionPredicate
 "getInterval"(): $VersionInterval
 "getTerms"(): $Collection<($VersionPredicate$PredicateTerm)>
 "test"(arg0: $Version$$Type): boolean
 "or"(arg0: $Predicate$$Type<($Version)>): $Predicate<($Version)>
 "negate"(): $Predicate<($Version)>
 "and"(arg0: $Predicate$$Type<($Version)>): $Predicate<($Version)>
static "not"<T>(arg0: $Predicate$$Type<($Version)>): $Predicate<($Version)>
static "isEqual"<T>(arg0: any): $Predicate<($Version)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionPredicate$$Type = ($VersionPredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VersionPredicate$$Original = $VersionPredicate;}
declare module "net.fabricmc.loader.api.metadata.ModEnvironment" {
import {$EnvType$$Type} from "net.fabricmc.api.EnvType"
import {$Enum} from "java.lang.Enum"

export class $ModEnvironment extends $Enum<($ModEnvironment)> {
static readonly "UNIVERSAL": $ModEnvironment
static readonly "SERVER": $ModEnvironment
static readonly "CLIENT": $ModEnvironment

public static "values"(): ($ModEnvironment)[]
public static "valueOf"(arg0: StringJS): $ModEnvironment
public "matches"(arg0: $EnvType$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModEnvironment$$Type = (("client") | ("server") | ("universal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModEnvironment$$Original = $ModEnvironment;}
declare module "net.fabricmc.loader.api.metadata.version.VersionInterval" {
import {$Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Version} from "net.fabricmc.loader.api.Version"

export interface $VersionInterval$$Interface {
get "min"(): $Version
get "max"(): $Version
get "maxInclusive"(): boolean
get "minInclusive"(): boolean
get "semantic"(): boolean
}

export class $VersionInterval implements $VersionInterval$$Interface {
static readonly "INFINITE": $VersionInterval

static "or"(arg0: $Collection$$Type<($VersionInterval$$Type)>, arg1: $VersionInterval$$Type): $List<($VersionInterval)>
 "or"(arg0: $Collection$$Type<($VersionInterval$$Type)>): $List<($VersionInterval)>
static "and"(arg0: $VersionInterval$$Type, arg1: $VersionInterval$$Type): $VersionInterval
 "and"(arg0: $VersionInterval$$Type): $VersionInterval
static "and"(arg0: $Collection$$Type<($VersionInterval$$Type)>, arg1: $Collection$$Type<($VersionInterval$$Type)>): $List<($VersionInterval)>
static "not"(arg0: $VersionInterval$$Type): $List<($VersionInterval)>
static "not"(arg0: $Collection$$Type<($VersionInterval$$Type)>): $List<($VersionInterval)>
 "not"(): $List<($VersionInterval)>
 "getMin"(): $Version
 "getMax"(): $Version
 "isMaxInclusive"(): boolean
 "isMinInclusive"(): boolean
 "isSemantic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionInterval$$Type = ($VersionInterval);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VersionInterval$$Original = $VersionInterval;}
declare module "net.fabricmc.loader.api.metadata.ModDependency" {
import {$Collection} from "java.util.Collection"
import {$VersionInterval} from "net.fabricmc.loader.api.metadata.version.VersionInterval"
import {$List} from "java.util.List"
import {$VersionPredicate} from "net.fabricmc.loader.api.metadata.version.VersionPredicate"
import {$Version$$Type} from "net.fabricmc.loader.api.Version"
import {$ModDependency$Kind} from "net.fabricmc.loader.api.metadata.ModDependency$Kind"

export interface $ModDependency$$Interface {
get "modId"(): StringJS
get "kind"(): $ModDependency$Kind
get "versionRequirements"(): $Collection<($VersionPredicate)>
get "versionIntervals"(): $List<($VersionInterval)>
}

export class $ModDependency implements $ModDependency$$Interface {
 "matches"(arg0: $Version$$Type): boolean
 "getModId"(): StringJS
 "getKind"(): $ModDependency$Kind
 "getVersionRequirements"(): $Collection<($VersionPredicate)>
 "getVersionIntervals"(): $List<($VersionInterval)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModDependency$$Type = ($ModDependency);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModDependency$$Original = $ModDependency;}
declare module "net.fabricmc.loader.api.metadata.Person" {
import {$ContactInformation} from "net.fabricmc.loader.api.metadata.ContactInformation"

export interface $Person$$Interface {
get "name"(): StringJS
get "contact"(): $ContactInformation
}

export class $Person implements $Person$$Interface {
 "getName"(): StringJS
 "getContact"(): $ContactInformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Person$$Type = ($Person);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Person$$Original = $Person;}
declare module "net.fabricmc.loader.api.metadata.CustomValue$CvObject" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$CustomValue$CvArray} from "net.fabricmc.loader.api.metadata.CustomValue$CvArray"
import {$Spliterator} from "java.util.Spliterator"
import {$CustomValue, $CustomValue$$Type, $CustomValue$$Interface} from "net.fabricmc.loader.api.metadata.CustomValue"
import {$CustomValue$CvType} from "net.fabricmc.loader.api.metadata.CustomValue$CvType"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomValue$CvObject$$Interface extends $CustomValue$$Interface, $Iterable$$Interface<($Map$Entry<(StringJS), ($CustomValue)>)> {
[Symbol.iterator](): IterableIterator<$Map$Entry<(StringJS), ($CustomValue)>>;
get "type"(): $CustomValue$CvType
get "asBoolean"(): boolean
get "asString"(): StringJS
get "asNumber"(): number
get "asObject"(): $CustomValue$CvObject
get "asArray"(): $CustomValue$CvArray
}

export class $CustomValue$CvObject implements $CustomValue$CvObject$$Interface {
 "size"(): integer
 "get"(arg0: StringJS): $CustomValue
 "containsKey"(arg0: StringJS): boolean
 "getType"(): $CustomValue$CvType
 "getAsBoolean"(): boolean
 "getAsString"(): StringJS
 "getAsNumber"(): number
 "getAsObject"(): $CustomValue$CvObject
 "getAsArray"(): $CustomValue$CvArray
 "iterator"(): $Iterator<($Map$Entry<(StringJS), ($CustomValue)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(StringJS), ($CustomValue)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(StringJS), ($CustomValue)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomValue$CvObject$$Type = ($CustomValue$CvObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomValue$CvObject$$Original = $CustomValue$CvObject;}
declare module "net.fabricmc.loader.api.Version" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export interface $Version$$Interface extends $Comparable$$Interface<($Version)> {
get "friendlyString"(): StringJS
}

export class $Version implements $Version$$Interface {
static "parse"(arg0: StringJS): $Version
 "getFriendlyString"(): StringJS
 "compareTo"(arg0: $Version$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Version$$Type = ($Version);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Version$$Original = $Version;}
declare module "net.fabricmc.loader.api.metadata.ModOrigin" {
import {$List} from "java.util.List"
import {$ModOrigin$Kind} from "net.fabricmc.loader.api.metadata.ModOrigin$Kind"
import {$Path} from "java.nio.file.Path"

export interface $ModOrigin$$Interface {
get "paths"(): $List<($Path)>
get "kind"(): $ModOrigin$Kind
get "parentModId"(): StringJS
get "parentSubLocation"(): StringJS
}

export class $ModOrigin implements $ModOrigin$$Interface {
 "getPaths"(): $List<($Path)>
 "getKind"(): $ModOrigin$Kind
 "getParentModId"(): StringJS
 "getParentSubLocation"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModOrigin$$Type = ($ModOrigin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModOrigin$$Original = $ModOrigin;}
declare module "net.fabricmc.loader.api.metadata.ModOrigin$Kind" {
import {$Enum} from "java.lang.Enum"

export class $ModOrigin$Kind extends $Enum<($ModOrigin$Kind)> {
static readonly "PATH": $ModOrigin$Kind
static readonly "NESTED": $ModOrigin$Kind
static readonly "UNKNOWN": $ModOrigin$Kind

public static "values"(): ($ModOrigin$Kind)[]
public static "valueOf"(arg0: StringJS): $ModOrigin$Kind
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModOrigin$Kind$$Type = (("path") | ("nested") | ("unknown"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModOrigin$Kind$$Original = $ModOrigin$Kind;}
declare module "net.fabricmc.loader.api.ModContainer" {
import {$ModOrigin} from "net.fabricmc.loader.api.metadata.ModOrigin"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Path} from "java.nio.file.Path"
import {$ModMetadata} from "net.fabricmc.loader.api.metadata.ModMetadata"

export interface $ModContainer$$Interface {
get "root"(): $Path
get "rootPath"(): $Path
get "origin"(): $ModOrigin
get "containingMod"(): $Optional<($ModContainer)>
get "rootPaths"(): $List<($Path)>
get "metadata"(): $ModMetadata
get "containedMods"(): $Collection<($ModContainer)>
}

export class $ModContainer implements $ModContainer$$Interface {
/**
 * 
 * @deprecated
 */
 "getRoot"(): $Path
/**
 * 
 * @deprecated
 */
 "getPath"(arg0: StringJS): $Path
/**
 * 
 * @deprecated
 */
 "getRootPath"(): $Path
 "getOrigin"(): $ModOrigin
 "getContainingMod"(): $Optional<($ModContainer)>
 "getRootPaths"(): $List<($Path)>
 "getMetadata"(): $ModMetadata
 "getContainedMods"(): $Collection<($ModContainer)>
 "findPath"(arg0: StringJS): $Optional<($Path)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModContainer$$Type = ($ModContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModContainer$$Original = $ModContainer;}
