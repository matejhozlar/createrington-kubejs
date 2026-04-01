declare module "net.neoforged.neoforge.event.brewing.PotionBrewEvent$Pre" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PotionBrewEvent} from "net.neoforged.neoforge.event.brewing.PotionBrewEvent"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $PotionBrewEvent$Pre extends $PotionBrewEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewEvent$Pre$$Type = ($PotionBrewEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewEvent$Pre$$Original = $PotionBrewEvent$Pre;}
declare module "net.neoforged.neoforge.event.ModifyDefaultComponentsEvent" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Stream} from "java.util.stream.Stream"
import {$DataComponentPatch$Builder$$Type} from "net.minecraft.core.component.DataComponentPatch$Builder"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ModifyDefaultComponentsEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "modifyMatching"(arg0: $Predicate$$Type<($Item)>, arg1: $Consumer$$Type<($DataComponentPatch$Builder)>): void
public "getAllItems"(): $Stream<($Item)>
public "modify"(arg0: $ItemLike$$Type, arg1: $Consumer$$Type<($DataComponentPatch$Builder)>): void
get "allItems"(): $Stream<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyDefaultComponentsEvent$$Type = ($ModifyDefaultComponentsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyDefaultComponentsEvent$$Original = $ModifyDefaultComponentsEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingSwapItemsEvent$Hands" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingSwapItemsEvent} from "net.neoforged.neoforge.event.entity.living.LivingSwapItemsEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingSwapItemsEvent$Hands extends $LivingSwapItemsEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type)

public "setItemSwappedToMainHand"(arg0: $ItemStack$$Type): void
public "setItemSwappedToOffHand"(arg0: $ItemStack$$Type): void
public "getItemSwappedToOffHand"(): $ItemStack
public "getItemSwappedToMainHand"(): $ItemStack
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "itemSwappedToMainHand"(value: $ItemStack$$Type)
set "itemSwappedToOffHand"(value: $ItemStack$$Type)
get "itemSwappedToOffHand"(): $ItemStack
get "itemSwappedToMainHand"(): $ItemStack
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingSwapItemsEvent$Hands$$Type = ($LivingSwapItemsEvent$Hands);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingSwapItemsEvent$Hands$$Original = $LivingSwapItemsEvent$Hands;}
declare module "net.neoforged.neoforge.event.entity.living.LivingKnockBackEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingKnockBackEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: float, arg2: double, arg3: double)

public "getOriginalStrength"(): float
public "getOriginalRatioZ"(): double
public "getOriginalRatioX"(): double
public "setStrength"(arg0: float): void
public "getStrength"(): float
public "getRatioX"(): double
public "getRatioZ"(): double
public "setRatioZ"(arg0: double): void
public "setRatioX"(arg0: double): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "originalStrength"(): float
get "originalRatioZ"(): double
get "originalRatioX"(): double
set "strength"(value: float)
get "strength"(): float
get "ratioX"(): double
get "ratioZ"(): double
set "ratioZ"(value: double)
set "ratioX"(value: double)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingKnockBackEvent$$Type = ($LivingKnockBackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingKnockBackEvent$$Original = $LivingKnockBackEvent;}
declare module "net.neoforged.neoforge.event.level.LevelEvent$CreateSpawnPosition" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$ServerLevelData, $ServerLevelData$$Type} from "net.minecraft.world.level.storage.ServerLevelData"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$CreateSpawnPosition extends $LevelEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $ServerLevelData$$Type)

public "getSettings"(): $ServerLevelData
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "settings"(): $ServerLevelData
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$CreateSpawnPosition$$Type = ($LevelEvent$CreateSpawnPosition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelEvent$CreateSpawnPosition$$Original = $LevelEvent$CreateSpawnPosition;}
declare module "net.neoforged.neoforge.event.level.LevelEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$EventHandlerImplCommon$LevelEventAttachment$$Interface} from "dev.architectury.event.forge.EventHandlerImplCommon$LevelEventAttachment"

