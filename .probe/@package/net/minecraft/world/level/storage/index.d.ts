import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $Dynamic, $Lifecycle } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $LevelResourceAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData, $SavedData$Factory_ } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $UUID_, $Map, $Set, $Spliterator, $Iterator, $UUID, $List, $List_ } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $RegistryAccess$Frozen } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Enum, $RuntimeException, $Comparable, $Iterable, $Record, $AutoCloseable } from "@package/java/lang";
import { $AccessorMixinDimensionDataStorage } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $IWorldDataAccessor } from "@package/com/agent772/parallelworlds/accessor";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $PrimaryLevelDataAccessor } from "@package/com/agent772/dimconfig/mixin";
import { $File_, $File } from "@package/java/io";
import { $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $WorldDataConfiguration_, $LevelSettings, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        lockFile(): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        worldGenOptions(): $WorldOptions;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getDifficulty(): $Difficulty;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getCustomBossEvents(): $CompoundTag;
        getDataConfiguration(): $WorldDataConfiguration;
        getStorageVersionName(storageVersionId: number): string;
        worldGenSettingsLifecycle(): $Lifecycle;
        getKnownServerBrands(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        setDifficultyLocked(locked: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        setModdedInfo(name: string, isModded: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        get version(): number;
        get levelName(): string;
        get gameRules(): $GameRules;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get hardcore(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
        get flatWorld(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isSideSeries(): boolean;
        isCompatible(dataVersion: $DataVersion): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        getSpawnAngle(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        setThunderTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        getDayTimeFraction(): number;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get gameRules(): $GameRules;
        get difficultyLocked(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get difficulty(): $Difficulty;
        get hardcore(): boolean;
        get allowCommands(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
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
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        getDifficulty(): $Difficulty;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        get gameRules(): $GameRules;
        get dayTime(): number;
        get difficultyLocked(): boolean;
        get spawnAngle(): number;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
        get difficulty(): $Difficulty;
        get hardcore(): boolean;
        get gameTime(): number;
    }
    export class $DimensionDataStorage implements $AccessorMixinDimensionDataStorage {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        getCache(): $Map<string, $SavedData>;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        isSevere(): boolean;
        shouldBackup(): boolean;
        getTranslationKey(): string;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get severe(): boolean;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        deleteLevel(): void;
        hasWorldData(): boolean;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        getFileModificationTime(useFallback: boolean): $Instant;
        getLevelId(): string;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        createPlayerStorage(): $PlayerDataStorage;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getLevelPath(folderName: $LevelResource): $Path;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getIconFile(): ($Path) | undefined;
        renameLevel(saveName: string): void;
        getDataTagFallback(): $Dynamic<never>;
        estimateDiskSpace(): number;
        makeWorldBackup(): number;
        getWorldDir(): $Path;
        getDataTag(): $Dynamic<never>;
        safeClose(): void;
        handler$dfl000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$ebg001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        checkForLowDiskSpace(): boolean;
        restoreLevelDataFromOld(): boolean;
        renameAndDropPlayer(saveName: string): void;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get levelId(): string;
        get iconFile(): ($Path) | undefined;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTag(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setGameType(type: $GameType_): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        setThunderTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        getDayTimeFraction(): number;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        get levelName(): string;
        set dayTime(value: number);
        set gameTime(value: number);
        get allowCommands(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersion(): $DataVersion;
        minecraftVersionName(): string;
        levelDataVersion(): number;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        isNewLevelIdAcceptable(saveName: string): boolean;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        levelExists(saveName: string): boolean;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        getLevelPath(saveName: string): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get worldDirValidator(): $DirectoryValidator;
        get backupPath(): $Path;
        get baseDir(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $IWorldDataAccessor, $PrimaryLevelDataAccessor, $PrimaryLevelDataExtension {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        worldGenOptions(): $WorldOptions;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getSpawnAngle(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        setClearWeatherTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getCustomBossEvents(): $CompoundTag;
        getDataConfiguration(): $WorldDataConfiguration;
        worldGenSettingsLifecycle(): $Lifecycle;
        getKnownServerBrands(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        setDifficultyLocked(locked: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        setModdedInfo(name: string, isModded: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setRaining(locked: boolean): void;
        setThunderTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThundering(locked: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        getDayTimeFraction(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        pw$setWorldOptions(arg0: $WorldOptions): void;
        setPreset(arg0: $ResourceLocation_): void;
        getPreset(): $ResourceLocation;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        pw$getWorldOptions(): $WorldOptions;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderId(id: $UUID_): void;
        getWanderingTraderId(): $UUID;
        handler$flh000$collective$hasConfirmedExperimentalWarning(arg0: $CallbackInfoReturnable<any>): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getStorageVersionName(storageVersionId: number): string;
        enabledFeatures(): $FeatureFlagSet;
        dimconfig$getWorldOptions(): $WorldOptions;
        dimconfig$setWorldOptions(arg0: $WorldOptions): void;
        static PLAYER: string;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get hardcore(): boolean;
        set endDragonFight(value: $EndDragonFight$Data_);
        get loadedPlayerTag(): $CompoundTag;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getInfo(): $Component;
        isDisabled(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        getSettings(): $LevelSettings;
        getIcon(): $Path;
        requiresManualConversion(): boolean;
        primaryActionActive(): boolean;
        getWorldVersionName(): $MutableComponent;
        primaryActionMessage(): $Component;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        isHardcore(): boolean;
        hasCommands(): boolean;
        shouldBackup(): boolean;
        canRecreate(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        levelVersion(): $LevelVersion;
        isDowngrade(): boolean;
        getLastPlayed(): number;
        canDelete(): boolean;
        isCompatible(): boolean;
        isExperimental(): boolean;
        canEdit(): boolean;
        canUpload(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get disabled(): boolean;
        get gameMode(): $GameType;
        get settings(): $LevelSettings;
        get icon(): $Path;
        get worldVersionName(): $MutableComponent;
        get levelId(): string;
        get hardcore(): boolean;
        get downgrade(): boolean;
        get lastPlayed(): number;
        get compatible(): boolean;
        get experimental(): boolean;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource implements $LevelResourceAccessor {
        getId(): string;
        static createLevelResource$platform_$md$66668e$0(arg0: string): $LevelResource;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
