declare module "java.nio.channels.FileChannel" {
import {$SeekableByteChannel, $SeekableByteChannel$$Interface} from "java.nio.channels.SeekableByteChannel"
import {$Arena$$Type} from "java.lang.foreign.Arena"
import {$FileAttribute$$Type} from "java.nio.file.attribute.FileAttribute"
import {$AbstractInterruptibleChannel} from "java.nio.channels.spi.AbstractInterruptibleChannel"
import {$MemorySegment} from "java.lang.foreign.MemorySegment"
import {$ReadableByteChannel$$Type} from "java.nio.channels.ReadableByteChannel"
import {$ScatteringByteChannel$$Interface} from "java.nio.channels.ScatteringByteChannel"
import {$FileChannel$MapMode$$Type} from "java.nio.channels.FileChannel$MapMode"
import {$FileLock} from "java.nio.channels.FileLock"
import {$OpenOption$$Type} from "java.nio.file.OpenOption"
import {$Set$$Type} from "java.util.Set"
import {$WritableByteChannel$$Type} from "java.nio.channels.WritableByteChannel"
import {$MappedByteBuffer} from "java.nio.MappedByteBuffer"
import {$Path$$Type} from "java.nio.file.Path"
import {$GatheringByteChannel$$Interface} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel extends $AbstractInterruptibleChannel implements $SeekableByteChannel$$Interface, $GatheringByteChannel$$Interface, $ScatteringByteChannel$$Interface {
public "transferFrom"(arg0: $ReadableByteChannel$$Type, arg1: long, arg2: long): long
public "lock"(arg0: long, arg1: long, arg2: boolean): $FileLock
public "lock"(): $FileLock
public "size"(): long
public "position"(arg0: long): $FileChannel
public "position"(): long
public "map"(arg0: $FileChannel$MapMode$$Type, arg1: long, arg2: long): $MappedByteBuffer
public "map"(arg0: $FileChannel$MapMode$$Type, arg1: long, arg2: long, arg3: $Arena$$Type): $MemorySegment
public "write"(arg0: $ByteBuffer$$Type, arg1: long): integer
public "write"(arg0: $ByteBuffer$$Type): integer
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "read"(arg0: $ByteBuffer$$Type, arg1: long): integer
public "read"(arg0: $ByteBuffer$$Type): integer
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public static "open"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $FileChannel
public static "open"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, ...arg2: ($FileAttribute$$Type<(never)>)[]): $FileChannel
public "transferTo"(arg0: long, arg1: long, arg2: $WritableByteChannel$$Type): long
public "tryLock"(): $FileLock
public "tryLock"(arg0: long, arg1: long, arg2: boolean): $FileLock
public "force"(arg0: boolean): void
public "truncate"(arg0: long): $SeekableByteChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileChannel$$Type = ($FileChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileChannel$$Original = $FileChannel;}
declare module "java.nio.channels.Channel" {
import {$Closeable$$Interface} from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$$Interface extends $Closeable$$Interface {
get "open"(): boolean
}

export class $Channel implements $Channel$$Interface {
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$$Type = ($Channel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Channel$$Original = $Channel;}
declare module "java.nio.channels.ReadableByteChannel" {
import {$Channel$$Interface} from "java.nio.channels.Channel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReadableByteChannel$$Interface extends $Channel$$Interface {
get "open"(): boolean
}

export class $ReadableByteChannel implements $ReadableByteChannel$$Interface {
 "read"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableByteChannel$$Type = ($ReadableByteChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReadableByteChannel$$Original = $ReadableByteChannel;}
declare module "java.nio.channels.FileChannel$MapMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel$MapMode {
static readonly "READ_ONLY": $FileChannel$MapMode
static readonly "READ_WRITE": $FileChannel$MapMode
static readonly "PRIVATE": $FileChannel$MapMode

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileChannel$MapMode$$Type = ($FileChannel$MapMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileChannel$MapMode$$Original = $FileChannel$MapMode;}
declare module "java.nio.channels.Pipe$SourceChannel" {
import {$ReadableByteChannel$$Interface} from "java.nio.channels.ReadableByteChannel"
import {$ScatteringByteChannel$$Interface} from "java.nio.channels.ScatteringByteChannel"
import {$AbstractSelectableChannel} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SourceChannel extends $AbstractSelectableChannel implements $ReadableByteChannel$$Interface, $ScatteringByteChannel$$Interface {
public "validOps"(): integer
public "read"(arg0: $ByteBuffer$$Type): integer
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public "isOpen"(): boolean
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$SourceChannel$$Type = ($Pipe$SourceChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pipe$SourceChannel$$Original = $Pipe$SourceChannel;}
declare module "java.nio.channels.WritableByteChannel" {
import {$Channel$$Interface} from "java.nio.channels.Channel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WritableByteChannel$$Interface extends $Channel$$Interface {
get "open"(): boolean
}

export class $WritableByteChannel implements $WritableByteChannel$$Interface {
 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableByteChannel$$Type = ($WritableByteChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableByteChannel$$Original = $WritableByteChannel;}
declare module "java.nio.channels.FileLock" {
import {$Channel} from "java.nio.channels.Channel"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$FileChannel} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileLock implements $AutoCloseable$$Interface {
public "size"(): long
public "toString"(): StringJS
public "position"(): long
public "close"(): void
public "release"(): void
public "channel"(): $FileChannel
public "isValid"(): boolean
public "acquiredBy"(): $Channel
public "isShared"(): boolean
public "overlaps"(arg0: long, arg1: long): boolean
get "valid"(): boolean
get "shared"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileLock$$Type = ($FileLock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileLock$$Original = $FileLock;}
declare module "java.nio.channels.ServerSocketChannel" {
import {$NetworkChannel, $NetworkChannel$$Interface} from "java.nio.channels.NetworkChannel"
import {$ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$SocketChannel} from "java.nio.channels.SocketChannel"
import {$AbstractSelectableChannel} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$Set} from "java.util.Set"
import {$ServerSocket} from "java.net.ServerSocket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocketChannel extends $AbstractSelectableChannel implements $NetworkChannel$$Interface {
public "socket"(): $ServerSocket
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $ServerSocketChannel
public "getLocalAddress"(): $SocketAddress
public "validOps"(): integer
public "accept"(): $SocketChannel
public static "open"(): $ServerSocketChannel
public static "open"(arg0: $ProtocolFamily$$Type): $ServerSocketChannel
public "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
public "bind"(arg0: $SocketAddress$$Type, arg1: integer): $ServerSocketChannel
public "supportedOptions"(): $Set<($SocketOption<(never)>)>
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isOpen"(): boolean
public "close"(): void
get "localAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSocketChannel$$Type = ($ServerSocketChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerSocketChannel$$Original = $ServerSocketChannel;}
declare module "java.nio.channels.AsynchronousChannel" {
import {$Channel$$Interface} from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AsynchronousChannel$$Interface extends $Channel$$Interface {
get "open"(): boolean
}

export class $AsynchronousChannel implements $AsynchronousChannel$$Interface {
 "close"(): void
 "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AsynchronousChannel$$Type = ($AsynchronousChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AsynchronousChannel$$Original = $AsynchronousChannel;}
declare module "java.nio.channels.SocketChannel" {
import {$NetworkChannel, $NetworkChannel$$Interface} from "java.nio.channels.NetworkChannel"
import {$ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$ByteChannel$$Interface} from "java.nio.channels.ByteChannel"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ScatteringByteChannel$$Interface} from "java.nio.channels.ScatteringByteChannel"
import {$Socket} from "java.net.Socket"
import {$AbstractSelectableChannel} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$Set} from "java.util.Set"
import {$GatheringByteChannel$$Interface} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketChannel extends $AbstractSelectableChannel implements $ByteChannel$$Interface, $ScatteringByteChannel$$Interface, $GatheringByteChannel$$Interface, $NetworkChannel$$Interface {
public "socket"(): $Socket
public "isConnected"(): boolean
public "isConnectionPending"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $SocketChannel
public "getLocalAddress"(): $SocketAddress
public "getRemoteAddress"(): $SocketAddress
public "finishConnect"(): boolean
public "shutdownInput"(): $SocketChannel
public "shutdownOutput"(): $SocketChannel
public "validOps"(): integer
public "write"(arg0: $ByteBuffer$$Type): integer
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: $ByteBuffer$$Type): integer
public "connect"(arg0: $SocketAddress$$Type): boolean
public static "open"(): $SocketChannel
public static "open"(arg0: $ProtocolFamily$$Type): $SocketChannel
public static "open"(arg0: $SocketAddress$$Type): $SocketChannel
public "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
public "supportedOptions"(): $Set<($SocketOption<(never)>)>
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isOpen"(): boolean
public "close"(): void
get "connected"(): boolean
get "connectionPending"(): boolean
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketChannel$$Type = ($SocketChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SocketChannel$$Original = $SocketChannel;}
declare module "java.nio.channels.Pipe" {
import {$Pipe$SourceChannel} from "java.nio.channels.Pipe$SourceChannel"
import {$Pipe$SinkChannel} from "java.nio.channels.Pipe$SinkChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe {
public "source"(): $Pipe$SourceChannel
public static "open"(): $Pipe
public "sink"(): $Pipe$SinkChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$$Type = ($Pipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pipe$$Original = $Pipe;}
declare module "java.nio.channels.Pipe$SinkChannel" {
import {$AbstractSelectableChannel} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$WritableByteChannel$$Interface} from "java.nio.channels.WritableByteChannel"
import {$GatheringByteChannel$$Interface} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SinkChannel extends $AbstractSelectableChannel implements $WritableByteChannel$$Interface, $GatheringByteChannel$$Interface {
public "validOps"(): integer
public "write"(arg0: $ByteBuffer$$Type): integer
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "isOpen"(): boolean
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$SinkChannel$$Type = ($Pipe$SinkChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pipe$SinkChannel$$Original = $Pipe$SinkChannel;}
declare module "java.nio.channels.CompletionHandler" {
import {$Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CompletionHandler$$Interface<V, A> {
}

export class $CompletionHandler<V, A> implements $CompletionHandler$$Interface {
 "completed"(arg0: V, arg1: A): void
 "failed"(arg0: $Throwable$$Type, arg1: A): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletionHandler$$Type<V, A> = ($CompletionHandler<(V), (A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompletionHandler$$Original<V, A> = $CompletionHandler<(V), (A)>;}
declare module "java.nio.channels.MulticastChannel" {
import {$NetworkChannel, $NetworkChannel$$Interface} from "java.nio.channels.NetworkChannel"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress$$Type} from "java.net.InetAddress"
import {$Set} from "java.util.Set"
import {$MembershipKey} from "java.nio.channels.MembershipKey"
import {$NetworkInterface$$Type} from "java.net.NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MulticastChannel$$Interface extends $NetworkChannel$$Interface {
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export class $MulticastChannel implements $MulticastChannel$$Interface {
 "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type): $MembershipKey
 "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type, arg2: $InetAddress$$Type): $MembershipKey
 "close"(): void
 "supportedOptions"(): $Set<($SocketOption<(never)>)>
 "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $NetworkChannel
 "getLocalAddress"(): $SocketAddress
 "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
 "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
 "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MulticastChannel$$Type = ($MulticastChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MulticastChannel$$Original = $MulticastChannel;}
declare module "java.nio.channels.ByteChannel" {
import {$ReadableByteChannel$$Interface} from "java.nio.channels.ReadableByteChannel"
import {$WritableByteChannel$$Interface} from "java.nio.channels.WritableByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteChannel$$Interface extends $ReadableByteChannel$$Interface, $WritableByteChannel$$Interface {
get "open"(): boolean
}

export class $ByteChannel implements $ByteChannel$$Interface {
 "read"(arg0: $ByteBuffer$$Type): integer
 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteChannel$$Type = ($ByteChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteChannel$$Original = $ByteChannel;}
declare module "java.nio.channels.InterruptibleChannel" {
import {$Channel$$Interface} from "java.nio.channels.Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $InterruptibleChannel$$Interface extends $Channel$$Interface {
get "open"(): boolean
}

export class $InterruptibleChannel implements $InterruptibleChannel$$Interface {
 "close"(): void
 "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterruptibleChannel$$Type = ($InterruptibleChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterruptibleChannel$$Original = $InterruptibleChannel;}
declare module "java.nio.channels.AsynchronousFileChannel" {
import {$AsynchronousChannel$$Interface} from "java.nio.channels.AsynchronousChannel"
import {$FileAttribute$$Type} from "java.nio.file.attribute.FileAttribute"
import {$FileLock, $FileLock$$Type} from "java.nio.channels.FileLock"
import {$Future} from "java.util.concurrent.Future"
import {$OpenOption$$Type} from "java.nio.file.OpenOption"
import {$Set$$Type} from "java.util.Set"
import {$ExecutorService$$Type} from "java.util.concurrent.ExecutorService"
import {$Path$$Type} from "java.nio.file.Path"
import {$CompletionHandler$$Type} from "java.nio.channels.CompletionHandler"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AsynchronousFileChannel implements $AsynchronousChannel$$Interface {
public "lock"(arg0: long, arg1: long, arg2: boolean): $Future<($FileLock)>
public "lock"<A>(arg0: A, arg1: $CompletionHandler$$Type<($FileLock$$Type), (A)>): void
public "lock"<A>(arg0: long, arg1: long, arg2: boolean, arg3: A, arg4: $CompletionHandler$$Type<($FileLock$$Type), (A)>): void
public "lock"(): $Future<($FileLock)>
public "size"(): long
public "write"(arg0: $ByteBuffer$$Type, arg1: long): $Future<(integer)>
public "write"<A>(arg0: $ByteBuffer$$Type, arg1: long, arg2: A, arg3: $CompletionHandler$$Type<(integer), (A)>): void
public "read"(arg0: $ByteBuffer$$Type, arg1: long): $Future<(integer)>
public "read"<A>(arg0: $ByteBuffer$$Type, arg1: long, arg2: A, arg3: $CompletionHandler$$Type<(integer), (A)>): void
public static "open"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, arg2: $ExecutorService$$Type, ...arg3: ($FileAttribute$$Type<(never)>)[]): $AsynchronousFileChannel
public static "open"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $AsynchronousFileChannel
public "tryLock"(): $FileLock
public "tryLock"(arg0: long, arg1: long, arg2: boolean): $FileLock
public "force"(arg0: boolean): void
public "truncate"(arg0: long): $AsynchronousFileChannel
public "close"(): void
public "isOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AsynchronousFileChannel$$Type = ($AsynchronousFileChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AsynchronousFileChannel$$Original = $AsynchronousFileChannel;}
declare module "java.nio.channels.GatheringByteChannel" {
import {$WritableByteChannel$$Interface} from "java.nio.channels.WritableByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GatheringByteChannel$$Interface extends $WritableByteChannel$$Interface {
get "open"(): boolean
}

export class $GatheringByteChannel implements $GatheringByteChannel$$Interface {
 "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
 "write"(arg0: ($ByteBuffer$$Type)[]): long
 "write"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatheringByteChannel$$Type = ($GatheringByteChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatheringByteChannel$$Original = $GatheringByteChannel;}
declare module "java.nio.channels.DatagramChannel" {
import {$ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$ByteChannel$$Interface} from "java.nio.channels.ByteChannel"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress$$Type} from "java.net.InetAddress"
import {$AbstractSelectableChannel} from "java.nio.channels.spi.AbstractSelectableChannel"
import {$NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$ScatteringByteChannel$$Interface} from "java.nio.channels.ScatteringByteChannel"
import {$MulticastChannel$$Interface} from "java.nio.channels.MulticastChannel"
import {$Set} from "java.util.Set"
import {$MembershipKey} from "java.nio.channels.MembershipKey"
import {$GatheringByteChannel$$Interface} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$DatagramSocket} from "java.net.DatagramSocket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramChannel extends $AbstractSelectableChannel implements $ByteChannel$$Interface, $ScatteringByteChannel$$Interface, $GatheringByteChannel$$Interface, $MulticastChannel$$Interface {
public "disconnect"(): $DatagramChannel
public "socket"(): $DatagramSocket
public "isConnected"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $DatagramChannel
public "getLocalAddress"(): $SocketAddress
public "getRemoteAddress"(): $SocketAddress
public "validOps"(): integer
public "write"(arg0: ($ByteBuffer$$Type)[]): long
public "write"(arg0: $ByteBuffer$$Type): integer
public "write"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
public "read"(arg0: ($ByteBuffer$$Type)[]): long
public "read"(arg0: $ByteBuffer$$Type): integer
public "connect"(arg0: $SocketAddress$$Type): $DatagramChannel
public static "open"(): $DatagramChannel
public static "open"(arg0: $ProtocolFamily$$Type): $DatagramChannel
public "bind"(arg0: $SocketAddress$$Type): $DatagramChannel
public "receive"(arg0: $ByteBuffer$$Type): $SocketAddress
public "send"(arg0: $ByteBuffer$$Type, arg1: $SocketAddress$$Type): integer
public "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type): $MembershipKey
public "join"(arg0: $InetAddress$$Type, arg1: $NetworkInterface$$Type, arg2: $InetAddress$$Type): $MembershipKey
public "close"(): void
public "supportedOptions"(): $Set<($SocketOption<(never)>)>
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "isOpen"(): boolean
get "connected"(): boolean
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramChannel$$Type = ($DatagramChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DatagramChannel$$Original = $DatagramChannel;}
declare module "java.nio.channels.ScatteringByteChannel" {
import {$ReadableByteChannel$$Interface} from "java.nio.channels.ReadableByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScatteringByteChannel$$Interface extends $ReadableByteChannel$$Interface {
get "open"(): boolean
}

export class $ScatteringByteChannel implements $ScatteringByteChannel$$Interface {
 "read"(arg0: ($ByteBuffer$$Type)[], arg1: integer, arg2: integer): long
 "read"(arg0: ($ByteBuffer$$Type)[]): long
 "read"(arg0: $ByteBuffer$$Type): integer
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScatteringByteChannel$$Type = ($ScatteringByteChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScatteringByteChannel$$Original = $ScatteringByteChannel;}
declare module "java.nio.channels.SeekableByteChannel" {
import {$ByteChannel$$Interface} from "java.nio.channels.ByteChannel"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SeekableByteChannel$$Interface extends $ByteChannel$$Interface {
get "open"(): boolean
}

export class $SeekableByteChannel implements $SeekableByteChannel$$Interface {
 "size"(): long
 "position"(arg0: long): $SeekableByteChannel
 "position"(): long
 "write"(arg0: $ByteBuffer$$Type): integer
 "read"(arg0: $ByteBuffer$$Type): integer
 "truncate"(arg0: long): $SeekableByteChannel
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeekableByteChannel$$Type = ($SeekableByteChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SeekableByteChannel$$Original = $SeekableByteChannel;}
declare module "java.nio.channels.Selector" {
import {$SelectorProvider} from "java.nio.channels.spi.SelectorProvider"
import {$SelectionKey, $SelectionKey$$Type} from "java.nio.channels.SelectionKey"
import {$Set} from "java.util.Set"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$Consumer$$Type} from "java.util.function.Consumer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Selector implements $Closeable$$Interface {
public "isOpen"(): boolean
public "provider"(): $SelectorProvider
public "close"(): void
public "keys"(): $Set<($SelectionKey)>
public static "open"(): $Selector
public "select"(arg0: $Consumer$$Type<($SelectionKey)>, arg1: long): integer
public "select"(arg0: $Consumer$$Type<($SelectionKey)>): integer
public "select"(): integer
public "select"(arg0: long): integer
public "wakeup"(): $Selector
public "selectNow"(): integer
public "selectNow"(arg0: $Consumer$$Type<($SelectionKey)>): integer
public "selectedKeys"(): $Set<($SelectionKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Selector$$Type = ($Selector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Selector$$Original = $Selector;}
declare module "java.nio.channels.MembershipKey" {
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$MulticastChannel} from "java.nio.channels.MulticastChannel"
import {$NetworkInterface} from "java.net.NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MembershipKey {
public "drop"(): void
public "group"(): $InetAddress
public "block"(arg0: $InetAddress$$Type): $MembershipKey
public "channel"(): $MulticastChannel
public "isValid"(): boolean
public "sourceAddress"(): $InetAddress
public "unblock"(arg0: $InetAddress$$Type): $MembershipKey
public "networkInterface"(): $NetworkInterface
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MembershipKey$$Type = ($MembershipKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MembershipKey$$Original = $MembershipKey;}
declare module "java.nio.channels.NetworkChannel" {
import {$Channel$$Interface} from "java.nio.channels.Channel"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Set} from "java.util.Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $NetworkChannel$$Interface extends $Channel$$Interface {
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export class $NetworkChannel implements $NetworkChannel$$Interface {
 "supportedOptions"(): $Set<($SocketOption<(never)>)>
 "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $NetworkChannel
 "getLocalAddress"(): $SocketAddress
 "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
 "bind"(arg0: $SocketAddress$$Type): $NetworkChannel
 "isOpen"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkChannel$$Type = ($NetworkChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkChannel$$Original = $NetworkChannel;}
