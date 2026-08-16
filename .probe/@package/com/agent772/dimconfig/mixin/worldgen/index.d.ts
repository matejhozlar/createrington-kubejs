import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List_, $List } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/com/agent772/dimconfig/mixin/worldgen" {
    export class $ListPoolElementAccessor {
    }
    export interface $ListPoolElementAccessor {
        dimconfig$getElements(): $List<$StructurePoolElement>;
    }
    /**
     * Values that may be interpreted as {@link $ListPoolElementAccessor}.
     */
    export type $ListPoolElementAccessor_ = (() => $List_<$StructurePoolElement>);
    export class $StructureManagerAccessor {
    }
    export interface $StructureManagerAccessor {
        dimconfig$getLevel(): $LevelAccessor;
    }
    /**
     * Values that may be interpreted as {@link $StructureManagerAccessor}.
     */
    export type $StructureManagerAccessor_ = (() => $LevelAccessor);
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        dimconfig$getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    /**
     * Values that may be interpreted as {@link $SinglePoolElementAccessor}.
     */
    export type $SinglePoolElementAccessor_ = (() => $Either<$ResourceLocation_, $StructureTemplate>);
    export class $FeaturePoolElementAccessor {
    }
    export interface $FeaturePoolElementAccessor {
        dimconfig$getFeature(): $Holder<$PlacedFeature>;
    }
    /**
     * Values that may be interpreted as {@link $FeaturePoolElementAccessor}.
     */
    export type $FeaturePoolElementAccessor_ = (() => $Holder_<$PlacedFeature>);
}
