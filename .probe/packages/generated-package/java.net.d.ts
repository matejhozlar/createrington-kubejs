declare module "java.net.FileNameMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileNameMap$$Interface {

(arg0: StringJS): StringJS
}

export class $FileNameMap implements $FileNameMap$$Interface {
 "getContentTypeFor"(arg0: StringJS): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileNameMap$$Type = ((arg0: StringJS) => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileNameMap$$Original = $FileNameMap;}
declare module "java.net.NetworkInterface" {
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$List} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$Enumeration} from "java.util.Enumeration"
import {$InterfaceAddress} from "java.net.InterfaceAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NetworkInterface {
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isVirtual"(): boolean
public "getParent"(): $NetworkInterface
public static "getByName"(arg0: StringJS): $NetworkInterface
public "getIndex"(): integer
public static "networkInterfaces"(): $Stream<($NetworkInterface)>
public "inetAddresses"(): $Stream<($InetAddress)>
public "getInetAddresses"(): $Enumeration<($InetAddress)>
public static "getNetworkInterfaces"(): $Enumeration<($NetworkInterface)>
public "getInterfaceAddresses"(): $List<($InterfaceAddress)>
public "getSubInterfaces"(): $Enumeration<($NetworkInterface)>
public "subInterfaces"(): $Stream<($NetworkInterface)>
public "getDisplayName"(): StringJS
public static "getByIndex"(arg0: integer): $NetworkInterface
public static "getByInetAddress"(arg0: $InetAddress$$Type): $NetworkInterface
public "isUp"(): boolean
public "isLoopback"(): boolean
public "isPointToPoint"(): boolean
public "supportsMulticast"(): boolean
public "getHardwareAddress"(): (byte)[]
public "getMTU"(): integer
get "name"(): StringJS
get "virtual"(): boolean
get "parent"(): $NetworkInterface
get "index"(): integer
get "interfaceAddresses"(): $List<($InterfaceAddress)>
get "displayName"(): StringJS
get "up"(): boolean
get "loopback"(): boolean
get "pointToPoint"(): boolean
get "hardwareAddress"(): (byte)[]
get "MTU"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkInterface$$Type = ($NetworkInterface);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkInterface$$Original = $NetworkInterface;}
declare module "java.net.InetAddress" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$NetworkInterface$$Type} from "java.net.NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetAddress implements $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getHostAddress"(): StringJS
public "getAddress"(): (byte)[]
public static "getByName"(arg0: StringJS): $InetAddress
public "getHostName"(): StringJS
public "isLinkLocalAddress"(): boolean
public "isMulticastAddress"(): boolean
public "isAnyLocalAddress"(): boolean
public "isLoopbackAddress"(): boolean
public "isSiteLocalAddress"(): boolean
public "isMCGlobal"(): boolean
public "isMCNodeLocal"(): boolean
public "isMCLinkLocal"(): boolean
public "isMCSiteLocal"(): boolean
public "isMCOrgLocal"(): boolean
public "isReachable"(arg0: $NetworkInterface$$Type, arg1: integer, arg2: integer): boolean
public "isReachable"(arg0: integer): boolean
public static "getAllByName"(arg0: StringJS): ($InetAddress)[]
public static "getByAddress"(arg0: (byte)[]): $InetAddress
public static "getByAddress"(arg0: StringJS, arg1: (byte)[]): $InetAddress
public "getCanonicalHostName"(): StringJS
public static "getLoopbackAddress"(): $InetAddress
public static "getLocalHost"(): $InetAddress
get "hostAddress"(): StringJS
get "address"(): (byte)[]
get "hostName"(): StringJS
get "linkLocalAddress"(): boolean
get "multicastAddress"(): boolean
get "anyLocalAddress"(): boolean
get "loopbackAddress"(): boolean
get "siteLocalAddress"(): boolean
get "MCGlobal"(): boolean
get "MCNodeLocal"(): boolean
get "MCLinkLocal"(): boolean
get "MCSiteLocal"(): boolean
get "MCOrgLocal"(): boolean
get "canonicalHostName"(): StringJS
get "loopbackAddress"(): $InetAddress
get "localHost"(): $InetAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetAddress$$Type = ($InetAddress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InetAddress$$Original = $InetAddress;}
declare module "java.net.DatagramSocket" {
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$DatagramSocketImplFactory$$Type} from "java.net.DatagramSocketImplFactory"
import {$Set} from "java.util.Set"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$DatagramChannel} from "java.nio.channels.DatagramChannel"
import {$DatagramPacket$$Type} from "java.net.DatagramPacket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramSocket implements $Closeable$$Interface {
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: $InetAddress$$Type)
constructor(arg0: $SocketAddress$$Type)

