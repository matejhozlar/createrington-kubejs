declare module "net.minecraft.world.scores.Score" {
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ReadOnlyScoreInfo$$Type, $ReadOnlyScoreInfo$$Interface} from "net.minecraft.world.scores.ReadOnlyScoreInfo"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Score implements $ReadOnlyScoreInfo$$Interface {
constructor()

public "value"(arg0: integer): void
public "value"(): integer
public "write"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $Score
public "display"(arg0: $Component$$Type): void
public "display"(): $Component
public "isLocked"(): boolean
public "numberFormat"(): $NumberFormat
public "numberFormat"(arg0: $NumberFormat$$Type): void
public "setLocked"(arg0: boolean): void
public static "safeFormatValue"(arg0: $ReadOnlyScoreInfo$$Type, arg1: $NumberFormat$$Type): $MutableComponent
public "formatValue"(arg0: $NumberFormat$$Type): $MutableComponent
get "locked"(): boolean
set "locked"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Score$$Type = ($Score);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Score$$Original = $Score;}
declare module "net.minecraft.world.scores.ScoreHolder" {
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $ScoreHolder$$Interface {

(): StringJS
get "displayName"(): $Component
get "feedbackDisplayName"(): $Component
get "scoreboardName"(): StringJS
}

export class $ScoreHolder implements $ScoreHolder$$Interface {
static readonly "WILDCARD": $ScoreHolder
static readonly "WILDCARD_NAME": StringJS

