declare module "net.neoforged.neoforge.server.permission.handler.IPermissionHandler" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$UUID$$Type} from "java.util.UUID"
import {$PermissionNode, $PermissionNode$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionNode"
import {$Set} from "java.util.Set"
import {$PermissionDynamicContext$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionDynamicContext"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $IPermissionHandler$$Interface {
get "registeredNodes"(): $Set<($PermissionNode<(never)>)>
get "identifier"(): $ResourceLocation
}

export class $IPermissionHandler implements $IPermissionHandler$$Interface {
 "getPermission"<T>(arg0: $ServerPlayer$$Type, arg1: $PermissionNode$$Type<(T)>, ...arg2: ($PermissionDynamicContext$$Type<(never)>)[]): T
 "getOfflinePermission"<T>(arg0: $UUID$$Type, arg1: $PermissionNode$$Type<(T)>, ...arg2: ($PermissionDynamicContext$$Type<(never)>)[]): T
 "getRegisteredNodes"(): $Set<($PermissionNode<(never)>)>
 "getIdentifier"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPermissionHandler$$Type = ($IPermissionHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPermissionHandler$$Original = $IPermissionHandler;}
declare module "net.neoforged.neoforge.server.permission.events.PermissionGatherEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $PermissionGatherEvent extends $Event {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionGatherEvent$$Type = ($PermissionGatherEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionGatherEvent$$Original = $PermissionGatherEvent;}
declare module "net.neoforged.neoforge.server.permission.nodes.PermissionNode$PermissionResolver" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PermissionDynamicContext, $PermissionDynamicContext$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionDynamicContext"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $PermissionNode$PermissionResolver$$Interface<T> {

(arg0: $ServerPlayer, arg1: $UUID, ...arg2: ($PermissionDynamicContext<(never)>)[]): T
}

export class $PermissionNode$PermissionResolver<T> implements $PermissionNode$PermissionResolver$$Interface {
 "resolve"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type, ...arg2: ($PermissionDynamicContext$$Type<(never)>)[]): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionNode$PermissionResolver$$Type<T> = ((arg0: $ServerPlayer, arg1: $UUID, arg2: ($PermissionDynamicContext<(never)>)[]) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionNode$PermissionResolver$$Original<T> = $PermissionNode$PermissionResolver<(T)>;}
declare module "net.neoforged.neoforge.server.permission.nodes.PermissionDynamicContextKey" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$PermissionDynamicContext} from "net.neoforged.neoforge.server.permission.nodes.PermissionDynamicContext"
import {$Record} from "java.lang.Record"

