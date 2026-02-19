declare module "com.sonicether.soundphysics.mixin.ChannelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChannelAccessor$$Interface {

(): integer
get "source"(): integer
}

export class $ChannelAccessor implements $ChannelAccessor$$Interface {
 "getSource"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelAccessor$$Original = $ChannelAccessor;}
