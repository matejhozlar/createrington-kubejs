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
public static "valueOf"(name: StringJS): $CustomValue$CvType
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
declare module "net.fabricmc.loader.api.metadata.ModEnvironment" {
import {$EnvType$$Type} from "net.fabricmc.api.EnvType"
import {$Enum} from "java.lang.Enum"

export class $ModEnvironment extends $Enum<($ModEnvironment)> {
static readonly "UNIVERSAL": $ModEnvironment
static readonly "SERVER": $ModEnvironment
static readonly "CLIENT": $ModEnvironment

public static "values"(): ($ModEnvironment)[]
public static "valueOf"(name: StringJS): $ModEnvironment
public "matches"(type: $EnvType$$Type): boolean
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
get "semantic"(): boolean
get "maxInclusive"(): boolean
get "minInclusive"(): boolean
}

export class $VersionInterval implements $VersionInterval$$Interface {
static readonly "INFINITE": $VersionInterval

static "or"(a: $Collection$$Type<($VersionInterval$$Type)>, b: $VersionInterval$$Type): $List<($VersionInterval)>
 "or"(o: $Collection$$Type<($VersionInterval$$Type)>): $List<($VersionInterval)>
static "and"(a: $VersionInterval$$Type, b: $VersionInterval$$Type): $VersionInterval
 "and"(o: $VersionInterval$$Type): $VersionInterval
static "and"(a: $Collection$$Type<($VersionInterval$$Type)>, b: $Collection$$Type<($VersionInterval$$Type)>): $List<($VersionInterval)>
static "not"(interval: $VersionInterval$$Type): $List<($VersionInterval)>
static "not"(intervals: $Collection$$Type<($VersionInterval$$Type)>): $List<($VersionInterval)>
 "not"(): $List<($VersionInterval)>
 "getMin"(): $Version
 "getMax"(): $Version
 "isSemantic"(): boolean
 "isMaxInclusive"(): boolean
 "isMinInclusive"(): boolean
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
declare module "net.fabricmc.loader.api.Version" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export interface $Version$$Interface extends $Comparable$$Interface<($Version)> {
get "friendlyString"(): StringJS
}

export class $Version implements $Version$$Interface {
static "parse"(string: StringJS): $Version
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
get "kind"(): $ModOrigin$Kind
get "parentModId"(): StringJS
get "paths"(): $List<($Path)>
get "parentSubLocation"(): StringJS
}

export class $ModOrigin implements $ModOrigin$$Interface {
 "getKind"(): $ModOrigin$Kind
 "getParentModId"(): StringJS
 "getPaths"(): $List<($Path)>
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
public static "valueOf"(name: StringJS): $ModOrigin$Kind
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
declare module "net.fabricmc.loader.api.metadata.ModMetadata" {
import {$ContactInformation} from "net.fabricmc.loader.api.metadata.ContactInformation"
import {$ModDependency} from "net.fabricmc.loader.api.metadata.ModDependency"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Person} from "net.fabricmc.loader.api.metadata.Person"
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
get "dependencies"(): $Collection<($ModDependency)>
get "contact"(): $ContactInformation
get "depends"(): $Collection<($ModDependency)>
get "breaks"(): $Collection<($ModDependency)>
get "authors"(): $Collection<($Person)>
get "license"(): $Collection<(StringJS)>
get "suggests"(): $Collection<($ModDependency)>
get "contributors"(): $Collection<($Person)>
get "recommends"(): $Collection<($ModDependency)>
get "customValues"(): $Map<(StringJS), ($CustomValue)>
get "conflicts"(): $Collection<($ModDependency)>
get "provides"(): $Collection<(StringJS)>
}

export class $ModMetadata implements $ModMetadata$$Interface {
 "getDescription"(): StringJS
 "getEnvironment"(): $ModEnvironment
 "getName"(): StringJS
 "getId"(): StringJS
 "getType"(): StringJS
 "getVersion"(): $Version
 "getDependencies"(): $Collection<($ModDependency)>
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
 "getAuthors"(): $Collection<($Person)>
 "getLicense"(): $Collection<(StringJS)>
/**
 * 
 * @deprecated
 */
 "getSuggests"(): $Collection<($ModDependency)>
 "getCustomValue"(arg0: StringJS): $CustomValue
 "getIconPath"(arg0: integer): $Optional<(StringJS)>
 "getContributors"(): $Collection<($Person)>
/**
 * 
 * @deprecated
 */
 "getRecommends"(): $Collection<($ModDependency)>
 "getCustomValues"(): $Map<(StringJS), ($CustomValue)>
/**
 * 
 * @deprecated
 */
 "getConflicts"(): $Collection<($ModDependency)>
 "getProvides"(): $Collection<(StringJS)>
 "containsCustomValue"(arg0: StringJS): boolean
/**
 * 
 * @deprecated
 */
 "containsCustomElement"(arg0: StringJS): boolean
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
public static "valueOf"(name: StringJS): $ModDependency$Kind
public "getKey"(): StringJS
public static "parse"(key: StringJS): $ModDependency$Kind
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
get "asNumber"(): number
get "asString"(): StringJS
get "asArray"(): $CustomValue$CvArray
get "asObject"(): $CustomValue$CvObject
}

export class $CustomValue implements $CustomValue$$Interface {
 "getType"(): $CustomValue$CvType
 "getAsBoolean"(): boolean
 "getAsNumber"(): number
 "getAsString"(): StringJS
 "getAsArray"(): $CustomValue$CvArray
 "getAsObject"(): $CustomValue$CvObject
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
declare module "net.fabricmc.loader.api.metadata.CustomValue$CvArray" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$CustomValue, $CustomValue$$Type, $CustomValue$$Interface} from "net.fabricmc.loader.api.metadata.CustomValue"
import {$CustomValue$CvType} from "net.fabricmc.loader.api.metadata.CustomValue$CvType"
import {$CustomValue$CvObject} from "net.fabricmc.loader.api.metadata.CustomValue$CvObject"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomValue$CvArray$$Interface extends $CustomValue$$Interface, $Iterable$$Interface<($CustomValue)> {
[Symbol.iterator](): IterableIterator<$CustomValue>;
get "type"(): $CustomValue$CvType
get "asBoolean"(): boolean
get "asNumber"(): number
get "asString"(): StringJS
get "asArray"(): $CustomValue$CvArray
get "asObject"(): $CustomValue$CvObject
}

export class $CustomValue$CvArray implements $CustomValue$CvArray$$Interface {
 "size"(): integer
 "get"(arg0: integer): $CustomValue
 "getType"(): $CustomValue$CvType
 "getAsBoolean"(): boolean
 "getAsNumber"(): number
 "getAsString"(): StringJS
 "getAsArray"(): $CustomValue$CvArray
 "getAsObject"(): $CustomValue$CvObject
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
get "terms"(): $Collection<($VersionPredicate$PredicateTerm)>
get "interval"(): $VersionInterval
}

export class $VersionPredicate implements $VersionPredicate$$Interface {
static "parse"(predicates: $Collection$$Type<(StringJS)>): $Collection<($VersionPredicate)>
static "parse"(predicate: StringJS): $VersionPredicate
 "getTerms"(): $Collection<($VersionPredicate$PredicateTerm)>
 "getInterval"(): $VersionInterval
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
declare module "net.fabricmc.loader.api.metadata.ModDependency" {
import {$Collection} from "java.util.Collection"
import {$VersionInterval} from "net.fabricmc.loader.api.metadata.version.VersionInterval"
import {$VersionPredicate} from "net.fabricmc.loader.api.metadata.version.VersionPredicate"
import {$List} from "java.util.List"
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
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
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
get "asNumber"(): number
get "asString"(): StringJS
get "asArray"(): $CustomValue$CvArray
get "asObject"(): $CustomValue$CvObject
}

export class $CustomValue$CvObject implements $CustomValue$CvObject$$Interface {
 "size"(): integer
 "get"(arg0: StringJS): $CustomValue
 "containsKey"(arg0: StringJS): boolean
 "getType"(): $CustomValue$CvType
 "getAsBoolean"(): boolean
 "getAsNumber"(): number
 "getAsString"(): StringJS
 "getAsArray"(): $CustomValue$CvArray
 "getAsObject"(): $CustomValue$CvObject
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
get "metadata"(): $ModMetadata
get "rootPaths"(): $List<($Path)>
get "containingMod"(): $Optional<($ModContainer)>
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
 "findPath"(file: StringJS): $Optional<($Path)>
 "getMetadata"(): $ModMetadata
 "getRootPaths"(): $List<($Path)>
 "getContainingMod"(): $Optional<($ModContainer)>
 "getContainedMods"(): $Collection<($ModContainer)>
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
