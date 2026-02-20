declare module "xaero.lib.patreon.PatreonMod" {
import {$File} from "java.io.File"
import {$Runnable} from "java.lang.Runnable"

export class $PatreonMod {
 "fileLayoutID": StringJS
 "modJar": $File
 "latestVersionLayout": StringJS
 "latestVersion": StringJS
 "changelogLink": StringJS
 "modName": StringJS
 "onVersionIgnore": $Runnable
 "currentVersion": StringJS
 "md5": StringJS

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatreonMod$$Type = ($PatreonMod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatreonMod$$Original = $PatreonMod;}
