import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $ALCapabilities } from "@package/org/lwjgl/openal";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        connect(arg0: $InitializationData): void;
        close(): void;
        getConnection(): $ClientVoicechatConnection;
        getRecorder(): $AudioRecorder;
        getStartTime(): number;
        setRecording(arg0: boolean): boolean;
        toggleRecording(): boolean;
        getSoundManager(): $SoundManager;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        onVoiceChatDisconnected(): void;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        getTalkCache(): $TalkCache;
        getMicThread(): $MicThread;
        getInitializationData(): $InitializationData;
        closeAudioChannel(arg0: $UUID_): boolean;
        reloadAudio(): void;
        reloadSoundManager(): void;
        closeMicThread(): void;
        constructor();
        get connection(): $ClientVoicechatConnection;
        get recorder(): $AudioRecorder;
        get startTime(): number;
        set recording(value: boolean);
        get soundManager(): $SoundManager;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get talkCache(): $TalkCache;
        get micThread(): $MicThread;
        get initializationData(): $InitializationData;
    }
    export class $AudioChannel extends $Thread {
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        isClosed(): boolean;
        getChannelId(): $UUID;
        getPacketBuffer(): $AudioPacketBuffer;
        addToQueue(arg0: $SoundPacket<never>): void;
        canKill(): boolean;
        closeAndKill(): void;
        getLostPackets(): number;
        getSpeaker(): $Speaker;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $SoundManager, arg3: $UUID_);
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get closed(): boolean;
        get channelId(): $UUID;
        get packetBuffer(): $AudioPacketBuffer;
        get lostPackets(): number;
        get speaker(): $Speaker;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(): string;
        getDuration(arg0: number): string;
        saveAndClose(): void;
        getStartTime(): number;
        getStorage(): string;
        getStorage(arg0: number): string;
        getRecordedPlayerCount(): number;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        flushChunkThreaded(arg0: $UUID_): void;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getPlayerUUID(): $UUID;
        allowRecording(): boolean;
        getCodec(): $ServerConfig$Codec;
        groupsEnabled(): boolean;
        getKeepAlive(): number;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        getServerIP(): string;
        getServerPort(): number;
        getMtuSize(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get playerUUID(): $UUID;
        get codec(): $ServerConfig$Codec;
        get keepAlive(): number;
        get secret(): $Secret;
        get voiceChatDistance(): number;
        get serverIP(): string;
        get serverPort(): number;
        get mtuSize(): number;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        clear(): void;
        getSize(): number;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        close(): void;
        static create(): $SoundManager;
        static create(arg0: string | null): $SoundManager;
        isClosed(): boolean;
        isClosing(): boolean;
        getMaxGain(): number;
        static getAlError(arg0: number): string;
        static canEnumerateAll(): boolean;
        static checkAlError(): boolean;
        trackSpeaker(arg0: $Speaker): void;
        static getAlcError(arg0: number): string;
        static checkAlcError(arg0: number): boolean;
        untrackSpeaker(arg0: $Speaker): void;
        static getAllSpeakers(): $List<string>;
        static canEnumerate(): boolean;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        closeContext(): void;
        openContext(): boolean;
        static cleanDeviceName(arg0: string): string;
        constructor(arg0: string | null, arg1: number, arg2: number, arg3: $ALCapabilities, arg4: number);
        get closed(): boolean;
        get closing(): boolean;
        get maxGain(): number;
        static get allSpeakers(): $List<string>;
    }
    export class $TalkCache {
        isWhispering(arg0: $Entity): boolean;
        isWhispering(arg0: $UUID_): boolean;
        isTalking(arg0: $Entity): boolean;
        isTalking(arg0: $UUID_): boolean;
        updateLevel(arg0: $UUID_, arg1: string | null, arg2: boolean, arg3: number[]): void;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        updateCategoryVolume(arg0: string, arg1: number): void;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        isConnected(): boolean;
        disconnect(): void;
        isInitialized(): boolean;
        getSocket(): $ClientVoicechatSocket;
        sendToServer(arg0: $NetworkMessage): boolean;
        checkTimeout(): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get address(): $InetAddress;
        get data(): $InitializationData;
        get connected(): boolean;
        get initialized(): boolean;
        get socket(): $ClientVoicechatSocket;
    }
    export class $MicThread extends $Thread {
        close(): void;
        isClosed(): boolean;
        isWhispering(): boolean;
        isTalking(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        shouldTransmitAudio(): boolean;
        setMicrophoneLocked(arg0: boolean): void;
        pollMic(): number[];
        pollProcessedAudio(arg0: boolean): number[];
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat | null, arg1: $ClientVoicechatConnection | null, arg2: $Consumer_<$MicrophoneException>);
        get closed(): boolean;
        get whispering(): boolean;
        get talking(): boolean;
        set microphoneLocked(value: boolean);
    }
}
