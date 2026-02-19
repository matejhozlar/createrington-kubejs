declare module "com.railwayteam.railways.mixin_interfaces.IMonorailBezier$MonorailAngles" {
import {$PoseStack$Pose} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $IMonorailBezier$MonorailAngles {
 "beam": $PoseStack$Pose
 "lightPosition": $BlockPos
 "beamCaps": $Couple<($PoseStack$Pose)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMonorailBezier$MonorailAngles$$Type = ($IMonorailBezier$MonorailAngles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMonorailBezier$MonorailAngles$$Original = $IMonorailBezier$MonorailAngles;}
declare module "com.railwayteam.railways.mixin_interfaces.ILimitedGlobalStation" {
import {$Train, $Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$ILimited$$Interface} from "com.railwayteam.railways.mixin_interfaces.ILimited"

export interface $ILimitedGlobalStation$$Interface extends $ILimited$$Interface {
get "stationEnabled"(): boolean
get "disablingTrain"(): $Train
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export class $ILimitedGlobalStation implements $ILimitedGlobalStation$$Interface {
 "isStationEnabled"(): boolean
 "orDisablingTrain"(arg0: $Train$$Type, arg1: $Train$$Type): $Train
 "getDisablingTrain"(): $Train
 "isLimitEnabled"(): boolean
 "setLimitEnabled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILimitedGlobalStation$$Type = ($ILimitedGlobalStation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILimitedGlobalStation$$Original = $ILimitedGlobalStation;}
declare module "com.railwayteam.railways.mixin_interfaces.IHandcarTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHandcarTrain$$Interface {
}

export class $IHandcarTrain implements $IHandcarTrain$$Interface {
 "railways$isHandcar"(): boolean
 "railways$setHandcar"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandcarTrain$$Type = ($IHandcarTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHandcarTrain$$Original = $IHandcarTrain;}
declare module "com.railwayteam.railways.mixin_interfaces.IOccupiedCouplers" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IOccupiedCouplers$$Interface {

(): $Set$$Type<($UUID$$Type)>
}

export class $IOccupiedCouplers implements $IOccupiedCouplers$$Interface {
 "railways$getOccupiedCouplers"(): $Set<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOccupiedCouplers$$Type = (() => $Set$$Type<($UUID$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOccupiedCouplers$$Original = $IOccupiedCouplers;}
declare module "com.railwayteam.railways.mixin_interfaces.IIndexedSchedule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIndexedSchedule$$Interface {
}

export class $IIndexedSchedule implements $IIndexedSchedule$$Interface {
 "railways$setIndex"(arg0: integer): void
 "railways$getIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIndexedSchedule$$Type = ($IIndexedSchedule);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIndexedSchedule$$Original = $IIndexedSchedule;}
declare module "com.railwayteam.railways.mixin_interfaces.IBufferBlockedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockedTrain$$Interface {
}

export class $IBufferBlockedTrain implements $IBufferBlockedTrain$$Interface {
 "railways$isControlBlocked"(): boolean
 "railways$getBlockedSign"(): integer
 "railways$setControlBlocked"(arg0: boolean, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBufferBlockedTrain$$Type = ($IBufferBlockedTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBufferBlockedTrain$$Original = $IBufferBlockedTrain;}
declare module "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPotentiallyInvisibleSpriteContents$$Interface {
}

export class $IPotentiallyInvisibleSpriteContents implements $IPotentiallyInvisibleSpriteContents$$Interface {
 "railways$uploadFrame"(arg0: boolean): void
 "railways$isVisible"(): boolean
 "railways$shouldDoInvisibility"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPotentiallyInvisibleSpriteContents$$Type = ($IPotentiallyInvisibleSpriteContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPotentiallyInvisibleSpriteContents$$Original = $IPotentiallyInvisibleSpriteContents;}
declare module "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing" {
import {$SlabBlock, $SlabBlock$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IHasTrackCasing$$Interface {
set "alternate"(value: boolean)
set "trackCasing"(value: $SlabBlock$$Type)
get "trackCasing"(): $SlabBlock
get "alternate"(): boolean
}

export class $IHasTrackCasing implements $IHasTrackCasing$$Interface {
 "setAlternate"(arg0: boolean): void
 "setTrackCasing"(arg0: $SlabBlock$$Type): void
static "setTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $SlabBlock$$Type): void
static "setAlternateModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): boolean
 "getTrackCasing"(): $SlabBlock
static "getTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $SlabBlock
static "isAlternate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "isAlternate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTrackCasing$$Type = ($IHasTrackCasing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHasTrackCasing$$Original = $IHasTrackCasing;}
declare module "com.railwayteam.railways.mixin_interfaces.IPreAssembleCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPreAssembleCallback$$Interface {

(): void
}

export class $IPreAssembleCallback implements $IPreAssembleCallback$$Interface {
 "railways$preAssemble"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPreAssembleCallback$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPreAssembleCallback$$Original = $IPreAssembleCallback;}
declare module "com.railwayteam.railways.mixin_interfaces.ICrashAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICrashAdvancement$$Interface {

(): void
}

export class $ICrashAdvancement implements $ICrashAdvancement$$Interface {
 "railways$awardCrashAdvancements"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrashAdvancement$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICrashAdvancement$$Original = $ICrashAdvancement;}
declare module "com.railwayteam.railways.mixin_interfaces.IStrictSignalTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStrictSignalTrain$$Interface {

(arg0: boolean): void
}

export class $IStrictSignalTrain implements $IStrictSignalTrain$$Interface {
 "railways$setStrictSignals"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStrictSignalTrain$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStrictSignalTrain$$Original = $IStrictSignalTrain;}
declare module "com.railwayteam.railways.mixin_interfaces.ISwitchDisabledEdge" {
import {$TrackEdge$$Type} from "com.simibubi.create.content.trains.graph.TrackEdge"

export interface $ISwitchDisabledEdge$$Interface {
get "enabled"(): boolean
get "automatic"(): boolean
set "automatic"(value: boolean)
get "automaticallySelectedPriority"(): integer
set "enabled"(value: boolean)
get "automaticallySelected"(): boolean
get "automaticallySelected"(): void
}

export class $ISwitchDisabledEdge implements $ISwitchDisabledEdge$$Interface {
static "isEnabled"(arg0: $TrackEdge$$Type): boolean
 "isEnabled"(): boolean
 "isAutomatic"(): boolean
static "isAutomatic"(arg0: $TrackEdge$$Type): boolean
static "automaticallySelect"(arg0: $TrackEdge$$Type): void
 "setAutomatic"(arg0: boolean): void
static "isDisabled"(arg0: $TrackEdge$$Type): boolean
 "getAutomaticallySelectedPriority"(): integer
 "setEnabled"(arg0: boolean): void
 "ackAutomaticSelection"(): void
 "isAutomaticallySelected"(): boolean
 "setAutomaticallySelected"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISwitchDisabledEdge$$Type = ($ISwitchDisabledEdge);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISwitchDisabledEdge$$Original = $ISwitchDisabledEdge;}
declare module "com.railwayteam.railways.mixin_interfaces.IMonorailBezier" {
import {$IMonorailBezier$MonorailAngles, $IMonorailBezier$MonorailAngles$$Type} from "com.railwayteam.railways.mixin_interfaces.IMonorailBezier$MonorailAngles"

export interface $IMonorailBezier$$Interface {

(): ($IMonorailBezier$MonorailAngles$$Type)[]
get "bakedMonorails"(): ($IMonorailBezier$MonorailAngles)[]
}

export class $IMonorailBezier implements $IMonorailBezier$$Interface {
 "getBakedMonorails"(): ($IMonorailBezier$MonorailAngles)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMonorailBezier$$Type = (() => ($IMonorailBezier$MonorailAngles$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMonorailBezier$$Original = $IMonorailBezier;}
declare module "com.railwayteam.railways.mixin_interfaces.ILimited" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILimited$$Interface {
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export class $ILimited implements $ILimited$$Interface {
 "isLimitEnabled"(): boolean
 "setLimitEnabled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILimited$$Type = ($ILimited);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILimited$$Original = $ILimited;}
