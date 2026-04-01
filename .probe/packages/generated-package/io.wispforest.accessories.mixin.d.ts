declare module "io.wispforest.accessories.mixin.RegistryOpsAccessor" {
import {$RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup$$Type} from "net.minecraft.resources.RegistryOps$RegistryInfoLookup"

export interface $RegistryOpsAccessor$$Interface {

(): $RegistryOps$RegistryInfoLookup$$Type
}

export class $RegistryOpsAccessor implements $RegistryOpsAccessor$$Interface {
 "lookupProvider"(): $RegistryOps$RegistryInfoLookup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryOpsAccessor$$Type = (() => $RegistryOps$RegistryInfoLookup$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryOpsAccessor$$Original = $RegistryOpsAccessor;}
declare module "io.wispforest.accessories.mixin.LivingEntityAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $LivingEntityAccessor$$Interface {

(arg0: $ItemStack): void
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "accessors$breakItem"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ((arg0: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
declare module "io.wispforest.accessories.mixin.ServerChunkLoadingManagerAccessor" {
import {$EntityTrackerAccessor, $EntityTrackerAccessor$$Type} from "io.wispforest.accessories.mixin.EntityTrackerAccessor"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $ServerChunkLoadingManagerAccessor$$Interface {

(): $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>
}

export class $ServerChunkLoadingManagerAccessor implements $ServerChunkLoadingManagerAccessor$$Interface {
 "accessories$getEntityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkLoadingManagerAccessor$$Type = (() => $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerChunkLoadingManagerAccessor$$Original = $ServerChunkLoadingManagerAccessor;}
declare module "io.wispforest.accessories.mixin.client.AbstractContainerScreenAccessor" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"

export interface $AbstractContainerScreenAccessor$$Interface {
}

export class $AbstractContainerScreenAccessor implements $AbstractContainerScreenAccessor$$Interface {
 "accessories$getQuickCraftingType"(): integer
 "accessories$getDraggingItem"(): $ItemStack
 "accessories$isSplittingStack"(): boolean
 "accessories$topPos"(): integer
 "accessories$leftPos"(): integer
 "accessories$getClickedSlot"(): $Slot
 "accessories$recalculateQuickCraftRemaining"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$$Type = ($AbstractContainerScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerScreenAccessor$$Original = $AbstractContainerScreenAccessor;}
declare module "io.wispforest.accessories.mixin.StateHolderAccessor" {
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $StateHolderAccessor$$Interface<O, S> {
}

export class $StateHolderAccessor<O, S> implements $StateHolderAccessor$$Interface {
 "accessories$owner"(): O
 "accessories$propertiesCodec"(): $MapCodec<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateHolderAccessor$$Type<O, S> = ($StateHolderAccessor<(O), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateHolderAccessor$$Original<O, S> = $StateHolderAccessor<(O), (S)>;}
declare module "io.wispforest.accessories.mixin.EntityTrackerAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$$Type} from "net.minecraft.server.network.ServerPlayerConnection"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $EntityTrackerAccessor$$Interface {

(): $Set$$Type<($ServerPlayerConnection$$Type)>
}

export class $EntityTrackerAccessor implements $EntityTrackerAccessor$$Interface {
 "accessories$getSeenBy"(): $Set<($ServerPlayerConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTrackerAccessor$$Type = (() => $Set$$Type<($ServerPlayerConnection$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTrackerAccessor$$Original = $EntityTrackerAccessor;}
declare module "io.wispforest.accessories.mixin.client.LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$List, $List$$Type} from "java.util.List"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"

export interface $LivingEntityRendererAccessor$$Interface<T extends $LivingEntity, M extends $EntityModel<(object)>> {

(): $List$$Type<($RenderLayer$$Type<(T), (M)>)>
get "layers"(): $List<($RenderLayer<(T), (M)>)>
}

export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(object)>> implements $LivingEntityRendererAccessor$$Interface {
 "getLayers"(): $List<($RenderLayer<(T), (M)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$$Type<T, M> = (() => $List$$Type<($RenderLayer$$Type<(T), (M)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRendererAccessor$$Original<T, M> = $LivingEntityRendererAccessor<(T), (M)>;}
declare module "io.wispforest.accessories.mixin.client.ModelPartAccessor" {
import {$Map} from "java.util.Map"
import {$ModelPart$Cube} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$List} from "java.util.List"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartAccessor$$Interface {
get "children"(): $Map<(StringJS), ($ModelPart)>
get "cubes"(): $List<($ModelPart$Cube)>
}

export class $ModelPartAccessor implements $ModelPartAccessor$$Interface {
 "getChildren"(): $Map<(StringJS), ($ModelPart)>
 "getCubes"(): $List<($ModelPart$Cube)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$$Type = ($ModelPartAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartAccessor$$Original = $ModelPartAccessor;}
declare module "io.wispforest.accessories.mixin.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor$$Interface {

(arg0: integer): void
}

export class $SlotAccessor implements $SlotAccessor$$Interface {
 "accessories$setY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotAccessor$$Original = $SlotAccessor;}
declare module "io.wispforest.accessories.mixin.ItemStackAccessor" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$PatchedDataComponentMap} from "net.minecraft.core.component.PatchedDataComponentMap"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ItemStackAccessor$$Interface {
}

export class $ItemStackAccessor implements $ItemStackAccessor$$Interface {
 "accessories$components"(): $PatchedDataComponentMap
 "accessories$addModifierTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: $Player$$Type, arg2: $Holder$$Type<($Attribute)>, arg3: $AttributeModifier$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackAccessor$$Type = ($ItemStackAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackAccessor$$Original = $ItemStackAccessor;}
declare module "io.wispforest.accessories.mixin.DelegatingOpsAccessor" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"

export interface $DelegatingOpsAccessor$$Interface<T> {

(): $DynamicOps$$Type<(T)>
}

export class $DelegatingOpsAccessor<T> implements $DelegatingOpsAccessor$$Interface {
 "delegate"(): $DynamicOps<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatingOpsAccessor$$Type<T> = (() => $DynamicOps$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DelegatingOpsAccessor$$Original<T> = $DelegatingOpsAccessor<(T)>;}
declare module "io.wispforest.accessories.mixin.client.GuiGraphicsAccessor" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $GuiGraphicsAccessor$$Interface {

(arg0: $TextureAtlasSprite, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
}

export class $GuiGraphicsAccessor implements $GuiGraphicsAccessor$$Interface {
 "callBlitSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphicsAccessor$$Type = ((arg0: $TextureAtlasSprite, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphicsAccessor$$Original = $GuiGraphicsAccessor;}
declare module "io.wispforest.accessories.mixin.CraftingMenuAccessor" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export interface $CraftingMenuAccessor$$Interface {
}

export class $CraftingMenuAccessor implements $CraftingMenuAccessor$$Interface {
static "accessories$slotChangedCraftingGrid"(abstractContainerMenu: $AbstractContainerMenu$$Type, level: $Level$$Type, player: $Player$$Type, craftingContainer: $CraftingContainer$$Type, resultContainer: $ResultContainer$$Type, recipeHolder: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenuAccessor$$Type = ($CraftingMenuAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingMenuAccessor$$Original = $CraftingMenuAccessor;}
