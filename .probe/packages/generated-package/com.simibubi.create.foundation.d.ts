declare module "com.simibubi.create.foundation.mixin.accessor.FallingBlockEntityAccessor" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FallingBlockEntity} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FallingBlockEntityAccessor$$Interface {
}

export class $FallingBlockEntityAccessor implements $FallingBlockEntityAccessor$$Interface {
static "create$callInit"(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $BlockState$$Type): $FallingBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockEntityAccessor$$Type = ($FallingBlockEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallingBlockEntityAccessor$$Original = $FallingBlockEntityAccessor;}
declare module "com.simibubi.create.foundation.block.IBE" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Class} from "java.lang.Class"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBE$$Interface<T extends $BlockEntity> extends $EntityBlock$$Interface {
get "blockEntityClass"(): $Class<(T)>
get "blockEntityType"(): $BlockEntityType<(T)>
}

export class $IBE<T extends $BlockEntity> implements $IBE$$Interface {
 "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
 "getBlockEntityClass"(): $Class<(T)>
 "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
 "getBlockEntityType"(): $BlockEntityType<(T)>
 "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(T)>): void
 "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($InteractionResult$$Type)>): $InteractionResult
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
 "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
 "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBE$$Type<T> = ($IBE<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBE$$Original<T> = $IBE<(T)>;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType" {
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export class $BehaviourType<T extends $BlockEntityBehaviour> {
constructor(arg0: StringJS)
constructor()

public "getName"(): StringJS
public "hashCode"(): integer
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BehaviourType$$Type<T> = ($BehaviourType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BehaviourType$$Original<T> = $BehaviourType<(T)>;}
declare module "com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor" {
import {$Frustum} from "net.minecraft.client.renderer.culling.Frustum"

export interface $LevelRendererAccessor$$Interface {
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "create$getCapturedFrustum"(): $Frustum
 "create$getCullingFrustum"(): $Frustum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level} from "net.minecraft.world.level.Level"
import {$BehaviourType, $BehaviourType$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$$Type)

public "onNeighborChanged"(arg0: $BlockPos$$Type): void
public static "get"<T extends $BlockEntityBehaviour>(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BehaviourType$$Type<(T)>): T
public static "get"<T extends $BlockEntityBehaviour>(arg0: $BlockEntity$$Type, arg1: $BehaviourType$$Type<(T)>): T
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "destroy"(): void
public "getType"(): $BehaviourType<(never)>
public "unload"(): void
public "tick"(): void
public "lazyTick"(): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isSafeNBT"(): boolean
public "getPos"(): $BlockPos
public "getWorld"(): $Level
public "setLazyTickRate"(arg0: integer): void
public "getRequiredItems"(): $ItemRequirement
public "onBlockChanged"(arg0: $BlockState$$Type): void
get "type"(): $BehaviourType<(never)>
get "safeNBT"(): boolean
get "pos"(): $BlockPos
get "world"(): $Level
set "lazyTickRate"(value: integer)
get "requiredItems"(): $ItemRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBehaviour$$Type = ($BlockEntityBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBehaviour$$Original = $BlockEntityBehaviour;}
declare module "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor$$Interface {
}

export class $MouseHandlerAccessor implements $MouseHandlerAccessor$$Interface {
 "create$setYPos"(arg0: double): void
 "create$setXPos"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$$Type = ($MouseHandlerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseHandlerAccessor$$Original = $MouseHandlerAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.AgeableListModelAccessor" {
import {$Iterable} from "java.lang.Iterable"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"

export interface $AgeableListModelAccessor$$Interface {
}

export class $AgeableListModelAccessor implements $AgeableListModelAccessor$$Interface {
 "create$callBodyParts"(): $Iterable<($ModelPart)>
 "create$callHeadParts"(): $Iterable<($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableListModelAccessor$$Type = ($AgeableListModelAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgeableListModelAccessor$$Original = $AgeableListModelAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.FlowingFluidAccessor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FlowingFluidAccessor$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState): $FluidState$$Type
}

export class $FlowingFluidAccessor implements $FlowingFluidAccessor$$Interface {
 "create$getNewLiquid"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingFluidAccessor$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $FluidState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowingFluidAccessor$$Original = $FlowingFluidAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.BlockBehaviourAccessor" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourAccessor$$Interface {

(arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext): $VoxelShape$$Type
}

export class $BlockBehaviourAccessor implements $BlockBehaviourAccessor$$Interface {
 "create$getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccessor$$Type = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBehaviourAccessor$$Original = $BlockBehaviourAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.MinecraftAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftAccessor$$Interface {

(arg0: integer): void
}

export class $MinecraftAccessor implements $MinecraftAccessor$$Interface {
 "create$setMissTime"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftAccessor$$Original = $MinecraftAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.StateHolderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StateHolderAccessor$$Interface<O, S> {

(): O
get "owner"(): O
}

export class $StateHolderAccessor<O, S> implements $StateHolderAccessor$$Interface {
 "getOwner"(): O
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateHolderAccessor$$Type<O, S> = (() => O);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateHolderAccessor$$Original<O, S> = $StateHolderAccessor<(O), (S)>;}
declare module "com.simibubi.create.foundation.mixin.accessor.ShapedRecipeAccessor" {
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"

export interface $ShapedRecipeAccessor$$Interface {

(): $ShapedRecipePattern$$Type
}

export class $ShapedRecipeAccessor implements $ShapedRecipeAccessor$$Interface {
 "create$getPattern"(): $ShapedRecipePattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccessor$$Type = (() => $ShapedRecipePattern$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipeAccessor$$Original = $ShapedRecipeAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.PotionBrewingAccessor" {
import {$PotionBrewing$Mix} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Item} from "net.minecraft.world.item.Item"

export interface $PotionBrewingAccessor$$Interface {
}

export class $PotionBrewingAccessor implements $PotionBrewingAccessor$$Interface {
 "create$isContainer"(arg0: $ItemStack$$Type): boolean
 "create$getContainerMixes"(): $List<($PotionBrewing$Mix<($Item)>)>
 "create$getPotionMixes"(): $List<($PotionBrewing$Mix<($Potion)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingAccessor$$Type = ($PotionBrewingAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewingAccessor$$Original = $PotionBrewingAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.MinecartFurnaceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecartFurnaceAccessor$$Interface {
}

export class $MinecartFurnaceAccessor implements $MinecartFurnaceAccessor$$Interface {
 "create$getFuel"(): integer
 "create$setFuel"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartFurnaceAccessor$$Type = ($MinecartFurnaceAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecartFurnaceAccessor$$Original = $MinecartFurnaceAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.FontAccessor" {
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $FontAccessor$$Interface {

(): $Function$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>
}

export class $FontAccessor implements $FontAccessor$$Interface {
 "create$getFonts"(): $Function<($ResourceLocation), ($FontSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontAccessor$$Type = (() => $Function$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontAccessor$$Original = $FontAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.GuiAccessor" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$SubtitleOverlay} from "net.minecraft.client.gui.components.SubtitleOverlay"

export interface $GuiAccessor$$Interface {
}

export class $GuiAccessor implements $GuiAccessor$$Interface {
 "create$getSubtitleOverlay"(): $SubtitleOverlay
 "create$renderTextureOverlay"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: float): void
 "create$getToolHighlightTimer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiAccessor$$Type = ($GuiAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiAccessor$$Original = $GuiAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.NbtAccounterAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NbtAccounterAccessor$$Interface {

(): long
}

export class $NbtAccounterAccessor implements $NbtAccounterAccessor$$Interface {
 "create$getUsage"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtAccounterAccessor$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtAccounterAccessor$$Original = $NbtAccounterAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.EntityRenderDispatcherAccessor" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$Map, $Map$$Type} from "java.util.Map"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $EntityRenderDispatcherAccessor$$Interface {

(): $Map$$Type<($EntityType$$Type<(never)>), ($EntityRenderer$$Type<(never)>)>
}

export class $EntityRenderDispatcherAccessor implements $EntityRenderDispatcherAccessor$$Interface {
 "create$getRenderers"(): $Map<($EntityType<(never)>), ($EntityRenderer<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcherAccessor$$Type = (() => $Map$$Type<($EntityType$$Type<(never)>), ($EntityRenderer$$Type<(never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderDispatcherAccessor$$Original = $EntityRenderDispatcherAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SyncedBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "sendData"(): void
public "readClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "notifyUpdate"(): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "writeClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedBlockEntity$$Type = ($SyncedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedBlockEntity$$Original = $SyncedBlockEntity;}
declare module "com.simibubi.create.foundation.mixin.accessor.LivingEntityAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $LivingEntityAccessor$$Interface {

(arg0: $ItemStack, arg1: integer): void
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "create$callSpawnItemParticles"(arg0: $ItemStack$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ((arg0: $ItemStack, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.CachedRenderBBBlockEntity" {
import {$SyncedBlockEntity} from "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getRenderBoundingBox"(): $AABB
get "renderBoundingBox"(): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRenderBBBlockEntity$$Type = ($CachedRenderBBBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedRenderBBBlockEntity$$Original = $CachedRenderBBBlockEntity;}
declare module "com.simibubi.create.foundation.gui.AllGuiTextures" {
import {$ScreenElement$$Interface} from "net.createmod.catnip.gui.element.ScreenElement"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Color$$Type} from "net.createmod.catnip.theme.Color"
import {$TextureSheetSegment$$Interface} from "net.createmod.catnip.gui.TextureSheetSegment"

export class $AllGuiTextures extends $Enum<($AllGuiTextures)> implements $ScreenElement$$Interface, $TextureSheetSegment$$Interface {
static readonly "FROGPORT_HEADER": $AllGuiTextures
static readonly "CURSEFORGE_LOGO": $AllGuiTextures
static readonly "THRESHOLD_SWITCH": $AllGuiTextures
static readonly "TRADE_OVERLAY": $AllGuiTextures
static readonly "STATION_TEXTBOX_BOTTOM": $AllGuiTextures
static readonly "WAND_OF_SYMMETRY": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY": $AllGuiTextures
static readonly "JEI_SHADOW": $AllGuiTextures
static readonly "FONT_COLOR": integer
static readonly "SCHEDULE_EDITOR_ADDITIONAL_SLOT": $AllGuiTextures
static readonly "DATA_AREA": $AllGuiTextures
static readonly "BRASS_FRAME_TR": $AllGuiTextures
static readonly "BRASS_FRAME_TL": $AllGuiTextures
static readonly "JEI_ARROW": $AllGuiTextures
static readonly "VALUE_SETTINGS_MILESTONE": $AllGuiTextures
static readonly "JEI_SLOT": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_TOP": $AllGuiTextures
static readonly "TRAIN_HUD_SPEED_BG": $AllGuiTextures
static readonly "SCHEDULE_EDITOR_INACTIVE_SLOT": $AllGuiTextures
static readonly "SCHEDULE_POINTER_OFFSCREEN": $AllGuiTextures
static readonly "TRAINMAP_SIGNAL": $AllGuiTextures
static readonly "HOTSLOT_ARROW_BAD": $AllGuiTextures
static readonly "SCHEDULE_CARD_MOVE_UP": $AllGuiTextures
static readonly "REDSTONE_REQUESTER": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_HEADER": $AllGuiTextures
static readonly "BUTTON": $AllGuiTextures
static readonly "INDICATOR": $AllGuiTextures
static readonly "STATION_TEXTBOX_TOP": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SAYS": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BLUEPRINT_RIGHT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_HIDDEN": $AllGuiTextures
static readonly "SCHEDULE_CARD_MEDIUM": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_UP": $AllGuiTextures
static readonly "SCHEMATIC_SLOT": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BLUEPRINT_MIDDLE": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_DOWN": $AllGuiTextures
static readonly "HOTSLOT_ACTIVE": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_RIGHT": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_FOOTER": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SLOT": $AllGuiTextures
static readonly "ATTRIBUTE_FILTER": $AllGuiTextures
static readonly "INDICATOR_GREEN": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BANNER_M": $AllGuiTextures
static readonly "JEI_LIGHT": $AllGuiTextures
static readonly "JEI_DOWN_ARROW": $AllGuiTextures
static readonly "INDICATOR_WHITE": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BANNER_L": $AllGuiTextures
static readonly "INDICATOR_RED": $AllGuiTextures
static readonly "THRESHOLD_SWITCH_CURRENT_STATE": $AllGuiTextures
static readonly "TRAINMAP_TOGGLE_OFF": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_ITEM": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BANNER_R": $AllGuiTextures
static readonly "SCHEDULE_STRIP_ACTION": $AllGuiTextures
static readonly "BUTTON_GREEN": $AllGuiTextures
static readonly "TOOLBELT_SLOT_HIGHLIGHT": $AllGuiTextures
static readonly "SCHEMATICANNON_CHECKLIST_PROGRESS": $AllGuiTextures
static readonly "FROGPORT_BG": $AllGuiTextures
static readonly "PLACEMENT_INDICATOR_SHEET": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SEARCH": $AllGuiTextures
static readonly "SCHEDULE_CARD_NEW": $AllGuiTextures
static readonly "SCHEDULE_STRIP_END": $AllGuiTextures
static readonly "STATION": $AllGuiTextures
static readonly "JEI_CATALYST_SLOT": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_LEFT_CLEAN": $AllGuiTextures
static readonly "VALUE_SETTINGS_BAR": $AllGuiTextures
static readonly "BUTTON_DOWN": $AllGuiTextures
static readonly "STATION_TEXTBOX_SPEECH": $AllGuiTextures
static readonly "JEI_NO_HEAT_BAR": $AllGuiTextures
static readonly "FACTORY_GAUGE_RECIPE": $AllGuiTextures
static readonly "TRAIN_HUD_SPEED": $AllGuiTextures
static readonly "TRAINMAP_STATION_ORTHO_HIGHLIGHT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR": $AllGuiTextures
static readonly "SCHEMATICANNON_FUEL": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_ENTRY": $AllGuiTextures
static readonly "STATION_ASSEMBLING": $AllGuiTextures
static readonly "DATA_AREA_START": $AllGuiTextures
static readonly "SCHEDULE_CARD_MOVE_DOWN": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_LOCKED": $AllGuiTextures
static readonly "PACKAGE_FILTER": $AllGuiTextures
static readonly "SCHEMATIC_TABLE_PROGRESS": $AllGuiTextures
static readonly "FILTER": $AllGuiTextures
static readonly "HUD_BACKGROUND": $AllGuiTextures
static readonly "SCHEDULE_SCROLL_RIGHT": $AllGuiTextures
static readonly "THRESHOLD_SWITCH_ITEMCOUNT_INPUTS": $AllGuiTextures
static readonly "FACTORY_GAUGE_SET_ITEM": $AllGuiTextures
static readonly "BUTTON_HOVER": $AllGuiTextures
static readonly "FACTORY_GAUGE_BOTTOM": $AllGuiTextures
static readonly "SCHEDULE_CARD_REMOVE": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_MIDDLE": $AllGuiTextures
readonly "location": $ResourceLocation
static readonly "SCHEDULE_STRIP_DARK": $AllGuiTextures
static readonly "CLIPBOARD_ADDRESS": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_PAD": $AllGuiTextures
static readonly "SCHEDULE_STRIP_WAIT": $AllGuiTextures
static readonly "SEQUENCER": $AllGuiTextures
static readonly "SCHEDULE_STRIP_LIGHT": $AllGuiTextures
static readonly "SCHEDULE_EDITOR": $AllGuiTextures
static readonly "BRASS_FRAME_LEFT": $AllGuiTextures
static readonly "TERRAINZAPPER": $AllGuiTextures
static readonly "INDICATOR_YELLOW": $AllGuiTextures
static readonly "STATION_EDIT_NAME": $AllGuiTextures
static readonly "BRASS_FRAME_TOP": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_MID": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BG": $AllGuiTextures
static readonly "JEI_QUESTION_MARK": $AllGuiTextures
static readonly "SCHEDULE_SCROLL_LEFT": $AllGuiTextures
static readonly "STATION_TEXTBOX_MIDDLE": $AllGuiTextures
static readonly "TOOLBELT_INACTIVE_SLOT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR_ICON": $AllGuiTextures
static readonly "SCHEDULE_POINTER": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_HEADER": $AllGuiTextures
static readonly "SCHEMATIC_TABLE": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BLUEPRINT_LEFT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_FOOTER": $AllGuiTextures
static readonly "VALUE_SETTINGS_BAR_BG": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_UNLOCKED": $AllGuiTextures
static readonly "MODRINTH_LOGO": $AllGuiTextures
static readonly "VALUE_SETTINGS_LABEL_BG": $AllGuiTextures
static readonly "BLUEPRINT": $AllGuiTextures
static readonly "SPEECH_TOOLTIP_BACKGROUND": $AllGuiTextures
static readonly "BUTTON_DISABLED": $AllGuiTextures
static readonly "POSTBOX_HEADER": $AllGuiTextures
static readonly "SCHEMATICANNON_TOP": $AllGuiTextures
static readonly "SCHEMATICANNON_FUEL_CREATIVE": $AllGuiTextures
static readonly "SCHEDULE_STRIP_TRAVEL": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_APPEND": $AllGuiTextures
static readonly "TRAINMAP_SPRITES": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_LEFT": $AllGuiTextures
static readonly "I_ASSEMBLE_TRAIN": $AllGuiTextures
static readonly "TRAIN_HUD_FRAME": $AllGuiTextures
static readonly "TERRAINZAPPER_INACTIVE_PARAM": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_SHOWN": $AllGuiTextures
static readonly "TOOLBELT_EMPTY_SLOT": $AllGuiTextures
static readonly "TRAIN_PROMPT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_NEW": $AllGuiTextures
static readonly "TRAIN_HUD_THROTTLE": $AllGuiTextures
static readonly "TOOLBELT_SELECTED_ON": $AllGuiTextures
static readonly "SCHEMATIC_TITLE": $AllGuiTextures
static readonly "TOOLBELT_SLOT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR_LEFT": $AllGuiTextures
static readonly "DATA_AREA_SPEECH": $AllGuiTextures
static readonly "VALUE_SETTINGS_OUTER_BG": $AllGuiTextures
static readonly "JEI_CHANCE_SLOT": $AllGuiTextures
static readonly "LOGO": $AllGuiTextures
static readonly "DATA_GATHERER": $AllGuiTextures
static readonly "TRAIN_PROMPT_R": $AllGuiTextures
static readonly "TRAINMAP_TOGGLE_ON": $AllGuiTextures
static readonly "SPEECH_TOOLTIP_COLOR": $AllGuiTextures
static readonly "TRAIN_PROMPT_L": $AllGuiTextures
static readonly "TOOLBELT_SELECTED_OFF": $AllGuiTextures
static readonly "BLOCKZAPPER": $AllGuiTextures
static readonly "I_DISASSEMBLE_TRAIN": $AllGuiTextures
static readonly "DATA_AREA_END": $AllGuiTextures
static readonly "SCHEMATICANNON_HIGHLIGHT": $AllGuiTextures
static readonly "SCHEDULE": $AllGuiTextures
static readonly "THRESHOLD_SWITCH_MISC_INPUTS": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BODY": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_BOT": $AllGuiTextures
static readonly "SCHEDULE_CARD_DUPLICATE": $AllGuiTextures
static readonly "ELEVATOR_CONTACT": $AllGuiTextures
static readonly "BLOCKZAPPER_UPGRADE_RECIPE": $AllGuiTextures
static readonly "LINKED_CONTROLLER": $AllGuiTextures
static readonly "NUMBERS": $AllGuiTextures
static readonly "SCHEMATIC_PROMPT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR_RIGHT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_SAYS": $AllGuiTextures
static readonly "TRAIN_HUD_THROTTLE_POINTER": $AllGuiTextures
static readonly "SCHEDULE_CARD_DARK": $AllGuiTextures
static readonly "TRAINMAP_TOGGLE_PANEL": $AllGuiTextures
static readonly "TRAINMAP_STATION_ORTHO": $AllGuiTextures
static readonly "SCHEDULE_STRIP_DOTTED": $AllGuiTextures
static readonly "JEI_HEAT_BAR": $AllGuiTextures
static readonly "SEQUENCER_AWAIT": $AllGuiTextures
static readonly "FACTORY_GAUGE_RESTOCK": $AllGuiTextures
static readonly "FROGPORT_EDIT_NAME": $AllGuiTextures
static readonly "TRAINMAP_STATION_DIAGO": $AllGuiTextures
static readonly "BRASS_FRAME_BOTTOM": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_EDIT": $AllGuiTextures
static readonly "TOOLBOX": $AllGuiTextures
static readonly "CLIPBOARD": $AllGuiTextures
static readonly "BRASS_FRAME_BR": $AllGuiTextures
static readonly "CLIPBOARD_ADDRESS_INACTIVE": $AllGuiTextures
static readonly "SCHEDULE_CARD_LIGHT": $AllGuiTextures
static readonly "HOTSLOT_SUPER_ACTIVE": $AllGuiTextures
static readonly "SEQUENCER_INSTRUCTION": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_NEW": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SEND_HOVER": $AllGuiTextures
static readonly "I_NEW_TRAIN": $AllGuiTextures
static readonly "SCHEMATIC": $AllGuiTextures
static readonly "BRASS_FRAME_RIGHT": $AllGuiTextures
static readonly "SEQUENCER_EMPTY": $AllGuiTextures
static readonly "SCHEMATICANNON_BOTTOM": $AllGuiTextures
static readonly "FROGPORT_SLOT": $AllGuiTextures
static readonly "BRASS_FRAME_BL": $AllGuiTextures
static readonly "SEQUENCER_DELAY": $AllGuiTextures
static readonly "VALUE_SETTINGS_WIDE_MILESTONE": $AllGuiTextures
static readonly "HOTSLOT_ARROW": $AllGuiTextures
static readonly "STATION_EDIT_TRAIN_NAME": $AllGuiTextures
static readonly "TOOLBELT_HOTBAR_ON": $AllGuiTextures
static readonly "SCHEMATICANNON_PROGRESS": $AllGuiTextures
static readonly "TRAIN_HUD_DIRECTION": $AllGuiTextures
static readonly "TOOLBELT_MAIN_SLOT": $AllGuiTextures
static readonly "SEQUENCER_END": $AllGuiTextures
static readonly "TRAINMAP_STATION_DIAGO_HIGHLIGHT": $AllGuiTextures
static readonly "COMPUTER": $AllGuiTextures
static readonly "JEI_LONG_ARROW": $AllGuiTextures
static readonly "PLAYER_INVENTORY": $AllGuiTextures
static readonly "HOTSLOT": $AllGuiTextures
static readonly "TOOLBELT_HOTBAR_OFF": $AllGuiTextures

public "getStartY"(): integer
public "getStartX"(): integer
public static "values"(): ($AllGuiTextures)[]
public static "valueOf"(arg0: StringJS): $AllGuiTextures
public "getLocation"(): $ResourceLocation
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $Color$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public "bind"(): void
get "startY"(): integer
get "startX"(): integer
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllGuiTextures$$Type = (("player_inventory") | ("wand_of_symmetry") | ("blockzapper") | ("terrainzapper") | ("terrainzapper_inactive_param") | ("logo") | ("curseforge_logo") | ("modrinth_logo") | ("schematic") | ("schematic_title") | ("schematic_slot") | ("schematic_prompt") | ("hud_background") | ("schematic_table") | ("schematic_table_progress") | ("schematicannon_top") | ("schematicannon_bottom") | ("schematicannon_progress") | ("schematicannon_checklist_progress") | ("schematicannon_highlight") | ("schematicannon_fuel") | ("schematicannon_fuel_creative") | ("threshold_switch") | ("threshold_switch_itemcount_inputs") | ("threshold_switch_misc_inputs") | ("threshold_switch_current_state") | ("filter") | ("attribute_filter") | ("package_filter") | ("postbox_header") | ("frogport_header") | ("frogport_slot") | ("frogport_edit_name") | ("frogport_bg") | ("toolbox") | ("toolbelt_slot") | ("toolbelt_slot_highlight") | ("toolbelt_main_slot") | ("toolbelt_empty_slot") | ("toolbelt_inactive_slot") | ("toolbelt_hotbar_off") | ("toolbelt_hotbar_on") | ("toolbelt_selected_off") | ("toolbelt_selected_on") | ("sequencer") | ("sequencer_instruction") | ("sequencer_delay") | ("sequencer_end") | ("sequencer_empty") | ("sequencer_await") | ("linked_controller") | ("blueprint") | ("clipboard") | ("clipboard_address") | ("clipboard_address_inactive") | ("data_gatherer") | ("data_area_start") | ("data_area_speech") | ("data_area") | ("data_area_end") | ("schedule") | ("schedule_card_dark") | ("schedule_card_medium") | ("schedule_card_light") | ("schedule_card_move_up") | ("schedule_card_move_down") | ("schedule_card_remove") | ("schedule_card_duplicate") | ("schedule_card_new") | ("schedule_condition_new") | ("schedule_condition_left") | ("schedule_condition_left_clean") | ("schedule_condition_middle") | ("schedule_condition_item") | ("schedule_condition_right") | ("schedule_condition_append") | ("schedule_scroll_left") | ("schedule_scroll_right") | ("schedule_strip_dark") | ("schedule_strip_light") | ("schedule_strip_wait") | ("schedule_strip_travel") | ("schedule_strip_dotted") | ("schedule_strip_end") | ("schedule_strip_action") | ("schedule_editor") | ("schedule_editor_additional_slot") | ("schedule_editor_inactive_slot") | ("schedule_pointer") | ("schedule_pointer_offscreen") | ("station") | ("station_assembling") | ("station_textbox_top") | ("station_textbox_middle") | ("station_textbox_bottom") | ("station_textbox_speech") | ("station_edit_name") | ("station_edit_train_name") | ("i_new_train") | ("i_disassemble_train") | ("i_assemble_train") | ("elevator_contact") | ("brass_frame_tl") | ("brass_frame_tr") | ("brass_frame_bl") | ("brass_frame_br") | ("brass_frame_left") | ("brass_frame_right") | ("brass_frame_top") | ("brass_frame_bottom") | ("value_settings_milestone") | ("value_settings_wide_milestone") | ("value_settings_bar") | ("value_settings_bar_bg") | ("value_settings_outer_bg") | ("value_settings_cursor_left") | ("value_settings_cursor") | ("value_settings_cursor_right") | ("value_settings_cursor_icon") | ("value_settings_label_bg") | ("factory_gauge_recipe") | ("factory_gauge_restock") | ("factory_gauge_bottom") | ("factory_gauge_set_item") | ("stock_keeper_request_header") | ("stock_keeper_request_body") | ("stock_keeper_request_footer") | ("stock_keeper_request_search") | ("stock_keeper_request_says") | ("stock_keeper_request_locked") | ("stock_keeper_request_unlocked") | ("stock_keeper_request_slot") | ("stock_keeper_request_blueprint_left") | ("stock_keeper_request_blueprint_middle") | ("stock_keeper_request_blueprint_right") | ("stock_keeper_request_send_hover") | ("stock_keeper_request_scroll_top") | ("stock_keeper_request_scroll_pad") | ("stock_keeper_request_scroll_mid") | ("stock_keeper_request_scroll_bot") | ("stock_keeper_request_banner_l") | ("stock_keeper_request_banner_m") | ("stock_keeper_request_banner_r") | ("stock_keeper_request_bg") | ("stock_keeper_category_hidden") | ("stock_keeper_category_shown") | ("numbers") | ("stock_keeper_category") | ("stock_keeper_category_says") | ("stock_keeper_category_header") | ("stock_keeper_category_edit") | ("stock_keeper_category_footer") | ("stock_keeper_category_new") | ("stock_keeper_category_entry") | ("stock_keeper_category_up") | ("stock_keeper_category_down") | ("redstone_requester") | ("jei_slot") | ("jei_chance_slot") | ("jei_catalyst_slot") | ("jei_arrow") | ("jei_long_arrow") | ("jei_down_arrow") | ("jei_light") | ("jei_question_mark") | ("jei_shadow") | ("blockzapper_upgrade_recipe") | ("jei_heat_bar") | ("jei_no_heat_bar") | ("button") | ("button_hover") | ("button_down") | ("button_green") | ("button_disabled") | ("indicator") | ("indicator_white") | ("indicator_green") | ("indicator_yellow") | ("indicator_red") | ("hotslot_arrow") | ("hotslot_arrow_bad") | ("hotslot") | ("hotslot_active") | ("hotslot_super_active") | ("speech_tooltip_background") | ("speech_tooltip_color") | ("train_hud_speed_bg") | ("train_hud_speed") | ("train_hud_throttle") | ("train_hud_throttle_pointer") | ("train_hud_frame") | ("train_hud_direction") | ("train_prompt_l") | ("train_prompt_r") | ("train_prompt") | ("trade_overlay") | ("placement_indicator_sheet") | ("trainmap_sprites") | ("trainmap_signal") | ("trainmap_station_ortho") | ("trainmap_station_diago") | ("trainmap_station_ortho_highlight") | ("trainmap_station_diago_highlight") | ("trainmap_toggle_panel") | ("trainmap_toggle_on") | ("trainmap_toggle_off") | ("computer"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllGuiTextures$$Original = $AllGuiTextures;}
declare module "com.simibubi.create.foundation.mixin.accessor.MobEffectInstanceAccessor" {
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"

export interface $MobEffectInstanceAccessor$$Interface {

(): $MobEffectInstance$$Type
}

export class $MobEffectInstanceAccessor implements $MobEffectInstanceAccessor$$Interface {
 "create$getHiddenEffect"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceAccessor$$Type = (() => $MobEffectInstance$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectInstanceAccessor$$Original = $MobEffectInstanceAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.ItemStackHandlerAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ItemStackHandlerAccessor$$Interface {

(): $NonNullList$$Type<($ItemStack$$Type)>
}

export class $ItemStackHandlerAccessor implements $ItemStackHandlerAccessor$$Interface {
 "create$getStacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandlerAccessor$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackHandlerAccessor$$Original = $ItemStackHandlerAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.SystemReportAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $SystemReportAccessor$$Interface {

(): $Map$$Type<(StringJS), (StringJS)>
get "entries"(): $Map<(StringJS), (StringJS)>
get "OPERATING_SYSTEM"(): StringJS
get "JAVA_VERSION"(): StringJS
}

export class $SystemReportAccessor implements $SystemReportAccessor$$Interface {
 "getEntries"(): $Map<(StringJS), (StringJS)>
static "getOPERATING_SYSTEM"(): StringJS
static "getJAVA_VERSION"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SystemReportAccessor$$Type = (() => $Map$$Type<(StringJS), (StringJS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SystemReportAccessor$$Original = $SystemReportAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.SmartBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$IInteractionChecker$$Interface} from "com.simibubi.create.foundation.utility.IInteractionChecker"
import {$List$$Type} from "java.util.List"
import {$CachedRenderBBBlockEntity} from "com.simibubi.create.foundation.blockEntity.CachedRenderBBBlockEntity"
import {$BehaviourType$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VirtualBlockEntity$$Interface} from "net.createmod.ponder.api.VirtualBlockEntity"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockEntityItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement"
import {$PartialSafeNBT$$Interface} from "com.simibubi.create.api.schematic.nbt.PartialSafeNBT"
import {$CreateAdvancement$$Type} from "com.simibubi.create.foundation.advancement.CreateAdvancement"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT$$Interface, $IInteractionChecker$$Interface, $SpecialBlockEntityItemRequirement$$Interface, $VirtualBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "attachBehaviourLate"(arg0: $BlockEntityBehaviour$$Type): void
public "addBehavioursDeferred"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "award"(arg0: $CreateAdvancement$$Type): void
public "setRemoved"(): void
public "invalidate"(): void
public "remove"(): void
public "isVirtual"(): boolean
public "initialize"(): void
public "destroy"(): void
public "tick"(): void
public "lazyTick"(): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "sendToMenu"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "readClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setLazyTickRate"(arg0: integer): void
public "forEachBehaviour"(arg0: $Consumer$$Type<($BlockEntityBehaviour)>): void
public "writeClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getBehaviour"<T extends $BlockEntityBehaviour>(arg0: $BehaviourType$$Type<(T)>): T
public "getAllBehaviours"(): $Collection<($BlockEntityBehaviour)>
public "getRequiredItems"(arg0: $BlockState$$Type): $ItemRequirement
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "markVirtual"(): void
public "refreshBlockState"(): void
public "removeBehaviour"(arg0: $BehaviourType$$Type<(never)>): void
public "canPlayerUse"(arg0: $Player$$Type): boolean
public "awardIfNear"(arg0: $CreateAdvancement$$Type, arg1: integer): void
public "registerAwardables"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>, ...arg1: ($CreateAdvancement$$Type)[]): void
public "isChunkUnloaded"(): boolean
get "removed"(): void
get "virtual"(): boolean
set "lazyTickRate"(value: integer)
get "allBehaviours"(): $Collection<($BlockEntityBehaviour)>
get "chunkUnloaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBlockEntity$$Type = ($SmartBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartBlockEntity$$Original = $SmartBlockEntity;}
declare module "com.simibubi.create.foundation.mixin.accessor.ServerLevelAccessor" {
import {$EntityTickList, $EntityTickList$$Type} from "net.minecraft.world.level.entity.EntityTickList"

export interface $ServerLevelAccessor$$Interface {

(): $EntityTickList$$Type
}

export class $ServerLevelAccessor implements $ServerLevelAccessor$$Interface {
 "create$getEntityTickList"(): $EntityTickList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $EntityTickList$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevelAccessor$$Original = $ServerLevelAccessor;}
declare module "com.simibubi.create.foundation.block.IHaveBigOutline" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHaveBigOutline$$Interface {
}

export class $IHaveBigOutline implements $IHaveBigOutline$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveBigOutline$$Type = ($IHaveBigOutline);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveBigOutline$$Original = $IHaveBigOutline;}
declare module "com.simibubi.create.foundation.item.SmartInventory" {
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemHandlerContainer} from "com.simibubi.create.foundation.blockEntity.ItemHandlerContainer"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SyncedBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$IItemHandlerModifiable$$Type, $IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SmartInventory extends $ItemHandlerContainer implements $IItemHandlerModifiable$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: $IItemHandlerModifiable$$Type, arg1: integer, arg2: boolean)
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type, arg2: integer, arg3: boolean, arg4: $BiPredicate$$Type<(integer), ($ItemStack)>)
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type, arg2: integer, arg3: boolean)
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type, arg2: $BiPredicate$$Type<(integer), ($ItemStack)>)
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type)

public "whenContentsChanged"(arg0: $Consumer$$Type<(integer)>): $SmartInventory
public "forbidInsertion"(): $SmartInventory
public "allowInsertion"(): $SmartInventory
public "withMaxStackSize"(arg0: integer): $SmartInventory
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "allowExtraction"(): $SmartInventory
public "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "forbidExtraction"(): $SmartInventory
public "getBlock"(level: $Level$$Type): $LevelBlock
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "isMutable"(): boolean
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "self"(): $IItemHandler
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public "getHeight"(): integer
public "getWidth"(): integer
public "asContainer"(): $Container
public "setChanged"(): void
public "clear"(): void
public static "tryClear"(arg0: any): void
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartInventory$$Type = ($SmartInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartInventory$$Original = $SmartInventory;}
declare module "com.simibubi.create.foundation.block.ProperWaterloggedBlock" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ProperWaterloggedBlock$$Interface extends $SimpleWaterloggedBlock$$Interface {
get "pickupSound"(): $Optional<($SoundEvent)>
}

export class $ProperWaterloggedBlock implements $ProperWaterloggedBlock$$Interface {
static readonly "WATERLOGGED": $BooleanProperty

static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
 "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
 "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
 "fluidState"(arg0: $BlockState$$Type): $FluidState
 "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
 "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
 "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProperWaterloggedBlock$$Type = ($ProperWaterloggedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProperWaterloggedBlock$$Original = $ProperWaterloggedBlock;}
declare module "com.simibubi.create.foundation.advancement.CreateAdvancement$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CreateAdvancement$Builder {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateAdvancement$Builder$$Type = ($CreateAdvancement$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateAdvancement$Builder$$Original = $CreateAdvancement$Builder;}
declare module "com.simibubi.create.foundation.mixin.accessor.ItemFrameAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemFrameAccessor$$Interface {

(): $ItemStack$$Type
}

export class $ItemFrameAccessor implements $ItemFrameAccessor$$Interface {
 "create$getFrameItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameAccessor$$Type = (() => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFrameAccessor$$Original = $ItemFrameAccessor;}
declare module "com.simibubi.create.foundation.utility.IInteractionChecker" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IInteractionChecker$$Interface {

(arg0: $Player): boolean
}

export class $IInteractionChecker implements $IInteractionChecker$$Interface {
 "canPlayerUse"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInteractionChecker$$Type = ((arg0: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInteractionChecker$$Original = $IInteractionChecker;}
declare module "com.simibubi.create.foundation.mixin.accessor.UseOnContextAccessor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"

export interface $UseOnContextAccessor$$Interface {

(): $BlockHitResult$$Type
}

export class $UseOnContextAccessor implements $UseOnContextAccessor$$Interface {
 "create$getHitResult"(): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseOnContextAccessor$$Type = (() => $BlockHitResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseOnContextAccessor$$Original = $UseOnContextAccessor;}
declare module "com.simibubi.create.foundation.advancement.CreateAdvancement" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CreateAdvancement$Builder$$Type} from "com.simibubi.create.foundation.advancement.CreateAdvancement$Builder"

export class $CreateAdvancement {
constructor(arg0: StringJS, arg1: $UnaryOperator$$Type<($CreateAdvancement$Builder)>)

public "awardTo"(arg0: $Player$$Type): void
public "isAlreadyAwardedTo"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateAdvancement$$Type = ($CreateAdvancement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateAdvancement$$Original = $CreateAdvancement;}
