declare module "com.lightning.northstar.world.oxygen.NorthstarOxygen" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderLevelStageEvent$$Type} from "net.neoforged.neoforge.client.event.RenderLevelStageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NorthstarOxygen$Provider, $NorthstarOxygen$Provider$$Type} from "com.lightning.northstar.world.oxygen.NorthstarOxygen$Provider"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"
import {$LivingBreatheEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingBreatheEvent"

export class $NorthstarOxygen {
static readonly "MAXIMUM_OXYGEN": integer

constructor(level: $Level$$Type)

public static "onPostRender"(event: $RenderLevelStageEvent$$Type): void
public static "getOxygenTank"(entity: $LivingEntity$$Type): $ItemStack
public static "depleteOxygen"(stack: $ItemStack$$Type, deplete: boolean): boolean
public "processUpdates"(level: $ServerLevel$$Type): void
public "hasOxygen"(): boolean
public static "hasOxygen"(level: $Level$$Type, pos: $Vec3i$$Type): boolean
public static "hasOxygen"(level: $Level$$Type, pos: $Vec3$$Type): boolean
public "hasOxygen"(pos: $Vec3i$$Type): boolean
public "hasOxygen"(pos: $Vec3$$Type): boolean
public "getSealer"(pos: $Vec3$$Type): $NorthstarOxygen$Provider
public "getSealer"(pos: $Vec3i$$Type): $NorthstarOxygen$Provider
public static "getDimension"(level: $Level$$Type): $NorthstarOxygen
public static "onBreathe"(event: $LivingBreatheEvent$$Type): void
public "registerSealer"(provider: $NorthstarOxygen$Provider$$Type): void
public "unregisterSealer"(provider: $NorthstarOxygen$Provider$$Type): void
public static "isOxygen"(fluid: $Fluid$$Type): boolean
public "enqueueUpdates"(positions: $LongCollection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarOxygen$$Type = ($NorthstarOxygen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarOxygen$$Original = $NorthstarOxygen;}
declare module "com.lightning.northstar.world.temperature.NorthstarTemperature$Provider" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$SealingProvider$$Interface} from "com.lightning.northstar.world.SealingProvider"

export interface $NorthstarTemperature$Provider$$Interface extends $SealingProvider$$Interface {
get "temperature"(): float
}

export class $NorthstarTemperature$Provider implements $NorthstarTemperature$Provider$$Interface {
 "getTemperature"(): float
 "isSealed"(arg0: $Vec3$$Type): boolean
 "isSealed"(arg0: $Vec3i$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarTemperature$Provider$$Type = ($NorthstarTemperature$Provider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarTemperature$Provider$$Original = $NorthstarTemperature$Provider;}
declare module "com.lightning.northstar.world.SealingProvider" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"

export interface $SealingProvider$$Interface {
}

export class $SealingProvider implements $SealingProvider$$Interface {
 "isSealed"(arg0: $Vec3$$Type): boolean
 "isSealed"(arg0: $Vec3i$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SealingProvider$$Type = ($SealingProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SealingProvider$$Original = $SealingProvider;}
declare module "com.lightning.northstar.world.sealer.SealReactiveBlock" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SealingMode, $SealingMode$$Type} from "com.lightning.northstar.world.sealer.SealingMode"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SealReactiveBlock$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $SealingMode): void
}

export class $SealReactiveBlock implements $SealReactiveBlock$$Interface {
 "northstar$onSealUpdated"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SealingMode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SealReactiveBlock$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $SealingMode) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SealReactiveBlock$$Original = $SealReactiveBlock;}
declare module "com.lightning.northstar.world.sealer.SealingMode" {
import {$Enum} from "java.lang.Enum"

export class $SealingMode extends $Enum<($SealingMode)> {
static readonly "OXYGEN": $SealingMode
static readonly "OTHER": $SealingMode
static readonly "TEMPERATURE": $SealingMode

public static "values"(): ($SealingMode)[]
public static "valueOf"(name: StringJS): $SealingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SealingMode$$Type = (("oxygen") | ("temperature") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SealingMode$$Original = $SealingMode;}
declare module "com.lightning.northstar.world.oxygen.NorthstarOxygen$Provider" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$SealingProvider$$Interface} from "com.lightning.northstar.world.SealingProvider"

export interface $NorthstarOxygen$Provider$$Interface extends $SealingProvider$$Interface {
}

export class $NorthstarOxygen$Provider implements $NorthstarOxygen$Provider$$Interface {
 "drainOxygen"(arg0: float): void
 "isSealed"(arg0: $Vec3$$Type): boolean
 "isSealed"(arg0: $Vec3i$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarOxygen$Provider$$Type = ($NorthstarOxygen$Provider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarOxygen$Provider$$Original = $NorthstarOxygen$Provider;}
declare module "com.lightning.northstar.world.temperature.NorthstarTemperature" {
import {$NorthstarTemperature$Provider$$Type} from "com.lightning.northstar.world.temperature.NorthstarTemperature$Provider"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$RenderLevelStageEvent$$Type} from "net.neoforged.neoforge.client.event.RenderLevelStageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"

export class $NorthstarTemperature {
static readonly "MINIMUM_TEMPERATURE": integer
static readonly "MAXIMUM_TEMPERATURE": integer

constructor(level: $Level$$Type)

public static "hasInsulation"(entity: $LivingEntity$$Type): boolean
public static "hasHeatProtection"(entity: $LivingEntity$$Type): boolean
public static "onPostRender"(event: $RenderLevelStageEvent$$Type): void
public "processUpdates"(level: $ServerLevel$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getDimension"(level: $Level$$Type): $NorthstarTemperature
public "getTemperatureAt"(pos: $Vec3$$Type): float
public "getTemperatureAt"(pos: $Vec3i$$Type): float
public static "getTemperatureAt"(level: $Level$$Type, pos: $Vec3i$$Type): float
public static "getTemperatureAt"(level: $Level$$Type, pos: $Vec3$$Type): float
public static "evaporate"(level: $Level$$Type, pos: $BlockPos$$Type): void
public static "getBaseTemperature"(level: $Level$$Type, pos: $BlockPos$$Type): float
public static "getFreezingPoint"(state: $FluidState$$Type): integer
public static "getBoilingPoint"(state: $FluidState$$Type): integer
public static "isCombustible"(state: $FluidState$$Type): boolean
public static "combustionTemp"(state: $FluidState$$Type): integer
public "registerSealer"(provider: $NorthstarTemperature$Provider$$Type): void
public "unregisterSealer"(provider: $NorthstarTemperature$Provider$$Type): void
public "enqueueUpdates"(positions: $LongCollection$$Type): void
public static "getHeatRating"(level: $ResourceKey$$Type<($Level)>): double
public static "getHeatConstant"(level: $ResourceKey$$Type<($Level)>): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarTemperature$$Type = ($NorthstarTemperature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarTemperature$$Original = $NorthstarTemperature;}
