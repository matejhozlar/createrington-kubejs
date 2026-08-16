import { $IScratchEnvironment } from "@package/petrolpark/mc/library/core/scratch/environment";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IScratchArgument, $IScratchParameter } from "@package/petrolpark/mc/library/core/scratch/argument";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Collection_ } from "@package/java/util";
import { $IScratchContextHolder, $IScratchContextProvider, $IScratchContext } from "@package/petrolpark/mc/library/core/scratch/procedure";
import { $ContextualStreamCodec, $ContextualCodec } from "@package/petrolpark/mc/library/util/codec";
export * as symbol from "@package/petrolpark/mc/library/core/scratch/symbol";
export * as environment from "@package/petrolpark/mc/library/core/scratch/environment";
export * as argument from "@package/petrolpark/mc/library/core/scratch/argument";
export * as classes from "@package/petrolpark/mc/library/core/scratch/classes";
export * as procedure from "@package/petrolpark/mc/library/core/scratch/procedure";

declare module "@package/petrolpark/mc/library/core/scratch" {
    export class $ScratchArguments$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchArguments$Builder<ENVIRONMENT extends $IScratchEnvironment> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>>(arg0: ARGUMENT): $ScratchArguments$More$Builder<ENVIRONMENT>;
        build(): $ScratchArguments<ENVIRONMENT, never>;
    }
    export class $ScratchSignature$None {
    }
    export interface $ScratchSignature$None extends $ScratchSignature {
    }
    export class $ScratchArguments$More$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchArguments$More$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchArguments$Builder<ENVIRONMENT> {
    }
    export class $ScratchArguments$None<ENVIRONMENT extends $IScratchEnvironment> implements $ScratchArguments<ENVIRONMENT, $ScratchSignature$None>, $ScratchSignature$None {
        stream(): $Stream<$IScratchArgument<ENVIRONMENT, never>>;
        canEvaluate(): boolean;
        populateContext<CONTEXT extends $IScratchContext<CONTEXT>>(arg0: $IScratchContextProvider<CONTEXT>, arg1: CONTEXT): void;
        constructor();
    }
    export class $ScratchArguments$None$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchArguments$None<ENVIRONMENT> implements $ScratchArguments$Builder<ENVIRONMENT> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>>(arg0: ARGUMENT): $ScratchArguments$More$Builder<ENVIRONMENT>;
        build(): $ScratchArguments<ENVIRONMENT, never>;
        constructor();
    }
    export class $ScratchParameters$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchParameters$Builder<ENVIRONMENT extends $IScratchEnvironment> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, PARAMETER extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT>>(arg0: PARAMETER): $ScratchParameters$More$Builder<ENVIRONMENT>;
        build(): $ScratchParameters<ENVIRONMENT, never>;
    }
    export class $ScratchParameters$More$Builder<ENVIRONMENT extends $IScratchEnvironment> {
    }
    export interface $ScratchParameters$More$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchParameters$Builder<ENVIRONMENT> {
    }
    export class $ScratchArguments<ENVIRONMENT extends $IScratchEnvironment, SIGNATURE extends $ScratchSignature> {
        static of<ENVIRONMENT extends $IScratchEnvironment>(arg0: $Collection_<$IScratchArgument<ENVIRONMENT, never>>): $ScratchArguments<ENVIRONMENT, never>;
        static "arguments"<ENVIRONMENT extends $IScratchEnvironment>(): $ScratchArguments$None$Builder<ENVIRONMENT>;
    }
    export interface $ScratchArguments<ENVIRONMENT extends $IScratchEnvironment, SIGNATURE extends $ScratchSignature> extends $ScratchSignature, $IScratchContextHolder {
        stream(): $Stream<$IScratchArgument<ENVIRONMENT, never>>;
        canEvaluate(): boolean;
        populateContext<CONTEXT extends $IScratchContext<CONTEXT>>(arg0: $IScratchContextProvider<CONTEXT>, arg1: CONTEXT): void;
    }
    /**
     * Values that may be interpreted as {@link $ScratchArguments}.
     */
    export type $ScratchArguments_<ENVIRONMENT, SIGNATURE> = (() => $Stream<$IScratchArgument<ENVIRONMENT, never>>);
    export class $ScratchParameters<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>> {
        static parameters<ENVIRONMENT extends $IScratchEnvironment>(): $ScratchParameters$None$Builder<ENVIRONMENT>;
    }
    export interface $ScratchParameters<ENVIRONMENT extends $IScratchEnvironment, ARGUMENTS extends $ScratchArguments<ENVIRONMENT, never>> extends $ScratchSignature {
        stream(): $Stream<$IScratchParameter<ENVIRONMENT, never, never>>;
        argumentsStreamCodec(): $ContextualStreamCodec<$RegistryFriendlyByteBuf, $IScratchContextProvider<never>, ARGUMENTS>;
        argumentsCodec(): $ContextualCodec<$IScratchContextProvider<never>, ARGUMENTS>;
    }
    export class $ScratchSignature {
    }
    export interface $ScratchSignature {
    }
    export class $ScratchParameters$None$Builder<ENVIRONMENT extends $IScratchEnvironment> extends $ScratchParameters$None<ENVIRONMENT> implements $ScratchParameters$Builder<ENVIRONMENT> {
        after<TYPE, ARGUMENT extends $IScratchArgument<ENVIRONMENT, TYPE>, PARAMETER extends $IScratchParameter<ENVIRONMENT, TYPE, ARGUMENT>>(arg0: PARAMETER): $ScratchParameters$More$Builder<ENVIRONMENT>;
        build(): $ScratchParameters<ENVIRONMENT, never>;
        constructor();
    }
    export class $ScratchParameters$None<ENVIRONMENT extends $IScratchEnvironment> implements $ScratchParameters<ENVIRONMENT, $ScratchArguments$None<ENVIRONMENT>>, $ScratchSignature$None {
        stream(): $Stream<$IScratchParameter<ENVIRONMENT, never, never>>;
        argumentsStreamCodec(): $ContextualStreamCodec<$ByteBuf, $IScratchContextProvider<never>, $ScratchArguments$None<ENVIRONMENT>>;
        argumentsCodec(): $ContextualCodec<$IScratchContextProvider<never>, $ScratchArguments$None<ENVIRONMENT>>;
        constructor();
    }
}
