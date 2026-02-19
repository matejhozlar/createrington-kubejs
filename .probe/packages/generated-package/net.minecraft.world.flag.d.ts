declare module "net.minecraft.world.flag.FeatureElement" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Registry} from "net.minecraft.core.Registry"
import {$Set} from "java.util.Set"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export interface $FeatureElement$$Interface {

(): $FeatureFlagSet$$Type
}

export class $FeatureElement implements $FeatureElement$$Interface {
static readonly "FILTERED_REGISTRIES": $Set<($ResourceKey<($Registry<($FeatureElement)>)>)>

 "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
 "requiredFeatures"(): $FeatureFlagSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureElement$$Type = (() => $FeatureFlagSet$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeatureElement$$Original = $FeatureElement;}
declare module "net.minecraft.world.flag.FeatureFlagSet" {
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"

export class $FeatureFlagSet {
static readonly "MAX_CONTAINER_SIZE": integer

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "join"(arg0: $FeatureFlagSet$$Type): $FeatureFlagSet
public static "of"(): $FeatureFlagSet
public static "of"(arg0: $FeatureFlag$$Type, ...arg1: ($FeatureFlag$$Type)[]): $FeatureFlagSet
public static "of"(arg0: $FeatureFlag$$Type): $FeatureFlagSet
public "contains"(arg0: $FeatureFlag$$Type): boolean
public "subtract"(arg0: $FeatureFlagSet$$Type): $FeatureFlagSet
public "intersects"(arg0: $FeatureFlagSet$$Type): boolean
public "isSubsetOf"(arg0: $FeatureFlagSet$$Type): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureFlagSet$$Type = ($FeatureFlagSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeatureFlagSet$$Original = $FeatureFlagSet;}
declare module "net.minecraft.world.flag.FeatureFlag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FeatureFlag {
public "isModded"(): boolean
get "modded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureFlag$$Type = ($FeatureFlag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeatureFlag$$Original = $FeatureFlag;}
