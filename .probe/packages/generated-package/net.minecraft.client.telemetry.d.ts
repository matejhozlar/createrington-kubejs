declare module "net.minecraft.client.telemetry.TelemetryEventType" {
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TelemetryEventInstance} from "net.minecraft.client.telemetry.TelemetryEventInstance"
import {$TelemetryPropertyMap$$Type} from "net.minecraft.client.telemetry.TelemetryPropertyMap"
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$TelemetryProperty, $TelemetryProperty$$Type} from "net.minecraft.client.telemetry.TelemetryProperty"
import {$TelemetrySession$$Type} from "com.mojang.authlib.minecraft.TelemetrySession"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TelemetryEvent} from "com.mojang.authlib.minecraft.TelemetryEvent"
import {$TelemetryEventType$Builder} from "net.minecraft.client.telemetry.TelemetryEventType$Builder"

export class $TelemetryEventType {
static readonly "CODEC": $Codec<($TelemetryEventType)>
static readonly "WORLD_LOADED": $TelemetryEventType
static readonly "ADVANCEMENT_MADE": $TelemetryEventType
static readonly "WORLD_UNLOADED": $TelemetryEventType
static readonly "PERFORMANCE_METRICS": $TelemetryEventType
static readonly "GAME_LOAD_TIMES": $TelemetryEventType
static readonly "REGISTRY": $Map<(StringJS), ($TelemetryEventType)>
static readonly "WORLD_LOAD_TIMES": $TelemetryEventType

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<($TelemetryProperty$$Type<(never)>)>, arg3: boolean)

public "toString"(): StringJS
public static "values"(): $List<($TelemetryEventType)>
public static "builder"(arg0: StringJS, arg1: StringJS): $TelemetryEventType$Builder
public "contains"<T>(arg0: $TelemetryProperty$$Type<(T)>): boolean
public "id"(): StringJS
public "properties"(): $List<($TelemetryProperty<(never)>)>
public "export"(arg0: $TelemetrySession$$Type, arg1: $TelemetryPropertyMap$$Type): $TelemetryEvent
public "description"(): $MutableComponent
public "isOptIn"(): boolean
public "title"(): $MutableComponent
public "codec"(): $MapCodec<($TelemetryEventInstance)>
get "optIn"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryEventType$$Type = ($TelemetryEventType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryEventType$$Original = $TelemetryEventType;}
declare module "net.minecraft.client.telemetry.ClientTelemetryManager" {
import {$User$$Type} from "net.minecraft.client.User"
import {$WorldSessionTelemetryManager} from "net.minecraft.client.telemetry.WorldSessionTelemetryManager"
import {$UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Duration$$Type} from "java.time.Duration"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Path} from "java.nio.file.Path"
import {$TelemetryEventSender} from "net.minecraft.client.telemetry.TelemetryEventSender"

