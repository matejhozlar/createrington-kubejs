import { $DecimalFormat } from "@package/java/text";
import { $NumberProvider_, $BinomialDistributionGenerator_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $IntStream } from "@package/java/util/stream";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as entity from "@package/petrolpark/mc/library/core/data/numberProvider/entity";
export * as team from "@package/petrolpark/mc/library/core/data/numberProvider/team";
export * as itemStack from "@package/petrolpark/mc/library/core/data/numberProvider/itemStack";

declare module "@package/petrolpark/mc/library/core/data/numberProvider" {
    export class $NumberEstimate {
        static get(arg0: $NumberProvider_): $NumberEstimate;
        pow(arg0: number): $NumberEstimate;
        exp(): $NumberEstimate;
        min(): number;
        max(): number;
        add(arg0: number): $NumberEstimate;
        add(arg0: $NumberEstimate): $NumberEstimate;
        negative(): $NumberEstimate;
        multiply(arg0: number): $NumberEstimate;
        multiply(arg0: $NumberEstimate): $NumberEstimate;
        or(arg0: $NumberEstimate): $NumberEstimate;
        subtract(arg0: $NumberEstimate): $NumberEstimate;
        divide(arg0: $NumberEstimate): $NumberEstimate;
        /**
         * @deprecated
         */
        static getMax(arg0: $LootContext, arg1: $NumberProvider_): number;
        /**
         * @deprecated
         */
        static getMax(arg0: $LootContext, arg1: $NumberProvider_, arg2: number): number;
        static exactly(arg0: number): $NumberEstimate;
        static fieldCodec(arg0: string): $MapCodec<$NumberEstimate>;
        getComponent(arg0: $DecimalFormat): $Component;
        unknown(): boolean;
        approximate(): boolean;
        getIntComponent(): $Component;
        static approximately(arg0: number): $NumberEstimate;
        streamPossibleInts(): $IntStream;
        static getBinomial(arg0: $BinomialDistributionGenerator_): $NumberEstimate;
        static ranged(arg0: $NumberEstimate, arg1: $NumberEstimate): $NumberEstimate;
        static ranged(arg0: number, arg1: number): $NumberEstimate;
        static ranged(arg0: number, arg1: number, arg2: boolean): $NumberEstimate;
        static ranged(arg0: $NumberEstimate, arg1: $NumberEstimate, arg2: boolean): $NumberEstimate;
        reciprocal(): $NumberEstimate;
        static ZERO: $NumberEstimate;
        static POSITIVE: $NumberEstimate;
        static E: $NumberEstimate;
        static ONE: $NumberEstimate;
        static UNKNOWN: $NumberEstimate;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NumberEstimate>;
        get intComponent(): $Component;
    }
}
