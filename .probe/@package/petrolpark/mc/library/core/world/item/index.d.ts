import { $IFlagPole } from "@package/petrolpark/mc/library/core/flags";
export * as crafting from "@package/petrolpark/mc/library/core/world/item/crafting";
export * as decay from "@package/petrolpark/mc/library/core/world/item/decay";
export * as bundle from "@package/petrolpark/mc/library/core/world/item/bundle";

declare module "@package/petrolpark/mc/library/core/world/item" {
    export class $IItemStackDuck {
    }
    export interface $IItemStackDuck {
        getFlags(): $IFlagPole<never, never>;
        onFlagsSaved(): void;
        get flags(): $IFlagPole<never, never>;
    }
}
