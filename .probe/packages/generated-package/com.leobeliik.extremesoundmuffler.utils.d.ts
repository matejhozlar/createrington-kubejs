declare module "com.leobeliik.extremesoundmuffler.utils.Anchor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SortedMap, $SortedMap$$Type} from "java.util.SortedMap"

export class $Anchor {
constructor(arg0: integer, arg1: StringJS)
constructor(arg0: integer, arg1: StringJS, arg2: $BlockPos$$Type, arg3: $ResourceLocation$$Type, arg4: integer, arg5: $SortedMap$$Type<(StringJS), (double)>)

public "getName"(): StringJS
public "getDimension"(): $ResourceLocation
public "getX"(): StringJS
public "getZ"(): StringJS
public static "getAnchor"(arg0: $SoundInstance$$Type): $Anchor
public "getY"(): StringJS
public "editAnchor"(arg0: StringJS, arg1: integer): void
public "setAnchor"(arg0: integer): void
public "getAnchorId"(): integer
public "setRadius"(arg0: integer): void
public "getRadius"(): integer
public "addSound"(arg0: $ResourceLocation$$Type, arg1: double): void
public "getAnchorPos"(): $BlockPos
public "setMuffledSounds"(arg0: $SortedMap$$Type<($ResourceLocation$$Type), (double)>): void
public "replaceSound"(arg0: $ResourceLocation$$Type, arg1: double): void
public "deleteAnchor"(): void
public "removeSound"(arg0: $ResourceLocation$$Type): void
public "getMuffledSounds"(): $SortedMap<($ResourceLocation), (double)>
get "name"(): StringJS
get "dimension"(): $ResourceLocation
get "x"(): StringJS
get "z"(): StringJS
get "y"(): StringJS
set "anchor"(value: integer)
get "anchorId"(): integer
set "radius"(value: integer)
get "radius"(): integer
get "anchorPos"(): $BlockPos
set "muffledSounds"(value: $SortedMap$$Type<($ResourceLocation$$Type), (double)>)
get "muffledSounds"(): $SortedMap<($ResourceLocation), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Anchor$$Type = ($Anchor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Anchor$$Original = $Anchor;}
