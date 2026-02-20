declare module "traben.entity_model_features.models.IEMFModel" {
import {$EMFModelPartRoot} from "traben.entity_model_features.models.parts.EMFModelPartRoot"

export interface $IEMFModel$$Interface {
}

export class $IEMFModel implements $IEMFModel$$Interface {
 "emf$isEMFModel"(): boolean
 "emf$getEMFRootModel"(): $EMFModelPartRoot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFModel$$Type = ($IEMFModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMFModel$$Original = $IEMFModel;}
declare module "traben.entity_model_features.models.EMFModel_ID" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $EMFModel_ID implements $Comparable$$Interface<($EMFModel_ID)> {
 "namespace": StringJS

constructor(both: StringJS, mapId: StringJS)
constructor(both: StringJS)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(o: $EMFModel_ID$$Type): integer
public "compareTo"(arg0: any): integer
public "setFileName"(fileName: StringJS): $EMFModel_ID
public "getNextFallbackModel"(): $EMFModel_ID
public "getNamespace"(): StringJS
public "setMapIdAndAddFallbackModel"(both: StringJS): $EMFModel_ID
public "setMapIdAndAddFallbackModel"(mapId: StringJS, fileName: StringJS): $EMFModel_ID
public "finishAndPrepAutomatedFallbacks"(): void
public "setBoth"(both: StringJS): $EMFModel_ID
public "setBoth"(fileName: StringJS, mapId: StringJS): $EMFModel_ID
public "getMapId"(): StringJS
public "getDisplayFileName"(): StringJS
public "addFallbackModel"(fileName: StringJS): $EMFModel_ID
public "addFallbackModel"(namespace: StringJS, fileName: StringJS): $EMFModel_ID
public "getfileName"(): StringJS
public "areBothSame"(): boolean
public "forEachFallback"(action: $Consumer$$Type<($EMFModel_ID)>): void
public "hasFallbackModels"(): boolean
set "fileName"(value: StringJS)
get "nextFallbackModel"(): $EMFModel_ID
set "mapIdAndAddFallbackModel"(value: StringJS)
set "both"(value: StringJS)
get "mapId"(): StringJS
get "displayFileName"(): StringJS
get "fileName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModel_ID$$Type = ($EMFModel_ID);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModel_ID$$Original = $EMFModel_ID;}
declare module "traben.entity_model_features.models.IEMFModelNameContainer" {
import {$EMFModel_ID, $EMFModel_ID$$Type} from "traben.entity_model_features.models.EMFModel_ID"

export interface $IEMFModelNameContainer$$Interface {

(arg0: $EMFModel_ID): void
}

export class $IEMFModelNameContainer implements $IEMFModelNameContainer$$Interface {
 "emf$insertKnownMappings"(arg0: $EMFModel_ID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFModelNameContainer$$Type = ((arg0: $EMFModel_ID) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMFModelNameContainer$$Original = $IEMFModelNameContainer;}
