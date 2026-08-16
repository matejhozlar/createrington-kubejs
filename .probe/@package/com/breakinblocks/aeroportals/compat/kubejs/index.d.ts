import { $Level } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SubLevelTransferEvent, $SubLevelPreTransferEvent } from "@package/com/breakinblocks/aeroportals/api";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $AABB, $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityNbtFixer_ } from "@package/com/breakinblocks/aeroportals/api/nbt";

declare module "@package/com/breakinblocks/aeroportals/compat/kubejs" {
    export class $PortalResolver {
    }
    export interface $PortalResolver {
        resolve(arg0: $PortalResolveContext): void;
    }
    /**
     * Values that may be interpreted as {@link $PortalResolver}.
     */
    export type $PortalResolver_ = ((arg0: $PortalResolveContext) => void);
    export class $PortalResolveContext {
        setDestination(arg0: string, arg1: number, arg2: number, arg3: number): void;
        setDestination(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number): void;
        landOn(arg0: string, arg1: $BlockPos_): void;
        getSubId(): string;
        getSub(): $ServerSubLevel;
        setValidateLanding(arg0: boolean): void;
        getSrcDimension(): string;
        getPortalId(): string;
        getPortalPos(): $BlockPos;
        getSrcLevel(): $ServerLevel;
        getSubPosition(): $Vec3;
        get subId(): string;
        get sub(): $ServerSubLevel;
        set validateLanding(value: boolean);
        get srcDimension(): string;
        get portalId(): string;
        get portalPos(): $BlockPos;
        get srcLevel(): $ServerLevel;
        get subPosition(): $Vec3;
    }
    export class $TransferKubeEvent implements $KubeEvent {
        getTranslation(): $Vec3;
        remapPlotPos(arg0: $BlockPos_): $BlockPos;
        getSubId(): string;
        getSub(): $ServerSubLevel;
        getDstLevel(): $ServerLevel;
        getSrcDimension(): string;
        getSrcLevel(): $ServerLevel;
        getPlotShift(): $BlockPos;
        getDstDimension(): string;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $SubLevelTransferEvent);
        get translation(): $Vec3;
        get subId(): string;
        get sub(): $ServerSubLevel;
        get dstLevel(): $ServerLevel;
        get srcDimension(): string;
        get srcLevel(): $ServerLevel;
        get plotShift(): $BlockPos;
        get dstDimension(): string;
    }
    export class $AeroPortalsBindings {
        static teleport(arg0: $ServerSubLevel, arg1: string, arg2: number, arg3: number, arg4: number): void;
        static teleport(arg0: $ServerSubLevel, arg1: $ServerLevel, arg2: number, arg3: number, arg4: number): void;
        static teleport(arg0: $ServerSubLevel, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        static isPortalBlock(arg0: $BlockState_): boolean;
        static subLevelsIn(arg0: $ServerLevel): $List<$ServerSubLevel>;
        static portalTypes(): $List<string>;
        static portalTypeOf(arg0: $BlockState_): string;
        static subLevelOf(arg0: $Entity): $ServerSubLevel;
        static chainOf(arg0: $ServerSubLevel): $List<$ServerSubLevel>;
        static boundsOf(arg0: $ServerSubLevel): $AABB;
        static levelOf(arg0: $ServerSubLevel): $Level;
        static positionOf(arg0: $ServerSubLevel): $Vec3;
        static subLevelById(arg0: $ServerLevel, arg1: string): $ServerSubLevel;
        constructor();
    }
    export class $RegisterKubeEvent implements $KubeEvent {
        portal(arg0: string, arg1: $List_<string>, arg2: $PortalResolver_): void;
        portal(arg0: string, arg1: string, arg2: $PortalResolver_): void;
        customFixer(arg0: string, arg1: $BlockEntityNbtFixer_): void;
        listBlockPosFixer(arg0: string, arg1: string, arg2: $List_<string>): void;
        dimensionFixer(arg0: string, arg1: string): void;
        dimensionFixer(arg0: string, arg1: $List_<string>): void;
        blockPosFixer(arg0: string, arg1: string): void;
        blockPosFixer(arg0: string, arg1: $List_<string>): void;
        clearFixer(arg0: string, arg1: string): void;
        clearFixer(arg0: string, arg1: $List_<string>): void;
        nestedDimensionFixer(arg0: string, arg1: string, arg2: string): void;
        nestedDimensionFixer(arg0: string, arg1: string, arg2: $List_<string>): void;
        nestedBlockPosFixer(arg0: string, arg1: string, arg2: $List_<string>): void;
        nestedBlockPosFixer(arg0: string, arg1: string, arg2: string): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $PreTransferKubeEvent implements $KubeEvent {
        getDestination(): $Vec3;
        getLabel(): string;
        setDestination(arg0: $Vec3_): void;
        setDestination(arg0: number, arg1: number, arg2: number): void;
        getChain(): $List<$ServerSubLevel>;
        getSubId(): string;
        getSub(): $ServerSubLevel;
        getDstLevel(): $ServerLevel;
        getSrcDimension(): string;
        getChainSize(): number;
        offsetDestination(arg0: number, arg1: number, arg2: number): void;
        getSrcLevel(): $ServerLevel;
        getDstDimension(): string;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $SubLevelPreTransferEvent);
        get label(): string;
        get chain(): $List<$ServerSubLevel>;
        get subId(): string;
        get sub(): $ServerSubLevel;
        get dstLevel(): $ServerLevel;
        get srcDimension(): string;
        get chainSize(): number;
        get srcLevel(): $ServerLevel;
        get dstDimension(): string;
    }
}
