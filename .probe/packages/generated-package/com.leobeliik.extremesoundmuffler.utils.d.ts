declare module "com.leobeliik.extremesoundmuffler.utils.Anchor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SortedMap, $SortedMap$$Type} from "java.util.SortedMap"

export class $Anchor {
constructor(arg0: integer, arg1: StringJS)
constructor(arg0: integer, arg1: StringJS, arg2: $BlockPos$$Type, arg3: $ResourceLocation$$Type, arg4: integer, arg5: $SortedMap$$Type<(StringJS), (double)>)

public "getName"(): StringJS
public "getY"(): StringJS
public "getRadius"(): integer
public "setRadius"(arg0: integer): void
public "getDimension"(): $ResourceLocation
public "setAnchor"(arg0: integer): void
public static "getAnchor"(arg0: $SoundInstance$$Type): $Anchor
public "editAnchor"(arg0: StringJS, arg1: integer): void
public "getX"(): StringJS
public "getZ"(): StringJS
public "getAnchorId"(): integer
public "removeSound"(arg0: $ResourceLocation$$Type): void
public "setMuffledSounds"(arg0: $SortedMap$$Type<($ResourceLocation$$Type), (double)>): void
public "replaceSound"(arg0: $ResourceLocation$$Type, arg1: double): void
public "getAnchorPos"(): $BlockPos
public "deleteAnchor"(): void
public "getMuffledSounds"(): $SortedMap<($ResourceLocation), (double)>
public "addSound"(arg0: $ResourceLocation$$Type, arg1: double): void
get "name"(): StringJS
get "y"(): StringJS
get "radius"(): integer
set "radius"(value: integer)
get "dimension"(): $ResourceLocation
set "anchor"(value: integer)
get "x"(): StringJS
get "z"(): StringJS
get "anchorId"(): integer
set "muffledSounds"(value: $SortedMap$$Type<($ResourceLocation$$Type), (double)>)
get "anchorPos"(): $BlockPos
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
