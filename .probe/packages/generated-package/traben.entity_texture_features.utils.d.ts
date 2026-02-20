declare module "traben.entity_texture_features.utils.ETFVertexConsumer" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ETFTexture} from "traben.entity_texture_features.features.texture_handlers.ETFTexture"

export interface $ETFVertexConsumer$$Interface {
}

export class $ETFVertexConsumer implements $ETFVertexConsumer$$Interface {
 "etf$initETFVertexConsumer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type): void
 "etf$getProvider"(): $MultiBufferSource
 "etf$getRenderLayer"(): $RenderType
 "etf$getETFTexture"(): $ETFTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFVertexConsumer$$Type = ($ETFVertexConsumer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFVertexConsumer$$Original = $ETFVertexConsumer;}
declare module "traben.entity_texture_features.utils.ETFRenderLayerWithTexture" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $ETFRenderLayerWithTexture$$Interface {

(): ($ResourceLocation$$Type)?
}

export class $ETFRenderLayerWithTexture implements $ETFRenderLayerWithTexture$$Interface {
 "etf$getId"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFRenderLayerWithTexture$$Type = (() => ($ResourceLocation$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFRenderLayerWithTexture$$Original = $ETFRenderLayerWithTexture;}
declare module "traben.entity_texture_features.utils.ETFEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$UUID} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Pose} from "net.minecraft.world.entity.Pose"
import {$Team} from "net.minecraft.world.scores.Team"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export interface $ETFEntity$$Interface {
}

export class $ETFEntity implements $ETFEntity$$Interface {
 "etf$getScoreboardTeam"(): $Team
 "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
 "etf$getType"(): $EntityType<(never)>
 "etf$getHandItems"(): $Iterable<($ItemStack)>
 "etf$hasCustomName"(): boolean
 "etf$getCustomName"(): $Component
/**
 * 
 * @deprecated
 */
 "etf$getPose"(): $Pose
 "etf$distanceTo"(arg0: $Entity$$Type): float
 "etf$getVelocity"(): $Vec3
 "etf$getUuid"(): $UUID
 "etf$getOptifineId"(): integer
 "etf$getArmorItems"(): $Iterable<($ItemStack)>
 "etf$canBeBright"(): boolean
 "etf$isBlockEntity"(): boolean
 "etf$getBlockY"(): integer
 "etf$getNbt"(): $CompoundTag
 "etf$getBlockPos"(): $BlockPos
 "etf$getEntityKey"(): StringJS
 "etf$getWorld"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFEntity$$Type = ($ETFEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFEntity$$Original = $ETFEntity;}
declare module "traben.entity_texture_features.utils.EntityIntLRU" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Function} from "java.util.function.Function"
import {$Object2IntLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2IntLinkedOpenHashMap"
import {$SortedMap} from "java.util.SortedMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $EntityIntLRU extends $Object2IntLinkedOpenHashMap<($UUID)> {
constructor(capacity: integer)
constructor()

public "put"(uuid: $UUID$$Type, v: integer): integer
public "put"(arg0: any, arg1: integer): integer
public "getInt"(k: any): integer
public "keySet"(): $ObjectSet
public "subMap"(arg0: any, arg1: any): $SortedMap
public "headMap"(arg0: any): $SortedMap
public "tailMap"(arg0: any): $SortedMap
/**
 * 
 * @deprecated
 */
public "entrySet"(): $ObjectSet
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): any
public "defaultReturnValue"(): integer
public "defaultReturnValue"(arg0: integer): void
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityIntLRU$$Type = ($EntityIntLRU);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityIntLRU$$Original = $EntityIntLRU;}
