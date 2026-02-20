declare module "traben.entity_texture_features.config.screens.skin.ETFConfigScreenSkinTool$NoseType" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ETFConfigScreenSkinTool$NoseType extends $Enum<($ETFConfigScreenSkinTool$NoseType)> {
static readonly "TEXTURED_3": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_2": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_TEXTURED": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_5": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_4": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_1": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_REMOVE": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_TEXTURED_REMOVE": $ETFConfigScreenSkinTool$NoseType
readonly "id": integer
static readonly "NONE": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER": $ETFConfigScreenSkinTool$NoseType

public static "values"(): ($ETFConfigScreenSkinTool$NoseType)[]
public static "valueOf"(name: StringJS): $ETFConfigScreenSkinTool$NoseType
public "next"(): $ETFConfigScreenSkinTool$NoseType
public "appliesTextureOverlay"(): boolean
public "getNosePixelColour"(): integer
public "getButtonText"(): $Component
public "getByColorId"(id: integer): $ETFConfigScreenSkinTool$NoseType
get "nosePixelColour"(): integer
get "buttonText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFConfigScreenSkinTool$NoseType$$Type = (("villager") | ("villager_textured") | ("villager_remove") | ("villager_textured_remove") | ("textured_1") | ("textured_2") | ("textured_3") | ("textured_4") | ("textured_5") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFConfigScreenSkinTool$NoseType$$Original = $ETFConfigScreenSkinTool$NoseType;}
