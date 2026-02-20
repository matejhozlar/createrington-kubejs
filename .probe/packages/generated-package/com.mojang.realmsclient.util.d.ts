declare module "com.mojang.realmsclient.util.LevelType" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $LevelType extends $Enum<($LevelType)> {
static readonly "AMPLIFIED": $LevelType
static readonly "FLAT": $LevelType
static readonly "LARGE_BIOMES": $LevelType
static readonly "DEFAULT": $LevelType

public "getName"(): $Component
public static "values"(): ($LevelType)[]
public static "valueOf"(arg0: StringJS): $LevelType
public "getDtoIndex"(): integer
get "name"(): $Component
get "dtoIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelType$$Type = (("default") | ("flat") | ("large_biomes") | ("amplified"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelType$$Original = $LevelType;}
declare module "com.mojang.realmsclient.util.RealmsPersistence" {
import {$RealmsPersistence$RealmsPersistenceData, $RealmsPersistence$RealmsPersistenceData$$Type} from "com.mojang.realmsclient.util.RealmsPersistence$RealmsPersistenceData"

export class $RealmsPersistence {
constructor()

public "read"(): $RealmsPersistence$RealmsPersistenceData
public "save"(arg0: $RealmsPersistence$RealmsPersistenceData$$Type): void
public static "readFile"(): $RealmsPersistence$RealmsPersistenceData
public static "writeFile"(arg0: $RealmsPersistence$RealmsPersistenceData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsPersistence$$Type = ($RealmsPersistence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsPersistence$$Original = $RealmsPersistence;}
declare module "com.mojang.realmsclient.util.RealmsPersistence$RealmsPersistenceData" {
import {$ReflectionBasedSerialization$$Interface} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization$$Interface {
 "hasUnreadNews": boolean
 "newsLink": StringJS

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsPersistence$RealmsPersistenceData$$Type = ($RealmsPersistence$RealmsPersistenceData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsPersistence$RealmsPersistenceData$$Original = $RealmsPersistence$RealmsPersistenceData;}
declare module "com.mojang.realmsclient.util.WorldGenerationInfo" {
import {$LevelType, $LevelType$$Type} from "com.mojang.realmsclient.util.LevelType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Record} from "java.lang.Record"

export class $WorldGenerationInfo extends $Record {
constructor(arg0: StringJS, arg1: $LevelType$$Type, arg2: boolean, arg3: $Set$$Type<(StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "seed"(): StringJS
public "generateStructures"(): boolean
public "experiments"(): $Set<(StringJS)>
public "levelType"(): $LevelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenerationInfo$$Type = ({"seed"?: StringJS, "experiments"?: $Set$$Type<(StringJS)>, "levelType"?: $LevelType$$Type, "generateStructures"?: boolean}) | ([seed?: StringJS, experiments?: $Set$$Type<(StringJS)>, levelType?: $LevelType$$Type, generateStructures?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldGenerationInfo$$Original = $WorldGenerationInfo;}
