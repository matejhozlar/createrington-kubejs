declare module "net.createmod.catnip.lang.LangBuilder" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Color$$Type} from "net.createmod.catnip.theme.Color"
import {$List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $LangBuilder {
static readonly "DEFAULT_SPACE_WIDTH": float

constructor(arg0: StringJS)

public "add"(arg0: $LangBuilder$$Type): $LangBuilder
public "add"(arg0: $MutableComponent$$Type): $LangBuilder
public "add"(arg0: $Component$$Type): $LangBuilder
public "component"(): $MutableComponent
public "newLine"(): $LangBuilder
public "color"(arg0: integer): $LangBuilder
public "color"(arg0: $Color$$Type): $LangBuilder
public "string"(): StringJS
public "text"(arg0: $ChatFormatting$$Type, arg1: StringJS): $LangBuilder
public "text"(arg0: StringJS): $LangBuilder
public "text"(arg0: integer, arg1: StringJS): $LangBuilder
public "space"(): $LangBuilder
public "style"(arg0: $ChatFormatting$$Type): $LangBuilder
public "addTo"(arg0: $List$$Type<($MutableComponent$$Type)>): void
public static "resolveBuilders"(arg0: (any)[]): (any)[]
public "forGoggles"(arg0: $List$$Type<($MutableComponent$$Type)>, arg1: integer): void
public "forGoggles"(arg0: $List$$Type<($MutableComponent$$Type)>): void
public "sendStatus"(arg0: $Player$$Type): void
public "json"(): StringJS
public "sendChat"(arg0: $Player$$Type): void
public "translate"(arg0: StringJS, ...arg1: (any)[]): $LangBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangBuilder$$Type = ($LangBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LangBuilder$$Original = $LangBuilder;}
