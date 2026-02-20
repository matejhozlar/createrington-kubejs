declare module "com.lightning.northstar.accessor.NorthstarFluidState" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SealingMode, $SealingMode$$Type} from "com.lightning.northstar.world.sealer.SealingMode"

export interface $NorthstarFluidState$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $SealingMode): void
}

export class $NorthstarFluidState implements $NorthstarFluidState$$Interface {
/**
 * 
 * @deprecated
 */
 "northstar$onSealUpdated"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $SealingMode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarFluidState$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $SealingMode) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarFluidState$$Original = $NorthstarFluidState;}
declare module "com.lightning.northstar.accessor.NorthstarServerPlayer" {
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $NorthstarServerPlayer$$Interface {
}

export class $NorthstarServerPlayer implements $NorthstarServerPlayer$$Interface {
 "northstar$setPositionRelativeTo"(other: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarServerPlayer$$Type = ($NorthstarServerPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarServerPlayer$$Original = $NorthstarServerPlayer;}
declare module "com.lightning.northstar.accessor.NorthstarLevel" {
import {$NorthstarTemperature} from "com.lightning.northstar.world.temperature.NorthstarTemperature"
import {$LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"
import {$NorthstarOxygen} from "com.lightning.northstar.world.oxygen.NorthstarOxygen"

export interface $NorthstarLevel$$Interface {
}

export class $NorthstarLevel implements $NorthstarLevel$$Interface {
 "northstar$queueBlockUpdates"(positions: $LongCollection$$Type): void
 "northstar$temperature"(): $NorthstarTemperature
 "northstar$oxygen"(): $NorthstarOxygen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarLevel$$Type = ($NorthstarLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarLevel$$Original = $NorthstarLevel;}
declare module "com.lightning.northstar.accessor.NorthstarPlayer" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $NorthstarPlayer$$Interface {
}

export class $NorthstarPlayer implements $NorthstarPlayer$$Interface {
 "northstar$setRelativeEntity"(entity: $Entity$$Type, ticks: integer): void
 "northstar$getRelativeEntity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarPlayer$$Type = ($NorthstarPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarPlayer$$Original = $NorthstarPlayer;}
declare module "com.lightning.northstar.accessor.NorthstarDamageSources" {
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"

export interface $NorthstarDamageSources$$Interface {
}

export class $NorthstarDamageSources implements $NorthstarDamageSources$$Interface {
 "northstar$suffocation"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarDamageSources$$Type = ($NorthstarDamageSources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarDamageSources$$Original = $NorthstarDamageSources;}
declare module "com.lightning.northstar.accessor.NorthstarGuiGraphics" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TilingAnchor$$Type} from "com.lightning.northstar.client.TilingAnchor"

export interface $NorthstarGuiGraphics$$Interface {
}

export class $NorthstarGuiGraphics implements $NorthstarGuiGraphics$$Interface {
 "northstar$blitRepeating"(sprite: $TextureAtlasSprite$$Type, x: integer, y: integer, w: integer, h: integer, anchor: $TilingAnchor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarGuiGraphics$$Type = ($NorthstarGuiGraphics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarGuiGraphics$$Original = $NorthstarGuiGraphics;}
