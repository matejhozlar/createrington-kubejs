declare module "net.silentchaos512.gear.core.component.GearPropertiesData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$GearProperty, $GearProperty$$Type} from "net.silentchaos512.gear.api.property.GearProperty"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TraitInstance} from "net.silentchaos512.gear.api.traits.TraitInstance"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$List} from "java.util.List"
import {$NumberProperty$$Type} from "net.silentchaos512.gear.api.property.NumberProperty"
import {$GearPropertyValue, $GearPropertyValue$$Type} from "net.silentchaos512.gear.api.property.GearPropertyValue"
import {$Record} from "java.lang.Record"

export class $GearPropertiesData extends $Record {
static readonly "CODEC": $Codec<($GearPropertiesData)>
static readonly "EMPTY": $GearPropertiesData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GearPropertiesData)>

constructor(properties: $Map$$Type<($GearProperty$$Type<(never), (never)>), ($GearPropertyValue$$Type<(never)>)>)

public "get"<T, V extends $GearPropertyValue<(object)>, P extends $GearProperty<(object), (object)>>(arg0: $Supplier$$Type<(P)>): V
public "get"<T, V extends $GearPropertyValue<(object)>, P extends $GearProperty<(object), (object)>>(arg0: P): V
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "contains"(arg0: $GearProperty$$Type<(never), (never)>): boolean
public "properties"(): $Map<($GearProperty<(never), ($GearPropertyValue<(never)>)>), ($GearPropertyValue<(never)>)>
public "getOrDefault"<T, V extends $GearPropertyValue<(object)>, P extends $GearProperty<(object), (object)>>(arg0: $Supplier$$Type<(P)>, arg1: V): V
public "getOrDefault"<T, V extends $GearPropertyValue<(object)>, P extends $GearProperty<(object), (object)>>(arg0: P, arg1: V): V
public "getNumber"(arg0: $NumberProperty$$Type, arg1: float): float
public "getNumber"(arg0: $Supplier$$Type<($NumberProperty$$Type)>): float
public "getNumber"(arg0: $NumberProperty$$Type): float
public "getNumber"(arg0: $Supplier$$Type<($NumberProperty$$Type)>, arg1: float): float
public "getTraits"(): $List<($TraitInstance)>
public "getNumberInt"(arg0: $Supplier$$Type<($NumberProperty$$Type)>): integer
get "traits"(): $List<($TraitInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearPropertiesData$$Type = ({"properties"?: $Map$$Type<($GearProperty$$Type<(never), ($GearPropertyValue$$Type<(never)>)>), ($GearPropertyValue$$Type<(never)>)>}) | ([properties?: $Map$$Type<($GearProperty$$Type<(never), ($GearPropertyValue$$Type<(never)>)>), ($GearPropertyValue$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GearPropertiesData$$Original = $GearPropertiesData;}
