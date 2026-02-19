declare module "net.caffeinemc.mods.lithium.common.hopper.LithiumStackList" {
import {$Collection$$Type} from "java.util.Collection"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"
import {$LithiumDefaultedList$$Interface} from "net.caffeinemc.mods.lithium.api.inventory.LithiumDefaultedList"
import {$InventoryChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeTracker"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ChangeSubscriber$CountChangeSubscriber$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$CountChangeSubscriber"

export class $LithiumStackList extends $NonNullList<($ItemStack)> implements $LithiumDefaultedList$$Interface, $ChangeSubscriber$CountChangeSubscriber$$Interface<($ItemStack)> {
constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>, arg1: integer)
constructor(arg0: integer)

public "removeInventoryModificationCallback"(arg0: $InventoryChangeTracker$$Type): void
public "remove"(arg0: integer): any
public "clear"(): void
public "add"(arg0: integer, arg1: any): void
public "add"(arg0: integer, arg1: $ItemStack$$Type): void
public "set"(arg0: integer, arg1: $ItemStack$$Type): $ItemStack
public "set"(arg0: integer, arg1: any): any
public "changed"(): void
public "lithium$notifyCount"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "lithium$notifyCount"(arg0: any, arg1: integer, arg2: integer): void
public "lithium$forceUnsubscribe"(arg0: $ItemStack$$Type, arg1: integer): void
public "lithium$forceUnsubscribe"(arg0: any, arg1: integer): void
public "setInventoryModificationCallback"(arg0: $InventoryChangeTracker$$Type): void
public "getSignalStrength"(arg0: $Container$$Type): integer
public "runComparatorUpdatePatternOnFailedExtract"(arg0: $LithiumStackList$$Type, arg1: $Container$$Type): void
public "maybeSendsComparatorUpdatesOnFailedExtract"(): boolean
public "lithium$notify"(arg0: any, arg1: integer): void
public "lithium$notify"(arg0: $ItemStack$$Type, arg1: integer): void
public "changedALot"(): void
public "getModCount"(): long
public "getFullSlots"(): integer
public "getOccupiedSlots"(): integer
public "changedInteractionConditions"(): void
public "clearSignalStrengthOverride"(): void
public "setReducedSignalStrengthOverride"(): void
public "hasSignalStrengthOverride"(): boolean
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): $ChangeSubscriber<($ItemStack)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>): $ChangeSubscriber<($ItemStack)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: boolean): $ChangeSubscriber<($ItemStack)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public "remove"(arg0: any): boolean
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
set "inventoryModificationCallback"(value: $InventoryChangeTracker$$Type)
get "modCount"(): long
get "fullSlots"(): integer
get "occupiedSlots"(): integer
get "reducedSignalStrengthOverride"(): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumStackList$$Type = ($LithiumStackList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumStackList$$Original = $LithiumStackList;}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumCooldownReceivingInventory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumCooldownReceivingInventory$$Interface {
set "transferCooldown"(value: long)
}

