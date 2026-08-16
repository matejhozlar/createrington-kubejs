import { $IScratchEnvironment, $IScratchEnvironment_, $IScratchEnvironment$Type } from "@package/petrolpark/mc/library/core/scratch/environment";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IScratchSymbol$Type, $IScratchSymbol } from "@package/petrolpark/mc/library/core/scratch/symbol";
import { $ScratchParameters, $ScratchArguments_, $ScratchArguments } from "@package/petrolpark/mc/library/core/scratch";
import { $Record } from "@package/java/lang";
import { $IScratchClass } from "@package/petrolpark/mc/library/core/scratch/classes";
import { $ContextualStreamCodec, $ContextualCodec } from "@package/petrolpark/mc/library/util/codec";

declare module "@package/petrolpark/mc/library/core/scratch/symbol/expression" {
    export interface $IScratchExpression$Type<EXPRESSION> extends RegistryMarked<RegistryTypes.PetrolparkScratchExpressionTypeTag, RegistryTypes.PetrolparkScratchExpressionType> {}
    export class $IScratchExpression$Type<EXPRESSION extends $IScratchExpression<never, never, never, never>> {
    }
    export interface $IScratchExpression$Type<EXPRESSION extends $IScratchExpression<never, never, never, never>> extends $IScratchSymbol$Type<EXPRESSION> {
    }
    /**
     * Values that may be interpreted as {@link $IScratchExpression$Type}.
     */
    export type $IScratchExpression$Type_<EXPRESSION> = RegistryTypes.PetrolparkScratchExpressionType;
    export class $ExpressionAndArguments<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>> extends $Record {
        "arguments"(): ARGUMENTS;
        evaluate(arg0: ENVIRONMENT): TYPE;
        expression(): $IScratchExpression<ENVIRONMENT, TYPE, ARGUMENTS, never>;
        uncheckedCast<TO_TYPE>(): $ExpressionAndArguments<ENVIRONMENT, TO_TYPE, ARGUMENTS>;
        constructor(expression: $IScratchExpression<ENVIRONMENT, TYPE, ARGUMENTS, never>, arg1: ARGUMENTS);
    }
    /**
     * Values that may be interpreted as {@link $ExpressionAndArguments}.
     */
    export type $ExpressionAndArguments_<ENVIRONMENT, TYPE, ARGUMENTS> = { expression?: $IScratchExpression<$IScratchEnvironment_, any, $ScratchArguments_<ENVIRONMENT, never>, never>, arguments?: $ScratchArguments_<ENVIRONMENT, never>,  } | [expression?: $IScratchExpression<$IScratchEnvironment_, any, $ScratchArguments_<ENVIRONMENT, never>, never>, arguments?: $ScratchArguments_<ENVIRONMENT, never>, ];
    export class $IScratchExpression<ENVIRONMENT extends $IScratchEnvironment, RETURN_TYPE, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> {
        static CODEC: $ContextualCodec<$IScratchEnvironment$Type<never>, $IScratchExpression<never, never, never, never>>;
        static TYPED_CODEC: $ContextualCodec<$IScratchEnvironment$Type<never>, $IScratchExpression<never, never, never, never>>;
        static STREAM_CODEC: $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchEnvironment$Type<never>, $IScratchExpression<never, never, never, never>>;
    }
    export interface $IScratchExpression<ENVIRONMENT extends $IScratchEnvironment, RETURN_TYPE, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>, PARAMETERS extends $ScratchParameters<ENVIRONMENT, ARGUMENTS>> extends $IScratchSymbol<ENVIRONMENT, ARGUMENTS, PARAMETERS> {
        evaluate(arg0: ENVIRONMENT, arg1: ARGUMENTS): RETURN_TYPE;
        getReturnClass(): $IScratchClass<RETURN_TYPE, never>;
        getExpressionType(): $IScratchExpression$Type<never>;
        get returnClass(): $IScratchClass<RETURN_TYPE, never>;
        get expressionType(): $IScratchExpression$Type<never>;
    }
}
