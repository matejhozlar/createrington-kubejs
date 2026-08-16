import { $Event } from "@package/net/neoforged/bus/api";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
export * as restaurant from "@package/petrolpark/mc/library/core/world/restaurant";
export * as entity from "@package/petrolpark/mc/library/core/world/entity";
export * as item from "@package/petrolpark/mc/library/core/world/item";
export * as block from "@package/petrolpark/mc/library/core/world/block";

declare module "@package/petrolpark/mc/library/core/world" {
    export class $ChunkTickEvent extends $Event {
        getChunk(): $LevelChunk;
        getRandomTickSpeed(): number;
        constructor(arg0: $LevelChunk, arg1: number);
        get chunk(): $LevelChunk;
        get randomTickSpeed(): number;
    }
    export class $ChunkTickEvent$Post extends $ChunkTickEvent {
        constructor(arg0: $LevelChunk, arg1: number);
    }
    export class $ChunkTickEvent$Pre extends $ChunkTickEvent {
        constructor(arg0: $LevelChunk, arg1: number);
    }
}
