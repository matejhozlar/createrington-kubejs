import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $PanoramaRenderer, $CubeMap, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InetSocketAddress, $URL } from "@package/java/net";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $Connection, $FriendlyByteBuf, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AccessorClientChunkCacheStorage } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageChain$Encoder, $RemoteChatSession_, $SignedMessageValidator, $LocalChatSession, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $PredictiveAction_, $BlockStatePredictionHandler } from "@package/net/minecraft/client/multiplayer/prediction";
import { $UUID_, $Set_, $List, $List_, $UUID, $ArrayList, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $Holder_, $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Object, $Exception, $Throwable, $Record, $Runnable_ } from "@package/java/lang";
import { $ClientLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/client";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $ColorResolver, $ColorResolver_, $GameType, $EntityGetter, $LevelHeightAccessor, $Level, $GameType_ } from "@package/net/minecraft/world/level";
import { $DebugScreenOverlay, $ChatComponent$State, $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $ClientboundHelloPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientboundGameProfilePacket_, $ClientboundLoginCompressionPacket, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientChunkCacheStorageAccessor } from "@package/dev/ryanhcode/sable/mixin/loaded_chunk_debug";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ChannelHandlerContext, $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $ClientLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $NarratorStatus, $User, $ClientRecipeBook } from "@package/net/minecraft/client";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementTree$Listener, $AdvancementHolder_, $AdvancementTree, $AdvancementHolder, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $InteractionResult, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $EntityTickList, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $TooltipFlag, $Item$TooltipContext, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DebugChunkProviderAttachments } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AccessorClientAdvancements } from "@package/vazkii/patchouli/mixin/client";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $Vec3_, $BlockHitResult, $EntityHitResult, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Object2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $SuggestionsBuilder, $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $BlockTintCache } from "@package/net/minecraft/client/color/block";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundMerchantOffersPacket, $ClientboundSetScorePacket_, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetEntityDataPacket_, $ClientboundSetObjectivePacket, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetEntityMotionPacket, $ClientboundSetHealthPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundBlockEventPacket, $ClientboundPlayerAbilitiesPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ICapabilityProvider_, $ICapableObject, $ICapabilityProvider } from "@package/xaero/pac/common/capability";
import { $ClientboundUpdateEnabledFeaturesPacket_, $ClientboundFinishConfigurationPacket, $ClientboundResetChatPacket, $ClientConfigurationPacketListener, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $AccessorClientPacketListener } from "@package/com/aizistral/nochatreports/common/mixins/client";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $WorldMapSession } from "@package/xaero/map";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $ClientWorldAccessor } from "@package/net/caffeinemc/mods/lithium/common/client";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        tick(): void;
        handleDisconnect(): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handler$fpg000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        chatState: $ChatComponent$State;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        levelReady(): boolean;
        loadingPacketsReceived(): void;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $AccessorClientPacketListener, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS {
        getId(): $UUID;
        close(): void;
        tick(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        scoreboard(): $Scoreboard;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        sendChat(message: string): void;
        sendCommand(message: string): void;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        potionBrewing(): $PotionBrewing;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        handler$dfi000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$ghl001$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$ebf001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$ebf001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$ebf001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$ebf001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        sendUnsignedCommand(command: string): boolean;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        handler$dfi001$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$ebf000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$ebh001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$ebf001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        clearLevel(): void;
        handleDisconnect(): void;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess$Frozen;
        getAdvancements(): $ClientAdvancements;
        getServerData(): $ServerData;
        getRecipeManager(): $RecipeManager;
        updateSearchTrees(): void;
        handler$zbm000$openpartiesandclaims$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        getXaero_worldmapSession(): $WorldMapSession;
        getXaero_serverChunkRadius(): number;
        getDebugQueryHandler(): $DebugQueryHandler;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        getLocalGameProfile(): $GameProfile;
        serverLinks(): $ServerLinks;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        getOnlinePlayerIds(): $Collection<$UUID>;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        handler$dfi000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$ebf001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$ebf001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$dfi000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        searchTrees(): $SessionSearchTrees;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        kjs$sessionData(): $KubeSessionData;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        catnip$getServerChunkRadius(): number;
        invokeParseCommand(command: string): $ParseResults<$SharedSuggestionProvider>;
        xaero_worldmapSession: $WorldMapSession;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        serverChunkRadius: number;
        signedMessageEncoder: $SignedMessageChain$Encoder;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        xaero_minimapSession: $XaeroMinimapSession;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverCookies: $Map<$ResourceLocation, number[]>;
        chatSession: $LocalChatSession;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        get advancements(): $ClientAdvancements;
        get recipeManager(): $RecipeManager;
        get xaero_serverChunkRadius(): number;
        get debugQueryHandler(): $DebugQueryHandler;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        set keyPair(value: $ProfileKeyPair_);
        get localGameProfile(): $GameProfile;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get onlinePlayerIds(): $Collection<$UUID>;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        get suggestionsProvider(): $ClientSuggestionProvider;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension {
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        copyFrom(serverData: $ServerData): void;
        setPreventsChatReports(arg0: boolean): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        preventsChatReports(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        copyNameIconFrom(serverData: $ServerData): void;
        setIconBytes(iconBytes: number[] | null): void;
        static validateIcon(icon: number[] | null): number[];
        getIconBytes(): number[];
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        channelRead0(context: $ChannelHandlerContext, buffer: $ByteBuf): void;
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList {
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        get(ip: string): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        static saveSingleServer(serverData: $ServerData): void;
        unhide(ip: string): $ServerData;
        constructor(minecraft: $Minecraft);
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $AccessorClientChunkCacheStorage, $ClientChunkCacheStorageAccessor {
        replace(chunkIndex: number, chunk: $LevelChunk, replaceWith: $LevelChunk | null): $LevelChunk;
        replace(chunkIndex: number, chunk: $LevelChunk | null): void;
        getIndex(x: number, z: number): number;
        inRange(x: number, z: number): boolean;
        getChunk(chunkIndex: number): $LevelChunk;
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        railways$setViewCenterZ(arg0: number): void;
        railways$setViewCenterX(arg0: number): void;
        railways$getViewCenterZ(): number;
        railways$getViewCenterX(): number;
        chunkRadius: number;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        chunkCount: number;
        this$0: $ClientChunkCache;
        viewCenterX: number;
        constructor(chunkRadius: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        getTeam(): $PlayerTeam;
        setGameMode(gameMode: $GameType_): void;
        setChatSession(chatSession: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        setLatency(latency: number): void;
        getLatency(): number;
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getSkin(): $PlayerSkin;
        getGameMode(): $GameType;
        getTabListDisplayName(): $Component;
        setTabListDisplayName(displayName: $Component_ | null): void;
        clearChatSession(enforcesSecureChat: boolean): void;
        getMessageValidator(): $SignedMessageValidator;
        hasVerifiableChat(): boolean;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get team(): $PlayerTeam;
        get profile(): $GameProfile;
        get skin(): $PlayerSkin;
        get messageValidator(): $SignedMessageValidator;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        register(key: $SessionSearchTrees$Key, reloader: $Runnable_): void;
        rebuildAfterLanguageChange(): void;
        static getTooltipLines(items: $Stream<$ItemStack_>, context: $Item$TooltipContext, tooltipFlag: $TooltipFlag): $Stream<string>;
        recipes(): $SearchTree<$RecipeCollection>;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { hash?: string, id?: $UUID_, url?: $URL,  } | [hash?: string, id?: $UUID_, url?: $URL, ];
    export class $ClientAdvancements implements $AccessorClientAdvancements {
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        handler$fkp000$patchouli$onSync(arg0: $ClientboundUpdateAdvancementsPacket, arg1: $CallbackInfo): void;
        getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
        get progress(): $Map<$AdvancementHolder, $AdvancementProgress>;
    }
    export class $MultiPlayerGameMode {
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        destroyBlock(pos: $BlockPos_): boolean;
        getPlayerMode(): $GameType;
        getPreviousPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        handlePickItem(index: number): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        startPrediction(level: $ClientLevel, action: $PredictiveAction_): void;
        sameDestroyTarget(pos: $BlockPos_): boolean;
        getDestroyStage(): number;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        /**
         * Syncs the current player item with the server
         */
        simulatedcoasters$ensureHasSentCarriedItem(): void;
        simulatedcoasters$invokeStartPrediction(level: $ClientLevel, action: $PredictiveAction_): void;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        destroyBlockPos: $BlockPos;
        destroyDelay: number;
        static $assertionsDisabled: boolean;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get alwaysFlying(): boolean;
        get playerMode(): $GameType;
        get previousPlayerMode(): $GameType;
        get serverControlledInventory(): boolean;
        get destroying(): boolean;
        get destroyStage(): number;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor, $NetworkHandlerExtensions {
        handler$jjh000$platform$handleCustomQuery(packet: $ClientboundGameProfilePacket_, ci: $CallbackInfo): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        getAddon(): $ClientLoginNetworkAddon;
        setMinigameName(minigameName: string | null): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        getConnection(): $Connection;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        get acceptingMessages(): boolean;
        get addon(): $ClientLoginNetworkAddon;
        set minigameName(value: string | null);
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ICapableObject, $ClientWorldAccessor, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $IWorldMapClientWorld, $ClientLevelKJS, $IClientLevel, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension {
        unload(chunk: $LevelChunk): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        /**
         * If on MP, sends a quitting packet.
         */
        sable$popPoseSupplier(): void;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        sodium$getBiomeZoomSeed(): number;
        lithium$getEntityManager(): $TransientEntitySectionManager<any>;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        getXaero_minimapData(): $MinimapClientWorldData;
        isLightUpdateQueueEmpty(): boolean;
        entitiesForRendering(): $Iterable<$Entity>;
        handleBlockChangedAck(sequence: number): void;
        sable$getPlotContainer(): $SubLevelContainer;
        getXaero_OPAC_CapabilityProvider(): $ICapabilityProvider;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        setXaero_OPAC_CapabilityProvider(arg0: $ICapabilityProvider_): void;
        getServerSimulationDistance(): number;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        setServerSimulationDistance(sequence: number): void;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        handler$dhf000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        handler$hlc000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        addEntity(entity: $Entity): void;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        addMapData(map: $Map_<$MapId_, $MapItemSavedData>): void;
        getSkyDarken(partialTick: number): number;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        tickNonPassenger(entity: $Entity): void;
        getSkyFlashTime(): number;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        getEntityCount(): number;
        getStarBrightness(partialTick: number): number;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        queueLightUpdate(task: $Runnable_): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_ | null, blockPos: $BlockPos$MutableBlockPos): void;
        sodium$getTracker(): $ChunkTracker;
        getCloudColor(partialTick: number): $Vec3;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        xaerolib_setData(arg0: $ClientLevelData): void;
        xaerolib_getData(): $ClientLevelData;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $ClientLevel$ClientLevelData;
        animateTick(posX: number, posY: number, posZ: number): void;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ClientChunkCache;
        wrapOperation$ioa000$petrolpark$postBlendedBlockColorEvent$mixinextras$bridge$147(arg0: $ColorResolver_, arg1: $Biome_, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $LocalRef<any>): number;
        wrapOperation$ioa000$petrolpark$postBlendedBlockColorEvent(arg0: $ColorResolver_, arg1: $Biome_, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $BlockPos$MutableBlockPos): number;
        wrapOperation$ioa000$petrolpark$postBlendedBlockColorEvent(arg0: $ColorResolver_, arg1: $Biome_, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $BlockPos_, arg6: $ColorResolver_): number;
        effects(): $DimensionSpecialEffects;
        wrapWithCondition$ioa001$petrolpark$swingLegsIfRidingHorseMillContraption(entity: $Entity): boolean;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
        getLevelRenderer(): $LevelRenderer;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        tickingEntities: $EntityTickList;
        static LONG_PARTICLE_CLIP_RANGE: number;
        tintCaches: $Object2ObjectArrayMap<$ColorResolver, $BlockTintCache>;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        levelRenderer: $LevelRenderer;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        get lightUpdateQueueEmpty(): boolean;
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        set gameTime(value: number);
        get skyFlashTime(): number;
        get entityCount(): number;
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
        get chunkSource(): $ClientChunkCache;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setDayTime(dayTime: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        setGameTime(dayTime: number): void;
        getDifficulty(): $Difficulty;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setDifficultyLocked(difficultyLocked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        setDifficulty(difficulty: $Difficulty_): void;
        getHorizonHeight(level: $LevelHeightAccessor): number;
        setRaining(difficultyLocked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        getClearColorScale(): number;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
        get hardcore(): boolean;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        onPingFailed(reason: $Component_, serverData: $ServerData): void;
        pingLegacyServer(resolvedServerAddress: $InetSocketAddress, serverAddress: $ServerAddress, serverData: $ServerData): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $DebugChunkProviderAttachments {
        drop(chunkPos: $ChunkPos): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        updateViewRadius(viewDistance: number): void;
        updateViewCenter(x: number, z: number): void;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        handler$eni000$railways$securitycraft$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
        sable$loadedChunks(): $Collection<any>;
        handler$eni000$railways$securitycraft$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$eni000$railways$securitycraft$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        lightEngine: $LevelLightEngine;
        level: $ClientLevel;
        static LOGGER: $Logger;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        redirect$gim000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        createResourceManager(): $CloseableResourceManager;
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        modifyReturnValue$gim000$fabric_resource_loader_v0$getCommonKnownPacksReturn(packs: $List_<any>): $List<any>;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>,  } | [expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>, ];
    export class $CommonListenerCookie extends $Record {
        serverBrand(): string;
        connectionType(): $ConnectionType;
        enabledFeatures(): $FeatureFlagSet;
        serverData(): $ServerData;
        telemetryManager(): $WorldSessionTelemetryManager;
        serverLinks(): $ServerLinks;
        localGameProfile(): $GameProfile;
        receivedRegistries(): $RegistryAccess$Frozen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        chatState(): $ChatComponent$State;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        postDisconnectScreen(): $Screen;
        customReportDetails(): $Map<string, string>;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager,  } | [receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        send(packet: $Packet<never>): void;
        serverBrand(): string;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        sendDeferredPackets(): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        createDisconnectScreen(details: $DisconnectionDetails_): $Screen;
        handlePing(packet: $ClientboundPingPacket): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        static preparePackPrompt(line1: $Component_, line2: $Component_ | null): $Component;
        wrapOperation$fpf001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fpf001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        flow(): $PacketFlow;
        send(payload: $CustomPacketPayload_): void;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(crashReport: $CrashReport): void;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        connection: $Connection;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $VeilClientSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        veil$getPostPipelineNames(): $Stream<any>;
        getPlayer(): $LocalPlayer;
        getClient(): $Minecraft;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getOnlinePlayerNames(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getWorld(): $ClientLevel;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        hasPermission(level: number): boolean;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        sendFeedback(arg0: $Component_): void;
        sendError(arg0: $Component_): void;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        getPosition(): $Vec3;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        getMeta(arg0: string): $Object;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get player(): $LocalPlayer;
        get client(): $Minecraft;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get onlinePlayerNames(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get world(): $ClientLevel;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get allTeams(): $Collection<string>;
        get position(): $Vec3;
        get entity(): $Entity;
        get rotation(): $Vec2;
    }
    export class $ChunkBatchSizeCalculator {
        getDesiredChunksPerTick(): number;
        onBatchFinished(batchSize: number): void;
        onBatchStart(): void;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
