declare module "net.neoforged.fml.common.asm.enumextension.ExtensionInfo" {
import {$Enum} from "java.lang.Enum"
import {$Class$$Type} from "java.lang.Class"
import {$NetworkedEnum$NetworkCheck, $NetworkedEnum$NetworkCheck$$Type} from "net.neoforged.fml.common.asm.enumextension.NetworkedEnum$NetworkCheck"
import {$Record} from "java.lang.Record"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ExtensionInfo extends $Record {
constructor(extended: boolean, vanillaCount: integer, totalCount: integer, netCheck: $NetworkedEnum$NetworkCheck$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "nonExtended"<T extends $Enum<(object)>>(arg0: $Class$$Type<(T)>): $ExtensionInfo
public "vanillaCount"(): integer
public "netCheck"(): $NetworkedEnum$NetworkCheck
public "totalCount"(): integer
public "extended"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtensionInfo$$Type = ({"netCheck"?: $NetworkedEnum$NetworkCheck$$Type, "extended"?: boolean, "totalCount"?: integer, "vanillaCount"?: integer}) | ([netCheck?: $NetworkedEnum$NetworkCheck$$Type, extended?: boolean, totalCount?: integer, vanillaCount?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtensionInfo$$Original = $ExtensionInfo;}
declare module "net.neoforged.fml.common.asm.enumextension.NetworkedEnum$NetworkCheck" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NetworkedEnum$NetworkCheck extends $Enum<($NetworkedEnum$NetworkCheck)> {
static readonly "CLIENTBOUND": $NetworkedEnum$NetworkCheck
static readonly "BIDIRECTIONAL": $NetworkedEnum$NetworkCheck
static readonly "SERVERBOUND": $NetworkedEnum$NetworkCheck

public static "values"(): ($NetworkedEnum$NetworkCheck)[]
public static "valueOf"(arg0: StringJS): $NetworkedEnum$NetworkCheck
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedEnum$NetworkCheck$$Type = (("clientbound") | ("serverbound") | ("bidirectional"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedEnum$NetworkCheck$$Original = $NetworkedEnum$NetworkCheck;}
declare module "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensibleEnum$$Interface {
}

export class $IExtensibleEnum implements $IExtensibleEnum$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensibleEnum$$Type = ($IExtensibleEnum);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IExtensibleEnum$$Original = $IExtensibleEnum;}
