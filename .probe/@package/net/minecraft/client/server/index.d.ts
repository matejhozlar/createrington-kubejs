import { $Services, $WorldStem_, $MinecraftServer$ReloadableResources, $RegistryLayer_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $GlobalSavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $SubLevelData } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Map, $UUID_ } from "@package/java/util";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $InetAddress, $Proxy } from "@package/java/net";
import { $IDeferrableIntegratedServer } from "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Thread } from "@package/java/lang";
import { $File } from "@package/java/io";
import { $Level, $LevelSettings } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $PlayerDataStorage, $WorldData, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SableToastableServer } from "@package/dev/ryanhcode/sable/mixinterface/toast";

declare module "@package/net/minecraft/client/server" {
    export class $LanServerDetection$LanServerList {
        takeDirtyServers(): $List<$LanServer>;
        addServer(pingResponse: string, ipAddress: $InetAddress): void;
        constructor();
    }
    export class $IntegratedPlayerList extends $PlayerList {
        getServer(): $IntegratedServer;
        static WHITELIST_FILE: $File;
        maxPlayers: number;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $IntegratedServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage);
        get server(): $IntegratedServer;
    }
    export class $LanServerDetection {
        static UNIQUE_THREAD_ID: $AtomicInteger;
        static LOGGER: $Logger;
        constructor();
    }
    export class $IntegratedServer extends $MinecraftServer implements $IDeferrableIntegratedServer, $SableToastableServer {
        setUUID(uuid: $UUID_): void;
        /**
         * Saves all necessary data as preparation for stopping the server.
         */
        mfix$markClientLoadFinished(): void;
        sable$reportSubLevelPhysicsFailure(arg0: $ServerSubLevel): void;
        sable$reportSubLevelSaveFailure(arg0: $SubLevelData): void;
        sable$reportSubLevelLoadFailure(arg0: $GlobalSavedSubLevelPointer_): void;
        handler$zbn000$openpartiesandclaims$onTickPaused(arg0: $CallbackInfo): void;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        services: $Services;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        proxy: $Proxy;
        executor: $Executor;
        worldData: $WorldData;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        levels: $Map<$ResourceKey<$Level>, $ServerLevel>;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, minecraft: $Minecraft, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        set UUID(value: $UUID_);
    }
    export class $LanServer {
        getAddress(): string;
        getMotd(): string;
        /**
         * Updates the time this LanServer was last seen.
         */
        updatePingTime(): void;
        constructor(motd: string, address: string);
        get address(): string;
        get motd(): string;
    }
    export class $LanServerPinger extends $Thread {
        static parseAddress(pingResponse: string): string;
        static createPingString(motdMessage: string, adMessage: string): string;
        static parseMotd(pingResponse: string): string;
        static MULTICAST_GROUP: string;
        static PING_PORT: number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(motd: string, serverAddress: string);
    }
    export class $LanServerDetection$LanServerDetector extends $Thread {
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(serverList: $LanServerDetection$LanServerList);
    }
}
