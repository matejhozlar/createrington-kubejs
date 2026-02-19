declare module "dev.latvian.apps.tinyserver.http.file.FileResponseHandler" {
import {$HTTPResponse, $HTTPResponse$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPResponse"
import {$Duration$$Type} from "java.time.Duration"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $FileResponseHandler$$Interface {

(response: $HTTPResponse, directory: boolean, path: $Path): $HTTPResponse$$Type
}

export class $FileResponseHandler implements $FileResponseHandler$$Interface {
static readonly "CACHE_5_MIN": $FileResponseHandler
static readonly "CACHE_1_HOUR": $FileResponseHandler

static "cache"(duration: $Duration$$Type, styleAndScriptDuration: $Duration$$Type, gzip: boolean): $FileResponseHandler
static "cache"(duration: $Duration$$Type): $FileResponseHandler
 "apply"(response: $HTTPResponse$$Type, directory: boolean, path: $Path$$Type): $HTTPResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileResponseHandler$$Type = ((response: $HTTPResponse, directory: boolean, path: $Path) => $HTTPResponse$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileResponseHandler$$Original = $FileResponseHandler;}
declare module "dev.latvian.apps.tinyserver.ws.WSSession" {
import {$Frame$$Type} from "dev.latvian.apps.tinyserver.ws.Frame"
import {$WSCloseStatus$$Type} from "dev.latvian.apps.tinyserver.ws.WSCloseStatus"
import {$HTTPUpgrade$$Interface} from "dev.latvian.apps.tinyserver.http.HTTPUpgrade"
import {$UUID} from "java.util.UUID"
import {$StatusCode$$Type} from "dev.latvian.apps.tinyserver.StatusCode"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$HTTPRequest, $HTTPRequest$$Type} from "dev.latvian.apps.tinyserver.http.HTTPRequest"

export class $WSSession<REQ extends $HTTPRequest> implements $HTTPUpgrade$$Interface<(REQ)> {
constructor()

public "id"(): $UUID
public "start"(req: REQ): void
public "close"(status: $WSCloseStatus$$Type, reason: StringJS): void
public "protocol"(): StringJS
public "onClose"(reason: $StatusCode$$Type, remote: boolean): void
public "isClosed"(): boolean
public "onOpen"(req: REQ): void
public "sendPing"(payload: (byte)[]): void
public "sendText"(payload: StringJS): void
public "onPong"(payload: (byte)[]): void
public "onPing"(payload: (byte)[]): void
public "sendBinary"(payload: (byte)[]): void
public "send"(frame: $Frame$$Type): void
public "onError"(error: $Throwable$$Type): void
public "onTextMessage"(message: StringJS): void
public "onBinaryMessage"(message: (byte)[]): void
get "closed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WSSession$$Type<REQ> = ($WSSession<(REQ)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WSSession$$Original<REQ> = $WSSession<(REQ)>;}
declare module "dev.latvian.apps.tinyserver.HTTPServer" {
import {$WSSession} from "dev.latvian.apps.tinyserver.ws.WSSession"
import {$IntStream$$Type} from "java.util.stream.IntStream"
import {$HTTPMethod$$Type} from "dev.latvian.apps.tinyserver.http.HTTPMethod"
import {$HTTPHandler$$Type} from "dev.latvian.apps.tinyserver.http.HTTPHandler"
import {$ServerRegistry$$Interface} from "dev.latvian.apps.tinyserver.ServerRegistry"
import {$WSSessionFactory$$Type} from "dev.latvian.apps.tinyserver.ws.WSSessionFactory"
import {$Duration$$Type} from "java.time.Duration"
import {$Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HTTPConnection} from "dev.latvian.apps.tinyserver.HTTPConnection"
import {$FileResponseHandler$$Type} from "dev.latvian.apps.tinyserver.http.file.FileResponseHandler"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$HTTPPathHandler} from "dev.latvian.apps.tinyserver.http.HTTPPathHandler"
import {$Set} from "java.util.Set"
import {$HTTPRequest, $HTTPRequest$$Type} from "dev.latvian.apps.tinyserver.http.HTTPRequest"
import {$WSHandler} from "dev.latvian.apps.tinyserver.ws.WSHandler"
import {$HTTPPayload} from "dev.latvian.apps.tinyserver.http.response.HTTPPayload"
import {$Path$$Type} from "java.nio.file.Path"
import {$Stream} from "java.util.stream.Stream"

export class $HTTPServer<REQ extends $HTTPRequest> implements $Runnable$$Interface, $ServerRegistry$$Interface<(REQ)> {
constructor(requestFactory: $Supplier$$Type<(REQ)>)

public "run"(): void
public "setDaemon"(daemon: boolean): void
public "start"(): integer
public "stop"(): void
public "handlers"(): $Stream<($HTTPPathHandler<(REQ)>)>
public "isRunning"(): boolean
public "setPort"(range: $IntStream$$Type): void
public "setPort"(port: integer): void
public "setAddress"(address: StringJS): void
public "createBuilder"(req: REQ, handler: $HTTPHandler$$Type<(REQ)>): $HTTPPayload
public "setBufferSize"(bufferSize: integer): void
public "connections"(): $Set<($HTTPConnection<(REQ)>)>
public "http"(method: $HTTPMethod$$Type, path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
public "setServerName"(name: StringJS): void
public "setKeepAliveTimeout"(duration: $Duration$$Type): void
public "setMaxKeepAliveConnections"(max: integer): void
public "get"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
public "put"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
public "delete"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
public "patch"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
public "ws"<WSS extends $WSSession<(object)>>(path: StringJS, factory: $WSSessionFactory$$Type<(REQ), (WSS)>): $WSHandler<(REQ), (WSS)>
public "ws"<WSS extends $WSSession<(object)>>(path: StringJS): $WSHandler<(REQ), (WSS)>
public "post"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
public "redirect"(path: StringJS, redirect: StringJS): void
public "singleFile"(path: StringJS, file: $Path$$Type, responseHandler: $FileResponseHandler$$Type): void
public "dynamicFiles"(path: StringJS, directory: $Path$$Type, responseHandler: $FileResponseHandler$$Type, autoIndex: boolean): void
public "staticFiles"(path: StringJS, directory: $Path$$Type, responseHandler: $FileResponseHandler$$Type, autoIndex: boolean): void
public "acceptPostTask"(path: StringJS, task: $Runnable$$Type): void
public "acceptPostString"(path: StringJS, handler: $Consumer$$Type<(StringJS)>): void
set "daemon"(value: boolean)
get "running"(): boolean
set "port"(value: $IntStream$$Type)
set "port"(value: integer)
set "address"(value: StringJS)
set "bufferSize"(value: integer)
set "serverName"(value: StringJS)
set "keepAliveTimeout"(value: $Duration$$Type)
set "maxKeepAliveConnections"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPServer$$Type<REQ> = ($HTTPServer<(REQ)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPServer$$Original<REQ> = $HTTPServer<(REQ)>;}
declare module "dev.latvian.apps.tinyserver.http.HTTPRequest" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$HTTPMethod, $HTTPMethod$$Type} from "dev.latvian.apps.tinyserver.http.HTTPMethod"
import {$CompiledPath$$Type} from "dev.latvian.apps.tinyserver.CompiledPath"
import {$List, $List$$Type} from "java.util.List"
import {$HTTPHandler$$Type} from "dev.latvian.apps.tinyserver.http.HTTPHandler"
import {$OptionalString, $OptionalString$$Type} from "dev.latvian.apps.tinyserver.OptionalString"
import {$Body} from "dev.latvian.apps.tinyserver.http.Body"
import {$HTTPResponse, $HTTPResponse$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPResponse"
import {$HTTPConnection, $HTTPConnection$$Type} from "dev.latvian.apps.tinyserver.HTTPConnection"
import {$HTTPServer} from "dev.latvian.apps.tinyserver.HTTPServer"
import {$Header, $Header$$Type} from "dev.latvian.apps.tinyserver.http.Header"
import {$Set} from "java.util.Set"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$HTTPPayload$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPPayload"
import {$ByteBuffer} from "java.nio.ByteBuffer"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $HTTPRequest {
constructor()

public "handleResponse"(payload: $HTTPPayload$$Type, response: $HTTPResponse$$Type, error: $Throwable$$Type): $HTTPResponse
public "method"(): $HTTPMethod
public "init"(path: StringJS, pathParts: (StringJS)[], compiledPath: $CompiledPath$$Type, headers: $List$$Type<($Header$$Type)>, queryString: StringJS, query: $Map$$Type<(StringJS), ($OptionalString$$Type)>): void
public "startTime"(): $Instant
public "query"(): $Map<(StringJS), ($OptionalString)>
public "query"(key: StringJS): $OptionalString
public "path"(): StringJS
public "header"(name: StringJS): $OptionalString
public "country"(): StringJS
public "connection"(): $HTTPConnection<(never)>
public "pathParts"(): (StringJS)[]
public "cookie"(key: StringJS): $OptionalString
public "headers"(): $List<($Header)>
public "variables"(): $Map<(StringJS), ($OptionalString)>
public "mainBody"(): $Body
public "server"(): $HTTPServer<(never)>
public "ip"(): StringJS
public "preInit"(session: $HTTPConnection$$Type<(never)>, startTime: $Instant$$Type, method: $HTTPMethod$$Type): void
public "ipv6"(): StringJS
public "userAgent"(): StringJS
public "afterInit"(): void
public "cookies"(): $Map<(StringJS), ($OptionalString)>
public "fullPath"(): StringJS
public "variable"(name: StringJS): $OptionalString
public "afterResponse"(payload: $HTTPPayload$$Type, response: $HTTPResponse$$Type, handler: $HTTPHandler$$Type<(never)>, error: $Throwable$$Type): void
public "queryString"(): StringJS
public "createPreResponse"(handler: $HTTPHandler$$Type<(never)>): $HTTPResponse
public "acceptedEncodings"(): $Set<(StringJS)>
public "gitHubSignature"(): StringJS
public "gitHubEvent"(): StringJS
public "bodyList"(): $List<($Body)>
public "bodyBuffer"(): $ByteBuffer
public "formData"(): $Map<(StringJS), ($OptionalString)>
public "formData"(key: StringJS): $OptionalString
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPRequest$$Type = ($HTTPRequest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPRequest$$Original = $HTTPRequest;}
declare module "dev.latvian.apps.tinyserver.ws.Frame" {
import {$FrameInfo, $FrameInfo$$Type} from "dev.latvian.apps.tinyserver.ws.FrameInfo"
import {$Opcode$$Type} from "dev.latvian.apps.tinyserver.ws.Opcode"
import {$Record} from "java.lang.Record"

export class $Frame extends $Record {
constructor(info: $FrameInfo$$Type, payload: (byte)[])

public static "binary"(buffer: (byte)[]): $Frame
public "payload"(): (byte)[]
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "info"(): $FrameInfo
public "appendTo"(previous: $Frame$$Type): $Frame
public static "text"(text: StringJS): $Frame
public static "ping"(buffer: (byte)[]): $Frame
public static "simple"(opcode: $Opcode$$Type, mask: integer, payload: (byte)[]): $Frame
public "applyMask"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frame$$Type = ({"payload"?: (byte)[], "info"?: $FrameInfo$$Type}) | ([payload?: (byte)[], info?: $FrameInfo$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frame$$Original = $Frame;}
declare module "dev.latvian.apps.tinyserver.HTTPConnection" {
import {$HTTPUpgrade} from "dev.latvian.apps.tinyserver.http.HTTPUpgrade"
import {$HTTPServer, $HTTPServer$$Type} from "dev.latvian.apps.tinyserver.HTTPServer"
import {$StatusCode} from "dev.latvian.apps.tinyserver.StatusCode"
import {$SocketChannel$$Type} from "java.nio.channels.SocketChannel"
import {$HTTPRequest} from "dev.latvian.apps.tinyserver.http.HTTPRequest"
import {$Runnable$$Interface} from "java.lang.Runnable"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $HTTPConnection<REQ extends $HTTPRequest> implements $Runnable$$Interface {
static readonly "SOCKET_CLOSED": $StatusCode
static readonly "CLOSED": $StatusCode
static readonly "INVALID_REQUEST": $StatusCode
readonly "createdTime": $Instant
static readonly "TIMEOUT": $StatusCode
static readonly "OPEN": $StatusCode

constructor(server: $HTTPServer$$Type<(REQ)>, socketChannel: $SocketChannel$$Type, createdTime: $Instant$$Type)

public "upgrade"(): $HTTPUpgrade<(REQ)>
public "run"(): void
public "toString"(): StringJS
public "write"(buffer: $ByteBuffer$$Type): void
public "read"(buffer: $ByteBuffer$$Type): void
public "close"(): void
public "close"(reason: StringJS, error: boolean): void
public "readInt"(): integer
public "readBytes"(bytes: (byte)[], off: integer, len: integer): void
public "readBytes"(bytes: (byte)[]): void
public "readFloat"(): float
public "readByte"(): byte
public "readShort"(): short
public "readLong"(): long
public "readDouble"(): double
public "readCRLF"(): StringJS
public "server"(): $HTTPServer<(REQ)>
public "readDirectly"(buffer: $ByteBuffer$$Type): integer
public "writeDirectly"(buffer: $ByteBuffer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPConnection$$Type<REQ> = ($HTTPConnection<(REQ)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPConnection$$Original<REQ> = $HTTPConnection<(REQ)>;}
declare module "dev.latvian.apps.tinyserver.http.response.HTTPResponse" {
import {$BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$ResponseContentEncoding$$Type} from "dev.latvian.apps.tinyserver.http.response.encoding.ResponseContentEncoding"
import {$Iterable$$Type} from "java.lang.Iterable"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CookieResponse$Builder$$Type} from "dev.latvian.apps.tinyserver.http.response.CookieResponse$Builder"
import {$HTTPUpgrade$$Type} from "dev.latvian.apps.tinyserver.http.HTTPUpgrade"
import {$HTTPStatus} from "dev.latvian.apps.tinyserver.http.response.HTTPStatus"
import {$Duration$$Type} from "java.time.Duration"
import {$Path$$Type} from "java.nio.file.Path"
import {$HTTPPayload$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPPayload"
import {$ResponseContent$$Type} from "dev.latvian.apps.tinyserver.content.ResponseContent"

export interface $HTTPResponse$$Interface {
}

export class $HTTPResponse implements $HTTPResponse$$Interface {
static "upgrade"(upgrade: $HTTPUpgrade$$Type<(never)>): $HTTPResponse
 "deflate"(): $HTTPResponse
 "cache"(isPublic: boolean, duration: $Duration$$Type): $HTTPResponse
 "status"(): $HTTPStatus
 "encoding"(encoding: $ResponseContentEncoding$$Type): $HTTPResponse
static "created"(): $HTTPResponse
 "build"(payload: $HTTPPayload$$Type): void
 "text"(text: $Iterable$$Type<(StringJS)>): $HTTPResponse
 "text"(text: StringJS): $HTTPResponse
static "ok"(): $HTTPResponse
 "header"(header: StringJS, value: any): $HTTPResponse
 "content"(file: $Path$$Type, overrideType: StringJS): $HTTPResponse
 "content"(string: charseq, type: StringJS): $HTTPResponse
 "content"(bytes: (byte)[], type: StringJS): $HTTPResponse
 "content"(content: $ResponseContent$$Type): $HTTPResponse
 "content"(file: $Path$$Type): $HTTPResponse
static "redirect"(location: StringJS): $HTTPResponse
 "cookie"(key: StringJS, value: StringJS, properties: $UnaryOperator$$Type<($CookieResponse$Builder)>): $HTTPResponse
 "cookie"(key: StringJS, value: StringJS): $HTTPResponse
 "json"(json: StringJS): $HTTPResponse
 "jpeg"(img: $BufferedImage$$Type): $HTTPResponse
 "noCache"(): $HTTPResponse
 "html"(text: StringJS): $HTTPResponse
static "accepted"(): $HTTPResponse
 "gzip"(): $HTTPResponse
static "noContent"(): $HTTPResponse
 "cors"(): $HTTPResponse
 "cors"(value: StringJS): $HTTPResponse
 "png"(img: $BufferedImage$$Type): $HTTPResponse
 "removeCookie"(key: StringJS): $HTTPResponse
 "privateCache"(duration: $Duration$$Type): $HTTPResponse
static "redirectTemporary"(location: StringJS): $HTTPResponse
static "movedPermanently"(location: StringJS): $HTTPResponse
 "publicCache"(duration: $Duration$$Type): $HTTPResponse
static "redirectPermanently"(location: StringJS): $HTTPResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPResponse$$Type = ($HTTPResponse);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPResponse$$Original = $HTTPResponse;}
declare module "dev.latvian.apps.tinyserver.http.HTTPPathHandler" {
import {$HTTPMethod, $HTTPMethod$$Type} from "dev.latvian.apps.tinyserver.http.HTTPMethod"
import {$CompiledPath, $CompiledPath$$Type} from "dev.latvian.apps.tinyserver.CompiledPath"
import {$HTTPHandler, $HTTPHandler$$Type} from "dev.latvian.apps.tinyserver.http.HTTPHandler"
import {$HTTPRequest} from "dev.latvian.apps.tinyserver.http.HTTPRequest"
import {$Record} from "java.lang.Record"

export class $HTTPPathHandler<REQ extends $HTTPRequest> extends $Record {
static readonly "DEFAULT": $HTTPPathHandler<(never)>

constructor(method: $HTTPMethod$$Type, path: $CompiledPath$$Type, handler: $HTTPHandler$$Type<(REQ)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "method"(): $HTTPMethod
public "hashCode"(): integer
public "handler"(): $HTTPHandler<(REQ)>
public "path"(): $CompiledPath
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPPathHandler$$Type<REQ> = ({"method"?: $HTTPMethod$$Type, "path"?: $CompiledPath$$Type, "handler"?: $HTTPHandler$$Type<(REQ)>}) | ([method?: $HTTPMethod$$Type, path?: $CompiledPath$$Type, handler?: $HTTPHandler$$Type<(REQ)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPPathHandler$$Original<REQ> = $HTTPPathHandler<(REQ)>;}
declare module "dev.latvian.apps.tinyserver.CompiledPath" {
import {$CompiledPath$Part, $CompiledPath$Part$$Type} from "dev.latvian.apps.tinyserver.CompiledPath$Part"
import {$Record} from "java.lang.Record"

export class $CompiledPath extends $Record {
static readonly "EMPTY": $CompiledPath

constructor(parts: ($CompiledPath$Part$$Type)[], string: StringJS, variables: integer, wildcard: boolean)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(path: (StringJS)[]): (StringJS)[]
public static "compile"(string: StringJS): $CompiledPath
public "parts"(): ($CompiledPath$Part)[]
public "string"(): StringJS
public "wildcard"(): boolean
public "variables"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledPath$$Type = ({"variables"?: integer, "parts"?: ($CompiledPath$Part$$Type)[], "string"?: StringJS, "wildcard"?: boolean}) | ([variables?: integer, parts?: ($CompiledPath$Part$$Type)[], string?: StringJS, wildcard?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompiledPath$$Original = $CompiledPath;}
declare module "dev.latvian.apps.tinyserver.http.response.HTTPPayload" {
import {$ResponseContentEncoding$$Type} from "dev.latvian.apps.tinyserver.http.response.encoding.ResponseContentEncoding"
import {$HTTPResponse$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPResponse"
import {$HTTPConnection$$Type} from "dev.latvian.apps.tinyserver.HTTPConnection"
import {$HTTPUpgrade, $HTTPUpgrade$$Type} from "dev.latvian.apps.tinyserver.http.HTTPUpgrade"
import {$DateTimeFormatter} from "java.time.format.DateTimeFormatter"
import {$HTTPStatus, $HTTPStatus$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPStatus"
import {$OptionalString} from "dev.latvian.apps.tinyserver.OptionalString"
import {$HTTPRequest$$Type} from "dev.latvian.apps.tinyserver.http.HTTPRequest"
import {$Instant$$Type} from "java.time.Instant"
import {$ResponseContent, $ResponseContent$$Type} from "dev.latvian.apps.tinyserver.content.ResponseContent"

export class $HTTPPayload {
static readonly "DATE_TIME_FORMATTER": $DateTimeFormatter

constructor(serverName: StringJS, serverTime: $Instant$$Type)

public "getUpgrade"(): $HTTPUpgrade<(never)>
public "setUpgrade"(upgrade: $HTTPUpgrade$$Type<(never)>): void
public "clear"(): void
public "write"(connection: $HTTPConnection$$Type<(never)>, writeBody: boolean): void
public "process"(req: $HTTPRequest$$Type, keepAliveTimeout: integer, maxKeepAliveConnections: integer): void
public "getHeader"(header: StringJS): $OptionalString
public "getCookie"(key: StringJS): StringJS
public "getStatus"(): $HTTPStatus
public "addHeader"(header: StringJS, value: any): void
public "setStatus"(status: $HTTPStatus$$Type): void
public "setBody"(body: $ResponseContent$$Type): void
public "getBody"(): $ResponseContent
public "setHeader"(header: StringJS, value: any): void
public "setResponse"(response: $HTTPResponse$$Type): void
public "getCacheControl"(): StringJS
public "setCacheControl"(cacheControl: StringJS): void
public "addEncoding"(encoding: $ResponseContentEncoding$$Type): void
public "getCors"(): StringJS
public "setCookie"(key: StringJS, value: StringJS): void
public "setCors"(cors: StringJS): void
get "upgrade"(): $HTTPUpgrade<(never)>
set "upgrade"(value: $HTTPUpgrade$$Type<(never)>)
get "status"(): $HTTPStatus
set "status"(value: $HTTPStatus$$Type)
set "body"(value: $ResponseContent$$Type)
get "body"(): $ResponseContent
set "response"(value: $HTTPResponse$$Type)
get "cacheControl"(): StringJS
set "cacheControl"(value: StringJS)
get "cors"(): StringJS
set "cors"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPPayload$$Type = ($HTTPPayload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPPayload$$Original = $HTTPPayload;}
declare module "dev.latvian.apps.tinyserver.ws.Opcode" {
import {$Enum} from "java.lang.Enum"

export class $Opcode extends $Enum<($Opcode)> {
static readonly "CLOSING": $Opcode
static readonly "PING": $Opcode
static readonly "BINARY": $Opcode
static readonly "TEXT": $Opcode
readonly "opcode": byte
static readonly "CONTINUOUS": $Opcode
static readonly "PONG": $Opcode

public static "get"(opcode: integer): $Opcode
public static "values"(): ($Opcode)[]
public static "valueOf"(name: StringJS): $Opcode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Opcode$$Type = (("continuous") | ("text") | ("binary") | ("closing") | ("ping") | ("pong"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Opcode$$Original = $Opcode;}
declare module "dev.latvian.apps.tinyserver.http.response.HTTPStatus" {
import {$ResponseContentEncoding$$Type} from "dev.latvian.apps.tinyserver.http.response.encoding.ResponseContentEncoding"
import {$Iterable$$Type} from "java.lang.Iterable"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$HTTPUpgrade$$Type} from "dev.latvian.apps.tinyserver.http.HTTPUpgrade"
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$Duration$$Type} from "java.time.Duration"
import {$ResponseContent$$Type} from "dev.latvian.apps.tinyserver.content.ResponseContent"
import {$BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$HTTPResponse, $HTTPResponse$$Interface} from "dev.latvian.apps.tinyserver.http.response.HTTPResponse"
import {$CookieResponse$Builder$$Type} from "dev.latvian.apps.tinyserver.http.response.CookieResponse$Builder"
import {$StatusCode} from "dev.latvian.apps.tinyserver.StatusCode"
import {$Path$$Type} from "java.nio.file.Path"
import {$HTTPPayload$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPPayload"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export class $HTTPStatus extends $Enum<($HTTPStatus)> implements $HTTPResponse$$Interface {
static readonly "ALL": $List<($HTTPStatus)>
static readonly "REQUEST_TIMEOUT": $HTTPStatus
static readonly "USE_PROXY": $HTTPStatus
static readonly "TEMPORARY_REDIRECT": $HTTPStatus
static readonly "CLIENT_ERROR": $List<($HTTPStatus)>
static readonly "NOT_AUTHORITATIVE_INFORMATION": $HTTPStatus
static readonly "ACCEPTED": $HTTPStatus
static readonly "BAD_GATEWAY": $HTTPStatus
static readonly "URI_TOO_LONG": $HTTPStatus
static readonly "NOT_ACCEPTABLE": $HTTPStatus
static readonly "RESET_CONTENT": $HTTPStatus
static readonly "PARTIAL_CONTENT": $HTTPStatus
static readonly "RANGE_NOT_SATISFIABLE": $HTTPStatus
static readonly "GATEWAY_TIMEOUT": $HTTPStatus
static readonly "FOUND": $HTTPStatus
static readonly "UNPROCESSABLE_CONTENT": $HTTPStatus
static readonly "METHOD_NOT_ALLOWED": $HTTPStatus
static readonly "EXPECTATION_FAILED": $HTTPStatus
static readonly "NOT_FOUND": $HTTPStatus
static readonly "PERMANENT_REDIRECT": $HTTPStatus
static readonly "LENGTH_REQUIRED": $HTTPStatus
static readonly "MULTIPLE_CHOICES": $HTTPStatus
static readonly "SWITCHING_PROTOCOLS": $HTTPStatus
static readonly "GONE": $HTTPStatus
static readonly "REDIRECT": $List<($HTTPStatus)>
static readonly "UPGRADE_REQUIRED": $HTTPStatus
static readonly "CONFLICT": $HTTPStatus
static readonly "HTTP_VERSION_NOT_SUPPORTED": $HTTPStatus
static readonly "UNSUPPORTED_MEDIA_TYPE": $HTTPStatus
static readonly "NO_CONTENT": $HTTPStatus
static readonly "PROXY_AUTHENTICATION_REQUIRED": $HTTPStatus
static readonly "PAYMENT_REQUIRED": $HTTPStatus
static readonly "CREATED": $HTTPStatus
static readonly "SERVER_ERROR": $List<($HTTPStatus)>
static readonly "MOVED_PERMANENTLY": $HTTPStatus
static readonly "LOOKUP": $List<($List<($HTTPStatus)>)>
static readonly "UNAUTHORIZED": $HTTPStatus
static readonly "CONTENT_TOO_LARGE": $HTTPStatus
static readonly "OK": $HTTPStatus
static readonly "SUCCESS": $List<($HTTPStatus)>
static readonly "BAD_REQUEST": $HTTPStatus
static readonly "INTERNAL_ERROR": $HTTPStatus
static readonly "MISDIRECTED_REQUEST": $HTTPStatus
static readonly "SEE_OTHER": $HTTPStatus
static readonly "FORBIDDEN": $HTTPStatus
static readonly "CONTINUE": $HTTPStatus
static readonly "NOT_MODIFIED": $HTTPStatus
static readonly "NOT_IMPLEMENTED": $HTTPStatus
static readonly "PRECONDITION_FAILED": $HTTPStatus
static readonly "SERVICE_UNAVAILABLE": $HTTPStatus
static readonly "INFORMATIONAL": $List<($HTTPStatus)>

public "toString"(): StringJS
public static "values"(): ($HTTPStatus)[]
public static "valueOf"(name: StringJS): $HTTPStatus
public "code"(): integer
public "status"(): $HTTPStatus
public "error"(): boolean
public "statusCode"(): $StatusCode
public "build"(payload: $HTTPPayload$$Type): void
public "success"(): boolean
public "redirect"(): boolean
public "informational"(): boolean
public "serverError"(): boolean
public "clientError"(): boolean
public static "fromCode"(code: integer): $HTTPStatus
public "defaultResponse"(): $HTTPResponse
public "responseBuffer"(): $ByteBuffer
public static "upgrade"(upgrade: $HTTPUpgrade$$Type<(never)>): $HTTPResponse
public "deflate"(): $HTTPResponse
public "cache"(isPublic: boolean, duration: $Duration$$Type): $HTTPResponse
public "encoding"(encoding: $ResponseContentEncoding$$Type): $HTTPResponse
public static "created"(): $HTTPResponse
public "text"(text: $Iterable$$Type<(StringJS)>): $HTTPResponse
public "text"(text: StringJS): $HTTPResponse
public static "ok"(): $HTTPResponse
public "header"(header: StringJS, value: any): $HTTPResponse
public "content"(file: $Path$$Type, overrideType: StringJS): $HTTPResponse
public "content"(string: charseq, type: StringJS): $HTTPResponse
public "content"(bytes: (byte)[], type: StringJS): $HTTPResponse
public "content"(content: $ResponseContent$$Type): $HTTPResponse
public "content"(file: $Path$$Type): $HTTPResponse
public static "redirect"(location: StringJS): $HTTPResponse
public "cookie"(key: StringJS, value: StringJS, properties: $UnaryOperator$$Type<($CookieResponse$Builder)>): $HTTPResponse
public "cookie"(key: StringJS, value: StringJS): $HTTPResponse
public "json"(json: StringJS): $HTTPResponse
public "jpeg"(img: $BufferedImage$$Type): $HTTPResponse
public "noCache"(): $HTTPResponse
public "html"(text: StringJS): $HTTPResponse
public static "accepted"(): $HTTPResponse
public "gzip"(): $HTTPResponse
public static "noContent"(): $HTTPResponse
public "cors"(): $HTTPResponse
public "cors"(value: StringJS): $HTTPResponse
public "png"(img: $BufferedImage$$Type): $HTTPResponse
public "removeCookie"(key: StringJS): $HTTPResponse
public "privateCache"(duration: $Duration$$Type): $HTTPResponse
public static "redirectTemporary"(location: StringJS): $HTTPResponse
public static "movedPermanently"(location: StringJS): $HTTPResponse
public "publicCache"(duration: $Duration$$Type): $HTTPResponse
public static "redirectPermanently"(location: StringJS): $HTTPResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPStatus$$Type = (("continue") | ("switching_protocols") | ("ok") | ("created") | ("accepted") | ("not_authoritative_information") | ("no_content") | ("reset_content") | ("partial_content") | ("multiple_choices") | ("moved_permanently") | ("found") | ("see_other") | ("not_modified") | ("use_proxy") | ("temporary_redirect") | ("permanent_redirect") | ("bad_request") | ("unauthorized") | ("payment_required") | ("forbidden") | ("not_found") | ("method_not_allowed") | ("not_acceptable") | ("proxy_authentication_required") | ("request_timeout") | ("conflict") | ("gone") | ("length_required") | ("precondition_failed") | ("content_too_large") | ("uri_too_long") | ("unsupported_media_type") | ("range_not_satisfiable") | ("expectation_failed") | ("misdirected_request") | ("unprocessable_content") | ("upgrade_required") | ("internal_error") | ("not_implemented") | ("bad_gateway") | ("service_unavailable") | ("gateway_timeout") | ("http_version_not_supported"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPStatus$$Original = $HTTPStatus;}
declare module "dev.latvian.apps.tinyserver.CompiledPath$Part" {
import {$Record} from "java.lang.Record"

export class $CompiledPath$Part extends $Record {
constructor(name: StringJS, variable: boolean)

public "name"(): StringJS
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(string: StringJS): boolean
public "variable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledPath$Part$$Type = ({"variable"?: boolean, "name"?: StringJS}) | ([variable?: boolean, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompiledPath$Part$$Original = $CompiledPath$Part;}
declare module "dev.latvian.apps.tinyserver.OptionalString" {
import {$ZoneId} from "java.time.ZoneId"
import {$Function$$Type} from "java.util.function.Function"
import {$Record} from "java.lang.Record"

export class $OptionalString extends $Record {
static readonly "MISSING": $OptionalString
static readonly "EMPTY": $OptionalString

constructor(value: StringJS)

public "value"(): StringJS
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(str: StringJS): $OptionalString
public "isPresent"(): boolean
public "as"<T>(mapper: $Function$$Type<(StringJS), (T)>): T
public "as"<T>(mapper: $Function$$Type<(StringJS), (T)>, def: T): T
public "asDouble"(def: double): double
public "asDouble"(): double
public "asString"(def: StringJS): StringJS
public "asString"(): StringJS
public "asInt"(def: integer): integer
public "asInt"(): integer
public "asBoolean"(def: boolean): boolean
public "asBoolean"(): boolean
public "asFloat"(def: float): float
public "asFloat"(): float
public "asLong"(): long
public "asLong"(def: long): long
public "require"(): $OptionalString
public "isMissing"(): boolean
public "asZoneId"(): $ZoneId
public "asULong"(): long
public "asULong"(def: long): long
get "present"(): boolean
get "missing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalString$$Type = ({"value"?: StringJS}) | ([value?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionalString$$Original = $OptionalString;}
declare module "dev.latvian.apps.tinyserver.http.HTTPUpgrade" {
import {$HTTPRequest, $HTTPRequest$$Type} from "dev.latvian.apps.tinyserver.http.HTTPRequest"

export interface $HTTPUpgrade$$Interface<REQ extends $HTTPRequest> {
get "closed"(): boolean
}

export class $HTTPUpgrade<REQ extends $HTTPRequest> implements $HTTPUpgrade$$Interface {
 "start"(req: REQ): void
 "protocol"(): StringJS
 "isClosed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPUpgrade$$Type<REQ> = ($HTTPUpgrade<(REQ)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPUpgrade$$Original<REQ> = $HTTPUpgrade<(REQ)>;}
declare module "dev.latvian.apps.tinyserver.content.ResponseContent" {
import {$HTTPConnection$$Type} from "dev.latvian.apps.tinyserver.HTTPConnection"
import {$HttpRequest$BodyPublisher} from "java.net.http.HttpRequest$BodyPublisher"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

export interface $ResponseContent$$Interface {

(out: $OutputStream): void
}

export class $ResponseContent implements $ResponseContent$$Interface {
 "hasData"(): boolean
 "type"(): StringJS
 "length"(): long
 "toBytes"(): (byte)[]
 "write"(out: $OutputStream$$Type): void
 "transferTo"(connection: $HTTPConnection$$Type<(never)>): void
 "bodyPublisher"(): $HttpRequest$BodyPublisher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResponseContent$$Type = ((out: $OutputStream) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResponseContent$$Original = $ResponseContent;}
declare module "dev.latvian.apps.tinyserver.StatusCode" {
import {$Record} from "java.lang.Record"

export class $StatusCode extends $Record {
constructor(code: integer, message: StringJS)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "code"(): integer
public "message"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatusCode$$Type = ({"code"?: integer, "message"?: StringJS}) | ([code?: integer, message?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatusCode$$Original = $StatusCode;}
declare module "dev.latvian.apps.tinyserver.http.response.CookieResponse$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CookieResponse$Builder {
constructor()

public "remove"(): $CookieResponse$Builder
public "domain"(domain: StringJS): $CookieResponse$Builder
public "comment"(comment: StringJS): $CookieResponse$Builder
public "path"(path: StringJS): $CookieResponse$Builder
public "session"(): $CookieResponse$Builder
public "secure"(): $CookieResponse$Builder
public "maxAge"(maxAge: integer): $CookieResponse$Builder
public "maxAgeYear"(): $CookieResponse$Builder
public "sameSite"(sameSite: StringJS): $CookieResponse$Builder
public "partitioned"(partitioned: boolean): $CookieResponse$Builder
public "httpOnly"(): $CookieResponse$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookieResponse$Builder$$Type = ($CookieResponse$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookieResponse$Builder$$Original = $CookieResponse$Builder;}
declare module "dev.latvian.apps.tinyserver.http.Header" {
import {$OptionalString, $OptionalString$$Type} from "dev.latvian.apps.tinyserver.OptionalString"
import {$Record} from "java.lang.Record"

export class $Header extends $Record {
constructor(key: StringJS, value: StringJS)
constructor(key: StringJS, value: $OptionalString$$Type)

public "value"(): $OptionalString
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): StringJS
public "is"(name: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Header$$Type = ({"value"?: $OptionalString$$Type, "key"?: StringJS}) | ([value?: $OptionalString$$Type, key?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Header$$Original = $Header;}
declare module "dev.latvian.apps.tinyserver.http.Body" {
import {$Map} from "java.util.Map"
import {$OptionalString} from "dev.latvian.apps.tinyserver.OptionalString"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export class $Body {
constructor()

public "contentType"(): StringJS
public "name"(): StringJS
public "toString"(): StringJS
public "fileName"(): StringJS
public "bytes"(): (byte)[]
public "property"(key: StringJS): $OptionalString
public "text"(): StringJS
public "byteBuffer"(): $ByteBuffer
public "getPostData"(): $Map<(StringJS), ($OptionalString)>
get "postData"(): $Map<(StringJS), ($OptionalString)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Body$$Type = ($Body);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Body$$Original = $Body;}
declare module "dev.latvian.apps.tinyserver.ws.WSSessionFactory" {
import {$WSSession, $WSSession$$Type} from "dev.latvian.apps.tinyserver.ws.WSSession"
import {$HTTPRequest} from "dev.latvian.apps.tinyserver.http.HTTPRequest"

export interface $WSSessionFactory$$Interface<REQ extends $HTTPRequest, WSS extends $WSSession<(object)>> {

(): WSS
}

export class $WSSessionFactory<REQ extends $HTTPRequest, WSS extends $WSSession<(object)>> implements $WSSessionFactory$$Interface {
static readonly "DEFAULT": $WSSessionFactory<($HTTPRequest), ($WSSession<($HTTPRequest)>)>

 "create"(): WSS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WSSessionFactory$$Type<REQ, WSS> = (() => WSS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WSSessionFactory$$Original<REQ, WSS> = $WSSessionFactory<(REQ), (WSS)>;}
declare module "dev.latvian.apps.tinyserver.http.HTTPHandler" {
import {$HTTPResponse, $HTTPResponse$$Type} from "dev.latvian.apps.tinyserver.http.response.HTTPResponse"
import {$HTTPRequest, $HTTPRequest$$Type} from "dev.latvian.apps.tinyserver.http.HTTPRequest"

export interface $HTTPHandler$$Interface<REQ extends $HTTPRequest> {

(req: REQ): $HTTPResponse$$Type
get "fileHandler"(): boolean
}

export class $HTTPHandler<REQ extends $HTTPRequest> implements $HTTPHandler$$Interface {
 "handle"(req: REQ): $HTTPResponse
 "isFileHandler"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPHandler$$Type<REQ> = ((req: REQ) => $HTTPResponse$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPHandler$$Original<REQ> = $HTTPHandler<(REQ)>;}
declare module "dev.latvian.apps.tinyserver.ws.FrameInfo" {
import {$HTTPConnection$$Type} from "dev.latvian.apps.tinyserver.HTTPConnection"
import {$Opcode, $Opcode$$Type} from "dev.latvian.apps.tinyserver.ws.Opcode"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Record} from "java.lang.Record"

export class $FrameInfo extends $Record {
constructor(opcode: $Opcode$$Type, mask: boolean, fin: boolean, rsv1: boolean, rsv2: boolean, rsv3: boolean, maskKey: integer, size: integer)

public "size"(): integer
public "put"(buf: $ByteBuffer$$Type): void
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bytes"(): integer
public static "read"(connection: $HTTPConnection$$Type): $FrameInfo
public "mask"(): boolean
public "opcode"(): $Opcode
public "fin"(): boolean
public "maskZero"(): boolean
public "applyMask"(payload: (byte)[]): void
public "maskKey"(): integer
public "rsv1"(): boolean
public "rsv2"(): boolean
public "rsv3"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameInfo$$Type = ({"rsv2"?: boolean, "rsv3"?: boolean, "opcode"?: $Opcode$$Type, "mask"?: boolean, "size"?: integer, "maskKey"?: integer, "fin"?: boolean, "rsv1"?: boolean}) | ([rsv2?: boolean, rsv3?: boolean, opcode?: $Opcode$$Type, mask?: boolean, size?: integer, maskKey?: integer, fin?: boolean, rsv1?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrameInfo$$Original = $FrameInfo;}
declare module "dev.latvian.apps.tinyserver.ServerRegistry" {
import {$WSSession} from "dev.latvian.apps.tinyserver.ws.WSSession"
import {$HTTPMethod, $HTTPMethod$$Type} from "dev.latvian.apps.tinyserver.http.HTTPMethod"
import {$FileResponseHandler$$Type} from "dev.latvian.apps.tinyserver.http.file.FileResponseHandler"
import {$WSSessionFactory$$Type} from "dev.latvian.apps.tinyserver.ws.WSSessionFactory"
import {$HTTPHandler, $HTTPHandler$$Type} from "dev.latvian.apps.tinyserver.http.HTTPHandler"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HTTPRequest} from "dev.latvian.apps.tinyserver.http.HTTPRequest"
import {$WSHandler} from "dev.latvian.apps.tinyserver.ws.WSHandler"
import {$Path$$Type} from "java.nio.file.Path"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ServerRegistry$$Interface<REQ extends $HTTPRequest> {

(method: $HTTPMethod, path: StringJS, handler: $HTTPHandler<(REQ)>): void
}

export class $ServerRegistry<REQ extends $HTTPRequest> implements $ServerRegistry$$Interface {
 "get"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
 "put"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
 "delete"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
 "patch"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
 "ws"<WSS extends $WSSession<(object)>>(path: StringJS, factory: $WSSessionFactory$$Type<(REQ), (WSS)>): $WSHandler<(REQ), (WSS)>
 "ws"<WSS extends $WSSession<(object)>>(path: StringJS): $WSHandler<(REQ), (WSS)>
 "post"(path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
 "redirect"(path: StringJS, redirect: StringJS): void
 "singleFile"(path: StringJS, file: $Path$$Type, responseHandler: $FileResponseHandler$$Type): void
 "http"(method: $HTTPMethod$$Type, path: StringJS, handler: $HTTPHandler$$Type<(REQ)>): void
 "dynamicFiles"(path: StringJS, directory: $Path$$Type, responseHandler: $FileResponseHandler$$Type, autoIndex: boolean): void
 "staticFiles"(path: StringJS, directory: $Path$$Type, responseHandler: $FileResponseHandler$$Type, autoIndex: boolean): void
 "acceptPostTask"(path: StringJS, task: $Runnable$$Type): void
 "acceptPostString"(path: StringJS, handler: $Consumer$$Type<(StringJS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerRegistry$$Type<REQ> = ((method: $HTTPMethod, path: StringJS, handler: $HTTPHandler<(REQ)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerRegistry$$Original<REQ> = $ServerRegistry<(REQ)>;}
declare module "dev.latvian.apps.tinyserver.ws.WSHandler" {
import {$WSSession} from "dev.latvian.apps.tinyserver.ws.WSSession"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Frame$$Type} from "dev.latvian.apps.tinyserver.ws.Frame"
import {$Iterator} from "java.util.Iterator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Spliterator} from "java.util.Spliterator"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$HTTPRequest} from "dev.latvian.apps.tinyserver.http.HTTPRequest"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $WSHandler$$Interface<REQ extends $HTTPRequest, WSS extends $WSSession<(object)>> extends $Iterable$$Interface<(WSS)> {

(): $Map$$Type<($UUID$$Type), (WSS)>
[Symbol.iterator](): IterableIterator<WSS>;
}

export class $WSHandler<REQ extends $HTTPRequest, WSS extends $WSSession<(object)>> implements $WSHandler$$Interface {
 "iterator"(): $Iterator<(WSS)>
 "spliterator"(): $Spliterator<(WSS)>
static "empty"<REQ extends $HTTPRequest, WSS extends $WSSession<(object)>>(): $WSHandler<(REQ), (WSS)>
 "broadcast"(frame: $Frame$$Type): void
 "sessions"(): $Map<($UUID), (WSS)>
 "broadcastBinary"(payload: (byte)[]): void
 "broadcastBinary"(payload: $Supplier$$Type<((byte)[])>): void
 "broadcastPing"(payload: (byte)[]): void
 "broadcastPing"(payload: $Supplier$$Type<((byte)[])>): void
 "broadcastText"(payload: $Supplier$$Type<(StringJS)>): void
 "broadcastText"(payload: StringJS): void
 "forEach"(arg0: $Consumer$$Type<(WSS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WSHandler$$Type<REQ, WSS> = (() => $Map$$Type<($UUID$$Type), (WSS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WSHandler$$Original<REQ, WSS> = $WSHandler<(REQ), (WSS)>;}
declare module "dev.latvian.apps.tinyserver.http.HTTPMethod" {
import {$Enum} from "java.lang.Enum"

export class $HTTPMethod extends $Enum<($HTTPMethod)> {
static readonly "TRACE": $HTTPMethod
static readonly "HEAD": $HTTPMethod
static readonly "DELETE": $HTTPMethod
static readonly "POST": $HTTPMethod
static readonly "GET": $HTTPMethod
static readonly "CONNECT": $HTTPMethod
static readonly "OPTIONS": $HTTPMethod
static readonly "PUT": $HTTPMethod
static readonly "PATCH": $HTTPMethod

public static "values"(): ($HTTPMethod)[]
public static "valueOf"(name: StringJS): $HTTPMethod
public "body"(): boolean
public static "fromString"(method: StringJS): $HTTPMethod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HTTPMethod$$Type = (("head") | ("get") | ("post") | ("put") | ("patch") | ("delete") | ("options") | ("trace") | ("connect"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HTTPMethod$$Original = $HTTPMethod;}
declare module "dev.latvian.apps.tinyserver.http.response.encoding.ResponseContentEncoding" {
import {$ResponseContent, $ResponseContent$$Type} from "dev.latvian.apps.tinyserver.content.ResponseContent"

export interface $ResponseContentEncoding$$Interface {
}

export class $ResponseContentEncoding implements $ResponseContentEncoding$$Interface {
 "name"(): StringJS
 "encode"(body: $ResponseContent$$Type): $ResponseContent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResponseContentEncoding$$Type = ($ResponseContentEncoding);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResponseContentEncoding$$Original = $ResponseContentEncoding;}
declare module "dev.latvian.apps.tinyserver.ws.WSCloseStatus" {
import {$Enum} from "java.lang.Enum"
import {$StatusCode} from "dev.latvian.apps.tinyserver.StatusCode"

export class $WSCloseStatus extends $Enum<($WSCloseStatus)> {
static readonly "CLOSED": $WSCloseStatus
static readonly "GOING_AWAY": $WSCloseStatus
static readonly "UNSUPPORTED_DATA": $WSCloseStatus
static readonly "PROTOCOL_ERROR": $WSCloseStatus
readonly "statusCode": $StatusCode

public static "values"(): ($WSCloseStatus)[]
public static "valueOf"(name: StringJS): $WSCloseStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WSCloseStatus$$Type = (("closed") | ("going_away") | ("protocol_error") | ("unsupported_data"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WSCloseStatus$$Original = $WSCloseStatus;}
