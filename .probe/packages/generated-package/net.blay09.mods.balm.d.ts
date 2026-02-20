declare module "net.blay09.mods.balm.api.event.ConfigLoadedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigLoadedEvent extends $BalmEvent {
constructor(arg0: $BalmConfigSchema$$Type)

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigLoadedEvent$$Type = ($ConfigLoadedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigLoadedEvent$$Original = $ConfigLoadedEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"

export class $ScreenMouseEvent$Click extends $ScreenMouseEvent {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Click$$Type = ($ScreenMouseEvent$Click);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Click$$Original = $ScreenMouseEvent$Click;}
declare module "net.blay09.mods.balm.api.config.schema.builder.EnumConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ConfiguredEnum$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredEnum"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $EnumConfigProperty<T extends $Enum<(object)>> extends $AbstractConfigProperty<(T)> implements $ConfiguredEnum$$Interface<(T)> {
constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: T)

public "type"(): $Class<(T)>
public "defaultValue"(): any
public "codec"(): $Codec<(T)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
public "get"(arg0: $LoadedConfig$$Type): T
public "get"(): T
public "set"(arg0: T): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumConfigProperty$$Type<T> = ($EnumConfigProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumConfigProperty$$Original<T> = $EnumConfigProperty<(T)>;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenKeyEvent extends $BalmEvent {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getModifiers"(): integer
public "getKey"(): integer
public "getScanCode"(): integer
public "getScreen"(): $Screen
get "modifiers"(): integer
get "key"(): integer
get "scanCode"(): integer
get "screen"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$$Type = ($ScreenKeyEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyEvent$$Original = $ScreenKeyEvent;}
declare module "net.blay09.mods.balm.api.event.LivingDeathEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent extends $BalmEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

public "getEntity"(): $LivingEntity
public "getDamageSource"(): $DamageSource
get "entity"(): $LivingEntity
get "damageSource"(): $DamageSource
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
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenInitEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent"

export class $ScreenInitEvent$Post extends $ScreenInitEvent {
constructor(arg0: $Screen$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInitEvent$Post$$Type = ($ScreenInitEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenInitEvent$Post$$Original = $ScreenInitEvent$Post;}
declare module "net.blay09.mods.balm.api.config.schema.ConfigSchemaBuilder" {
import {$ConfigPropertyBuilder} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ConfigCategoryBuilder} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConfigSchemaImpl} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$PropertyHolderBuilder$$Interface} from "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder"
import {$ConfiguredProperty} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfigCategory} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"
import {$BalmConfigSchema$$Interface} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $ConfigSchemaBuilder$$Interface extends $PropertyHolderBuilder$$Interface, $BalmConfigSchema$$Interface {
}

export class $ConfigSchemaBuilder implements $ConfigSchemaBuilder$$Interface {
 "category"(arg0: StringJS): $ConfigCategoryBuilder
 "property"(arg0: StringJS): $ConfigPropertyBuilder
 "defaults"(): $LoadedConfig
static "create"(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
 "identifier"(): $ResourceLocation
 "categories"(): $Collection<($ConfigCategory)>
 "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(never)>
 "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(never)>
 "rootProperties"(): $Collection<($ConfiguredProperty<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSchemaBuilder$$Type = ($ConfigSchemaBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigSchemaBuilder$$Original = $ConfigSchemaBuilder;}
declare module "net.blay09.mods.balm.api.event.client.RecipesUpdatedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

/**
 * 
 * @deprecated
 */
export class $RecipesUpdatedEvent extends $BalmEvent {
constructor(arg0: $RecipeManager$$Type, arg1: $RegistryAccess$$Type)

public "getRecipeManager"(): $RecipeManager
public "getRegistryAccess"(): $RegistryAccess
get "recipeManager"(): $RecipeManager
get "registryAccess"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipesUpdatedEvent$$Type = ($RecipesUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipesUpdatedEvent$$Original = $RecipesUpdatedEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Release} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release"

export class $ScreenKeyEvent$Release$Pre extends $ScreenKeyEvent$Release {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Release$Pre$$Type = ($ScreenKeyEvent$Release$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyEvent$Release$Pre$$Original = $ScreenKeyEvent$Release$Pre;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Release} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Post extends $ScreenMouseEvent$Release {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Release$Post$$Type = ($ScreenMouseEvent$Release$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Release$Post$$Original = $ScreenMouseEvent$Release$Post;}
declare module "net.blay09.mods.balm.api.event.server.ServerReloadedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $ServerReloadedEvent extends $BalmEvent {
constructor(arg0: $ReloadableServerResources$$Type)

public "getResources"(): $ReloadableServerResources
public "getServer"(): $MinecraftServer
get "resources"(): $ReloadableServerResources
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerReloadedEvent$$Type = ($ServerReloadedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerReloadedEvent$$Original = $ServerReloadedEvent;}
declare module "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder" {
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"

export interface $PropertyHolderBuilder$$Interface {

(arg0: StringJS): $ConfigPropertyBuilder$$Type
}

export class $PropertyHolderBuilder implements $PropertyHolderBuilder$$Interface {
 "property"(arg0: StringJS): $ConfigPropertyBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyHolderBuilder$$Type = ((arg0: StringJS) => $ConfigPropertyBuilder$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PropertyHolderBuilder$$Original = $PropertyHolderBuilder;}
declare module "net.blay09.mods.balm.api.config.schema.builder.ListConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredList$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredList"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ListConfigProperty<T> extends $AbstractConfigProperty<($List<(T)>)> implements $ConfiguredList$$Interface<(T)> {
constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: $Class$$Type<(T)>, arg2: $List$$Type<(T)>)

public "type"(): $Class<(never)>
public "defaultValue"(): any
public "nestedType"(): $Class<(T)>
public "codec"(): $Codec<($List<(T)>)>
public "streamCodec"(): $StreamCodec<($ByteBuf), ($List<(T)>)>
public "get"(arg0: $LoadedConfig$$Type): $List<(T)>
public "get"(): $List<(T)>
public "set"(arg0: $List$$Type<(T)>): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListConfigProperty$$Type<T> = ($ListConfigProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListConfigProperty$$Original<T> = $ListConfigProperty<(T)>;}
declare module "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfigSchemaImpl} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $AbstractConfigProperty<T> implements $ConfiguredProperty$$Interface<(T)> {
constructor(arg0: $ConfigPropertyBuilder$$Type)

public "name"(): StringJS
public "comment"(): StringJS
public "category"(): StringJS
public "parentSchema"(): $ConfigSchemaImpl
public "synced"(): boolean
public "type"(): $Class<(never)>
public "defaultValue"(): T
public "getRaw"(arg0: $LoadedConfig$$Type): T
public "codec"(): $Codec<(T)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
public "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConfigProperty$$Type<T> = ($AbstractConfigProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractConfigProperty$$Original<T> = $AbstractConfigProperty<(T)>;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredString" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredString$$Interface extends $ConfiguredProperty$$Interface<(StringJS)> {
}

export class $ConfiguredString implements $ConfiguredString$$Interface {
 "get"(arg0: $LoadedConfig$$Type): StringJS
 "get"(): StringJS
 "set"(arg0: StringJS): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): StringJS
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): StringJS
 "codec"(): $Codec<(StringJS)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (StringJS)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredString$$Type = ($ConfiguredString);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredString$$Original = $ConfiguredString;}
declare module "net.blay09.mods.balm.api.event.TossItemEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $TossItemEvent extends $BalmEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type)

public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
get "itemStack"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TossItemEvent$$Type = ($TossItemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TossItemEvent$$Original = $TossItemEvent;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredDouble" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredDouble$$Interface extends $ConfiguredProperty$$Interface<(double)> {
}

export class $ConfiguredDouble implements $ConfiguredDouble$$Interface {
 "get"(arg0: $LoadedConfig$$Type): double
 "get"(): double
 "set"(arg0: double): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): double
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): double
 "codec"(): $Codec<(double)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (double)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredDouble$$Type = ($ConfiguredDouble);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredDouble$$Original = $ConfiguredDouble;}
declare module "net.blay09.mods.balm.api.event.PlayerLoginEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerLoginEvent extends $BalmEvent {
constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerLoginEvent$$Type = ($PlayerLoginEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerLoginEvent$$Original = $PlayerLoginEvent;}
declare module "net.blay09.mods.balm.mixin.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor$$Interface {
set "y"(value: integer)
set "x"(value: integer)
}

export class $SlotAccessor implements $SlotAccessor$$Interface {
 "setY"(arg0: integer): void
 "setX"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$$Type = ($SlotAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotAccessor$$Original = $SlotAccessor;}
declare module "net.blay09.mods.balm.api.event.CropGrowEvent$Post" {
import {$CropGrowEvent} from "net.blay09.mods.balm.api.event.CropGrowEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent$Post extends $CropGrowEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

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
declare module "net.blay09.mods.balm.mixin.AbstractContainerScreenAccessor" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $AbstractContainerScreenAccessor$$Interface {
get "leftPos"(): integer
get "topPos"(): integer
get "imageHeight"(): integer
get "imageWidth"(): integer
get "hoveredSlot"(): $Slot
}

export class $AbstractContainerScreenAccessor implements $AbstractContainerScreenAccessor$$Interface {
 "getLeftPos"(): integer
 "getTopPos"(): integer
 "callIsHovering"(arg0: $Slot$$Type, arg1: double, arg2: double): boolean
 "getImageHeight"(): integer
 "getImageWidth"(): integer
 "callRenderSlot"(arg0: $GuiGraphics$$Type, arg1: $Slot$$Type): void
 "getHoveredSlot"(): $Slot
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
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag$Pre" {
import {$ScreenMouseEvent$Drag} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Drag$Pre extends $ScreenMouseEvent$Drag {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Drag$Pre$$Type = ($ScreenMouseEvent$Drag$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Drag$Pre$$Original = $ScreenMouseEvent$Drag$Pre;}
declare module "net.blay09.mods.balm.api.event.server.ServerStartedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStartedEvent extends $BalmEvent {
constructor(arg0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
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
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag$Post" {
import {$ScreenMouseEvent$Drag} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Drag$Post extends $ScreenMouseEvent$Drag {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Drag$Post$$Type = ($ScreenMouseEvent$Drag$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Drag$Post$$Original = $ScreenMouseEvent$Drag$Post;}
declare module "net.blay09.mods.balm.api.event.client.OpenScreenEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $OpenScreenEvent extends $BalmEvent {
constructor(arg0: $Screen$$Type)

public "setScreen"(arg0: $Screen$$Type): void
public "getNewScreen"(): $Screen
public "getScreen"(): $Screen
set "screen"(value: $Screen$$Type)
get "newScreen"(): $Screen
get "screen"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenScreenEvent$$Type = ($OpenScreenEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpenScreenEvent$$Original = $OpenScreenEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenInitEvent extends $BalmEvent {
constructor(arg0: $Screen$$Type)

public "getScreen"(): $Screen
get "screen"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInitEvent$$Type = ($ScreenInitEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenInitEvent$$Original = $ScreenInitEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Release} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Pre extends $ScreenMouseEvent$Release {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Release$Pre$$Type = ($ScreenMouseEvent$Release$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Release$Pre$$Original = $ScreenMouseEvent$Release$Pre;}
declare module "net.blay09.mods.balm.api.event.CropGrowEvent$Pre" {
import {$CropGrowEvent} from "net.blay09.mods.balm.api.event.CropGrowEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent$Pre extends $CropGrowEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

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
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"

export class $ScreenMouseEvent$Release extends $ScreenMouseEvent {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Release$$Type = ($ScreenMouseEvent$Release);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Release$$Original = $ScreenMouseEvent$Release;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredInt" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredInt$$Interface extends $ConfiguredProperty$$Interface<(integer)> {
}

export class $ConfiguredInt implements $ConfiguredInt$$Interface {
 "get"(arg0: $LoadedConfig$$Type): integer
 "get"(): integer
 "set"(arg0: integer): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): integer
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): integer
 "codec"(): $Codec<(integer)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (integer)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredInt$$Type = ($ConfiguredInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredInt$$Original = $ConfiguredInt;}
declare module "net.blay09.mods.balm.api.event.BreakBlockEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BreakBlockEvent extends $BalmEvent {
constructor(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type)

public "getState"(): $BlockState
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getBlockEntity"(): $BlockEntity
public "getPlayer"(): $Player
get "state"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
get "blockEntity"(): $BlockEntity
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakBlockEvent$$Type = ($BreakBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BreakBlockEvent$$Original = $BreakBlockEvent;}
declare module "net.blay09.mods.balm.api.event.LivingDamageEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDamageEvent extends $BalmEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: float)

public "getEntity"(): $LivingEntity
public "getDamageSource"(): $DamageSource
public "setDamageAmount"(arg0: float): void
public "getDamageAmount"(): float
get "entity"(): $LivingEntity
get "damageSource"(): $DamageSource
set "damageAmount"(value: float)
get "damageAmount"(): float
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
declare module "net.blay09.mods.balm.api.event.client.ConnectedToServerEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ConnectedToServerEvent extends $BalmEvent {
constructor(arg0: $Minecraft$$Type)

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedToServerEvent$$Type = ($ConnectedToServerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectedToServerEvent$$Original = $ConnectedToServerEvent;}
declare module "net.blay09.mods.balm.api.event.client.ClientStartedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ClientStartedEvent extends $BalmEvent {
constructor(arg0: $Minecraft$$Type)

public "getMinecraft"(): $Minecraft
get "minecraft"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientStartedEvent$$Type = ($ClientStartedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientStartedEvent$$Original = $ClientStartedEvent;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredBoolean" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredBoolean$$Interface extends $ConfiguredProperty$$Interface<(boolean)> {
}

export class $ConfiguredBoolean implements $ConfiguredBoolean$$Interface {
 "get"(arg0: $LoadedConfig$$Type): boolean
 "get"(): boolean
 "set"(arg0: boolean): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): boolean
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): boolean
 "codec"(): $Codec<(boolean)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (boolean)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredBoolean$$Type = ($ConfiguredBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredBoolean$$Original = $ConfiguredBoolean;}
declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent$Foreground" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ContainerScreenDrawEvent} from "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent"

export class $ContainerScreenDrawEvent$Foreground extends $ContainerScreenDrawEvent {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenDrawEvent$Foreground$$Type = ($ContainerScreenDrawEvent$Foreground);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenDrawEvent$Foreground$$Original = $ContainerScreenDrawEvent$Foreground;}
declare module "net.blay09.mods.balm.api.event.ItemCraftedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $ItemCraftedEvent extends $BalmEvent {
constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Container$$Type)

public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getCraftMatrix"(): $Container
get "itemStack"(): $ItemStack
get "player"(): $Player
get "craftMatrix"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCraftedEvent$$Type = ($ItemCraftedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCraftedEvent$$Original = $ItemCraftedEvent;}
declare module "net.blay09.mods.balm.api.config.LoadedConfig" {
import {$MutableLoadedConfig} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $LoadedConfig$$Interface {
}

export class $LoadedConfig implements $LoadedConfig$$Interface {
 "mutable"(arg0: $BalmConfigSchema$$Type): $MutableLoadedConfig
 "getRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedConfig$$Type = ($LoadedConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoadedConfig$$Original = $LoadedConfig;}
declare module "net.blay09.mods.balm.api.config.schema.builder.DoubleConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredDouble$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredDouble"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $DoubleConfigProperty extends $AbstractConfigProperty<(double)> implements $ConfiguredDouble$$Interface {
static readonly "CODEC": $Codec<(double)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: double)

public "type"(): $Class<(double)>
public "defaultValue"(): double
public "codec"(): $Codec<(double)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (double)>
public "get"(arg0: $LoadedConfig$$Type): double
public "get"(): double
public "set"(arg0: double): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConfigProperty$$Type = ($DoubleConfigProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleConfigProperty$$Original = $DoubleConfigProperty;}
declare module "net.blay09.mods.balm.api.entity.BalmEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $BalmEntity$$Interface {
get "fabricBalmData"(): $CompoundTag
set "fabricBalmData"(value: $CompoundTag$$Type)
}

export class $BalmEntity implements $BalmEntity$$Interface {
 "getFabricBalmData"(): $CompoundTag
 "setFabricBalmData"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmEntity$$Type = ($BalmEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BalmEntity$$Original = $BalmEntity;}
declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ContainerScreenDrawEvent extends $BalmEvent {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

public "getMouseY"(): integer
public "getMouseX"(): integer
public "getGuiGraphics"(): $GuiGraphics
public "getScreen"(): $Screen
get "mouseY"(): integer
get "mouseX"(): integer
get "guiGraphics"(): $GuiGraphics
get "screen"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenDrawEvent$$Type = ($ContainerScreenDrawEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenDrawEvent$$Original = $ContainerScreenDrawEvent;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredList" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$NestedTypeHolder$$Interface} from "net.blay09.mods.balm.api.config.schema.NestedTypeHolder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredList$$Interface<T> extends $ConfiguredProperty$$Interface<($List<(T)>)>, $NestedTypeHolder$$Interface<(T)> {
}

export class $ConfiguredList<T> implements $ConfiguredList$$Interface {
 "get"(arg0: $LoadedConfig$$Type): $List<(T)>
 "get"(): $List<(T)>
 "set"(arg0: $List$$Type<(T)>): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): $List<(T)>
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): $List<(T)>
 "codec"(): $Codec<($List<(T)>)>
 "streamCodec"(): $StreamCodec<($ByteBuf), ($List<(T)>)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
 "synced"(): boolean
 "nestedType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredList$$Type<T> = ($ConfiguredList<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredList$$Original<T> = $ConfiguredList<(T)>;}
declare module "net.blay09.mods.balm.api.config.schema.BalmConfigSchema" {
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConfigSchemaImpl} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$ConfiguredProperty} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfigCategory} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"

export interface $BalmConfigSchema$$Interface {
}

export class $BalmConfigSchema implements $BalmConfigSchema$$Interface {
 "defaults"(): $LoadedConfig
static "create"(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
 "identifier"(): $ResourceLocation
 "categories"(): $Collection<($ConfigCategory)>
 "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(never)>
 "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(never)>
 "rootProperties"(): $Collection<($ConfiguredProperty<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmConfigSchema$$Type = ($BalmConfigSchema);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BalmConfigSchema$$Original = $BalmConfigSchema;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent extends $BalmEvent {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

public "getMouseY"(): double
public "getMouseX"(): double
public "getScreen"(): $Screen
public "getButton"(): integer
get "mouseY"(): double
get "mouseX"(): double
get "screen"(): $Screen
get "button"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$$Type = ($ScreenMouseEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$$Original = $ScreenMouseEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Release} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release"

export class $ScreenKeyEvent$Release$Post extends $ScreenKeyEvent$Release {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Release$Post$$Type = ($ScreenKeyEvent$Release$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyEvent$Release$Post$$Original = $ScreenKeyEvent$Release$Post;}
declare module "net.blay09.mods.balm.api.event.LivingFallEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingFallEvent extends $BalmEvent {
constructor(arg0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
public "setFallDamageOverride"(arg0: float): void
public "getFallDamageOverride"(): float
get "entity"(): $LivingEntity
set "fallDamageOverride"(value: float)
get "fallDamageOverride"(): float
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
declare module "net.blay09.mods.balm.api.event.UseBlockEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $UseBlockEvent extends $BalmEvent {
constructor(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $InteractionHand$$Type, arg3: $BlockHitResult$$Type)

public "setResult"(arg0: $InteractionResult$$Type): void
public "getLevel"(): $Level
public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getPlayer"(): $Player
public "getInteractionResult"(): $InteractionResult
set "result"(value: $InteractionResult$$Type)
get "level"(): $Level
get "hand"(): $InteractionHand
get "hitResult"(): $BlockHitResult
get "player"(): $Player
get "interactionResult"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseBlockEvent$$Type = ($UseBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseBlockEvent$$Original = $UseBlockEvent;}
declare module "net.blay09.mods.balm.api.event.client.RenderHandEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export class $RenderHandEvent extends $BalmEvent {
constructor(arg0: $InteractionHand$$Type, arg1: $ItemStack$$Type, arg2: float)

public "getHand"(): $InteractionHand
public "getItemStack"(): $ItemStack
public "getSwingProgress"(): float
get "hand"(): $InteractionHand
get "itemStack"(): $ItemStack
get "swingProgress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHandEvent$$Type = ($RenderHandEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderHandEvent$$Original = $RenderHandEvent;}
declare module "net.blay09.mods.balm.api.config.schema.builder.IntConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredInt$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredInt"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $IntConfigProperty extends $AbstractConfigProperty<(integer)> implements $ConfiguredInt$$Interface {
static readonly "CODEC": $Codec<(integer)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: integer)

public "type"(): $Class<(integer)>
public "defaultValue"(): integer
public "codec"(): $Codec<(integer)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (integer)>
public "get"(arg0: $LoadedConfig$$Type): integer
public "get"(): integer
public "set"(arg0: integer): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConfigProperty$$Type = ($IntConfigProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntConfigProperty$$Original = $IntConfigProperty;}
declare module "net.blay09.mods.balm.api.config.schema.builder.FloatConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFloat$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredFloat"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $FloatConfigProperty extends $AbstractConfigProperty<(float)> implements $ConfiguredFloat$$Interface {
static readonly "CODEC": $Codec<(float)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: float)

public "type"(): $Class<(float)>
public "defaultValue"(): float
public "codec"(): $Codec<(float)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (float)>
public "get"(arg0: $LoadedConfig$$Type): float
public "get"(): float
public "set"(arg0: float): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatConfigProperty$$Type = ($FloatConfigProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatConfigProperty$$Original = $FloatConfigProperty;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Click} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Pre extends $ScreenMouseEvent$Click {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Click$Pre$$Type = ($ScreenMouseEvent$Click$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Click$Pre$$Original = $ScreenMouseEvent$Click$Pre;}
declare module "net.blay09.mods.balm.api.event.EntityAddedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityAddedEvent extends $BalmEvent {
constructor(arg0: $Entity$$Type, arg1: $Level$$Type)

public "getLevel"(): $Level
public "getEntity"(): $Entity
get "level"(): $Level
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAddedEvent$$Type = ($EntityAddedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAddedEvent$$Original = $EntityAddedEvent;}
declare module "net.blay09.mods.balm.api.event.CommandEvent" {
import {$ParseResults, $ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $CommandEvent extends $BalmEvent {
constructor(arg0: $ParseResults$$Type<($CommandSourceStack$$Type)>)

public "getParseResults"(): $ParseResults<($CommandSourceStack)>
get "parseResults"(): $ParseResults<($CommandSourceStack)>
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
declare module "net.blay09.mods.balm.mixin.ScreenAccessor" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export interface $ScreenAccessor$$Interface {
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "balm_getRenderables"(): $List<($Renderable)>
 "balm_getNarratables"(): $List<($NarratableEntry)>
 "balm_getChildren"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent$Post" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenDrawEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent"

export class $ScreenDrawEvent$Post extends $ScreenDrawEvent {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDrawEvent$Post$$Type = ($ScreenDrawEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenDrawEvent$Post$$Original = $ScreenDrawEvent$Post;}
declare module "net.blay09.mods.balm.api.config.MutableLoadedConfig" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type, $LoadedConfig$$Interface} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $MutableLoadedConfig$$Interface extends $LoadedConfig$$Interface {
}

export class $MutableLoadedConfig implements $MutableLoadedConfig$$Interface {
 "copy"(): $MutableLoadedConfig
 "applyFrom"(arg0: $BalmConfigSchema$$Type, arg1: $LoadedConfig$$Type, arg2: $Predicate$$Type<($ConfiguredProperty<(never)>)>): void
 "applyFrom"(arg0: $BalmConfigSchema$$Type, arg1: $LoadedConfig$$Type): void
 "setRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>, arg1: T): void
 "mutable"(arg0: $BalmConfigSchema$$Type): $MutableLoadedConfig
 "getRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLoadedConfig$$Type = ($MutableLoadedConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableLoadedConfig$$Original = $MutableLoadedConfig;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent$Pre" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenDrawEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent"

export class $ScreenDrawEvent$Pre extends $ScreenDrawEvent {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDrawEvent$Pre$$Type = ($ScreenDrawEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenDrawEvent$Pre$$Original = $ScreenDrawEvent$Pre;}
declare module "net.blay09.mods.balm.mixin.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor$$Interface {
get "mouseY"(): double
get "mouseX"(): double
}

export class $MouseHandlerAccessor implements $MouseHandlerAccessor$$Interface {
 "getMouseY"(): double
 "getMouseX"(): double
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
declare module "net.blay09.mods.balm.api.event.PlayerRespawnEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerRespawnEvent extends $BalmEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $ServerPlayer$$Type)

public "getNewPlayer"(): $ServerPlayer
public "getOldPlayer"(): $ServerPlayer
get "newPlayer"(): $ServerPlayer
get "oldPlayer"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRespawnEvent$$Type = ($PlayerRespawnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRespawnEvent$$Original = $PlayerRespawnEvent;}
declare module "net.blay09.mods.balm.api.event.LivingHealEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingHealEvent extends $BalmEvent {
constructor(arg0: $LivingEntity$$Type, arg1: float)

public "getEntity"(): $LivingEntity
public "getAmount"(): float
get "entity"(): $LivingEntity
get "amount"(): float
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
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Press} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press"

export class $ScreenKeyEvent$Press$Post extends $ScreenKeyEvent$Press {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Press$Post$$Type = ($ScreenKeyEvent$Press$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyEvent$Press$Post$$Original = $ScreenKeyEvent$Press$Post;}
declare module "net.blay09.mods.balm.mixin.KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor$$Interface {

(): $InputConstants$Key$$Type
get "key"(): $InputConstants$Key
}

export class $KeyMappingAccessor implements $KeyMappingAccessor$$Interface {
 "getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$$Type = (() => $InputConstants$Key$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingAccessor$$Original = $KeyMappingAccessor;}
declare module "net.blay09.mods.balm.api.event.ConfigReloadedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigReloadedEvent extends $BalmEvent {
constructor()
constructor(arg0: $BalmConfigSchema$$Type)

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigReloadedEvent$$Type = ($ConfigReloadedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigReloadedEvent$$Original = $ConfigReloadedEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Press} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press"

export class $ScreenKeyEvent$Press$Pre extends $ScreenKeyEvent$Press {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Press$Pre$$Type = ($ScreenKeyEvent$Press$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyEvent$Press$Pre$$Original = $ScreenKeyEvent$Press$Pre;}
declare module "net.blay09.mods.balm.api.event.server.ServerStartingEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStartingEvent extends $BalmEvent {
constructor(arg0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
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
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredLong" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredLong$$Interface extends $ConfiguredProperty$$Interface<(long)> {
}

export class $ConfiguredLong implements $ConfiguredLong$$Interface {
 "get"(arg0: $LoadedConfig$$Type): long
 "get"(): long
 "set"(arg0: long): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): long
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): long
 "codec"(): $Codec<(long)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (long)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredLong$$Type = ($ConfiguredLong);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredLong$$Original = $ConfiguredLong;}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Post" {
import {$GuiDrawEvent$Element$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"
import {$GuiDrawEvent} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $GuiDrawEvent$Post extends $GuiDrawEvent {
constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $GuiDrawEvent$Element$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$Post$$Type = ($GuiDrawEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiDrawEvent$Post$$Original = $GuiDrawEvent$Post;}
declare module "net.blay09.mods.balm.api.event.client.ItemTooltipEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ItemTooltipEvent extends $BalmEvent {
constructor(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type)

public "getFlags"(): $TooltipFlag
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getToolTip"(): $List<($Component)>
get "flags"(): $TooltipFlag
get "itemStack"(): $ItemStack
get "player"(): $Player
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
declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder" {
import {$LongConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.LongConfigProperty"
import {$ListConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.ListConfigProperty"
import {$BooleanConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.BooleanConfigProperty"
import {$StringConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.StringConfigProperty"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List$$Type} from "java.util.List"
import {$SetConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.SetConfigProperty"
import {$FloatConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.FloatConfigProperty"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnumConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.EnumConfigProperty"
import {$IntConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.IntConfigProperty"
import {$ConfigSchemaImpl$$Type} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$Set$$Type} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$DoubleConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.DoubleConfigProperty"
import {$ResourceLocationConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.ResourceLocationConfigProperty"

export class $ConfigPropertyBuilder {
constructor(arg0: $ConfigSchemaImpl$$Type, arg1: StringJS)
constructor(arg0: $ConfigSchemaImpl$$Type, arg1: StringJS, arg2: StringJS)

public "comment"(arg0: StringJS): $ConfigPropertyBuilder
public "stringOf"(arg0: StringJS): $StringConfigProperty
public "resourceLocationOf"(arg0: $ResourceLocation$$Type): $ResourceLocationConfigProperty
public "setOf"<T>(arg0: $Class$$Type<(T)>, arg1: $Set$$Type<(T)>): $SetConfigProperty<(T)>
public "listOf"<T>(arg0: $Class$$Type<(T)>, arg1: $List$$Type<(T)>): $ListConfigProperty<(T)>
public "synced"(): $ConfigPropertyBuilder
public "boolOf"(arg0: boolean): $BooleanConfigProperty
public "floatOf"(arg0: float): $FloatConfigProperty
public "intOf"(arg0: integer): $IntConfigProperty
public "enumOf"<T extends $Enum<(object)>>(arg0: T): $EnumConfigProperty<(T)>
public "longOf"(arg0: long): $LongConfigProperty
public "doubleOf"(arg0: double): $DoubleConfigProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPropertyBuilder$$Type = ($ConfigPropertyBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigPropertyBuilder$$Original = $ConfigPropertyBuilder;}
declare module "net.blay09.mods.balm.api.event.BalmEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $BalmEvent extends $Event implements $ICancellableEvent$$Interface {
constructor()

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmEvent$$Type = ($BalmEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BalmEvent$$Original = $BalmEvent;}
declare module "net.blay09.mods.balm.api.config.schema.impl.ConfigCategoryImpl" {
import {$ConfigPropertyBuilder} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ConfigCategoryBuilder$$Type, $ConfigCategoryBuilder$$Interface} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import {$Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$ConfigSchemaImpl$$Type} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$ConfigCategory$$Interface} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigCategoryImpl implements $ConfigCategoryBuilder$$Interface, $ConfigCategory$$Interface {
constructor(arg0: $ConfigSchemaImpl$$Type, arg1: StringJS)

public "name"(): StringJS
public "properties"(): $List<($ConfiguredProperty<(never)>)>
public "comment"(): StringJS
public "comment"(arg0: StringJS): $ConfigCategoryImpl
public "property"(arg0: StringJS): $ConfigPropertyBuilder
public "parentSchema"(): $BalmConfigSchema
public "addProperty"<T extends $ConfiguredProperty<(object)>>(arg0: T): void
public "via"<T>(arg0: $Function$$Type<($ConfigCategoryBuilder), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategoryImpl$$Type = ($ConfigCategoryImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigCategoryImpl$$Original = $ConfigCategoryImpl;}
declare module "net.blay09.mods.balm.mixin.ModelBakeryAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelBakeryAccessor$$Interface {

(arg0: $ResourceLocation): $UnbakedModel$$Type
}

export class $ModelBakeryAccessor implements $ModelBakeryAccessor$$Interface {
 "callGetModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$$Type = ((arg0: $ResourceLocation) => $UnbakedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakeryAccessor$$Original = $ModelBakeryAccessor;}
declare module "net.blay09.mods.balm.api.event.server.ServerReloadFinishedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerReloadFinishedEvent extends $BalmEvent {
constructor(arg0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerReloadFinishedEvent$$Type = ($ServerReloadFinishedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerReloadFinishedEvent$$Original = $ServerReloadFinishedEvent;}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Pre" {
import {$GuiDrawEvent$Element$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"
import {$GuiDrawEvent} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $GuiDrawEvent$Pre extends $GuiDrawEvent {
constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $GuiDrawEvent$Element$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$Pre$$Type = ($GuiDrawEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiDrawEvent$Pre$$Original = $GuiDrawEvent$Pre;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"

export class $ScreenMouseEvent$Drag extends $ScreenMouseEvent {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

public "getDragY"(): double
public "getDragX"(): double
get "dragY"(): double
get "dragX"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Drag$$Type = ($ScreenMouseEvent$Drag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Drag$$Original = $ScreenMouseEvent$Drag;}
declare module "net.blay09.mods.balm.api.event.PlayerAttackEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerAttackEvent extends $BalmEvent {
constructor(arg0: $Player$$Type, arg1: $Entity$$Type)

public "getTarget"(): $Entity
public "getPlayer"(): $Player
get "target"(): $Entity
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackEvent$$Type = ($PlayerAttackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAttackEvent$$Original = $PlayerAttackEvent;}
declare module "net.blay09.mods.balm.api.event.PlayerLogoutEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerLogoutEvent extends $BalmEvent {
constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerLogoutEvent$$Type = ($PlayerLogoutEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerLogoutEvent$$Original = $PlayerLogoutEvent;}
declare module "net.blay09.mods.balm.api.event.PlayerOpenMenuEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerOpenMenuEvent extends $BalmEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $AbstractContainerMenu$$Type)

public "getMenu"(): $AbstractContainerMenu
public "getPlayer"(): $ServerPlayer
get "menu"(): $AbstractContainerMenu
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerOpenMenuEvent$$Type = ($PlayerOpenMenuEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerOpenMenuEvent$$Original = $PlayerOpenMenuEvent;}
declare module "net.blay09.mods.balm.api.config.schema.builder.BooleanConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfiguredBoolean$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredBoolean"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $BooleanConfigProperty extends $AbstractConfigProperty<(boolean)> implements $ConfiguredBoolean$$Interface {
static readonly "CODEC": $Codec<(boolean)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: boolean)

public "type"(): $Class<(boolean)>
public "defaultValue"(): boolean
public "codec"(): $Codec<(boolean)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (boolean)>
public "get"(arg0: $LoadedConfig$$Type): boolean
public "get"(): boolean
public "set"(arg0: boolean): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfigProperty$$Type = ($BooleanConfigProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanConfigProperty$$Original = $BooleanConfigProperty;}
declare module "net.blay09.mods.balm.api.event.UseItemEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $UseItemEvent extends $BalmEvent {
constructor(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $InteractionHand$$Type)

public "setResult"(arg0: $InteractionResult$$Type): void
public "getLevel"(): $Level
public "getHand"(): $InteractionHand
public "getPlayer"(): $Player
public "getInteractionResult"(): $InteractionResult
set "result"(value: $InteractionResult$$Type)
get "level"(): $Level
get "hand"(): $InteractionHand
get "player"(): $Player
get "interactionResult"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseItemEvent$$Type = ($UseItemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseItemEvent$$Original = $UseItemEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Click} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Post extends $ScreenMouseEvent$Click {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Click$Post$$Type = ($ScreenMouseEvent$Click$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenMouseEvent$Click$Post$$Original = $ScreenMouseEvent$Click$Post;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredFloat" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredFloat$$Interface extends $ConfiguredProperty$$Interface<(float)> {
}

export class $ConfiguredFloat implements $ConfiguredFloat$$Interface {
 "get"(arg0: $LoadedConfig$$Type): float
 "get"(): float
 "set"(arg0: float): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): float
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): float
 "codec"(): $Codec<(float)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (float)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredFloat$$Type = ($ConfiguredFloat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredFloat$$Original = $ConfiguredFloat;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredResourceLocation" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredResourceLocation$$Interface extends $ConfiguredProperty$$Interface<($ResourceLocation)> {
}

export class $ConfiguredResourceLocation implements $ConfiguredResourceLocation$$Interface {
 "get"(arg0: $LoadedConfig$$Type): $ResourceLocation
 "get"(): $ResourceLocation
 "set"(arg0: $ResourceLocation$$Type): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): $ResourceLocation
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): $ResourceLocation
 "codec"(): $Codec<($ResourceLocation)>
 "streamCodec"(): $StreamCodec<($ByteBuf), ($ResourceLocation)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredResourceLocation$$Type = ($ConfiguredResourceLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredResourceLocation$$Original = $ConfiguredResourceLocation;}
declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory" {
import {$List} from "java.util.List"
import {$ConfiguredProperty} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $ConfigCategory$$Interface {
}

export class $ConfigCategory implements $ConfigCategory$$Interface {
 "name"(): StringJS
 "properties"(): $List<($ConfiguredProperty<(never)>)>
 "comment"(): StringJS
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategory$$Type = ($ConfigCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigCategory$$Original = $ConfigCategory;}
declare module "net.blay09.mods.balm.api.config.schema.builder.LongConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$ConfiguredLong$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredLong"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $LongConfigProperty extends $AbstractConfigProperty<(long)> implements $ConfiguredLong$$Interface {
static readonly "CODEC": $Codec<(long)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: long)

public "type"(): $Class<(long)>
public "defaultValue"(): long
public "codec"(): $Codec<(long)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (long)>
public "get"(arg0: $LoadedConfig$$Type): long
public "get"(): long
public "set"(arg0: long): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConfigProperty$$Type = ($LongConfigProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongConfigProperty$$Original = $LongConfigProperty;}
declare module "net.blay09.mods.balm.api.config.schema.builder.StringConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ConfiguredString$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredString"

export class $StringConfigProperty extends $AbstractConfigProperty<(StringJS)> implements $ConfiguredString$$Interface {
constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: StringJS)

public "type"(): $Class<(StringJS)>
public "defaultValue"(): any
public "codec"(): $Codec<(StringJS)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (StringJS)>
public "get"(arg0: $LoadedConfig$$Type): StringJS
public "get"(): StringJS
public "set"(arg0: StringJS): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringConfigProperty$$Type = ($StringConfigProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringConfigProperty$$Original = $StringConfigProperty;}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element" {
import {$Enum} from "java.lang.Enum"

export class $GuiDrawEvent$Element extends $Enum<($GuiDrawEvent$Element)> {
static readonly "ALL": $GuiDrawEvent$Element
static readonly "BOSS_INFO": $GuiDrawEvent$Element
static readonly "CHAT": $GuiDrawEvent$Element
static readonly "HEALTH": $GuiDrawEvent$Element
static readonly "PLAYER_LIST": $GuiDrawEvent$Element
static readonly "DEBUG": $GuiDrawEvent$Element

public static "values"(): ($GuiDrawEvent$Element)[]
public static "valueOf"(arg0: StringJS): $GuiDrawEvent$Element
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$Element$$Type = (("all") | ("health") | ("chat") | ("debug") | ("boss_info") | ("player_list"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiDrawEvent$Element$$Original = $GuiDrawEvent$Element;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenDrawEvent extends $BalmEvent {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

public "getMouseY"(): integer
public "getMouseX"(): integer
public "getGuiGraphics"(): $GuiGraphics
public "getScreen"(): $Screen
public "getTickDelta"(): float
get "mouseY"(): integer
get "mouseX"(): integer
get "guiGraphics"(): $GuiGraphics
get "screen"(): $Screen
get "tickDelta"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDrawEvent$$Type = ($ScreenDrawEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenDrawEvent$$Original = $ScreenDrawEvent;}
declare module "net.blay09.mods.balm.api.config.schema.builder.SetConfigProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredSet$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredSet"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $SetConfigProperty<T> extends $AbstractConfigProperty<($Set<(T)>)> implements $ConfiguredSet$$Interface<(T)> {
constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: $Class$$Type<(T)>, arg2: $Set$$Type<(T)>)

public "type"(): $Class<(never)>
public "defaultValue"(): any
public "nestedType"(): $Class<(T)>
public "codec"(): $Codec<($Set<(T)>)>
public "streamCodec"(): $StreamCodec<($ByteBuf), ($Set<(T)>)>
public "get"(arg0: $LoadedConfig$$Type): $Set<(T)>
public "get"(): $Set<(T)>
public "set"(arg0: $Set$$Type<(T)>): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetConfigProperty$$Type<T> = ($SetConfigProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SetConfigProperty$$Original<T> = $SetConfigProperty<(T)>;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent"

export class $ScreenKeyEvent$Release extends $ScreenKeyEvent {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Release$$Type = ($ScreenKeyEvent$Release);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyEvent$Release$$Original = $ScreenKeyEvent$Release;}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent" {
import {$GuiDrawEvent$Element, $GuiDrawEvent$Element$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $GuiDrawEvent extends $BalmEvent {
constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $GuiDrawEvent$Element$$Type)

public "getElement"(): $GuiDrawEvent$Element
public "getGuiGraphics"(): $GuiGraphics
public "getWindow"(): $Window
get "element"(): $GuiDrawEvent$Element
get "guiGraphics"(): $GuiGraphics
get "window"(): $Window
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$$Type = ($GuiDrawEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiDrawEvent$$Original = $GuiDrawEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent"

export class $ScreenKeyEvent$Press extends $ScreenKeyEvent {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Press$$Type = ($ScreenKeyEvent$Press);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenKeyEvent$Press$$Original = $ScreenKeyEvent$Press;}
declare module "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl" {
import {$ConfigSchemaBuilder$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfigSchemaBuilder"
import {$ConfigPropertyBuilder} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ConfigCategoryBuilder} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfigCategory} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"
import {$BalmConfigSchema$$Interface} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigSchemaImpl implements $BalmConfigSchema$$Interface, $ConfigSchemaBuilder$$Interface {
constructor(arg0: $ResourceLocation$$Type)

public "defaults"(): $LoadedConfig
public "property"(arg0: StringJS): $ConfigPropertyBuilder
public "category"(arg0: StringJS): $ConfigCategoryBuilder
public "addAndReturn"<T extends $ConfiguredProperty<(object)>>(arg0: T): T
public "identifier"(): $ResourceLocation
public "categories"(): $Collection<($ConfigCategory)>
public "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(never)>
public "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(never)>
public "rootProperties"(): $Collection<($ConfiguredProperty<(never)>)>
public static "create"(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSchemaImpl$$Type = ($ConfigSchemaImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigSchemaImpl$$Original = $ConfigSchemaImpl;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredEnum" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Class} from "java.lang.Class"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredEnum$$Interface<T extends $Enum<(object)>> extends $ConfiguredProperty$$Interface<(T)> {
}

export class $ConfiguredEnum<T extends $Enum<(object)>> implements $ConfiguredEnum$$Interface {
 "get"(arg0: $LoadedConfig$$Type): T
 "get"(): T
 "set"(arg0: T): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): T
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): T
 "codec"(): $Codec<(T)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredEnum$$Type<T> = ($ConfiguredEnum<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredEnum$$Original<T> = $ConfiguredEnum<(T)>;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredSet" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$NestedTypeHolder$$Interface} from "net.blay09.mods.balm.api.config.schema.NestedTypeHolder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConfiguredProperty$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredSet$$Interface<T> extends $ConfiguredProperty$$Interface<($Set<(T)>)>, $NestedTypeHolder$$Interface<(T)> {
}

export class $ConfiguredSet<T> implements $ConfiguredSet$$Interface {
 "get"(arg0: $LoadedConfig$$Type): $Set<(T)>
 "get"(): $Set<(T)>
 "set"(arg0: $Set$$Type<(T)>): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): $Set<(T)>
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): $Set<(T)>
 "codec"(): $Codec<($Set<(T)>)>
 "streamCodec"(): $StreamCodec<($ByteBuf), ($Set<(T)>)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
 "synced"(): boolean
 "nestedType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredSet$$Type<T> = ($ConfiguredSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredSet$$Original<T> = $ConfiguredSet<(T)>;}
declare module "net.blay09.mods.balm.api.event.DigSpeedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DigSpeedEvent extends $BalmEvent {
constructor(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: float)

public "getState"(): $BlockState
public "getPlayer"(): $Player
public "setSpeedOverride"(arg0: float): void
public "getSpeedOverride"(): float
public "getSpeed"(): float
get "state"(): $BlockState
get "player"(): $Player
set "speedOverride"(value: float)
get "speedOverride"(): float
get "speed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigSpeedEvent$$Type = ($DigSpeedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DigSpeedEvent$$Original = $DigSpeedEvent;}
declare module "net.blay09.mods.balm.api.event.PlayerConnectedEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerConnectedEvent extends $BalmEvent {
constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerConnectedEvent$$Type = ($PlayerConnectedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerConnectedEvent$$Original = $PlayerConnectedEvent;}
declare module "net.blay09.mods.balm.api.event.client.FovUpdateEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $FovUpdateEvent extends $BalmEvent {
constructor(arg0: $LivingEntity$$Type)

public "getFov"(): float
public "setFov"(arg0: float): void
public "getEntity"(): $LivingEntity
get "fov"(): float
set "fov"(value: float)
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FovUpdateEvent$$Type = ($FovUpdateEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FovUpdateEvent$$Original = $FovUpdateEvent;}
declare module "net.blay09.mods.balm.api.event.client.DisconnectedFromServerEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $DisconnectedFromServerEvent extends $BalmEvent {
constructor(arg0: $Minecraft$$Type)

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisconnectedFromServerEvent$$Type = ($DisconnectedFromServerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisconnectedFromServerEvent$$Original = $DisconnectedFromServerEvent;}
declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder" {
import {$ConfigPropertyBuilder} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Function$$Type} from "java.util.function.Function"
import {$ConfigCategoryImpl} from "net.blay09.mods.balm.api.config.schema.impl.ConfigCategoryImpl"
import {$PropertyHolderBuilder$$Interface} from "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder"

export interface $ConfigCategoryBuilder$$Interface extends $PropertyHolderBuilder$$Interface {
}

export class $ConfigCategoryBuilder implements $ConfigCategoryBuilder$$Interface {
 "comment"(arg0: StringJS): $ConfigCategoryImpl
 "via"<T>(arg0: $Function$$Type<($ConfigCategoryBuilder), (T)>): T
 "property"(arg0: StringJS): $ConfigPropertyBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategoryBuilder$$Type = ($ConfigCategoryBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigCategoryBuilder$$Original = $ConfigCategoryBuilder;}
declare module "net.blay09.mods.balm.api.event.PlayerChangedDimensionEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerChangedDimensionEvent extends $BalmEvent {
constructor(arg0: $ServerPlayer$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $ResourceKey$$Type<($Level)>)

public "getPlayer"(): $ServerPlayer
public "getToDim"(): $ResourceKey<($Level)>
public "getFromDim"(): $ResourceKey<($Level)>
get "player"(): $ServerPlayer
get "toDim"(): $ResourceKey<($Level)>
get "fromDim"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChangedDimensionEvent$$Type = ($PlayerChangedDimensionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerChangedDimensionEvent$$Original = $PlayerChangedDimensionEvent;}
declare module "net.blay09.mods.balm.api.event.CropGrowEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent extends $BalmEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getState"(): $BlockState
public "getLevel"(): $Level
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
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
declare module "net.blay09.mods.balm.api.event.client.BlockHighlightDrawEvent" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export class $BlockHighlightDrawEvent extends $BalmEvent {
constructor(arg0: $BlockHitResult$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: $Camera$$Type)

public "getMultiBufferSource"(): $MultiBufferSource
public "getHitResult"(): $BlockHitResult
public "getPoseStack"(): $PoseStack
public "getCamera"(): $Camera
get "multiBufferSource"(): $MultiBufferSource
get "hitResult"(): $BlockHitResult
get "poseStack"(): $PoseStack
get "camera"(): $Camera
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHighlightDrawEvent$$Type = ($BlockHighlightDrawEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockHighlightDrawEvent$$Original = $BlockHighlightDrawEvent;}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenInitEvent} from "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent"

export class $ScreenInitEvent$Pre extends $ScreenInitEvent {
constructor(arg0: $Screen$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInitEvent$Pre$$Type = ($ScreenInitEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenInitEvent$Pre$$Original = $ScreenInitEvent$Pre;}
declare module "net.blay09.mods.balm.api.config.schema.builder.ResourceLocationConfigProperty" {
import {$ConfiguredResourceLocation$$Interface} from "net.blay09.mods.balm.api.config.schema.ConfiguredResourceLocation"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ResourceLocationConfigProperty extends $AbstractConfigProperty<($ResourceLocation)> implements $ConfiguredResourceLocation$$Interface {
constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: $ResourceLocation$$Type)

public "type"(): $Class<($ResourceLocation)>
public "defaultValue"(): any
public "codec"(): $Codec<($ResourceLocation)>
public "streamCodec"(): $StreamCodec<($ByteBuf), ($ResourceLocation)>
public "get"(arg0: $LoadedConfig$$Type): $ResourceLocation
public "get"(): $ResourceLocation
public "set"(arg0: $ResourceLocation$$Type): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocationConfigProperty$$Type = ($ResourceLocationConfigProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceLocationConfigProperty$$Original = $ResourceLocationConfigProperty;}
declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent$Background" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ContainerScreenDrawEvent} from "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent"

export class $ContainerScreenDrawEvent$Background extends $ContainerScreenDrawEvent {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenDrawEvent$Background$$Type = ($ContainerScreenDrawEvent$Background);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenDrawEvent$Background$$Original = $ContainerScreenDrawEvent$Background;}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Class} from "java.lang.Class"
import {$LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredProperty$$Interface<T> {
}

export class $ConfiguredProperty<T> implements $ConfiguredProperty$$Interface {
 "name"(): StringJS
 "type"(): $Class<(never)>
 "comment"(): StringJS
 "defaultValue"(): T
 "category"(): StringJS
 "parentSchema"(): $BalmConfigSchema
 "getRaw"(arg0: $LoadedConfig$$Type): T
 "codec"(): $Codec<(T)>
 "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredProperty$$Type<T> = ($ConfiguredProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredProperty$$Original<T> = $ConfiguredProperty<(T)>;}
declare module "net.blay09.mods.balm.api.event.client.UseItemInputEvent" {
import {$BalmEvent} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export class $UseItemInputEvent extends $BalmEvent {
constructor(arg0: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseItemInputEvent$$Type = ($UseItemInputEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseItemInputEvent$$Original = $UseItemInputEvent;}
