declare module "net.minecraft.world.flag.FeatureFlagUniverse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FeatureFlagUniverse {
constructor(arg0: StringJS)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureFlagUniverse$$Type = ($FeatureFlagUniverse);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeatureFlagUniverse$$Original = $FeatureFlagUniverse;}
declare module "net.minecraft.world.flag.FeatureFlag" {
import {$FeatureFlagUniverse, $FeatureFlagUniverse$$Type} from "net.minecraft.world.flag.FeatureFlagUniverse"

export class $FeatureFlag {
readonly "extMaskIndex": integer
readonly "universe": $FeatureFlagUniverse
readonly "modded": boolean
readonly "mask": long

/**
 * 
 * @deprecated
 */
constructor(arg0: $FeatureFlagUniverse$$Type, arg1: integer)
constructor(arg0: $FeatureFlagUniverse$$Type, arg1: integer, arg2: integer, arg3: boolean)

public "isModded"(): boolean
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
import {$Collection$$Type} from "java.util.Collection"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$FeatureFlagUniverse$$Type} from "net.minecraft.world.flag.FeatureFlagUniverse"

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
public static "create"(arg0: $FeatureFlagUniverse$$Type, arg1: $Collection$$Type<($FeatureFlag$$Type)>): $FeatureFlagSet
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
