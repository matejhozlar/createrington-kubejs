import { $RawUdpPacket } from "@package/de/maxhenkel/voicechat/api";
import { $SecretKeySpec } from "@package/javax/crypto/spec";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $ClientConnection, $Server } from "@package/de/maxhenkel/voicechat/voice/server";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/de/maxhenkel/voicechat/voice/common" {
    export class $PingPacket implements $Packet<$PingPacket> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getId(): $UUID;
        getTimestamp(): number;
        fromBytes(arg0: $FriendlyByteBuf): $PingPacket;
        getTTL(): number;
        constructor(arg0: $UUID_, arg1: number);
        constructor();
        get id(): $UUID;
        get timestamp(): number;
        get TTL(): number;
    }
    export class $MicPacket implements $Packet<$MicPacket> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getData(): number[];
        fromBytes(arg0: $FriendlyByteBuf): $MicPacket;
        isWhispering(): boolean;
        getSequenceNumber(): number;
        setData(arg0: number[]): void;
        getTTL(): number;
        constructor(arg0: number[], arg1: boolean, arg2: number);
        constructor();
        get whispering(): boolean;
        get sequenceNumber(): number;
        get TTL(): number;
    }
    export class $PlayerState {
        getName(): string;
        toBytes(arg0: $FriendlyByteBuf): void;
        setName(arg0: string): void;
        setGroup(arg0: $UUID_ | null): void;
        isDisabled(): boolean;
        static fromBytes(arg0: $FriendlyByteBuf): $PlayerState;
        isDisconnected(): boolean;
        getUuid(): $UUID;
        getGroup(): $UUID;
        setDisabled(arg0: boolean): void;
        hasGroup(): boolean;
        setUuid(arg0: $UUID_): void;
        setDisconnected(arg0: boolean): void;
        constructor(arg0: $UUID_, arg1: string, arg2: boolean, arg3: boolean);
    }
    export class $Packet<T extends $Packet<any>> {
    }
    export interface $Packet<T extends $Packet<any>> {
        toBytes(arg0: $FriendlyByteBuf): void;
        fromBytes(arg0: $FriendlyByteBuf): T;
        getTTL(): number;
        get TTL(): number;
    }
    export class $Secret {
        toBytes(arg0: $ByteBuf): void;
        static fromBytes(arg0: number[]): $Secret;
        static fromBytes(arg0: $ByteBuf): $Secret;
        encrypt(arg0: number[]): number[];
        getKeySpec(): $SecretKeySpec;
        static generateNewRandomSecret(): $Secret;
        getSecret(): number[];
        decrypt(arg0: number[]): number[];
        static generateIV(): number[];
        static IV_SIZE_BYTES: number;
        static CIPHER: string;
        static SECRET_SIZE_BYTES: number;
        static TAG_LEN_BITS: number;
        get keySpec(): $SecretKeySpec;
        get secret(): number[];
    }
    export class $SoundPacket<T extends $SoundPacket<any>> implements $Packet<T> {
        getData(): number[];
        getSequenceNumber(): number;
        getCategory(): string;
        getChannelId(): $UUID;
        getSender(): $UUID;
        isFromClientAudioChannel(): boolean;
        getTTL(): number;
        static WHISPER_MASK: number;
        static HAS_CATEGORY_MASK: number;
        constructor();
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: string | null);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: number, arg4: string | null);
        get data(): number[];
        get sequenceNumber(): number;
        get category(): string;
        get channelId(): $UUID;
        get sender(): $UUID;
        get fromClientAudioChannel(): boolean;
        get TTL(): number;
    }
    export class $NetworkMessage {
        write(arg0: $Secret): number[];
        getAddress(): $SocketAddress;
        getTimestamp(): number;
        getPacket(): $Packet<$Packet<any>>;
        getTTL(): number;
        static readFromBytes(arg0: $SocketAddress, arg1: $Secret, arg2: number[], arg3: number): $NetworkMessage;
        static readPacketServer(arg0: $RawUdpPacket, arg1: $Server): $NetworkMessage;
        writeServer(arg0: $Server, arg1: $ClientConnection): number[];
        static MAGIC_BYTE: number;
        constructor(arg0: $Packet<never>);
        constructor(arg0: number, arg1: $Packet<never>);
        get address(): $SocketAddress;
        get timestamp(): number;
        get packet(): $Packet<$Packet<any>>;
        get TTL(): number;
    }
}
