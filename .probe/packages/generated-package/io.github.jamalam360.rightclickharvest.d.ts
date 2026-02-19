declare module "io.github.jamalam360.rightclickharvest.HarvestContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record} from "java.lang.Record"

export class $HarvestContext extends $Record {
constructor(player: $Player$$Type, block: $Block$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "block"(): $Block
public "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestContext$$Type = ({"block"?: $Block$$Type, "player"?: $Player$$Type}) | ([block?: $Block$$Type, player?: $Player$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestContext$$Original = $HarvestContext;}
declare module "io.github.jamalam360.rightclickharvest.neoforge.RightClickHarvestNeoForgeEvents$AfterHarvest" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$HarvestContext} from "io.github.jamalam360.rightclickharvest.HarvestContext"

export class $RightClickHarvestNeoForgeEvents$AfterHarvest extends $Event {
public "getContext"(): $HarvestContext
get "context"(): $HarvestContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RightClickHarvestNeoForgeEvents$AfterHarvest$$Type = ($RightClickHarvestNeoForgeEvents$AfterHarvest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RightClickHarvestNeoForgeEvents$AfterHarvest$$Original = $RightClickHarvestNeoForgeEvents$AfterHarvest;}
