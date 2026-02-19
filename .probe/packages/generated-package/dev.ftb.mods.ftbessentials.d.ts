declare module "dev.ftb.mods.ftbessentials.mixin.PlayerListAccess" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerStatsCounter, $ServerStatsCounter$$Type} from "net.minecraft.stats.ServerStatsCounter"

export interface $PlayerListAccess$$Interface {

(): $Map$$Type<($UUID$$Type), ($ServerStatsCounter$$Type)>
get "stats"(): $Map<($UUID), ($ServerStatsCounter)>
}

export class $PlayerListAccess implements $PlayerListAccess$$Interface {
 "getStats"(): $Map<($UUID), ($ServerStatsCounter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerListAccess$$Type = (() => $Map$$Type<($UUID$$Type), ($ServerStatsCounter$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerListAccess$$Original = $PlayerListAccess;}
declare module "dev.ftb.mods.ftbessentials.util.neoforge.WarmupCooldownTeleporterImpl$EssentialsTeleport" {
import {$EntityTeleportEvent$TeleportCommand} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent$TeleportCommand"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WarmupCooldownTeleporterImpl$EssentialsTeleport extends $EntityTeleportEvent$TeleportCommand {
constructor(entity: $Entity$$Type, targetX: double, targetY: double, targetZ: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarmupCooldownTeleporterImpl$EssentialsTeleport$$Type = ($WarmupCooldownTeleporterImpl$EssentialsTeleport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WarmupCooldownTeleporterImpl$EssentialsTeleport$$Original = $WarmupCooldownTeleporterImpl$EssentialsTeleport;}