export class $LithiumCooldownReceivingInventory implements $LithiumCooldownReceivingInventory$$Interface {
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumCooldownReceivingInventory$$Type = ($LithiumCooldownReceivingInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumCooldownReceivingInventory$$Original = $LithiumCooldownReceivingInventory;}
declare module "net.caffeinemc.mods.lithium.common.util.deduplication.LithiumInterner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LithiumInterner<T> {
constructor()

public "getCanonical"<S>(arg0: S): S
public "deleteCanonical"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumInterner$$Type<T> = ($LithiumInterner<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumInterner$$Original<T> = $LithiumInterner<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.world.ClimbingMobCachingSection" {
import {$EntityPushablePredicate$$Type} from "net.caffeinemc.mods.lithium.common.entity.pushable.EntityPushablePredicate"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$AbortableIterationConsumer$Continuation} from "net.minecraft.util.AbortableIterationConsumer$Continuation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockCachingEntity$$Type} from "net.caffeinemc.mods.lithium.common.entity.pushable.BlockCachingEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ClimbingMobCachingSection$$Interface {
}

export class $ClimbingMobCachingSection implements $ClimbingMobCachingSection$$Interface {
 "lithium$onEntityModifiedCachedBlock"(arg0: $BlockCachingEntity$$Type, arg1: $BlockState$$Type): void
 "lithium$collectPushableEntities"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $AABB$$Type, arg3: $EntityPushablePredicate$$Type<($Entity$$Type)>, arg4: $ArrayList$$Type<($Entity$$Type)>): $AbortableIterationConsumer$Continuation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimbingMobCachingSection$$Type = ($ClimbingMobCachingSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClimbingMobCachingSection$$Original = $ClimbingMobCachingSection;}
declare module "net.caffeinemc.mods.lithium.common.tracking.block.ChunkSectionChangeCallback" {
import {$SectionedBlockChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockListeningSection$$Type} from "net.caffeinemc.mods.lithium.common.block.BlockListeningSection"
import {$ListeningBlockStatePredicate$$Type} from "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate"

export class $ChunkSectionChangeCallback {
constructor()

public static "init"(): void
public static "create"(arg0: long, arg1: $Level$$Type): $ChunkSectionChangeCallback
public "onChunkSectionInvalidated"(arg0: $SectionPos$$Type): void
public "onBlockChange"(arg0: integer, arg1: $BlockListeningSection$$Type): short
public "removeTracker"(arg0: $SectionedBlockChangeTracker$$Type, arg1: $ListeningBlockStatePredicate$$Type): short
public "addTracker"(arg0: $SectionedBlockChangeTracker$$Type, arg1: $ListeningBlockStatePredicate$$Type): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkSectionChangeCallback$$Type = ($ChunkSectionChangeCallback);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkSectionChangeCallback$$Original = $ChunkSectionChangeCallback;}
declare module "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker" {
import {$WorldSectionBox, $WorldSectionBox$$Type} from "net.caffeinemc.mods.lithium.common.util.tuples.WorldSectionBox"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockListeningSection$$Type} from "net.caffeinemc.mods.lithium.common.block.BlockListeningSection"
import {$ListeningBlockStatePredicate, $ListeningBlockStatePredicate$$Type} from "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $SectionedBlockChangeTracker {
readonly "trackedWorldSections": $WorldSectionBox
readonly "blockGroup": $ListeningBlockStatePredicate

constructor(arg0: $WorldSectionBox$$Type, arg1: $ListeningBlockStatePredicate$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "register"(): void
public "unregister"(): void
public "onChunkSectionInvalidated"(arg0: $SectionPos$$Type): void
public static "registerAt"(arg0: $Level$$Type, arg1: $AABB$$Type, arg2: $ListeningBlockStatePredicate$$Type): $SectionedBlockChangeTracker
public "isUnchangedSince"(arg0: long): boolean
public "setChanged"(arg0: $BlockListeningSection$$Type): void
public "setChanged"(arg0: long): void
public "matchesMovedBox"(arg0: $AABB$$Type): boolean
public "listenToAllSections"(): void
set "changed"(value: $BlockListeningSection$$Type)
set "changed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedBlockChangeTracker$$Type = ($SectionedBlockChangeTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionedBlockChangeTracker$$Original = $SectionedBlockChangeTracker;}
declare module "net.caffeinemc.mods.lithium.mixin.util.entity_movement_tracking.PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess} from "net.minecraft.world.level.entity.EntityAccess"

export interface $PersistentEntitySectionManagerAccessor$$Interface<T extends $EntityAccess> {

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export class $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> implements $PersistentEntitySectionManagerAccessor$$Interface {
 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PersistentEntitySectionManagerAccessor$$Original<T> = $PersistentEntitySectionManagerAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.ServerLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelAccessor$$Interface {

(): $PersistentEntitySectionManager$$Type<($Entity$$Type)>
get "entityManager"(): $PersistentEntitySectionManager<($Entity)>
}

export class $ServerLevelAccessor implements $ServerLevelAccessor$$Interface {
 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $PersistentEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevelAccessor$$Original = $ServerLevelAccessor;}
declare module "net.caffeinemc.mods.lithium.common.block.entity.SetChangedHandlingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetChangedHandlingBlockEntity$$Interface {
}

export class $SetChangedHandlingBlockEntity implements $SetChangedHandlingBlockEntity$$Interface {
 "lithium$handleSetChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetChangedHandlingBlockEntity$$Type = ($SetChangedHandlingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SetChangedHandlingBlockEntity$$Original = $SetChangedHandlingBlockEntity;}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.ContainerMixin" {
import {$LithiumCooldownReceivingInventory$$Interface} from "net.caffeinemc.mods.lithium.api.inventory.LithiumCooldownReceivingInventory"
import {$LithiumTransferConditionInventory$$Interface} from "net.caffeinemc.mods.lithium.api.inventory.LithiumTransferConditionInventory"

export interface $ContainerMixin$$Interface extends $LithiumCooldownReceivingInventory$$Interface, $LithiumTransferConditionInventory$$Interface {
set "transferCooldown"(value: long)
}

export class $ContainerMixin implements $ContainerMixin$$Interface {
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerMixin$$Type = ($ContainerMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerMixin$$Original = $ContainerMixin;}
declare module "net.caffeinemc.mods.lithium.common.entity.PositionedEntityTrackingSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PositionedEntityTrackingSection$$Interface {
}

export class $PositionedEntityTrackingSection implements $PositionedEntityTrackingSection$$Interface {
 "lithium$getPos"(): long
 "lithium$setPos"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedEntityTrackingSection$$Type = ($PositionedEntityTrackingSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PositionedEntityTrackingSection$$Original = $PositionedEntityTrackingSection;}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.EntitySectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$$Type} from "net.minecraft.util.ClassInstanceMultiMap"

export interface $EntitySectionAccessor$$Interface<T> {

(): $ClassInstanceMultiMap$$Type<(T)>
get "collection"(): $ClassInstanceMultiMap<(T)>
}

export class $EntitySectionAccessor<T> implements $EntitySectionAccessor$$Interface {
 "getCollection"(): $ClassInstanceMultiMap<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySectionAccessor$$Type<T> = (() => $ClassInstanceMultiMap$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySectionAccessor$$Original<T> = $EntitySectionAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_comparator_tracking.ComparatorTracker" {
import {$Direction$$Type} from "net.minecraft.core.Direction"

export interface $ComparatorTracker$$Interface {
}

export class $ComparatorTracker implements $ComparatorTracker$$Interface {
 "lithium$hasAnyComparatorNearby"(): boolean
 "lithium$onComparatorAdded"(arg0: $Direction$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComparatorTracker$$Type = ($ComparatorTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComparatorTracker$$Original = $ComparatorTracker;}
declare module "net.caffeinemc.mods.lithium.mixin.util.entity_movement_tracking.ServerLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelAccessor$$Interface {

(): $PersistentEntitySectionManager$$Type<($Entity$$Type)>
get "entityManager"(): $PersistentEntitySectionManager<($Entity)>
}

export class $ServerLevelAccessor implements $ServerLevelAccessor$$Interface {
 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $PersistentEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevelAccessor$$Original = $ServerLevelAccessor;}
declare module "net.caffeinemc.mods.lithium.common.entity.pushable.EntityPushablePredicate" {
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"

export class $EntityPushablePredicate<S> implements $Predicate$$Interface<(S)> {
constructor()

public static "and"<T>(arg0: $Predicate$$Type<(T)>, arg1: $Predicate$$Type<(T)>): $Predicate<(T)>
public "test"(arg0: S): boolean
public "or"(arg0: $Predicate$$Type<(S)>): $Predicate<(S)>
public "negate"(): $Predicate<(S)>
public "and"(arg0: $Predicate$$Type<(S)>): $Predicate<(S)>
public static "not"<T>(arg0: $Predicate$$Type<(S)>): $Predicate<(S)>
public static "isEqual"<T>(arg0: any): $Predicate<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPushablePredicate$$Type<S> = ($EntityPushablePredicate<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityPushablePredicate$$Original<S> = $EntityPushablePredicate<(S)>;}
declare module "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementListener" {
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $SectionedEntityMovementListener$$Interface {

(arg0: $Class<(never)>): void
}

export class $SectionedEntityMovementListener implements $SectionedEntityMovementListener$$Interface {
 "lithium$handleEntityMovement"(arg0: $Class$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementListener$$Type = ((arg0: $Class<(never)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionedEntityMovementListener$$Original = $SectionedEntityMovementListener;}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.ItemStackAccessor" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $ItemStackAccessor$$Interface {

(): $Item$$Type
}

export class $ItemStackAccessor implements $ItemStackAccessor$$Interface {
 "lithium$getItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackAccessor$$Type = (() => $Item$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackAccessor$$Original = $ItemStackAccessor;}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$CountChangeSubscriber" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber, $ChangeSubscriber$$Type, $ChangeSubscriber$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $ChangeSubscriber$CountChangeSubscriber$$Interface<T> extends $ChangeSubscriber$$Interface<(T)> {
}

export class $ChangeSubscriber$CountChangeSubscriber<T> implements $ChangeSubscriber$CountChangeSubscriber$$Interface {
 "lithium$notifyCount"(arg0: T, arg1: integer, arg2: integer): void
static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
 "lithium$notify"(arg0: T, arg1: integer): void
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeSubscriber$CountChangeSubscriber$$Type<T> = ($ChangeSubscriber$CountChangeSubscriber<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeSubscriber$CountChangeSubscriber$$Original<T> = $ChangeSubscriber$CountChangeSubscriber<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeTracker" {
import {$LithiumStackList$$Type} from "net.caffeinemc.mods.lithium.common.hopper.LithiumStackList"
import {$InventoryChangeListener$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeListener"
import {$InventoryChangeEmitter$$Interface} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeEmitter"

export interface $InventoryChangeTracker$$Interface extends $InventoryChangeEmitter$$Interface {
}

export class $InventoryChangeTracker implements $InventoryChangeTracker$$Interface {
 "stopListenForMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "listenForMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "listenForContentChangesOnce"(arg0: $LithiumStackList$$Type, arg1: $InventoryChangeListener$$Type): void
 "emitCallbackReplaced"(): void
 "lithium$emitFirstComparatorAdded"(): void
 "lithium$emitRemoved"(): void
 "lithium$forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitStackListReplaced"(): void
 "lithium$emitContentModified"(): void
 "lithium$forwardContentChangeOnce"(arg0: $InventoryChangeListener$$Type, arg1: $LithiumStackList$$Type, arg2: $InventoryChangeTracker$$Type): void
 "lithium$stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeTracker$$Type = ($InventoryChangeTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryChangeTracker$$Original = $InventoryChangeTracker;}
declare module "net.caffeinemc.mods.lithium.common.block.BlockListeningSection" {
import {$SectionedBlockChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ListeningBlockStatePredicate$$Type} from "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate"

export interface $BlockListeningSection$$Interface {
}

export class $BlockListeningSection implements $BlockListeningSection$$Interface {
 "lithium$removeFromCallback"(arg0: $ListeningBlockStatePredicate$$Type, arg1: $SectionedBlockChangeTracker$$Type): void
 "lithium$addToCallback"(arg0: $ListeningBlockStatePredicate$$Type, arg1: $SectionedBlockChangeTracker$$Type, arg2: long, arg3: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockListeningSection$$Type = ($BlockListeningSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockListeningSection$$Original = $BlockListeningSection;}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.NonNullListAccessor" {
import {$List, $List$$Type} from "java.util.List"

export interface $NonNullListAccessor$$Interface<T> {

(): $List$$Type<(T)>
get "delegate"(): $List<(T)>
}

export class $NonNullListAccessor<T> implements $NonNullListAccessor$$Interface {
 "getDelegate"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullListAccessor$$Type<T> = (() => $List$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullListAccessor$$Original<T> = $NonNullListAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.mixin.world.chunk_access.GenerationChunkHolderAccessor" {
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$AtomicReferenceArray} from "java.util.concurrent.atomic.AtomicReferenceArray"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"

export interface $GenerationChunkHolderAccessor$$Interface {
}

export class $GenerationChunkHolderAccessor implements $GenerationChunkHolderAccessor$$Interface {
 "lithium$getChunkFuturesByStatus"(): $AtomicReferenceArray<($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>
 "invokeCannotBeLoaded"(arg0: $ChunkStatus$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationChunkHolderAccessor$$Type = ($GenerationChunkHolderAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenerationChunkHolderAccessor$$Original = $GenerationChunkHolderAccessor;}
declare module "net.caffeinemc.mods.lithium.common.world.LithiumData$Data" {
import {$PathNavigation, $PathNavigation$$Type} from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import {$ChunkSectionChangeCallback, $ChunkSectionChangeCallback$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.ChunkSectionChangeCallback"
import {$SectionedEntityMovementTracker, $SectionedEntityMovementTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementTracker"
import {$ReferenceOpenHashSet, $ReferenceOpenHashSet$$Type} from "it.unimi.dsi.fastutil.objects.ReferenceOpenHashSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Long2ReferenceOpenHashMap, $Long2ReferenceOpenHashMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceOpenHashMap"
import {$GameEventDispatcherStorage, $GameEventDispatcherStorage$$Type} from "net.caffeinemc.mods.lithium.common.world.GameEventDispatcherStorage"
import {$SectionedBlockChangeTracker, $SectionedBlockChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker"
import {$LithiumInterner, $LithiumInterner$$Type} from "net.caffeinemc.mods.lithium.common.util.deduplication.LithiumInterner"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $LithiumData$Data extends $Record {
constructor(arg0: $HolderLookup$Provider$$Type)
constructor(gameEventDispatchers: $GameEventDispatcherStorage$$Type, ominousBanner: $ItemStack$$Type, activeNavigations: $ReferenceOpenHashSet$$Type<($PathNavigation$$Type)>, blockChangeTrackers: $LithiumInterner$$Type<($SectionedBlockChangeTracker$$Type)>, entityMovementTrackers: $LithiumInterner$$Type<($SectionedEntityMovementTracker$$Type<(never), (never)>)>, chunkSectionChangeCallbacks: $Long2ReferenceOpenHashMap$$Type<($ChunkSectionChangeCallback$$Type)>)

public "activeNavigations"(): $ReferenceOpenHashSet<($PathNavigation)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "gameEventDispatchers"(): $GameEventDispatcherStorage
public "chunkSectionChangeCallbacks"(): $Long2ReferenceOpenHashMap<($ChunkSectionChangeCallback)>
public "ominousBanner"(): $ItemStack
public "blockChangeTrackers"(): $LithiumInterner<($SectionedBlockChangeTracker)>
public "entityMovementTrackers"(): $LithiumInterner<($SectionedEntityMovementTracker<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumData$Data$$Type = ({"gameEventDispatchers"?: $GameEventDispatcherStorage$$Type, "activeNavigations"?: $ReferenceOpenHashSet$$Type<($PathNavigation$$Type)>, "entityMovementTrackers"?: $LithiumInterner$$Type<($SectionedEntityMovementTracker$$Type<(never), (never)>)>, "chunkSectionChangeCallbacks"?: $Long2ReferenceOpenHashMap$$Type<($ChunkSectionChangeCallback$$Type)>, "ominousBanner"?: $ItemStack$$Type, "blockChangeTrackers"?: $LithiumInterner$$Type<($SectionedBlockChangeTracker$$Type)>}) | ([gameEventDispatchers?: $GameEventDispatcherStorage$$Type, activeNavigations?: $ReferenceOpenHashSet$$Type<($PathNavigation$$Type)>, entityMovementTrackers?: $LithiumInterner$$Type<($SectionedEntityMovementTracker$$Type<(never), (never)>)>, chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap$$Type<($ChunkSectionChangeCallback$$Type)>, ominousBanner?: $ItemStack$$Type, blockChangeTrackers?: $LithiumInterner$$Type<($SectionedBlockChangeTracker$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumData$Data$$Original = $LithiumData$Data;}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.ItemEntityAccessor" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $ItemEntityAccessor$$Interface {

(): $UUID$$Type
}

export class $ItemEntityAccessor implements $ItemEntityAccessor$$Interface {
 "lithium$getOwner"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccessor$$Type = (() => $UUID$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntityAccessor$$Original = $ItemEntityAccessor;}
declare module "net.caffeinemc.mods.lithium.common.block.TrackedBlockStatePredicate" {
import {$AtomicBoolean} from "java.util.concurrent.atomic.AtomicBoolean"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackedBlockStatePredicate implements $Predicate$$Interface<($BlockState)> {
static readonly "FULLY_INITIALIZED": $AtomicBoolean

constructor(arg0: integer)

public "getIndex"(): integer
public "test"(arg0: $BlockState$$Type): boolean
public "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedBlockStatePredicate$$Type = ($TrackedBlockStatePredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackedBlockStatePredicate$$Original = $TrackedBlockStatePredicate;}
declare module "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.EntitySectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$$Type} from "net.minecraft.util.ClassInstanceMultiMap"

export interface $EntitySectionAccessor$$Interface<T> {

(): $ClassInstanceMultiMap$$Type<(T)>
get "collection"(): $ClassInstanceMultiMap<(T)>
}

export class $EntitySectionAccessor<T> implements $EntitySectionAccessor$$Interface {
 "getCollection"(): $ClassInstanceMultiMap<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySectionAccessor$$Type<T> = (() => $ClassInstanceMultiMap$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySectionAccessor$$Original<T> = $EntitySectionAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $LithiumInventory$$Interface extends $Container$$Interface {
set "inventoryLithium"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "inventoryLithium"(): $NonNullList<($ItemStack)>
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "height"(): integer
get "width"(): integer
get "changed"(): void
get "mutable"(): boolean
get "slots"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}

export class $LithiumInventory implements $LithiumInventory$$Interface {
 "setInventoryLithium"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
 "generateLootLithium"(): void
 "getInventoryLithium"(): $NonNullList<($ItemStack)>
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "countItem"(arg0: $Item$$Type): integer
 "stopOpen"(arg0: $Player$$Type): void
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "getBlock"(level: $Level$$Type): $LevelBlock
 "getHeight"(): integer
 "getWidth"(): integer
 "asContainer"(): $Container
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "setChanged"(): void
 "isMutable"(): boolean
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getStackInSlot"(slot: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "self"(): $Container
 "clear"(): void
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "isEmpty"(): boolean
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumInventory$$Type = ($LithiumInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumInventory$$Original = $LithiumInventory;}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.EntitySectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$$Type} from "net.minecraft.util.ClassInstanceMultiMap"

export interface $EntitySectionAccessor$$Interface<T> {

(): $ClassInstanceMultiMap$$Type<(T)>
get "collection"(): $ClassInstanceMultiMap<(T)>
}

export class $EntitySectionAccessor<T> implements $EntitySectionAccessor$$Interface {
 "getCollection"(): $ClassInstanceMultiMap<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySectionAccessor$$Type<T> = (() => $ClassInstanceMultiMap$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySectionAccessor$$Original<T> = $EntitySectionAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.block.entity.ShapeUpdateHandlingBlockBehaviour" {
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ShapeUpdateHandlingBlockBehaviour$$Interface {
}

export class $ShapeUpdateHandlingBlockBehaviour implements $ShapeUpdateHandlingBlockBehaviour$$Interface {
 "lithium$handleShapeUpdate"(arg0: $LevelReader$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeUpdateHandlingBlockBehaviour$$Type = ($ShapeUpdateHandlingBlockBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapeUpdateHandlingBlockBehaviour$$Original = $ShapeUpdateHandlingBlockBehaviour;}
declare module "net.caffeinemc.mods.lithium.common.world.blockentity.SupportCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SupportCache$$Interface {

(): boolean
}

export class $SupportCache implements $SupportCache$$Interface {
 "lithium$isSupported"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportCache$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportCache$$Original = $SupportCache;}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$EnchantmentSubscriber" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber, $ChangeSubscriber$$Type, $ChangeSubscriber$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $ChangeSubscriber$EnchantmentSubscriber$$Interface<T> extends $ChangeSubscriber$$Interface<(T)> {
}

export class $ChangeSubscriber$EnchantmentSubscriber<T> implements $ChangeSubscriber$EnchantmentSubscriber$$Interface {
 "lithium$notifyAfterEnchantmentChange"(arg0: T, arg1: integer): void
static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
 "lithium$notify"(arg0: T, arg1: integer): void
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeSubscriber$EnchantmentSubscriber$$Type<T> = ($ChangeSubscriber$EnchantmentSubscriber<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeSubscriber$EnchantmentSubscriber$$Original<T> = $ChangeSubscriber$EnchantmentSubscriber<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.world.chunk.ChunkHolderExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkHolderExtended$$Interface {

(arg0: long): boolean
}

export class $ChunkHolderExtended implements $ChunkHolderExtended$$Interface {
 "lithium$updateLastAccessTime"(arg0: long): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolderExtended$$Type = ((arg0: long) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkHolderExtended$$Original = $ChunkHolderExtended;}
declare module "net.caffeinemc.mods.lithium.common.world.interests.PointOfInterestStorageExtended" {
import {$PoiType, $PoiType$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiType"
import {$PoiRecord, $PoiRecord$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$WorldBorder, $WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export interface $PointOfInterestStorageExtended$$Interface {

(arg0: $BlockPos, arg1: integer, arg2: $Holder<($PoiType)>, arg3: $PoiManager$Occupancy, arg4: $Predicate<($PoiRecord)>, arg5: $WorldBorder): ($PoiRecord$$Type)?
}

export class $PointOfInterestStorageExtended implements $PointOfInterestStorageExtended$$Interface {
 "lithium$findNearestForPortalLogic"(arg0: $BlockPos$$Type, arg1: integer, arg2: $Holder$$Type<($PoiType)>, arg3: $PoiManager$Occupancy$$Type, arg4: $Predicate$$Type<($PoiRecord)>, arg5: $WorldBorder$$Type): $Optional<($PoiRecord)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestStorageExtended$$Type = ((arg0: $BlockPos, arg1: integer, arg2: $Holder<($PoiType)>, arg3: $PoiManager$Occupancy, arg4: $Predicate<($PoiRecord)>, arg5: $WorldBorder) => ($PoiRecord$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PointOfInterestStorageExtended$$Original = $PointOfInterestStorageExtended;}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangePublisher" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $ChangePublisher$$Interface<T> {
}

export class $ChangePublisher<T> implements $ChangePublisher$$Interface {
 "lithium$unsubscribe"(arg0: $ChangeSubscriber$$Type<(T)>): integer
 "lithium$subscribe"(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer): void
 "lithium$unsubscribeWithData"(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer): void
 "lithium$isSubscribedWithData"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangePublisher$$Type<T> = ($ChangePublisher<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangePublisher$$Original<T> = $ChangePublisher<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.ai.MemoryModificationCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryModificationCounter$$Interface {

(): long
}

export class $MemoryModificationCounter implements $MemoryModificationCounter$$Interface {
 "lithium$getModCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryModificationCounter$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryModificationCounter$$Original = $MemoryModificationCounter;}
declare module "net.caffeinemc.mods.lithium.common.world.ChunkView" {
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $ChunkView$$Interface {

(arg0: integer, arg1: integer): $ChunkAccess$$Type
}

export class $ChunkView implements $ChunkView$$Interface {
 "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkView$$Type = ((arg0: integer, arg1: integer) => $ChunkAccess$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkView$$Original = $ChunkView;}
declare module "net.caffeinemc.mods.lithium.common.world.blockentity.BlockEntityGetter" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityGetter$$Interface {

(arg0: $BlockPos): $BlockEntity$$Type
}

export class $BlockEntityGetter implements $BlockEntityGetter$$Interface {
 "lithium$getLoadedExistingBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityGetter$$Type = ((arg0: $BlockPos) => $BlockEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityGetter$$Original = $BlockEntityGetter;}
declare module "net.caffeinemc.mods.lithium.common.block.entity.SleepingBlockEntity" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$WrappedBlockEntityTickInvokerAccessor, $WrappedBlockEntityTickInvokerAccessor$$Type} from "net.caffeinemc.mods.lithium.mixin.world.block_entity_ticking.sleeping.WrappedBlockEntityTickInvokerAccessor"

export interface $SleepingBlockEntity$$Interface {
get "sleeping"(): boolean
set "ticker"(value: $TickingBlockEntity$$Type)
}

export class $SleepingBlockEntity implements $SleepingBlockEntity$$Interface {
static readonly "SLEEPING_BLOCK_ENTITY_TICKER": $TickingBlockEntity

 "sleepOnlyCurrentTick"(): void
 "isSleeping"(): boolean
 "lithium$setSleepingTicker"(arg0: $TickingBlockEntity$$Type): void
 "lithium$getSleepingTicker"(): $TickingBlockEntity
 "lithium$setTickWrapper"(arg0: $WrappedBlockEntityTickInvokerAccessor$$Type): void
 "lithium$startSleeping"(): boolean
 "lithium$getTickWrapper"(): $WrappedBlockEntityTickInvokerAccessor
 "wakeUpNow"(): void
 "setTicker"(arg0: $TickingBlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SleepingBlockEntity$$Type = ($SleepingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SleepingBlockEntity$$Original = $SleepingBlockEntity;}
declare module "net.caffeinemc.mods.lithium.common.world.GameEventDispatcherStorage" {
import {$Long2ReferenceOpenHashMap, $Long2ReferenceOpenHashMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceOpenHashMap"
import {$LongOpenHashSet, $LongOpenHashSet$$Type} from "it.unimi.dsi.fastutil.longs.LongOpenHashSet"
import {$GameEventListenerRegistry, $GameEventListenerRegistry$$Type} from "net.minecraft.world.level.gameevent.GameEventListenerRegistry"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$Record} from "java.lang.Record"

export class $GameEventDispatcherStorage extends $Record {
constructor()
constructor(storage: $Long2ReferenceOpenHashMap$$Type<($Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>)>, loadedChunks: $LongOpenHashSet$$Type)

public "removeChunk"(arg0: long): void
public "get"(arg0: long): $Int2ObjectMap<($GameEventListenerRegistry)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "replace"(arg0: long, arg1: $Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>): void
public "storage"(): $Long2ReferenceOpenHashMap<($Int2ObjectMap<($GameEventListenerRegistry)>)>
public "addChunk"(arg0: long, arg1: $Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>): void
public "loadedChunks"(): $LongOpenHashSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameEventDispatcherStorage$$Type = ({"loadedChunks"?: $LongOpenHashSet$$Type, "storage"?: $Long2ReferenceOpenHashMap$$Type<($Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>)>}) | ([loadedChunks?: $LongOpenHashSet$$Type, storage?: $Long2ReferenceOpenHashMap$$Type<($Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameEventDispatcherStorage$$Original = $GameEventDispatcherStorage;}
declare module "net.caffeinemc.mods.lithium.common.entity.EquipmentEntity$TickableEnchantmentTrackingEntity" {
import {$ChangeSubscriber$EnchantmentSubscriber$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$EnchantmentSubscriber"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $EquipmentEntity$TickableEnchantmentTrackingEntity$$Interface extends $ChangeSubscriber$EnchantmentSubscriber$$Interface<($ItemStack)> {
}

export class $EquipmentEntity$TickableEnchantmentTrackingEntity implements $EquipmentEntity$TickableEnchantmentTrackingEntity$$Interface {
 "lithium$updateHasTickableEnchantments"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
 "lithium$notifyAfterEnchantmentChange"(arg0: $ItemStack$$Type, arg1: integer): void
static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
static "combine"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): $ChangeSubscriber<($ItemStack)>
 "lithium$forceUnsubscribe"(arg0: $ItemStack$$Type, arg1: integer): void
static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>): $ChangeSubscriber<($ItemStack)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: boolean): $ChangeSubscriber<($ItemStack)>
 "lithium$notify"(arg0: $ItemStack$$Type, arg1: integer): void
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer): integer
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$TickableEnchantmentTrackingEntity$$Type = ($EquipmentEntity$TickableEnchantmentTrackingEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipmentEntity$TickableEnchantmentTrackingEntity$$Original = $EquipmentEntity$TickableEnchantmentTrackingEntity;}
declare module "net.caffeinemc.mods.lithium.common.entity.NavigatingEntity" {
import {$PathNavigation, $PathNavigation$$Type} from "net.minecraft.world.entity.ai.navigation.PathNavigation"

export interface $NavigatingEntity$$Interface {
}

export class $NavigatingEntity implements $NavigatingEntity$$Interface {
 "lithium$setRegisteredToWorld"(arg0: $PathNavigation$$Type): void
 "lithium$getRegisteredNavigation"(): $PathNavigation
 "lithium$isRegisteredToWorld"(): boolean
 "lithium$updateNavigationRegistration"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigatingEntity$$Type = ($NavigatingEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NavigatingEntity$$Original = $NavigatingEntity;}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.ServerLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelAccessor$$Interface {

(): $PersistentEntitySectionManager$$Type<($Entity$$Type)>
get "entityManager"(): $PersistentEntitySectionManager<($Entity)>
}

export class $ServerLevelAccessor implements $ServerLevelAccessor$$Interface {
 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $PersistentEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevelAccessor$$Original = $ServerLevelAccessor;}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumDefaultedList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumDefaultedList$$Interface {

(): void
}

export class $LithiumDefaultedList implements $LithiumDefaultedList$$Interface {
 "changedInteractionConditions"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumDefaultedList$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumDefaultedList$$Original = $LithiumDefaultedList;}
declare module "net.caffeinemc.mods.lithium.common.util.tuples.WorldSectionBox" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Record} from "java.lang.Record"

export class $WorldSectionBox extends $Record {
constructor(world: $Level$$Type, chunkX1: integer, chunkY1: integer, chunkZ1: integer, chunkX2: integer, chunkY2: integer, chunkZ2: integer)

public "numSections"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "chunkX1"(): integer
public "chunkX2"(): integer
public "chunkZ1"(): integer
public "chunkZ2"(): integer
public "chunkY1"(): integer
public "chunkY2"(): integer
public "world"(): $Level
public static "entityAccessBox"(arg0: $Level$$Type, arg1: $AABB$$Type): $WorldSectionBox
public static "relevantFluidBox"(arg0: $Level$$Type, arg1: $AABB$$Type): $WorldSectionBox
public static "relevantExpandedBlocksBox"(arg0: $Level$$Type, arg1: $AABB$$Type): $WorldSectionBox
public "matchesRelevantBlocksBox"(arg0: $AABB$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSectionBox$$Type = ({"chunkZ1"?: integer, "chunkZ2"?: integer, "world"?: $Level$$Type, "chunkX1"?: integer, "chunkX2"?: integer, "chunkY1"?: integer, "chunkY2"?: integer}) | ([chunkZ1?: integer, chunkZ2?: integer, world?: $Level$$Type, chunkX1?: integer, chunkX2?: integer, chunkY1?: integer, chunkY2?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSectionBox$$Original = $WorldSectionBox;}
declare module "net.caffeinemc.mods.lithium.common.hopper.UpdateReceiver" {
import {$Direction$$Type} from "net.minecraft.core.Direction"

export interface $UpdateReceiver$$Interface {
}

export class $UpdateReceiver implements $UpdateReceiver$$Interface {
 "lithium$invalidateCacheOnNeighborUpdate"(arg0: boolean): void
 "lithium$invalidateCacheOnNeighborUpdate"(arg0: $Direction$$Type): void
 "lithium$invalidateCacheOnUndirectedNeighborUpdate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateReceiver$$Type = ($UpdateReceiver);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpdateReceiver$$Original = $UpdateReceiver;}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeEmitter" {
import {$LithiumStackList$$Type} from "net.caffeinemc.mods.lithium.common.hopper.LithiumStackList"
import {$InventoryChangeListener$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeListener"
import {$InventoryChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeTracker"

export interface $InventoryChangeEmitter$$Interface {
}

export class $InventoryChangeEmitter implements $InventoryChangeEmitter$$Interface {
 "emitCallbackReplaced"(): void
 "lithium$emitFirstComparatorAdded"(): void
 "lithium$emitRemoved"(): void
 "lithium$forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitStackListReplaced"(): void
 "lithium$emitContentModified"(): void
 "lithium$forwardContentChangeOnce"(arg0: $InventoryChangeListener$$Type, arg1: $LithiumStackList$$Type, arg2: $InventoryChangeTracker$$Type): void
 "lithium$stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeEmitter$$Type = ($InventoryChangeEmitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryChangeEmitter$$Original = $InventoryChangeEmitter;}
declare module "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementTracker" {
import {$EntityAccess} from "net.minecraft.world.level.entity.EntityAccess"
import {$WorldSectionBox$$Type} from "net.caffeinemc.mods.lithium.common.util.tuples.WorldSectionBox"
import {$SectionedEntityMovementListener$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementListener"
import {$EntityMovementTrackerSection$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.EntityMovementTrackerSection"
import {$Class$$Type} from "java.lang.Class"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $SectionedEntityMovementTracker<E extends $EntityAccess, S> {
constructor(arg0: $WorldSectionBox$$Type, arg1: $Class$$Type<(S)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "register"(arg0: $ServerLevel$$Type): void
public "onSectionEnteredRange"(arg0: $EntityMovementTrackerSection$$Type): void
public "unRegister"(arg0: $ServerLevel$$Type): void
public "listenToEntityMovementOnce"(arg0: $SectionedEntityMovementListener$$Type): void
public "isUnchangedSince"(arg0: long): boolean
public "onSectionLeftRange"(arg0: $EntityMovementTrackerSection$$Type): void
public "emitEntityMovement"(arg0: integer, arg1: $EntityMovementTrackerSection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementTracker$$Type<E, S> = ($SectionedEntityMovementTracker<(E), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionedEntityMovementTracker$$Original<E, S> = $SectionedEntityMovementTracker<(E), (S)>;}
declare module "net.caffeinemc.mods.lithium.common.tracking.entity.EntityMovementTrackerSection" {
import {$EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$SectionedEntityMovementTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementTracker"
import {$EntityAccess} from "net.minecraft.world.level.entity.EntityAccess"

export interface $EntityMovementTrackerSection$$Interface {
}

export class $EntityMovementTrackerSection implements $EntityMovementTrackerSection$$Interface {
 "lithium$removeListener"(arg0: $EntitySectionStorage$$Type<(never)>, arg1: $SectionedEntityMovementTracker$$Type<(never), (never)>): void
 "lithium$addListener"(arg0: $SectionedEntityMovementTracker$$Type<(never), (never)>): void
 "lithium$getChangeTime"(arg0: integer): long
 "lithium$trackEntityMovement"(arg0: integer, arg1: long): void
 "lithium$listenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$$Type<(E), (S)>, arg1: integer): void
 "lithium$removeListenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$$Type<(E), (S)>, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMovementTrackerSection$$Type = ($EntityMovementTrackerSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityMovementTrackerSection$$Original = $EntityMovementTrackerSection;}
declare module "net.caffeinemc.mods.lithium.common.entity.EquipmentEntity$EquipmentTrackingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity$EquipmentTrackingEntity$$Interface {

(): void
}

export class $EquipmentEntity$EquipmentTrackingEntity implements $EquipmentEntity$EquipmentTrackingEntity$$Interface {
 "lithium$onEquipmentChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$EquipmentTrackingEntity$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipmentEntity$EquipmentTrackingEntity$$Original = $EquipmentEntity$EquipmentTrackingEntity;}
declare module "net.caffeinemc.mods.lithium.common.world.LithiumData" {
import {$LithiumData$Data, $LithiumData$Data$$Type} from "net.caffeinemc.mods.lithium.common.world.LithiumData$Data"

export interface $LithiumData$$Interface {

(): $LithiumData$Data$$Type
}

export class $LithiumData implements $LithiumData$$Interface {
 "lithium$getData"(): $LithiumData$Data
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumData$$Type = (() => $LithiumData$Data$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumData$$Original = $LithiumData;}
declare module "net.caffeinemc.mods.lithium.common.world.interests.RegionBasedStorageSectionExtended" {
import {$Iterable} from "java.lang.Iterable"
import {$Stream} from "java.util.stream.Stream"

export interface $RegionBasedStorageSectionExtended$$Interface<R> {
}

export class $RegionBasedStorageSectionExtended<R> implements $RegionBasedStorageSectionExtended$$Interface {
 "lithium$getInChunkColumn"(arg0: integer, arg1: integer): $Iterable<(R)>
 "lithium$getWithinChunkColumn"(arg0: integer, arg1: integer): $Stream<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionBasedStorageSectionExtended$$Type<R> = ($RegionBasedStorageSectionExtended<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegionBasedStorageSectionExtended$$Original<R> = $RegionBasedStorageSectionExtended<(R)>;}
declare module "net.caffeinemc.mods.lithium.common.client.ClientWorldAccessor" {
import {$TransientEntitySectionManager, $TransientEntitySectionManager$$Type} from "net.minecraft.world.level.entity.TransientEntitySectionManager"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $ClientWorldAccessor$$Interface {

(): $TransientEntitySectionManager$$Type<($Entity$$Type)>
}

export class $ClientWorldAccessor implements $ClientWorldAccessor$$Interface {
 "lithium$getEntityManager"(): $TransientEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientWorldAccessor$$Type = (() => $TransientEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientWorldAccessor$$Original = $ClientWorldAccessor;}
declare module "net.caffeinemc.mods.lithium.common.world.ServerWorldExtended" {
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"

export interface $ServerWorldExtended$$Interface {
}

export class $ServerWorldExtended implements $ServerWorldExtended$$Interface {
 "lithium$setNavigationInactive"(arg0: $Mob$$Type): void
 "lithium$setNavigationActive"(arg0: $Mob$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldExtended$$Type = ($ServerWorldExtended);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerWorldExtended$$Original = $ServerWorldExtended;}
declare module "net.caffeinemc.mods.lithium.common.world.ChunkAwareEntityIterable" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$EntityAccess} from "net.minecraft.world.level.entity.EntityAccess"

export interface $ChunkAwareEntityIterable$$Interface<T extends $EntityAccess> {

(): $Iterable$$Type<(T)>
}

export class $ChunkAwareEntityIterable<T extends $EntityAccess> implements $ChunkAwareEntityIterable$$Interface {
 "lithium$IterateEntitiesInTrackedSections"(): $Iterable<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkAwareEntityIterable$$Type<T> = (() => $Iterable$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkAwareEntityIterable$$Original<T> = $ChunkAwareEntityIterable<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.entity.pushable.BlockCachingEntity" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockCachingEntity$$Interface {

(): $BlockState$$Type
}

export class $BlockCachingEntity implements $BlockCachingEntity$$Interface {
 "lithium$OnBlockCacheSet"(arg0: $BlockState$$Type): void
 "lithium$OnBlockCacheDeleted"(): void
 "lithium$getCachedFeetBlockState"(): $BlockState
 "lithium$SetClimbingMobCachingSectionUpdateBehavior"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCachingEntity$$Type = (() => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCachingEntity$$Original = $BlockCachingEntity;}
declare module "net.caffeinemc.mods.lithium.common.entity.EquipmentEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $EquipmentEntity$$Interface {

(arg0: $ItemStack, arg1: $ItemStack): void
}

export class $EquipmentEntity implements $EquipmentEntity$$Interface {
 "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$$Type = ((arg0: $ItemStack, arg1: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipmentEntity$$Original = $EquipmentEntity;}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.EntityAccessor" {
import {$EntityInLevelCallback, $EntityInLevelCallback$$Type} from "net.minecraft.world.level.entity.EntityInLevelCallback"

export interface $EntityAccessor$$Interface {

(): $EntityInLevelCallback$$Type
get "changeListener"(): $EntityInLevelCallback
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "getChangeListener"(): $EntityInLevelCallback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = (() => $EntityInLevelCallback$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "net.caffeinemc.mods.lithium.common.world.ChunkRandomSource" {
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"

export interface $ChunkRandomSource$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos): void
}

export class $ChunkRandomSource implements $ChunkRandomSource$$Interface {
 "lithium$getRandomPosInChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRandomSource$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkRandomSource$$Original = $ChunkRandomSource;}
declare module "net.caffeinemc.mods.lithium.common.shapes.OffsetVoxelShapeCache" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction$$Type} from "net.minecraft.core.Direction"

export interface $OffsetVoxelShapeCache$$Interface {
}

export class $OffsetVoxelShapeCache implements $OffsetVoxelShapeCache$$Interface {
 "lithium$getOffsetSimplifiedShape"(arg0: float, arg1: $Direction$$Type): $VoxelShape
 "lithium$setShape"(arg0: float, arg1: $Direction$$Type, arg2: $VoxelShape$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetVoxelShapeCache$$Type = ($OffsetVoxelShapeCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OffsetVoxelShapeCache$$Original = $OffsetVoxelShapeCache;}
declare module "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate" {
import {$AtomicBoolean} from "java.util.concurrent.atomic.AtomicBoolean"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TrackedBlockStatePredicate} from "net.caffeinemc.mods.lithium.common.block.TrackedBlockStatePredicate"

export class $ListeningBlockStatePredicate extends $TrackedBlockStatePredicate {
static readonly "FULLY_INITIALIZED": $AtomicBoolean
static "LISTENING_MASK": integer

public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListeningBlockStatePredicate$$Type = ($ListeningBlockStatePredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListeningBlockStatePredicate$$Original = $ListeningBlockStatePredicate;}
declare module "net.caffeinemc.mods.lithium.mixin.ai.useless_sensors.SensorAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SensorAccessor$$Interface {
set "lastSenseTime"(value: long)
get "lastSenseTime"(): long
get "senseInterval"(): integer
}

export class $SensorAccessor implements $SensorAccessor$$Interface {
 "setLastSenseTime"(arg0: long): void
 "getLastSenseTime"(): long
 "getSenseInterval"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensorAccessor$$Type = ($SensorAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SensorAccessor$$Original = $SensorAccessor;}
declare module "net.caffeinemc.mods.lithium.mixin.world.combined_heightmap_update.HeightmapAccessor" {
import {$Predicate} from "java.util.function.Predicate"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export interface $HeightmapAccessor$$Interface {
get "blockPredicate"(): $Predicate<($BlockState)>
}

export class $HeightmapAccessor implements $HeightmapAccessor$$Interface {
 "callSet"(arg0: integer, arg1: integer, arg2: integer): void
 "getBlockPredicate"(): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeightmapAccessor$$Type = ($HeightmapAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeightmapAccessor$$Original = $HeightmapAccessor;}
declare module "net.caffeinemc.mods.lithium.mixin.world.block_entity_ticking.sleeping.WrappedBlockEntityTickInvokerAccessor" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TickingBlockEntity"

export interface $WrappedBlockEntityTickInvokerAccessor$$Interface {
get "wrapped"(): $TickingBlockEntity
}

export class $WrappedBlockEntityTickInvokerAccessor implements $WrappedBlockEntityTickInvokerAccessor$$Interface {
 "callSetWrapped"(arg0: $TickingBlockEntity$$Type): void
 "getWrapped"(): $TickingBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedBlockEntityTickInvokerAccessor$$Type = ($WrappedBlockEntityTickInvokerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedBlockEntityTickInvokerAccessor$$Original = $WrappedBlockEntityTickInvokerAccessor;}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.TransientEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess} from "net.minecraft.world.level.entity.EntityAccess"

export interface $TransientEntitySectionManagerAccessor$$Interface<T extends $EntityAccess> {

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export class $TransientEntitySectionManagerAccessor<T extends $EntityAccess> implements $TransientEntitySectionManagerAccessor$$Interface {
 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransientEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransientEntitySectionManagerAccessor$$Original<T> = $TransientEntitySectionManagerAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumTransferConditionInventory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumTransferConditionInventory$$Interface {
}

export class $LithiumTransferConditionInventory implements $LithiumTransferConditionInventory$$Interface {
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumTransferConditionInventory$$Type = ($LithiumTransferConditionInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LithiumTransferConditionInventory$$Original = $LithiumTransferConditionInventory;}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.LevelAccessor" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"

export interface $LevelAccessor$$Interface {

(): $Thread$$Type
get "thread"(): $Thread
}

export class $LevelAccessor implements $LevelAccessor$$Interface {
 "getThread"(): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelAccessor$$Type = (() => $Thread$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelAccessor$$Original = $LevelAccessor;}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeListener" {
import {$Container$$Type} from "net.minecraft.world.Container"

export interface $InventoryChangeListener$$Interface {
}

export class $InventoryChangeListener implements $InventoryChangeListener$$Interface {
 "lithium$handleInventoryContentModified"(arg0: $Container$$Type): void
 "handleStackListReplaced"(arg0: $Container$$Type): void
 "lithium$handleInventoryRemoved"(arg0: $Container$$Type): void
 "lithium$handleComparatorAdded"(arg0: $Container$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeListener$$Type = ($InventoryChangeListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryChangeListener$$Original = $InventoryChangeListener;}
declare module "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess} from "net.minecraft.world.level.entity.EntityAccess"

export interface $PersistentEntitySectionManagerAccessor$$Interface<T extends $EntityAccess> {

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export class $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> implements $PersistentEntitySectionManagerAccessor$$Interface {
 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PersistentEntitySectionManagerAccessor$$Original<T> = $PersistentEntitySectionManagerAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.mixin.world.raycast.ClipContextAccessor" {
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export interface $ClipContextAccessor$$Interface {

(): $ClipContext$Fluid$$Type
get "fluidHandling"(): $ClipContext$Fluid
}

export class $ClipContextAccessor implements $ClipContextAccessor$$Interface {
 "getFluidHandling"(): $ClipContext$Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClipContextAccessor$$Type = (() => $ClipContext$Fluid$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClipContextAccessor$$Original = $ClipContextAccessor;}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ChangeSubscriber$$Interface<T> {
}

export class $ChangeSubscriber<T> implements $ChangeSubscriber$$Interface {
static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
 "lithium$notify"(arg0: T, arg1: integer): void
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeSubscriber$$Type<T> = ($ChangeSubscriber<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeSubscriber$$Original<T> = $ChangeSubscriber<(T)>;}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess} from "net.minecraft.world.level.entity.EntityAccess"

export interface $PersistentEntitySectionManagerAccessor$$Interface<T extends $EntityAccess> {

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export class $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> implements $PersistentEntitySectionManagerAccessor$$Interface {
 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PersistentEntitySectionManagerAccessor$$Original<T> = $PersistentEntitySectionManagerAccessor<(T)>;}
declare module "net.caffeinemc.mods.lithium.common.world.interests.PointOfInterestSetExtended" {
import {$PoiType, $PoiType$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiType"
import {$PoiRecord, $PoiRecord$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $PointOfInterestSetExtended$$Interface {

(arg0: $Predicate<($Holder<($PoiType)>)>, arg1: $PoiManager$Occupancy, arg2: $Consumer<($PoiRecord)>): void
}

export class $PointOfInterestSetExtended implements $PointOfInterestSetExtended$$Interface {
 "lithium$collectMatchingPoints"(arg0: $Predicate$$Type<($Holder<($PoiType)>)>, arg1: $PoiManager$Occupancy$$Type, arg2: $Consumer$$Type<($PoiRecord)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestSetExtended$$Type = ((arg0: $Predicate<($Holder<($PoiType)>)>, arg1: $PoiManager$Occupancy, arg2: $Consumer<($PoiRecord)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PointOfInterestSetExtended$$Original = $PointOfInterestSetExtended;}
declare module "net.caffeinemc.mods.lithium.mixin.ai.useless_sensors.BrainAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SensorType, $SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Sensor, $Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"

export interface $BrainAccessor$$Interface<E extends $LivingEntity> {

(): $Map$$Type<($SensorType$$Type<($Sensor$$Type<(E)>)>), ($Sensor$$Type<(E)>)>
get "sensors"(): $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>
}

export class $BrainAccessor<E extends $LivingEntity> implements $BrainAccessor$$Interface {
 "getSensors"(): $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainAccessor$$Type<E> = (() => $Map$$Type<($SensorType$$Type<($Sensor$$Type<(E)>)>), ($Sensor$$Type<(E)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainAccessor$$Original<E> = $BrainAccessor<(E)>;}
