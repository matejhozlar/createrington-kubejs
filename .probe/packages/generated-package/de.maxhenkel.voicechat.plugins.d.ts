declare module "de.maxhenkel.voicechat.plugins.impl.VolumeCategoryImpl" {
import {$Pattern} from "java.util.regex.Pattern"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$VolumeCategory$$Interface} from "de.maxhenkel.voicechat.api.VolumeCategory"

export class $VolumeCategoryImpl implements $VolumeCategory$$Interface {
static readonly "ID_REGEX": $Pattern

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: ((integer)[])[])

public "getDescription"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getId"(): StringJS
public "getIcon"(): ((integer)[])[]
public static "fromBytes"(arg0: $FriendlyByteBuf$$Type): $VolumeCategoryImpl
get "description"(): StringJS
get "name"(): StringJS
get "id"(): StringJS
get "icon"(): ((integer)[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolumeCategoryImpl$$Type = ($VolumeCategoryImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VolumeCategoryImpl$$Original = $VolumeCategoryImpl;}
declare module "de.maxhenkel.voicechat.plugins.CategoryManager" {
import {$Collection} from "java.util.Collection"
import {$VolumeCategoryImpl, $VolumeCategoryImpl$$Type} from "de.maxhenkel.voicechat.plugins.impl.VolumeCategoryImpl"

export class $CategoryManager {
constructor()

public "addCategory"(arg0: $VolumeCategoryImpl$$Type): void
public "getCategories"(): $Collection<($VolumeCategoryImpl)>
public "removeCategory"(arg0: StringJS): $VolumeCategoryImpl
get "categories"(): $Collection<($VolumeCategoryImpl)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategoryManager$$Type = ($CategoryManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CategoryManager$$Original = $CategoryManager;}
