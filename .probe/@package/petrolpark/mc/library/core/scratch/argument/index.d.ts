import { $IScratchEnvironment } from "@package/petrolpark/mc/library/core/scratch/environment";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ScratchArguments } from "@package/petrolpark/mc/library/core/scratch";
import { $IScratchContextProvider } from "@package/petrolpark/mc/library/core/scratch/procedure";
import { $ExpressionAndArguments_, $IScratchExpression } from "@package/petrolpark/mc/library/core/scratch/symbol/expression";
import { $ContextualCodec, $ContextualStreamCodec } from "@package/petrolpark/mc/library/util/codec";

declare module "@package/petrolpark/mc/library/core/scratch/argument" {
    export class $IScratchArgument<ENVIRONMENT extends $IScratchEnvironment, TYPE> {
    }
    export interface $IScratchArgument<ENVIRONMENT extends $IScratchEnvironment, TYPE> {
        get(arg0: ENVIRONMENT): TYPE;
        parameter(): $IScratchParameter<ENVIRONMENT, TYPE, $IScratchArgument<ENVIRONMENT, TYPE>>;
        canEvaluate(): boolean;
    }
    export class $IScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> {
    }
    export interface $IScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> {
        key(): string;
        argumentStreamCodec(): $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchContextProvider<never>, ARGUMENT>;
        argumentCodec(): $ContextualCodec<$IScratchContextProvider<never>, ARGUMENT>;
    }
    export class $IExpressionScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> {
    }
    export interface $IExpressionScratchParameter<ENVIRONMENT extends $IScratchEnvironment, TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>> extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT> {
        pass<ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>>(arg0: $IScratchExpression<ENVIRONMENT, TYPE, ARGUMENTS, never>, arg1: ARGUMENTS): ARGUMENT;
        pass<ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>>(arg0: $ExpressionAndArguments_<ENVIRONMENT, TYPE, ARGUMENTS>): ARGUMENT;
    }
}
