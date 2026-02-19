declare module "net.neoforged.fml.LogicalSide" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LogicalSide extends $Enum<($LogicalSide)> {
static readonly "SERVER": $LogicalSide
static readonly "CLIENT": $LogicalSide

public static "values"(): ($LogicalSide)[]
public static "valueOf"(arg0: StringJS): $LogicalSide
public "isClient"(): boolean
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicalSide$$Type = (("client") | ("server"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicalSide$$Original = $LogicalSide;}
declare module "net.neoforged.fml.ModContainer" {
import {$ModConfig$Type$$Type} from "net.neoforged.fml.config.ModConfig$Type"
import {$IEventBus} from "net.neoforged.bus.api.IEventBus"
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$EventPriority$$Type} from "net.neoforged.bus.api.EventPriority"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IExtensionPoint, $IExtensionPoint$$Type} from "net.neoforged.fml.IExtensionPoint"
import {$Class$$Type} from "java.lang.Class"
import {$IConfigSpec$$Type} from "net.neoforged.fml.config.IConfigSpec"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModContainer {
constructor(arg0: $IModInfo$$Type)

public "getModId"(): StringJS
public "registerExtensionPoint"<T extends $IExtensionPoint>(arg0: $Class$$Type<(T)>, arg1: $Supplier$$Type<(T)>): void
public "registerExtensionPoint"<T extends $IExtensionPoint>(arg0: $Class$$Type<(T)>, arg1: T): void
public "registerConfig"(arg0: $ModConfig$Type$$Type, arg1: $IConfigSpec$$Type): void
public "registerConfig"(arg0: $ModConfig$Type$$Type, arg1: $IConfigSpec$$Type, arg2: StringJS): void
public "getModInfo"(): $IModInfo
public "acceptEvent"<T extends $Event>(arg0: T): void
public "acceptEvent"<T extends $Event>(arg0: $EventPriority$$Type, arg1: T): void
public "getEventBus"(): $IEventBus
public "getCustomExtension"<T extends $IExtensionPoint>(arg0: $Class$$Type<(T)>): $Optional<(T)>
public "getNamespace"(): StringJS
get "modId"(): StringJS
get "modInfo"(): $IModInfo
get "eventBus"(): $IEventBus
get "namespace"(): StringJS
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
declare module "net.neoforged.fml.IExtensionPoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensionPoint$$Interface {
}

export class $IExtensionPoint implements $IExtensionPoint$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$$Type = ($IExtensionPoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IExtensionPoint$$Original = $IExtensionPoint;}
declare module "net.neoforged.fml.ModLoadingIssue" {
import {$ModLoadingIssue$Severity, $ModLoadingIssue$Severity$$Type} from "net.neoforged.fml.ModLoadingIssue$Severity"
import {$IModFile, $IModFile$$Type} from "net.neoforged.neoforgespi.locating.IModFile"
import {$List, $List$$Type} from "java.util.List"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Record} from "java.lang.Record"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLoadingIssue extends $Record {
constructor(arg0: $ModLoadingIssue$Severity$$Type, arg1: StringJS, arg2: $List$$Type<(any)>)
constructor(severity: $ModLoadingIssue$Severity$$Type, translationKey: StringJS, translationArgs: $List$$Type<(any)>, cause: $Throwable$$Type, affectedPath: $Path$$Type, affectedModFile: $IModFile$$Type, affectedMod: $IModInfo$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cause"(): $Throwable
public static "error"(arg0: StringJS, ...arg1: (any)[]): $ModLoadingIssue
public static "warning"(arg0: StringJS, ...arg1: (any)[]): $ModLoadingIssue
public "withAffectedPath"(arg0: $Path$$Type): $ModLoadingIssue
public "withCause"(arg0: $Throwable$$Type): $ModLoadingIssue
public "withAffectedModFile"(arg0: $IModFile$$Type): $ModLoadingIssue
public "withSeverity"(arg0: $ModLoadingIssue$Severity$$Type): $ModLoadingIssue
public "severity"(): $ModLoadingIssue$Severity
public "affectedMod"(): $IModInfo
public "withAffectedMod"(arg0: $IModInfo$$Type): $ModLoadingIssue
public "affectedModFile"(): $IModFile
public "affectedPath"(): $Path
public "translationKey"(): StringJS
public "translationArgs"(): $List<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLoadingIssue$$Type = ({"translationKey"?: StringJS, "cause"?: $Throwable$$Type, "affectedMod"?: $IModInfo$$Type, "affectedPath"?: $Path$$Type, "affectedModFile"?: $IModFile$$Type, "severity"?: $ModLoadingIssue$Severity$$Type, "translationArgs"?: $List$$Type<(any)>}) | ([translationKey?: StringJS, cause?: $Throwable$$Type, affectedMod?: $IModInfo$$Type, affectedPath?: $Path$$Type, affectedModFile?: $IModFile$$Type, severity?: $ModLoadingIssue$Severity$$Type, translationArgs?: $List$$Type<(any)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModLoadingIssue$$Original = $ModLoadingIssue;}
