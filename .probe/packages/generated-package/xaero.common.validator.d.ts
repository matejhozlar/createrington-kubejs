declare module "xaero.common.validator.NumericFieldValidator" {
import {$EditBox$$Type} from "net.minecraft.client.gui.components.EditBox"

export class $NumericFieldValidator {
constructor()

public "validate"(arg0: $EditBox$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumericFieldValidator$$Type = ($NumericFieldValidator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumericFieldValidator$$Original = $NumericFieldValidator;}
declare module "xaero.common.validator.FieldValidatorHolder" {
import {$WaypointCoordinateFieldValidator, $WaypointCoordinateFieldValidator$$Type} from "xaero.common.validator.WaypointCoordinateFieldValidator"
import {$NumericFieldValidator, $NumericFieldValidator$$Type} from "xaero.common.validator.NumericFieldValidator"

export class $FieldValidatorHolder {
constructor(arg0: $NumericFieldValidator$$Type, arg1: $WaypointCoordinateFieldValidator$$Type)

public "getWpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
public "getNumericFieldValidator"(): $NumericFieldValidator
get "wpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
get "numericFieldValidator"(): $NumericFieldValidator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldValidatorHolder$$Type = ($FieldValidatorHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldValidatorHolder$$Original = $FieldValidatorHolder;}
declare module "xaero.common.validator.WaypointCoordinateFieldValidator" {
import {$NumericFieldValidator} from "xaero.common.validator.NumericFieldValidator"

export class $WaypointCoordinateFieldValidator extends $NumericFieldValidator {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointCoordinateFieldValidator$$Type = ($WaypointCoordinateFieldValidator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointCoordinateFieldValidator$$Original = $WaypointCoordinateFieldValidator;}
