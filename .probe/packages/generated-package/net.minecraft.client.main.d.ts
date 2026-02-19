declare module "net.minecraft.client.main.GameConfig$UserData" {
import {$User, $User$$Type} from "net.minecraft.client.User"
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$PropertyMap, $PropertyMap$$Type} from "com.mojang.authlib.properties.PropertyMap"

export class $GameConfig$UserData {
readonly "proxy": $Proxy
readonly "userProperties": $PropertyMap
readonly "profileProperties": $PropertyMap
readonly "user": $User

constructor(arg0: $User$$Type, arg1: $PropertyMap$$Type, arg2: $PropertyMap$$Type, arg3: $Proxy$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameConfig$UserData$$Type = ($GameConfig$UserData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameConfig$UserData$$Original = $GameConfig$UserData;}
declare module "net.minecraft.client.main.GameConfig$QuickPlayData" {
import {$Record} from "java.lang.Record"

export class $GameConfig$QuickPlayData extends $Record {
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEnabled"(): boolean
public "path"(): StringJS
public "realms"(): StringJS
public "singleplayer"(): StringJS
public "multiplayer"(): StringJS
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameConfig$QuickPlayData$$Type = ({"singleplayer"?: StringJS, "multiplayer"?: StringJS, "realms"?: StringJS, "path"?: StringJS}) | ([singleplayer?: StringJS, multiplayer?: StringJS, realms?: StringJS, path?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameConfig$QuickPlayData$$Original = $GameConfig$QuickPlayData;}
declare module "net.minecraft.client.main.GameConfig" {
import {$DisplayData, $DisplayData$$Type} from "com.mojang.blaze3d.platform.DisplayData"
import {$GameConfig$QuickPlayData, $GameConfig$QuickPlayData$$Type} from "net.minecraft.client.main.GameConfig$QuickPlayData"
import {$GameConfig$UserData, $GameConfig$UserData$$Type} from "net.minecraft.client.main.GameConfig$UserData"
import {$GameConfig$FolderData, $GameConfig$FolderData$$Type} from "net.minecraft.client.main.GameConfig$FolderData"
import {$GameConfig$GameData, $GameConfig$GameData$$Type} from "net.minecraft.client.main.GameConfig$GameData"

export class $GameConfig {
readonly "game": $GameConfig$GameData
readonly "display": $DisplayData
readonly "quickPlay": $GameConfig$QuickPlayData
readonly "location": $GameConfig$FolderData
readonly "user": $GameConfig$UserData

constructor(arg0: $GameConfig$UserData$$Type, arg1: $DisplayData$$Type, arg2: $GameConfig$FolderData$$Type, arg3: $GameConfig$GameData$$Type, arg4: $GameConfig$QuickPlayData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameConfig$$Type = ($GameConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameConfig$$Original = $GameConfig;}
declare module "net.minecraft.client.main.GameConfig$GameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GameConfig$GameData {
readonly "versionType": StringJS
readonly "disableChat": boolean
readonly "disableMultiplayer": boolean
readonly "launchVersion": StringJS
readonly "demo": boolean

constructor(arg0: boolean, arg1: StringJS, arg2: StringJS, arg3: boolean, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameConfig$GameData$$Type = ($GameConfig$GameData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameConfig$GameData$$Original = $GameConfig$GameData;}
declare module "net.minecraft.client.main.GameConfig$FolderData" {
import {$File, $File$$Type} from "java.io.File"
import {$Path} from "java.nio.file.Path"

export class $GameConfig$FolderData {
readonly "gameDirectory": $File
readonly "assetIndex": StringJS
readonly "assetDirectory": $File
readonly "resourcePackDirectory": $File

constructor(arg0: $File$$Type, arg1: $File$$Type, arg2: $File$$Type, arg3: StringJS)

public "getExternalAssetSource"(): $Path
get "externalAssetSource"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameConfig$FolderData$$Type = ($GameConfig$FolderData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameConfig$FolderData$$Original = $GameConfig$FolderData;}
