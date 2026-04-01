declare module "traben.entity_model_features.utils.IEMFCuboidDataSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEMFCuboidDataSupplier$$Interface {
}

export class $IEMFCuboidDataSupplier implements $IEMFCuboidDataSupplier$$Interface {
 "emf$getTextureXY"(): (integer)[]
 "emf$getTextureUV"(): (integer)[]
 "emf$getSizeAdd"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFCuboidDataSupplier$$Type = ($IEMFCuboidDataSupplier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMFCuboidDataSupplier$$Original = $IEMFCuboidDataSupplier;}
declare module "traben.entity_model_features.utils.EMFDirectoryHandler" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export class $EMFDirectoryHandler {
readonly "rawFileName": StringJS
readonly "namespace": StringJS
readonly "isSubFolder": boolean

public "toString"(): StringJS
public "getRelativeDirectoryLocationNoValidation"(fileName: StringJS): StringJS
public "getRelativeFilePossiblyEMFOverridden"(jpmOrVariantFileNameWithSuffixAndFileType: StringJS): $ResourceLocation
public "packIndex"(): integer
public "validForThisBase"(propertiesOrSecond: $EMFDirectoryHandler$$Type): boolean
public "getFileNameWithType"(): StringJS
public "getFinalFileLocation"(): StringJS
public static "getDirectoryManagerOrNull"(printing: boolean, namespace: StringJS, modelFileName: StringJS, suffixAndFileType: StringJS): $EMFDirectoryHandler
get "fileNameWithType"(): StringJS
get "finalFileLocation"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFDirectoryHandler$$Type = ($EMFDirectoryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFDirectoryHandler$$Original = $EMFDirectoryHandler;}
declare module "traben.entity_model_features.utils.EMFEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$UUID} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Pose} from "net.minecraft.world.entity.Pose"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Team} from "net.minecraft.world.scores.Team"
import {$Object2FloatOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2FloatOpenHashMap"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ETFEntity$$Interface} from "traben.entity_texture_features.utils.ETFEntity"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export interface $EMFEntity$$Interface extends $ETFEntity$$Interface {
}

export class $EMFEntity implements $EMFEntity$$Interface {
 "emf$isSneaking"(): boolean
 "emf$isAlive"(): boolean
 "emf$isSprinting"(): boolean
 "emf$getVelocity"(): $Vec3
 "emf$isOnFire"(): boolean
 "emf$hasVehicle"(): boolean
 "emf$prevPitch"(): float
 "emf$isInLava"(): boolean
 "emf$isInvisible"(): boolean
 "emf$hasPassengers"(): boolean
 "emf$getTypeString"(): StringJS
 "emf$getVariableMap"(): $Object2FloatOpenHashMap<(StringJS)>
 "emf$getPitch"(): float
 "emf$isGlowing"(): boolean
 "emf$isOnGround"(): boolean
 "emf$isTouchingWater"(): boolean
 "emf$age"(): float
 "emf$getX"(): double
 "emf$isWet"(): boolean
 "emf$prevX"(): double
 "emf$prevY"(): double
 "emf$getY"(): double
 "emf$prevZ"(): double
 "emf$getZ"(): double
 "emf$getYaw"(): float
 "etf$getType"(): $EntityType<(never)>
 "etf$hasCustomName"(): boolean
 "etf$getBlockY"(): integer
 "etf$getCustomName"(): $Component
 "etf$getHandItems"(): $Iterable<($ItemStack)>
 "etf$getArmorItems"(): $Iterable<($ItemStack)>
 "etf$getUuid"(): $UUID
 "etf$getOptifineId"(): integer
 "etf$canBeBright"(): boolean
 "etf$isBlockEntity"(): boolean
 "etf$getVelocity"(): $Vec3
 "etf$distanceTo"(arg0: $Entity$$Type): float
/**
 * 
 * @deprecated
 */
 "etf$getPose"(): $Pose
 "etf$getEntityKey"(): StringJS
 "etf$getWorld"(): $Level
 "etf$getBlockPos"(): $BlockPos
 "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
 "etf$getScoreboardTeam"(): $Team
 "etf$getNbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFEntity$$Type = ($EMFEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFEntity$$Original = $EMFEntity;}
declare module "traben.entity_model_features.utils.IEMFUnmodifiedLayerRootGetter" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ModelLayerLocation, $ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$LayerDefinition, $LayerDefinition$$Type} from "net.minecraft.client.model.geom.builders.LayerDefinition"

export interface $IEMFUnmodifiedLayerRootGetter$$Interface {

(): $Map$$Type<($ModelLayerLocation$$Type), ($LayerDefinition$$Type)>
}

export class $IEMFUnmodifiedLayerRootGetter implements $IEMFUnmodifiedLayerRootGetter$$Interface {
 "emf$getUnmodifiedRoots"(): $Map<($ModelLayerLocation), ($LayerDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFUnmodifiedLayerRootGetter$$Type = (() => $Map$$Type<($ModelLayerLocation$$Type), ($LayerDefinition$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMFUnmodifiedLayerRootGetter$$Original = $IEMFUnmodifiedLayerRootGetter;}
declare module "traben.entity_model_features.utils.IEMFTextureSizeSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEMFTextureSizeSupplier$$Interface {
}

export class $IEMFTextureSizeSupplier implements $IEMFTextureSizeSupplier$$Interface {
 "emf$getTextureSize"(): (integer)[]
 "emf$setTextureSize"(arg0: (integer)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFTextureSizeSupplier$$Type = ($IEMFTextureSizeSupplier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMFTextureSizeSupplier$$Original = $IEMFTextureSizeSupplier;}