export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment$$Interface {
constructor(arg0: $LevelAccessor$$Type)

public "getLevel"(): $LevelAccessor
public "architectury$getAttachedLevel"(): $LevelAccessor
public "architectury$attachLevel"(level: $LevelAccessor$$Type): void
get "level"(): $LevelAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$$Type = ($LevelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelEvent$$Original = $LevelEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityMobGriefingEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityMobGriefingEvent extends $EntityEvent {
constructor(arg0: $Level$$Type, arg1: $Entity$$Type)

public "setCanGrief"(arg0: boolean): void
public "isMobGriefingEnabled"(): boolean
public "canGrief"(): boolean
get "mobGriefingEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMobGriefingEvent$$Type = ($EntityMobGriefingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityMobGriefingEvent$$Original = $EntityMobGriefingEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityEvent$EnteringSection" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$SectionPos} from "net.minecraft.core.SectionPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityEvent$EnteringSection extends $EntityEvent {
constructor(arg0: $Entity$$Type, arg1: long, arg2: long)

public "getPackedOldPos"(): long
public "getPackedNewPos"(): long
public "didChunkChange"(): boolean
public "getOldPos"(): $SectionPos
public "getNewPos"(): $SectionPos
get "packedOldPos"(): long
get "packedNewPos"(): long
get "oldPos"(): $SectionPos
get "newPos"(): $SectionPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$EnteringSection$$Type = ($EntityEvent$EnteringSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEvent$EnteringSection$$Original = $EntityEvent$EnteringSection;}
declare module "net.neoforged.neoforge.event.entity.living.LivingDrownEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDrownEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: boolean, arg2: float, arg3: integer)
constructor(arg0: $LivingEntity$$Type)

public "setDrowning"(arg0: boolean): void
public "setDamageAmount"(arg0: float): void
public "setBubbleCount"(arg0: integer): void
public "getDamageAmount"(): float
public "getBubbleCount"(): integer
public "isDrowning"(): boolean
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "drowning"(value: boolean)
set "damageAmount"(value: float)
set "bubbleCount"(value: integer)
get "damageAmount"(): float
get "bubbleCount"(): integer
get "drowning"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDrownEvent$$Type = ($LivingDrownEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDrownEvent$$Original = $LivingDrownEvent;}
declare module "net.neoforged.neoforge.event.level.ExplosionEvent" {
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $ExplosionEvent extends $Event {
constructor(arg0: $Level$$Type, arg1: $Explosion$$Type)

public "getLevel"(): $Level
public "getExplosion"(): $Explosion
get "level"(): $Level
get "explosion"(): $Explosion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionEvent$$Type = ($ExplosionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionEvent$$Original = $ExplosionEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerRespawnEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerEvent$PlayerRespawnEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: boolean)

public "getEntity"(): $Entity
public "isEndConquered"(): boolean
get "entity"(): $Entity
get "endConquered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$PlayerRespawnEvent$$Type = ($PlayerEvent$PlayerRespawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$PlayerRespawnEvent$$Original = $PlayerEvent$PlayerRespawnEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"

export class $PlayerInteractEvent extends $PlayerEvent {
public "getLevel"(): $Level
public "getSide"(): $LogicalSide
public "getHand"(): $InteractionHand
public "getFace"(): $Direction
public "getItemStack"(): $ItemStack
public "getPos"(): $BlockPos
public "getEntity"(): $Entity
get "level"(): $Level
get "side"(): $LogicalSide
get "hand"(): $InteractionHand
get "face"(): $Direction
get "itemStack"(): $ItemStack
get "pos"(): $BlockPos
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$$Type = ($PlayerInteractEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$$Original = $PlayerInteractEvent;}
declare module "net.neoforged.neoforge.event.RegisterCommandsEvent" {
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$Event} from "net.neoforged.bus.api.Event"
import {$CommandDispatcher, $CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$Commands$CommandSelection, $Commands$CommandSelection$$Type} from "net.minecraft.commands.Commands$CommandSelection"

export class $RegisterCommandsEvent extends $Event {
constructor(arg0: $CommandDispatcher$$Type<($CommandSourceStack$$Type)>, arg1: $Commands$CommandSelection$$Type, arg2: $CommandBuildContext$$Type)

public "getDispatcher"(): $CommandDispatcher<($CommandSourceStack)>
public "getBuildContext"(): $CommandBuildContext
public "getCommandSelection"(): $Commands$CommandSelection
get "dispatcher"(): $CommandDispatcher<($CommandSourceStack)>
get "buildContext"(): $CommandBuildContext
get "commandSelection"(): $Commands$CommandSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCommandsEvent$$Type = ($RegisterCommandsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCommandsEvent$$Original = $RegisterCommandsEvent;}
declare module "net.neoforged.neoforge.event.level.PistonEvent$Pre" {
import {$PistonEvent} from "net.neoforged.neoforge.event.level.PistonEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PistonEvent$PistonMoveType$$Type} from "net.neoforged.neoforge.event.level.PistonEvent$PistonMoveType"

export class $PistonEvent$Pre extends $PistonEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $PistonEvent$PistonMoveType$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PistonEvent$Pre$$Type = ($PistonEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PistonEvent$Pre$$Original = $PistonEvent$Pre;}
declare module "net.neoforged.neoforge.event.level.block.CropGrowEvent$Pre$Result" {
import {$Enum} from "java.lang.Enum"

export class $CropGrowEvent$Pre$Result extends $Enum<($CropGrowEvent$Pre$Result)> {
static readonly "GROW": $CropGrowEvent$Pre$Result
static readonly "DO_NOT_GROW": $CropGrowEvent$Pre$Result
static readonly "DEFAULT": $CropGrowEvent$Pre$Result

public static "values"(): ($CropGrowEvent$Pre$Result)[]
public static "valueOf"(arg0: StringJS): $CropGrowEvent$Pre$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropGrowEvent$Pre$Result$$Type = (("grow") | ("default") | ("do_not_grow"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CropGrowEvent$Pre$Result$$Original = $CropGrowEvent$Pre$Result;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$StopTracking" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerEvent$StopTracking extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $Entity$$Type)

public "getTarget"(): $Entity
public "getEntity"(): $Entity
get "target"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$StopTracking$$Type = ($PlayerEvent$StopTracking);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$StopTracking$$Original = $PlayerEvent$StopTracking;}
declare module "net.neoforged.neoforge.event.entity.living.FinalizeSpawnEvent" {
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$MobSpawnEvent} from "net.neoforged.neoforge.event.entity.living.MobSpawnEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$DifficultyInstance, $DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$SpawnGroupData, $SpawnGroupData$$Type} from "net.minecraft.world.entity.SpawnGroupData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $FinalizeSpawnEvent extends $MobSpawnEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Mob$$Type, arg1: $ServerLevelAccessor$$Type, arg2: double, arg3: double, arg4: double, arg5: $DifficultyInstance$$Type, arg6: $MobSpawnType$$Type, arg7: $SpawnGroupData$$Type, arg8: $Either$$Type<($BlockEntity$$Type), ($Entity$$Type)>)

public "isSpawnCancelled"(): boolean
public "getSpawner"(): $Either<($BlockEntity), ($Entity)>
public "setDifficulty"(arg0: $DifficultyInstance$$Type): void
public "getSpawnType"(): $MobSpawnType
public "setSpawnCancelled"(arg0: boolean): void
public "getSpawnData"(): $SpawnGroupData
public "setSpawnData"(arg0: $SpawnGroupData$$Type): void
public "getDifficulty"(): $DifficultyInstance
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "spawnCancelled"(): boolean
get "spawner"(): $Either<($BlockEntity), ($Entity)>
set "difficulty"(value: $DifficultyInstance$$Type)
get "spawnType"(): $MobSpawnType
set "spawnCancelled"(value: boolean)
get "spawnData"(): $SpawnGroupData
set "spawnData"(value: $SpawnGroupData$$Type)
get "difficulty"(): $DifficultyInstance
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FinalizeSpawnEvent$$Type = ($FinalizeSpawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FinalizeSpawnEvent$$Original = $FinalizeSpawnEvent;}
declare module "net.neoforged.neoforge.event.GrindstoneEvent$OnTakeItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$GrindstoneEvent} from "net.neoforged.neoforge.event.GrindstoneEvent"

export class $GrindstoneEvent$OnTakeItem extends $GrindstoneEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $ContainerLevelAccess$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type, arg4: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "setNewTopItem"(arg0: $ItemStack$$Type): void
public "getContainerAccess"(): $ContainerLevelAccess
public "setNewBottomItem"(arg0: $ItemStack$$Type): void
public "getPlayer"(): $Player
public "getNewBottomItem"(): $ItemStack
public "getNewTopItem"(): $ItemStack
public "getXp"(): integer
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "newTopItem"(value: $ItemStack$$Type)
get "containerAccess"(): $ContainerLevelAccess
set "newBottomItem"(value: $ItemStack$$Type)
get "player"(): $Player
get "newBottomItem"(): $ItemStack
get "newTopItem"(): $ItemStack
get "xp"(): integer
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindstoneEvent$OnTakeItem$$Type = ($GrindstoneEvent$OnTakeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindstoneEvent$OnTakeItem$$Original = $GrindstoneEvent$OnTakeItem;}
declare module "net.neoforged.neoforge.event.level.AlterGroundEvent" {
import {$AlterGroundEvent$StateProvider, $AlterGroundEvent$StateProvider$$Type} from "net.neoforged.neoforge.event.level.AlterGroundEvent$StateProvider"
import {$TreeDecorator$Context, $TreeDecorator$Context$$Type} from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator$Context"
import {$List, $List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AlterGroundEvent extends $Event {
constructor(arg0: $TreeDecorator$Context$$Type, arg1: $List$$Type<($BlockPos$$Type)>, arg2: $AlterGroundEvent$StateProvider$$Type)

public "getContext"(): $TreeDecorator$Context
public "getPositions"(): $List<($BlockPos)>
public "setStateProvider"(arg0: $AlterGroundEvent$StateProvider$$Type): void
public "getStateProvider"(): $AlterGroundEvent$StateProvider
get "context"(): $TreeDecorator$Context
get "positions"(): $List<($BlockPos)>
set "stateProvider"(value: $AlterGroundEvent$StateProvider$$Type)
get "stateProvider"(): $AlterGroundEvent$StateProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlterGroundEvent$$Type = ($AlterGroundEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlterGroundEvent$$Original = $AlterGroundEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkWatchEvent$Sent" {
import {$ChunkWatchEvent} from "net.neoforged.neoforge.event.level.ChunkWatchEvent"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ChunkWatchEvent$Sent extends $ChunkWatchEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $LevelChunk$$Type, arg2: $ServerLevel$$Type)

public "getChunk"(): $LevelChunk
get "chunk"(): $LevelChunk
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkWatchEvent$Sent$$Type = ($ChunkWatchEvent$Sent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkWatchEvent$Sent$$Original = $ChunkWatchEvent$Sent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Finish" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingEntityUseItemEvent} from "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent"

export class $LivingEntityUseItemEvent$Finish extends $LivingEntityUseItemEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: $ItemStack$$Type)

public "getResultStack"(): $ItemStack
public "setResultStack"(arg0: $ItemStack$$Type): void
get "resultStack"(): $ItemStack
set "resultStack"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityUseItemEvent$Finish$$Type = ($LivingEntityUseItemEvent$Finish);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityUseItemEvent$Finish$$Original = $LivingEntityUseItemEvent$Finish;}
declare module "net.neoforged.neoforge.event.entity.player.ClientInformationUpdatedEvent" {
import {$ClientInformation, $ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $ClientInformationUpdatedEvent extends $PlayerEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $ClientInformation$$Type, arg2: $ClientInformation$$Type)

public "getEntity"(): $Entity
public "getUpdatedInformation"(): $ClientInformation
public "getOldInformation"(): $ClientInformation
get "entity"(): $Entity
get "updatedInformation"(): $ClientInformation
get "oldInformation"(): $ClientInformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientInformationUpdatedEvent$$Type = ($ClientInformationUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientInformationUpdatedEvent$$Original = $ClientInformationUpdatedEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityTeleportEvent$SpreadPlayersCommand" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityTeleportEvent$SpreadPlayersCommand extends $EntityTeleportEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportEvent$SpreadPlayersCommand$$Type = ($EntityTeleportEvent$SpreadPlayersCommand);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTeleportEvent$SpreadPlayersCommand$$Original = $EntityTeleportEvent$SpreadPlayersCommand;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerContainerEvent$Close" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$PlayerContainerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerContainerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerContainerEvent$Close extends $PlayerContainerEvent {
constructor(arg0: $Player$$Type, arg1: $AbstractContainerMenu$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerContainerEvent$Close$$Type = ($PlayerContainerEvent$Close);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerContainerEvent$Close$$Original = $PlayerContainerEvent$Close;}
declare module "net.neoforged.neoforge.event.entity.player.TradeWithVillagerEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$AbstractVillager, $AbstractVillager$$Type} from "net.minecraft.world.entity.npc.AbstractVillager"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $TradeWithVillagerEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $MerchantOffer$$Type, arg2: $AbstractVillager$$Type)

public "getMerchantOffer"(): $MerchantOffer
public "getAbstractVillager"(): $AbstractVillager
public "getEntity"(): $Entity
get "merchantOffer"(): $MerchantOffer
get "abstractVillager"(): $AbstractVillager
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeWithVillagerEvent$$Type = ($TradeWithVillagerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TradeWithVillagerEvent$$Original = $TradeWithVillagerEvent;}
declare module "net.neoforged.neoforge.event.entity.player.ItemEntityPickupEvent$Post" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemEntityPickupEvent} from "net.neoforged.neoforge.event.entity.player.ItemEntityPickupEvent"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $ItemEntityPickupEvent$Post extends $ItemEntityPickupEvent {
constructor(arg0: $Player$$Type, arg1: $ItemEntity$$Type, arg2: $ItemStack$$Type)

public "getOriginalStack"(): $ItemStack
public "getCurrentStack"(): $ItemStack
get "originalStack"(): $ItemStack
get "currentStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityPickupEvent$Post$$Type = ($ItemEntityPickupEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntityPickupEvent$Post$$Original = $ItemEntityPickupEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerSpawnPhantomsEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerSpawnPhantomsEvent$Result, $PlayerSpawnPhantomsEvent$Result$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerSpawnPhantomsEvent$Result"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PlayerSpawnPhantomsEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: integer)

public "setResult"(arg0: $PlayerSpawnPhantomsEvent$Result$$Type): void
public "getResult"(): $PlayerSpawnPhantomsEvent$Result
public "setPhantomsToSpawn"(arg0: integer): void
public "getPhantomsToSpawn"(): integer
public "shouldSpawnPhantoms"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): boolean
public "getEntity"(): $Entity
set "result"(value: $PlayerSpawnPhantomsEvent$Result$$Type)
get "result"(): $PlayerSpawnPhantomsEvent$Result
set "phantomsToSpawn"(value: integer)
get "phantomsToSpawn"(): integer
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSpawnPhantomsEvent$$Type = ($PlayerSpawnPhantomsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSpawnPhantomsEvent$$Original = $PlayerSpawnPhantomsEvent;}
declare module "net.neoforged.neoforge.event.ServerChatEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ServerChatEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ServerPlayer$$Type, arg1: StringJS, arg2: $Component$$Type)

public "getMessage"(): $Component
public "getPlayer"(): $ServerPlayer
public "setMessage"(arg0: $Component$$Type): void
public "getRawText"(): StringJS
public "getUsername"(): StringJS
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "message"(): $Component
get "player"(): $ServerPlayer
set "message"(value: $Component$$Type)
get "rawText"(): StringJS
get "username"(): StringJS
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChatEvent$$Type = ($ServerChatEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerChatEvent$$Original = $ServerChatEvent;}
declare module "net.neoforged.neoforge.event.furnace.FurnaceFuelBurnTimeEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export class $FurnaceFuelBurnTimeEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: integer, arg2: $RecipeType$$Type<(never)>)

public "getRecipeType"(): $RecipeType<(never)>
public "setBurnTime"(arg0: integer): void
public "getBurnTime"(): integer
public "getItemStack"(): $ItemStack
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "recipeType"(): $RecipeType<(never)>
set "burnTime"(value: integer)
get "burnTime"(): integer
get "itemStack"(): $ItemStack
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceFuelBurnTimeEvent$$Type = ($FurnaceFuelBurnTimeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceFuelBurnTimeEvent$$Original = $FurnaceFuelBurnTimeEvent;}
declare module "net.neoforged.neoforge.event.entity.RegisterSpawnPlacementsEvent$MergedSpawnPredicate" {
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$$Type} from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$SpawnPlacementType, $SpawnPlacementType$$Type} from "net.minecraft.world.entity.SpawnPlacementType"

export class $RegisterSpawnPlacementsEvent$MergedSpawnPredicate<T extends $Entity> {
constructor(arg0: $SpawnPlacements$SpawnPredicate$$Type<(T)>, arg1: $SpawnPlacementType$$Type, arg2: $Heightmap$Types$$Type)

public "build"(): $SpawnPlacements$SpawnPredicate<(T)>
public "getSpawnType"(): $SpawnPlacementType
public "getHeightmapType"(): $Heightmap$Types
get "spawnType"(): $SpawnPlacementType
get "heightmapType"(): $Heightmap$Types
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterSpawnPlacementsEvent$MergedSpawnPredicate$$Type<T> = ($RegisterSpawnPlacementsEvent$MergedSpawnPredicate<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterSpawnPlacementsEvent$MergedSpawnPredicate$$Original<T> = $RegisterSpawnPlacementsEvent$MergedSpawnPredicate<(T)>;}
declare module "net.neoforged.neoforge.event.TagsUpdatedEvent$UpdateCause" {
import {$Enum} from "java.lang.Enum"

export class $TagsUpdatedEvent$UpdateCause extends $Enum<($TagsUpdatedEvent$UpdateCause)> {
static readonly "SERVER_DATA_LOAD": $TagsUpdatedEvent$UpdateCause
static readonly "CLIENT_PACKET_RECEIVED": $TagsUpdatedEvent$UpdateCause

public static "values"(): ($TagsUpdatedEvent$UpdateCause)[]
public static "valueOf"(arg0: StringJS): $TagsUpdatedEvent$UpdateCause
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsUpdatedEvent$UpdateCause$$Type = (("server_data_load") | ("client_packet_received"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagsUpdatedEvent$UpdateCause$$Original = $TagsUpdatedEvent$UpdateCause;}
declare module "net.neoforged.neoforge.event.ModMismatchEvent$MismatchedVersionInfo" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Record} from "java.lang.Record"

export class $ModMismatchEvent$MismatchedVersionInfo extends $Record {
constructor(oldVersion: $ArtifactVersion$$Type, newVersion: $ArtifactVersion$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "newVersion"(): $ArtifactVersion
public "oldVersion"(): $ArtifactVersion
public "isMissing"(): boolean
public "wasUpgrade"(): boolean
get "missing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModMismatchEvent$MismatchedVersionInfo$$Type = ({"newVersion"?: $ArtifactVersion$$Type, "oldVersion"?: $ArtifactVersion$$Type}) | ([newVersion?: $ArtifactVersion$$Type, oldVersion?: $ArtifactVersion$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModMismatchEvent$MismatchedVersionInfo$$Original = $ModMismatchEvent$MismatchedVersionInfo;}
declare module "net.neoforged.neoforge.event.brewing.PlayerBrewedPotionEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerBrewedPotionEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type)

public "getStack"(): $ItemStack
public "getEntity"(): $Entity
get "stack"(): $ItemStack
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerBrewedPotionEvent$$Type = ($PlayerBrewedPotionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerBrewedPotionEvent$$Original = $PlayerBrewedPotionEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkTicketLevelUpdatedEvent" {
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $ChunkTicketLevelUpdatedEvent extends $Event {
constructor(arg0: $ServerLevel$$Type, arg1: long, arg2: integer, arg3: integer, arg4: $ChunkHolder$$Type)

public "getLevel"(): $ServerLevel
public "getChunkPos"(): long
public "getNewTicketLevel"(): integer
public "getChunkHolder"(): $ChunkHolder
public "getOldTicketLevel"(): integer
get "level"(): $ServerLevel
get "chunkPos"(): long
get "newTicketLevel"(): integer
get "chunkHolder"(): $ChunkHolder
get "oldTicketLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTicketLevelUpdatedEvent$$Type = ($ChunkTicketLevelUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTicketLevelUpdatedEvent$$Original = $ChunkTicketLevelUpdatedEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingChangeTargetEvent$ILivingTargetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingChangeTargetEvent$ILivingTargetType$$Interface {
}

export class $LivingChangeTargetEvent$ILivingTargetType implements $LivingChangeTargetEvent$ILivingTargetType$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingChangeTargetEvent$ILivingTargetType$$Type = ($LivingChangeTargetEvent$ILivingTargetType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingChangeTargetEvent$ILivingTargetType$$Original = $LivingChangeTargetEvent$ILivingTargetType;}
declare module "net.neoforged.neoforge.event.entity.living.ArmorHurtEvent$ArmorEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $ArmorHurtEvent$ArmorEntry {
readonly "originalDamage": float
 "newDamage": float
 "armorItemStack": $ItemStack

constructor(arg0: $ItemStack$$Type, arg1: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorHurtEvent$ArmorEntry$$Type = ($ArmorHurtEvent$ArmorEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorHurtEvent$ArmorEntry$$Original = $ArmorHurtEvent$ArmorEntry;}
declare module "net.neoforged.neoforge.event.AnvilUpdateEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $AnvilUpdateEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: StringJS, arg3: long, arg4: $Player$$Type)

public "getName"(): StringJS
public "getLeft"(): $ItemStack
public "getRight"(): $ItemStack
public "getPlayer"(): $Player
public "getOutput"(): $ItemStack
public "setMaterialCost"(arg0: integer): void
public "getCost"(): long
public "getMaterialCost"(): integer
public "setCost"(arg0: long): void
public "setOutput"(arg0: $ItemStack$$Type): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "name"(): StringJS
get "left"(): $ItemStack
get "right"(): $ItemStack
get "player"(): $Player
get "output"(): $ItemStack
set "materialCost"(value: integer)
get "cost"(): long
get "materialCost"(): integer
set "cost"(value: long)
set "output"(value: $ItemStack$$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpdateEvent$$Type = ($AnvilUpdateEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilUpdateEvent$$Original = $AnvilUpdateEvent;}
declare module "net.neoforged.neoforge.event.CommandEvent" {
import {$ParseResults, $ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $CommandEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ParseResults$$Type<($CommandSourceStack$$Type)>)

public "getException"(): $Throwable
public "getParseResults"(): $ParseResults<($CommandSourceStack)>
public "setException"(arg0: $Throwable$$Type): void
public "setParseResults"(arg0: $ParseResults$$Type<($CommandSourceStack$$Type)>): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "exception"(): $Throwable
get "parseResults"(): $ParseResults<($CommandSourceStack)>
set "exception"(value: $Throwable$$Type)
set "parseResults"(value: $ParseResults$$Type<($CommandSourceStack$$Type)>)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandEvent$$Type = ($CommandEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandEvent$$Original = $CommandEvent;}
declare module "net.neoforged.neoforge.event.GameShuttingDownEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $GameShuttingDownEvent extends $Event {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameShuttingDownEvent$$Type = ($GameShuttingDownEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameShuttingDownEvent$$Original = $GameShuttingDownEvent;}
declare module "net.neoforged.neoforge.event.entity.player.ItemEntityPickupEvent$Pre" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemEntityPickupEvent} from "net.neoforged.neoforge.event.entity.player.ItemEntityPickupEvent"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $ItemEntityPickupEvent$Pre extends $ItemEntityPickupEvent {
constructor(arg0: $Player$$Type, arg1: $ItemEntity$$Type)

public "setCanPickup"(arg0: $TriState$$Type): void
public "canPickup"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityPickupEvent$Pre$$Type = ($ItemEntityPickupEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntityPickupEvent$Pre$$Original = $ItemEntityPickupEvent$Pre;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEquipmentChangeEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingEquipmentChangeEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

public "getSlot"(): $EquipmentSlot
public "getFrom"(): $ItemStack
public "getTo"(): $ItemStack
get "slot"(): $EquipmentSlot
get "from"(): $ItemStack
get "to"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEquipmentChangeEvent$$Type = ($LivingEquipmentChangeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEquipmentChangeEvent$$Original = $LivingEquipmentChangeEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkEvent" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $ChunkEvent extends $LevelEvent {
constructor(arg0: $ChunkAccess$$Type)
constructor(arg0: $ChunkAccess$$Type, arg1: $LevelAccessor$$Type)

public "getChunk"(): $ChunkAccess
get "chunk"(): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$$Type = ($ChunkEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkEvent$$Original = $ChunkEvent;}
declare module "net.neoforged.neoforge.event.entity.player.CriticalHitEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CriticalHitEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: float, arg3: boolean)

public "getTarget"(): $Entity
public "setDamageMultiplier"(arg0: float): void
public "getVanillaMultiplier"(): float
public "isVanillaCritical"(): boolean
public "setCriticalHit"(arg0: boolean): void
public "setDisableSweep"(arg0: boolean): void
public "getDamageMultiplier"(): float
public "disableSweep"(): boolean
public "isCriticalHit"(): boolean
public "getEntity"(): $Entity
get "target"(): $Entity
set "damageMultiplier"(value: float)
get "vanillaMultiplier"(): float
get "vanillaCritical"(): boolean
set "criticalHit"(value: boolean)
get "damageMultiplier"(): float
get "criticalHit"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriticalHitEvent$$Type = ($CriticalHitEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriticalHitEvent$$Original = $CriticalHitEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkDataEvent$Load" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ChunkDataEvent} from "net.neoforged.neoforge.event.level.ChunkDataEvent"
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkType, $ChunkType$$Type} from "net.minecraft.world.level.chunk.status.ChunkType"

export class $ChunkDataEvent$Load extends $ChunkDataEvent {
constructor(arg0: $ChunkAccess$$Type, arg1: $CompoundTag$$Type, arg2: $ChunkType$$Type)

public "getType"(): $ChunkType
get "type"(): $ChunkType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkDataEvent$Load$$Type = ($ChunkDataEvent$Load);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkDataEvent$Load$$Original = $ChunkDataEvent$Load;}
declare module "net.neoforged.neoforge.event.entity.EntityTeleportEvent$TeleportCommand" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityTeleportEvent$TeleportCommand extends $EntityTeleportEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportEvent$TeleportCommand$$Type = ($EntityTeleportEvent$TeleportCommand);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTeleportEvent$TeleportCommand$$Original = $EntityTeleportEvent$TeleportCommand;}
declare module "net.neoforged.neoforge.event.village.VillagerTradesEvent" {
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$List, $List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $VillagerTradesEvent extends $Event {
/**
 * 
 * @deprecated
 */
constructor(arg0: $Int2ObjectMap$$Type<($List$$Type<($VillagerTrades$ItemListing$$Type)>)>, arg1: $VillagerProfession$$Type)
constructor(arg0: $Int2ObjectMap$$Type<($List$$Type<($VillagerTrades$ItemListing$$Type)>)>, arg1: $VillagerProfession$$Type, arg2: $RegistryAccess$$Type)

public "getType"(): $VillagerProfession
public "getRegistryAccess"(): $RegistryAccess
public "getTrades"(): $Int2ObjectMap<($List<($VillagerTrades$ItemListing)>)>
get "type"(): $VillagerProfession
get "registryAccess"(): $RegistryAccess
get "trades"(): $Int2ObjectMap<($List<($VillagerTrades$ItemListing)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradesEvent$$Type = ($VillagerTradesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillagerTradesEvent$$Original = $VillagerTradesEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityTeleportEvent$ChorusFruit" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EntityTeleportEvent$ChorusFruit extends $EntityTeleportEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: double, arg2: double, arg3: double)

public "getEntityLiving"(): $LivingEntity
get "entityLiving"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportEvent$ChorusFruit$$Type = ($EntityTeleportEvent$ChorusFruit);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTeleportEvent$ChorusFruit$$Original = $EntityTeleportEvent$ChorusFruit;}
declare module "net.neoforged.neoforge.event.entity.EntityMountEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityMountEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $Level$$Type, arg3: boolean)

public "getLevel"(): $Level
public "isMounting"(): boolean
public "getEntityMounting"(): $Entity
public "isDismounting"(): boolean
public "getEntityBeingMounted"(): $Entity
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $Level
get "mounting"(): boolean
get "entityMounting"(): $Entity
get "dismounting"(): boolean
get "entityBeingMounted"(): $Entity
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMountEvent$$Type = ($EntityMountEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityMountEvent$$Original = $EntityMountEvent;}
declare module "net.neoforged.neoforge.event.StatAwardEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $StatAwardEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $Stat$$Type<(never)>, arg2: integer)

public "getValue"(): integer
public "setValue"(arg0: integer): void
public "getStat"(): $Stat<(never)>
public "setStat"(arg0: $Stat$$Type<(never)>): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "value"(): integer
set "value"(value: integer)
get "stat"(): $Stat<(never)>
set "stat"(value: $Stat$$Type<(never)>)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatAwardEvent$$Type = ($StatAwardEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatAwardEvent$$Original = $StatAwardEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$HarvestCheck" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerEvent$HarvestCheck extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: boolean)

public "getLevel"(): $BlockGetter
public "getEntity"(): $LivingEntity
public "getPos"(): $BlockPos
public "canHarvest"(): boolean
public "setCanHarvest"(arg0: boolean): void
public "getTargetBlock"(): $BlockState
get "level"(): $BlockGetter
get "entity"(): $LivingEntity
get "pos"(): $BlockPos
get "targetBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$HarvestCheck$$Type = ($PlayerEvent$HarvestCheck);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$HarvestCheck$$Original = $PlayerEvent$HarvestCheck;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$TabListNameFormat" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $PlayerEvent$TabListNameFormat extends $PlayerEvent {
constructor(arg0: $Player$$Type)

public "getDisplayName"(): $Component
public "getEntity"(): $LivingEntity
public "setDisplayName"(arg0: $Component$$Type): void
get "displayName"(): $Component
get "entity"(): $LivingEntity
set "displayName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$TabListNameFormat$$Type = ($PlayerEvent$TabListNameFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$TabListNameFormat$$Original = $PlayerEvent$TabListNameFormat;}
declare module "net.neoforged.neoforge.event.entity.living.MobSpawnEvent$PositionCheck$Result" {
import {$Enum} from "java.lang.Enum"

export class $MobSpawnEvent$PositionCheck$Result extends $Enum<($MobSpawnEvent$PositionCheck$Result)> {
static readonly "SUCCEED": $MobSpawnEvent$PositionCheck$Result
static readonly "DEFAULT": $MobSpawnEvent$PositionCheck$Result
static readonly "FAIL": $MobSpawnEvent$PositionCheck$Result

public static "values"(): ($MobSpawnEvent$PositionCheck$Result)[]
public static "valueOf"(arg0: StringJS): $MobSpawnEvent$PositionCheck$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnEvent$PositionCheck$Result$$Type = (("succeed") | ("default") | ("fail"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobSpawnEvent$PositionCheck$Result$$Original = $MobSpawnEvent$PositionCheck$Result;}
declare module "net.neoforged.neoforge.event.entity.EntityStruckByLightningEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LightningBolt, $LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityStruckByLightningEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: $LightningBolt$$Type)

public "getLightning"(): $LightningBolt
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "lightning"(): $LightningBolt
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityStruckByLightningEvent$$Type = ($EntityStruckByLightningEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityStruckByLightningEvent$$Original = $EntityStruckByLightningEvent;}
declare module "net.neoforged.neoforge.event.entity.player.ItemTooltipEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ItemTooltipEvent extends $PlayerEvent {
constructor(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type, arg4: $Item$TooltipContext$$Type)

public "getContext"(): $Item$TooltipContext
public "getFlags"(): $TooltipFlag
public "getEntity"(): $LivingEntity
public "getItemStack"(): $ItemStack
public "getToolTip"(): $List<($Component)>
get "context"(): $Item$TooltipContext
get "flags"(): $TooltipFlag
get "entity"(): $LivingEntity
get "itemStack"(): $ItemStack
get "toolTip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTooltipEvent$$Type = ($ItemTooltipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTooltipEvent$$Original = $ItemTooltipEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingDeathEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

public "getSource"(): $DamageSource
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "source"(): $DamageSource
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$$Type = ($LivingDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDeathEvent$$Original = $LivingDeathEvent;}
declare module "net.neoforged.neoforge.event.level.NoteBlockEvent$Change" {
import {$NoteBlockEvent$Note} from "net.neoforged.neoforge.event.level.NoteBlockEvent$Note"
import {$NoteBlockEvent} from "net.neoforged.neoforge.event.level.NoteBlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$NoteBlockEvent$Octave} from "net.neoforged.neoforge.event.level.NoteBlockEvent$Octave"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NoteBlockEvent$Change extends $NoteBlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer, arg4: integer)

public "getOldOctave"(): $NoteBlockEvent$Octave
public "getOldNote"(): $NoteBlockEvent$Note
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "oldOctave"(): $NoteBlockEvent$Octave
get "oldNote"(): $NoteBlockEvent$Note
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoteBlockEvent$Change$$Type = ($NoteBlockEvent$Change);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoteBlockEvent$Change$$Original = $NoteBlockEvent$Change;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerXpEvent$LevelChange" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerXpEvent} from "net.neoforged.neoforge.event.entity.player.PlayerXpEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerXpEvent$LevelChange extends $PlayerXpEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: integer)

public "getLevels"(): integer
public "setLevels"(arg0: integer): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "levels"(): integer
set "levels"(value: integer)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerXpEvent$LevelChange$$Type = ($PlayerXpEvent$LevelChange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerXpEvent$LevelChange$$Original = $PlayerXpEvent$LevelChange;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerEvent extends $LivingEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$$Type = ($PlayerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$$Original = $PlayerEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkWatchEvent$UnWatch" {
import {$ChunkWatchEvent} from "net.neoforged.neoforge.event.level.ChunkWatchEvent"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $ChunkWatchEvent$UnWatch extends $ChunkWatchEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $ChunkPos$$Type, arg2: $ServerLevel$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkWatchEvent$UnWatch$$Type = ($ChunkWatchEvent$UnWatch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkWatchEvent$UnWatch$$Original = $ChunkWatchEvent$UnWatch;}
declare module "net.neoforged.neoforge.event.level.AlterGroundEvent$StateProvider" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $AlterGroundEvent$StateProvider$$Interface {

(arg0: $RandomSource, arg1: $BlockPos): $BlockState$$Type
}

export class $AlterGroundEvent$StateProvider implements $AlterGroundEvent$StateProvider$$Interface {
 "getState"(arg0: $RandomSource$$Type, arg1: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlterGroundEvent$StateProvider$$Type = ((arg0: $RandomSource, arg1: $BlockPos) => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlterGroundEvent$StateProvider$$Original = $AlterGroundEvent$StateProvider;}
declare module "net.neoforged.neoforge.event.level.ChunkDataEvent$Save" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ChunkDataEvent} from "net.neoforged.neoforge.event.level.ChunkDataEvent"
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $ChunkDataEvent$Save extends $ChunkDataEvent {
constructor(arg0: $ChunkAccess$$Type, arg1: $LevelAccessor$$Type, arg2: $CompoundTag$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkDataEvent$Save$$Type = ($ChunkDataEvent$Save);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkDataEvent$Save$$Original = $ChunkDataEvent$Save;}
declare module "net.neoforged.neoforge.event.GrindstoneEvent$OnPlaceItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$GrindstoneEvent} from "net.neoforged.neoforge.event.GrindstoneEvent"

export class $GrindstoneEvent$OnPlaceItem extends $GrindstoneEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "getOutput"(): $ItemStack
public "setOutput"(arg0: $ItemStack$$Type): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "output"(): $ItemStack
set "output"(value: $ItemStack$$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindstoneEvent$OnPlaceItem$$Type = ($GrindstoneEvent$OnPlaceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindstoneEvent$OnPlaceItem$$Original = $GrindstoneEvent$OnPlaceItem;}
declare module "net.neoforged.neoforge.event.entity.living.SpawnClusterSizeEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SpawnClusterSizeEvent extends $LivingEvent {
constructor(arg0: $Mob$$Type)

public "getSize"(): integer
public "setSize"(arg0: integer): void
public "getEntity"(): $Entity
get "size"(): integer
set "size"(value: integer)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnClusterSizeEvent$$Type = ($SpawnClusterSizeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnClusterSizeEvent$$Original = $SpawnClusterSizeEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$NameFormat" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $PlayerEvent$NameFormat extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $Component$$Type)

public "getEntity"(): $LivingEntity
public "getDisplayname"(): $Component
public "setDisplayname"(arg0: $Component$$Type): void
public "getUsername"(): $Component
get "entity"(): $LivingEntity
get "displayname"(): $Component
set "displayname"(value: $Component$$Type)
get "username"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$NameFormat$$Type = ($PlayerEvent$NameFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$NameFormat$$Original = $PlayerEvent$NameFormat;}
declare module "net.neoforged.neoforge.event.entity.RegisterSpawnPlacementsEvent$Operation" {
import {$Enum} from "java.lang.Enum"

export class $RegisterSpawnPlacementsEvent$Operation extends $Enum<($RegisterSpawnPlacementsEvent$Operation)> {
static readonly "OR": $RegisterSpawnPlacementsEvent$Operation
static readonly "AND": $RegisterSpawnPlacementsEvent$Operation
static readonly "REPLACE": $RegisterSpawnPlacementsEvent$Operation

public static "values"(): ($RegisterSpawnPlacementsEvent$Operation)[]
public static "valueOf"(arg0: StringJS): $RegisterSpawnPlacementsEvent$Operation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterSpawnPlacementsEvent$Operation$$Type = (("and") | ("or") | ("replace"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterSpawnPlacementsEvent$Operation$$Original = $RegisterSpawnPlacementsEvent$Operation;}
declare module "net.neoforged.neoforge.event.ModMismatchEvent$MismatchResolutionResult" {
import {$ModMismatchEvent$MismatchedVersionInfo, $ModMismatchEvent$MismatchedVersionInfo$$Type} from "net.neoforged.neoforge.event.ModMismatchEvent$MismatchedVersionInfo"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"
import {$Record} from "java.lang.Record"

export class $ModMismatchEvent$MismatchResolutionResult extends $Record {
constructor(modid: StringJS, versionDifference: $ModMismatchEvent$MismatchedVersionInfo$$Type, resolver: $ModContainer$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "resolver"(): $ModContainer
public "modid"(): StringJS
public "wasSelfResolved"(): boolean
public "versionDifference"(): $ModMismatchEvent$MismatchedVersionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModMismatchEvent$MismatchResolutionResult$$Type = ({"resolver"?: $ModContainer$$Type, "versionDifference"?: $ModMismatchEvent$MismatchedVersionInfo$$Type, "modid"?: StringJS}) | ([resolver?: $ModContainer$$Type, versionDifference?: $ModMismatchEvent$MismatchedVersionInfo$$Type, modid?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModMismatchEvent$MismatchResolutionResult$$Original = $ModMismatchEvent$MismatchResolutionResult;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$EntityPlaceEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$BlockSnapshot, $BlockSnapshot$$Type} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$EntityPlaceEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $BlockSnapshot$$Type, arg1: $BlockState$$Type, arg2: $Entity$$Type)

public "getEntity"(): $Entity
public "getPlacedAgainst"(): $BlockState
public "getBlockSnapshot"(): $BlockSnapshot
public "getPlacedBlock"(): $BlockState
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "entity"(): $Entity
get "placedAgainst"(): $BlockState
get "blockSnapshot"(): $BlockSnapshot
get "placedBlock"(): $BlockState
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$EntityPlaceEvent$$Type = ($BlockEvent$EntityPlaceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$EntityPlaceEvent$$Original = $BlockEvent$EntityPlaceEvent;}
declare module "net.neoforged.neoforge.event.TagsUpdatedEvent" {
import {$TagsUpdatedEvent$UpdateCause} from "net.neoforged.neoforge.event.TagsUpdatedEvent$UpdateCause"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $TagsUpdatedEvent extends $Event {
constructor(arg0: $RegistryAccess$$Type, arg1: boolean, arg2: boolean)

public "shouldUpdateStaticData"(): boolean
public "getRegistryAccess"(): $RegistryAccess
public "getUpdateCause"(): $TagsUpdatedEvent$UpdateCause
get "registryAccess"(): $RegistryAccess
get "updateCause"(): $TagsUpdatedEvent$UpdateCause
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsUpdatedEvent$$Type = ($TagsUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagsUpdatedEvent$$Original = $TagsUpdatedEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerSpawnPhantomsEvent$Result" {
import {$Enum} from "java.lang.Enum"

export class $PlayerSpawnPhantomsEvent$Result extends $Enum<($PlayerSpawnPhantomsEvent$Result)> {
static readonly "DENY": $PlayerSpawnPhantomsEvent$Result
static readonly "ALLOW": $PlayerSpawnPhantomsEvent$Result
static readonly "DEFAULT": $PlayerSpawnPhantomsEvent$Result

public static "values"(): ($PlayerSpawnPhantomsEvent$Result)[]
public static "valueOf"(arg0: StringJS): $PlayerSpawnPhantomsEvent$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSpawnPhantomsEvent$Result$$Type = (("allow") | ("default") | ("deny"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSpawnPhantomsEvent$Result$$Original = $PlayerSpawnPhantomsEvent$Result;}
declare module "net.neoforged.neoforge.event.entity.player.PermissionsChangedEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PermissionsChangedEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $ServerPlayer$$Type, arg1: integer, arg2: integer)

public "getOldLevel"(): integer
public "getNewLevel"(): integer
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "oldLevel"(): integer
get "newLevel"(): integer
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionsChangedEvent$$Type = ($PermissionsChangedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionsChangedEvent$$Original = $PermissionsChangedEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityEvent$Size" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityEvent$Size extends $EntityEvent {
constructor(arg0: $Entity$$Type, arg1: $Pose$$Type, arg2: $EntityDimensions$$Type)
constructor(arg0: $Entity$$Type, arg1: $Pose$$Type, arg2: $EntityDimensions$$Type, arg3: $EntityDimensions$$Type)

public "getNewSize"(): $EntityDimensions
public "setNewSize"(arg0: $EntityDimensions$$Type): void
public "getOldSize"(): $EntityDimensions
public "getPose"(): $Pose
get "newSize"(): $EntityDimensions
set "newSize"(value: $EntityDimensions$$Type)
get "oldSize"(): $EntityDimensions
get "pose"(): $Pose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$Size$$Type = ($EntityEvent$Size);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEvent$Size$$Original = $EntityEvent$Size;}
declare module "net.neoforged.neoforge.event.level.ModifyCustomSpawnersEvent" {
import {$List, $List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$CustomSpawner, $CustomSpawner$$Type} from "net.minecraft.world.level.CustomSpawner"

export class $ModifyCustomSpawnersEvent extends $Event {
constructor(arg0: $ServerLevel$$Type, arg1: $List$$Type<($CustomSpawner$$Type)>)

public "getLevel"(): $ServerLevel
public "getCustomSpawners"(): $List<($CustomSpawner)>
public "addCustomSpawner"(arg0: $CustomSpawner$$Type): void
get "level"(): $ServerLevel
get "customSpawners"(): $List<($CustomSpawner)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyCustomSpawnersEvent$$Type = ($ModifyCustomSpawnersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyCustomSpawnersEvent$$Original = $ModifyCustomSpawnersEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityJoinLevelEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityJoinLevelEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: $Level$$Type)
constructor(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: boolean)

public "getLevel"(): $Level
public "loadedFromDisk"(): boolean
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $Level
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityJoinLevelEvent$$Type = ($EntityJoinLevelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityJoinLevelEvent$$Original = $EntityJoinLevelEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkDataEvent" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkEvent} from "net.neoforged.neoforge.event.level.ChunkEvent"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $ChunkDataEvent extends $ChunkEvent {
constructor(arg0: $ChunkAccess$$Type, arg1: $CompoundTag$$Type)
constructor(arg0: $ChunkAccess$$Type, arg1: $LevelAccessor$$Type, arg2: $CompoundTag$$Type)

public "getData"(): $CompoundTag
get "data"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkDataEvent$$Type = ($ChunkDataEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkDataEvent$$Original = $ChunkDataEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Stop" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingEntityUseItemEvent} from "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent"

export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityUseItemEvent$Stop$$Type = ($LivingEntityUseItemEvent$Stop);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityUseItemEvent$Stop$$Original = $LivingEntityUseItemEvent$Stop;}
declare module "net.neoforged.neoforge.event.level.LevelEvent$PotentialSpawns" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$List} from "java.util.List"
import {$WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$PotentialSpawns extends $LevelEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $MobCategory$$Type, arg2: $BlockPos$$Type, arg3: $WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>)

public "getMobCategory"(): $MobCategory
public "getSpawnerDataList"(): $List<($MobSpawnSettings$SpawnerData)>
public "removeSpawnerData"(arg0: $MobSpawnSettings$SpawnerData$$Type): boolean
public "addSpawnerData"(arg0: $MobSpawnSettings$SpawnerData$$Type): void
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "mobCategory"(): $MobCategory
get "spawnerDataList"(): $List<($MobSpawnSettings$SpawnerData)>
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$PotentialSpawns$$Type = ($LevelEvent$PotentialSpawns);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelEvent$PotentialSpawns$$Original = $LevelEvent$PotentialSpawns;}
declare module "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Remove" {
import {$MobEffectEvent} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$EffectCure, $EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $MobEffectEvent$Remove extends $MobEffectEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $Holder$$Type<($MobEffect)>, arg2: $EffectCure$$Type)
constructor(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type, arg2: $EffectCure$$Type)

public "getEffectInstance"(): $MobEffectInstance
public "getEffect"(): $Holder<($MobEffect)>
public "getCure"(): $EffectCure
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "effectInstance"(): $MobEffectInstance
get "effect"(): $Holder<($MobEffect)>
get "cure"(): $EffectCure
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectEvent$Remove$$Type = ($MobEffectEvent$Remove);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectEvent$Remove$$Original = $MobEffectEvent$Remove;}
declare module "net.neoforged.neoforge.event.entity.living.MobSpawnEvent$SpawnPlacementCheck" {
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$MobSpawnEvent$SpawnPlacementCheck$Result, $MobSpawnEvent$SpawnPlacementCheck$Result$$Type} from "net.neoforged.neoforge.event.entity.living.MobSpawnEvent$SpawnPlacementCheck$Result"

export class $MobSpawnEvent$SpawnPlacementCheck extends $Event {
constructor(arg0: $EntityType$$Type<(never)>, arg1: $ServerLevelAccessor$$Type, arg2: $MobSpawnType$$Type, arg3: $BlockPos$$Type, arg4: $RandomSource$$Type, arg5: boolean)

public "setResult"(arg0: $MobSpawnEvent$SpawnPlacementCheck$Result$$Type): void
public "getLevel"(): $ServerLevelAccessor
public "getResult"(): $MobSpawnEvent$SpawnPlacementCheck$Result
public "getRandom"(): $RandomSource
public "getSpawnType"(): $MobSpawnType
public "getEntityType"(): $EntityType<(never)>
public "getPos"(): $BlockPos
public "getDefaultResult"(): boolean
public "getPlacementCheckResult"(): boolean
set "result"(value: $MobSpawnEvent$SpawnPlacementCheck$Result$$Type)
get "level"(): $ServerLevelAccessor
get "result"(): $MobSpawnEvent$SpawnPlacementCheck$Result
get "random"(): $RandomSource
get "spawnType"(): $MobSpawnType
get "entityType"(): $EntityType<(never)>
get "pos"(): $BlockPos
get "defaultResult"(): boolean
get "placementCheckResult"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnEvent$SpawnPlacementCheck$$Type = ($MobSpawnEvent$SpawnPlacementCheck);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobSpawnEvent$SpawnPlacementCheck$$Original = $MobSpawnEvent$SpawnPlacementCheck;}
declare module "net.neoforged.neoforge.event.AddPackFindersEvent" {
import {$Pack$Position$$Type} from "net.minecraft.server.packs.repository.Pack$Position"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PackType, $PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$PackSource$$Type} from "net.minecraft.server.packs.repository.PackSource"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$RepositorySource$$Type} from "net.minecraft.server.packs.repository.RepositorySource"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AddPackFindersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $PackType$$Type, arg1: $Consumer$$Type<($RepositorySource)>, arg2: boolean)

public "isTrusted"(): boolean
public "addRepositorySource"(arg0: $RepositorySource$$Type): void
public "getPackType"(): $PackType
public "addPackFinders"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type, arg2: $Component$$Type, arg3: $PackSource$$Type, arg4: boolean, arg5: $Pack$Position$$Type): void
get "trusted"(): boolean
get "packType"(): $PackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddPackFindersEvent$$Type = ($AddPackFindersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddPackFindersEvent$$Original = $AddPackFindersEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$StartTracking" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerEvent$StartTracking extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $Entity$$Type)

public "getTarget"(): $Entity
public "getEntity"(): $Entity
get "target"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$StartTracking$$Type = ($PlayerEvent$StartTracking);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$StartTracking$$Original = $PlayerEvent$StartTracking;}
declare module "net.neoforged.neoforge.event.entity.EntityInvulnerabilityCheckEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityInvulnerabilityCheckEvent extends $EntityEvent {
constructor(arg0: $Entity$$Type, arg1: $DamageSource$$Type, arg2: boolean)

public "getSource"(): $DamageSource
public "getOriginalInvulnerability"(): boolean
public "setInvulnerable"(arg0: boolean): void
public "isInvulnerable"(): boolean
get "source"(): $DamageSource
get "originalInvulnerability"(): boolean
set "invulnerable"(value: boolean)
get "invulnerable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInvulnerabilityCheckEvent$$Type = ($EntityInvulnerabilityCheckEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityInvulnerabilityCheckEvent$$Original = $EntityInvulnerabilityCheckEvent;}
declare module "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent" {
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Collection$$Type} from "java.util.Collection"
import {$InsertableLinkedOpenCustomHashSet$$Type} from "net.neoforged.neoforge.common.util.InsertableLinkedOpenCustomHashSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$CreativeModeTab$Output$$Interface} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ObjectSortedSet} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent$$Interface, $CreativeModeTab$Output$$Interface {
constructor(arg0: $CreativeModeTab$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>, arg2: $CreativeModeTab$ItemDisplayParameters$$Type, arg3: $InsertableLinkedOpenCustomHashSet$$Type<($ItemStack$$Type)>, arg4: $InsertableLinkedOpenCustomHashSet$$Type<($ItemStack$$Type)>)

public "remove"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "getFlags"(): $FeatureFlagSet
public "insertBefore"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $CreativeModeTab$TabVisibility$$Type): void
public "insertFirst"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "getTab"(): $CreativeModeTab
public "getTabKey"(): $ResourceKey<($CreativeModeTab)>
public "insertAfter"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $CreativeModeTab$TabVisibility$$Type): void
public "getSearchEntries"(): $ObjectSortedSet<($ItemStack)>
public "getParentEntries"(): $ObjectSortedSet<($ItemStack)>
public "hasPermissions"(): boolean
public "accept"(arg0: $ItemLike$$Type): void
public "accept"(arg0: $ItemLike$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $ItemStack$$Type): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
get "flags"(): $FeatureFlagSet
get "tab"(): $CreativeModeTab
get "tabKey"(): $ResourceKey<($CreativeModeTab)>
get "searchEntries"(): $ObjectSortedSet<($ItemStack)>
get "parentEntries"(): $ObjectSortedSet<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildCreativeModeTabContentsEvent$$Type = ($BuildCreativeModeTabContentsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuildCreativeModeTabContentsEvent$$Original = $BuildCreativeModeTabContentsEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"

export class $PlayerEvent$PlayerLoggedInEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$PlayerLoggedInEvent$$Type = ($PlayerEvent$PlayerLoggedInEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$PlayerLoggedInEvent$$Original = $PlayerEvent$PlayerLoggedInEvent;}
declare module "net.neoforged.neoforge.event.brewing.RegisterBrewingRecipesEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$PotionBrewing$Builder, $PotionBrewing$Builder$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Builder"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RegisterBrewingRecipesEvent extends $Event {
constructor(arg0: $PotionBrewing$Builder$$Type, arg1: $RegistryAccess$$Type)

public "getRegistryAccess"(): $RegistryAccess
public "getBuilder"(): $PotionBrewing$Builder
get "registryAccess"(): $RegistryAccess
get "builder"(): $PotionBrewing$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterBrewingRecipesEvent$$Type = ($RegisterBrewingRecipesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterBrewingRecipesEvent$$Original = $RegisterBrewingRecipesEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkWatchEvent$Watch" {
import {$ChunkWatchEvent} from "net.neoforged.neoforge.event.level.ChunkWatchEvent"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ChunkWatchEvent$Watch extends $ChunkWatchEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $LevelChunk$$Type, arg2: $ServerLevel$$Type)

public "getChunk"(): $LevelChunk
get "chunk"(): $LevelChunk
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkWatchEvent$Watch$$Type = ($ChunkWatchEvent$Watch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkWatchEvent$Watch$$Original = $ChunkWatchEvent$Watch;}
declare module "net.neoforged.neoforge.event.entity.player.BonemealEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BonemealEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $ItemStack$$Type)

public "getState"(): $BlockState
public "getStack"(): $ItemStack
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "isSuccessful"(): boolean
public "isValidBonemealTarget"(): boolean
public "setSuccessful"(arg0: boolean): void
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "state"(): $BlockState
get "stack"(): $ItemStack
get "level"(): $Level
get "player"(): $Player
get "successful"(): boolean
get "validBonemealTarget"(): boolean
set "successful"(value: boolean)
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BonemealEvent$$Type = ($BonemealEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BonemealEvent$$Original = $BonemealEvent;}
declare module "net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AdvancementEvent} from "net.neoforged.neoforge.event.entity.player.AdvancementEvent"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $AdvancementEvent$AdvancementEarnEvent extends $AdvancementEvent {
constructor(arg0: $Player$$Type, arg1: $AdvancementHolder$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$AdvancementEarnEvent$$Type = ($AdvancementEvent$AdvancementEarnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementEvent$AdvancementEarnEvent$$Original = $AdvancementEvent$AdvancementEarnEvent;}
declare module "net.neoforged.neoforge.event.ItemStackedOnOtherEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ItemStackedOnOtherEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type)

public "getSlot"(): $Slot
public "getCarriedSlotAccess"(): $SlotAccess
public "getStackedOnItem"(): $ItemStack
public "getClickAction"(): $ClickAction
public "getCarriedItem"(): $ItemStack
public "getPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "slot"(): $Slot
get "carriedSlotAccess"(): $SlotAccess
get "stackedOnItem"(): $ItemStack
get "clickAction"(): $ClickAction
get "carriedItem"(): $ItemStack
get "player"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackedOnOtherEvent$$Type = ($ItemStackedOnOtherEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackedOnOtherEvent$$Original = $ItemStackedOnOtherEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteract" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerInteractEvent} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerInteractEvent$EntityInteract extends $PlayerInteractEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Entity$$Type)

public "getTarget"(): $Entity
public "setCancellationResult"(arg0: $InteractionResult$$Type): void
public "getCancellationResult"(): $InteractionResult
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "target"(): $Entity
set "cancellationResult"(value: $InteractionResult$$Type)
get "cancellationResult"(): $InteractionResult
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteract$$Type = ($PlayerInteractEvent$EntityInteract);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$EntityInteract$$Original = $PlayerInteractEvent$EntityInteract;}
declare module "net.neoforged.neoforge.event.tick.LevelTickEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level} from "net.minecraft.world.level.Level"

export class $LevelTickEvent extends $Event {
public "getLevel"(): $Level
public "hasTime"(): boolean
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelTickEvent$$Type = ($LevelTickEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelTickEvent$$Original = $LevelTickEvent;}
declare module "net.neoforged.neoforge.event.enchanting.GetEnchantmentLevelEvent" {
import {$ItemEnchantments$Mutable, $ItemEnchantments$Mutable$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments$Mutable"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Event} from "net.neoforged.bus.api.Event"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $GetEnchantmentLevelEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $ItemEnchantments$Mutable$$Type, arg2: $Holder$$Type<($Enchantment)>, arg3: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>)

public "getStack"(): $ItemStack
public "getLookup"(): $HolderLookup$RegistryLookup<($Enchantment)>
public "getHolder"(arg0: $ResourceKey$$Type<($Enchantment)>): $Optional<($Holder$Reference<($Enchantment)>)>
public "getEnchantments"(): $ItemEnchantments$Mutable
public "isTargetting"(arg0: $Holder$$Type<($Enchantment)>): boolean
public "isTargetting"(arg0: $ResourceKey$$Type<($Enchantment)>): boolean
public "getTargetEnchant"(): $Holder<($Enchantment)>
get "stack"(): $ItemStack
get "lookup"(): $HolderLookup$RegistryLookup<($Enchantment)>
get "enchantments"(): $ItemEnchantments$Mutable
get "targetEnchant"(): $Holder<($Enchantment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetEnchantmentLevelEvent$$Type = ($GetEnchantmentLevelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GetEnchantmentLevelEvent$$Original = $GetEnchantmentLevelEvent;}
declare module "net.neoforged.neoforge.event.level.ExplosionEvent$Detonate" {
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ExplosionEvent} from "net.neoforged.neoforge.event.level.ExplosionEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $ExplosionEvent$Detonate extends $ExplosionEvent {
constructor(arg0: $Level$$Type, arg1: $Explosion$$Type, arg2: $List$$Type<($Entity$$Type)>)

public "getAffectedEntities"(): $List<($Entity)>
public "getAffectedBlocks"(): $List<($BlockPos)>
get "affectedEntities"(): $List<($Entity)>
get "affectedBlocks"(): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionEvent$Detonate$$Type = ($ExplosionEvent$Detonate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionEvent$Detonate$$Original = $ExplosionEvent$Detonate;}
declare module "net.neoforged.neoforge.event.level.NoteBlockEvent$Octave" {
import {$Enum} from "java.lang.Enum"

export class $NoteBlockEvent$Octave extends $Enum<($NoteBlockEvent$Octave)> {
static readonly "HIGH": $NoteBlockEvent$Octave
static readonly "LOW": $NoteBlockEvent$Octave
static readonly "MID": $NoteBlockEvent$Octave

public static "values"(): ($NoteBlockEvent$Octave)[]
public static "valueOf"(arg0: StringJS): $NoteBlockEvent$Octave
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoteBlockEvent$Octave$$Type = (("low") | ("mid") | ("high"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoteBlockEvent$Octave$$Original = $NoteBlockEvent$Octave;}
declare module "net.neoforged.neoforge.event.entity.player.AttackEntityEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $AttackEntityEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $Entity$$Type)

public "getTarget"(): $Entity
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "target"(): $Entity
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackEntityEvent$$Type = ($AttackEntityEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttackEntityEvent$$Original = $AttackEntityEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingConversionEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingConversionEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingConversionEvent$$Type = ($LivingConversionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingConversionEvent$$Original = $LivingConversionEvent;}
declare module "net.neoforged.neoforge.event.entity.living.AnimalTameEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $AnimalTameEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Animal$$Type, arg1: $Player$$Type)

public "getTamer"(): $Player
public "getAnimal"(): $Animal
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "tamer"(): $Player
get "animal"(): $Animal
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalTameEvent$$Type = ($AnimalTameEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalTameEvent$$Original = $AnimalTameEvent;}
declare module "net.neoforged.neoforge.event.level.ExplosionEvent$Start" {
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ExplosionEvent} from "net.neoforged.neoforge.event.level.ExplosionEvent"

export class $ExplosionEvent$Start extends $ExplosionEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $Explosion$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionEvent$Start$$Type = ($ExplosionEvent$Start);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionEvent$Start$$Original = $ExplosionEvent$Start;}
declare module "net.neoforged.neoforge.event.GrindstoneEvent" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"

export class $GrindstoneEvent extends $Event {
public "getBottomItem"(): $ItemStack
public "getXp"(): integer
public "getTopItem"(): $ItemStack
public "setXp"(arg0: integer): void
get "bottomItem"(): $ItemStack
get "xp"(): integer
get "topItem"(): $ItemStack
set "xp"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindstoneEvent$$Type = ($GrindstoneEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindstoneEvent$$Original = $GrindstoneEvent;}
declare module "net.neoforged.neoforge.event.server.ServerStartingEvent" {
import {$ServerLifecycleEvent} from "net.neoforged.neoforge.event.server.ServerLifecycleEvent"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStartingEvent extends $ServerLifecycleEvent {
constructor(arg0: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStartingEvent$$Type = ($ServerStartingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStartingEvent$$Original = $ServerStartingEvent;}
declare module "net.neoforged.neoforge.event.level.LevelEvent$Load" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$Load extends $LevelEvent {
constructor(arg0: $LevelAccessor$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Load$$Type = ($LevelEvent$Load);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelEvent$Load$$Original = $LevelEvent$Load;}
declare module "net.neoforged.neoforge.event.entity.player.AdvancementEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $AdvancementEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $AdvancementHolder$$Type)

public "getAdvancement"(): $AdvancementHolder
public "getEntity"(): $Entity
get "advancement"(): $AdvancementHolder
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$$Type = ($AdvancementEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementEvent$$Original = $AdvancementEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerRespawnPositionEvent" {
import {$DimensionTransition, $DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerRespawnPositionEvent extends $PlayerEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $DimensionTransition$$Type, arg2: boolean)

public "setRespawnLevel"(arg0: $ResourceKey$$Type<($Level)>): void
public "isFromEndFight"(): boolean
public "getOriginalDimensionTransition"(): $DimensionTransition
public "setCopyOriginalSpawnPosition"(arg0: boolean): void
public "setDimensionTransition"(arg0: $DimensionTransition$$Type): void
public "copyOriginalSpawnPosition"(): boolean
public "getDimensionTransition"(): $DimensionTransition
public "getEntity"(): $Entity
set "respawnLevel"(value: $ResourceKey$$Type<($Level)>)
get "fromEndFight"(): boolean
get "originalDimensionTransition"(): $DimensionTransition
set "dimensionTransition"(value: $DimensionTransition$$Type)
get "dimensionTransition"(): $DimensionTransition
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRespawnPositionEvent$$Type = ($PlayerRespawnPositionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRespawnPositionEvent$$Original = $PlayerRespawnPositionEvent;}
declare module "net.neoforged.neoforge.event.RegisterStructureConversionsEvent" {
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$StructuresBecomeConfiguredFix$Conversion$$Type} from "net.minecraft.util.datafix.fixes.StructuresBecomeConfiguredFix$Conversion"

export class $RegisterStructureConversionsEvent extends $Event {
constructor(arg0: $Map$$Type<(StringJS), ($StructuresBecomeConfiguredFix$Conversion$$Type)>)

public "register"(arg0: StringJS, arg1: $StructuresBecomeConfiguredFix$Conversion$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterStructureConversionsEvent$$Type = ($RegisterStructureConversionsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterStructureConversionsEvent$$Original = $RegisterStructureConversionsEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobDespawnEvent" {
import {$ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$MobSpawnEvent} from "net.neoforged.neoforge.event.entity.living.MobSpawnEvent"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$MobDespawnEvent$Result, $MobDespawnEvent$Result$$Type} from "net.neoforged.neoforge.event.entity.living.MobDespawnEvent$Result"

export class $MobDespawnEvent extends $MobSpawnEvent {
constructor(arg0: $Mob$$Type, arg1: $ServerLevelAccessor$$Type)

public "setResult"(arg0: $MobDespawnEvent$Result$$Type): void
public "getResult"(): $MobDespawnEvent$Result
public "getEntity"(): $Entity
set "result"(value: $MobDespawnEvent$Result$$Type)
get "result"(): $MobDespawnEvent$Result
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDespawnEvent$$Type = ($MobDespawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobDespawnEvent$$Original = $MobDespawnEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Tick" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingEntityUseItemEvent} from "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent"

export class $LivingEntityUseItemEvent$Tick extends $LivingEntityUseItemEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityUseItemEvent$Tick$$Type = ($LivingEntityUseItemEvent$Tick);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityUseItemEvent$Tick$$Original = $LivingEntityUseItemEvent$Tick;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$NeighborNotifyEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$NeighborNotifyEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $EnumSet$$Type<($Direction$$Type)>, arg4: boolean)

public "getForceRedstoneUpdate"(): boolean
public "getNotifiedSides"(): $EnumSet<($Direction)>
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "forceRedstoneUpdate"(): boolean
get "notifiedSides"(): $EnumSet<($Direction)>
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$NeighborNotifyEvent$$Type = ($BlockEvent$NeighborNotifyEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$NeighborNotifyEvent$$Original = $BlockEvent$NeighborNotifyEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityEvent$EntityConstructing" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityEvent$EntityConstructing extends $EntityEvent {
constructor(arg0: $Entity$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$EntityConstructing$$Type = ($EntityEvent$EntityConstructing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEvent$EntityConstructing$$Original = $EntityEvent$EntityConstructing;}
declare module "net.neoforged.neoforge.event.level.NoteBlockEvent$Note" {
import {$Enum} from "java.lang.Enum"

export class $NoteBlockEvent$Note extends $Enum<($NoteBlockEvent$Note)> {
static readonly "A": $NoteBlockEvent$Note
static readonly "F_SHARP": $NoteBlockEvent$Note
static readonly "B": $NoteBlockEvent$Note
static readonly "C": $NoteBlockEvent$Note
static readonly "D": $NoteBlockEvent$Note
static readonly "E": $NoteBlockEvent$Note
static readonly "F": $NoteBlockEvent$Note
static readonly "G": $NoteBlockEvent$Note
static readonly "G_SHARP": $NoteBlockEvent$Note
static readonly "A_SHARP": $NoteBlockEvent$Note
static readonly "D_SHARP": $NoteBlockEvent$Note
static readonly "C_SHARP": $NoteBlockEvent$Note

public static "values"(): ($NoteBlockEvent$Note)[]
public static "valueOf"(arg0: StringJS): $NoteBlockEvent$Note
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoteBlockEvent$Note$$Type = (("f_sharp") | ("g") | ("g_sharp") | ("a") | ("a_sharp") | ("b") | ("c") | ("c_sharp") | ("d") | ("d_sharp") | ("e") | ("f"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoteBlockEvent$Note$$Original = $NoteBlockEvent$Note;}
declare module "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IReductionFunction$$Type} from "net.neoforged.neoforge.common.damagesource.IReductionFunction"
import {$DamageContainer$Reduction$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction"

export class $LivingIncomingDamageEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

public "getSource"(): $DamageSource
public "getContainer"(): $DamageContainer
public "getAmount"(): float
public "setInvulnerabilityTicks"(arg0: integer): void
public "addReductionModifier"(arg0: $DamageContainer$Reduction$$Type, arg1: $IReductionFunction$$Type): void
public "getOriginalAmount"(): float
public "setAmount"(arg0: float): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "source"(): $DamageSource
get "container"(): $DamageContainer
get "amount"(): float
set "invulnerabilityTicks"(value: integer)
get "originalAmount"(): float
set "amount"(value: float)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingIncomingDamageEvent$$Type = ($LivingIncomingDamageEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingIncomingDamageEvent$$Original = $LivingIncomingDamageEvent;}
declare module "net.neoforged.neoforge.event.level.BlockGrowFeatureEvent" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $BlockGrowFeatureEvent extends $LevelEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $Holder$$Type<($ConfiguredFeature<(never), (never)>)>)

public "getFeature"(): $Holder<($ConfiguredFeature<(never), (never)>)>
public "setFeature"(arg0: $Holder$$Type<($ConfiguredFeature<(never), (never)>)>): void
public "setFeature"(arg0: $ResourceKey$$Type<($ConfiguredFeature<(never), (never)>)>): void
public "getRandom"(): $RandomSource
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "feature"(): $Holder<($ConfiguredFeature<(never), (never)>)>
set "feature"(value: $Holder$$Type<($ConfiguredFeature<(never), (never)>)>)
set "feature"(value: $ResourceKey$$Type<($ConfiguredFeature<(never), (never)>)>)
get "random"(): $RandomSource
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGrowFeatureEvent$$Type = ($BlockGrowFeatureEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockGrowFeatureEvent$$Original = $BlockGrowFeatureEvent;}
declare module "net.neoforged.neoforge.event.entity.living.EffectParticleModificationEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $EffectParticleModificationEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type)

public "setVisible"(arg0: boolean): void
public "getEffect"(): $MobEffectInstance
public "setParticleOptions"(arg0: $ParticleOptions$$Type): void
public "isVisible"(): boolean
public "getOriginalParticleOptions"(): $ParticleOptions
public "getParticleOptions"(): $ParticleOptions
set "visible"(value: boolean)
get "effect"(): $MobEffectInstance
set "particleOptions"(value: $ParticleOptions$$Type)
get "visible"(): boolean
get "originalParticleOptions"(): $ParticleOptions
get "particleOptions"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectParticleModificationEvent$$Type = ($EffectParticleModificationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectParticleModificationEvent$$Original = $EffectParticleModificationEvent;}
declare module "net.neoforged.neoforge.event.entity.player.ArrowLooseEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $ArrowLooseEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: integer, arg4: boolean)

public "getLevel"(): $Level
public "getBow"(): $ItemStack
public "hasAmmo"(): boolean
public "setCharge"(arg0: integer): void
public "getCharge"(): integer
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "level"(): $Level
get "bow"(): $ItemStack
set "charge"(value: integer)
get "charge"(): integer
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrowLooseEvent$$Type = ($ArrowLooseEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrowLooseEvent$$Original = $ArrowLooseEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerInteractEvent} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerInteractEvent$LeftClickEmpty extends $PlayerInteractEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$LeftClickEmpty$$Type = ($PlayerInteractEvent$LeftClickEmpty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$LeftClickEmpty$$Original = $PlayerInteractEvent$LeftClickEmpty;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerHeartTypeEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Gui$HeartType, $Gui$HeartType$$Type} from "net.minecraft.client.gui.Gui$HeartType"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerHeartTypeEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $Gui$HeartType$$Type)

public "setType"(arg0: $Gui$HeartType$$Type): void
public "getType"(): $Gui$HeartType
public "getOriginalType"(): $Gui$HeartType
public "getEntity"(): $Entity
set "type"(value: $Gui$HeartType$$Type)
get "type"(): $Gui$HeartType
get "originalType"(): $Gui$HeartType
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerHeartTypeEvent$$Type = ($PlayerHeartTypeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerHeartTypeEvent$$Original = $PlayerHeartTypeEvent;}
declare module "net.neoforged.neoforge.event.level.SleepFinishedTimeEvent" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $SleepFinishedTimeEvent extends $LevelEvent {
constructor(arg0: $ServerLevel$$Type, arg1: long, arg2: long)

public "getNewTime"(): long
public "setTimeAddition"(arg0: long): boolean
get "newTime"(): long
set "timeAddition"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SleepFinishedTimeEvent$$Type = ($SleepFinishedTimeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SleepFinishedTimeEvent$$Original = $SleepFinishedTimeEvent;}
declare module "net.neoforged.neoforge.event.level.LevelEvent$Save" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$Save extends $LevelEvent {
constructor(arg0: $LevelAccessor$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Save$$Type = ($LevelEvent$Save);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelEvent$Save$$Original = $LevelEvent$Save;}
declare module "net.neoforged.neoforge.event.entity.player.AnvilRepairEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $AnvilRepairEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

public "getLeft"(): $ItemStack
public "getRight"(): $ItemStack
public "getOutput"(): $ItemStack
public "setBreakChance"(arg0: float): void
public "getBreakChance"(): float
public "getEntity"(): $Entity
get "left"(): $ItemStack
get "right"(): $ItemStack
get "output"(): $ItemStack
set "breakChance"(value: float)
get "breakChance"(): float
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilRepairEvent$$Type = ($AnvilRepairEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilRepairEvent$$Original = $AnvilRepairEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobSplitEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$List, $List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"

export class $MobSplitEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Mob$$Type, arg1: $List$$Type<($Mob$$Type)>)

public "getParent"(): $Mob
public "getChildren"(): $List<($Mob)>
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "parent"(): $Mob
get "children"(): $List<($Mob)>
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSplitEvent$$Type = ($MobSplitEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobSplitEvent$$Original = $MobSplitEvent;}
declare module "net.neoforged.neoforge.event.entity.ProjectileImpactEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"

export class $ProjectileImpactEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Projectile$$Type, arg1: $HitResult$$Type)

public "getRayTraceResult"(): $HitResult
public "getProjectile"(): $Projectile
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "rayTraceResult"(): $HitResult
get "projectile"(): $Projectile
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileImpactEvent$$Type = ($ProjectileImpactEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProjectileImpactEvent$$Original = $ProjectileImpactEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerInteractEvent} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$PlayerInteractEvent$LeftClickBlock$Action, $PlayerInteractEvent$LeftClickBlock$Action$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock$Action"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $PlayerInteractEvent$LeftClickBlock extends $PlayerInteractEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $PlayerInteractEvent$LeftClickBlock$Action$$Type)

public "getAction"(): $PlayerInteractEvent$LeftClickBlock$Action
public "getUseBlock"(): $TriState
public "setUseBlock"(arg0: $TriState$$Type): void
public "getUseItem"(): $TriState
public "setCanceled"(arg0: boolean): void
public "setUseItem"(arg0: $TriState$$Type): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "action"(): $PlayerInteractEvent$LeftClickBlock$Action
get "useBlock"(): $TriState
set "useBlock"(value: $TriState$$Type)
get "useItem"(): $TriState
set "canceled"(value: boolean)
set "useItem"(value: $TriState$$Type)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$LeftClickBlock$$Type = ($PlayerInteractEvent$LeftClickBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$LeftClickBlock$$Original = $PlayerInteractEvent$LeftClickBlock;}
declare module "net.neoforged.neoforge.event.tick.EntityTickEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"

export class $EntityTickEvent extends $EntityEvent {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTickEvent$$Type = ($EntityTickEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTickEvent$$Original = $EntityTickEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$Clone" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"

export class $PlayerEvent$Clone extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $Player$$Type, arg2: boolean)

public "getEntity"(): $LivingEntity
public "isWasDeath"(): boolean
public "getOriginal"(): $Player
get "entity"(): $LivingEntity
get "wasDeath"(): boolean
get "original"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$Clone$$Type = ($PlayerEvent$Clone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$Clone$$Original = $PlayerEvent$Clone;}
declare module "net.neoforged.neoforge.event.tick.PlayerTickEvent" {
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerTickEvent extends $PlayerEvent {
public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTickEvent$$Type = ($PlayerTickEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTickEvent$$Original = $PlayerTickEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerLoggedOutEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"

export class $PlayerEvent$PlayerLoggedOutEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$PlayerLoggedOutEvent$$Type = ($PlayerEvent$PlayerLoggedOutEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$PlayerLoggedOutEvent$$Original = $PlayerEvent$PlayerLoggedOutEvent;}
declare module "net.neoforged.neoforge.event.entity.player.SweepAttackEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SweepAttackEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: boolean)

public "getTarget"(): $Entity
public "isSweeping"(): boolean
public "setSweeping"(arg0: boolean): void
public "isVanillaSweep"(): boolean
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "target"(): $Entity
get "sweeping"(): boolean
set "sweeping"(value: boolean)
get "vanillaSweep"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SweepAttackEvent$$Type = ($SweepAttackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SweepAttackEvent$$Original = $SweepAttackEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingEvent extends $EntityEvent {
constructor(arg0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$$Type = ($LivingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEvent$$Original = $LivingEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingUseTotemEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingUseTotemEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type)

public "getSource"(): $DamageSource
public "getHandHolding"(): $InteractionHand
public "getTotem"(): $ItemStack
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "source"(): $DamageSource
get "handHolding"(): $InteractionHand
get "totem"(): $ItemStack
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingUseTotemEvent$$Type = ($LivingUseTotemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingUseTotemEvent$$Original = $LivingUseTotemEvent;}
declare module "net.neoforged.neoforge.event.level.block.CropGrowEvent$Post" {
import {$CropGrowEvent} from "net.neoforged.neoforge.event.level.block.CropGrowEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent$Post extends $CropGrowEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type)

public "getState"(): $BlockState
public "getOriginalState"(): $BlockState
get "state"(): $BlockState
get "originalState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropGrowEvent$Post$$Type = ($CropGrowEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CropGrowEvent$Post$$Original = $CropGrowEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre" {
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingDamageEvent} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent"

export class $LivingDamageEvent$Pre extends $LivingDamageEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

public "getSource"(): $DamageSource
public "getContainer"(): $DamageContainer
public "getOriginalDamage"(): float
public "getNewDamage"(): float
public "setNewDamage"(arg0: float): void
get "source"(): $DamageSource
get "container"(): $DamageContainer
get "originalDamage"(): float
get "newDamage"(): float
set "newDamage"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDamageEvent$Pre$$Type = ($LivingDamageEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDamageEvent$Pre$$Original = $LivingDamageEvent$Pre;}
declare module "net.neoforged.neoforge.event.entity.item.ItemExpireEvent" {
import {$ItemEvent} from "net.neoforged.neoforge.event.entity.item.ItemEvent"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $ItemExpireEvent extends $ItemEvent {
constructor(arg0: $ItemEntity$$Type)

public "setExtraLife"(arg0: integer): void
public "addExtraLife"(arg0: integer): void
public "getExtraLife"(): integer
set "extraLife"(value: integer)
get "extraLife"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExpireEvent$$Type = ($ItemExpireEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemExpireEvent$$Original = $ItemExpireEvent;}
declare module "net.neoforged.neoforge.event.PlayLevelSoundEvent$AtEntity" {
import {$PlayLevelSoundEvent} from "net.neoforged.neoforge.event.PlayLevelSoundEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $PlayLevelSoundEvent$AtEntity extends $PlayLevelSoundEvent {
constructor(arg0: $Entity$$Type, arg1: $Holder$$Type<($SoundEvent)>, arg2: $SoundSource$$Type, arg3: float, arg4: float)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayLevelSoundEvent$AtEntity$$Type = ($PlayLevelSoundEvent$AtEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayLevelSoundEvent$AtEntity$$Original = $PlayLevelSoundEvent$AtEntity;}
declare module "net.neoforged.neoforge.event.village.WandererTradesEvent" {
import {$List, $List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $WandererTradesEvent extends $Event {
/**
 * 
 * @deprecated
 */
constructor(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>, arg1: $List$$Type<($VillagerTrades$ItemListing$$Type)>)
constructor(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>, arg1: $List$$Type<($VillagerTrades$ItemListing$$Type)>, arg2: $RegistryAccess$$Type)

public "getRegistryAccess"(): $RegistryAccess
public "getRareTrades"(): $List<($VillagerTrades$ItemListing)>
public "getGenericTrades"(): $List<($VillagerTrades$ItemListing)>
get "registryAccess"(): $RegistryAccess
get "rareTrades"(): $List<($VillagerTrades$ItemListing)>
get "genericTrades"(): $List<($VillagerTrades$ItemListing)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandererTradesEvent$$Type = ($WandererTradesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandererTradesEvent$$Original = $WandererTradesEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Start" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingEntityUseItemEvent} from "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent"

export class $LivingEntityUseItemEvent$Start extends $LivingEntityUseItemEvent implements $ICancellableEvent$$Interface {
/**
 * 
 * @deprecated
 */
constructor(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer)
constructor(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type, arg3: integer)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityUseItemEvent$Start$$Type = ($LivingEntityUseItemEvent$Start);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityUseItemEvent$Start$$Original = $LivingEntityUseItemEvent$Start;}
declare module "net.neoforged.neoforge.event.DifficultyChangeEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"

export class $DifficultyChangeEvent extends $Event {
constructor(arg0: $Difficulty$$Type, arg1: $Difficulty$$Type)

public "getOldDifficulty"(): $Difficulty
public "getDifficulty"(): $Difficulty
get "oldDifficulty"(): $Difficulty
get "difficulty"(): $Difficulty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DifficultyChangeEvent$$Type = ($DifficultyChangeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DifficultyChangeEvent$$Original = $DifficultyChangeEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkEvent$Load" {
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkEvent} from "net.neoforged.neoforge.event.level.ChunkEvent"

export class $ChunkEvent$Load extends $ChunkEvent {
constructor(arg0: $ChunkAccess$$Type, arg1: boolean)

public "isNewChunk"(): boolean
get "newChunk"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Load$$Type = ($ChunkEvent$Load);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkEvent$Load$$Original = $ChunkEvent$Load;}
declare module "net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityTravelToDimensionEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: $ResourceKey$$Type<($Level)>)

public "getDimension"(): $ResourceKey<($Level)>
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "dimension"(): $ResourceKey<($Level)>
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTravelToDimensionEvent$$Type = ($EntityTravelToDimensionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTravelToDimensionEvent$$Original = $EntityTravelToDimensionEvent;}
declare module "net.neoforged.neoforge.event.entity.player.CanPlayerSleepEvent" {
import {$Level} from "net.minecraft.world.level.Level"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Player$BedSleepingProblem, $Player$BedSleepingProblem$$Type} from "net.minecraft.world.entity.player.Player$BedSleepingProblem"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CanPlayerSleepEvent extends $PlayerEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $BlockPos$$Type, arg2: $Player$BedSleepingProblem$$Type)

public "getState"(): $BlockState
public "getLevel"(): $Level
public "getEntity"(): $Entity
public "getProblem"(): $Player$BedSleepingProblem
public "setProblem"(arg0: $Player$BedSleepingProblem$$Type): void
public "getPos"(): $BlockPos
public "getVanillaProblem"(): $Player$BedSleepingProblem
get "state"(): $BlockState
get "level"(): $Level
get "entity"(): $Entity
get "problem"(): $Player$BedSleepingProblem
set "problem"(value: $Player$BedSleepingProblem$$Type)
get "pos"(): $BlockPos
get "vanillaProblem"(): $Player$BedSleepingProblem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanPlayerSleepEvent$$Type = ($CanPlayerSleepEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CanPlayerSleepEvent$$Original = $CanPlayerSleepEvent;}
declare module "net.neoforged.neoforge.event.ItemAttributeModifierEvent" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$ItemAttributeModifiers$Entry, $ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List} from "java.util.List"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemAttributeModifierEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type)

public "getModifiers"(): $List<($ItemAttributeModifiers$Entry)>
public "removeIf"(arg0: $Predicate$$Type<($ItemAttributeModifiers$Entry)>): boolean
public "build"(): $ItemAttributeModifiers
public "removeAllModifiersFor"(arg0: $Holder$$Type<($Attribute)>): boolean
public "getDefaultModifiers"(): $ItemAttributeModifiers
public "clearModifiers"(): void
public "replaceModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): void
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): boolean
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): boolean
public "getItemStack"(): $ItemStack
get "modifiers"(): $List<($ItemAttributeModifiers$Entry)>
get "defaultModifiers"(): $ItemAttributeModifiers
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifierEvent$$Type = ($ItemAttributeModifierEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAttributeModifierEvent$$Original = $ItemAttributeModifierEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $PlayerEvent$PlayerChangedDimensionEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $ResourceKey$$Type<($Level)>)

public "getFrom"(): $ResourceKey<($Level)>
public "getEntity"(): $LivingEntity
public "getTo"(): $ResourceKey<($Level)>
get "from"(): $ResourceKey<($Level)>
get "entity"(): $LivingEntity
get "to"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$PlayerChangedDimensionEvent$$Type = ($PlayerEvent$PlayerChangedDimensionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$PlayerChangedDimensionEvent$$Original = $PlayerEvent$PlayerChangedDimensionEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerDestroyItemEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerDestroyItemEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
public "getOriginal"(): $ItemStack
public "getEntity"(): $Entity
get "hand"(): $InteractionHand
get "original"(): $ItemStack
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDestroyItemEvent$$Type = ($PlayerDestroyItemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDestroyItemEvent$$Original = $PlayerDestroyItemEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerInteractEvent} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Entity$$Type, arg3: $Vec3$$Type)

public "getTarget"(): $Entity
public "setCancellationResult"(arg0: $InteractionResult$$Type): void
public "getLocalPos"(): $Vec3
public "getCancellationResult"(): $InteractionResult
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "target"(): $Entity
set "cancellationResult"(value: $InteractionResult$$Type)
get "localPos"(): $Vec3
get "cancellationResult"(): $InteractionResult
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteractSpecific$$Type = ($PlayerInteractEvent$EntityInteractSpecific);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$EntityInteractSpecific$$Original = $PlayerInteractEvent$EntityInteractSpecific;}
declare module "net.neoforged.neoforge.event.entity.living.ArmorHurtEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EnumMap$$Type} from "java.util.EnumMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ArmorHurtEvent$ArmorEntry, $ArmorHurtEvent$ArmorEntry$$Type} from "net.neoforged.neoforge.event.entity.living.ArmorHurtEvent$ArmorEntry"

export class $ArmorHurtEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $EnumMap$$Type<($EquipmentSlot$$Type), ($ArmorHurtEvent$ArmorEntry$$Type)>, arg1: $LivingEntity$$Type, arg2: $DamageSource$$Type)

public "getArmorItemStack"(arg0: $EquipmentSlot$$Type): $ItemStack
public "getOriginalDamage"(arg0: $EquipmentSlot$$Type): float
public "getDamageSource"(): $DamageSource
public "getArmorMap"(): $Map<($EquipmentSlot), ($ArmorHurtEvent$ArmorEntry)>
public "getNewDamage"(arg0: $EquipmentSlot$$Type): float
public "setNewDamage"(arg0: $EquipmentSlot$$Type, arg1: float): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "damageSource"(): $DamageSource
get "armorMap"(): $Map<($EquipmentSlot), ($ArmorHurtEvent$ArmorEntry)>
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorHurtEvent$$Type = ($ArmorHurtEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorHurtEvent$$Original = $ArmorHurtEvent;}
declare module "net.neoforged.neoforge.event.BlockEntityTypeAddBlocksEvent" {
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $BlockEntityTypeAddBlocksEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "modify"(arg0: $ResourceKey$$Type<($BlockEntityType<(never)>)>, ...arg1: ($Block$$Type)[]): void
public "modify"(arg0: $BiPredicate$$Type<($ResourceKey<($BlockEntityType<(never)>)>), ($BlockEntityType<(never)>)>, ...arg1: ($Block$$Type)[]): void
public "modify"(arg0: $BlockEntityType$$Type<(never)>, ...arg1: ($Block$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeAddBlocksEvent$$Type = ($BlockEntityTypeAddBlocksEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityTypeAddBlocksEvent$$Original = $BlockEntityTypeAddBlocksEvent;}
declare module "net.neoforged.neoforge.event.PlayLevelSoundEvent$AtPosition" {
import {$PlayLevelSoundEvent} from "net.neoforged.neoforge.event.PlayLevelSoundEvent"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $PlayLevelSoundEvent$AtPosition extends $PlayLevelSoundEvent {
constructor(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float)

public "getPosition"(): $Vec3
get "position"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayLevelSoundEvent$AtPosition$$Type = ($PlayLevelSoundEvent$AtPosition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayLevelSoundEvent$AtPosition$$Original = $PlayLevelSoundEvent$AtPosition;}
declare module "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Added" {
import {$MobEffectEvent} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MobEffectEvent$Added extends $MobEffectEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type, arg2: $MobEffectInstance$$Type, arg3: $Entity$$Type)

public "getEffectInstance"(): $MobEffectInstance
public "getEffectSource"(): $Entity
public "getOldEffectInstance"(): $MobEffectInstance
get "effectInstance"(): $MobEffectInstance
get "effectSource"(): $Entity
get "oldEffectInstance"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectEvent$Added$$Type = ($MobEffectEvent$Added);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectEvent$Added$$Original = $MobEffectEvent$Added;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerInteractEvent} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type)

public "setCancellationResult"(arg0: $InteractionResult$$Type): void
public "getUseBlock"(): $TriState
public "setUseBlock"(arg0: $TriState$$Type): void
public "getCancellationResult"(): $InteractionResult
public "getUseItem"(): $TriState
public "setCanceled"(arg0: boolean): void
public "setUseItem"(arg0: $TriState$$Type): void
public "getHitVec"(): $BlockHitResult
public "isCanceled"(): boolean
public "getEntity"(): $Entity
set "cancellationResult"(value: $InteractionResult$$Type)
get "useBlock"(): $TriState
set "useBlock"(value: $TriState$$Type)
get "cancellationResult"(): $InteractionResult
get "useItem"(): $TriState
set "canceled"(value: boolean)
set "useItem"(value: $TriState$$Type)
get "hitVec"(): $BlockHitResult
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickBlock$$Type = ($PlayerInteractEvent$RightClickBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$RightClickBlock$$Original = $PlayerInteractEvent$RightClickBlock;}
declare module "net.neoforged.neoforge.event.entity.player.CanContinueSleepingEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Player$BedSleepingProblem, $Player$BedSleepingProblem$$Type} from "net.minecraft.world.entity.player.Player$BedSleepingProblem"

export class $CanContinueSleepingEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $Player$BedSleepingProblem$$Type)

public "getProblem"(): $Player$BedSleepingProblem
public "mayContinueSleeping"(): boolean
public "setContinueSleeping"(arg0: boolean): void
get "problem"(): $Player$BedSleepingProblem
set "continueSleeping"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanContinueSleepingEvent$$Type = ($CanContinueSleepingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CanContinueSleepingEvent$$Original = $CanContinueSleepingEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickEmpty" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerInteractEvent} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerInteractEvent$RightClickEmpty extends $PlayerInteractEvent {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickEmpty$$Type = ($PlayerInteractEvent$RightClickEmpty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$RightClickEmpty$$Original = $PlayerInteractEvent$RightClickEmpty;}
declare module "net.neoforged.neoforge.event.entity.player.UseItemOnBlockEvent$UsePhase" {
import {$Enum} from "java.lang.Enum"

export class $UseItemOnBlockEvent$UsePhase extends $Enum<($UseItemOnBlockEvent$UsePhase)> {
static readonly "ITEM_BEFORE_BLOCK": $UseItemOnBlockEvent$UsePhase
static readonly "BLOCK": $UseItemOnBlockEvent$UsePhase
static readonly "ITEM_AFTER_BLOCK": $UseItemOnBlockEvent$UsePhase

public static "values"(): ($UseItemOnBlockEvent$UsePhase)[]
public static "valueOf"(arg0: StringJS): $UseItemOnBlockEvent$UsePhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseItemOnBlockEvent$UsePhase$$Type = (("item_before_block") | ("block") | ("item_after_block"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseItemOnBlockEvent$UsePhase$$Original = $UseItemOnBlockEvent$UsePhase;}
declare module "net.neoforged.neoforge.event.entity.living.MobEffectEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"

export class $MobEffectEvent extends $LivingEvent {
public "getEffectInstance"(): $MobEffectInstance
get "effectInstance"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectEvent$$Type = ($MobEffectEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectEvent$$Original = $MobEffectEvent;}
declare module "net.neoforged.neoforge.event.entity.player.ItemEntityPickupEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $ItemEntityPickupEvent extends $Event {
constructor(arg0: $Player$$Type, arg1: $ItemEntity$$Type)

public "getPlayer"(): $Player
public "getItemEntity"(): $ItemEntity
get "player"(): $Player
get "itemEntity"(): $ItemEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityPickupEvent$$Type = ($ItemEntityPickupEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntityPickupEvent$$Original = $ItemEntityPickupEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable$Result" {
import {$Enum} from "java.lang.Enum"

export class $MobEffectEvent$Applicable$Result extends $Enum<($MobEffectEvent$Applicable$Result)> {
static readonly "DO_NOT_APPLY": $MobEffectEvent$Applicable$Result
static readonly "APPLY": $MobEffectEvent$Applicable$Result
static readonly "DEFAULT": $MobEffectEvent$Applicable$Result

public static "values"(): ($MobEffectEvent$Applicable$Result)[]
public static "valueOf"(arg0: StringJS): $MobEffectEvent$Applicable$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectEvent$Applicable$Result$$Type = (("apply") | ("default") | ("do_not_apply"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectEvent$Applicable$Result$$Original = $MobEffectEvent$Applicable$Result;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEvent$LivingVisibilityEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $LivingEvent$LivingVisibilityEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $Entity$$Type, arg2: double)

public "getEntity"(): $Entity
public "getVisibilityModifier"(): double
public "modifyVisibility"(arg0: double): void
public "getLookingEntity"(): $Entity
get "entity"(): $Entity
get "visibilityModifier"(): double
get "lookingEntity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$LivingVisibilityEvent$$Type = ($LivingEvent$LivingVisibilityEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEvent$LivingVisibilityEvent$$Original = $LivingEvent$LivingVisibilityEvent;}
declare module "net.neoforged.neoforge.event.LootTableLoadEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $LootTableLoadEvent extends $Event implements $ICancellableEvent$$Interface {
/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceLocation$$Type, arg1: $LootTable$$Type)
constructor(arg0: $HolderLookup$Provider$$Type, arg1: $ResourceLocation$$Type, arg2: $LootTable$$Type)

public "getName"(): $ResourceLocation
public "getKey"(): $ResourceKey<($LootTable)>
public "getTable"(): $LootTable
public "setTable"(arg0: $LootTable$$Type): void
public "getRegistries"(): $HolderLookup$Provider
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "name"(): $ResourceLocation
get "key"(): $ResourceKey<($LootTable)>
get "table"(): $LootTable
set "table"(value: $LootTable$$Type)
get "registries"(): $HolderLookup$Provider
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableLoadEvent$$Type = ($LootTableLoadEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableLoadEvent$$Original = $LootTableLoadEvent;}
declare module "net.neoforged.neoforge.event.tick.ServerTickEvent$Pre" {
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ServerTickEvent} from "net.neoforged.neoforge.event.tick.ServerTickEvent"

export class $ServerTickEvent$Pre extends $ServerTickEvent {
constructor(arg0: $BooleanSupplier$$Type, arg1: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickEvent$Pre$$Type = ($ServerTickEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerTickEvent$Pre$$Original = $ServerTickEvent$Pre;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$EntityMultiPlaceEvent" {
import {$BlockSnapshot, $BlockSnapshot$$Type} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$BlockEvent$EntityPlaceEvent} from "net.neoforged.neoforge.event.level.BlockEvent$EntityPlaceEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$List, $List$$Type} from "java.util.List"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$EntityMultiPlaceEvent extends $BlockEvent$EntityPlaceEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $List$$Type<($BlockSnapshot$$Type)>, arg1: $BlockState$$Type, arg2: $Entity$$Type)

public "getReplacedBlockSnapshots"(): $List<($BlockSnapshot)>
get "replacedBlockSnapshots"(): $List<($BlockSnapshot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$EntityMultiPlaceEvent$$Type = ($BlockEvent$EntityMultiPlaceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$EntityMultiPlaceEvent$$Original = $BlockEvent$EntityMultiPlaceEvent;}
declare module "net.neoforged.neoforge.event.server.ServerAboutToStartEvent" {
import {$ServerLifecycleEvent} from "net.neoforged.neoforge.event.server.ServerLifecycleEvent"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerAboutToStartEvent extends $ServerLifecycleEvent {
constructor(arg0: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerAboutToStartEvent$$Type = ($ServerAboutToStartEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerAboutToStartEvent$$Original = $ServerAboutToStartEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobSpawnEvent$SpawnPlacementCheck$Result" {
import {$Enum} from "java.lang.Enum"

export class $MobSpawnEvent$SpawnPlacementCheck$Result extends $Enum<($MobSpawnEvent$SpawnPlacementCheck$Result)> {
static readonly "SUCCEED": $MobSpawnEvent$SpawnPlacementCheck$Result
static readonly "DEFAULT": $MobSpawnEvent$SpawnPlacementCheck$Result
static readonly "FAIL": $MobSpawnEvent$SpawnPlacementCheck$Result

public static "values"(): ($MobSpawnEvent$SpawnPlacementCheck$Result)[]
public static "valueOf"(arg0: StringJS): $MobSpawnEvent$SpawnPlacementCheck$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnEvent$SpawnPlacementCheck$Result$$Type = (("succeed") | ("default") | ("fail"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobSpawnEvent$SpawnPlacementCheck$Result$$Original = $MobSpawnEvent$SpawnPlacementCheck$Result;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerSetSpawnEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PlayerSetSpawnEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $BlockPos$$Type, arg3: boolean)

public "getSpawnLevel"(): $ResourceKey<($Level)>
public "isForced"(): boolean
public "getNewSpawn"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "spawnLevel"(): $ResourceKey<($Level)>
get "forced"(): boolean
get "newSpawn"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSetSpawnEvent$$Type = ($PlayerSetSpawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSetSpawnEvent$$Original = $PlayerSetSpawnEvent;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$BreakEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$BreakEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type)

public "getPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "player"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$BreakEvent$$Type = ($BlockEvent$BreakEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$BreakEvent$$Original = $BlockEvent$BreakEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingBreatheEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingBreatheEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: boolean, arg2: integer, arg3: integer)

public "setConsumeAirAmount"(arg0: integer): void
public "setCanBreathe"(arg0: boolean): void
public "setRefillAirAmount"(arg0: integer): void
public "getConsumeAirAmount"(): integer
public "getRefillAirAmount"(): integer
public "canBreathe"(): boolean
set "consumeAirAmount"(value: integer)
set "refillAirAmount"(value: integer)
get "consumeAirAmount"(): integer
get "refillAirAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingBreatheEvent$$Type = ($LivingBreatheEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingBreatheEvent$$Original = $LivingBreatheEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkWatchEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $ChunkWatchEvent extends $Event {
constructor(arg0: $ServerPlayer$$Type, arg1: $ChunkPos$$Type, arg2: $ServerLevel$$Type)

public "getLevel"(): $ServerLevel
public "getPlayer"(): $ServerPlayer
public "getPos"(): $ChunkPos
get "level"(): $ServerLevel
get "player"(): $ServerPlayer
get "pos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkWatchEvent$$Type = ($ChunkWatchEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkWatchEvent$$Original = $ChunkWatchEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerNegotiationEvent" {
import {$List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Future$$Type} from "java.util.concurrent.Future"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export class $PlayerNegotiationEvent extends $Event {
constructor(arg0: $Connection$$Type, arg1: $GameProfile$$Type, arg2: $List$$Type<($Future$$Type<(void)>)>)

public "getConnection"(): $Connection
public "getProfile"(): $GameProfile
public "enqueueWork"(arg0: $Runnable$$Type): void
public "enqueueWork"(arg0: $Future$$Type<(void)>): void
get "connection"(): $Connection
get "profile"(): $GameProfile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerNegotiationEvent$$Type = ($PlayerNegotiationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerNegotiationEvent$$Original = $PlayerNegotiationEvent;}
declare module "net.neoforged.neoforge.event.level.ChunkEvent$Unload" {
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkEvent} from "net.neoforged.neoforge.event.level.ChunkEvent"

export class $ChunkEvent$Unload extends $ChunkEvent {
constructor(arg0: $ChunkAccess$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Unload$$Type = ($ChunkEvent$Unload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkEvent$Unload$$Original = $ChunkEvent$Unload;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerXpEvent$PickupXp" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerXpEvent} from "net.neoforged.neoforge.event.entity.player.PlayerXpEvent"
import {$ExperienceOrb, $ExperienceOrb$$Type} from "net.minecraft.world.entity.ExperienceOrb"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerXpEvent$PickupXp extends $PlayerXpEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $ExperienceOrb$$Type)

public "getOrb"(): $ExperienceOrb
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "orb"(): $ExperienceOrb
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerXpEvent$PickupXp$$Type = ($PlayerXpEvent$PickupXp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerXpEvent$PickupXp$$Original = $PlayerXpEvent$PickupXp;}
declare module "net.neoforged.neoforge.event.level.block.CropGrowEvent$Pre" {
import {$CropGrowEvent} from "net.neoforged.neoforge.event.level.block.CropGrowEvent"
import {$CropGrowEvent$Pre$Result, $CropGrowEvent$Pre$Result$$Type} from "net.neoforged.neoforge.event.level.block.CropGrowEvent$Pre$Result"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent$Pre extends $CropGrowEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setResult"(arg0: $CropGrowEvent$Pre$Result$$Type): void
public "getResult"(): $CropGrowEvent$Pre$Result
set "result"(value: $CropGrowEvent$Pre$Result$$Type)
get "result"(): $CropGrowEvent$Pre$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropGrowEvent$Pre$$Type = ($CropGrowEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CropGrowEvent$Pre$$Original = $CropGrowEvent$Pre;}
declare module "net.neoforged.neoforge.event.server.ServerLifecycleEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerLifecycleEvent extends $Event {
constructor(arg0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLifecycleEvent$$Type = ($ServerLifecycleEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLifecycleEvent$$Original = $ServerLifecycleEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobDespawnEvent$Result" {
import {$Enum} from "java.lang.Enum"

export class $MobDespawnEvent$Result extends $Enum<($MobDespawnEvent$Result)> {
static readonly "DENY": $MobDespawnEvent$Result
static readonly "ALLOW": $MobDespawnEvent$Result
static readonly "DEFAULT": $MobDespawnEvent$Result

public static "values"(): ($MobDespawnEvent$Result)[]
public static "valueOf"(arg0: StringJS): $MobDespawnEvent$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDespawnEvent$Result$$Type = (("allow") | ("default") | ("deny"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobDespawnEvent$Result$$Original = $MobDespawnEvent$Result;}
declare module "net.neoforged.neoforge.event.entity.living.LivingConversionEvent$Pre" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingConversionEvent} from "net.neoforged.neoforge.event.entity.living.LivingConversionEvent"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $LivingConversionEvent$Pre extends $LivingConversionEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $EntityType$$Type<($LivingEntity$$Type)>, arg2: $Consumer$$Type<(integer)>)

public "getOutcome"(): $EntityType<($LivingEntity)>
public "setConversionTimer"(arg0: integer): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "outcome"(): $EntityType<($LivingEntity)>
set "conversionTimer"(value: integer)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingConversionEvent$Pre$$Type = ($LivingConversionEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingConversionEvent$Pre$$Original = $LivingConversionEvent$Pre;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$FarmlandTrampleEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$FarmlandTrampleEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: float, arg4: $Entity$$Type)

public "getEntity"(): $Entity
public "getFallDistance"(): float
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "entity"(): $Entity
get "fallDistance"(): float
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$FarmlandTrampleEvent$$Type = ($BlockEvent$FarmlandTrampleEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$FarmlandTrampleEvent$$Original = $BlockEvent$FarmlandTrampleEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$LoadFromFile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$File, $File$$Type} from "java.io.File"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"

export class $PlayerEvent$LoadFromFile extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $File$$Type, arg2: StringJS)

public "getEntity"(): $LivingEntity
public "getPlayerUUID"(): StringJS
public "getPlayerFile"(arg0: StringJS): $File
public "getPlayerDirectory"(): $File
get "entity"(): $LivingEntity
get "playerUUID"(): StringJS
get "playerDirectory"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$LoadFromFile$$Type = ($PlayerEvent$LoadFromFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$LoadFromFile$$Original = $PlayerEvent$LoadFromFile;}
declare module "net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent" {
import {$AdvancementEvent$AdvancementProgressEvent$ProgressType, $AdvancementEvent$AdvancementProgressEvent$ProgressType$$Type} from "net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent$ProgressType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AdvancementEvent} from "net.neoforged.neoforge.event.entity.player.AdvancementEvent"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$AdvancementProgress, $AdvancementProgress$$Type} from "net.minecraft.advancements.AdvancementProgress"

export class $AdvancementEvent$AdvancementProgressEvent extends $AdvancementEvent {
constructor(arg0: $Player$$Type, arg1: $AdvancementHolder$$Type, arg2: $AdvancementProgress$$Type, arg3: StringJS, arg4: $AdvancementEvent$AdvancementProgressEvent$ProgressType$$Type)

public "getAdvancementProgress"(): $AdvancementProgress
public "getProgressType"(): $AdvancementEvent$AdvancementProgressEvent$ProgressType
public "getCriterionName"(): StringJS
public "getEntity"(): $Entity
get "advancementProgress"(): $AdvancementProgress
get "progressType"(): $AdvancementEvent$AdvancementProgressEvent$ProgressType
get "criterionName"(): StringJS
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$AdvancementProgressEvent$$Type = ($AdvancementEvent$AdvancementProgressEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementEvent$AdvancementProgressEvent$$Original = $AdvancementEvent$AdvancementProgressEvent;}
declare module "net.neoforged.neoforge.event.tick.EntityTickEvent$Post" {
import {$EntityTickEvent} from "net.neoforged.neoforge.event.tick.EntityTickEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityTickEvent$Post extends $EntityTickEvent {
constructor(arg0: $Entity$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTickEvent$Post$$Type = ($EntityTickEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTickEvent$Post$$Original = $EntityTickEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerChangeGameModeEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"

export class $PlayerEvent$PlayerChangeGameModeEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $GameType$$Type, arg2: $GameType$$Type)

public "getEntity"(): $LivingEntity
public "getCurrentGameMode"(): $GameType
public "setNewGameMode"(arg0: $GameType$$Type): void
public "getNewGameMode"(): $GameType
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "entity"(): $LivingEntity
get "currentGameMode"(): $GameType
set "newGameMode"(value: $GameType$$Type)
get "newGameMode"(): $GameType
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$PlayerChangeGameModeEvent$$Type = ($PlayerEvent$PlayerChangeGameModeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$PlayerChangeGameModeEvent$$Original = $PlayerEvent$PlayerChangeGameModeEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerContainerEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerContainerEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $AbstractContainerMenu$$Type)

public "getContainer"(): $AbstractContainerMenu
public "getEntity"(): $Entity
get "container"(): $AbstractContainerMenu
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerContainerEvent$$Type = ($PlayerContainerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerContainerEvent$$Original = $PlayerContainerEvent;}
declare module "net.neoforged.neoforge.event.entity.player.ItemFishedEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$FishingHook, $FishingHook$$Type} from "net.minecraft.world.entity.projectile.FishingHook"
import {$List$$Type} from "java.util.List"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $ItemFishedEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $List$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $FishingHook$$Type)

public "getRodDamage"(): integer
public "getHookEntity"(): $FishingHook
public "damageRodBy"(arg0: integer): void
public "getDrops"(): $NonNullList<($ItemStack)>
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "rodDamage"(): integer
get "hookEntity"(): $FishingHook
get "drops"(): $NonNullList<($ItemStack)>
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFishedEvent$$Type = ($ItemFishedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFishedEvent$$Original = $ItemFishedEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerFlyableFallEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerFlyableFallEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: float, arg2: float)

public "getMultiplier"(): float
public "setMultiplier"(arg0: float): void
public "getDistance"(): float
public "setDistance"(arg0: float): void
public "getEntity"(): $Entity
get "multiplier"(): float
set "multiplier"(value: float)
get "distance"(): float
set "distance"(value: float)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerFlyableFallEvent$$Type = ($PlayerFlyableFallEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerFlyableFallEvent$$Original = $PlayerFlyableFallEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$BreakSpeed" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Optional} from "java.util.Optional"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerEvent$BreakSpeed extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: float, arg3: $BlockPos$$Type)

public "getPosition"(): $Optional<($BlockPos)>
public "getState"(): $BlockState
public "getEntity"(): $Entity
public "getOriginalSpeed"(): float
public "setNewSpeed"(arg0: float): void
public "getNewSpeed"(): float
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "position"(): $Optional<($BlockPos)>
get "state"(): $BlockState
get "entity"(): $Entity
get "originalSpeed"(): float
set "newSpeed"(value: float)
get "newSpeed"(): float
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$BreakSpeed$$Type = ($PlayerEvent$BreakSpeed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$BreakSpeed$$Original = $PlayerEvent$BreakSpeed;}
declare module "net.neoforged.neoforge.event.entity.living.LivingGetProjectileEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingGetProjectileEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type)

public "setProjectileItemStack"(arg0: $ItemStack$$Type): void
public "getProjectileItemStack"(): $ItemStack
public "getProjectileWeaponItemStack"(): $ItemStack
set "projectileItemStack"(value: $ItemStack$$Type)
get "projectileItemStack"(): $ItemStack
get "projectileWeaponItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingGetProjectileEvent$$Type = ($LivingGetProjectileEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingGetProjectileEvent$$Original = $LivingGetProjectileEvent;}
declare module "net.neoforged.neoforge.event.brewing.PotionBrewEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"

export class $PotionBrewEvent extends $Event {
public "getLength"(): integer
public "getItem"(arg0: integer): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
get "length"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewEvent$$Type = ($PotionBrewEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewEvent$$Original = $PotionBrewEvent;}
declare module "net.neoforged.neoforge.event.enchanting.EnchantmentLevelSetEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $EnchantmentLevelSetEvent extends $Event {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: $ItemStack$$Type, arg5: integer)

public "getLevel"(): $Level
public "getItem"(): $ItemStack
public "getPos"(): $BlockPos
public "getPower"(): integer
public "getEnchantLevel"(): integer
public "setEnchantLevel"(arg0: integer): void
public "getEnchantRow"(): integer
public "getOriginalLevel"(): integer
get "level"(): $Level
get "item"(): $ItemStack
get "pos"(): $BlockPos
get "power"(): integer
get "enchantLevel"(): integer
set "enchantLevel"(value: integer)
get "enchantRow"(): integer
get "originalLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentLevelSetEvent$$Type = ($EnchantmentLevelSetEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentLevelSetEvent$$Original = $EnchantmentLevelSetEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerInteractEvent} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerInteractEvent$RightClickItem extends $PlayerInteractEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type)

public "setCancellationResult"(arg0: $InteractionResult$$Type): void
public "getCancellationResult"(): $InteractionResult
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
set "cancellationResult"(value: $InteractionResult$$Type)
get "cancellationResult"(): $InteractionResult
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickItem$$Type = ($PlayerInteractEvent$RightClickItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$RightClickItem$$Original = $PlayerInteractEvent$RightClickItem;}
declare module "net.neoforged.neoforge.event.entity.player.UseItemOnBlockEvent" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$UseItemOnBlockEvent$UsePhase, $UseItemOnBlockEvent$UsePhase$$Type} from "net.neoforged.neoforge.event.entity.player.UseItemOnBlockEvent$UsePhase"
import {$Direction} from "net.minecraft.core.Direction"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level} from "net.minecraft.world.level.Level"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $UseItemOnBlockEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $UseOnContext$$Type, arg1: $UseItemOnBlockEvent$UsePhase$$Type)

public "getLevel"(): $Level
public "getSide"(): $LogicalSide
public "getPlayer"(): $Player
public "setCancellationResult"(arg0: $ItemInteractionResult$$Type): void
public "getHand"(): $InteractionHand
public "getFace"(): $Direction
public "getUseOnContext"(): $UseOnContext
public "cancelWithResult"(arg0: $ItemInteractionResult$$Type): void
public "getUsePhase"(): $UseItemOnBlockEvent$UsePhase
public "getItemStack"(): $ItemStack
public "getPos"(): $BlockPos
public "getCancellationResult"(): $ItemInteractionResult
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $Level
get "side"(): $LogicalSide
get "player"(): $Player
set "cancellationResult"(value: $ItemInteractionResult$$Type)
get "hand"(): $InteractionHand
get "face"(): $Direction
get "useOnContext"(): $UseOnContext
get "usePhase"(): $UseItemOnBlockEvent$UsePhase
get "itemStack"(): $ItemStack
get "pos"(): $BlockPos
get "cancellationResult"(): $ItemInteractionResult
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseItemOnBlockEvent$$Type = ($UseItemOnBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseItemOnBlockEvent$$Original = $UseItemOnBlockEvent;}
declare module "net.neoforged.neoforge.event.server.ServerStoppingEvent" {
import {$ServerLifecycleEvent} from "net.neoforged.neoforge.event.server.ServerLifecycleEvent"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStoppingEvent extends $ServerLifecycleEvent {
constructor(arg0: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStoppingEvent$$Type = ($ServerStoppingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStoppingEvent$$Original = $ServerStoppingEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingDamageEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"

export class $LivingDamageEvent extends $LivingEvent {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDamageEvent$$Type = ($LivingDamageEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDamageEvent$$Original = $LivingDamageEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Expired" {
import {$MobEffectEvent} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MobEffectEvent$Expired extends $MobEffectEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectEvent$Expired$$Type = ($MobEffectEvent$Expired);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectEvent$Expired$$Original = $MobEffectEvent$Expired;}
declare module "net.neoforged.neoforge.event.entity.item.ItemEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $ItemEvent extends $EntityEvent {
constructor(arg0: $ItemEntity$$Type)

public "getEntity"(): $ItemEntity
get "entity"(): $ItemEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEvent$$Type = ($ItemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEvent$$Original = $ItemEvent;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$FluidPlaceBlockEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$FluidPlaceBlockEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getOriginalState"(): $BlockState
public "getNewState"(): $BlockState
public "getLiquidPos"(): $BlockPos
public "setNewState"(arg0: $BlockState$$Type): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "originalState"(): $BlockState
get "newState"(): $BlockState
get "liquidPos"(): $BlockPos
set "newState"(value: $BlockState$$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$FluidPlaceBlockEvent$$Type = ($BlockEvent$FluidPlaceBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$FluidPlaceBlockEvent$$Original = $BlockEvent$FluidPlaceBlockEvent;}
declare module "net.neoforged.neoforge.event.tick.LevelTickEvent$Pre" {
import {$LevelTickEvent} from "net.neoforged.neoforge.event.tick.LevelTickEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $LevelTickEvent$Pre extends $LevelTickEvent {
constructor(arg0: $BooleanSupplier$$Type, arg1: $Level$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelTickEvent$Pre$$Type = ($LevelTickEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelTickEvent$Pre$$Original = $LevelTickEvent$Pre;}
declare module "net.neoforged.neoforge.event.entity.living.LivingChangeTargetEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingChangeTargetEvent$ILivingTargetType, $LivingChangeTargetEvent$ILivingTargetType$$Type} from "net.neoforged.neoforge.event.entity.living.LivingChangeTargetEvent$ILivingTargetType"

export class $LivingChangeTargetEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type, arg2: $LivingChangeTargetEvent$ILivingTargetType$$Type)

public "getTargetType"(): $LivingChangeTargetEvent$ILivingTargetType
public "setNewAboutToBeSetTarget"(arg0: $LivingEntity$$Type): void
public "getNewAboutToBeSetTarget"(): $LivingEntity
public "getOriginalAboutToBeSetTarget"(): $LivingEntity
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "targetType"(): $LivingChangeTargetEvent$ILivingTargetType
set "newAboutToBeSetTarget"(value: $LivingEntity$$Type)
get "newAboutToBeSetTarget"(): $LivingEntity
get "originalAboutToBeSetTarget"(): $LivingEntity
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingChangeTargetEvent$$Type = ($LivingChangeTargetEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingChangeTargetEvent$$Original = $LivingChangeTargetEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityAttributeModificationEvent" {
import {$Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Event} from "net.neoforged.bus.api.Event"
import {$AttributeSupplier$Builder$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityAttributeModificationEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($EntityType$$Type<($LivingEntity$$Type)>), ($AttributeSupplier$Builder$$Type)>)

public "add"(arg0: $EntityType$$Type<($LivingEntity$$Type)>, arg1: $Holder$$Type<($Attribute)>): void
public "add"(arg0: $EntityType$$Type<($LivingEntity$$Type)>, arg1: $Holder$$Type<($Attribute)>, arg2: double): void
public "has"(arg0: $EntityType$$Type<($LivingEntity$$Type)>, arg1: $Holder$$Type<($Attribute)>): boolean
public "getTypes"(): $List<($EntityType<($LivingEntity)>)>
get "types"(): $List<($EntityType<($LivingEntity)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAttributeModificationEvent$$Type = ($EntityAttributeModificationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAttributeModificationEvent$$Original = $EntityAttributeModificationEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerXpEvent$XpChange" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerXpEvent} from "net.neoforged.neoforge.event.entity.player.PlayerXpEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerXpEvent$XpChange extends $PlayerXpEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: integer)

public "getAmount"(): integer
public "setAmount"(arg0: integer): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "amount"(): integer
set "amount"(value: integer)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerXpEvent$XpChange$$Type = ($PlayerXpEvent$XpChange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerXpEvent$XpChange$$Original = $PlayerXpEvent$XpChange;}
declare module "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable" {
import {$MobEffectEvent} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$MobEffectEvent$Applicable$Result, $MobEffectEvent$Applicable$Result$$Type} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable$Result"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MobEffectEvent$Applicable extends $MobEffectEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type, arg2: $Entity$$Type)

public "setResult"(arg0: $MobEffectEvent$Applicable$Result$$Type): void
public "getResult"(): $MobEffectEvent$Applicable$Result
public "getEffectInstance"(): $MobEffectInstance
public "getApplicationResult"(): boolean
public "getEffectSource"(): $Entity
set "result"(value: $MobEffectEvent$Applicable$Result$$Type)
get "result"(): $MobEffectEvent$Applicable$Result
get "effectInstance"(): $MobEffectInstance
get "applicationResult"(): boolean
get "effectSource"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectEvent$Applicable$$Type = ($MobEffectEvent$Applicable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectEvent$Applicable$$Original = $MobEffectEvent$Applicable;}
declare module "net.neoforged.neoforge.event.level.BlockDropsEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$List, $List$$Type} from "java.util.List"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockDropsEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: $List$$Type<($ItemEntity$$Type)>, arg5: $Entity$$Type, arg6: $ItemStack$$Type)

public "getLevel"(): $ServerLevel
public "setDroppedExperience"(arg0: integer): void
public "getDroppedExperience"(): integer
public "setCanceled"(arg0: boolean): void
public "getBreaker"(): $Entity
public "getTool"(): $ItemStack
public "getBlockEntity"(): $BlockEntity
public "getDrops"(): $List<($ItemEntity)>
public "isCanceled"(): boolean
get "level"(): $ServerLevel
set "droppedExperience"(value: integer)
get "droppedExperience"(): integer
set "canceled"(value: boolean)
get "breaker"(): $Entity
get "tool"(): $ItemStack
get "blockEntity"(): $BlockEntity
get "drops"(): $List<($ItemEntity)>
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDropsEvent$$Type = ($BlockDropsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockDropsEvent$$Original = $BlockDropsEvent;}
declare module "net.neoforged.neoforge.event.level.PistonEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$PistonStructureResolver} from "net.minecraft.world.level.block.piston.PistonStructureResolver"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PistonEvent$PistonMoveType, $PistonEvent$PistonMoveType$$Type} from "net.neoforged.neoforge.event.level.PistonEvent$PistonMoveType"

export class $PistonEvent extends $BlockEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $PistonEvent$PistonMoveType$$Type)

public "getDirection"(): $Direction
public "getFaceOffsetPos"(): $BlockPos
public "getPistonMoveType"(): $PistonEvent$PistonMoveType
public "getStructureHelper"(): $PistonStructureResolver
get "direction"(): $Direction
get "faceOffsetPos"(): $BlockPos
get "pistonMoveType"(): $PistonEvent$PistonMoveType
get "structureHelper"(): $PistonStructureResolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PistonEvent$$Type = ($PistonEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PistonEvent$$Original = $PistonEvent;}
declare module "net.neoforged.neoforge.event.level.ExplosionKnockbackEvent" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ExplosionEvent} from "net.neoforged.neoforge.event.level.ExplosionEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $ExplosionKnockbackEvent extends $ExplosionEvent {
constructor(arg0: $Level$$Type, arg1: $Explosion$$Type, arg2: $Entity$$Type, arg3: $Vec3$$Type)

public "getAffectedBlocks"(): $List<($BlockPos)>
public "getAffectedEntity"(): $Entity
public "setKnockbackVelocity"(arg0: $Vec3$$Type): void
public "getKnockbackVelocity"(): $Vec3
get "affectedBlocks"(): $List<($BlockPos)>
get "affectedEntity"(): $Entity
set "knockbackVelocity"(value: $Vec3$$Type)
get "knockbackVelocity"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionKnockbackEvent$$Type = ($ExplosionKnockbackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionKnockbackEvent$$Original = $ExplosionKnockbackEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityEvent extends $Event {
constructor(arg0: $Entity$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$$Type = ($EntityEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEvent$$Original = $EntityEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEvent$LivingJumpEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $LivingEvent$LivingJumpEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$LivingJumpEvent$$Type = ($LivingEvent$LivingJumpEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEvent$LivingJumpEvent$$Original = $LivingEvent$LivingJumpEvent;}
declare module "net.neoforged.neoforge.event.tick.EntityTickEvent$Pre" {
import {$EntityTickEvent} from "net.neoforged.neoforge.event.tick.EntityTickEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityTickEvent$Pre extends $EntityTickEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTickEvent$Pre$$Type = ($EntityTickEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTickEvent$Pre$$Original = $EntityTickEvent$Pre;}
declare module "net.neoforged.neoforge.event.tick.PlayerTickEvent$Post" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$PlayerTickEvent} from "net.neoforged.neoforge.event.tick.PlayerTickEvent"

export class $PlayerTickEvent$Post extends $PlayerTickEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTickEvent$Post$$Type = ($PlayerTickEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTickEvent$Post$$Original = $PlayerTickEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.EntityLeaveLevelEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityLeaveLevelEvent extends $EntityEvent {
constructor(arg0: $Entity$$Type, arg1: $Level$$Type)

public "getLevel"(): $Level
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLeaveLevelEvent$$Type = ($EntityLeaveLevelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityLeaveLevelEvent$$Original = $EntityLeaveLevelEvent;}
declare module "net.neoforged.neoforge.event.level.LevelEvent$Unload" {
import {$LevelEvent} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$Unload extends $LevelEvent {
constructor(arg0: $LevelAccessor$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Unload$$Type = ($LevelEvent$Unload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelEvent$Unload$$Original = $LevelEvent$Unload;}
declare module "net.neoforged.neoforge.event.entity.living.LivingDestroyBlockEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LivingDestroyBlockEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getState"(): $BlockState
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "state"(): $BlockState
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDestroyBlockEvent$$Type = ($LivingDestroyBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDestroyBlockEvent$$Original = $LivingDestroyBlockEvent;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$PortalSpawnEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PortalShape, $PortalShape$$Type} from "net.minecraft.world.level.portal.PortalShape"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$PortalSpawnEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $PortalShape$$Type)

public "getPortalSize"(): $PortalShape
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "portalSize"(): $PortalShape
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$PortalSpawnEvent$$Type = ($BlockEvent$PortalSpawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$PortalSpawnEvent$$Original = $BlockEvent$PortalSpawnEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityTeleportEvent$EnderEntity" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EntityTeleportEvent$EnderEntity extends $EntityTeleportEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: double, arg2: double, arg3: double)

public "getEntityLiving"(): $LivingEntity
get "entityLiving"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportEvent$EnderEntity$$Type = ($EntityTeleportEvent$EnderEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTeleportEvent$EnderEntity$$Original = $EntityTeleportEvent$EnderEntity;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEnchantItemEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$List, $List$$Type} from "java.util.List"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerEnchantItemEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($EnchantmentInstance$$Type)>)

public "getEnchantedItem"(): $ItemStack
public "getEnchantments"(): $List<($EnchantmentInstance)>
public "getEntity"(): $Entity
get "enchantedItem"(): $ItemStack
get "enchantments"(): $List<($EnchantmentInstance)>
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnchantItemEvent$$Type = ($PlayerEnchantItemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEnchantItemEvent$$Original = $PlayerEnchantItemEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingConversionEvent$Post" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingConversionEvent} from "net.neoforged.neoforge.event.entity.living.LivingConversionEvent"

export class $LivingConversionEvent$Post extends $LivingConversionEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type)

public "getOutcome"(): $LivingEntity
get "outcome"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingConversionEvent$Post$$Type = ($LivingConversionEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingConversionEvent$Post$$Original = $LivingConversionEvent$Post;}
declare module "net.neoforged.neoforge.event.level.PistonEvent$Post" {
import {$PistonEvent} from "net.neoforged.neoforge.event.level.PistonEvent"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PistonEvent$PistonMoveType$$Type} from "net.neoforged.neoforge.event.level.PistonEvent$PistonMoveType"

export class $PistonEvent$Post extends $PistonEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $PistonEvent$PistonMoveType$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PistonEvent$Post$$Type = ($PistonEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PistonEvent$Post$$Original = $PistonEvent$Post;}
declare module "net.neoforged.neoforge.event.brewing.PotionBrewEvent$Post" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PotionBrewEvent} from "net.neoforged.neoforge.event.brewing.PotionBrewEvent"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $PotionBrewEvent$Post extends $PotionBrewEvent {
constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewEvent$Post$$Type = ($PotionBrewEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewEvent$Post$$Original = $PotionBrewEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.living.LivingHealEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingHealEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: float)

public "getAmount"(): float
public "setAmount"(arg0: float): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "amount"(): float
set "amount"(value: float)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingHealEvent$$Type = ($LivingHealEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingHealEvent$$Original = $LivingHealEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$ItemCraftedEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"

export class $PlayerEvent$ItemCraftedEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Container$$Type)

public "getEntity"(): $LivingEntity
public "getCrafting"(): $ItemStack
public "getInventory"(): $Container
get "entity"(): $LivingEntity
get "crafting"(): $ItemStack
get "inventory"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$ItemCraftedEvent$$Type = ($PlayerEvent$ItemCraftedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$ItemCraftedEvent$$Original = $PlayerEvent$ItemCraftedEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingFallEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingFallEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: float, arg2: float)

public "setDamageMultiplier"(arg0: float): void
public "getDistance"(): float
public "setDistance"(arg0: float): void
public "getDamageMultiplier"(): float
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "damageMultiplier"(value: float)
get "distance"(): float
set "distance"(value: float)
get "damageMultiplier"(): float
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingFallEvent$$Type = ($LivingFallEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingFallEvent$$Original = $LivingFallEvent;}
declare module "net.neoforged.neoforge.event.level.block.CropGrowEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent extends $BlockEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropGrowEvent$$Type = ($CropGrowEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CropGrowEvent$$Original = $CropGrowEvent;}
declare module "net.neoforged.neoforge.event.entity.item.ItemTossEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ItemEvent} from "net.neoforged.neoforge.event.entity.item.ItemEvent"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $ItemTossEvent extends $ItemEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemEntity$$Type, arg1: $Player$$Type)

public "getPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "player"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTossEvent$$Type = ($ItemTossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTossEvent$$Original = $ItemTossEvent;}
declare module "net.neoforged.neoforge.event.PlayLevelSoundEvent" {
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $PlayLevelSoundEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $Holder$$Type<($SoundEvent)>, arg2: $SoundSource$$Type, arg3: float, arg4: float)

public "getLevel"(): $Level
public "getSource"(): $SoundSource
public "setSound"(arg0: $Holder$$Type<($SoundEvent)>): void
public "setSource"(arg0: $SoundSource$$Type): void
public "getNewVolume"(): float
public "getNewPitch"(): float
public "getSound"(): $Holder<($SoundEvent)>
public "getOriginalVolume"(): float
public "setNewPitch"(arg0: float): void
public "getOriginalPitch"(): float
public "setNewVolume"(arg0: float): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $Level
get "source"(): $SoundSource
set "sound"(value: $Holder$$Type<($SoundEvent)>)
set "source"(value: $SoundSource$$Type)
get "newVolume"(): float
get "newPitch"(): float
get "sound"(): $Holder<($SoundEvent)>
get "originalVolume"(): float
set "newPitch"(value: float)
get "originalPitch"(): float
set "newVolume"(value: float)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayLevelSoundEvent$$Type = ($PlayLevelSoundEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayLevelSoundEvent$$Original = $PlayLevelSoundEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobSpawnEvent$PositionCheck" {
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$MobSpawnEvent$PositionCheck$Result, $MobSpawnEvent$PositionCheck$Result$$Type} from "net.neoforged.neoforge.event.entity.living.MobSpawnEvent$PositionCheck$Result"
import {$MobSpawnEvent} from "net.neoforged.neoforge.event.entity.living.MobSpawnEvent"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BaseSpawner, $BaseSpawner$$Type} from "net.minecraft.world.level.BaseSpawner"

export class $MobSpawnEvent$PositionCheck extends $MobSpawnEvent {
constructor(arg0: $Mob$$Type, arg1: $ServerLevelAccessor$$Type, arg2: $MobSpawnType$$Type, arg3: $BaseSpawner$$Type)

public "setResult"(arg0: $MobSpawnEvent$PositionCheck$Result$$Type): void
public "getResult"(): $MobSpawnEvent$PositionCheck$Result
public "getEntity"(): $Entity
public "getSpawner"(): $BaseSpawner
public "getSpawnType"(): $MobSpawnType
set "result"(value: $MobSpawnEvent$PositionCheck$Result$$Type)
get "result"(): $MobSpawnEvent$PositionCheck$Result
get "entity"(): $Entity
get "spawner"(): $BaseSpawner
get "spawnType"(): $MobSpawnType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnEvent$PositionCheck$$Type = ($MobSpawnEvent$PositionCheck);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobSpawnEvent$PositionCheck$$Original = $MobSpawnEvent$PositionCheck;}
declare module "net.neoforged.neoforge.event.OnDatapackSyncEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Stream} from "java.util.stream.Stream"
import {$PlayerList, $PlayerList$$Type} from "net.minecraft.server.players.PlayerList"

export class $OnDatapackSyncEvent extends $Event {
constructor(arg0: $PlayerList$$Type, arg1: $ServerPlayer$$Type)

public "getPlayerList"(): $PlayerList
public "getPlayer"(): $ServerPlayer
public "getRelevantPlayers"(): $Stream<($ServerPlayer)>
get "playerList"(): $PlayerList
get "player"(): $ServerPlayer
get "relevantPlayers"(): $Stream<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnDatapackSyncEvent$$Type = ($OnDatapackSyncEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OnDatapackSyncEvent$$Original = $OnDatapackSyncEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingSwapItemsEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingSwapItemsEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingSwapItemsEvent$$Type = ($LivingSwapItemsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingSwapItemsEvent$$Original = $LivingSwapItemsEvent;}
declare module "net.neoforged.neoforge.event.level.BlockEvent$BlockToolModificationEvent" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$BlockToolModificationEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean)

public "getContext"(): $UseOnContext
public "setFinalState"(arg0: $BlockState$$Type): void
public "getFinalState"(): $BlockState
public "getPlayer"(): $Player
public "getItemAbility"(): $ItemAbility
public "isSimulated"(): boolean
public "getHeldItemStack"(): $ItemStack
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "context"(): $UseOnContext
set "finalState"(value: $BlockState$$Type)
get "finalState"(): $BlockState
get "player"(): $Player
get "itemAbility"(): $ItemAbility
get "simulated"(): boolean
get "heldItemStack"(): $ItemStack
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$BlockToolModificationEvent$$Type = ($BlockEvent$BlockToolModificationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$BlockToolModificationEvent$$Original = $BlockEvent$BlockToolModificationEvent;}
declare module "net.neoforged.neoforge.event.level.BlockEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent extends $Event {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getState"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$$Type = ($BlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEvent$$Original = $BlockEvent;}
declare module "net.neoforged.neoforge.event.RegisterGameTestsEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Set$$Type} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Method$$Type} from "java.lang.reflect.Method"

export class $RegisterGameTestsEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Set$$Type<($Method$$Type)>)

public "register"(arg0: $Class$$Type<(never)>): void
public "register"(arg0: $Method$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterGameTestsEvent$$Type = ($RegisterGameTestsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterGameTestsEvent$$Original = $RegisterGameTestsEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityTeleportEvent$EnderPearl" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$ThrownEnderpearl, $ThrownEnderpearl$$Type} from "net.minecraft.world.entity.projectile.ThrownEnderpearl"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"

export class $EntityTeleportEvent$EnderPearl extends $EntityTeleportEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $ServerPlayer$$Type, arg1: double, arg2: double, arg3: double, arg4: $ThrownEnderpearl$$Type, arg5: float, arg6: $HitResult$$Type)

public "getPlayer"(): $ServerPlayer
public "getAttackDamage"(): float
public "getHitResult"(): $HitResult
public "getPearlEntity"(): $ThrownEnderpearl
public "setAttackDamage"(arg0: float): void
get "player"(): $ServerPlayer
get "attackDamage"(): float
get "hitResult"(): $HitResult
get "pearlEntity"(): $ThrownEnderpearl
set "attackDamage"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportEvent$EnderPearl$$Type = ($EntityTeleportEvent$EnderPearl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTeleportEvent$EnderPearl$$Original = $EntityTeleportEvent$EnderPearl;}
declare module "net.neoforged.neoforge.event.server.ServerStoppedEvent" {
import {$ServerLifecycleEvent} from "net.neoforged.neoforge.event.server.ServerLifecycleEvent"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStoppedEvent extends $ServerLifecycleEvent {
constructor(arg0: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStoppedEvent$$Type = ($ServerStoppedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStoppedEvent$$Original = $ServerStoppedEvent;}
declare module "net.neoforged.neoforge.event.entity.EntityAttributeCreationEvent" {
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeSupplier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityAttributeCreationEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($EntityType$$Type<($LivingEntity$$Type)>), ($AttributeSupplier$$Type)>)

public "put"(arg0: $EntityType$$Type<($LivingEntity$$Type)>, arg1: $AttributeSupplier$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAttributeCreationEvent$$Type = ($EntityAttributeCreationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAttributeCreationEvent$$Original = $EntityAttributeCreationEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$SaveToFile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$File, $File$$Type} from "java.io.File"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"

export class $PlayerEvent$SaveToFile extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $File$$Type, arg2: StringJS)

public "getEntity"(): $LivingEntity
public "getPlayerUUID"(): StringJS
public "getPlayerFile"(arg0: StringJS): $File
public "getPlayerDirectory"(): $File
get "entity"(): $LivingEntity
get "playerUUID"(): StringJS
get "playerDirectory"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$SaveToFile$$Type = ($PlayerEvent$SaveToFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$SaveToFile$$Original = $PlayerEvent$SaveToFile;}
declare module "net.neoforged.neoforge.event.VanillaGameEvent" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GameEvent$Context, $GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$GameEvent, $GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $VanillaGameEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type, arg3: $GameEvent$Context$$Type)

public "getCause"(): $Entity
public "getContext"(): $GameEvent$Context
public "getLevel"(): $Level
public "getEventPosition"(): $Vec3
public "getVanillaEvent"(): $Holder<($GameEvent)>
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "cause"(): $Entity
get "context"(): $GameEvent$Context
get "level"(): $Level
get "eventPosition"(): $Vec3
get "vanillaEvent"(): $Holder<($GameEvent)>
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaGameEvent$$Type = ($VanillaGameEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaGameEvent$$Original = $VanillaGameEvent;}
declare module "net.neoforged.neoforge.event.level.NoteBlockEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$NoteBlockEvent$Note, $NoteBlockEvent$Note$$Type} from "net.neoforged.neoforge.event.level.NoteBlockEvent$Note"
import {$NoteBlockEvent$Octave, $NoteBlockEvent$Octave$$Type} from "net.neoforged.neoforge.event.level.NoteBlockEvent$Octave"

export class $NoteBlockEvent extends $BlockEvent {
public "getVanillaNoteId"(): integer
public "setNote"(arg0: $NoteBlockEvent$Note$$Type, arg1: $NoteBlockEvent$Octave$$Type): void
public "getNote"(): $NoteBlockEvent$Note
public "getOctave"(): $NoteBlockEvent$Octave
get "vanillaNoteId"(): integer
get "note"(): $NoteBlockEvent$Note
get "octave"(): $NoteBlockEvent$Octave
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoteBlockEvent$$Type = ($NoteBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoteBlockEvent$$Original = $NoteBlockEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingExperienceDropEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingExperienceDropEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $Player$$Type, arg2: integer)

public "setDroppedExperience"(arg0: integer): void
public "getDroppedExperience"(): integer
public "getAttackingPlayer"(): $Player
public "getOriginalExperience"(): integer
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "droppedExperience"(value: integer)
get "droppedExperience"(): integer
get "attackingPlayer"(): $Player
get "originalExperience"(): integer
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingExperienceDropEvent$$Type = ($LivingExperienceDropEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingExperienceDropEvent$$Original = $LivingExperienceDropEvent;}
declare module "net.neoforged.neoforge.event.tick.LevelTickEvent$Post" {
import {$LevelTickEvent} from "net.neoforged.neoforge.event.tick.LevelTickEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $LevelTickEvent$Post extends $LevelTickEvent {
constructor(arg0: $BooleanSupplier$$Type, arg1: $Level$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelTickEvent$Post$$Type = ($LevelTickEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelTickEvent$Post$$Original = $LevelTickEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.player.ArrowNockEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $ArrowNockEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: boolean)

public "getLevel"(): $Level
public "getBow"(): $ItemStack
public "hasAmmo"(): boolean
public "getAction"(): $InteractionResultHolder<($ItemStack)>
public "getHand"(): $InteractionHand
public "setAction"(arg0: $InteractionResultHolder$$Type<($ItemStack$$Type)>): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "level"(): $Level
get "bow"(): $ItemStack
get "action"(): $InteractionResultHolder<($ItemStack)>
get "hand"(): $InteractionHand
set "action"(value: $InteractionResultHolder$$Type<($ItemStack$$Type)>)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrowNockEvent$$Type = ($ArrowNockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrowNockEvent$$Original = $ArrowNockEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"

export class $LivingEntityUseItemEvent extends $LivingEvent {
public "getDuration"(): integer
public "getItem"(): $ItemStack
public "setDuration"(arg0: integer): void
public "getHand"(): $InteractionHand
get "duration"(): integer
get "item"(): $ItemStack
set "duration"(value: integer)
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityUseItemEvent$$Type = ($LivingEntityUseItemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityUseItemEvent$$Original = $LivingEntityUseItemEvent;}
declare module "net.neoforged.neoforge.event.AddReloadListenerEvent" {
import {$ICondition$IContext} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$List} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$PreparableReloadListener, $PreparableReloadListener$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $AddReloadListenerEvent extends $Event {
constructor(arg0: $ReloadableServerResources$$Type, arg1: $RegistryAccess$$Type)

public "getListeners"(): $List<($PreparableReloadListener)>
public "addListener"(arg0: $PreparableReloadListener$$Type): void
public "getRegistryAccess"(): $RegistryAccess
public "getConditionContext"(): $ICondition$IContext
public "getServerResources"(): $ReloadableServerResources
get "listeners"(): $List<($PreparableReloadListener)>
get "registryAccess"(): $RegistryAccess
get "conditionContext"(): $ICondition$IContext
get "serverResources"(): $ReloadableServerResources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddReloadListenerEvent$$Type = ($AddReloadListenerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddReloadListenerEvent$$Original = $AddReloadListenerEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerWakeUpEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerWakeUpEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: boolean, arg2: boolean)

public "wakeImmediately"(): boolean
public "updateLevel"(): boolean
public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerWakeUpEvent$$Type = ($PlayerWakeUpEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerWakeUpEvent$$Original = $PlayerWakeUpEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingDropsEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $LivingDropsEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $Collection$$Type<($ItemEntity$$Type)>, arg3: boolean)

public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
public "getDrops"(): $Collection<($ItemEntity)>
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "source"(): $DamageSource
get "recentlyHit"(): boolean
get "drops"(): $Collection<($ItemEntity)>
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDropsEvent$$Type = ($LivingDropsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDropsEvent$$Original = $LivingDropsEvent;}
declare module "net.neoforged.neoforge.event.entity.living.LivingShieldBlockEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingShieldBlockEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type, arg2: boolean)

public "getOriginalBlockedDamage"(): float
public "getOriginalBlock"(): boolean
public "setShieldDamage"(arg0: float): void
public "getDamageSource"(): $DamageSource
public "getBlocked"(): boolean
public "shieldDamage"(): float
public "getDamageContainer"(): $DamageContainer
public "setBlockedDamage"(arg0: float): void
public "getBlockedDamage"(): float
public "setBlocked"(arg0: boolean): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "originalBlockedDamage"(): float
get "originalBlock"(): boolean
get "damageSource"(): $DamageSource
get "blocked"(): boolean
get "damageContainer"(): $DamageContainer
set "blockedDamage"(value: float)
get "blockedDamage"(): float
set "blocked"(value: boolean)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingShieldBlockEvent$$Type = ($LivingShieldBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingShieldBlockEvent$$Original = $LivingShieldBlockEvent;}
declare module "net.neoforged.neoforge.event.entity.RegisterSpawnPlacementsEvent" {
import {$RegisterSpawnPlacementsEvent$Operation$$Type} from "net.neoforged.neoforge.event.entity.RegisterSpawnPlacementsEvent$Operation"
import {$RegisterSpawnPlacementsEvent$MergedSpawnPredicate$$Type} from "net.neoforged.neoforge.event.entity.RegisterSpawnPlacementsEvent$MergedSpawnPredicate"
import {$Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Map$$Type} from "java.util.Map"
import {$SpawnPlacements$SpawnPredicate$$Type} from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$SpawnPlacementType$$Type} from "net.minecraft.world.entity.SpawnPlacementType"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegisterSpawnPlacementsEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($EntityType$$Type<(never)>), ($RegisterSpawnPlacementsEvent$MergedSpawnPredicate$$Type<(never)>)>)

public "register"<T extends $Entity>(arg0: $EntityType$$Type<(T)>, arg1: $SpawnPlacementType$$Type, arg2: $Heightmap$Types$$Type, arg3: $SpawnPlacements$SpawnPredicate$$Type<(T)>, arg4: $RegisterSpawnPlacementsEvent$Operation$$Type): void
public "register"<T extends $Entity>(arg0: $EntityType$$Type<(T)>, arg1: $SpawnPlacements$SpawnPredicate$$Type<(T)>, arg2: $RegisterSpawnPlacementsEvent$Operation$$Type): void
public "register"<T extends $Entity>(arg0: $EntityType$$Type<(T)>, arg1: $SpawnPlacements$SpawnPredicate$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterSpawnPlacementsEvent$$Type = ($RegisterSpawnPlacementsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterSpawnPlacementsEvent$$Original = $RegisterSpawnPlacementsEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent$ItemSmeltedEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerEvent$ItemSmeltedEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type)

public "getEntity"(): $Entity
public "getSmelting"(): $ItemStack
get "entity"(): $Entity
get "smelting"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$ItemSmeltedEvent$$Type = ($PlayerEvent$ItemSmeltedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEvent$ItemSmeltedEvent$$Original = $PlayerEvent$ItemSmeltedEvent;}
declare module "net.neoforged.neoforge.event.tick.ServerTickEvent$Post" {
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ServerTickEvent} from "net.neoforged.neoforge.event.tick.ServerTickEvent"

export class $ServerTickEvent$Post extends $ServerTickEvent {
constructor(arg0: $BooleanSupplier$$Type, arg1: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickEvent$Post$$Type = ($ServerTickEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerTickEvent$Post$$Original = $ServerTickEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.EntityTeleportEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityTeleportEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double)

public "getTarget"(): $Vec3
public "getTargetY"(): double
public "getTargetZ"(): double
public "getTargetX"(): double
public "setTargetX"(arg0: double): void
public "setTargetY"(arg0: double): void
public "getPrev"(): $Vec3
public "getPrevY"(): double
public "getPrevX"(): double
public "setTargetZ"(arg0: double): void
public "getPrevZ"(): double
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "target"(): $Vec3
get "targetY"(): double
get "targetZ"(): double
get "targetX"(): double
set "targetX"(value: double)
set "targetY"(value: double)
get "prev"(): $Vec3
get "prevY"(): double
get "prevX"(): double
set "targetZ"(value: double)
get "prevZ"(): double
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportEvent$$Type = ($EntityTeleportEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTeleportEvent$$Original = $EntityTeleportEvent;}
declare module "net.neoforged.neoforge.event.ModMismatchEvent" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$ModMismatchEvent$MismatchResolutionResult} from "net.neoforged.neoforge.event.ModMismatchEvent$MismatchResolutionResult"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ModMismatchEvent$MismatchedVersionInfo} from "net.neoforged.neoforge.event.ModMismatchEvent$MismatchedVersionInfo"
import {$Stream} from "java.util.stream.Stream"
import {$LevelStorageSource$LevelDirectory, $LevelStorageSource$LevelDirectory$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelDirectory"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$ModContainer} from "net.neoforged.fml.ModContainer"

export class $ModMismatchEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $LevelStorageSource$LevelDirectory$$Type, arg1: $Map$$Type<(StringJS), ($ArtifactVersion$$Type)>, arg2: $Map$$Type<(StringJS), ($ArtifactVersion$$Type)>)

public "getResolved"(): $Stream<($ModMismatchEvent$MismatchResolutionResult)>
public "getVersionDifference"(arg0: StringJS): $Optional<($ModMismatchEvent$MismatchedVersionInfo)>
public "getResolver"(arg0: StringJS): $Optional<($ModContainer)>
public "getLevelDirectory"(): $LevelStorageSource$LevelDirectory
public "getPreviousVersion"(arg0: StringJS): $ArtifactVersion
public "wasResolved"(arg0: StringJS): boolean
public "markResolved"(arg0: StringJS): void
public "getCurrentVersion"(arg0: StringJS): $ArtifactVersion
public "anyResolved"(): boolean
public "anyUnresolved"(): boolean
public "getUnresolved"(): $Stream<($ModMismatchEvent$MismatchResolutionResult)>
get "resolved"(): $Stream<($ModMismatchEvent$MismatchResolutionResult)>
get "levelDirectory"(): $LevelStorageSource$LevelDirectory
get "unresolved"(): $Stream<($ModMismatchEvent$MismatchResolutionResult)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModMismatchEvent$$Type = ($ModMismatchEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModMismatchEvent$$Original = $ModMismatchEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock$Action" {
import {$Enum} from "java.lang.Enum"
import {$ServerboundPlayerActionPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"

export class $PlayerInteractEvent$LeftClickBlock$Action extends $Enum<($PlayerInteractEvent$LeftClickBlock$Action)> {
static readonly "ABORT": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "STOP": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "CLIENT_HOLD": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "START": $PlayerInteractEvent$LeftClickBlock$Action

public static "values"(): ($PlayerInteractEvent$LeftClickBlock$Action)[]
public static "convert"(arg0: $ServerboundPlayerActionPacket$Action$$Type): $PlayerInteractEvent$LeftClickBlock$Action
public static "valueOf"(arg0: StringJS): $PlayerInteractEvent$LeftClickBlock$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$LeftClickBlock$Action$$Type = (("start") | ("stop") | ("abort") | ("client_hold"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractEvent$LeftClickBlock$Action$$Original = $PlayerInteractEvent$LeftClickBlock$Action;}
declare module "net.neoforged.neoforge.event.level.block.CreateFluidSourceEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreateFluidSourceEvent extends $BlockEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "canConvert"(): boolean
public "getLevel"(): $LevelAccessor
public "getFluidState"(): $FluidState
public "getVanillaResult"(): boolean
public "setCanConvert"(arg0: boolean): void
get "level"(): $LevelAccessor
get "fluidState"(): $FluidState
get "vanillaResult"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateFluidSourceEvent$$Type = ($CreateFluidSourceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateFluidSourceEvent$$Original = $CreateFluidSourceEvent;}
declare module "net.neoforged.neoforge.event.server.ServerStartedEvent" {
import {$ServerLifecycleEvent} from "net.neoforged.neoforge.event.server.ServerLifecycleEvent"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStartedEvent extends $ServerLifecycleEvent {
constructor(arg0: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStartedEvent$$Type = ($ServerStartedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStartedEvent$$Original = $ServerStartedEvent;}
declare module "net.neoforged.neoforge.event.level.PistonEvent$PistonMoveType" {
import {$Enum} from "java.lang.Enum"

export class $PistonEvent$PistonMoveType extends $Enum<($PistonEvent$PistonMoveType)> {
static readonly "RETRACT": $PistonEvent$PistonMoveType
readonly "isExtend": boolean
static readonly "EXTEND": $PistonEvent$PistonMoveType

public static "values"(): ($PistonEvent$PistonMoveType)[]
public static "valueOf"(arg0: StringJS): $PistonEvent$PistonMoveType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PistonEvent$PistonMoveType$$Type = (("extend") | ("retract"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PistonEvent$PistonMoveType$$Original = $PistonEvent$PistonMoveType;}
declare module "net.neoforged.neoforge.event.tick.ServerTickEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $ServerTickEvent extends $Event {
public "hasTime"(): boolean
public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickEvent$$Type = ($ServerTickEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerTickEvent$$Original = $ServerTickEvent;}
declare module "net.neoforged.neoforge.event.village.VillageSiegeEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$VillageSiege, $VillageSiege$$Type} from "net.minecraft.world.entity.ai.village.VillageSiege"

export class $VillageSiegeEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $VillageSiege$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $Vec3$$Type)

public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getSiege"(): $VillageSiege
public "getAttemptedSpawnPos"(): $Vec3
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $Level
get "player"(): $Player
get "siege"(): $VillageSiege
get "attemptedSpawnPos"(): $Vec3
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillageSiegeEvent$$Type = ($VillageSiegeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillageSiegeEvent$$Original = $VillageSiegeEvent;}
declare module "net.neoforged.neoforge.event.entity.living.MobSpawnEvent" {
import {$ServerLevelAccessor} from "net.minecraft.world.level.ServerLevelAccessor"
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $MobSpawnEvent extends $EntityEvent {
public "getLevel"(): $ServerLevelAccessor
public "getY"(): double
public "getEntity"(): $Entity
public "getX"(): double
public "getZ"(): double
get "level"(): $ServerLevelAccessor
get "y"(): double
get "entity"(): $Entity
get "x"(): double
get "z"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnEvent$$Type = ($MobSpawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobSpawnEvent$$Original = $MobSpawnEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerXpEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerXpEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerXpEvent$$Type = ($PlayerXpEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerXpEvent$$Original = $PlayerXpEvent;}
declare module "net.neoforged.neoforge.event.level.NoteBlockEvent$Play" {
import {$NoteBlockEvent} from "net.neoforged.neoforge.event.level.NoteBlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NoteBlockInstrument, $NoteBlockInstrument$$Type} from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NoteBlockEvent$Play extends $NoteBlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer, arg4: $NoteBlockInstrument$$Type)

public "getInstrument"(): $NoteBlockInstrument
public "setInstrument"(arg0: $NoteBlockInstrument$$Type): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "instrument"(): $NoteBlockInstrument
set "instrument"(value: $NoteBlockInstrument$$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoteBlockEvent$Play$$Type = ($NoteBlockEvent$Play);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoteBlockEvent$Play$$Original = $NoteBlockEvent$Play;}
declare module "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post" {
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingDamageEvent} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent"
import {$DamageContainer$Reduction$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction"

export class $LivingDamageEvent$Post extends $LivingDamageEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

public "getSource"(): $DamageSource
public "getOriginalDamage"(): float
public "getShieldDamage"(): float
public "getReduction"(arg0: $DamageContainer$Reduction$$Type): float
public "getNewDamage"(): float
public "getBlockedDamage"(): float
public "getPostAttackInvulnerabilityTicks"(): integer
get "source"(): $DamageSource
get "originalDamage"(): float
get "shieldDamage"(): float
get "newDamage"(): float
get "blockedDamage"(): float
get "postAttackInvulnerabilityTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDamageEvent$Post$$Type = ($LivingDamageEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDamageEvent$Post$$Original = $LivingDamageEvent$Post;}
declare module "net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementProgressEvent$ProgressType" {
import {$Enum} from "java.lang.Enum"

export class $AdvancementEvent$AdvancementProgressEvent$ProgressType extends $Enum<($AdvancementEvent$AdvancementProgressEvent$ProgressType)> {
static readonly "GRANT": $AdvancementEvent$AdvancementProgressEvent$ProgressType
static readonly "REVOKE": $AdvancementEvent$AdvancementProgressEvent$ProgressType

public static "values"(): ($AdvancementEvent$AdvancementProgressEvent$ProgressType)[]
public static "valueOf"(arg0: StringJS): $AdvancementEvent$AdvancementProgressEvent$ProgressType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$AdvancementProgressEvent$ProgressType$$Type = (("grant") | ("revoke"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementEvent$AdvancementProgressEvent$ProgressType$$Original = $AdvancementEvent$AdvancementProgressEvent$ProgressType;}
declare module "net.neoforged.neoforge.event.tick.PlayerTickEvent$Pre" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$PlayerTickEvent} from "net.neoforged.neoforge.event.tick.PlayerTickEvent"

export class $PlayerTickEvent$Pre extends $PlayerTickEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTickEvent$Pre$$Type = ($PlayerTickEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTickEvent$Pre$$Original = $PlayerTickEvent$Pre;}
declare module "net.neoforged.neoforge.event.entity.living.EnderManAngerEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"

export class $EnderManAngerEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $EnderMan$$Type, arg1: $Player$$Type)

public "getEntity"(): $Entity
public "getPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "entity"(): $Entity
get "player"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderManAngerEvent$$Type = ($EnderManAngerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderManAngerEvent$$Original = $EnderManAngerEvent;}
declare module "net.neoforged.neoforge.event.entity.player.PlayerContainerEvent$Open" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$PlayerContainerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerContainerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerContainerEvent$Open extends $PlayerContainerEvent {
constructor(arg0: $Player$$Type, arg1: $AbstractContainerMenu$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerContainerEvent$Open$$Type = ($PlayerContainerEvent$Open);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerContainerEvent$Open$$Original = $PlayerContainerEvent$Open;}
declare module "net.neoforged.neoforge.event.entity.living.BabyEntitySpawnEvent" {
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Event} from "net.neoforged.bus.api.Event"

export class $BabyEntitySpawnEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Mob$$Type, arg1: $Mob$$Type, arg2: $AgeableMob$$Type)

public "getChild"(): $AgeableMob
public "getParentA"(): $Mob
public "getParentB"(): $Mob
public "setChild"(arg0: $AgeableMob$$Type): void
public "getCausedByPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "child"(): $AgeableMob
get "parentA"(): $Mob
get "parentB"(): $Mob
set "child"(value: $AgeableMob$$Type)
get "causedByPlayer"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BabyEntitySpawnEvent$$Type = ($BabyEntitySpawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BabyEntitySpawnEvent$$Original = $BabyEntitySpawnEvent;}
