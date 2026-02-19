declare module "moe.wolfgirl.probejs.plugin.Probe" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Entity} from "net.minecraft.world.entity.Entity"

/**
 * Debugging utility for easier check on players, blocks, items, etc.
 */
export class $Probe {
static readonly "INSTANCE": $Probe

constructor()

public "getCurrentPlayer"(): $Player
public "getLastRightClickedBlock"(): $LevelBlock
public "getLastRightClickedEntity"(): $Entity
/**
 * Capture the class of the object passed in for ProbeJS to dump.
 */
public "captureType"<T>(object: T): T
get "currentPlayer"(): $Player
get "lastRightClickedBlock"(): $LevelBlock
get "lastRightClickedEntity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Probe$$Type = ($Probe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Probe$$Original = $Probe;}
