declare module "net.minecraft.client.multiplayer.chat.report.ReportEnvironment$Server" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReportEnvironment$Server$$Interface {
}

export class $ReportEnvironment$Server implements $ReportEnvironment$Server$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportEnvironment$Server$$Type = ($ReportEnvironment$Server);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportEnvironment$Server$$Original = $ReportEnvironment$Server;}
declare module "net.minecraft.client.multiplayer.ClientChunkCache" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ClientChunkCache$Storage} from "net.minecraft.client.multiplayer.ClientChunkCache$Storage"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter} from "net.minecraft.world.level.BlockGetter"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData$BlockEntityTagOutput"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"

export class $ClientChunkCache extends $ChunkSource {
 "lightEngine": $LevelLightEngine
 "storage": $ClientChunkCache$Storage

constructor(arg0: $ClientLevel$$Type, arg1: integer)

public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
public "replaceBiomes"(arg0: integer, arg1: integer, arg2: $FriendlyByteBuf$$Type): void
public "drop"(arg0: $ChunkPos$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type, arg1: boolean): void
public "getLevel"(): $BlockGetter
public "handler$chp000$railways$securitycraft$onUpdateViewRadius"(arg0: integer, arg1: $CallbackInfo$$Type): void
public "replaceWithPacketData"(arg0: integer, arg1: integer, arg2: $FriendlyByteBuf$$Type, arg3: $CompoundTag$$Type, arg4: $Consumer$$Type<($ClientboundLevelChunkPacketData$BlockEntityTagOutput)>): $LevelChunk
public "getLightEngine"(): $LevelLightEngine
public "updateViewRadius"(arg0: integer): void
public "updateViewCenter"(arg0: integer, arg1: integer): void
public "gatherStats"(): StringJS
public "onLightUpdate"(arg0: $LightLayer$$Type, arg1: $SectionPos$$Type): void
public "handler$chp000$railways$securitycraft$onInit"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $CallbackInfo$$Type): void
public "handler$chp000$railways$securitycraft$onDrop"(arg0: $ChunkPos$$Type, arg1: $CallbackInfo$$Type): void
public "getLoadedChunksCount"(): integer
get "level"(): $BlockGetter
get "loadedChunksCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkCache$$Type = ($ClientChunkCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChunkCache$$Original = $ClientChunkCache;}
declare module "net.minecraft.client.multiplayer.SessionSearchTrees" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$SearchTree} from "net.minecraft.client.searchtree.SearchTree"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$ClientRecipeBook$$Type} from "net.minecraft.client.ClientRecipeBook"
import {$SessionSearchTrees$Key, $SessionSearchTrees$Key$$Type} from "net.minecraft.client.multiplayer.SessionSearchTrees$Key"
import {$RecipeCollection} from "net.minecraft.client.gui.screens.recipebook.RecipeCollection"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $SessionSearchTrees {
static readonly "CREATIVE_NAMES": $SessionSearchTrees$Key
static readonly "CREATIVE_TAGS": $SessionSearchTrees$Key

constructor()

public "recipes"(): $SearchTree<($RecipeCollection)>
public "register"(arg0: $SessionSearchTrees$Key$$Type, arg1: $Runnable$$Type): void
public "updateCreativeTags"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "updateCreativeTags"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $SessionSearchTrees$Key$$Type): void
public "updateRecipes"(arg0: $ClientRecipeBook$$Type, arg1: $RegistryAccess$Frozen$$Type): void
public static "getTooltipLines"(arg0: $Stream$$Type<($ItemStack$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $TooltipFlag$$Type): $Stream<(StringJS)>
public "rebuildAfterLanguageChange"(): void
public "creativeNameSearch"(arg0: $SessionSearchTrees$Key$$Type): $SearchTree<($ItemStack)>
public "creativeNameSearch"(): $SearchTree<($ItemStack)>
public "creativeTagSearch"(arg0: $SessionSearchTrees$Key$$Type): $SearchTree<($ItemStack)>
public "creativeTagSearch"(): $SearchTree<($ItemStack)>
public "updateCreativeTooltips"(arg0: $HolderLookup$Provider$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public "updateCreativeTooltips"(arg0: $HolderLookup$Provider$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $SessionSearchTrees$Key$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SessionSearchTrees$$Type = ($SessionSearchTrees);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SessionSearchTrees$$Original = $SessionSearchTrees;}
declare module "net.minecraft.client.multiplayer.ServerData$Type" {
import {$Enum} from "java.lang.Enum"

export class $ServerData$Type extends $Enum<($ServerData$Type)> {
static readonly "OTHER": $ServerData$Type
static readonly "LAN": $ServerData$Type
static readonly "REALM": $ServerData$Type

public static "values"(): ($ServerData$Type)[]
public static "valueOf"(arg0: StringJS): $ServerData$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerData$Type$$Type = (("lan") | ("realm") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerData$Type$$Original = $ServerData$Type;}
declare module "net.minecraft.client.multiplayer.ClientPacketListener" {
import {$ClientboundSetChunkCacheRadiusPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket"
import {$ClientboundBlockEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEventPacket"
import {$PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$ClientboundCooldownPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCooldownPacket"
import {$ClientboundUpdateMobEffectPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket"
import {$ClientboundUpdateAdvancementsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket"
import {$ServerData} from "net.minecraft.client.multiplayer.ServerData"
import {$ClientboundContainerSetSlotPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket"
import {$ClientboundSetObjectivePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket"
import {$ClientboundDeleteChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket"
import {$ClientboundSetScorePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetScorePacket"
import {$ClientboundOpenScreenPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundOpenScreenPacket"
import {$ClientboundLevelChunkWithLightPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket"
import {$ClientboundSetBorderWarningDistancePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket"
import {$ClientCommonPacketListenerImpl} from "net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl"
import {$ClientboundSetActionBarTextPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket"
import {$ClientboundSetBorderSizePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket"
import {$ClientboundPlayerAbilitiesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket"
import {$ClientboundSetBorderWarningDelayPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket"
import {$ClientboundBundlePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBundlePacket"
import {$CommonListenerCookie$$Type} from "net.minecraft.client.multiplayer.CommonListenerCookie"
import {$ClientboundPlayerCombatEndPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket"
import {$ClientboundMoveVehiclePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket"
import {$ClientboundInitializeBorderPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket"
import {$ClientboundForgetLevelChunkPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket"
import {$ClientboundTagQueryPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTagQueryPacket"
import {$ClientboundSetExperiencePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket"
import {$ClientboundContainerSetContentPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ClientboundSetBorderCenterPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket"
import {$ClientboundTickingStatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTickingStatePacket"
import {$ClientPacketListenerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ClientPacketListenerKJS"
import {$ClientboundUpdateRecipesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket"
import {$ClientboundPlayerInfoUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket"
import {$KubeSessionData} from "dev.latvian.mods.kubejs.client.KubeSessionData"
import {$ClientboundSetDisplayObjectivePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket"
import {$ClientboundClearTitlesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket"
import {$ClientboundTabListPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTabListPacket"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$ClientboundSetEntityMotionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket"
import {$ClientboundPlayerCombatEnterPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ClientboundMerchantOffersPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket"
import {$ClientboundChunkBatchFinishedPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket"
import {$ClientboundBlockDestructionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket"
import {$ClientboundPlayerPositionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket"
import {$ClientboundPlayerCombatKillPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket"
import {$ClientboundCommandsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCommandsPacket"
import {$TickablePacketListener$$Interface} from "net.minecraft.network.TickablePacketListener"
import {$ClientboundBossEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBossEventPacket"
import {$ClientboundSetTitlesAnimationPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$ClientboundSectionBlocksUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket"
import {$ClientboundSoundPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSoundPacket"
import {$PlayerInfo} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$ClientboundResetScorePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundResetScorePacket"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ClientboundSetEquipmentPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket"
import {$ClientboundDamageEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDamageEventPacket"
import {$ClientboundTickingStepPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTickingStepPacket"
import {$ClientboundAnimatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAnimatePacket"
import {$ClientboundPlayerChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket"
import {$ClientboundOpenSignEditorPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket"
import {$DebugQueryHandler} from "net.minecraft.client.DebugQueryHandler"
import {$ClientboundChunksBiomesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$GameProfile} from "com.mojang.authlib.GameProfile"
import {$ClientboundTeleportEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket"
import {$ClientboundHurtAnimationPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket"
import {$ClientboundContainerClosePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerClosePacket"
import {$ClientboundSetBorderLerpSizePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket"
import {$ClientboundDisguisedChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket"
import {$ClientboundSetEntityLinkPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket"
import {$ClientboundRespawnPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRespawnPacket"
import {$ClientboundContainerSetDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket"
import {$SharedSuggestionProvider} from "net.minecraft.commands.SharedSuggestionProvider"
import {$ClientboundSetChunkCacheCenterPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket"
import {$ClientboundAddExperienceOrbPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddExperienceOrbPacket"
import {$ClientboundChunkBatchStartPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket"
import {$NeoListenableNetworkHandler$$Interface} from "org.sinytra.fabric.networking_api.NeoListenableNetworkHandler"
import {$ClientboundPlayerInfoRemovePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket"
import {$ClientboundSetHealthPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetHealthPacket"
import {$ClientboundLevelParticlesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket"
import {$ClientboundBlockChangedAckPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket"
import {$Set} from "java.util.Set"
import {$ClientboundStopSoundPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundStopSoundPacket"
import {$ClientboundSetTitleTextPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket"
import {$ClientboundBlockUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket"
import {$ClientboundSetPassengersPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket"
import {$ClientboundPlayerLookAtPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$ServerLinks} from "net.minecraft.server.ServerLinks"
import {$ClientboundSoundEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket"
import {$ClientboundSetCarriedItemPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetCarriedItemPacket"
import {$ClientboundUpdateTagsPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket"
import {$ClientboundGameEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundGameEventPacket"
import {$ClientboundLightUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket"
import {$ClientboundPongResponsePacket$$Type} from "net.minecraft.network.protocol.ping.ClientboundPongResponsePacket"
import {$ClientLevel} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ClientboundSystemChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSystemChatPacket"
import {$ClientboundServerDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundServerDataPacket"
import {$ClientboundRecipePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRecipePacket"
import {$ClientboundSetSubtitleTextPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket"
import {$ClientboundUpdateAttributesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket"
import {$ClientboundMapItemDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket"
import {$ClientboundOpenBookPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundOpenBookPacket"
import {$ClientboundSetDefaultSpawnPositionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket"
import {$ClientboundSetEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket"
import {$ClientboundSetTimePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetTimePacket"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$ClientboundProjectilePowerPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket"
import {$ClientboundCustomChatCompletionsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket"
import {$ClientboundTakeItemEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket"
import {$ClientboundChangeDifficultyPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket"
import {$ClientboundExplodePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundExplodePacket"
import {$ClientboundCommandSuggestionsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket"
import {$ClientboundDebugSamplePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDebugSamplePacket"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$ClientboundLoginPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLoginPacket"
import {$ClientboundAwardStatsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$ClientboundStartConfigurationPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket"
import {$ClientboundMoveEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket"
import {$ClientSuggestionProvider} from "net.minecraft.client.multiplayer.ClientSuggestionProvider"
import {$ClientboundHorseScreenOpenPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket"
import {$ClientboundSetCameraPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetCameraPacket"
import {$Collection} from "java.util.Collection"
import {$ClientboundSelectAdvancementsTabPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket"
import {$SessionSearchTrees} from "net.minecraft.client.multiplayer.SessionSearchTrees"
import {$ClientPacketListenerAccessor$$Interface} from "net.createmod.ponder.mixin.client.accessor.ClientPacketListenerAccessor"
import {$ClientGamePacketListener$$Interface} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ClientboundRemoveEntitiesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket"
import {$ClientboundSetPlayerTeamPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket"
import {$ClientboundRemoveMobEffectPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket"
import {$ClientboundSetSimulationDistancePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket"
import {$ClientboundLevelEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelEventPacket"
import {$ClientboundEntityEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundEntityEventPacket"
import {$ClientboundPlaceGhostRecipePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$ProfileKeyPair$$Type} from "net.minecraft.world.entity.player.ProfileKeyPair"
import {$CommandDispatcher} from "com.mojang.brigadier.CommandDispatcher"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$ClientboundRotateHeadPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket"
import {$ClientAdvancements} from "net.minecraft.client.multiplayer.ClientAdvancements"

export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener$$Interface, $TickablePacketListener$$Interface, $NeoListenableNetworkHandler$$Interface, $ClientPacketListenerAccessor$$Interface, $ClientPacketListenerKJS$$Interface {
 "serverChunkRadius": integer
 "commands": $CommandDispatcher<($SharedSuggestionProvider)>

constructor(arg0: $Minecraft$$Type, arg1: $Connection$$Type, arg2: $CommonListenerCookie$$Type)

public "isFeatureEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "clearLevel"(): void
public "scoreboard"(): $Scoreboard
public "handleGameEvent"(arg0: $ClientboundGameEventPacket$$Type): void
public "getConnection"(): $Connection
public "getId"(): $UUID
public "close"(): void
public "tick"(): void
public "levels"(): $Set<($ResourceKey<($Level)>)>
public "getLevel"(): $ClientLevel
public "handleSetCarriedItem"(arg0: $ClientboundSetCarriedItemPacket$$Type): void
public "handleContainerClose"(arg0: $ClientboundContainerClosePacket$$Type): void
public "handlePlayerAbilities"(arg0: $ClientboundPlayerAbilitiesPacket$$Type): void
public "handleChangeDifficulty"(arg0: $ClientboundChangeDifficultyPacket$$Type): void
public "sendChat"(arg0: StringJS): void
public "handleCustomPayload"(arg0: $CustomPacketPayload$$Type): void
public "getDebugQueryHandler"(): $DebugQueryHandler
public "handleEntityEvent"(arg0: $ClientboundEntityEventPacket$$Type): void
public "handleDamageEvent"(arg0: $ClientboundDamageEventPacket$$Type): void
public "getCommands"(): $CommandDispatcher<($SharedSuggestionProvider)>
public "handlePongResponse"(arg0: $ClientboundPongResponsePacket$$Type): void
public "handleSystemChat"(arg0: $ClientboundSystemChatPacket$$Type): void
public "kjs$sessionData"(): $KubeSessionData
public "handleDeleteChat"(arg0: $ClientboundDeleteChatPacket$$Type): void
public "handleSetTime"(arg0: $ClientboundSetTimePacket$$Type): void
public "handleSetSpawn"(arg0: $ClientboundSetDefaultSpawnPositionPacket$$Type): void
public "handleAddEntity"(arg0: $ClientboundAddEntityPacket$$Type): void
public "handleSetHealth"(arg0: $ClientboundSetHealthPacket$$Type): void
public "searchTrees"(): $SessionSearchTrees
public "handleRotateMob"(arg0: $ClientboundRotateHeadPacket$$Type): void
public "handleTickingState"(arg0: $ClientboundTickingStatePacket$$Type): void
public "handleBlockUpdate"(arg0: $ClientboundBlockUpdatePacket$$Type): void
public "handlePlayerChat"(arg0: $ClientboundPlayerChatPacket$$Type): void
public "handleLogin"(arg0: $ClientboundLoginPacket$$Type): void
public "handleTickingStep"(arg0: $ClientboundTickingStepPacket$$Type): void
public "handleMoveEntity"(arg0: $ClientboundMoveEntityPacket$$Type): void
public "handleChunksBiomes"(arg0: $ClientboundChunksBiomesPacket$$Type): void
public "handleCommands"(arg0: $ClientboundCommandsPacket$$Type): void
public "handleSetCamera"(arg0: $ClientboundSetCameraPacket$$Type): void
public "setActionBarText"(arg0: $ClientboundSetActionBarTextPacket$$Type): void
public "setTitleText"(arg0: $ClientboundSetTitleTextPacket$$Type): void
public "handleRespawn"(arg0: $ClientboundRespawnPacket$$Type): void
public "handleUpdateTags"(arg0: $ClientboundUpdateTagsPacket$$Type): void
public "handleExplosion"(arg0: $ClientboundExplodePacket$$Type): void
public "handleTitlesClear"(arg0: $ClientboundClearTitlesPacket$$Type): void
public "handleServerData"(arg0: $ClientboundServerDataPacket$$Type): void
public "handleOpenScreen"(arg0: $ClientboundOpenScreenPacket$$Type): void
public "handleSetEquipment"(arg0: $ClientboundSetEquipmentPacket$$Type): void
public "handleMapItemData"(arg0: $ClientboundMapItemDataPacket$$Type): void
public "handleLevelEvent"(arg0: $ClientboundLevelEventPacket$$Type): void
public "handleLookAt"(arg0: $ClientboundPlayerLookAtPacket$$Type): void
public "handleAwardStats"(arg0: $ClientboundAwardStatsPacket$$Type): void
public "handleBlockEvent"(arg0: $ClientboundBlockEventPacket$$Type): void
public "handleBossUpdate"(arg0: $ClientboundBossEventPacket$$Type): void
public "handleResetScore"(arg0: $ClientboundResetScorePacket$$Type): void
public "handleBundlePacket"(arg0: $ClientboundBundlePacket$$Type): void
public "handleOpenBook"(arg0: $ClientboundOpenBookPacket$$Type): void
public "handleDebugSample"(arg0: $ClientboundDebugSamplePacket$$Type): void
public "setSubtitleText"(arg0: $ClientboundSetSubtitleTextPacket$$Type): void
public "handleAddObjective"(arg0: $ClientboundSetObjectivePacket$$Type): void
public "handleSetScore"(arg0: $ClientboundSetScorePacket$$Type): void
public "handleItemCooldown"(arg0: $ClientboundCooldownPacket$$Type): void
public "setTitlesAnimation"(arg0: $ClientboundSetTitlesAnimationPacket$$Type): void
public "handleSoundEvent"(arg0: $ClientboundSoundPacket$$Type): void
public "registryAccess"(): $RegistryAccess$Frozen
public "getServerData"(): $ServerData
public "enabledFeatures"(): $FeatureFlagSet
public "getAdvancements"(): $ClientAdvancements
public "sendCommand"(arg0: StringJS): void
public "getPlayerInfo"(arg0: StringJS): $PlayerInfo
public "getPlayerInfo"(arg0: $UUID$$Type): $PlayerInfo
public "handleMoveVehicle"(arg0: $ClientboundMoveVehiclePacket$$Type): void
public "handleMovePlayer"(arg0: $ClientboundPlayerPositionPacket$$Type): void
public "handlePlaceRecipe"(arg0: $ClientboundPlaceGhostRecipePacket$$Type): void
public "handleAnimate"(arg0: $ClientboundAnimatePacket$$Type): void
public "updateSearchTrees"(): void
public "getRecipeManager"(): $RecipeManager
public "getLocalGameProfile"(): $GameProfile
public "sendUnsignedCommand"(arg0: StringJS): boolean
public "handleBlockChangedAck"(arg0: $ClientboundBlockChangedAckPacket$$Type): void
public "isAcceptingMessages"(): boolean
public "handleInitializeBorder"(arg0: $ClientboundInitializeBorderPacket$$Type): void
public "serverLinks"(): $ServerLinks
public "potionBrewing"(): $PotionBrewing
public "handleDisconnect"(): void
public "getOnlinePlayers"(): $Collection<($PlayerInfo)>
public "getOnlinePlayerIds"(): $Collection<($UUID)>
public "getConnectionType"(): $ConnectionType
public "setKeyPair"(arg0: $ProfileKeyPair$$Type): void
public "handleUpdateRecipes"(arg0: $ClientboundUpdateRecipesPacket$$Type): void
public "handleTagQueryPacket"(arg0: $ClientboundTagQueryPacket$$Type): void
public "handleConfigurationStart"(arg0: $ClientboundStartConfigurationPacket$$Type): void
public "handleStopSoundEvent"(arg0: $ClientboundStopSoundPacket$$Type): void
public "handleHurtAnimation"(arg0: $ClientboundHurtAnimationPacket$$Type): void
public "handleAddOrRemoveRecipes"(arg0: $ClientboundRecipePacket$$Type): void
public "handlePlayerCombatEnd"(arg0: $ClientboundPlayerCombatEndPacket$$Type): void
public "handlePlayerCombatEnter"(arg0: $ClientboundPlayerCombatEnterPacket$$Type): void
public "getSuggestionsProvider"(): $ClientSuggestionProvider
public "handleEntityLinkPacket"(arg0: $ClientboundSetEntityLinkPacket$$Type): void
public "handleTeleportEntity"(arg0: $ClientboundTeleportEntityPacket$$Type): void
public "handleUpdateMobEffect"(arg0: $ClientboundUpdateMobEffectPacket$$Type): void
public "handleOpenSignEditor"(arg0: $ClientboundOpenSignEditorPacket$$Type): void
public "handleAddExperienceOrb"(arg0: $ClientboundAddExperienceOrbPacket$$Type): void
public "handleForgetLevelChunk"(arg0: $ClientboundForgetLevelChunkPacket$$Type): void
public "handleContainerSetSlot"(arg0: $ClientboundContainerSetSlotPacket$$Type): void
public "handleLevelChunkWithLight"(arg0: $ClientboundLevelChunkWithLightPacket$$Type): void
public "handleDisguisedChat"(arg0: $ClientboundDisguisedChatPacket$$Type): void
public "handleBlockDestruction"(arg0: $ClientboundBlockDestructionPacket$$Type): void
public "handleSetEntityData"(arg0: $ClientboundSetEntityDataPacket$$Type): void
public "handleContainerContent"(arg0: $ClientboundContainerSetContentPacket$$Type): void
public "handleSetEntityMotion"(arg0: $ClientboundSetEntityMotionPacket$$Type): void
public "handleTakeItemEntity"(arg0: $ClientboundTakeItemEntityPacket$$Type): void
public "handleRemoveEntities"(arg0: $ClientboundRemoveEntitiesPacket$$Type): void
public "handleSetExperience"(arg0: $ClientboundSetExperiencePacket$$Type): void
public "handleChunkBlocksUpdate"(arg0: $ClientboundSectionBlocksUpdatePacket$$Type): void
public "handleHorseScreenOpen"(arg0: $ClientboundHorseScreenOpenPacket$$Type): void
public "handleContainerSetData"(arg0: $ClientboundContainerSetDataPacket$$Type): void
public "handleCommandSuggestions"(arg0: $ClientboundCommandSuggestionsPacket$$Type): void
public "handleTabListCustomisation"(arg0: $ClientboundTabListPacket$$Type): void
public "handleUpdateAttributes"(arg0: $ClientboundUpdateAttributesPacket$$Type): void
public "handlePlayerInfoUpdate"(arg0: $ClientboundPlayerInfoUpdatePacket$$Type): void
public "handleSetBorderSize"(arg0: $ClientboundSetBorderSizePacket$$Type): void
public "handleSetDisplayObjective"(arg0: $ClientboundSetDisplayObjectivePacket$$Type): void
public "handleSetChunkCacheRadius"(arg0: $ClientboundSetChunkCacheRadiusPacket$$Type): void
public "handleChunkBatchFinished"(arg0: $ClientboundChunkBatchFinishedPacket$$Type): void
public "handleSetBorderLerpSize"(arg0: $ClientboundSetBorderLerpSizePacket$$Type): void
public "handlePlayerCombatKill"(arg0: $ClientboundPlayerCombatKillPacket$$Type): void
public "handleSetBorderCenter"(arg0: $ClientboundSetBorderCenterPacket$$Type): void
public "handleLightUpdatePacket"(arg0: $ClientboundLightUpdatePacket$$Type): void
public "getListedOnlinePlayers"(): $Collection<($PlayerInfo)>
public "handleParticleEvent"(arg0: $ClientboundLevelParticlesPacket$$Type): void
public "handleSoundEntityEvent"(arg0: $ClientboundSoundEntityPacket$$Type): void
public "handleSetPlayerTeamPacket"(arg0: $ClientboundSetPlayerTeamPacket$$Type): void
public "handleMerchantOffers"(arg0: $ClientboundMerchantOffersPacket$$Type): void
public "handleChunkBatchStart"(arg0: $ClientboundChunkBatchStartPacket$$Type): void
public "markMessageAsProcessed"(arg0: $PlayerChatMessage$$Type, arg1: boolean): void
public "handleSetChunkCacheCenter"(arg0: $ClientboundSetChunkCacheCenterPacket$$Type): void
public "handlePlayerInfoRemove"(arg0: $ClientboundPlayerInfoRemovePacket$$Type): void
public "handleRemoveMobEffect"(arg0: $ClientboundRemoveMobEffectPacket$$Type): void
public "handleSetBorderWarningDelay"(arg0: $ClientboundSetBorderWarningDelayPacket$$Type): void
public "handleCustomChatCompletions"(arg0: $ClientboundCustomChatCompletionsPacket$$Type): void
public "handleSetEntityPassengersPacket"(arg0: $ClientboundSetPassengersPacket$$Type): void
public "handleSetBorderWarningDistance"(arg0: $ClientboundSetBorderWarningDistancePacket$$Type): void
public "handleSelectAdvancementsTab"(arg0: $ClientboundSelectAdvancementsTabPacket$$Type): void
public "handleSetSimulationDistance"(arg0: $ClientboundSetSimulationDistancePacket$$Type): void
public "handleUpdateAdvancementsPacket"(arg0: $ClientboundUpdateAdvancementsPacket$$Type): void
public "catnip$getServerChunkRadius"(): integer
public "handleProjectilePowerPacket"(arg0: $ClientboundProjectilePowerPacket$$Type): void
public "handleBlockEntityData"(arg0: $ClientboundBlockEntityDataPacket$$Type): void
public "protocol"(): $ConnectionProtocol
public "flow"(): $PacketFlow
get "connection"(): $Connection
get "id"(): $UUID
get "level"(): $ClientLevel
get "debugQueryHandler"(): $DebugQueryHandler
set "actionBarText"(value: $ClientboundSetActionBarTextPacket$$Type)
set "titleText"(value: $ClientboundSetTitleTextPacket$$Type)
set "subtitleText"(value: $ClientboundSetSubtitleTextPacket$$Type)
set "titlesAnimation"(value: $ClientboundSetTitlesAnimationPacket$$Type)
get "serverData"(): $ServerData
get "advancements"(): $ClientAdvancements
get "recipeManager"(): $RecipeManager
get "localGameProfile"(): $GameProfile
get "acceptingMessages"(): boolean
get "onlinePlayers"(): $Collection<($PlayerInfo)>
get "onlinePlayerIds"(): $Collection<($UUID)>
get "connectionType"(): $ConnectionType
set "keyPair"(value: $ProfileKeyPair$$Type)
get "suggestionsProvider"(): $ClientSuggestionProvider
get "listedOnlinePlayers"(): $Collection<($PlayerInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPacketListener$$Type = ($ClientPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPacketListener$$Original = $ClientPacketListener;}
declare module "net.minecraft.client.multiplayer.ProfileKeyPairManager" {
import {$User$$Type} from "net.minecraft.client.User"
import {$UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Optional} from "java.util.Optional"
import {$Path$$Type} from "java.nio.file.Path"
import {$ProfileKeyPair} from "net.minecraft.world.entity.player.ProfileKeyPair"

export interface $ProfileKeyPairManager$$Interface {
}

export class $ProfileKeyPairManager implements $ProfileKeyPairManager$$Interface {
static readonly "EMPTY_KEY_MANAGER": $ProfileKeyPairManager

static "create"(arg0: $UserApiService$$Type, arg1: $User$$Type, arg2: $Path$$Type): $ProfileKeyPairManager
 "prepareKeyPair"(): $CompletableFuture<($Optional<($ProfileKeyPair)>)>
 "shouldRefreshKeyPair"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileKeyPairManager$$Type = ($ProfileKeyPairManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProfileKeyPairManager$$Original = $ProfileKeyPairManager;}
declare module "net.minecraft.client.multiplayer.ClientAdvancements" {
import {$ClientAdvancements$Listener$$Type} from "net.minecraft.client.multiplayer.ClientAdvancements$Listener"
import {$WorldSessionTelemetryManager$$Type} from "net.minecraft.client.telemetry.WorldSessionTelemetryManager"
import {$Map} from "java.util.Map"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AdvancementTree} from "net.minecraft.advancements.AdvancementTree"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$AccessorClientAdvancements$$Interface} from "vazkii.patchouli.mixin.client.AccessorClientAdvancements"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$ClientboundUpdateAdvancementsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket"

export class $ClientAdvancements implements $AccessorClientAdvancements$$Interface {
constructor(arg0: $Minecraft$$Type, arg1: $WorldSessionTelemetryManager$$Type)

public "get"(arg0: $ResourceLocation$$Type): $AdvancementHolder
public "update"(arg0: $ClientboundUpdateAdvancementsPacket$$Type): void
public "getTree"(): $AdvancementTree
public "getProgress"(): $Map
public "setListener"(arg0: $ClientAdvancements$Listener$$Type): void
public "setSelectedTab"(arg0: $AdvancementHolder$$Type, arg1: boolean): void
public "handler$cnb000$patchouli$onSync"(arg0: $ClientboundUpdateAdvancementsPacket$$Type, arg1: $CallbackInfo$$Type): void
get "tree"(): $AdvancementTree
get "progress"(): $Map
set "listener"(value: $ClientAdvancements$Listener$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientAdvancements$$Type = ($ClientAdvancements);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientAdvancements$$Original = $ClientAdvancements;}
declare module "net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl" {
import {$ClientCommonPacketListener$$Interface} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$ClientboundPingPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundPingPacket"
import {$ClientboundCookieRequestPacket$$Type} from "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientboundDisconnectPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundDisconnectPacket"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Exception$$Type} from "java.lang.Exception"
import {$ClientboundResourcePackPushPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket"
import {$ClientboundCustomReportDetailsPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket"
import {$Set$$Type} from "java.util.Set"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$ClientboundTransferPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundTransferPacket"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$ClientboundResourcePackPopPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket"
import {$ClientboundUpdateTagsPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ClientboundStoreCookiePacket$$Type} from "net.minecraft.network.protocol.common.ClientboundStoreCookiePacket"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ClientboundServerLinksPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundServerLinksPacket"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ClientboundKeepAlivePacket$$Type} from "net.minecraft.network.protocol.common.ClientboundKeepAlivePacket"

export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener$$Interface {
public "getConnection"(): $Connection
public "handleCustomPayload"(arg0: $ClientboundCustomPayloadPacket$$Type): void
public "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
public "handleKeepAlive"(arg0: $ClientboundKeepAlivePacket$$Type): void
public "send"(arg0: $Packet$$Type<(never)>): void
public "handleStoreCookie"(arg0: $ClientboundStoreCookiePacket$$Type): void
public "handleTransfer"(arg0: $ClientboundTransferPacket$$Type): void
public "handleServerLinks"(arg0: $ClientboundServerLinksPacket$$Type): void
public "handleRequestCookie"(arg0: $ClientboundCookieRequestPacket$$Type): void
public "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
public "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
public "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
public "serverBrand"(): StringJS
public "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
public "handleDisconnect"(arg0: $ClientboundDisconnectPacket$$Type): void
public "handlePing"(arg0: $ClientboundPingPacket$$Type): void
public "wrapOperation$dco001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket"(arg0: $Connection$$Type, arg1: $Set$$Type, arg2: $Operation$$Type): void
public "wrapOperation$dco001$fabric_networking_api_v1$onCustomPayloadRegisterPacket"(arg0: $Connection$$Type, arg1: $Set$$Type, arg2: $Operation$$Type): void
public "handleResourcePackPush"(arg0: $ClientboundResourcePackPushPacket$$Type): void
public "handleResourcePackPop"(arg0: $ClientboundResourcePackPopPacket$$Type): void
public "handleCustomReportDetails"(arg0: $ClientboundCustomReportDetailsPacket$$Type): void
public "handleUpdateTags"(arg0: $ClientboundUpdateTagsPacket$$Type): void
public "flow"(): $PacketFlow
public "disconnect"(arg0: $Component$$Type): void
public "send"(arg0: $CustomPacketPayload$$Type): void
public "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
public "protocol"(): $ConnectionProtocol
public "fillCrashReport"(arg0: $CrashReport$$Type): void
public "isAcceptingMessages"(): boolean
public "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
public "hasChannel"(arg0: $ResourceLocation$$Type): boolean
public "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
public "getConnectionType"(): $ConnectionType
get "connection"(): $Connection
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "acceptingMessages"(): boolean
get "connectionType"(): $ConnectionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommonPacketListenerImpl$$Type = ($ClientCommonPacketListenerImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientCommonPacketListenerImpl$$Original = $ClientCommonPacketListenerImpl;}
declare module "net.minecraft.client.multiplayer.MultiPlayerGameMode" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EntityHitResult$$Type} from "net.minecraft.world.phys.EntityHitResult"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ClientPacketListener, $ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$ClientRecipeBook$$Type} from "net.minecraft.client.ClientRecipeBook"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StatsCounter$$Type} from "net.minecraft.stats.StatsCounter"

export class $MultiPlayerGameMode {
 "destroyBlockPos": $BlockPos
 "destroyDelay": integer
readonly "connection": $ClientPacketListener
 "destroyProgress": float

constructor(arg0: $Minecraft$$Type, arg1: $ClientPacketListener$$Type)

public "createPlayer"(arg0: $ClientLevel$$Type, arg1: $StatsCounter$$Type, arg2: $ClientRecipeBook$$Type): $LocalPlayer
public "createPlayer"(arg0: $ClientLevel$$Type, arg1: $StatsCounter$$Type, arg2: $ClientRecipeBook$$Type, arg3: boolean, arg4: boolean): $LocalPlayer
public "hasExperience"(): boolean
public "setLocalMode"(arg0: $GameType$$Type): void
public "setLocalMode"(arg0: $GameType$$Type, arg1: $GameType$$Type): void
public "canHurtPlayer"(): boolean
public "adjustPlayer"(arg0: $Player$$Type): void
public "getDestroyStage"(): integer
public "useItemOn"(arg0: $LocalPlayer$$Type, arg1: $InteractionHand$$Type, arg2: $BlockHitResult$$Type): $InteractionResult
public "interact"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $InteractionHand$$Type): $InteractionResult
public "interactAt"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $EntityHitResult$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "useItem"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "tick"(): void
public "getPreviousPlayerMode"(): $GameType
public "destroyBlock"(arg0: $BlockPos$$Type): boolean
public "handlePickItem"(arg0: integer): void
public "stopDestroyBlock"(): void
public "isDestroying"(): boolean
public "hasMissTime"(): boolean
public "startDestroyBlock"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
public "hasInfiniteItems"(): boolean
public "releaseUsingItem"(arg0: $Player$$Type): void
public "handleInventoryButtonClick"(arg0: integer, arg1: integer): void
public "handleCreativeModeItemDrop"(arg0: $ItemStack$$Type): void
public "isAlwaysFlying"(): boolean
public "handlePlaceRecipe"(arg0: integer, arg1: $RecipeHolder$$Type<(never)>, arg2: boolean): void
public "isServerControlledInventory"(): boolean
public "handleSlotStateChanged"(arg0: integer, arg1: integer, arg2: boolean): void
public "handleInventoryMouseClick"(arg0: integer, arg1: integer, arg2: integer, arg3: $ClickType$$Type, arg4: $Player$$Type): void
public "attack"(arg0: $Player$$Type, arg1: $Entity$$Type): void
public "getPlayerMode"(): $GameType
public "handleCreativeModeItemAdd"(arg0: $ItemStack$$Type, arg1: integer): void
public "continueDestroyBlock"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
set "localMode"(value: $GameType$$Type)
get "destroyStage"(): integer
get "previousPlayerMode"(): $GameType
get "destroying"(): boolean
get "alwaysFlying"(): boolean
get "serverControlledInventory"(): boolean
get "playerMode"(): $GameType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPlayerGameMode$$Type = ($MultiPlayerGameMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiPlayerGameMode$$Original = $MultiPlayerGameMode;}
declare module "net.minecraft.client.multiplayer.chat.ChatLog" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$LoggedChatEvent, $LoggedChatEvent$$Type} from "net.minecraft.client.multiplayer.chat.LoggedChatEvent"

export class $ChatLog {
constructor(arg0: integer)

public "end"(): integer
public "lookup"(arg0: integer): $LoggedChatEvent
public "start"(): integer
public "push"(arg0: $LoggedChatEvent$$Type): void
public static "codec"(arg0: integer): $Codec<($ChatLog)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatLog$$Type = ($ChatLog);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatLog$$Original = $ChatLog;}
declare module "net.minecraft.client.multiplayer.chat.report.ReportType" {
import {$Enum} from "java.lang.Enum"

export class $ReportType extends $Enum<($ReportType)> {
static readonly "CHAT": $ReportType
static readonly "USERNAME": $ReportType
static readonly "SKIN": $ReportType

public "backendName"(): StringJS
public static "values"(): ($ReportType)[]
public static "valueOf"(arg0: StringJS): $ReportType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportType$$Type = (("chat") | ("skin") | ("username"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportType$$Original = $ReportType;}
declare module "net.minecraft.client.multiplayer.chat.report.ReportingContext" {
import {$UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$UUID$$Type} from "java.util.UUID"
import {$Report$$Type} from "net.minecraft.client.multiplayer.chat.report.Report"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ReportEnvironment$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import {$AbuseReportSender, $AbuseReportSender$$Type} from "net.minecraft.client.multiplayer.chat.report.AbuseReportSender"
import {$ChatLog, $ChatLog$$Type} from "net.minecraft.client.multiplayer.chat.ChatLog"

export class $ReportingContext {
constructor(arg0: $AbuseReportSender$$Type, arg1: $ReportEnvironment$$Type, arg2: $ChatLog$$Type)

public "matches"(arg0: $ReportEnvironment$$Type): boolean
public static "create"(arg0: $ReportEnvironment$$Type, arg1: $UserApiService$$Type): $ReportingContext
public "sender"(): $AbuseReportSender
public "draftReportHandled"(arg0: $Minecraft$$Type, arg1: $Screen$$Type, arg2: $Runnable$$Type, arg3: boolean): void
public "hasDraftReport"(): boolean
public "chatLog"(): $ChatLog
public "setReportDraft"(arg0: $Report$$Type): void
public "hasDraftReportFor"(arg0: $UUID$$Type): boolean
set "reportDraft"(value: $Report$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportingContext$$Type = ($ReportingContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportingContext$$Original = $ReportingContext;}
declare module "net.minecraft.client.multiplayer.chat.report.ReportEnvironment" {
import {$RealmsServer$$Type} from "com.mojang.realmsclient.dto.RealmsServer"
import {$ReportEnvironment$Server, $ReportEnvironment$Server$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment$Server"
import {$AbuseReportRequest$ClientInfo} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo"
import {$AbuseReportRequest$RealmInfo} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo"
import {$AbuseReportRequest$ThirdPartyServerInfo} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo"
import {$Record} from "java.lang.Record"

export class $ReportEnvironment extends $Record {
constructor(arg0: StringJS, arg1: $ReportEnvironment$Server$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: $ReportEnvironment$Server$$Type): $ReportEnvironment
public static "local"(): $ReportEnvironment
public "server"(): $ReportEnvironment$Server
public "clientVersion"(): StringJS
public static "realm"(arg0: $RealmsServer$$Type): $ReportEnvironment
public static "thirdParty"(arg0: StringJS): $ReportEnvironment
public "clientInfo"(): $AbuseReportRequest$ClientInfo
public "realmInfo"(): $AbuseReportRequest$RealmInfo
public "thirdPartyServerInfo"(): $AbuseReportRequest$ThirdPartyServerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportEnvironment$$Type = ({"clientVersion"?: StringJS, "server"?: $ReportEnvironment$Server$$Type}) | ([clientVersion?: StringJS, server?: $ReportEnvironment$Server$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportEnvironment$$Original = $ReportEnvironment;}
declare module "net.minecraft.client.multiplayer.ServerData" {
import {$ServerData$State, $ServerData$State$$Type} from "net.minecraft.client.multiplayer.ServerData$State"
import {$ServerStatus$Players} from "net.minecraft.network.protocol.status.ServerStatus$Players"
import {$ExtendedServerListData} from "net.neoforged.neoforge.client.ExtendedServerListData"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List} from "java.util.List"
import {$ServerData$ServerPackStatus, $ServerData$ServerPackStatus$$Type} from "net.minecraft.client.multiplayer.ServerData$ServerPackStatus"
import {$ServerData$Type, $ServerData$Type$$Type} from "net.minecraft.client.multiplayer.ServerData$Type"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ServerData {
 "neoForgeData": $ExtendedServerListData
 "motd": $Component
 "protocol": integer
 "players": $ServerStatus$Players
 "ping": long
 "ip": StringJS
 "playerList": $List<($Component)>
 "name": StringJS
 "version": $Component
 "status": $Component

constructor(arg0: StringJS, arg1: StringJS, arg2: $ServerData$Type$$Type)

public "isLan"(): boolean
public "isRealm"(): boolean
public "type"(): $ServerData$Type
public "write"(): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type): $ServerData
public "state"(): $ServerData$State
public "setState"(arg0: $ServerData$State$$Type): void
public "copyFrom"(arg0: $ServerData$$Type): void
public "getIconBytes"(): (byte)[]
public "copyNameIconFrom"(arg0: $ServerData$$Type): void
public static "validateIcon"(arg0: (byte)[]): (byte)[]
public "setIconBytes"(arg0: (byte)[]): void
public "getResourcePackStatus"(): $ServerData$ServerPackStatus
public "setResourcePackStatus"(arg0: $ServerData$ServerPackStatus$$Type): void
get "lan"(): boolean
get "realm"(): boolean
get "iconBytes"(): (byte)[]
set "iconBytes"(value: (byte)[])
get "resourcePackStatus"(): $ServerData$ServerPackStatus
set "resourcePackStatus"(value: $ServerData$ServerPackStatus$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerData$$Type = ($ServerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerData$$Original = $ServerData;}
declare module "net.minecraft.client.multiplayer.chat.report.AbuseReportSender" {
import {$AbuseReport$$Type} from "com.mojang.authlib.minecraft.report.AbuseReport"
import {$UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$UUID$$Type} from "java.util.UUID"
import {$ReportEnvironment$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import {$ReportType$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportType"
import {$Unit} from "com.mojang.datafixers.util.Unit"
import {$AbuseReportLimits} from "com.mojang.authlib.minecraft.report.AbuseReportLimits"

export interface $AbuseReportSender$$Interface {
get "enabled"(): boolean
}

export class $AbuseReportSender implements $AbuseReportSender$$Interface {
 "reportLimits"(): $AbuseReportLimits
 "isEnabled"(): boolean
static "create"(arg0: $ReportEnvironment$$Type, arg1: $UserApiService$$Type): $AbuseReportSender
 "send"(arg0: $UUID$$Type, arg1: $ReportType$$Type, arg2: $AbuseReport$$Type): $CompletableFuture<($Unit)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportSender$$Type = ($AbuseReportSender);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbuseReportSender$$Original = $AbuseReportSender;}
declare module "net.minecraft.client.multiplayer.ClientChunkCache$Storage" {
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$AtomicReferenceArray} from "java.util.concurrent.atomic.AtomicReferenceArray"
import {$AccessorClientChunkCacheStorage$$Interface} from "com.railwayteam.railways.mixin.conductor_possession.AccessorClientChunkCacheStorage"

export class $ClientChunkCache$Storage implements $AccessorClientChunkCacheStorage$$Interface {
readonly "chunks": $AtomicReferenceArray<($LevelChunk)>

public "inRange"(arg0: integer, arg1: integer): boolean
public "railways$getViewCenterX"(): integer
public "railways$setViewCenterX"(arg0: integer): void
public "railways$setViewCenterZ"(arg0: integer): void
public "railways$getViewCenterZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkCache$Storage$$Type = ($ClientChunkCache$Storage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChunkCache$Storage$$Original = $ClientChunkCache$Storage;}
declare module "net.minecraft.client.multiplayer.ClientSuggestionProvider" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$List$$Type} from "java.util.List"
import {$FabricClientCommandSource$$Interface} from "net.fabricmc.fabric.api.client.command.v2.FabricClientCommandSource"
import {$Level} from "net.minecraft.world.level.Level"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SharedSuggestionProvider$$Interface} from "net.minecraft.commands.SharedSuggestionProvider"
import {$Message$$Type} from "com.mojang.brigadier.Message"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$Vec2} from "net.minecraft.world.phys.Vec2"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientboundCustomChatCompletionsPacket$Action$$Type} from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action"
import {$ClientLevel} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"

export class $ClientSuggestionProvider implements $SharedSuggestionProvider$$Interface, $FabricClientCommandSource$$Interface {
constructor(arg0: $ClientPacketListener$$Type, arg1: $Minecraft$$Type)

public "getCustomTabSugggestions"(): $Collection<(StringJS)>
public "levels"(): $Set<($ResourceKey<($Level)>)>
public "sendFeedback"(arg0: $Component$$Type): void
public "getClient"(): $Minecraft
public "getPlayer"(): $LocalPlayer
public "registryAccess"(): $RegistryAccess
public "enabledFeatures"(): $FeatureFlagSet
public "getWorld"(): $ClientLevel
public "getRecipeNames"(): $Stream<($ResourceLocation)>
public "getAvailableSounds"(): $Stream<($ResourceLocation)>
public "getSelectedEntities"(): $Collection<(StringJS)>
public "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
public "getOnlinePlayerNames"(): $Collection<(StringJS)>
public "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
public "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(never)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
public "hasPermission"(arg0: integer): boolean
public "getAllTeams"(): $Collection<(StringJS)>
public "customSuggestion"(arg0: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
public "completeCustomSuggestions"(arg0: integer, arg1: $Suggestions$$Type): void
public "modifyCustomCompletions"(arg0: $ClientboundCustomChatCompletionsPacket$Action$$Type, arg1: $List$$Type<(StringJS)>): void
public "sendError"(arg0: $Component$$Type): void
public static "suggest"(arg0: $Iterable$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggest"(arg0: (StringJS)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (StringJS)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
public static "suggest"(arg0: $Stream$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
public static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: StringJS, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
public static "matchesSubStr"(arg0: StringJS, arg1: StringJS): boolean
public static "suggest2DCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
public "suggestRegistryElements"(arg0: $Registry$$Type<(never)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
public static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
public static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
public static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
public static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
public static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggestCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
public "getPosition"(): $Vec3
public "getEntity"(): $Entity
public "getRotation"(): $Vec2
public "getMeta"(arg0: StringJS): any
get "customTabSugggestions"(): $Collection<(StringJS)>
get "client"(): $Minecraft
get "player"(): $LocalPlayer
get "world"(): $ClientLevel
get "recipeNames"(): $Stream<($ResourceLocation)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "selectedEntities"(): $Collection<(StringJS)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "onlinePlayerNames"(): $Collection<(StringJS)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "allTeams"(): $Collection<(StringJS)>
get "position"(): $Vec3
get "entity"(): $Entity
get "rotation"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSuggestionProvider$$Type = ($ClientSuggestionProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientSuggestionProvider$$Original = $ClientSuggestionProvider;}
declare module "net.minecraft.client.multiplayer.ServerData$State" {
import {$Enum} from "java.lang.Enum"

export class $ServerData$State extends $Enum<($ServerData$State)> {
static readonly "PINGING": $ServerData$State
static readonly "SUCCESSFUL": $ServerData$State
static readonly "INITIAL": $ServerData$State
static readonly "INCOMPATIBLE": $ServerData$State
static readonly "UNREACHABLE": $ServerData$State

public static "values"(): ($ServerData$State)[]
public static "valueOf"(arg0: StringJS): $ServerData$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerData$State$$Type = (("initial") | ("pinging") | ("unreachable") | ("incompatible") | ("successful"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerData$State$$Original = $ServerData$State;}
declare module "net.minecraft.client.multiplayer.chat.LoggedChatEvent$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $LoggedChatEvent$Type extends $Enum<($LoggedChatEvent$Type)> implements $StringRepresentable$$Interface {
static readonly "PLAYER": $LoggedChatEvent$Type
static readonly "SYSTEM": $LoggedChatEvent$Type

public static "values"(): ($LoggedChatEvent$Type)[]
public static "valueOf"(arg0: StringJS): $LoggedChatEvent$Type
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggedChatEvent$Type$$Type = (("player") | ("system"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoggedChatEvent$Type$$Original = $LoggedChatEvent$Type;}
declare module "net.minecraft.client.multiplayer.ClientLevel" {
import {$Iterable} from "java.lang.Iterable"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ClonedClientLevel, $ClonedClientLevel$$Type} from "com.sonicether.soundphysics.world.ClonedClientLevel"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$ICapableObject$$Interface} from "xaero.pac.common.capability.ICapableObject"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ClientWorldAccessor$$Interface} from "net.caffeinemc.mods.lithium.common.client.ClientWorldAccessor"
import {$PartEntity} from "net.neoforged.neoforge.entity.PartEntity"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ClientLevelKJS$$Interface} from "dev.latvian.mods.kubejs.core.ClientLevelKJS"
import {$ArrayList} from "java.util.ArrayList"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$LevelEntityGetter} from "net.minecraft.world.level.entity.LevelEntityGetter"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$KubeAnimatedParticle} from "dev.latvian.mods.kubejs.client.KubeAnimatedParticle"
import {$CrashReportCategory} from "net.minecraft.CrashReportCategory"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$DimensionSpecialEffects} from "net.minecraft.client.renderer.DimensionSpecialEffects"
import {$ModelDataManager} from "net.neoforged.neoforge.client.model.data.ModelDataManager"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$BlockSnapshot} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$List, $List$$Type} from "java.util.List"
import {$FireworkExplosion$$Type} from "net.minecraft.world.item.component.FireworkExplosion"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TransientEntitySectionManager} from "net.minecraft.world.level.entity.TransientEntitySectionManager"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CachingClientLevel$$Interface} from "com.sonicether.soundphysics.world.CachingClientLevel"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$Collection} from "java.util.Collection"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$TickingBlockEntity} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClientLevel$ClientLevelData, $ClientLevel$ClientLevelData$$Type} from "net.minecraft.client.multiplayer.ClientLevel$ClientLevelData"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "xaero.pac.common.capability.ICapabilityProvider"
import {$SpriteSet$$Type} from "net.minecraft.client.particle.SpriteSet"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$ClientChunkCache} from "net.minecraft.client.multiplayer.ClientChunkCache"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $ClientLevel extends $Level implements $ICapableObject$$Interface, $ClientWorldAccessor$$Interface, $ClientLevelKJS$$Interface, $CachingClientLevel$$Interface {
 "restoringBlockSnapshots": boolean
 "oThunderLevel": float
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "thunderLevel": float
readonly "random": $RandomSource
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<($Level)>
 "oRainLevel": float
readonly "entityStorage": $TransientEntitySectionManager<($Entity)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "MAX_BRIGHTNESS": integer
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "rainLevel": float
 "captureBlockSnapshots": boolean

constructor(arg0: $ClientPacketListener$$Type, arg1: $ClientLevel$ClientLevelData$$Type, arg2: $ResourceKey$$Type<($Level)>, arg3: $Holder$$Type<($DimensionType)>, arg4: integer, arg5: integer, arg6: $Supplier$$Type<($ProfilerFiller$$Type)>, arg7: $LevelRenderer$$Type, arg8: boolean, arg9: long)

public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
public "disconnect"(): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "toString"(): StringJS
public "unload"(arg0: $LevelChunk$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type): void
public "getEntities"(): $LevelEntityGetter<($Entity)>
public "getMapData"(arg0: $MapId$$Type): $MapItemSavedData
public "setMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "setDayTime"(arg0: long): void
public "addEntity"(arg0: $Entity$$Type): void
public "sound_physics_remastered$getCachedClone"(): $ClonedClientLevel
public "sound_physics_remastered$setCachedClone"(arg0: $ClonedClientLevel$$Type): void
public "getDayTimeFraction"(): float
public "getEntityCount"(): integer
public "setSectionDirtyWithNeighbors"(arg0: integer, arg1: integer, arg2: integer): void
public "setServerSimulationDistance"(arg0: integer): void
public "setServerVerifiedBlockState"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): void
public "getServerSimulationDistance"(): integer
public "getXaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
public "setXaero_OPAC_CapabilityProvider"(arg0: $ICapabilityProvider$$Type): void
public "getEntity"(arg0: integer): $Entity
public "getLevelData"(): $ClientLevel$ClientLevelData
public "enabledFeatures"(): $FeatureFlagSet
public "tickRateManager"(): $TickRateManager
public "tickEntities"(): void
public "fillReportDetails"(arg0: $CrashReport$$Type): $CrashReportCategory
public "animateTick"(arg0: integer, arg1: integer, arg2: integer): void
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "handler$bnl001$immersive_melodies$immersiveMelodies$injectTickPassenger"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $CallbackInfo$$Type): void
public "handler$bnl001$immersive_melodies$immersiveMelodies$injectTickEntity"(arg0: $Entity$$Type, arg1: $CallbackInfo$$Type): void
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getSkyDarken"(arg0: float): float
public "shouldTickDeath"(arg0: $Entity$$Type): boolean
public "getScoreboard"(): $Scoreboard
public "playSeededSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$$Type<($SoundEvent)>, arg5: $SoundSource$$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float, arg6: long): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "playLocalSound"(arg0: $Entity$$Type, arg1: $SoundEvent$$Type, arg2: $SoundSource$$Type, arg3: float, arg4: float): void
public "playLocalSound"(arg0: double, arg1: double, arg2: double, arg3: $SoundEvent$$Type, arg4: $SoundSource$$Type, arg5: float, arg6: float, arg7: boolean): void
public "getChunkSource"(): $ClientChunkCache
public "getRecipeManager"(): $RecipeManager
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "addDestroyBlockEffect"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "addAlwaysVisibleParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "addAlwaysVisibleParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "getModelDataManager"(): $ModelDataManager
public "entitiesForRendering"(): $Iterable<($Entity)>
public "handleBlockChangedAck"(arg0: integer): void
public "gatherChunkSourceStats"(): StringJS
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "isLightUpdateQueueEmpty"(): boolean
public "lithium$getEntityManager"(): $TransientEntitySectionManager
public "effects"(): $DimensionSpecialEffects
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "sendBlockUpdated"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "getPartEntities"(): $Collection<($PartEntity<(never)>)>
public "setBlocksDirty"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "getFreeMapId"(): $MapId
public "createFireworks"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: $List$$Type<($FireworkExplosion$$Type)>): void
public "getDayTimePerTick"(): float
public "setDayTimePerTick"(arg0: float): void
public "setDayTimeFraction"(arg0: float): void
public "sendPacketToServer"(arg0: $Packet$$Type<(never)>): void
public "potionBrewing"(): $PotionBrewing
public "setSkyFlashTime"(arg0: integer): void
public "setGameTime"(arg0: long): void
public "syncBlockState"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $Vec3$$Type): void
public "getSkyColor"(arg0: $Vec3$$Type, arg1: float): $Vec3
public "tickNonPassenger"(arg0: $Entity$$Type): void
public "getSkyFlashTime"(): integer
public "pollLightUpdates"(): void
public "overrideMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "getCloudColor"(arg0: float): $Vec3
public "getStarBrightness"(arg0: float): float
public "queueLightUpdate"(arg0: $Runnable$$Type): void
public "doAnimateTick"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $RandomSource$$Type, arg5: $Block$$Type, arg6: $BlockPos$MutableBlockPos$$Type): void
public "calculateBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "onChunkLoaded"(arg0: $ChunkPos$$Type): void
public "setDefaultSpawnPos"(arg0: $BlockPos$$Type, arg1: float): void
public "removeEntity"(arg0: integer, arg1: $Entity$RemovalReason$$Type): void
public "clearTintCaches"(): void
public "self"(): $EntityGetter
public "kubeParticle"(x: double, y: double, z: double, spriteSet: $SpriteSet$$Type): $KubeAnimatedParticle
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMinBuildHeight"(): integer
public "getHeight"(): integer
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
get "entities"(): $LevelEntityGetter<($Entity)>
set "dayTime"(value: long)
get "dayTimeFraction"(): float
get "entityCount"(): integer
set "serverSimulationDistance"(value: integer)
get "serverSimulationDistance"(): integer
get "xaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
set "xaero_OPAC_CapabilityProvider"(value: $ICapabilityProvider$$Type)
get "levelData"(): $ClientLevel$ClientLevelData
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "blockTicks"(): $LevelTickAccess<($Block)>
get "scoreboard"(): $Scoreboard
get "chunkSource"(): $ClientChunkCache
get "recipeManager"(): $RecipeManager
get "modelDataManager"(): $ModelDataManager
get "lightUpdateQueueEmpty"(): boolean
get "partEntities"(): $Collection<($PartEntity<(never)>)>
get "freeMapId"(): $MapId
get "dayTimePerTick"(): float
set "dayTimePerTick"(value: float)
set "dayTimeFraction"(value: float)
set "skyFlashTime"(value: integer)
set "gameTime"(value: long)
get "skyFlashTime"(): integer
get "minBuildHeight"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevel$$Type = ($ClientLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLevel$$Original = $ClientLevel;}
declare module "net.minecraft.client.multiplayer.ClientAdvancements$Listener" {
import {$AdvancementNode$$Type} from "net.minecraft.advancements.AdvancementNode"
import {$AdvancementTree$Listener$$Interface} from "net.minecraft.advancements.AdvancementTree$Listener"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$AdvancementProgress$$Type} from "net.minecraft.advancements.AdvancementProgress"

export interface $ClientAdvancements$Listener$$Interface extends $AdvancementTree$Listener$$Interface {
}

export class $ClientAdvancements$Listener implements $ClientAdvancements$Listener$$Interface {
 "onUpdateAdvancementProgress"(arg0: $AdvancementNode$$Type, arg1: $AdvancementProgress$$Type): void
 "onSelectedTabChanged"(arg0: $AdvancementHolder$$Type): void
 "onAddAdvancementTask"(arg0: $AdvancementNode$$Type): void
 "onAdvancementsCleared"(): void
 "onRemoveAdvancementRoot"(arg0: $AdvancementNode$$Type): void
 "onAddAdvancementRoot"(arg0: $AdvancementNode$$Type): void
 "onRemoveAdvancementTask"(arg0: $AdvancementNode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientAdvancements$Listener$$Type = ($ClientAdvancements$Listener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientAdvancements$Listener$$Original = $ClientAdvancements$Listener;}
declare module "net.minecraft.client.multiplayer.CommonListenerCookie" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ServerLinks, $ServerLinks$$Type} from "net.minecraft.server.ServerLinks"
import {$ServerData, $ServerData$$Type} from "net.minecraft.client.multiplayer.ServerData"
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$WorldSessionTelemetryManager, $WorldSessionTelemetryManager$$Type} from "net.minecraft.client.telemetry.WorldSessionTelemetryManager"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$ChatComponent$State, $ChatComponent$State$$Type} from "net.minecraft.client.gui.components.ChatComponent$State"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record} from "java.lang.Record"

export class $CommonListenerCookie extends $Record {
constructor(localGameProfile: $GameProfile$$Type, telemetryManager: $WorldSessionTelemetryManager$$Type, receivedRegistries: $RegistryAccess$Frozen$$Type, enabledFeatures: $FeatureFlagSet$$Type, serverBrand: StringJS, serverData: $ServerData$$Type, postDisconnectScreen: $Screen$$Type, serverCookies: $Map$$Type<($ResourceLocation$$Type), ((byte)[])>, chatState: $ChatComponent$State$$Type, strictErrorHandling: boolean, customReportDetails: $Map$$Type<(StringJS), (StringJS)>, serverLinks: $ServerLinks$$Type, connectionType: $ConnectionType$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $GameProfile$$Type, arg1: $WorldSessionTelemetryManager$$Type, arg2: $RegistryAccess$Frozen$$Type, arg3: $FeatureFlagSet$$Type, arg4: StringJS, arg5: $ServerData$$Type, arg6: $Screen$$Type, arg7: $Map$$Type<($ResourceLocation$$Type), ((byte)[])>, arg8: $ChatComponent$State$$Type, arg9: boolean, arg10: $Map$$Type<(StringJS), (StringJS)>, arg11: $ServerLinks$$Type)

public "chatState"(): $ChatComponent$State
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "receivedRegistries"(): $RegistryAccess$Frozen
public "serverCookies"(): $Map<($ResourceLocation), ((byte)[])>
public "localGameProfile"(): $GameProfile
public "telemetryManager"(): $WorldSessionTelemetryManager
public "enabledFeatures"(): $FeatureFlagSet
public "serverData"(): $ServerData
public "serverLinks"(): $ServerLinks
public "serverBrand"(): StringJS
public "connectionType"(): $ConnectionType
public "customReportDetails"(): $Map<(StringJS), (StringJS)>
public "postDisconnectScreen"(): $Screen
/**
 * 
 * @deprecated
 */
public "strictErrorHandling"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonListenerCookie$$Type = ({"serverLinks"?: $ServerLinks$$Type, "serverCookies"?: $Map$$Type<($ResourceLocation$$Type), ((byte)[])>, "chatState"?: $ChatComponent$State$$Type, "enabledFeatures"?: $FeatureFlagSet$$Type, "postDisconnectScreen"?: $Screen$$Type, "connectionType"?: $ConnectionType$$Type, "serverBrand"?: StringJS, "customReportDetails"?: $Map$$Type<(StringJS), (StringJS)>, "strictErrorHandling"?: boolean, "serverData"?: $ServerData$$Type, "localGameProfile"?: $GameProfile$$Type, "telemetryManager"?: $WorldSessionTelemetryManager$$Type, "receivedRegistries"?: $RegistryAccess$Frozen$$Type}) | ([serverLinks?: $ServerLinks$$Type, serverCookies?: $Map$$Type<($ResourceLocation$$Type), ((byte)[])>, chatState?: $ChatComponent$State$$Type, enabledFeatures?: $FeatureFlagSet$$Type, postDisconnectScreen?: $Screen$$Type, connectionType?: $ConnectionType$$Type, serverBrand?: StringJS, customReportDetails?: $Map$$Type<(StringJS), (StringJS)>, strictErrorHandling?: boolean, serverData?: $ServerData$$Type, localGameProfile?: $GameProfile$$Type, telemetryManager?: $WorldSessionTelemetryManager$$Type, receivedRegistries?: $RegistryAccess$Frozen$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonListenerCookie$$Original = $CommonListenerCookie;}
declare module "net.minecraft.client.multiplayer.SessionSearchTrees$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SessionSearchTrees$Key {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SessionSearchTrees$Key$$Type = ($SessionSearchTrees$Key);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SessionSearchTrees$Key$$Original = $SessionSearchTrees$Key;}
declare module "net.minecraft.client.multiplayer.PlayerInfo" {
import {$RemoteChatSession} from "net.minecraft.network.chat.RemoteChatSession"
import {$PlayerTeam} from "net.minecraft.world.scores.PlayerTeam"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$GameType} from "net.minecraft.world.level.GameType"
import {$PlayerSkin} from "net.minecraft.client.resources.PlayerSkin"
import {$SignedMessageValidator} from "net.minecraft.network.chat.SignedMessageValidator"

export class $PlayerInfo {
constructor(arg0: $GameProfile$$Type, arg1: boolean)

public "getTeam"(): $PlayerTeam
public "getTabListDisplayName"(): $Component
public "getLatency"(): integer
public "getChatSession"(): $RemoteChatSession
public "getProfile"(): $GameProfile
public "getSkin"(): $PlayerSkin
public "getGameMode"(): $GameType
public "getMessageValidator"(): $SignedMessageValidator
public "setTabListDisplayName"(arg0: $Component$$Type): void
public "hasVerifiableChat"(): boolean
get "team"(): $PlayerTeam
get "tabListDisplayName"(): $Component
get "latency"(): integer
get "chatSession"(): $RemoteChatSession
get "profile"(): $GameProfile
get "skin"(): $PlayerSkin
get "gameMode"(): $GameType
get "messageValidator"(): $SignedMessageValidator
set "tabListDisplayName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInfo$$Type = ($PlayerInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInfo$$Original = $PlayerInfo;}
declare module "net.minecraft.client.multiplayer.ClientLevel$ClientLevelData" {
import {$GameRules} from "net.minecraft.world.level.GameRules"
import {$LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$WritableLevelData$$Interface} from "net.minecraft.world.level.storage.WritableLevelData"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export class $ClientLevel$ClientLevelData implements $WritableLevelData$$Interface {
constructor(arg0: $Difficulty$$Type, arg1: boolean, arg2: boolean)

public "isHardcore"(): boolean
public "setDifficultyLocked"(arg0: boolean): void
public "fillCrashReportCategory"(arg0: $CrashReportCategory$$Type, arg1: $LevelHeightAccessor$$Type): void
public "isDifficultyLocked"(): boolean
public "isRaining"(): boolean
public "setDayTime"(arg0: long): void
public "setSpawn"(arg0: $BlockPos$$Type, arg1: float): void
public "getClearColorScale"(): float
public "getDifficulty"(): $Difficulty
public "getGameRules"(): $GameRules
public "getGameTime"(): long
public "setRaining"(arg0: boolean): void
public "getSpawnPos"(): $BlockPos
public "isThundering"(): boolean
public "getSpawnAngle"(): float
public "setGameTime"(arg0: long): void
public "getHorizonHeight"(arg0: $LevelHeightAccessor$$Type): double
public "setDifficulty"(arg0: $Difficulty$$Type): void
public "getDayTime"(): long
get "hardcore"(): boolean
set "difficultyLocked"(value: boolean)
get "difficultyLocked"(): boolean
get "raining"(): boolean
set "dayTime"(value: long)
get "clearColorScale"(): float
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
set "raining"(value: boolean)
get "spawnPos"(): $BlockPos
get "thundering"(): boolean
get "spawnAngle"(): float
set "gameTime"(value: long)
set "difficulty"(value: $Difficulty$$Type)
get "dayTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevel$ClientLevelData$$Type = ($ClientLevel$ClientLevelData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLevel$ClientLevelData$$Original = $ClientLevel$ClientLevelData;}
declare module "net.minecraft.client.multiplayer.chat.LoggedChatEvent" {
import {$LoggedChatEvent$Type, $LoggedChatEvent$Type$$Type} from "net.minecraft.client.multiplayer.chat.LoggedChatEvent$Type"
import {$Codec} from "com.mojang.serialization.Codec"

export interface $LoggedChatEvent$$Interface {

(): $LoggedChatEvent$Type$$Type
}

export class $LoggedChatEvent implements $LoggedChatEvent$$Interface {
static readonly "CODEC": $Codec<($LoggedChatEvent)>

 "type"(): $LoggedChatEvent$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggedChatEvent$$Type = (() => $LoggedChatEvent$Type$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoggedChatEvent$$Original = $LoggedChatEvent;}
declare module "net.minecraft.client.multiplayer.chat.report.Report" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$UUID$$Type} from "java.util.UUID"
import {$ReportingContext$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportingContext"
import {$Instant$$Type} from "java.time.Instant"

export class $Report {
constructor(arg0: $UUID$$Type, arg1: $Instant$$Type, arg2: $UUID$$Type)

public "copy"(): $Report
public "createScreen"(arg0: $Screen$$Type, arg1: $ReportingContext$$Type): $Screen
public "isReportedPlayer"(arg0: $UUID$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Report$$Type = ($Report);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Report$$Original = $Report;}
declare module "net.minecraft.client.multiplayer.ServerData$ServerPackStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ServerData$ServerPackStatus extends $Enum<($ServerData$ServerPackStatus)> {
static readonly "DISABLED": $ServerData$ServerPackStatus
static readonly "PROMPT": $ServerData$ServerPackStatus
static readonly "ENABLED": $ServerData$ServerPackStatus

public "getName"(): $Component
public static "values"(): ($ServerData$ServerPackStatus)[]
public static "valueOf"(arg0: StringJS): $ServerData$ServerPackStatus
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerData$ServerPackStatus$$Type = (("enabled") | ("disabled") | ("prompt"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerData$ServerPackStatus$$Original = $ServerData$ServerPackStatus;}
declare module "net.minecraft.client.multiplayer.chat.ChatListener" {
import {$MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$UUID$$Type} from "java.util.UUID"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ChatListener {
constructor(arg0: $Minecraft$$Type)

public "tick"(): void
public "queueSize"(): long
public "acceptNextDelayedMessage"(): void
public "clearQueue"(): void
public "setMessageDelay"(arg0: double): void
public "handleSystemMessage"(arg0: $Component$$Type, arg1: boolean): void
public "handleChatMessageError"(arg0: $UUID$$Type, arg1: $ChatType$Bound$$Type): void
public "handleDisguisedChatMessage"(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type): void
public "handlePlayerChatMessage"(arg0: $PlayerChatMessage$$Type, arg1: $GameProfile$$Type, arg2: $ChatType$Bound$$Type): void
public "removeFromDelayedMessageQueue"(arg0: $MessageSignature$$Type): boolean
set "messageDelay"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatListener$$Type = ($ChatListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatListener$$Original = $ChatListener;}
