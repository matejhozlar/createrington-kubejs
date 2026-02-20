declare module "dzwdz.chat_heads.mixininterface.HeadRenderable" {
import {$HeadData, $HeadData$$Type} from "dzwdz.chat_heads.HeadData"

export interface $HeadRenderable$$Interface {
}

export class $HeadRenderable implements $HeadRenderable$$Interface {
 "chatheads$getHeadData"(): $HeadData
 "chatheads$setHeadData"(arg0: $HeadData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadRenderable$$Type = ($HeadRenderable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeadRenderable$$Original = $HeadRenderable;}
declare module "dzwdz.chat_heads.mixininterface.Ownable" {
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"

export interface $Ownable$$Interface {
}

export class $Ownable implements $Ownable$$Interface {
 "chatheads$setOwner"(arg0: $PlayerInfo$$Type): void
 "chatheads$getOwner"(): $PlayerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ownable$$Type = ($Ownable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ownable$$Original = $Ownable;}
declare module "dzwdz.chat_heads.mixininterface.TextureLocationSettable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $TextureLocationSettable$$Interface {

(arg0: $ResourceLocation): void
}

export class $TextureLocationSettable implements $TextureLocationSettable$$Interface {
 "chatheads$setTextureLocation"(arg0: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureLocationSettable$$Type = ((arg0: $ResourceLocation) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureLocationSettable$$Original = $TextureLocationSettable;}
