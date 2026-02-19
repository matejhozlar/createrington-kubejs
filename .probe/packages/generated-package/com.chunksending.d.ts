declare module "com.chunksending.IBatchedUpdateSender" {
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $IBatchedUpdateSender$$Interface {
}

export class $IBatchedUpdateSender implements $IBatchedUpdateSender$$Interface {
 "reset"(): void
 "tick"(arg0: $ServerPlayer$$Type): void
 "attachToPending"(arg0: $ChunkPos$$Type, arg1: $Packet$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBatchedUpdateSender$$Type = ($IBatchedUpdateSender);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBatchedUpdateSender$$Original = $IBatchedUpdateSender;}
