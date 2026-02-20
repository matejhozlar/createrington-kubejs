declare module "com.mojang.realmsclient.gui.RealmsDataFetcher$ServerListData" {
import {$RealmsServer, $RealmsServer$$Type} from "com.mojang.realmsclient.dto.RealmsServer"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $RealmsDataFetcher$ServerListData extends $Record {
constructor(arg0: $List$$Type<($RealmsServer$$Type)>, arg1: $List$$Type<($RealmsServer$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "serverList"(): $List<($RealmsServer)>
public "availableSnapshotServers"(): $List<($RealmsServer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsDataFetcher$ServerListData$$Type = ({"serverList"?: $List$$Type<($RealmsServer$$Type)>, "availableSnapshotServers"?: $List$$Type<($RealmsServer$$Type)>}) | ([serverList?: $List$$Type<($RealmsServer$$Type)>, availableSnapshotServers?: $List$$Type<($RealmsServer$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsDataFetcher$ServerListData$$Original = $RealmsDataFetcher$ServerListData;}
declare module "com.mojang.realmsclient.gui.RealmsDataFetcher" {
import {$DataFetcher$Task} from "com.mojang.realmsclient.gui.task.DataFetcher$Task"
import {$RealmsClient$$Type} from "com.mojang.realmsclient.client.RealmsClient"
import {$RealmsServerPlayerLists} from "com.mojang.realmsclient.dto.RealmsServerPlayerLists"
import {$List} from "java.util.List"
import {$RealmsNewsManager} from "com.mojang.realmsclient.gui.RealmsNewsManager"
import {$DataFetcher} from "com.mojang.realmsclient.gui.task.DataFetcher"
import {$RealmsNews} from "com.mojang.realmsclient.dto.RealmsNews"
import {$RealmsDataFetcher$ServerListData} from "com.mojang.realmsclient.gui.RealmsDataFetcher$ServerListData"
import {$RealmsNotification} from "com.mojang.realmsclient.dto.RealmsNotification"

export class $RealmsDataFetcher {
readonly "dataFetcher": $DataFetcher
readonly "notificationsTask": $DataFetcher$Task<($List<($RealmsNotification)>)>
readonly "pendingInvitesTask": $DataFetcher$Task<(integer)>
readonly "trialAvailabilityTask": $DataFetcher$Task<(boolean)>
readonly "newsTask": $DataFetcher$Task<($RealmsNews)>
readonly "newsManager": $RealmsNewsManager
readonly "serverListUpdateTask": $DataFetcher$Task<($RealmsDataFetcher$ServerListData)>
readonly "onlinePlayersTask": $DataFetcher$Task<($RealmsServerPlayerLists)>

constructor(arg0: $RealmsClient$$Type)

public "getTasks"(): $List<($DataFetcher$Task<(never)>)>
get "tasks"(): $List<($DataFetcher$Task<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsDataFetcher$$Type = ($RealmsDataFetcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsDataFetcher$$Original = $RealmsDataFetcher;}
declare module "com.mojang.realmsclient.gui.task.RepeatedDelayStrategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RepeatedDelayStrategy$$Interface {
}

export class $RepeatedDelayStrategy implements $RepeatedDelayStrategy$$Interface {
static readonly "CONSTANT": $RepeatedDelayStrategy

static "exponentialBackoff"(arg0: integer): $RepeatedDelayStrategy
 "delayCyclesAfterFailure"(): long
 "delayCyclesAfterSuccess"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatedDelayStrategy$$Type = ($RepeatedDelayStrategy);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepeatedDelayStrategy$$Original = $RepeatedDelayStrategy;}
declare module "com.mojang.realmsclient.gui.task.DataFetcher$Task" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataFetcher$Task<T> {
public "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$Task$$Type<T> = ($DataFetcher$Task<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataFetcher$Task$$Original<T> = $DataFetcher$Task<(T)>;}
declare module "com.mojang.realmsclient.gui.task.DataFetcher$Subscription" {
import {$DataFetcher$Task$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher$Task"
import {$DataFetcher$$Type} from "com.mojang.realmsclient.gui.task.DataFetcher"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DataFetcher$Subscription {
constructor(arg0: $DataFetcher$$Type)

public "reset"(): void
public "tick"(): void
public "subscribe"<T>(arg0: $DataFetcher$Task$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
public "forceUpdate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$Subscription$$Type = ($DataFetcher$Subscription);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataFetcher$Subscription$$Original = $DataFetcher$Subscription;}
declare module "com.mojang.realmsclient.gui.RealmsNewsManager" {
import {$RealmsPersistence$$Type} from "com.mojang.realmsclient.util.RealmsPersistence"
import {$RealmsNews$$Type} from "com.mojang.realmsclient.dto.RealmsNews"

export class $RealmsNewsManager {
constructor(arg0: $RealmsPersistence$$Type)

public "newsLink"(): StringJS
public "updateUnreadNews"(arg0: $RealmsNews$$Type): void
public "hasUnreadNews"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNewsManager$$Type = ($RealmsNewsManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsNewsManager$$Original = $RealmsNewsManager;}
declare module "com.mojang.realmsclient.gui.task.DataFetcher" {
import {$DataFetcher$Task} from "com.mojang.realmsclient.gui.task.DataFetcher$Task"
import {$RepeatedDelayStrategy$$Type} from "com.mojang.realmsclient.gui.task.RepeatedDelayStrategy"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$DataFetcher$Subscription} from "com.mojang.realmsclient.gui.task.DataFetcher$Subscription"
import {$Duration$$Type} from "java.time.Duration"
import {$TimeSource$$Type} from "net.minecraft.util.TimeSource"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export class $DataFetcher {
constructor(arg0: $Executor$$Type, arg1: $TimeUnit$$Type, arg2: $TimeSource$$Type)

public "createSubscription"(): $DataFetcher$Subscription
public "createTask"<T>(arg0: StringJS, arg1: $Callable$$Type<(T)>, arg2: $Duration$$Type, arg3: $RepeatedDelayStrategy$$Type): $DataFetcher$Task<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$$Type = ($DataFetcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataFetcher$$Original = $DataFetcher;}
