import { $IScratchEnvironment, $IScratchEnvironment$Type } from "@package/petrolpark/mc/library/core/scratch/environment";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ScratchParameters, $ScratchArguments } from "@package/petrolpark/mc/library/core/scratch";
import { $ContextualStreamCodec, $ContextualMapCodec } from "@package/petrolpark/mc/library/util/codec";
export * as expression from "@package/petrolpark/mc/library/core/scratch/symbol/expression";
export * as block from "@package/petrolpark/mc/library/core/scratch/symbol/block";

declare module "@package/petrolpark/mc/library/core/scratch/symbol" {
    export class $IScratchSymbol$Type<SYMBOL extends $IScratchSymbol<never, never, never>> {
    }
    export interface $IScratchSymbol$Type<SYMBOL extends $IScratchSymbol<never, never, never>> {
        codec(): $ContextualMapCodec<$IScratchEnvironment$Type<never>, SYMBOL>;
        streamCodec(): $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchEnvironment$Type<never>, SYMBOL>;
    }
    export class $IScratchSymbol<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> {
    }
    export interface $IScratchSymbol<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> {
        getParameters(): PARAMETERS;
        canEvaluate(arg0: ARGUMENTS): boolean;
        get parameters(): PARAMETERS;
    }
    /**
     * Values that may be interpreted as {@link $IScratchSymbol}.
     */
    export type $IScratchSymbol_<ENVIRONMENT, ARGUMENTS, PARAMETERS> = (() => PARAMETERS);
}