 "getDisplayName"(): $Component
 "getFeedbackDisplayName"(): $Component
static "forNameOnly"(arg0: StringJS): $ScoreHolder
static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
 "getScoreboardName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreHolder$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreHolder$$Original = $ScoreHolder;}
declare module "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ObjectiveCriteria$RenderType extends $Enum<($ObjectiveCriteria$RenderType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($ObjectiveCriteria$RenderType)>
static readonly "HEARTS": $ObjectiveCriteria$RenderType
static readonly "INTEGER": $ObjectiveCriteria$RenderType

public static "values"(): ($ObjectiveCriteria$RenderType)[]
public static "valueOf"(arg0: StringJS): $ObjectiveCriteria$RenderType
public "getId"(): StringJS
public "getSerializedName"(): StringJS
public static "byId"(arg0: StringJS): $ObjectiveCriteria$RenderType
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "id"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectiveCriteria$RenderType$$Type = (("integer") | ("hearts"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectiveCriteria$RenderType$$Original = $ObjectiveCriteria$RenderType;}
declare module "net.minecraft.world.scores.criteria.ObjectiveCriteria" {
import {$Optional} from "java.util.Optional"
import {$Set} from "java.util.Set"
import {$ObjectiveCriteria$RenderType, $ObjectiveCriteria$RenderType$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $ObjectiveCriteria {
static readonly "DEATH_COUNT": $ObjectiveCriteria
static readonly "ARMOR": $ObjectiveCriteria
static readonly "TRIGGER": $ObjectiveCriteria
static readonly "KILL_COUNT_ALL": $ObjectiveCriteria
static readonly "AIR": $ObjectiveCriteria
static readonly "LEVEL": $ObjectiveCriteria
static readonly "DUMMY": $ObjectiveCriteria
static readonly "EXPERIENCE": $ObjectiveCriteria
static readonly "HEALTH": $ObjectiveCriteria
static readonly "KILL_COUNT_PLAYERS": $ObjectiveCriteria
static readonly "TEAM_KILL": ($ObjectiveCriteria)[]
static readonly "KILLED_BY_TEAM": ($ObjectiveCriteria)[]
static readonly "FOOD": $ObjectiveCriteria

constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: boolean, arg2: $ObjectiveCriteria$RenderType$$Type)

public "getName"(): StringJS
public "isReadOnly"(): boolean
public static "registerCustom"(arg0: StringJS, arg1: boolean, arg2: $ObjectiveCriteria$RenderType$$Type): $ObjectiveCriteria
public static "registerCustom"(arg0: StringJS): $ObjectiveCriteria
public static "byName"(arg0: StringJS): $Optional<($ObjectiveCriteria)>
public static "getCustomCriteriaNames"(): $Set<(StringJS)>
public "getDefaultRenderType"(): $ObjectiveCriteria$RenderType
get "name"(): StringJS
get "readOnly"(): boolean
get "customCriteriaNames"(): $Set<(StringJS)>
get "defaultRenderType"(): $ObjectiveCriteria$RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectiveCriteria$$Type = ($ObjectiveCriteria);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectiveCriteria$$Original = $ObjectiveCriteria;}
declare module "net.minecraft.world.scores.Team$Visibility" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Team$Visibility extends $Enum<($Team$Visibility)> {
static readonly "HIDE_FOR_OTHER_TEAMS": $Team$Visibility
static readonly "NEVER": $Team$Visibility
readonly "id": integer
static readonly "ALWAYS": $Team$Visibility
static readonly "HIDE_FOR_OWN_TEAM": $Team$Visibility

public static "values"(): ($Team$Visibility)[]
public static "valueOf"(arg0: StringJS): $Team$Visibility
public "getDisplayName"(): $Component
public static "getAllNames"(): (StringJS)[]
public static "byName"(arg0: StringJS): $Team$Visibility
get "displayName"(): $Component
get "allNames"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$Visibility$$Type = (("always") | ("never") | ("hide_for_other_teams") | ("hide_for_own_team"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Team$Visibility$$Original = $Team$Visibility;}
declare module "net.minecraft.world.scores.ScoreboardSaveData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ScoreboardSaveData extends $SavedData {
static readonly "FILE_ID": StringJS

constructor(arg0: $Scoreboard$$Type)

public "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $ScoreboardSaveData
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreboardSaveData$$Type = ($ScoreboardSaveData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreboardSaveData$$Original = $ScoreboardSaveData;}
declare module "net.minecraft.world.scores.PlayerTeam" {
import {$Collection} from "java.util.Collection"
import {$Team, $Team$$Type} from "net.minecraft.world.scores.Team"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Team$Visibility, $Team$Visibility$$Type} from "net.minecraft.world.scores.Team$Visibility"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Scoreboard, $Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$Team$CollisionRule, $Team$CollisionRule$$Type} from "net.minecraft.world.scores.Team$CollisionRule"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $PlayerTeam extends $Team {
constructor(arg0: $Scoreboard$$Type, arg1: StringJS)

public "getName"(): StringJS
public "getDisplayName"(): $Component
public "setColor"(arg0: $ChatFormatting$$Type): void
public "getPlayers"(): $Collection<(StringJS)>
public "canSeeFriendlyInvisibles"(): boolean
public "isAllowFriendlyFire"(): boolean
public static "formatNameForTeam"(arg0: $Team$$Type, arg1: $Component$$Type): $MutableComponent
public "getScoreboard"(): $Scoreboard
public "getDeathMessageVisibility"(): $Team$Visibility
public "setDisplayName"(arg0: $Component$$Type): void
public "getColor"(): $ChatFormatting
public "getFormattedDisplayName"(): $MutableComponent
public "getNameTagVisibility"(): $Team$Visibility
public "setSeeFriendlyInvisibles"(arg0: boolean): void
public "setAllowFriendlyFire"(arg0: boolean): void
public "setDeathMessageVisibility"(arg0: $Team$Visibility$$Type): void
public "setNameTagVisibility"(arg0: $Team$Visibility$$Type): void
public "getPlayerPrefix"(): $Component
public "getPlayerSuffix"(): $Component
public "getFormattedName"(arg0: $Component$$Type): $MutableComponent
public "getCollisionRule"(): $Team$CollisionRule
public "setPlayerSuffix"(arg0: $Component$$Type): void
public "unpackOptions"(arg0: integer): void
public "setPlayerPrefix"(arg0: $Component$$Type): void
public "setCollisionRule"(arg0: $Team$CollisionRule$$Type): void
public "packOptions"(): integer
get "name"(): StringJS
get "displayName"(): $Component
set "color"(value: $ChatFormatting$$Type)
get "players"(): $Collection<(StringJS)>
get "allowFriendlyFire"(): boolean
get "scoreboard"(): $Scoreboard
get "deathMessageVisibility"(): $Team$Visibility
set "displayName"(value: $Component$$Type)
get "color"(): $ChatFormatting
get "formattedDisplayName"(): $MutableComponent
get "nameTagVisibility"(): $Team$Visibility
set "seeFriendlyInvisibles"(value: boolean)
set "allowFriendlyFire"(value: boolean)
set "deathMessageVisibility"(value: $Team$Visibility$$Type)
set "nameTagVisibility"(value: $Team$Visibility$$Type)
get "playerPrefix"(): $Component
get "playerSuffix"(): $Component
get "collisionRule"(): $Team$CollisionRule
set "playerSuffix"(value: $Component$$Type)
set "playerPrefix"(value: $Component$$Type)
set "collisionRule"(value: $Team$CollisionRule$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTeam$$Type = ($PlayerTeam);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTeam$$Original = $PlayerTeam;}
declare module "net.minecraft.world.scores.Team$CollisionRule" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Team$CollisionRule extends $Enum<($Team$CollisionRule)> {
static readonly "PUSH_OTHER_TEAMS": $Team$CollisionRule
static readonly "NEVER": $Team$CollisionRule
readonly "id": integer
static readonly "PUSH_OWN_TEAM": $Team$CollisionRule
static readonly "ALWAYS": $Team$CollisionRule

public static "values"(): ($Team$CollisionRule)[]
public static "valueOf"(arg0: StringJS): $Team$CollisionRule
public "getDisplayName"(): $Component
public static "byName"(arg0: StringJS): $Team$CollisionRule
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$CollisionRule$$Type = (("always") | ("never") | ("push_other_teams") | ("push_own_team"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Team$CollisionRule$$Original = $Team$CollisionRule;}
declare module "net.minecraft.world.scores.DisplaySlot" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IntFunction} from "java.util.function.IntFunction"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $DisplaySlot extends $Enum<($DisplaySlot)> implements $StringRepresentable$$Interface {
static readonly "BELOW_NAME": $DisplaySlot
static readonly "TEAM_GREEN": $DisplaySlot
static readonly "CODEC": $StringRepresentable$EnumCodec<($DisplaySlot)>
static readonly "TEAM_BLACK": $DisplaySlot
static readonly "TEAM_DARK_GREEN": $DisplaySlot
static readonly "TEAM_BLUE": $DisplaySlot
static readonly "TEAM_DARK_RED": $DisplaySlot
static readonly "TEAM_YELLOW": $DisplaySlot
static readonly "TEAM_DARK_GRAY": $DisplaySlot
static readonly "TEAM_AQUA": $DisplaySlot
static readonly "BY_ID": $IntFunction<($DisplaySlot)>
static readonly "SIDEBAR": $DisplaySlot
static readonly "TEAM_DARK_AQUA": $DisplaySlot
static readonly "TEAM_RED": $DisplaySlot
static readonly "TEAM_DARK_BLUE": $DisplaySlot
static readonly "TEAM_LIGHT_PURPLE": $DisplaySlot
static readonly "TEAM_DARK_PURPLE": $DisplaySlot
static readonly "TEAM_WHITE": $DisplaySlot
static readonly "TEAM_GOLD": $DisplaySlot
static readonly "LIST": $DisplaySlot
static readonly "TEAM_GRAY": $DisplaySlot

public static "values"(): ($DisplaySlot)[]
public static "valueOf"(arg0: StringJS): $DisplaySlot
public "id"(): integer
public "getSerializedName"(): StringJS
public static "teamColorToSlot"(arg0: $ChatFormatting$$Type): $DisplaySlot
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySlot$$Type = (("list") | ("sidebar") | ("below_name") | ("sidebar.team.black") | ("sidebar.team.dark_blue") | ("sidebar.team.dark_green") | ("sidebar.team.dark_aqua") | ("sidebar.team.dark_red") | ("sidebar.team.dark_purple") | ("sidebar.team.gold") | ("sidebar.team.gray") | ("sidebar.team.dark_gray") | ("sidebar.team.blue") | ("sidebar.team.green") | ("sidebar.team.aqua") | ("sidebar.team.red") | ("sidebar.team.light_purple") | ("sidebar.team.yellow") | ("sidebar.team.white"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplaySlot$$Original = $DisplaySlot;}
declare module "net.minecraft.world.scores.ReadOnlyScoreInfo" {
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"

export interface $ReadOnlyScoreInfo$$Interface {
get "locked"(): boolean
}

export class $ReadOnlyScoreInfo implements $ReadOnlyScoreInfo$$Interface {
 "value"(): integer
 "isLocked"(): boolean
 "numberFormat"(): $NumberFormat
static "safeFormatValue"(arg0: $ReadOnlyScoreInfo$$Type, arg1: $NumberFormat$$Type): $MutableComponent
 "formatValue"(arg0: $NumberFormat$$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadOnlyScoreInfo$$Type = ($ReadOnlyScoreInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReadOnlyScoreInfo$$Original = $ReadOnlyScoreInfo;}
declare module "net.minecraft.world.scores.Team" {
import {$Collection} from "java.util.Collection"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Team$Visibility} from "net.minecraft.world.scores.Team$Visibility"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Team$CollisionRule} from "net.minecraft.world.scores.Team$CollisionRule"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $Team {
constructor()

public "getName"(): StringJS
public "getPlayers"(): $Collection<(StringJS)>
public "canSeeFriendlyInvisibles"(): boolean
public "isAllowFriendlyFire"(): boolean
public "isAlliedTo"(arg0: $Team$$Type): boolean
public "getDeathMessageVisibility"(): $Team$Visibility
public "getColor"(): $ChatFormatting
public "getNameTagVisibility"(): $Team$Visibility
public "getFormattedName"(arg0: $Component$$Type): $MutableComponent
public "getCollisionRule"(): $Team$CollisionRule
get "name"(): StringJS
get "players"(): $Collection<(StringJS)>
get "allowFriendlyFire"(): boolean
get "deathMessageVisibility"(): $Team$Visibility
get "color"(): $ChatFormatting
get "nameTagVisibility"(): $Team$Visibility
get "collisionRule"(): $Team$CollisionRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$$Type = ($Team);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Team$$Original = $Team;}
declare module "net.minecraft.world.scores.Objective" {
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$ObjectiveCriteria, $ObjectiveCriteria$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Scoreboard, $Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$ObjectiveCriteria$RenderType, $ObjectiveCriteria$RenderType$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"

export class $Objective {
constructor(arg0: $Scoreboard$$Type, arg1: StringJS, arg2: $ObjectiveCriteria$$Type, arg3: $Component$$Type, arg4: $ObjectiveCriteria$RenderType$$Type, arg5: boolean, arg6: $NumberFormat$$Type)

public "getName"(): StringJS
public "getDisplayName"(): $Component
public "numberFormat"(): $NumberFormat
public "setNumberFormat"(arg0: $NumberFormat$$Type): void
public "getScoreboard"(): $Scoreboard
public "numberFormatOrDefault"(arg0: $NumberFormat$$Type): $NumberFormat
public "getCriteria"(): $ObjectiveCriteria
public "getRenderType"(): $ObjectiveCriteria$RenderType
public "setDisplayName"(arg0: $Component$$Type): void
public "getFormattedDisplayName"(): $Component
public "setRenderType"(arg0: $ObjectiveCriteria$RenderType$$Type): void
public "setDisplayAutoUpdate"(arg0: boolean): void
public "displayAutoUpdate"(): boolean
get "name"(): StringJS
get "displayName"(): $Component
get "scoreboard"(): $Scoreboard
get "criteria"(): $ObjectiveCriteria
get "renderType"(): $ObjectiveCriteria$RenderType
set "displayName"(value: $Component$$Type)
get "formattedDisplayName"(): $Component
set "renderType"(value: $ObjectiveCriteria$RenderType$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Objective$$Type = ($Objective);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Objective$$Original = $Objective;}
declare module "net.minecraft.world.scores.PlayerScoreEntry" {
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $PlayerScoreEntry extends $Record {
constructor(arg0: StringJS, arg1: integer, arg2: $Component$$Type, arg3: $NumberFormat$$Type)

public "value"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isHidden"(): boolean
public "owner"(): StringJS
public "display"(): $Component
public "formatValue"(arg0: $NumberFormat$$Type): $MutableComponent
public "ownerName"(): $Component
public "numberFormatOverride"(): $NumberFormat
get "hidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerScoreEntry$$Type = ({"owner"?: StringJS, "display"?: $Component$$Type, "value"?: integer, "numberFormatOverride"?: $NumberFormat$$Type}) | ([owner?: StringJS, display?: $Component$$Type, value?: integer, numberFormatOverride?: $NumberFormat$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerScoreEntry$$Original = $PlayerScoreEntry;}
declare module "net.minecraft.world.scores.ScoreAccess" {
import {$NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ScoreAccess$$Interface {
}

export class $ScoreAccess implements $ScoreAccess$$Interface {
 "lock"(): void
 "reset"(): void
 "get"(): integer
 "add"(arg0: integer): integer
 "increment"(): integer
 "set"(arg0: integer): void
 "unlock"(): void
 "display"(arg0: $Component$$Type): void
 "display"(): $Component
 "locked"(): boolean
 "numberFormatOverride"(arg0: $NumberFormat$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreAccess$$Type = ($ScoreAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreAccess$$Original = $ScoreAccess;}
declare module "net.minecraft.world.scores.Scoreboard" {
import {$Collection} from "java.util.Collection"
import {$ObjectiveCriteria$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ObjectiveCriteria$RenderType$$Type} from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$ScoreAccess, $ScoreAccess$$Type} from "net.minecraft.world.scores.ScoreAccess"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$ReadOnlyScoreInfo} from "net.minecraft.world.scores.ReadOnlyScoreInfo"
import {$Score$$Type} from "net.minecraft.world.scores.Score"
import {$Objective, $Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$PlayerTeam, $PlayerTeam$$Type} from "net.minecraft.world.scores.PlayerTeam"
import {$PlayerScoreEntry} from "net.minecraft.world.scores.PlayerScoreEntry"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$DisplaySlot$$Type} from "net.minecraft.world.scores.DisplaySlot"

export class $Scoreboard {
static readonly "HIDDEN_SCORE_PREFIX": StringJS

constructor()

public "getPlayersTeam"(arg0: StringJS): $PlayerTeam
public "getPlayerTeam"(arg0: StringJS): $PlayerTeam
public "addPlayerToTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): boolean
public "getObjective"(arg0: StringJS): $Objective
public "onObjectiveAdded"(arg0: $Objective$$Type): void
public "listPlayerScores"(arg0: $ScoreHolder$$Type): $Object2IntMap<($Objective)>
public "listPlayerScores"(arg0: $Objective$$Type): $Collection<($PlayerScoreEntry)>
public "getTrackedPlayers"(): $Collection<($ScoreHolder)>
public "getPlayerScoreInfo"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): $ReadOnlyScoreInfo
public "removeObjective"(arg0: $Objective$$Type): void
public "onObjectiveRemoved"(arg0: $Objective$$Type): void
public "addObjective"(arg0: StringJS, arg1: $ObjectiveCriteria$$Type, arg2: $Component$$Type, arg3: $ObjectiveCriteria$RenderType$$Type, arg4: boolean, arg5: $NumberFormat$$Type): $Objective
public "getObjectiveNames"(): $Collection<(StringJS)>
public "onPlayerRemoved"(arg0: $ScoreHolder$$Type): void
public "getObjectives"(): $Collection<($Objective)>
public "getPlayerTeams"(): $Collection<($PlayerTeam)>
public "onTeamAdded"(arg0: $PlayerTeam$$Type): void
public "onScoreChanged"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type, arg2: $Score$$Type): void
public "entityRemoved"(arg0: $Entity$$Type): void
public "onObjectiveChanged"(arg0: $Objective$$Type): void
public "addPlayerTeam"(arg0: StringJS): $PlayerTeam
public "removePlayerTeam"(arg0: $PlayerTeam$$Type): void
public "getTeamNames"(): $Collection<(StringJS)>
public "onScoreLockChanged"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "onTeamRemoved"(arg0: $PlayerTeam$$Type): void
public "savePlayerScores"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "loadPlayerScores"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "forAllObjectives"(arg0: $ObjectiveCriteria$$Type, arg1: $ScoreHolder$$Type, arg2: $Consumer$$Type<($ScoreAccess)>): void
public "onTeamChanged"(arg0: $PlayerTeam$$Type): void
public "resetAllPlayerScores"(arg0: $ScoreHolder$$Type): void
public "removePlayerFromTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): void
public "removePlayerFromTeam"(arg0: StringJS): boolean
public "getDisplayObjective"(arg0: $DisplaySlot$$Type): $Objective
public "onPlayerScoreRemoved"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "getOrCreatePlayerScore"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): $ScoreAccess
public "getOrCreatePlayerScore"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type, arg2: boolean): $ScoreAccess
public "resetSinglePlayerScore"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "setDisplayObjective"(arg0: $DisplaySlot$$Type, arg1: $Objective$$Type): void
get "trackedPlayers"(): $Collection<($ScoreHolder)>
get "objectiveNames"(): $Collection<(StringJS)>
get "objectives"(): $Collection<($Objective)>
get "playerTeams"(): $Collection<($PlayerTeam)>
get "teamNames"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scoreboard$$Type = ($Scoreboard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Scoreboard$$Original = $Scoreboard;}
