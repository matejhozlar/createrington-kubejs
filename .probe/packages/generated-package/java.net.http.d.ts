declare module "java.net.http.HttpRequest$BodyPublisher" {
import {$Flow$Publisher$$Interface} from "java.util.concurrent.Flow$Publisher"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Flow$Subscriber$$Type} from "java.util.concurrent.Flow$Subscriber"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $HttpRequest$BodyPublisher$$Interface extends $Flow$Publisher$$Interface<($ByteBuffer)> {
}

export class $HttpRequest$BodyPublisher implements $HttpRequest$BodyPublisher$$Interface {
 "contentLength"(): long
 "subscribe"(arg0: $Flow$Subscriber$$Type<($ByteBuffer$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpRequest$BodyPublisher$$Type = ($HttpRequest$BodyPublisher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HttpRequest$BodyPublisher$$Original = $HttpRequest$BodyPublisher;}
