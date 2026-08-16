import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        getReturnValue(): R;
        getReturnValueJ(): number;
        getReturnValueI(): number;
        setReturnValue(arg0: R): void;
        getReturnValueS(): number;
        getReturnValueB(): number;
        getReturnValueD(): number;
        getReturnValueZ(): boolean;
        getReturnValueF(): number;
        getReturnValueC(): string;
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: boolean, arg2: R);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: string);
        constructor(arg0: string, arg1: boolean, arg2: number);
        get returnValueJ(): number;
        get returnValueI(): number;
        get returnValueS(): number;
        get returnValueB(): number;
        get returnValueD(): number;
        get returnValueZ(): boolean;
        get returnValueF(): number;
        get returnValueC(): string;
    }
    export class $CallbackInfo implements $Cancellable {
        getId(): string;
        cancel(): void;
        isCancelled(): boolean;
        static getCallInfoClassName(arg0: $Type): string;
        isCancellable(): boolean;
        constructor(arg0: string, arg1: boolean);
        get id(): string;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
    export class $Cancellable {
    }
    export interface $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
}
