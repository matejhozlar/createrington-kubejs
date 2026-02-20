declare module "xaero.hud.category.serialization.data.ObjectCategoryDataNbtSerializer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ObjectCategoryData$Builder} from "xaero.hud.category.serialization.data.ObjectCategoryData$Builder"
import {$ObjectCategoryDataSerializer} from "xaero.hud.category.serialization.data.ObjectCategoryDataSerializer"
import {$ObjectCategoryData, $ObjectCategoryData$$Type} from "xaero.hud.category.serialization.data.ObjectCategoryData"

export class $ObjectCategoryDataNbtSerializer<D extends $ObjectCategoryData<(object)>, DB extends $ObjectCategoryData$Builder<(object), (object)>> extends $ObjectCategoryDataSerializer<(D), ($CompoundTag)> {
public "serialize"(arg0: $ObjectCategoryData$$Type): any
public "deserialize"(arg0: any): $ObjectCategoryData
public "deserialize"(arg0: $CompoundTag$$Type): D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryDataNbtSerializer$$Type<D, DB> = ($ObjectCategoryDataNbtSerializer<(D), (DB)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectCategoryDataNbtSerializer$$Original<D, DB> = $ObjectCategoryDataNbtSerializer<(D), (DB)>;}
declare module "xaero.hud.category.serialization.data.ObjectCategoryDataGsonSerializer" {
import {$ObjectCategoryDataSerializer} from "xaero.hud.category.serialization.data.ObjectCategoryDataSerializer"
import {$ObjectCategoryData, $ObjectCategoryData$$Type} from "xaero.hud.category.serialization.data.ObjectCategoryData"

export class $ObjectCategoryDataGsonSerializer<D extends $ObjectCategoryData<(object)>> extends $ObjectCategoryDataSerializer<(D), (StringJS)> {
public "serialize"(arg0: $ObjectCategoryData$$Type): any
public "deserialize"(arg0: any): $ObjectCategoryData
public "deserialize"(arg0: StringJS): D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryDataGsonSerializer$$Type<D> = ($ObjectCategoryDataGsonSerializer<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectCategoryDataGsonSerializer$$Original<D> = $ObjectCategoryDataGsonSerializer<(D)>;}
