declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptEffects" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $CarryOnScript$ScriptEffects extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptEffects)>
static readonly "EMPTY": $CarryOnScript$ScriptEffects

constructor(commandInit: StringJS, commandLoop: StringJS, commandPlace: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "commandLoop"(): StringJS
public "commandInit"(): StringJS
public "commandPlace"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptEffects$$Type = ({"commandPlace"?: StringJS, "commandInit"?: StringJS, "commandLoop"?: StringJS}) | ([commandPlace?: StringJS, commandInit?: StringJS, commandLoop?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnScript$ScriptEffects$$Original = $CarryOnScript$ScriptEffects;}
declare module "tschipp.carryon.common.scripting.Matchables$EffectsCondition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable$$Interface} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record} from "java.lang.Record"

export class $Matchables$EffectsCondition extends $Record implements $Matchables$Matchable$$Interface<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$EffectsCondition)>
static readonly "NONE": $Matchables$EffectsCondition

constructor(effects: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "effects"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$EffectsCondition$$Type = ({"effects"?: StringJS}) | ([effects?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matchables$EffectsCondition$$Original = $Matchables$EffectsCondition;}
declare module "tschipp.carryon.common.scripting.Matchables$ScoreboardCondition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable$$Interface} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record} from "java.lang.Record"

export class $Matchables$ScoreboardCondition extends $Record implements $Matchables$Matchable$$Interface<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$ScoreboardCondition)>
static readonly "NONE": $Matchables$ScoreboardCondition

constructor(cond: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "cond"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$ScoreboardCondition$$Type = ({"cond"?: StringJS}) | ([cond?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matchables$ScoreboardCondition$$Original = $Matchables$ScoreboardCondition;}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectBlock" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Matchables$NBTCondition, $Matchables$NBTCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NBTCondition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Matchables$NumberBoundCondition, $Matchables$NumberBoundCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition"
import {$Record} from "java.lang.Record"

export class $CarryOnScript$ScriptObject$ScriptObjectBlock extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptObject$ScriptObjectBlock)>
static readonly "EMPTY": $CarryOnScript$ScriptObject$ScriptObjectBlock

constructor(typeNameBlock: ($ResourceKey$$Type<($Block$$Type)>)?, typeHardness: $Matchables$NumberBoundCondition$$Type, typeResistance: $Matchables$NumberBoundCondition$$Type, typeBlockTag: $Matchables$NBTCondition$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "typeNameBlock"(): $Optional<($ResourceKey<($Block)>)>
public "typeBlockTag"(): $Matchables$NBTCondition
public "typeHardness"(): $Matchables$NumberBoundCondition
public "typeResistance"(): $Matchables$NumberBoundCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type = ({"typeBlockTag"?: $Matchables$NBTCondition$$Type, "typeNameBlock"?: ($ResourceKey$$Type<($Block$$Type)>)?, "typeResistance"?: $Matchables$NumberBoundCondition$$Type, "typeHardness"?: $Matchables$NumberBoundCondition$$Type}) | ([typeBlockTag?: $Matchables$NBTCondition$$Type, typeNameBlock?: ($ResourceKey$$Type<($Block$$Type)>)?, typeResistance?: $Matchables$NumberBoundCondition$$Type, typeHardness?: $Matchables$NumberBoundCondition$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnScript$ScriptObject$ScriptObjectBlock$$Original = $CarryOnScript$ScriptObject$ScriptObjectBlock;}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptConditions" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Matchables$AdvancementCondition, $Matchables$AdvancementCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$AdvancementCondition"
import {$Matchables$PositionCondition, $Matchables$PositionCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$PositionCondition"
import {$Matchables$GamestageCondition, $Matchables$GamestageCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$GamestageCondition"
import {$Matchables$NumberBoundCondition, $Matchables$NumberBoundCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition"
import {$Matchables$EffectsCondition, $Matchables$EffectsCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$EffectsCondition"
import {$Record} from "java.lang.Record"
import {$Matchables$ScoreboardCondition, $Matchables$ScoreboardCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$ScoreboardCondition"

export class $CarryOnScript$ScriptConditions extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptConditions)>
static readonly "EMPTY": $CarryOnScript$ScriptConditions

constructor(conditionGamestage: $Matchables$GamestageCondition$$Type, conditionAchievement: $Matchables$AdvancementCondition$$Type, conditionXp: $Matchables$NumberBoundCondition$$Type, conditionGamemode: $Matchables$NumberBoundCondition$$Type, conditionScoreboard: $Matchables$ScoreboardCondition$$Type, conditionPosition: $Matchables$PositionCondition$$Type, conditionEffects: $Matchables$EffectsCondition$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "conditionPosition"(): $Matchables$PositionCondition
public "conditionEffects"(): $Matchables$EffectsCondition
public "conditionGamestage"(): $Matchables$GamestageCondition
public "conditionXp"(): $Matchables$NumberBoundCondition
public "conditionGamemode"(): $Matchables$NumberBoundCondition
public "conditionScoreboard"(): $Matchables$ScoreboardCondition
public "conditionAchievement"(): $Matchables$AdvancementCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptConditions$$Type = ({"conditionGamemode"?: $Matchables$NumberBoundCondition$$Type, "conditionGamestage"?: $Matchables$GamestageCondition$$Type, "conditionEffects"?: $Matchables$EffectsCondition$$Type, "conditionAchievement"?: $Matchables$AdvancementCondition$$Type, "conditionXp"?: $Matchables$NumberBoundCondition$$Type, "conditionPosition"?: $Matchables$PositionCondition$$Type, "conditionScoreboard"?: $Matchables$ScoreboardCondition$$Type}) | ([conditionGamemode?: $Matchables$NumberBoundCondition$$Type, conditionGamestage?: $Matchables$GamestageCondition$$Type, conditionEffects?: $Matchables$EffectsCondition$$Type, conditionAchievement?: $Matchables$AdvancementCondition$$Type, conditionXp?: $Matchables$NumberBoundCondition$$Type, conditionPosition?: $Matchables$PositionCondition$$Type, conditionScoreboard?: $Matchables$ScoreboardCondition$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnScript$ScriptConditions$$Original = $CarryOnScript$ScriptConditions;}
declare module "tschipp.carryon.common.scripting.Matchables$AdvancementCondition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable$$Interface} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record} from "java.lang.Record"

export class $Matchables$AdvancementCondition extends $Record implements $Matchables$Matchable$$Interface<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$AdvancementCondition)>
static readonly "NONE": $Matchables$AdvancementCondition

constructor(advancement: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "advancement"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$AdvancementCondition$$Type = ({"advancement"?: StringJS}) | ([advancement?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matchables$AdvancementCondition$$Original = $Matchables$AdvancementCondition;}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject" {
import {$CarryOnScript$ScriptObject$ScriptObjectBlock, $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectBlock"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CarryOnScript$ScriptObject$ScriptObjectEntity, $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectEntity"
import {$Record} from "java.lang.Record"

export class $CarryOnScript$ScriptObject extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptObject)>

constructor(block: $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type, entity: $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "block"(): $CarryOnScript$ScriptObject$ScriptObjectBlock
public "entity"(): $CarryOnScript$ScriptObject$ScriptObjectEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptObject$$Type = ({"block"?: $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type, "entity"?: $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type}) | ([block?: $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type, entity?: $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnScript$ScriptObject$$Original = $CarryOnScript$ScriptObject;}
declare module "tschipp.carryon.common.scripting.Matchables$PositionCondition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable$$Interface} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record} from "java.lang.Record"

export class $Matchables$PositionCondition extends $Record implements $Matchables$Matchable$$Interface<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$PositionCondition)>
static readonly "NONE": $Matchables$PositionCondition

constructor(cond: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "cond"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$PositionCondition$$Type = ({"cond"?: StringJS}) | ([cond?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matchables$PositionCondition$$Original = $Matchables$PositionCondition;}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptRender" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record} from "java.lang.Record"
import {$Matchables$OptionalVec3, $Matchables$OptionalVec3$$Type} from "tschipp.carryon.common.scripting.Matchables$OptionalVec3"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $CarryOnScript$ScriptRender extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptRender)>
static readonly "EMPTY": $CarryOnScript$ScriptRender

constructor(renderNameBlock: ($ResourceKey$$Type<($Block$$Type)>)?, renderNameEntity: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, renderNBT: ($CompoundTag$$Type)?, renderTranslation: $Matchables$OptionalVec3$$Type, renderRotation: $Matchables$OptionalVec3$$Type, renderscale: $Matchables$OptionalVec3$$Type, renderRotationLeftArm: $Matchables$OptionalVec3$$Type, renderRotationRightArm: $Matchables$OptionalVec3$$Type, renderLeftArm: boolean, renderRightArm: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "renderRotation"(): $Matchables$OptionalVec3
public "renderLeftArm"(): boolean
public "renderRightArm"(): boolean
public "renderRotationRightArm"(): $Matchables$OptionalVec3
public "renderRotationLeftArm"(): $Matchables$OptionalVec3
public "renderNBT"(): $Optional<($CompoundTag)>
public "renderNameEntity"(): $Optional<($ResourceKey<($EntityType<(never)>)>)>
public "renderscale"(): $Matchables$OptionalVec3
public "renderTranslation"(): $Matchables$OptionalVec3
public "renderNameBlock"(): $Optional<($ResourceKey<($Block)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptRender$$Type = ({"renderRightArm"?: boolean, "renderscale"?: $Matchables$OptionalVec3$$Type, "renderRotationLeftArm"?: $Matchables$OptionalVec3$$Type, "renderNameBlock"?: ($ResourceKey$$Type<($Block$$Type)>)?, "renderNBT"?: ($CompoundTag$$Type)?, "renderLeftArm"?: boolean, "renderNameEntity"?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, "renderRotationRightArm"?: $Matchables$OptionalVec3$$Type, "renderTranslation"?: $Matchables$OptionalVec3$$Type, "renderRotation"?: $Matchables$OptionalVec3$$Type}) | ([renderRightArm?: boolean, renderscale?: $Matchables$OptionalVec3$$Type, renderRotationLeftArm?: $Matchables$OptionalVec3$$Type, renderNameBlock?: ($ResourceKey$$Type<($Block$$Type)>)?, renderNBT?: ($CompoundTag$$Type)?, renderLeftArm?: boolean, renderNameEntity?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, renderRotationRightArm?: $Matchables$OptionalVec3$$Type, renderTranslation?: $Matchables$OptionalVec3$$Type, renderRotation?: $Matchables$OptionalVec3$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnScript$ScriptRender$$Original = $CarryOnScript$ScriptRender;}
declare module "tschipp.carryon.common.scripting.Matchables$GamestageCondition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable$$Interface} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record} from "java.lang.Record"

export class $Matchables$GamestageCondition extends $Record implements $Matchables$Matchable$$Interface<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$GamestageCondition)>
static readonly "NONE": $Matchables$GamestageCondition

constructor(gamestage: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "gamestage"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$GamestageCondition$$Type = ({"gamestage"?: StringJS}) | ([gamestage?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matchables$GamestageCondition$$Original = $Matchables$GamestageCondition;}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectEntity" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Matchables$NBTCondition, $Matchables$NBTCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NBTCondition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Matchables$NumberBoundCondition, $Matchables$NumberBoundCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition"
import {$Record} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $CarryOnScript$ScriptObject$ScriptObjectEntity extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptObject$ScriptObjectEntity)>
static readonly "EMPTY": $CarryOnScript$ScriptObject$ScriptObjectEntity

constructor(typeNameEntity: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, typeHealth: $Matchables$NumberBoundCondition$$Type, typeHeight: $Matchables$NumberBoundCondition$$Type, typeWidth: $Matchables$NumberBoundCondition$$Type, typeEntityTag: $Matchables$NBTCondition$$Type)

public "typeWidth"(): $Matchables$NumberBoundCondition
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "typeNameEntity"(): $Optional<($ResourceKey<($EntityType<(never)>)>)>
public "typeEntityTag"(): $Matchables$NBTCondition
public "typeHealth"(): $Matchables$NumberBoundCondition
public "typeHeight"(): $Matchables$NumberBoundCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type = ({"typeEntityTag"?: $Matchables$NBTCondition$$Type, "typeHealth"?: $Matchables$NumberBoundCondition$$Type, "typeHeight"?: $Matchables$NumberBoundCondition$$Type, "typeNameEntity"?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, "typeWidth"?: $Matchables$NumberBoundCondition$$Type}) | ([typeEntityTag?: $Matchables$NBTCondition$$Type, typeHealth?: $Matchables$NumberBoundCondition$$Type, typeHeight?: $Matchables$NumberBoundCondition$$Type, typeNameEntity?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, typeWidth?: $Matchables$NumberBoundCondition$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnScript$ScriptObject$ScriptObjectEntity$$Original = $CarryOnScript$ScriptObject$ScriptObjectEntity;}
declare module "tschipp.carryon.common.scripting.CarryOnScript" {
import {$CarryOnScript$ScriptEffects, $CarryOnScript$ScriptEffects$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptEffects"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CarryOnScript$ScriptRender, $CarryOnScript$ScriptRender$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptRender"
import {$CarryOnScript$ScriptConditions, $CarryOnScript$ScriptConditions$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptConditions"
import {$CarryOnScript$ScriptObject, $CarryOnScript$ScriptObject$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"

export class $CarryOnScript extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript)>

constructor(priority: long, scriptObject: $CarryOnScript$ScriptObject$$Type, scriptConditions: $CarryOnScript$ScriptConditions$$Type, scriptRender: $CarryOnScript$ScriptRender$$Type, scriptEffects: $CarryOnScript$ScriptEffects$$Type)

public "priority"(): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isValid"(): boolean
public "isEntity"(): boolean
public "scriptObject"(): $CarryOnScript$ScriptObject
public "fulfillsConditions"(arg0: $ServerPlayer$$Type): boolean
public "scriptConditions"(): $CarryOnScript$ScriptConditions
public "scriptEffects"(): $CarryOnScript$ScriptEffects
public "scriptRender"(): $CarryOnScript$ScriptRender
public "isBlock"(): boolean
get "valid"(): boolean
get "entity"(): boolean
get "block"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$$Type = ({"priority"?: long, "scriptEffects"?: $CarryOnScript$ScriptEffects$$Type, "scriptObject"?: $CarryOnScript$ScriptObject$$Type, "scriptConditions"?: $CarryOnScript$ScriptConditions$$Type, "scriptRender"?: $CarryOnScript$ScriptRender$$Type}) | ([priority?: long, scriptEffects?: $CarryOnScript$ScriptEffects$$Type, scriptObject?: $CarryOnScript$ScriptObject$$Type, scriptConditions?: $CarryOnScript$ScriptConditions$$Type, scriptRender?: $CarryOnScript$ScriptRender$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnScript$$Original = $CarryOnScript;}
declare module "tschipp.carryon.common.scripting.Matchables$OptionalVec3" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"

export class $Matchables$OptionalVec3 {
static readonly "CODEC": $Codec<($Matchables$OptionalVec3)>
static readonly "NONE": $Matchables$OptionalVec3

constructor(arg0: StringJS)

public "getVec"(arg0: double, arg1: double, arg2: double): $Vec3
public "getVec"(): $Vec3
get "vec"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$OptionalVec3$$Type = ($Matchables$OptionalVec3);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matchables$OptionalVec3$$Original = $Matchables$OptionalVec3;}
declare module "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Matchables$Matchable$$Interface} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record} from "java.lang.Record"

export class $Matchables$NumberBoundCondition extends $Record implements $Matchables$Matchable$$Interface<(number)> {
static readonly "CODEC": $Codec<($Matchables$NumberBoundCondition)>
static readonly "NONE": $Matchables$NumberBoundCondition

constructor(bounds: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: number): boolean
public "bounds"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$NumberBoundCondition$$Type = ({"bounds"?: StringJS}) | ([bounds?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matchables$NumberBoundCondition$$Original = $Matchables$NumberBoundCondition;}
