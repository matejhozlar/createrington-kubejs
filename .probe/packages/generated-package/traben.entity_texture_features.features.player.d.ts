declare module "traben.entity_texture_features.features.player.ETFPlayerEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$UUID} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory} from "net.minecraft.world.entity.player.Inventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Pose} from "net.minecraft.world.entity.Pose"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Team} from "net.minecraft.world.scores.Team"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ETFEntity$$Interface} from "traben.entity_texture_features.utils.ETFEntity"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export interface $ETFPlayerEntity$$Interface extends $ETFEntity$$Interface {
}

export class $ETFPlayerEntity implements $ETFPlayerEntity$$Interface {
 "etf$getUuidAsString"(): StringJS
 "etf$isPartVisible"(arg0: $PlayerModelPart$$Type): boolean
 "etf$isTeammate"(arg0: $Player$$Type): boolean
 "etf$getEntity"(): $Entity
 "etf$getName"(): $Component
 "etf$getInventory"(): $Inventory
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
export type $ETFPlayerEntity$$Type = ($ETFPlayerEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFPlayerEntity$$Original = $ETFPlayerEntity;}
declare module "traben.entity_texture_features.features.player.ETFPlayerTexture" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ETFConfigScreenSkinTool$NoseType} from "traben.entity_texture_features.config.screens.skin.ETFConfigScreenSkinTool$NoseType"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$ETFPlayerEntity, $ETFPlayerEntity$$Type} from "traben.entity_texture_features.features.player.ETFPlayerEntity"
import {$ETFTexture} from "traben.entity_texture_features.features.texture_handlers.ETFTexture"

export class $ETFPlayerTexture {
 "texturedNoseIdentifierEnchanted": $ResourceLocation
 "etfTextureOfFinalBaseSkin": $ETFTexture
 "coatStyle": integer
 "baseEnchantBlinkIdentifier": $ResourceLocation
 "noseType": $ETFConfigScreenSkinTool$NoseType
 "hasVillagerNose": boolean
static readonly "SKIN_NAMESPACE": StringJS
 "baseEnchantIdentifier": $ResourceLocation
 "hasEnchant": boolean
 "coatLength": integer
 "blinkHeight": integer
 "wasForcedSolid": boolean
 "hasFeatures": boolean
 "blinkType": integer
 "hasEmissives": boolean
static "clientPlayerOriginalSkinImageForTool": $NativeImage
 "texturedNoseIdentifierEmissive": $ResourceLocation
static "remappingETFSkin": boolean
 "texturedNoseIdentifier": $ResourceLocation
 "baseEnchantBlink2Identifier": $ResourceLocation
 "player": $ETFPlayerEntity

constructor()
constructor(player: $ETFPlayerEntity$$Type, rendererGivenSkin: $ResourceLocation$$Type)

public "changeSkinToThisForTool"(image: $NativeImage$$Type): void
public "getBaseHeadTextureIdentifierOrNullForVanilla"(): $ResourceLocation
public "getBaseTextureEmissiveIdentifierOrNullForNone"(): $ResourceLocation
public "canUseFeaturesForThisPlayer"(): boolean
public "getBaseTextureIdentifierOrNullForVanilla"(player: $ETFPlayerEntity$$Type): $ResourceLocation
public "getBaseTextureIdentifierOrNullForVanilla"(player: $Player$$Type): $ResourceLocation
public "isCorrectObjectForThisSkin"(check: $ResourceLocation$$Type): boolean
public "checkTexture"(skipSkinLoad: boolean): void
public static "getSkinNumberToPixelColour"(color: integer): integer
public static "getSkinPixelColourToNumber"(color: integer): integer
get "baseHeadTextureIdentifierOrNullForVanilla"(): $ResourceLocation
get "baseTextureEmissiveIdentifierOrNullForNone"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFPlayerTexture$$Type = ($ETFPlayerTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFPlayerTexture$$Original = $ETFPlayerTexture;}
declare module "traben.entity_texture_features.features.player.ETFPlayerSkinHolder" {
import {$ETFPlayerTexture, $ETFPlayerTexture$$Type} from "traben.entity_texture_features.features.player.ETFPlayerTexture"

export interface $ETFPlayerSkinHolder$$Interface {

(): $ETFPlayerTexture$$Type
}

export class $ETFPlayerSkinHolder implements $ETFPlayerSkinHolder$$Interface {
 "etf$getETFPlayerTexture"(): $ETFPlayerTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFPlayerSkinHolder$$Type = (() => $ETFPlayerTexture$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFPlayerSkinHolder$$Original = $ETFPlayerSkinHolder;}
