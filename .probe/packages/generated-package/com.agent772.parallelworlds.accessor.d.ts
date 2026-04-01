declare module "com.agent772.parallelworlds.accessor.IServerDimensionAccessor" {
import {$Map} from "java.util.Map"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel} from "net.minecraft.server.level.ServerLevel"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export interface $IServerDimensionAccessor$$Interface {
}

export class $IServerDimensionAccessor implements $IServerDimensionAccessor$$Interface {
 "pw$createRuntimeDimension"(arg0: $ResourceKey$$Type<($Level)>, arg1: $Holder$$Type<($DimensionType)>, arg2: $ChunkGenerator$$Type, arg3: long): $ServerLevel
 "pw$removeRuntimeDimension"(arg0: $ResourceKey$$Type<($Level)>): void
 "pw$getRuntimeLevels"(): $Map<($ResourceKey<($Level)>), ($ServerLevel)>
 "pw$cleanupAllRuntimeDimensions"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDimensionAccessor$$Type = ($IServerDimensionAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerDimensionAccessor$$Original = $IServerDimensionAccessor;}
