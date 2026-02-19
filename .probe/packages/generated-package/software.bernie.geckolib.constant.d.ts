declare module "software.bernie.geckolib.constant.dataticket.DataTicket" {
import {$Map$$Type} from "java.util.Map"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $DataTicket<D> {
constructor(arg0: StringJS, arg1: $Class$$Type<(D)>)

public "objectType"(): $Class<(D)>
public "hashCode"(): integer
public "id"(): StringJS
public "getData"<D>(arg0: $Map$$Type<($DataTicket$$Type<(never)>), (never)>): D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataTicket$$Type<D> = ($DataTicket<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataTicket$$Original<D> = $DataTicket<(D)>;}