export class $ClientTelemetryManager implements $AutoCloseable$$Interface {
constructor(arg0: $Minecraft$$Type, arg1: $UserApiService$$Type, arg2: $User$$Type)

public "close"(): void
public "getOutsideSessionSender"(): $TelemetryEventSender
public "getLogDirectory"(): $Path
public "createWorldSessionManager"(arg0: boolean, arg1: $Duration$$Type, arg2: StringJS): $WorldSessionTelemetryManager
get "outsideSessionSender"(): $TelemetryEventSender
get "logDirectory"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTelemetryManager$$Type = ($ClientTelemetryManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTelemetryManager$$Original = $ClientTelemetryManager;}
declare module "net.minecraft.client.telemetry.TelemetryProperty$Exporter" {
import {$TelemetryPropertyContainer, $TelemetryPropertyContainer$$Type} from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"

export interface $TelemetryProperty$Exporter$$Interface<T> {

(arg0: $TelemetryPropertyContainer, arg1: StringJS, arg2: T): void
}

export class $TelemetryProperty$Exporter<T> implements $TelemetryProperty$Exporter$$Interface {
 "apply"(arg0: $TelemetryPropertyContainer$$Type, arg1: StringJS, arg2: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryProperty$Exporter$$Type<T> = ((arg0: $TelemetryPropertyContainer, arg1: StringJS, arg2: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryProperty$Exporter$$Original<T> = $TelemetryProperty$Exporter<(T)>;}
declare module "net.minecraft.client.telemetry.TelemetryEventType$Builder" {
import {$List$$Type} from "java.util.List"
import {$TelemetryProperty$$Type} from "net.minecraft.client.telemetry.TelemetryProperty"
import {$TelemetryEventType} from "net.minecraft.client.telemetry.TelemetryEventType"

export class $TelemetryEventType$Builder {
constructor(arg0: StringJS, arg1: StringJS)

public "register"(): $TelemetryEventType
public "defineAll"(arg0: $List$$Type<($TelemetryProperty$$Type<(never)>)>): $TelemetryEventType$Builder
public "define"<T>(arg0: $TelemetryProperty$$Type<(T)>): $TelemetryEventType$Builder
public "optIn"(): $TelemetryEventType$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryEventType$Builder$$Type = ($TelemetryEventType$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryEventType$Builder$$Original = $TelemetryEventType$Builder;}
declare module "net.minecraft.client.telemetry.TelemetryPropertyMap" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$TelemetryPropertyMap$Builder} from "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder"
import {$List$$Type} from "java.util.List"
import {$TelemetryProperty, $TelemetryProperty$$Type} from "net.minecraft.client.telemetry.TelemetryProperty"
import {$Set} from "java.util.Set"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $TelemetryPropertyMap {
readonly "entries": $Map<($TelemetryProperty<(never)>), (any)>

constructor(arg0: $Map$$Type<($TelemetryProperty$$Type<(never)>), (any)>)

public "get"<T>(arg0: $TelemetryProperty$$Type<(T)>): T
public "toString"(): StringJS
public static "builder"(): $TelemetryPropertyMap$Builder
public "propertySet"(): $Set<($TelemetryProperty<(never)>)>
public static "createCodec"(arg0: $List$$Type<($TelemetryProperty$$Type<(never)>)>): $MapCodec<($TelemetryPropertyMap)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryPropertyMap$$Type = ($TelemetryPropertyMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryPropertyMap$$Original = $TelemetryPropertyMap;}
declare module "net.minecraft.client.telemetry.TelemetryEventSender" {
import {$TelemetryPropertyMap$Builder, $TelemetryPropertyMap$Builder$$Type} from "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TelemetryEventType, $TelemetryEventType$$Type} from "net.minecraft.client.telemetry.TelemetryEventType"

export interface $TelemetryEventSender$$Interface {

(arg0: $TelemetryEventType, arg1: $Consumer<($TelemetryPropertyMap$Builder)>): void
}

export class $TelemetryEventSender implements $TelemetryEventSender$$Interface {
static readonly "DISABLED": $TelemetryEventSender

 "decorate"(arg0: $Consumer$$Type<($TelemetryPropertyMap$Builder)>): $TelemetryEventSender
 "send"(arg0: $TelemetryEventType$$Type, arg1: $Consumer$$Type<($TelemetryPropertyMap$Builder)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryEventSender$$Type = ((arg0: $TelemetryEventType, arg1: $Consumer<($TelemetryPropertyMap$Builder)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryEventSender$$Original = $TelemetryEventSender;}
declare module "net.minecraft.client.telemetry.WorldSessionTelemetryManager" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Duration$$Type} from "java.time.Duration"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$TelemetryEventSender$$Type} from "net.minecraft.client.telemetry.TelemetryEventSender"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"

export class $WorldSessionTelemetryManager {
constructor(arg0: $TelemetryEventSender$$Type, arg1: boolean, arg2: $Duration$$Type, arg3: StringJS)

public "setTime"(arg0: long): void
public "tick"(): void
public "onDisconnect"(): void
public "onServerBrandReceived"(arg0: StringJS): void
public "onPlayerInfoReceived"(arg0: $GameType$$Type, arg1: boolean): void
public "onAdvancementDone"(arg0: $Level$$Type, arg1: $AdvancementHolder$$Type): void
public "worldSessionStart"(): void
set "time"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSessionTelemetryManager$$Type = ($WorldSessionTelemetryManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSessionTelemetryManager$$Original = $WorldSessionTelemetryManager;}
declare module "net.minecraft.client.telemetry.TelemetryEventInstance" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$TelemetryPropertyMap, $TelemetryPropertyMap$$Type} from "net.minecraft.client.telemetry.TelemetryPropertyMap"
import {$TelemetrySession$$Type} from "com.mojang.authlib.minecraft.TelemetrySession"
import {$TelemetryEvent} from "com.mojang.authlib.minecraft.TelemetryEvent"
import {$TelemetryEventType, $TelemetryEventType$$Type} from "net.minecraft.client.telemetry.TelemetryEventType"
import {$Record} from "java.lang.Record"

export class $TelemetryEventInstance extends $Record {
static readonly "CODEC": $Codec<($TelemetryEventInstance)>

constructor(arg0: $TelemetryEventType$$Type, arg1: $TelemetryPropertyMap$$Type)

public "type"(): $TelemetryEventType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $TelemetryPropertyMap
public "export"(arg0: $TelemetrySession$$Type): $TelemetryEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryEventInstance$$Type = ({"properties"?: $TelemetryPropertyMap$$Type, "type"?: $TelemetryEventType$$Type}) | ([properties?: $TelemetryPropertyMap$$Type, type?: $TelemetryEventType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryEventInstance$$Original = $TelemetryEventInstance;}
declare module "net.minecraft.client.telemetry.events.GameLoadTimesEvent$Measurement" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $GameLoadTimesEvent$Measurement extends $Record {
static readonly "CODEC": $Codec<($GameLoadTimesEvent$Measurement)>

constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "millis"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameLoadTimesEvent$Measurement$$Type = ({"millis"?: integer}) | ([millis?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameLoadTimesEvent$Measurement$$Original = $GameLoadTimesEvent$Measurement;}
declare module "net.minecraft.client.telemetry.TelemetryProperty$GameMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $TelemetryProperty$GameMode extends $Enum<($TelemetryProperty$GameMode)> implements $StringRepresentable$$Interface {
static readonly "SURVIVAL": $TelemetryProperty$GameMode
static readonly "SPECTATOR": $TelemetryProperty$GameMode
static readonly "CODEC": $Codec<($TelemetryProperty$GameMode)>
static readonly "CREATIVE": $TelemetryProperty$GameMode
static readonly "ADVENTURE": $TelemetryProperty$GameMode
static readonly "HARDCORE": $TelemetryProperty$GameMode

public static "values"(): ($TelemetryProperty$GameMode)[]
public static "valueOf"(arg0: StringJS): $TelemetryProperty$GameMode
public "id"(): integer
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryProperty$GameMode$$Type = (("survival") | ("creative") | ("adventure") | ("spectator") | ("hardcore"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryProperty$GameMode$$Original = $TelemetryProperty$GameMode;}
declare module "net.minecraft.client.telemetry.TelemetryProperty$ServerType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $TelemetryProperty$ServerType extends $Enum<($TelemetryProperty$ServerType)> implements $StringRepresentable$$Interface {
static readonly "OTHER": $TelemetryProperty$ServerType
static readonly "CODEC": $Codec<($TelemetryProperty$ServerType)>
static readonly "LOCAL": $TelemetryProperty$ServerType
static readonly "REALM": $TelemetryProperty$ServerType

public static "values"(): ($TelemetryProperty$ServerType)[]
public static "valueOf"(arg0: StringJS): $TelemetryProperty$ServerType
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryProperty$ServerType$$Type = (("realm") | ("local") | ("server"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryProperty$ServerType$$Original = $TelemetryProperty$ServerType;}
declare module "net.minecraft.client.telemetry.TelemetryProperty" {
import {$TelemetryProperty$ServerType} from "net.minecraft.client.telemetry.TelemetryProperty$ServerType"
import {$TelemetryPropertyContainer$$Type} from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"
import {$GameLoadTimesEvent$Measurement} from "net.minecraft.client.telemetry.events.GameLoadTimesEvent$Measurement"
import {$TelemetryPropertyMap$$Type} from "net.minecraft.client.telemetry.TelemetryPropertyMap"
import {$UUID} from "java.util.UUID"
import {$LongList} from "it.unimi.dsi.fastutil.longs.LongList"
import {$TelemetryProperty$GameMode} from "net.minecraft.client.telemetry.TelemetryProperty$GameMode"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$TelemetryProperty$Exporter, $TelemetryProperty$Exporter$$Type} from "net.minecraft.client.telemetry.TelemetryProperty$Exporter"
import {$Instant} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $TelemetryProperty<T> extends $Record {
static readonly "RENDER_TIME_SAMPLES": $TelemetryProperty<($LongList)>
static readonly "LOAD_TIME_BOOTSTRAP_MS": $TelemetryProperty<($GameLoadTimesEvent$Measurement)>
static readonly "USED_MEMORY_SAMPLES": $TelemetryProperty<($LongList)>
static readonly "LOAD_TIME_TOTAL_TIME_MS": $TelemetryProperty<($GameLoadTimesEvent$Measurement)>
static readonly "GAME_VERSION": $TelemetryProperty<(StringJS)>
static readonly "EVENT_TIMESTAMP_UTC": $TelemetryProperty<($Instant)>
static readonly "USER_ID": $TelemetryProperty<(StringJS)>
static readonly "OPT_IN": $TelemetryProperty<(boolean)>
static readonly "WORLD_SESSION_ID": $TelemetryProperty<($UUID)>
static readonly "MINECRAFT_SESSION_ID": $TelemetryProperty<($UUID)>
static readonly "DEDICATED_MEMORY_KB": $TelemetryProperty<(integer)>
static readonly "PLATFORM": $TelemetryProperty<(StringJS)>
static readonly "GAME_MODE": $TelemetryProperty<($TelemetryProperty$GameMode)>
static readonly "CLIENT_ID": $TelemetryProperty<(StringJS)>
static readonly "TICKS_SINCE_LOAD": $TelemetryProperty<(integer)>
static readonly "SECONDS_SINCE_LOAD": $TelemetryProperty<(integer)>
static readonly "SERVER_MODDED": $TelemetryProperty<(boolean)>
static readonly "OPERATING_SYSTEM": $TelemetryProperty<(StringJS)>
static readonly "ADVANCEMENT_GAME_TIME": $TelemetryProperty<(long)>
static readonly "CLIENT_MODDED": $TelemetryProperty<(boolean)>
static readonly "NUMBER_OF_SAMPLES": $TelemetryProperty<(integer)>
static readonly "LAUNCHER_NAME": $TelemetryProperty<(StringJS)>
static readonly "NEW_WORLD": $TelemetryProperty<(boolean)>
static readonly "SERVER_TYPE": $TelemetryProperty<($TelemetryProperty$ServerType)>
static readonly "REALMS_MAP_CONTENT": $TelemetryProperty<(StringJS)>
static readonly "RENDER_DISTANCE": $TelemetryProperty<(integer)>
static readonly "LOAD_TIME_PRE_WINDOW_MS": $TelemetryProperty<($GameLoadTimesEvent$Measurement)>
static readonly "ADVANCEMENT_ID": $TelemetryProperty<(StringJS)>
static readonly "LOAD_TIME_LOADING_OVERLAY_MS": $TelemetryProperty<($GameLoadTimesEvent$Measurement)>
static readonly "FRAME_RATE_SAMPLES": $TelemetryProperty<($LongList)>
static readonly "WORLD_LOAD_TIME_MS": $TelemetryProperty<(integer)>

constructor(arg0: StringJS, arg1: StringJS, arg2: $Codec$$Type<(T)>, arg3: $TelemetryProperty$Exporter$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public static "create"<T>(arg0: StringJS, arg1: StringJS, arg2: $Codec$$Type<(T)>, arg3: $TelemetryProperty$Exporter$$Type<(T)>): $TelemetryProperty<(T)>
public static "makeLong"(arg0: StringJS, arg1: StringJS): $TelemetryProperty<(long)>
public static "string"(arg0: StringJS, arg1: StringJS): $TelemetryProperty<(StringJS)>
public "export"(arg0: $TelemetryPropertyMap$$Type, arg1: $TelemetryPropertyContainer$$Type): void
public static "integer"(arg0: StringJS, arg1: StringJS): $TelemetryProperty<(integer)>
public "exporter"(): $TelemetryProperty$Exporter<(T)>
public static "longSamples"(arg0: StringJS, arg1: StringJS): $TelemetryProperty<($LongList)>
public static "bool"(arg0: StringJS, arg1: StringJS): $TelemetryProperty<(boolean)>
public "title"(): $MutableComponent
public static "uuid"(arg0: StringJS, arg1: StringJS): $TelemetryProperty<($UUID)>
public "codec"(): $Codec<(T)>
public "exportKey"(): StringJS
public static "gameLoadMeasurement"(arg0: StringJS, arg1: StringJS): $TelemetryProperty<($GameLoadTimesEvent$Measurement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryProperty$$Type<T> = ({"exportKey"?: StringJS, "exporter"?: $TelemetryProperty$Exporter$$Type<(T)>, "codec"?: $Codec$$Type<(T)>, "id"?: StringJS}) | ([exportKey?: StringJS, exporter?: $TelemetryProperty$Exporter$$Type<(T)>, codec?: $Codec$$Type<(T)>, id?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryProperty$$Original<T> = $TelemetryProperty<(T)>;}
declare module "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder" {
import {$TelemetryPropertyMap, $TelemetryPropertyMap$$Type} from "net.minecraft.client.telemetry.TelemetryPropertyMap"
import {$TelemetryProperty$$Type} from "net.minecraft.client.telemetry.TelemetryProperty"

export class $TelemetryPropertyMap$Builder {
constructor()

public "put"<T>(arg0: $TelemetryProperty$$Type<(T)>, arg1: T): $TelemetryPropertyMap$Builder
public "putAll"(arg0: $TelemetryPropertyMap$$Type): $TelemetryPropertyMap$Builder
public "build"(): $TelemetryPropertyMap
public "putIfNotNull"<T>(arg0: $TelemetryProperty$$Type<(T)>, arg1: T): $TelemetryPropertyMap$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryPropertyMap$Builder$$Type = ($TelemetryPropertyMap$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryPropertyMap$Builder$$Original = $TelemetryPropertyMap$Builder;}
