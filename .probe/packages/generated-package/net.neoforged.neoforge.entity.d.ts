declare module "net.neoforged.neoforge.entity.PartEntity" {
import {$Optional} from "java.util.Optional"
import {$UUID} from "java.util.UUID"
import {$SynchedEntityData} from "net.minecraft.network.syncher.SynchedEntityData"
import {$Pose} from "net.minecraft.world.entity.Pose"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Object2DoubleMap} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $PartEntity<T extends $Entity> extends $Entity {
 "firstTick": boolean
 "wasEyeInWater": boolean
 "hasImpulse": boolean
static readonly "ENTITY_COUNTER": $AtomicInteger
 "uuid": $UUID
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
static readonly "FLAG_ONFIRE": integer
static readonly "BOARDING_COOLDOWN": integer
 "sodiumdynamiclights$luminance": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "FLAG_FALL_FLYING": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "boardingCooldown": integer
 "zo": double
 "create_diesel_generators$turretPos": $BlockPos
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
readonly "entityData": $SynchedEntityData
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
readonly "random": $RandomSource
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "stringUUID": StringJS
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "FLAG_GLOWING": integer
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: T)

public "getParent"(): T
public "getAddEntityPacket"(arg0: $ServerEntity$$Type): $Packet<($ClientGamePacketListener)>
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "parent"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartEntity$$Type<T> = ($PartEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartEntity$$Original<T> = $PartEntity<(T)>;}
declare module "net.neoforged.neoforge.entity.XpOrbTargetingEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ExperienceOrb, $ExperienceOrb$$Type} from "net.minecraft.world.entity.ExperienceOrb"
import {$Event} from "net.neoforged.bus.api.Event"

export class $XpOrbTargetingEvent extends $Event {
constructor(arg0: $ExperienceOrb$$Type, arg1: double)

public "setFollowingPlayer"(arg0: $Player$$Type): void
public "getScanDistance"(): double
public "getFollowingPlayer"(): $Player
public "getXpOrb"(): $ExperienceOrb
set "followingPlayer"(value: $Player$$Type)
get "scanDistance"(): double
get "followingPlayer"(): $Player
get "xpOrb"(): $ExperienceOrb
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpOrbTargetingEvent$$Type = ($XpOrbTargetingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XpOrbTargetingEvent$$Original = $XpOrbTargetingEvent;}
