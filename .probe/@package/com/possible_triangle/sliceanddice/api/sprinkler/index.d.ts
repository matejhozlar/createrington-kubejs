import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $UUID, $List, $Collection } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $RegistryAccess, $Vec3i, $Direction, $Holder, $Position } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation, $RegistryFileCodec } from "@package/net/minecraft/resources";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $Unit } from "@package/kotlin";

declare module "@package/com/possible_triangle/sliceanddice/api/sprinkler" {
    export class $Sprinkler$Companion {
        findMatching(arg0: $RegistryAccess, arg1: $FluidStack_): $Collection<$Holder<$Sprinkler<never>>>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $Sprinkler<TConfig extends $SprinkleAction> {
        start(arg0: $SprinkleContext): void;
        stop(arg0: $SprinkleContext): void;
        copy(arg0: $FluidIngredient_, arg1: number, arg2: TConfig): $Sprinkler<TConfig>;
        tick(arg0: $SprinkleContext): void;
        consume(arg0: $SprinkleContext): void;
        getActionType(): $SprinkleActionType<TConfig>;
        getFluid(): $FluidIngredient;
        component2(): number;
        getConfig(): TConfig;
        component1(): $FluidIngredient;
        component3(): TConfig;
        static copy$default(arg0: $Sprinkler_<any>, arg1: $FluidIngredient_, arg2: number, arg3: $SprinkleAction_, arg4: number, arg5: $Object): $Sprinkler<any>;
        getRangeBonus(): number;
        static getActionType$annotations(): void;
        static Companion: $Sprinkler$Companion;
        static CODEC: $Codec<$Sprinkler<never>>;
        static HOLDER_CODEC: $RegistryFileCodec<$Sprinkler<never>>;
        constructor(arg0: $FluidIngredient_, arg1: number, arg2: TConfig);
        constructor(arg0: $FluidIngredient_, arg1: number, arg2: $SprinkleAction_, arg3: number, arg4: $DefaultConstructorMarker);
        get actionType(): $SprinkleActionType<TConfig>;
        get fluid(): $FluidIngredient;
        get config(): TConfig;
        get rangeBonus(): number;
        static get actionType$annotations(): void;
    }
    /**
     * Values that may be interpreted as {@link $Sprinkler}.
     */
    export type $Sprinkler_<TConfig> = RegistryTypes.SliceanddiceSprinkler;
    export interface $SprinkleActionType<TConfig> extends RegistryMarked<RegistryTypes.SliceanddiceSprinkleActionTag, RegistryTypes.SliceanddiceSprinkleAction> {}
    export class $SprinkleAction {
        static Companion: $SprinkleAction$Companion;
        static CODEC: $Codec<$SprinkleAction>;
    }
    export interface $SprinkleAction {
        type(): $SprinkleActionType<never>;
    }
    /**
     * Values that may be interpreted as {@link $SprinkleAction}.
     */
    export type $SprinkleAction_ = (() => $SprinkleActionType_<never>);
    export class $SprinkleContext {
        static getEntities$default(arg0: $SprinkleContext, arg1: $Class<any>, arg2: $Function1_<any, any>, arg3: number, arg4: $Object): $List<any>;
    }
    export interface $SprinkleContext {
        getId(): $ResourceLocation;
        getType(): $SprinklerType;
        getSize(): $Vec3i;
        getLevel(): $ServerLevel;
        getRandom(): $RandomSource;
        getArea(): $AABB;
        getContraption(): $UUID;
        getEntities<T extends $Entity>(arg0: $Class<T>, arg1: $Function1_<T, boolean>): $List<T>;
        getBlockPos(): $BlockPos;
        getFluidStack(): $FluidStack;
        getPos(): $Position;
        forEachBlock(arg0: $Function1_<$BlockPos, $Unit>): void;
        forEachGroundBlock(arg0: $Function1_<$BlockPos, $Unit>): void;
        get id(): $ResourceLocation;
        get type(): $SprinklerType;
        get size(): $Vec3i;
        get level(): $ServerLevel;
        get random(): $RandomSource;
        get area(): $AABB;
        get contraption(): $UUID;
        get blockPos(): $BlockPos;
        get fluidStack(): $FluidStack;
        get pos(): $Position;
    }
    export class $SprinkleActionType<TConfig extends $SprinkleAction> {
        static access$consume$jd(arg0: $SprinkleActionType_<any>, arg1: $SprinkleContext, arg2: $SprinkleAction_): void;
        static access$stop$jd(arg0: $SprinkleActionType_<any>, arg1: $SprinkleContext, arg2: $SprinkleAction_): void;
        static access$tick$jd(arg0: $SprinkleActionType_<any>, arg1: $SprinkleContext, arg2: $SprinkleAction_): void;
        static access$start$jd(arg0: $SprinkleActionType_<any>, arg1: $SprinkleContext, arg2: $SprinkleAction_): void;
        static Companion: $SprinkleActionType$Companion;
        static CODEC: $Codec<$SprinkleActionType<never>>;
    }
    export interface $SprinkleActionType<TConfig extends $SprinkleAction> {
        start(arg0: $SprinkleContext, arg1: TConfig): void;
        stop(arg0: $SprinkleContext, arg1: TConfig): void;
        tick(arg0: $SprinkleContext, arg1: TConfig): void;
        consume(arg0: $SprinkleContext, arg1: TConfig): void;
        codec(): $MapCodec<TConfig>;
    }
    /**
     * Values that may be interpreted as {@link $SprinkleActionType}.
     */
    export type $SprinkleActionType_<TConfig> = RegistryTypes.SliceanddiceSprinkleAction | (() => $MapCodec_<TConfig>);
    export class $SprinklerType extends $Enum<$SprinklerType> implements $StringRepresentable {
        static values(): $SprinklerType[];
        static valueOf(arg0: string): $SprinklerType;
        static getEntries(): $EnumEntries<$SprinklerType>;
        getInput(): $Direction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FLOOR: $SprinklerType;
        static CEILING: $SprinklerType;
        static get entries(): $EnumEntries<$SprinklerType>;
        get input(): $Direction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SprinklerType}.
     */
    export type $SprinklerType_ = "ceiling" | "floor";
    export class $SprinkleAction$Companion {
    }
    export interface $Sprinkler<TConfig> extends RegistryMarked<RegistryTypes.SliceanddiceSprinklerTag, RegistryTypes.SliceanddiceSprinkler> {}
    export class $SprinkleActionType$Companion {
    }
}
