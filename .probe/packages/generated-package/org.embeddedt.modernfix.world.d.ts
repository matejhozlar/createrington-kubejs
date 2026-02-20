declare module "org.embeddedt.modernfix.world.StrongholdLocationCache" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $StrongholdLocationCache extends $SavedData {
constructor()

public static "load"(arg: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): $StrongholdLocationCache
public static "factory"(serverLevel: $ServerLevel$$Type): $SavedData$Factory<($StrongholdLocationCache)>
public "save"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): $CompoundTag
public static "getFileId"(dimensionType: $Holder$$Type<($DimensionType)>): StringJS
public "setChunkPosList"(positions: $List$$Type<($ChunkPos$$Type)>): void
public "getChunkPosList"(): $List<($ChunkPos)>
set "chunkPosList"(value: $List$$Type<($ChunkPos$$Type)>)
get "chunkPosList"(): $List<($ChunkPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrongholdLocationCache$$Type = ($StrongholdLocationCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrongholdLocationCache$$Original = $StrongholdLocationCache;}
