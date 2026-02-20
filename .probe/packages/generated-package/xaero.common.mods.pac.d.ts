declare module "xaero.common.mods.pac.SupportOpenPartiesAndClaims" {
import {$Iterator} from "java.util.Iterator"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPlayerChunkClaimAPI} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"
import {$HighlighterRegistry$$Type} from "xaero.common.minimap.highlight.HighlighterRegistry"
import {$UUID$$Type} from "java.util.UUID"
import {$IPartyMemberDynamicInfoSyncableAPI} from "xaero.pac.common.parties.party.api.IPartyMemberDynamicInfoSyncableAPI"
import {$IXaeroMinimap, $IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $SupportOpenPartiesAndClaims {
constructor(arg0: $IXaeroMinimap$$Type)

public "register"(): void
public "onMapRender"(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: float, arg5: $ResourceLocation$$Type, arg6: integer, arg7: integer): void
public "getModMain"(): $IXaeroMinimap
public "claimAt"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
public "registerHighlighters"(arg0: $HighlighterRegistry$$Type): void
public "getAllyIterator"(): $Iterator<($IPartyMemberDynamicInfoSyncableAPI)>
public "isFromParty"(arg0: $UUID$$Type): boolean
get "modMain"(): $IXaeroMinimap
get "allyIterator"(): $Iterator<($IPartyMemberDynamicInfoSyncableAPI)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportOpenPartiesAndClaims$$Type = ($SupportOpenPartiesAndClaims);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportOpenPartiesAndClaims$$Original = $SupportOpenPartiesAndClaims;}
