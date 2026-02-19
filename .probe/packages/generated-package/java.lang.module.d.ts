declare module "java.lang.module.Configuration" {
import {$Collection$$Type} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ResolvedModule} from "java.lang.module.ResolvedModule"
import {$ModuleFinder$$Type} from "java.lang.module.ModuleFinder"
import {$Set} from "java.util.Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Configuration {
public "toString"(): StringJS
public static "empty"(): $Configuration
public "resolve"(arg0: $ModuleFinder$$Type, arg1: $ModuleFinder$$Type, arg2: $Collection$$Type<(StringJS)>): $Configuration
public static "resolve"(arg0: $ModuleFinder$$Type, arg1: $List$$Type<($Configuration$$Type)>, arg2: $ModuleFinder$$Type, arg3: $Collection$$Type<(StringJS)>): $Configuration
public "modules"(): $Set<($ResolvedModule)>
public "parents"(): $List<($Configuration)>
public "findModule"(arg0: StringJS): $Optional<($ResolvedModule)>
public static "resolveAndBind"(arg0: $ModuleFinder$$Type, arg1: $List$$Type<($Configuration$$Type)>, arg2: $ModuleFinder$$Type, arg3: $Collection$$Type<(StringJS)>): $Configuration
public "resolveAndBind"(arg0: $ModuleFinder$$Type, arg1: $ModuleFinder$$Type, arg2: $Collection$$Type<(StringJS)>): $Configuration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$$Type = ($Configuration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Configuration$$Original = $Configuration;}
declare module "java.lang.module.ModuleDescriptor$Provides" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List} from "java.util.List"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Provides implements $Comparable$$Interface<($ModuleDescriptor$Provides)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ModuleDescriptor$Provides$$Type): integer
public "service"(): StringJS
public "providers"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Provides$$Type = ($ModuleDescriptor$Provides);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Provides$$Original = $ModuleDescriptor$Provides;}
declare module "java.lang.module.ModuleDescriptor$Requires" {
import {$ModuleDescriptor$Requires$Modifier} from "java.lang.module.ModuleDescriptor$Requires$Modifier"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Set} from "java.util.Set"
import {$ModuleDescriptor$Version} from "java.lang.module.ModuleDescriptor$Version"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires implements $Comparable$$Interface<($ModuleDescriptor$Requires)> {
public "modifiers"(): $Set<($ModuleDescriptor$Requires$Modifier)>
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Requires$$Type): integer
public "compareTo"(arg0: any): integer
public "accessFlags"(): $Set<($AccessFlag)>
public "rawCompiledVersion"(): $Optional<(StringJS)>
public "compiledVersion"(): $Optional<($ModuleDescriptor$Version)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Requires$$Type = ($ModuleDescriptor$Requires);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Requires$$Original = $ModuleDescriptor$Requires;}
declare module "java.lang.module.ModuleDescriptor$Modifier" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Modifier extends $Enum<($ModuleDescriptor$Modifier)> {
static readonly "AUTOMATIC": $ModuleDescriptor$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Modifier
static readonly "MANDATED": $ModuleDescriptor$Modifier
static readonly "OPEN": $ModuleDescriptor$Modifier

public static "values"(): ($ModuleDescriptor$Modifier)[]
public static "valueOf"(arg0: StringJS): $ModuleDescriptor$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Modifier$$Type = (("open") | ("automatic") | ("synthetic") | ("mandated"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Modifier$$Original = $ModuleDescriptor$Modifier;}
declare module "java.lang.module.ModuleDescriptor$Exports" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Set} from "java.util.Set"
import {$ModuleDescriptor$Exports$Modifier} from "java.lang.module.ModuleDescriptor$Exports$Modifier"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports implements $Comparable$$Interface<($ModuleDescriptor$Exports)> {
public "modifiers"(): $Set<($ModuleDescriptor$Exports$Modifier)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Exports$$Type): integer
public "compareTo"(arg0: any): integer
public "accessFlags"(): $Set<($AccessFlag)>
public "source"(): StringJS
public "isQualified"(): boolean
public "targets"(): $Set<(StringJS)>
get "qualified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Exports$$Type = ($ModuleDescriptor$Exports);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Exports$$Original = $ModuleDescriptor$Exports;}
declare module "java.lang.module.ModuleDescriptor$Requires$Modifier" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires$Modifier extends $Enum<($ModuleDescriptor$Requires$Modifier)> {
static readonly "TRANSITIVE": $ModuleDescriptor$Requires$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Requires$Modifier
static readonly "MANDATED": $ModuleDescriptor$Requires$Modifier
static readonly "STATIC": $ModuleDescriptor$Requires$Modifier

public static "values"(): ($ModuleDescriptor$Requires$Modifier)[]
public static "valueOf"(arg0: StringJS): $ModuleDescriptor$Requires$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Requires$Modifier$$Type = (("transitive") | ("static") | ("synthetic") | ("mandated"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Requires$Modifier$$Original = $ModuleDescriptor$Requires$Modifier;}
declare module "java.lang.module.ModuleFinder" {
import {$Optional} from "java.util.Optional"
import {$Set} from "java.util.Set"
import {$Path$$Type} from "java.nio.file.Path"
import {$ModuleReference} from "java.lang.module.ModuleReference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ModuleFinder$$Interface {
}

export class $ModuleFinder implements $ModuleFinder$$Interface {
static "of"(...arg0: ($Path$$Type)[]): $ModuleFinder
 "find"(arg0: StringJS): $Optional<($ModuleReference)>
static "compose"(...arg0: ($ModuleFinder$$Type)[]): $ModuleFinder
static "ofSystem"(): $ModuleFinder
 "findAll"(): $Set<($ModuleReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleFinder$$Type = ($ModuleFinder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleFinder$$Original = $ModuleFinder;}
declare module "java.lang.module.ModuleDescriptor$Version" {
import {$Comparable$$Interface} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Version implements $Comparable$$Interface<($ModuleDescriptor$Version)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Version$$Type): integer
public "compareTo"(arg0: any): integer
public static "parse"(arg0: StringJS): $ModuleDescriptor$Version
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Version$$Type = ($ModuleDescriptor$Version);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Version$$Original = $ModuleDescriptor$Version;}
declare module "java.lang.module.ModuleDescriptor$Opens$Modifier" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens$Modifier extends $Enum<($ModuleDescriptor$Opens$Modifier)> {
static readonly "SYNTHETIC": $ModuleDescriptor$Opens$Modifier
static readonly "MANDATED": $ModuleDescriptor$Opens$Modifier

public static "values"(): ($ModuleDescriptor$Opens$Modifier)[]
public static "valueOf"(arg0: StringJS): $ModuleDescriptor$Opens$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Opens$Modifier$$Type = (("synthetic") | ("mandated"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Opens$Modifier$$Original = $ModuleDescriptor$Opens$Modifier;}
declare module "java.lang.module.ModuleDescriptor$Exports$Modifier" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports$Modifier extends $Enum<($ModuleDescriptor$Exports$Modifier)> {
static readonly "SYNTHETIC": $ModuleDescriptor$Exports$Modifier
static readonly "MANDATED": $ModuleDescriptor$Exports$Modifier

public static "values"(): ($ModuleDescriptor$Exports$Modifier)[]
public static "valueOf"(arg0: StringJS): $ModuleDescriptor$Exports$Modifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Exports$Modifier$$Type = (("synthetic") | ("mandated"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Exports$Modifier$$Original = $ModuleDescriptor$Exports$Modifier;}
declare module "java.lang.module.ModuleDescriptor" {
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ModuleDescriptor$Version} from "java.lang.module.ModuleDescriptor$Version"
import {$ModuleDescriptor$Exports} from "java.lang.module.ModuleDescriptor$Exports"
import {$ModuleDescriptor$Requires} from "java.lang.module.ModuleDescriptor$Requires"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"
import {$ModuleDescriptor$Opens} from "java.lang.module.ModuleDescriptor$Opens"
import {$ModuleDescriptor$Provides} from "java.lang.module.ModuleDescriptor$Provides"
import {$ModuleDescriptor$Modifier, $ModuleDescriptor$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Modifier"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$InputStream$$Type} from "java.io.InputStream"
import {$ModuleDescriptor$Builder} from "java.lang.module.ModuleDescriptor$Builder"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor implements $Comparable$$Interface<($ModuleDescriptor)> {
public "modifiers"(): $Set<($ModuleDescriptor$Modifier)>
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): $Optional<($ModuleDescriptor$Version)>
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$$Type): integer
public "compareTo"(arg0: any): integer
public "packages"(): $Set<(StringJS)>
public "isOpen"(): boolean
public "accessFlags"(): $Set<($AccessFlag)>
public static "read"(arg0: $InputStream$$Type, arg1: $Supplier$$Type<($Set$$Type<(StringJS)>)>): $ModuleDescriptor
public static "read"(arg0: $InputStream$$Type): $ModuleDescriptor
public static "read"(arg0: $ByteBuffer$$Type, arg1: $Supplier$$Type<($Set$$Type<(StringJS)>)>): $ModuleDescriptor
public static "read"(arg0: $ByteBuffer$$Type): $ModuleDescriptor
public "exports"(): $Set<($ModuleDescriptor$Exports)>
public "opens"(): $Set<($ModuleDescriptor$Opens)>
public "isAutomatic"(): boolean
public "uses"(): $Set<(StringJS)>
public "provides"(): $Set<($ModuleDescriptor$Provides)>
public "requires"(): $Set<($ModuleDescriptor$Requires)>
public "mainClass"(): $Optional<(StringJS)>
public "toNameAndVersion"(): StringJS
public "rawVersion"(): $Optional<(StringJS)>
public static "newModule"(arg0: StringJS, arg1: $Set$$Type<($ModuleDescriptor$Modifier$$Type)>): $ModuleDescriptor$Builder
public static "newModule"(arg0: StringJS): $ModuleDescriptor$Builder
public static "newOpenModule"(arg0: StringJS): $ModuleDescriptor$Builder
public static "newAutomaticModule"(arg0: StringJS): $ModuleDescriptor$Builder
get "open"(): boolean
get "automatic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$$Type = ($ModuleDescriptor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$$Original = $ModuleDescriptor;}
declare module "java.lang.module.ModuleDescriptor$Opens" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Set} from "java.util.Set"
import {$ModuleDescriptor$Opens$Modifier} from "java.lang.module.ModuleDescriptor$Opens$Modifier"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens implements $Comparable$$Interface<($ModuleDescriptor$Opens)> {
public "modifiers"(): $Set<($ModuleDescriptor$Opens$Modifier)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ModuleDescriptor$Opens$$Type): integer
public "compareTo"(arg0: any): integer
public "accessFlags"(): $Set<($AccessFlag)>
public "source"(): StringJS
public "isQualified"(): boolean
public "targets"(): $Set<(StringJS)>
get "qualified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Opens$$Type = ($ModuleDescriptor$Opens);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Opens$$Original = $ModuleDescriptor$Opens;}
declare module "java.lang.module.ModuleDescriptor$Builder" {
import {$ModuleDescriptor} from "java.lang.module.ModuleDescriptor"
import {$ModuleDescriptor$Opens$$Type} from "java.lang.module.ModuleDescriptor$Opens"
import {$ModuleDescriptor$Requires$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Requires$Modifier"
import {$ModuleDescriptor$Provides$$Type} from "java.lang.module.ModuleDescriptor$Provides"
import {$List$$Type} from "java.util.List"
import {$Set$$Type} from "java.util.Set"
import {$ModuleDescriptor$Opens$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Opens$Modifier"
import {$ModuleDescriptor$Version$$Type} from "java.lang.module.ModuleDescriptor$Version"
import {$ModuleDescriptor$Exports$$Type} from "java.lang.module.ModuleDescriptor$Exports"
import {$ModuleDescriptor$Requires$$Type} from "java.lang.module.ModuleDescriptor$Requires"
import {$ModuleDescriptor$Exports$Modifier$$Type} from "java.lang.module.ModuleDescriptor$Exports$Modifier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Builder {
public "version"(arg0: StringJS): $ModuleDescriptor$Builder
public "version"(arg0: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
public "packages"(arg0: $Set$$Type<(StringJS)>): $ModuleDescriptor$Builder
public "exports"(arg0: StringJS): $ModuleDescriptor$Builder
public "exports"(arg0: $Set$$Type<($ModuleDescriptor$Exports$Modifier$$Type)>, arg1: StringJS, arg2: $Set$$Type<(StringJS)>): $ModuleDescriptor$Builder
public "exports"(arg0: StringJS, arg1: $Set$$Type<(StringJS)>): $ModuleDescriptor$Builder
public "exports"(arg0: $Set$$Type<($ModuleDescriptor$Exports$Modifier$$Type)>, arg1: StringJS): $ModuleDescriptor$Builder
public "exports"(arg0: $ModuleDescriptor$Exports$$Type): $ModuleDescriptor$Builder
public "opens"(arg0: StringJS): $ModuleDescriptor$Builder
public "opens"(arg0: $Set$$Type<($ModuleDescriptor$Opens$Modifier$$Type)>, arg1: StringJS, arg2: $Set$$Type<(StringJS)>): $ModuleDescriptor$Builder
public "opens"(arg0: StringJS, arg1: $Set$$Type<(StringJS)>): $ModuleDescriptor$Builder
public "opens"(arg0: $ModuleDescriptor$Opens$$Type): $ModuleDescriptor$Builder
public "opens"(arg0: $Set$$Type<($ModuleDescriptor$Opens$Modifier$$Type)>, arg1: StringJS): $ModuleDescriptor$Builder
public "uses"(arg0: StringJS): $ModuleDescriptor$Builder
public "provides"(arg0: $ModuleDescriptor$Provides$$Type): $ModuleDescriptor$Builder
public "provides"(arg0: StringJS, arg1: $List$$Type<(StringJS)>): $ModuleDescriptor$Builder
public "build"(): $ModuleDescriptor
public "requires"(arg0: $ModuleDescriptor$Requires$$Type): $ModuleDescriptor$Builder
public "requires"(arg0: $Set$$Type<($ModuleDescriptor$Requires$Modifier$$Type)>, arg1: StringJS, arg2: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
public "requires"(arg0: StringJS): $ModuleDescriptor$Builder
public "requires"(arg0: $Set$$Type<($ModuleDescriptor$Requires$Modifier$$Type)>, arg1: StringJS): $ModuleDescriptor$Builder
public "mainClass"(arg0: StringJS): $ModuleDescriptor$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDescriptor$Builder$$Type = ($ModuleDescriptor$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleDescriptor$Builder$$Original = $ModuleDescriptor$Builder;}
declare module "java.lang.module.ResolvedModule" {
import {$Configuration} from "java.lang.module.Configuration"
import {$Set} from "java.util.Set"
import {$ModuleReference} from "java.lang.module.ModuleReference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ResolvedModule {
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "reads"(): $Set<($ResolvedModule)>
public "reference"(): $ModuleReference
public "configuration"(): $Configuration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolvedModule$$Type = ($ResolvedModule);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResolvedModule$$Original = $ResolvedModule;}
