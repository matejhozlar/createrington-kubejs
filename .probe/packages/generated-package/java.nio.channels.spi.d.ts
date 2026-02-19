declare module "java.nio.channels.spi.AbstractSelector" {
import {$Selector} from "java.nio.channels.Selector"
import {$SelectorProvider} from "java.nio.channels.spi.SelectorProvider"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelector extends $Selector {
public "isOpen"(): boolean
public "provider"(): $SelectorProvider
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSelector$$Type = ($AbstractSelector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSelector$$Original = $AbstractSelector;}
declare module "java.nio.channels.spi.AbstractSelectableChannel" {
import {$Selector$$Type} from "java.nio.channels.Selector"
import {$SelectionKey} from "java.nio.channels.SelectionKey"
import {$SelectorProvider} from "java.nio.channels.spi.SelectorProvider"
import {$SelectableChannel} from "java.nio.channels.SelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelectableChannel extends $SelectableChannel {
public "isBlocking"(): boolean
public "configureBlocking"(arg0: boolean): $SelectableChannel
public "keyFor"(arg0: $Selector$$Type): $SelectionKey
public "blockingLock"(): any
public "isRegistered"(): boolean
public "register"(arg0: $Selector$$Type, arg1: integer, arg2: any): $SelectionKey
public "provider"(): $SelectorProvider
public "isOpen"(): boolean
public "close"(): void
get "blocking"(): boolean
get "registered"(): boolean
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSelectableChannel$$Type = ($AbstractSelectableChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSelectableChannel$$Original = $AbstractSelectableChannel;}
declare module "java.nio.channels.spi.AbstractInterruptibleChannel" {
import {$Channel$$Interface} from "java.nio.channels.Channel"
import {$InterruptibleChannel$$Interface} from "java.nio.channels.InterruptibleChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractInterruptibleChannel implements $Channel$$Interface, $InterruptibleChannel$$Interface {
public "isOpen"(): boolean
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractInterruptibleChannel$$Type = ($AbstractInterruptibleChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractInterruptibleChannel$$Original = $AbstractInterruptibleChannel;}
declare module "java.nio.channels.spi.SelectorProvider" {
import {$Channel} from "java.nio.channels.Channel"
import {$ProtocolFamily$$Type} from "java.net.ProtocolFamily"
import {$ServerSocketChannel} from "java.nio.channels.ServerSocketChannel"
import {$AbstractSelector} from "java.nio.channels.spi.AbstractSelector"
import {$SocketChannel} from "java.nio.channels.SocketChannel"
import {$Pipe} from "java.nio.channels.Pipe"
import {$DatagramChannel} from "java.nio.channels.DatagramChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectorProvider {
public "openSocketChannel"(): $SocketChannel
public "openSocketChannel"(arg0: $ProtocolFamily$$Type): $SocketChannel
public static "provider"(): $SelectorProvider
public "inheritedChannel"(): $Channel
public "openSelector"(): $AbstractSelector
public "openDatagramChannel"(arg0: $ProtocolFamily$$Type): $DatagramChannel
public "openDatagramChannel"(): $DatagramChannel
public "openPipe"(): $Pipe
public "openServerSocketChannel"(): $ServerSocketChannel
public "openServerSocketChannel"(arg0: $ProtocolFamily$$Type): $ServerSocketChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectorProvider$$Type = ($SelectorProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectorProvider$$Original = $SelectorProvider;}
