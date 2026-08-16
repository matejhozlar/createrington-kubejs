import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $VoicechatSocket, $Group$Type } from "@package/de/maxhenkel/voicechat/api";
import { $SocketAddress } from "@package/java/net";
import { $Packet, $Secret, $NetworkMessage, $MicPacket, $PingPacket, $SoundPacket, $ClientGroup, $PlayerState } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread } from "@package/java/lang";
import { $UUID, $Map, $UUID_, $Collection_, $Collection } from "@package/java/util";
import { $CategoryManager } from "@package/de/maxhenkel/voicechat/plugins";

declare module "@package/de/maxhenkel/voicechat/voice/server" {
    export class $PingManager$PingListener {
    }
    export interface $PingManager$PingListener {
        onTimeout(arg0: number): void;
        onPong(arg0: number, arg1: number): void;
        onFailedAttempt(arg0: number): void;
    }
    export class $Server extends $Thread {
        close(): void;
        getPort(): number;
        broadcast(arg0: $Collection_<$ServerPlayer>, arg1: $SoundPacket<never>, arg2: $ServerPlayer | null, arg3: $PlayerState | null, arg4: $UUID_ | null, arg5: string): void;
        getConnection(arg0: $UUID_): $ClientConnection;
        isClosed(): boolean;
        getServer(): $MinecraftServer;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        getSocket(): $VoicechatSocket;
        getSecret(arg0: $UUID_): $Secret;
        sendPacket(arg0: $Packet<never>, arg1: $ClientConnection): boolean;
        getSender(arg0: $NetworkMessage): $ClientConnection;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        hasSecret(arg0: $UUID_): boolean;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        getPlayerStateManager(): $PlayerStateManager;
        getConnections(): $Map<$UUID, $ClientConnection>;
        getBroadcastRange(arg0: number): number;
        onMicPacket(arg0: $UUID_, arg1: $MicPacket): void;
        getPingManager(): $PingManager;
        getGroupManager(): $ServerGroupManager;
        generateNewSecret(arg0: $UUID_): $Secret;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        getCategoryManager(): $ServerCategoryManager;
        getUnconnectedSender(arg0: $NetworkMessage): $ClientConnection;
        changePort(arg0: number): void;
        sendPacketRaw(arg0: $Packet<never>, arg1: $ClientConnection): void;
        disconnectClient(arg0: $UUID_): void;
        sendSoundPacket(arg0: $ServerPlayer | null, arg1: $PlayerState | null, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $ClientConnection | null, arg5: $SoundPacket<never>, arg6: string): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $MinecraftServer);
        get port(): number;
        get closed(): boolean;
        get server(): $MinecraftServer;
        get socket(): $VoicechatSocket;
        get playerStateManager(): $PlayerStateManager;
        get connections(): $Map<$UUID, $ClientConnection>;
        get pingManager(): $PingManager;
        get groupManager(): $ServerGroupManager;
        get categoryManager(): $ServerCategoryManager;
    }
    export class $PingManager {
        sendPing(arg0: $ClientConnection, arg1: number, arg2: number, arg3: $PingManager$PingListener): void;
        onPongPacket(arg0: $PingPacket): void;
        checkTimeouts(): void;
        constructor(arg0: $Server);
    }
    export class $PlayerStateManager {
        getState(arg0: $UUID_): $PlayerState;
        setGroup(arg0: $ServerPlayer, arg1: $UUID_ | null): void;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        getStates(): $Collection<$PlayerState>;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        broadcastRemoveState(arg0: $ServerPlayer): void;
        static defaultDisconnectedState(arg0: $ServerPlayer): $PlayerState;
        broadcastState(arg0: $ServerPlayer | null, arg1: $PlayerState): void;
        constructor(arg0: $Server);
        get states(): $Collection<$PlayerState>;
    }
    export class $ClientConnection {
        getAddress(): $SocketAddress;
        getPlayerUUID(): $UUID;
        send(arg0: $Server, arg1: $NetworkMessage): void;
        getLastKeepAliveResponse(): number;
        setLastKeepAliveResponse(arg0: number): void;
        constructor(arg0: $UUID_, arg1: $SocketAddress);
        get address(): $SocketAddress;
        get playerUUID(): $UUID;
    }
    export class $ServerCategoryManager extends $CategoryManager {
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
    }
    export class $ServerGroupManager {
        getGroups(): $Map<$UUID, $Group>;
        getGroup(arg0: $UUID_): $Group;
        leaveGroup(arg0: $ServerPlayer): void;
        joinGroup(arg0: $Group | null, arg1: $ServerPlayer, arg2: string | null): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        removeGroup(arg0: $UUID_): boolean;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        addGroup(arg0: $Group, arg1: $ServerPlayer | null): void;
        cleanupGroups(): void;
        getPlayerGroup(arg0: $ServerPlayer): $Group;
        constructor(arg0: $Server);
        get groups(): $Map<$UUID, $Group>;
    }
    export class $Group {
        getName(): string;
        isHidden(): boolean;
        isOpen(): boolean;
        getId(): $UUID;
        getType(): $Group$Type;
        isNormal(): boolean;
        getPassword(): string;
        isPersistent(): boolean;
        isIsolated(): boolean;
        toClientGroup(): $ClientGroup;
        constructor();
        constructor(arg0: $UUID_, arg1: string);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean, arg4: boolean, arg5: $Group$Type);
        get name(): string;
        get hidden(): boolean;
        get open(): boolean;
        get id(): $UUID;
        get type(): $Group$Type;
        get normal(): boolean;
        get password(): string;
        get persistent(): boolean;
        get isolated(): boolean;
    }
}
