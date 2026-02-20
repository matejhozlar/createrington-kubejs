declare module "net.irisshaders.iris.pbr.texture.PBRDumpable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Path$$Type} from "java.nio.file.Path"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"

export interface $PBRDumpable$$Interface extends $Dumpable$$Interface {
get "defaultDumpLocation"(): $ResourceLocation
}

export class $PBRDumpable implements $PBRDumpable$$Interface {
 "getDefaultDumpLocation"(): $ResourceLocation
 "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRDumpable$$Type = ($PBRDumpable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PBRDumpable$$Original = $PBRDumpable;}
declare module "net.irisshaders.iris.pbr.texture.PBRType" {
import {$Enum} from "java.lang.Enum"

export class $PBRType extends $Enum<($PBRType)> {
static readonly "SPECULAR": $PBRType
static readonly "NORMAL": $PBRType

public static "values"(): ($PBRType)[]
public static "valueOf"(arg0: StringJS): $PBRType
public "getDefaultValue"(): integer
public "appendSuffix"(arg0: StringJS): StringJS
public "getSuffix"(): StringJS
public static "removeSuffix"(arg0: StringJS): StringJS
public static "fromFileLocation"(arg0: StringJS): $PBRType
get "defaultValue"(): integer
get "suffix"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRType$$Type = (("normal") | ("specular"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PBRType$$Original = $PBRType;}
declare module "net.irisshaders.iris.pbr.texture.TextureAtlasExtension" {
import {$PBRAtlasHolder} from "net.irisshaders.iris.pbr.texture.PBRAtlasHolder"

export interface $TextureAtlasExtension$$Interface {
get "PBRHolder"(): $PBRAtlasHolder
get "orCreatePBRHolder"(): $PBRAtlasHolder
}

export class $TextureAtlasExtension implements $TextureAtlasExtension$$Interface {
 "getPBRHolder"(): $PBRAtlasHolder
 "getOrCreatePBRHolder"(): $PBRAtlasHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasExtension$$Type = ($TextureAtlasExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasExtension$$Original = $TextureAtlasExtension;}
declare module "net.irisshaders.iris.pbr.loader.AtlasPBRLoader$PBRTextureAtlasSprite" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $AtlasPBRLoader$PBRTextureAtlasSprite extends $TextureAtlasSprite {
readonly "x": integer
readonly "y": integer
 "v0": float
 "u0": float
 "v1": float
 "u1": float

public "getBaseSprite"(): $TextureAtlasSprite
get "baseSprite"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtlasPBRLoader$PBRTextureAtlasSprite$$Type = ($AtlasPBRLoader$PBRTextureAtlasSprite);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AtlasPBRLoader$PBRTextureAtlasSprite$$Original = $AtlasPBRLoader$PBRTextureAtlasSprite;}
declare module "net.irisshaders.iris.pbr.texture.PBRSpriteHolder" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $PBRSpriteHolder {
constructor()

public "close"(): void
public "getSpecularSprite"(): $TextureAtlasSprite
public "getNormalSprite"(): $TextureAtlasSprite
public "setNormalSprite"(arg0: $TextureAtlasSprite$$Type): void
public "setSpecularSprite"(arg0: $TextureAtlasSprite$$Type): void
get "specularSprite"(): $TextureAtlasSprite
get "normalSprite"(): $TextureAtlasSprite
set "normalSprite"(value: $TextureAtlasSprite$$Type)
set "specularSprite"(value: $TextureAtlasSprite$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRSpriteHolder$$Type = ($PBRSpriteHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PBRSpriteHolder$$Original = $PBRSpriteHolder;}
declare module "net.irisshaders.iris.pbr.texture.PBRAtlasTexture" {
import {$PBRType, $PBRType$$Type} from "net.irisshaders.iris.pbr.texture.PBRType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$AtlasPBRLoader$PBRTextureAtlasSprite, $AtlasPBRLoader$PBRTextureAtlasSprite$$Type} from "net.irisshaders.iris.pbr.loader.AtlasPBRLoader$PBRTextureAtlasSprite"
import {$Path$$Type} from "java.nio.file.Path"
import {$SpriteContents$Ticker$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$PBRDumpable$$Interface} from "net.irisshaders.iris.pbr.texture.PBRDumpable"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"

export class $PBRAtlasTexture extends $AbstractTexture implements $PBRDumpable$$Interface {
static readonly "NOT_ASSIGNED": integer
 "mipmap": boolean
 "blur": boolean
 "id": integer

constructor(arg0: $TextureAtlas$$Type, arg1: $PBRType$$Type)

public "load"(arg0: $ResourceManager$$Type): void
public "clear"(): void
public "close"(): void
public "getType"(): $PBRType
public "getDefaultDumpLocation"(): $ResourceLocation
public "upload"(arg0: integer, arg1: integer, arg2: integer): void
public "getSprite"(arg0: $ResourceLocation$$Type): $AtlasPBRLoader$PBRTextureAtlasSprite
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
public "cycleAnimationFrames"(): void
public "addSprite"(arg0: $AtlasPBRLoader$PBRTextureAtlasSprite$$Type): void
public static "syncAnimation"(arg0: $SpriteContents$Ticker$$Type, arg1: $SpriteContents$Ticker$$Type): void
public "getAtlasId"(): $ResourceLocation
public "tryUpload"(arg0: integer, arg1: integer, arg2: integer): boolean
get "type"(): $PBRType
get "defaultDumpLocation"(): $ResourceLocation
get "atlasId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRAtlasTexture$$Type = ($PBRAtlasTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PBRAtlasTexture$$Original = $PBRAtlasTexture;}
declare module "net.irisshaders.iris.pbr.texture.PBRAtlasHolder" {
import {$PBRAtlasTexture, $PBRAtlasTexture$$Type} from "net.irisshaders.iris.pbr.texture.PBRAtlasTexture"

export class $PBRAtlasHolder {
constructor()

public "getSpecularAtlas"(): $PBRAtlasTexture
public "getNormalAtlas"(): $PBRAtlasTexture
public "setNormalAtlas"(arg0: $PBRAtlasTexture$$Type): void
public "setSpecularAtlas"(arg0: $PBRAtlasTexture$$Type): void
public "cycleAnimationFrames"(): void
get "specularAtlas"(): $PBRAtlasTexture
get "normalAtlas"(): $PBRAtlasTexture
set "normalAtlas"(value: $PBRAtlasTexture$$Type)
set "specularAtlas"(value: $PBRAtlasTexture$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRAtlasHolder$$Type = ($PBRAtlasHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PBRAtlasHolder$$Original = $PBRAtlasHolder;}
declare module "net.irisshaders.iris.pbr.SpriteContentsExtension" {
import {$SpriteContents$Ticker, $SpriteContents$Ticker$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"

export interface $SpriteContentsExtension$$Interface {

(): $SpriteContents$Ticker$$Type
get "createdTicker"(): $SpriteContents$Ticker
}

export class $SpriteContentsExtension implements $SpriteContentsExtension$$Interface {
 "getCreatedTicker"(): $SpriteContents$Ticker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = (() => $SpriteContents$Ticker$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsExtension$$Original = $SpriteContentsExtension;}
declare module "net.irisshaders.iris.pbr.texture.SpriteContentsExtension" {
import {$PBRSpriteHolder} from "net.irisshaders.iris.pbr.texture.PBRSpriteHolder"

export interface $SpriteContentsExtension$$Interface {
get "PBRHolder"(): $PBRSpriteHolder
get "orCreatePBRHolder"(): $PBRSpriteHolder
}

export class $SpriteContentsExtension implements $SpriteContentsExtension$$Interface {
 "getPBRHolder"(): $PBRSpriteHolder
 "getOrCreatePBRHolder"(): $PBRSpriteHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsExtension$$Original = $SpriteContentsExtension;}
