declare module "toni.sodiumdynamiclights.accessor.WorldRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WorldRendererAccessor$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
}

export class $WorldRendererAccessor implements $WorldRendererAccessor$$Interface {
 "sodiumdynamiclights$scheduleChunkRebuild"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccessor$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldRendererAccessor$$Original = $WorldRendererAccessor;}
declare module "toni.sodiumdynamiclights.accessor.DynamicLightHandlerHolder" {
import {$DynamicLightHandler, $DynamicLightHandler$$Type} from "dev.lambdaurora.lambdynlights.api.DynamicLightHandler"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $DynamicLightHandlerHolder$$Interface<T> {
}

export class $DynamicLightHandlerHolder<T> implements $DynamicLightHandlerHolder$$Interface {
static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
static "cast"<T extends $Entity>(entityType: $EntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
 "sodiumdynamiclights$getSetting"(): boolean
 "sodiumdynamiclights$getName"(): $Component
 "sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler<(T)>
 "sodiumdynamiclights$setDynamicLightHandler"(arg0: $DynamicLightHandler$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandlerHolder$$Type<T> = ($DynamicLightHandlerHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicLightHandlerHolder$$Original<T> = $DynamicLightHandlerHolder<(T)>;}