export class $PermissionDynamicContextKey<T> extends $Record {
constructor(typeToken: $Class$$Type<(T)>, name: StringJS, serializer: $Function$$Type<(T), (StringJS)>)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "typeToken"(): $Class<(T)>
public "createContext"(arg0: T): $PermissionDynamicContext<(T)>
public "serializer"(): $Function<(T), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionDynamicContextKey$$Type<T> = ({"serializer"?: $Function$$Type<(T), (StringJS)>, "typeToken"?: $Class$$Type<(T)>, "name"?: StringJS}) | ([serializer?: $Function$$Type<(T), (StringJS)>, typeToken?: $Class$$Type<(T)>, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionDynamicContextKey$$Original<T> = $PermissionDynamicContextKey<(T)>;}
declare module "net.neoforged.neoforge.server.permission.nodes.PermissionDynamicContext" {
import {$PermissionDynamicContextKey} from "net.neoforged.neoforge.server.permission.nodes.PermissionDynamicContextKey"

export class $PermissionDynamicContext<T> {
public "getSerializedValue"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getValue"(): T
public "getDynamic"(): $PermissionDynamicContextKey<(T)>
get "serializedValue"(): StringJS
get "value"(): T
get "dynamic"(): $PermissionDynamicContextKey<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionDynamicContext$$Type<T> = ($PermissionDynamicContext<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionDynamicContext$$Original<T> = $PermissionDynamicContext<(T)>;}
declare module "net.neoforged.neoforge.server.permission.nodes.PermissionType" {
import {$Class} from "java.lang.Class"

export class $PermissionType<T> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "typeName"(): StringJS
public "typeToken"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionType$$Type<T> = ($PermissionType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionType$$Original<T> = $PermissionType<(T)>;}
declare module "net.neoforged.neoforge.server.permission.events.PermissionGatherEvent$Handler" {
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPermissionHandlerFactory, $IPermissionHandlerFactory$$Type} from "net.neoforged.neoforge.server.permission.handler.IPermissionHandlerFactory"
import {$PermissionGatherEvent} from "net.neoforged.neoforge.server.permission.events.PermissionGatherEvent"

export class $PermissionGatherEvent$Handler extends $PermissionGatherEvent {
constructor()

public "addPermissionHandler"(arg0: $ResourceLocation$$Type, arg1: $IPermissionHandlerFactory$$Type): void
public "getAvailablePermissionHandlerFactories"(): $Map<($ResourceLocation), ($IPermissionHandlerFactory)>
get "availablePermissionHandlerFactories"(): $Map<($ResourceLocation), ($IPermissionHandlerFactory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionGatherEvent$Handler$$Type = ($PermissionGatherEvent$Handler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionGatherEvent$Handler$$Original = $PermissionGatherEvent$Handler;}
declare module "net.neoforged.neoforge.server.permission.nodes.PermissionNode" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PermissionDynamicContextKey, $PermissionDynamicContextKey$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionDynamicContextKey"
import {$PermissionNode$PermissionResolver, $PermissionNode$PermissionResolver$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionNode$PermissionResolver"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PermissionType, $PermissionType$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionType"

export class $PermissionNode<T> {
constructor(arg0: $ResourceLocation$$Type, arg1: $PermissionType$$Type<(T)>, arg2: $PermissionNode$PermissionResolver$$Type<(T)>, ...arg3: ($PermissionDynamicContextKey$$Type)[])
constructor(arg0: StringJS, arg1: StringJS, arg2: $PermissionType$$Type<(T)>, arg3: $PermissionNode$PermissionResolver$$Type<(T)>, ...arg4: ($PermissionDynamicContextKey$$Type)[])

public "getDescription"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getType"(): $PermissionType<(T)>
public "getNodeName"(): StringJS
public "setInformation"(arg0: $Component$$Type, arg1: $Component$$Type): $PermissionNode
public "getDefaultResolver"(): $PermissionNode$PermissionResolver<(T)>
public "getDynamics"(): ($PermissionDynamicContextKey<(never)>)[]
public "getReadableName"(): $Component
get "description"(): $Component
get "type"(): $PermissionType<(T)>
get "nodeName"(): StringJS
get "defaultResolver"(): $PermissionNode$PermissionResolver<(T)>
get "dynamics"(): ($PermissionDynamicContextKey<(never)>)[]
get "readableName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionNode$$Type<T> = ($PermissionNode<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionNode$$Original<T> = $PermissionNode<(T)>;}
declare module "net.neoforged.neoforge.server.permission.handler.IPermissionHandlerFactory" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IPermissionHandler, $IPermissionHandler$$Type} from "net.neoforged.neoforge.server.permission.handler.IPermissionHandler"
import {$PermissionNode, $PermissionNode$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionNode"

export interface $IPermissionHandlerFactory$$Interface {

(arg0: $Collection<($PermissionNode<(never)>)>): $IPermissionHandler$$Type
}

export class $IPermissionHandlerFactory implements $IPermissionHandlerFactory$$Interface {
 "create"(arg0: $Collection$$Type<($PermissionNode$$Type<(never)>)>): $IPermissionHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPermissionHandlerFactory$$Type = ((arg0: $Collection<($PermissionNode<(never)>)>) => $IPermissionHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPermissionHandlerFactory$$Original = $IPermissionHandlerFactory;}
declare module "net.neoforged.neoforge.server.permission.events.PermissionGatherEvent$Nodes" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$PermissionNode, $PermissionNode$$Type} from "net.neoforged.neoforge.server.permission.nodes.PermissionNode"
import {$PermissionGatherEvent} from "net.neoforged.neoforge.server.permission.events.PermissionGatherEvent"

export class $PermissionGatherEvent$Nodes extends $PermissionGatherEvent {
constructor()

public "addNodes"(arg0: $Iterable$$Type<($PermissionNode$$Type<(never)>)>): void
public "addNodes"(...arg0: ($PermissionNode$$Type<(never)>)[]): void
public "getNodes"(): $Collection<($PermissionNode<(never)>)>
get "nodes"(): $Collection<($PermissionNode<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionGatherEvent$Nodes$$Type = ($PermissionGatherEvent$Nodes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionGatherEvent$Nodes$$Original = $PermissionGatherEvent$Nodes;}
