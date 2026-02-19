declare module "java.util.zip.ZipEntry" {
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$FileTime, $FileTime$$Type} from "java.nio.file.attribute.FileTime"
import {$ZipConstants$$Interface} from "java.util.zip.ZipConstants"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipEntry implements $ZipConstants$$Interface, $Cloneable$$Interface {
static readonly "STORED": integer
static readonly "DEFLATED": integer

constructor(arg0: StringJS)
constructor(arg0: $ZipEntry$$Type)

public "getName"(): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "getMethod"(): integer
public "getSize"(): long
public "isDirectory"(): boolean
public "getLastModifiedTime"(): $FileTime
public "setLastModifiedTime"(arg0: $FileTime$$Type): $ZipEntry
public "getTime"(): long
public "setTime"(arg0: long): void
public "setTimeLocal"(arg0: $LocalDateTime$$Type): void
public "getTimeLocal"(): $LocalDateTime
public "setLastAccessTime"(arg0: $FileTime$$Type): $ZipEntry
public "getLastAccessTime"(): $FileTime
public "setCreationTime"(arg0: $FileTime$$Type): $ZipEntry
public "getCreationTime"(): $FileTime
public "setSize"(arg0: long): void
public "getCompressedSize"(): long
public "setCompressedSize"(arg0: long): void
public "setCrc"(arg0: long): void
public "getCrc"(): long
public "setMethod"(arg0: integer): void
public "setExtra"(arg0: (byte)[]): void
public "getExtra"(): (byte)[]
public "setComment"(arg0: StringJS): void
public "getComment"(): StringJS
get "name"(): StringJS
get "method"(): integer
get "size"(): long
get "directory"(): boolean
get "lastModifiedTime"(): $FileTime
set "lastModifiedTime"(value: $FileTime$$Type)
get "time"(): long
set "time"(value: long)
set "timeLocal"(value: $LocalDateTime$$Type)
get "timeLocal"(): $LocalDateTime
set "lastAccessTime"(value: $FileTime$$Type)
get "lastAccessTime"(): $FileTime
set "creationTime"(value: $FileTime$$Type)
get "creationTime"(): $FileTime
set "size"(value: long)
get "compressedSize"(): long
set "compressedSize"(value: long)
set "crc"(value: long)
get "crc"(): long
set "method"(value: integer)
set "extra"(value: (byte)[])
get "extra"(): (byte)[]
set "comment"(value: StringJS)
get "comment"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipEntry$$Type = ($ZipEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZipEntry$$Original = $ZipEntry;}
declare module "java.util.zip.ZipConstants" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ZipConstants$$Interface {
}

export class $ZipConstants implements $ZipConstants$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipConstants$$Type = ($ZipConstants);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZipConstants$$Original = $ZipConstants;}
declare module "java.util.zip.ZipFile" {
import {$File$$Type} from "java.io.File"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$InputStream} from "java.io.InputStream"
import {$Stream} from "java.util.stream.Stream"
import {$Enumeration} from "java.util.Enumeration"
import {$ZipEntry, $ZipEntry$$Type} from "java.util.zip.ZipEntry"
import {$ZipConstants$$Interface} from "java.util.zip.ZipConstants"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipFile implements $ZipConstants$$Interface, $Closeable$$Interface {
static readonly "OPEN_DELETE": integer
static readonly "OPEN_READ": integer

constructor(arg0: StringJS, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: $Charset$$Type)
constructor(arg0: StringJS)
constructor(arg0: $File$$Type, arg1: integer)
constructor(arg0: $File$$Type)
constructor(arg0: $File$$Type, arg1: integer, arg2: $Charset$$Type)

public "getName"(): StringJS
public "size"(): integer
public "stream"(): $Stream<($ZipEntry)>
public "close"(): void
public "entries"(): $Enumeration<($ZipEntry)>
public "getInputStream"(arg0: $ZipEntry$$Type): $InputStream
public "getEntry"(arg0: StringJS): $ZipEntry
public "getComment"(): StringJS
get "name"(): StringJS
get "comment"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipFile$$Type = ($ZipFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZipFile$$Original = $ZipFile;}
