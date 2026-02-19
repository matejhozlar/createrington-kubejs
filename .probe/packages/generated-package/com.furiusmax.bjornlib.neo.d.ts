declare module "com.furiusmax.bjornlib.neo.AbilityEvents$releaseAbility" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbilityEvents} from "com.furiusmax.bjornlib.neo.AbilityEvents"
import {$AbilityType$$Type} from "com.furiusmax.bjornlib.ability.AbilityType"
import {$IPlayerAbilities$$Type} from "com.furiusmax.bjornlib.capability.IPlayerAbilities"

export class $AbilityEvents$releaseAbility extends $AbilityEvents {
constructor(arg0: $Player$$Type, arg1: $AbilityType$$Type, arg2: $IPlayerAbilities$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEvents$releaseAbility$$Type = ($AbilityEvents$releaseAbility);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbilityEvents$releaseAbility$$Original = $AbilityEvents$releaseAbility;}
declare module "com.furiusmax.bjornlib.neo.mixin.structures.StructurePiecesBuilderAccessor" {
import {$StructurePiece, $StructurePiece$$Type} from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import {$List, $List$$Type} from "java.util.List"

export interface $StructurePiecesBuilderAccessor$$Interface {

(): $List$$Type<($StructurePiece$$Type)>
get "pieces"(): $List<($StructurePiece)>
}

export class $StructurePiecesBuilderAccessor implements $StructurePiecesBuilderAccessor$$Interface {
 "getPieces"(): $List<($StructurePiece)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePiecesBuilderAccessor$$Type = (() => $List$$Type<($StructurePiece$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructurePiecesBuilderAccessor$$Original = $StructurePiecesBuilderAccessor;}
declare module "com.furiusmax.bjornlib.neo.AbilityEvents$CastContinuousAbility" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbilityEvents} from "com.furiusmax.bjornlib.neo.AbilityEvents"
import {$AbilityType$$Type} from "com.furiusmax.bjornlib.ability.AbilityType"
import {$IPlayerAbilities$$Type} from "com.furiusmax.bjornlib.capability.IPlayerAbilities"

export class $AbilityEvents$CastContinuousAbility extends $AbilityEvents {
constructor(arg0: $Player$$Type, arg1: $AbilityType$$Type, arg2: $IPlayerAbilities$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEvents$CastContinuousAbility$$Type = ($AbilityEvents$CastContinuousAbility);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbilityEvents$CastContinuousAbility$$Original = $AbilityEvents$CastContinuousAbility;}
declare module "com.furiusmax.bjornlib.neo.AbilityEvents" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Event} from "net.neoforged.bus.api.Event"

export class $AbilityEvents extends $Event implements $Serializable$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEvents$$Type = ($AbilityEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbilityEvents$$Original = $AbilityEvents;}
declare module "com.furiusmax.bjornlib.neo.mixin.LimbAnimatorAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LimbAnimatorAccessor$$Interface {
set "pos"(value: float)
set "prevSpeed"(value: float)
get "prevSpeed"(): float
}

export class $LimbAnimatorAccessor implements $LimbAnimatorAccessor$$Interface {
 "setPos"(arg0: float): void
 "setPrevSpeed"(arg0: float): void
 "getPrevSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimbAnimatorAccessor$$Type = ($LimbAnimatorAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LimbAnimatorAccessor$$Original = $LimbAnimatorAccessor;}
declare module "com.furiusmax.bjornlib.neo.mixin.LivingEntityAccessor" {
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"

export interface $LivingEntityAccessor$$Interface {
get "jumping"(): boolean
set "swimAmount"(value: float)
set "swimAmountO"(value: float)
get "swimAmountO"(): float
get "swimAmount"(): float
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "isJumping"(): boolean
 "callUpdatingUsingItem"(): void
 "callCalculateFallDamage"(arg0: float, arg1: float): integer
 "callPlayBlockFallSound"(): void
 "callSetLivingEntityFlag"(arg0: integer, arg1: boolean): void
 "callGetDeathSound"(): $SoundEvent
 "callGetHurtSound"(arg0: $DamageSource$$Type): $SoundEvent
 "callGetSoundVolume"(): float
 "setSwimAmount"(arg0: float): void
 "setSwimAmountO"(arg0: float): void
 "callGetVoicePitch"(): float
 "getSwimAmountO"(): float
 "getSwimAmount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
declare module "com.furiusmax.bjornlib.neo.mixin.EntityAccessor" {
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $EntityAccessor$$Interface {
set "vehicle"(value: $Entity$$Type)
set "touchingWater"(value: boolean)
set "passengers"(value: $ImmutableList$$Type<($Entity$$Type)>)
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "setVehicle"(arg0: $Entity$$Type): void
 "shape_callPlayStepSound"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
 "setTouchingWater"(arg0: boolean): void
 "shape_callSetFlag"(arg0: integer, arg1: boolean): void
 "callGetEncodeId"(): StringJS
 "setPassengers"(arg0: $ImmutableList$$Type<($Entity$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ($EntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "com.furiusmax.bjornlib.neo.AbilityEvents$RemoveSkill" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbilityEvents} from "com.furiusmax.bjornlib.neo.AbilityEvents"
import {$AbilityType$$Type} from "com.furiusmax.bjornlib.ability.AbilityType"
import {$IPlayerAbilities$$Type} from "com.furiusmax.bjornlib.capability.IPlayerAbilities"

export class $AbilityEvents$RemoveSkill extends $AbilityEvents {
constructor(arg0: $Player$$Type, arg1: $AbilityType$$Type, arg2: $IPlayerAbilities$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEvents$RemoveSkill$$Type = ($AbilityEvents$RemoveSkill);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbilityEvents$RemoveSkill$$Original = $AbilityEvents$RemoveSkill;}
declare module "com.furiusmax.bjornlib.neo.AbilityEvents$AddSkill" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbilityEvents} from "com.furiusmax.bjornlib.neo.AbilityEvents"
import {$AbilityType$$Type} from "com.furiusmax.bjornlib.ability.AbilityType"
import {$IPlayerAbilities$$Type} from "com.furiusmax.bjornlib.capability.IPlayerAbilities"

export class $AbilityEvents$AddSkill extends $AbilityEvents {
constructor(arg0: $Player$$Type, arg1: $AbilityType$$Type, arg2: $IPlayerAbilities$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEvents$AddSkill$$Type = ($AbilityEvents$AddSkill);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbilityEvents$AddSkill$$Original = $AbilityEvents$AddSkill;}
declare module "com.furiusmax.bjornlib.neo.AbilityEvents$CastAbility" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbilityEvents} from "com.furiusmax.bjornlib.neo.AbilityEvents"
import {$AbilityType$$Type} from "com.furiusmax.bjornlib.ability.AbilityType"
import {$IPlayerAbilities$$Type} from "com.furiusmax.bjornlib.capability.IPlayerAbilities"

export class $AbilityEvents$CastAbility extends $AbilityEvents {
constructor(arg0: $Player$$Type, arg1: $AbilityType$$Type, arg2: $IPlayerAbilities$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEvents$CastAbility$$Type = ($AbilityEvents$CastAbility);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbilityEvents$CastAbility$$Original = $AbilityEvents$CastAbility;}
declare module "com.furiusmax.bjornlib.neo.AbilityEvents$UpdateSkill" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbilityEvents} from "com.furiusmax.bjornlib.neo.AbilityEvents"
import {$AbilityType$$Type} from "com.furiusmax.bjornlib.ability.AbilityType"
import {$IPlayerAbilities$$Type} from "com.furiusmax.bjornlib.capability.IPlayerAbilities"

export class $AbilityEvents$UpdateSkill extends $AbilityEvents {
constructor(arg0: $Player$$Type, arg1: $AbilityType$$Type, arg2: $IPlayerAbilities$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEvents$UpdateSkill$$Type = ($AbilityEvents$UpdateSkill);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbilityEvents$UpdateSkill$$Original = $AbilityEvents$UpdateSkill;}
declare module "com.furiusmax.bjornlib.neo.mixin.client.LivingEntityRendererAccessor" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $LivingEntityRendererAccessor$$Interface {

(arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType$$Type
}

export class $LivingEntityRendererAccessor implements $LivingEntityRendererAccessor$$Interface {
 "callGetRenderType"(arg0: $LivingEntity$$Type, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$$Type = ((arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: boolean) => $RenderType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRendererAccessor$$Original = $LivingEntityRendererAccessor;}
declare module "com.furiusmax.bjornlib.neo.mixin.client.PlayerRendererInvoker" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"

export interface $PlayerRendererInvoker$$Interface {
}

export class $PlayerRendererInvoker implements $PlayerRendererInvoker$$Interface {
 "invokeSetupRotations"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
 "invokeScale"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRendererInvoker$$Type = ($PlayerRendererInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRendererInvoker$$Original = $PlayerRendererInvoker;}
