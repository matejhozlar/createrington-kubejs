import { $IScratchEnvironment, $IScratchEnvironment$Type } from "@package/petrolpark/mc/library/core/scratch/environment";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IScratchSymbol$Type, $IScratchSymbol } from "@package/petrolpark/mc/library/core/scratch/symbol";
import { $ScratchParameters, $ScratchArguments } from "@package/petrolpark/mc/library/core/scratch";
import { $ContextualStreamCodec, $ContextualCodec } from "@package/petrolpark/mc/library/util/codec";

declare module "@package/petrolpark/mc/library/core/scratch/symbol/block" {
    export class $IScratchBlock$Type<BLOCK extends $IScratchBlock<never, never, never>> {
    }
    export interface $IScratchBlock$Type<BLOCK extends $IScratchBlock<never, never, never>> extends $IScratchSymbol$Type<BLOCK> {
    }
    /**
     * Values that may be interpreted as {@link $IScratchBlock$Type}.
     */
    export type $IScratchBlock$Type_<BLOCK> = RegistryTypes.PetrolparkScratchBlockType;
    export interface $IScratchBlock$Type<BLOCK> extends RegistryMarked<RegistryTypes.PetrolparkScratchBlockTypeTag, RegistryTypes.PetrolparkScratchBlockType> {}
    export class $IScratchBlock<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> {
        static CODEC: $ContextualCodec<$IScratchEnvironment$Type<never>, $IScratchBlock<never, never, never>>;
        static TYPED_CODEC: $ContextualCodec<$IScratchEnvironment$Type<never>, $IScratchBlock<never, never, never>>;
        static STREAM_CODEC: $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchEnvironment$Type<never>, $IScratchBlock<never, never, never>>;
    }
    export interface $IScratchBlock<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> extends $IScratchSymbol<ENVIRONMENT, ARGUMENTS, PARAMETERS> {
        getBlockType(): $IScratchBlock$Type<never>;
        get blockType(): $IScratchBlock$Type<never>;
    }
}
