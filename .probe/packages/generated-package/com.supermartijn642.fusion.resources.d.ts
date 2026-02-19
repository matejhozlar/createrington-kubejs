declare module "com.supermartijn642.fusion.resources.FusionPackMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FusionPackMetadata {
public "hasOverridesFolder"(): boolean
public "getOverridesFolder"(): StringJS
public "getMinimumVersion"(): StringJS
public "isMinVersionSatisfied"(): boolean
get "overridesFolder"(): StringJS
get "minimumVersion"(): StringJS
get "minVersionSatisfied"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionPackMetadata$$Type = ($FusionPackMetadata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FusionPackMetadata$$Original = $FusionPackMetadata;}
