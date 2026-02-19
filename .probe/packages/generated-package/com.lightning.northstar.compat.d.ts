declare module "com.lightning.northstar.compat.kubejs.event.NorthstarKubeDataEvent" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$FuelType$Builder, $FuelType$Builder$$Type} from "com.lightning.northstar.contraption.FuelType$Builder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$KubeDataGenerator$$Type} from "dev.latvian.mods.kubejs.generator.KubeDataGenerator"
import {$FuelType$$Type} from "com.lightning.northstar.contraption.FuelType"

export class $NorthstarKubeDataEvent implements $KubeEvent$$Interface {
constructor(generator: $KubeDataGenerator$$Type)

/**
 * Defines a fuel type
 * 
 * @param fuel - The fuel properties
 * @param path - The name of the fuel type
 */
public "fuel"(fuel: $FuelType$$Type, path: $ResourceLocation$$Type): void
/**
 * Defines a fuel type
 * 
 * @param fuel - The fuel properties
 * @param path - The name of the fuel type
 */
public "fuel"(fuel: $FuelType$Builder$$Type, path: $ResourceLocation$$Type): void
public "fuel"(fuel: $FuelType$Builder$$Type): void
/**
 * Defines a fuel type
 * 
 * @param path - The name of the fuel type
 */
public "fuel"(path: $ResourceLocation$$Type): $FuelType$Builder
public "fuel"(): $FuelType$Builder
public "fuel"(fuel: $FuelType$$Type): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NorthstarKubeDataEvent$$Type = ($NorthstarKubeDataEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NorthstarKubeDataEvent$$Original = $NorthstarKubeDataEvent;}