public "supportedOptions"(): $Set<($SocketOption<(never)>)>
public "isConnected"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $DatagramSocket
public "getLocalAddress"(): $InetAddress
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "connect"(arg0: $SocketAddress$$Type): void
public "connect"(arg0: $InetAddress$$Type, arg1: integer): void
public "close"(): void
public "getPort"(): integer
public "getChannel"(): $DatagramChannel
public "bind"(arg0: $SocketAddress$$Type): void
public "getBroadcast"(): boolean
public "isClosed"(): boolean
public "setReuseAddress"(arg0: boolean): void
public "disconnect"(): void
public "setBroadcast"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public static "setDatagramSocketImplFactory"(arg0: $DatagramSocketImplFactory$$Type): void
public "getTrafficClass"(): integer
public "setTrafficClass"(arg0: integer): void
public "setSendBufferSize"(arg0: integer): void
public "setSoTimeout"(arg0: integer): void
public "getSendBufferSize"(): integer
public "getSoTimeout"(): integer
public "getReceiveBufferSize"(): integer
public "setReceiveBufferSize"(arg0: integer): void
public "send"(arg0: $DatagramPacket$$Type): void
public "getInetAddress"(): $InetAddress
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
public "receive"(arg0: $DatagramPacket$$Type): void
public "isBound"(): boolean
public "leaveGroup"(arg0: $SocketAddress$$Type, arg1: $NetworkInterface$$Type): void
public "joinGroup"(arg0: $SocketAddress$$Type, arg1: $NetworkInterface$$Type): void
get "connected"(): boolean
get "localAddress"(): $InetAddress
get "port"(): integer
get "channel"(): $DatagramChannel
get "broadcast"(): boolean
get "closed"(): boolean
set "reuseAddress"(value: boolean)
set "broadcast"(value: boolean)
set "datagramSocketImplFactory"(value: $DatagramSocketImplFactory$$Type)
get "trafficClass"(): integer
set "trafficClass"(value: integer)
set "sendBufferSize"(value: integer)
set "soTimeout"(value: integer)
get "sendBufferSize"(): integer
get "soTimeout"(): integer
get "receiveBufferSize"(): integer
set "receiveBufferSize"(value: integer)
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramSocket$$Type = ($DatagramSocket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DatagramSocket$$Original = $DatagramSocket;}
declare module "java.net.URI" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$URL} from "java.net.URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URI implements $Comparable$$Interface<($URI)>, $Serializable$$Interface {
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS, arg4: StringJS)
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS)
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)
constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS, arg5: StringJS, arg6: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $URI$$Type): integer
public "isAbsolute"(): boolean
public "resolve"(arg0: StringJS): $URI
public "resolve"(arg0: $URI$$Type): $URI
public static "create"(arg0: StringJS): $URI
public "getScheme"(): StringJS
public "isOpaque"(): boolean
public "getRawAuthority"(): StringJS
public "getRawFragment"(): StringJS
public "getRawQuery"(): StringJS
public "getRawPath"(): StringJS
public "getHost"(): StringJS
public "getPort"(): integer
public "getAuthority"(): StringJS
public "getQuery"(): StringJS
public "getPath"(): StringJS
public "getUserInfo"(): StringJS
public "toURL"(): $URL
public "normalize"(): $URI
public "relativize"(arg0: $URI$$Type): $URI
public "getRawSchemeSpecificPart"(): StringJS
public "parseServerAuthority"(): $URI
public "getSchemeSpecificPart"(): StringJS
public "getRawUserInfo"(): StringJS
public "getFragment"(): StringJS
public "toASCIIString"(): StringJS
get "absolute"(): boolean
get "scheme"(): StringJS
get "opaque"(): boolean
get "rawAuthority"(): StringJS
get "rawFragment"(): StringJS
get "rawQuery"(): StringJS
get "rawPath"(): StringJS
get "host"(): StringJS
get "port"(): integer
get "authority"(): StringJS
get "query"(): StringJS
get "path"(): StringJS
get "userInfo"(): StringJS
get "rawSchemeSpecificPart"(): StringJS
get "schemeSpecificPart"(): StringJS
get "rawUserInfo"(): StringJS
get "fragment"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URI$$Type = ($URI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $URI$$Original = $URI;}
declare module "java.net.URL" {
import {$URLStreamHandler$$Type} from "java.net.URLStreamHandler"
import {$Proxy$$Type} from "java.net.Proxy"
import {$URI, $URI$$Type} from "java.net.URI"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$URLConnection} from "java.net.URLConnection"
import {$Class$$Type} from "java.lang.Class"
import {$URLStreamHandlerFactory$$Type} from "java.net.URLStreamHandlerFactory"
import {$InputStream} from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URL implements $Serializable$$Interface {
/**
 * 
 * @deprecated
 */
constructor(arg0: $URL$$Type, arg1: StringJS, arg2: $URLStreamHandler$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $URL$$Type, arg1: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: integer, arg3: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: integer, arg3: StringJS, arg4: $URLStreamHandler$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $URI$$Type, arg1: $URLStreamHandler$$Type): $URL
public "openStream"(): $InputStream
public "getHost"(): StringJS
public "getPort"(): integer
public "getDefaultPort"(): integer
public "sameFile"(arg0: $URL$$Type): boolean
public "toExternalForm"(): StringJS
public "openConnection"(): $URLConnection
public "openConnection"(arg0: $Proxy$$Type): $URLConnection
public "getContent"(): any
public "getContent"(arg0: ($Class$$Type<(never)>)[]): any
public "getProtocol"(): StringJS
public "getAuthority"(): StringJS
public "getFile"(): StringJS
public "getRef"(): StringJS
public "getQuery"(): StringJS
public "getPath"(): StringJS
public "getUserInfo"(): StringJS
public "toURI"(): $URI
public static "setURLStreamHandlerFactory"(arg0: $URLStreamHandlerFactory$$Type): void
get "host"(): StringJS
get "port"(): integer
get "defaultPort"(): integer
get "content"(): any
get "protocol"(): StringJS
get "authority"(): StringJS
get "file"(): StringJS
get "ref"(): StringJS
get "query"(): StringJS
get "path"(): StringJS
get "userInfo"(): StringJS
set "URLStreamHandlerFactory"(value: $URLStreamHandlerFactory$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URL$$Type = ($URL);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $URL$$Original = $URL;}
declare module "java.net.InterfaceAddress" {
import {$InetAddress} from "java.net.InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterfaceAddress {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getAddress"(): $InetAddress
public "getBroadcast"(): $InetAddress
public "getNetworkPrefixLength"(): short
get "address"(): $InetAddress
get "broadcast"(): $InetAddress
get "networkPrefixLength"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceAddress$$Type = ($InterfaceAddress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterfaceAddress$$Original = $InterfaceAddress;}
declare module "java.net.ServerSocket" {
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$ServerSocketChannel} from "java.nio.channels.ServerSocketChannel"
import {$Socket} from "java.net.Socket"
import {$SocketImplFactory$$Type} from "java.net.SocketImplFactory"
import {$Set} from "java.util.Set"
import {$Closeable$$Interface} from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocket implements $Closeable$$Interface {
constructor(arg0: integer, arg1: integer, arg2: $InetAddress$$Type)
constructor(arg0: integer, arg1: integer)
constructor()
constructor(arg0: integer)

public "supportedOptions"(): $Set<($SocketOption<(never)>)>
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $ServerSocket
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "toString"(): StringJS
public "accept"(): $Socket
public "close"(): void
public "getChannel"(): $ServerSocketChannel
public "bind"(arg0: $SocketAddress$$Type): void
public "bind"(arg0: $SocketAddress$$Type, arg1: integer): void
public "isClosed"(): boolean
public "setReuseAddress"(arg0: boolean): void
public "setSoTimeout"(arg0: integer): void
public "getSoTimeout"(): integer
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
public "getReceiveBufferSize"(): integer
public "setReceiveBufferSize"(arg0: integer): void
public "getInetAddress"(): $InetAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
public "isBound"(): boolean
/**
 * 
 * @deprecated
 */
public static "setSocketFactory"(arg0: $SocketImplFactory$$Type): void
get "channel"(): $ServerSocketChannel
get "closed"(): boolean
set "reuseAddress"(value: boolean)
set "soTimeout"(value: integer)
get "soTimeout"(): integer
get "receiveBufferSize"(): integer
set "receiveBufferSize"(value: integer)
get "inetAddress"(): $InetAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
get "bound"(): boolean
set "socketFactory"(value: $SocketImplFactory$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSocket$$Type = ($ServerSocket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerSocket$$Original = $ServerSocket;}
declare module "java.net.URLStreamHandlerFactory" {
import {$URLStreamHandler, $URLStreamHandler$$Type} from "java.net.URLStreamHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $URLStreamHandlerFactory$$Interface {

(arg0: StringJS): $URLStreamHandler$$Type
}

export class $URLStreamHandlerFactory implements $URLStreamHandlerFactory$$Interface {
 "createURLStreamHandler"(arg0: StringJS): $URLStreamHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandlerFactory$$Type = ((arg0: StringJS) => $URLStreamHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $URLStreamHandlerFactory$$Original = $URLStreamHandlerFactory;}
declare module "java.net.ContentHandlerFactory" {
import {$ContentHandler, $ContentHandler$$Type} from "java.net.ContentHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ContentHandlerFactory$$Interface {

(arg0: StringJS): $ContentHandler$$Type
}

export class $ContentHandlerFactory implements $ContentHandlerFactory$$Interface {
 "createContentHandler"(arg0: StringJS): $ContentHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandlerFactory$$Type = ((arg0: StringJS) => $ContentHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContentHandlerFactory$$Original = $ContentHandlerFactory;}
declare module "java.net.ProtocolFamily" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProtocolFamily$$Interface {

(): StringJS
}

export class $ProtocolFamily implements $ProtocolFamily$$Interface {
 "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtocolFamily$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProtocolFamily$$Original = $ProtocolFamily;}
declare module "java.net.SocketOption" {
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketOption$$Interface<T> {
}

export class $SocketOption<T> implements $SocketOption$$Interface {
 "name"(): StringJS
 "type"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketOption$$Type<T> = ($SocketOption<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SocketOption$$Original<T> = $SocketOption<(T)>;}
declare module "java.net.ContentHandler" {
import {$URLConnection$$Type} from "java.net.URLConnection"
import {$Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ContentHandler {
constructor()

public "getContent"(arg0: $URLConnection$$Type): any
public "getContent"(arg0: $URLConnection$$Type, arg1: ($Class$$Type)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandler$$Type = ($ContentHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContentHandler$$Original = $ContentHandler;}
declare module "java.net.InetSocketAddress" {
import {$SocketAddress} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetSocketAddress extends $SocketAddress {
constructor(arg0: $InetAddress$$Type, arg1: integer)
constructor(arg0: integer)
constructor(arg0: StringJS, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getAddress"(): $InetAddress
public "getPort"(): integer
public "isUnresolved"(): boolean
public "getHostName"(): StringJS
public "getHostString"(): StringJS
public static "createUnresolved"(arg0: StringJS, arg1: integer): $InetSocketAddress
get "address"(): $InetAddress
get "port"(): integer
get "unresolved"(): boolean
get "hostName"(): StringJS
get "hostString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetSocketAddress$$Type = ($InetSocketAddress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InetSocketAddress$$Original = $InetSocketAddress;}
declare module "java.net.Proxy$Type" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy$Type extends $Enum<($Proxy$Type)> {
static readonly "SOCKS": $Proxy$Type
static readonly "HTTP": $Proxy$Type
static readonly "DIRECT": $Proxy$Type

public static "values"(): ($Proxy$Type)[]
public static "valueOf"(arg0: StringJS): $Proxy$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$Type$$Type = (("direct") | ("http") | ("socks"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Proxy$Type$$Original = $Proxy$Type;}
declare module "java.net.URLConnection" {
import {$ContentHandlerFactory$$Type} from "java.net.ContentHandlerFactory"
import {$Map} from "java.util.Map"
import {$Permission} from "java.security.Permission"
import {$FileNameMap, $FileNameMap$$Type} from "java.net.FileNameMap"
import {$List} from "java.util.List"
import {$URL} from "java.net.URL"
import {$Class$$Type} from "java.lang.Class"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$OutputStream} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLConnection {
public "getContentLengthLong"(): long
public "getHeaderFields"(): $Map<(StringJS), ($List<(StringJS)>)>
public "getHeaderField"(arg0: integer): StringJS
public "getHeaderField"(arg0: StringJS): StringJS
public static "guessContentTypeFromStream"(arg0: $InputStream$$Type): StringJS
public static "guessContentTypeFromName"(arg0: StringJS): StringJS
public "addRequestProperty"(arg0: StringJS, arg1: StringJS): void
public "getRequestProperty"(arg0: StringJS): StringJS
public "getRequestProperties"(): $Map<(StringJS), ($List<(StringJS)>)>
public "getHeaderFieldKey"(arg0: integer): StringJS
public "getContentType"(): StringJS
public "getDefaultUseCaches"(): boolean
public static "getDefaultUseCaches"(arg0: StringJS): boolean
public "getHeaderFieldLong"(arg0: StringJS, arg1: long): long
public "getHeaderFieldDate"(arg0: StringJS, arg1: long): long
public static "getFileNameMap"(): $FileNameMap
public static "setFileNameMap"(arg0: $FileNameMap$$Type): void
public "setConnectTimeout"(arg0: integer): void
public "getConnectTimeout"(): integer
public "setReadTimeout"(arg0: integer): void
public "getReadTimeout"(): integer
public "getContentEncoding"(): StringJS
public "getExpiration"(): long
public "getHeaderFieldInt"(arg0: StringJS, arg1: integer): integer
public "setDoInput"(arg0: boolean): void
public "getDoInput"(): boolean
public "setDoOutput"(arg0: boolean): void
public "getDoOutput"(): boolean
public "setAllowUserInteraction"(arg0: boolean): void
public "getAllowUserInteraction"(): boolean
public static "setDefaultAllowUserInteraction"(arg0: boolean): void
public static "getDefaultAllowUserInteraction"(): boolean
public "getUseCaches"(): boolean
public "setIfModifiedSince"(arg0: long): void
public "getIfModifiedSince"(): long
public "setDefaultUseCaches"(arg0: boolean): void
public static "setDefaultUseCaches"(arg0: StringJS, arg1: boolean): void
/**
 * 
 * @deprecated
 */
public static "setDefaultRequestProperty"(arg0: StringJS, arg1: StringJS): void
/**
 * 
 * @deprecated
 */
public static "getDefaultRequestProperty"(arg0: StringJS): StringJS
public static "setContentHandlerFactory"(arg0: $ContentHandlerFactory$$Type): void
public "getOutputStream"(): $OutputStream
public "toString"(): StringJS
public "connect"(): void
public "getInputStream"(): $InputStream
public "getContent"(): any
public "getContent"(arg0: ($Class$$Type<(never)>)[]): any
public "getPermission"(): $Permission
public "getDate"(): long
public "setUseCaches"(arg0: boolean): void
public "getLastModified"(): long
public "getContentLength"(): integer
public "getURL"(): $URL
public "setRequestProperty"(arg0: StringJS, arg1: StringJS): void
get "contentLengthLong"(): long
get "headerFields"(): $Map<(StringJS), ($List<(StringJS)>)>
get "requestProperties"(): $Map<(StringJS), ($List<(StringJS)>)>
get "contentType"(): StringJS
get "defaultUseCaches"(): boolean
get "fileNameMap"(): $FileNameMap
set "fileNameMap"(value: $FileNameMap$$Type)
set "connectTimeout"(value: integer)
get "connectTimeout"(): integer
set "readTimeout"(value: integer)
get "readTimeout"(): integer
get "contentEncoding"(): StringJS
get "expiration"(): long
set "doInput"(value: boolean)
get "doInput"(): boolean
set "doOutput"(value: boolean)
get "doOutput"(): boolean
set "allowUserInteraction"(value: boolean)
get "allowUserInteraction"(): boolean
set "defaultAllowUserInteraction"(value: boolean)
get "defaultAllowUserInteraction"(): boolean
get "useCaches"(): boolean
set "ifModifiedSince"(value: long)
get "ifModifiedSince"(): long
set "defaultUseCaches"(value: boolean)
set "contentHandlerFactory"(value: $ContentHandlerFactory$$Type)
get "outputStream"(): $OutputStream
get "inputStream"(): $InputStream
get "content"(): any
get "permission"(): $Permission
get "date"(): long
set "useCaches"(value: boolean)
get "lastModified"(): long
get "contentLength"(): integer
get "URL"(): $URL
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLConnection$$Type = ($URLConnection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $URLConnection$$Original = $URLConnection;}
declare module "java.net.SocketAddress" {
import {$Serializable$$Interface} from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketAddress implements $Serializable$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketAddress$$Type = ($SocketAddress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SocketAddress$$Original = $SocketAddress;}
declare module "java.net.Socket" {
import {$Proxy$$Type} from "java.net.Proxy"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$SocketChannel} from "java.nio.channels.SocketChannel"
import {$SocketImplFactory$$Type} from "java.net.SocketImplFactory"
import {$Set} from "java.util.Set"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$InputStream} from "java.io.InputStream"
import {$OutputStream} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Socket implements $Closeable$$Interface {
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: integer, arg2: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: $InetAddress$$Type, arg1: integer, arg2: boolean)
constructor()
constructor(arg0: StringJS, arg1: integer)
constructor(arg0: $Proxy$$Type)
constructor(arg0: $InetAddress$$Type, arg1: integer)
constructor(arg0: StringJS, arg1: integer, arg2: $InetAddress$$Type, arg3: integer)
constructor(arg0: $InetAddress$$Type, arg1: integer, arg2: $InetAddress$$Type, arg3: integer)

public "supportedOptions"(): $Set<($SocketOption<(never)>)>
public "isConnected"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $Socket
public "getLocalAddress"(): $InetAddress
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "shutdownInput"(): void
public "shutdownOutput"(): void
public "getOutputStream"(): $OutputStream
public "toString"(): StringJS
public "connect"(arg0: $SocketAddress$$Type, arg1: integer): void
public "connect"(arg0: $SocketAddress$$Type): void
public "close"(): void
public "getPort"(): integer
public "getInputStream"(): $InputStream
public "getChannel"(): $SocketChannel
public "bind"(arg0: $SocketAddress$$Type): void
public "isClosed"(): boolean
public "isOutputShutdown"(): boolean
public "isInputShutdown"(): boolean
public "setReuseAddress"(arg0: boolean): void
public "setSoLinger"(arg0: boolean, arg1: integer): void
public "setKeepAlive"(arg0: boolean): void
public "setOOBInline"(arg0: boolean): void
public "getTrafficClass"(): integer
public "setTrafficClass"(arg0: integer): void
public "getSoLinger"(): integer
public "setTcpNoDelay"(arg0: boolean): void
public "setSendBufferSize"(arg0: integer): void
public "setSoTimeout"(arg0: integer): void
public "getSendBufferSize"(): integer
public "getSoTimeout"(): integer
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
public "getReceiveBufferSize"(): integer
public "setReceiveBufferSize"(arg0: integer): void
public "getInetAddress"(): $InetAddress
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getTcpNoDelay"(): boolean
public "getKeepAlive"(): boolean
public "getReuseAddress"(): boolean
public "sendUrgentData"(arg0: integer): void
public "getOOBInline"(): boolean
/**
 * 
 * @deprecated
 */
public static "setSocketImplFactory"(arg0: $SocketImplFactory$$Type): void
public "isBound"(): boolean
get "connected"(): boolean
get "localAddress"(): $InetAddress
get "outputStream"(): $OutputStream
get "port"(): integer
get "inputStream"(): $InputStream
get "channel"(): $SocketChannel
get "closed"(): boolean
get "outputShutdown"(): boolean
get "inputShutdown"(): boolean
set "reuseAddress"(value: boolean)
set "keepAlive"(value: boolean)
set "OOBInline"(value: boolean)
get "trafficClass"(): integer
set "trafficClass"(value: integer)
get "soLinger"(): integer
set "tcpNoDelay"(value: boolean)
set "sendBufferSize"(value: integer)
set "soTimeout"(value: integer)
get "sendBufferSize"(): integer
get "soTimeout"(): integer
get "receiveBufferSize"(): integer
set "receiveBufferSize"(value: integer)
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "tcpNoDelay"(): boolean
get "keepAlive"(): boolean
get "reuseAddress"(): boolean
get "OOBInline"(): boolean
set "socketImplFactory"(value: $SocketImplFactory$$Type)
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Socket$$Type = ($Socket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Socket$$Original = $Socket;}
declare module "java.net.Proxy" {
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Proxy$Type, $Proxy$Type$$Type} from "java.net.Proxy$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy {
static readonly "NO_PROXY": $Proxy

constructor(arg0: $Proxy$Type$$Type, arg1: $SocketAddress$$Type)

public "type"(): $Proxy$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "address"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$$Type = ($Proxy);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Proxy$$Original = $Proxy;}
declare module "java.net.URLStreamHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLStreamHandler {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandler$$Type = ($URLStreamHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $URLStreamHandler$$Original = $URLStreamHandler;}
