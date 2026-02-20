declare module "java.io.ObjectInput" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$DataInput$$Interface} from "java.io.DataInput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectInput$$Interface extends $DataInput$$Interface, $AutoCloseable$$Interface {
}

export class $ObjectInput implements $ObjectInput$$Interface {
 "readObject"(): any
 "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
 "read"(arg0: (byte)[]): integer
 "read"(): integer
 "close"(): void
 "skip"(arg0: long): long
 "available"(): integer
 "readLine"(): StringJS
 "readInt"(): integer
 "readUTF"(): StringJS
 "readChar"(): character
 "readFloat"(): float
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readByte"(): byte
 "readUnsignedByte"(): integer
 "readShort"(): short
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectInput$$Type = ($ObjectInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectInput$$Original = $ObjectInput;}
declare module "java.io.Externalizable" {
import {$ObjectInput$$Type} from "java.io.ObjectInput"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ObjectOutput$$Type} from "java.io.ObjectOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Externalizable$$Interface extends $Serializable$$Interface {
}

export class $Externalizable implements $Externalizable$$Interface {
 "writeExternal"(arg0: $ObjectOutput$$Type): void
 "readExternal"(arg0: $ObjectInput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Externalizable$$Type = ($Externalizable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Externalizable$$Original = $Externalizable;}
declare module "java.io.Flushable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Flushable$$Interface {

(): void
}

export class $Flushable implements $Flushable$$Interface {
 "flush"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flushable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Flushable$$Original = $Flushable;}
declare module "java.io.BufferedReader" {
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$Stream} from "java.util.stream.Stream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedReader extends $Reader {
constructor(arg0: $Reader$$Type, arg1: integer)
constructor(arg0: $Reader$$Type)

public "ready"(): boolean
public "reset"(): void
public "lines"(): $Stream<(StringJS)>
public "read"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "read"(): integer
public "readLine"(): StringJS
public "close"(): void
public "mark"(arg0: integer): void
public "skip"(arg0: long): long
public "markSupported"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedReader$$Type = ($BufferedReader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferedReader$$Original = $BufferedReader;}
declare module "java.io.Writer" {
import {$Appendable$$Interface} from "java.lang.Appendable"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$Flushable$$Interface} from "java.io.Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Writer implements $Appendable$$Interface, $Closeable$$Interface, $Flushable$$Interface {
public "append"(arg0: character): $Writer
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Writer
public "append"(arg0: charseq): $Writer
public "flush"(): void
public "write"(arg0: integer): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "write"(arg0: StringJS): void
public "write"(arg0: StringJS, arg1: integer, arg2: integer): void
public "write"(arg0: (character)[]): void
public "close"(): void
public static "nullWriter"(): $Writer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Writer$$Type = ($Writer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Writer$$Original = $Writer;}
declare module "java.io.Serializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Serializable$$Interface {
}

export class $Serializable implements $Serializable$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializable$$Type = ($Serializable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Serializable$$Original = $Serializable;}
declare module "java.io.DataInputStream" {
import {$DataInput$$Type, $DataInput$$Interface} from "java.io.DataInput"
import {$InputStream$$Type} from "java.io.InputStream"
import {$FilterInputStream} from "java.io.FilterInputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataInputStream extends $FilterInputStream implements $DataInput$$Interface {
constructor(arg0: $InputStream$$Type)

public "read"(arg0: (byte)[]): integer
public "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
/**
 * 
 * @deprecated
 */
public "readLine"(): StringJS
public "readInt"(): integer
public "readUTF"(): StringJS
public static "readUTF"(arg0: $DataInput$$Type): StringJS
public "readChar"(): character
public "readFloat"(): float
public "readFully"(arg0: (byte)[]): void
public "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "skipBytes"(arg0: integer): integer
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): integer
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataInputStream$$Type = ($DataInputStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataInputStream$$Original = $DataInputStream;}
declare module "java.io.Closeable" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $Closeable$$Interface extends $AutoCloseable$$Interface {

(): void
}

export class $Closeable implements $Closeable$$Interface {
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Closeable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Closeable$$Original = $Closeable;}
declare module "java.io.DataInput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataInput$$Interface {
}

export class $DataInput implements $DataInput$$Interface {
 "readLine"(): StringJS
 "readInt"(): integer
 "readUTF"(): StringJS
 "readChar"(): character
 "readFloat"(): float
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readByte"(): byte
 "readUnsignedByte"(): integer
 "readShort"(): short
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataInput$$Type = ($DataInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataInput$$Original = $DataInput;}
declare module "java.io.PrintStream" {
import {$FilterOutputStream} from "java.io.FilterOutputStream"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$File$$Type} from "java.io.File"
import {$Appendable, $Appendable$$Interface} from "java.lang.Appendable"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$Locale$$Type} from "java.util.Locale"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintStream extends $FilterOutputStream implements $Appendable$$Interface, $Closeable$$Interface {
constructor(arg0: $OutputStream$$Type, arg1: boolean, arg2: StringJS)
constructor(arg0: $OutputStream$$Type, arg1: boolean, arg2: $Charset$$Type)
constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: StringJS)
constructor(arg0: StringJS, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: StringJS)
constructor(arg0: $File$$Type)
constructor(arg0: $File$$Type, arg1: $Charset$$Type)
constructor(arg0: $OutputStream$$Type)
constructor(arg0: $OutputStream$$Type, arg1: boolean)

public "println"(arg0: StringJS): void
public "println"(arg0: any): void
public "println"(arg0: float): void
public "println"(arg0: (character)[]): void
public "println"(arg0: double): void
public "println"(): void
public "println"(arg0: boolean): void
public "println"(arg0: character): void
public "println"(arg0: integer): void
public "println"(arg0: long): void
public "append"(arg0: charseq): $Appendable
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
public "append"(arg0: character): $Appendable
public "flush"(): void
public "format"(arg0: $Locale$$Type, arg1: StringJS, ...arg2: (any)[]): $PrintStream
public "format"(arg0: StringJS, ...arg1: (any)[]): $PrintStream
public "charset"(): $Charset
public "printf"(arg0: $Locale$$Type, arg1: StringJS, ...arg2: (any)[]): $PrintStream
public "printf"(arg0: StringJS, ...arg1: (any)[]): $PrintStream
public "write"(arg0: (byte)[]): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "print"(arg0: StringJS): void
public "print"(arg0: (character)[]): void
public "print"(arg0: any): void
public "print"(arg0: boolean): void
public "print"(arg0: character): void
public "print"(arg0: integer): void
public "print"(arg0: double): void
public "print"(arg0: float): void
public "print"(arg0: long): void
public "close"(): void
public "writeBytes"(arg0: (byte)[]): void
public "checkError"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintStream$$Type = ($PrintStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrintStream$$Original = $PrintStream;}
declare module "java.io.FilenameFilter" {
import {$File, $File$$Type} from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FilenameFilter$$Interface {

(arg0: $File, arg1: StringJS): boolean
}

export class $FilenameFilter implements $FilenameFilter$$Interface {
 "accept"(arg0: $File$$Type, arg1: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilenameFilter$$Type = ((arg0: $File, arg1: StringJS) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilenameFilter$$Original = $FilenameFilter;}
declare module "java.io.IOException" {
import {$Exception} from "java.lang.Exception"
import {$Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IOException extends $Exception {
constructor(arg0: $Throwable$$Type)
constructor(arg0: StringJS, arg1: $Throwable$$Type)
constructor(arg0: StringJS)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOException$$Type = ($IOException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOException$$Original = $IOException;}
declare module "java.io.File" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$FileFilter$$Type} from "java.io.FileFilter"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$URL} from "java.net.URL"
import {$FilenameFilter$$Type} from "java.io.FilenameFilter"
import {$Path, $Path$$Type} from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $File implements $Serializable$$Interface, $Comparable$$Interface<($File)> {
static readonly "pathSeparator": StringJS
static readonly "pathSeparatorChar": character
static readonly "separatorChar": character
static readonly "separator": StringJS

constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: StringJS)
constructor(arg0: $URI$$Type)
constructor(arg0: $File$$Type, arg1: StringJS)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "length"(): long
public "toString"(): StringJS
public "hashCode"(): integer
public "isHidden"(): boolean
public "compareTo"(arg0: $File$$Type): integer
public "compareTo"(arg0: any): integer
public "list"(): (StringJS)[]
public "list"(arg0: $FilenameFilter$$Type): (StringJS)[]
public "isAbsolute"(): boolean
public "getParent"(): StringJS
public "delete"(): boolean
public "setReadOnly"(): boolean
public "canRead"(): boolean
public "getPath"(): StringJS
public "toURI"(): $URI
/**
 * 
 * @deprecated
 */
public "toURL"(): $URL
public "getAbsolutePath"(): StringJS
public "exists"(): boolean
public "createNewFile"(): boolean
public "renameTo"(arg0: $File$$Type): boolean
public "isDirectory"(): boolean
public "getCanonicalPath"(): StringJS
public "getAbsoluteFile"(): $File
public "mkdir"(): boolean
public "getCanonicalFile"(): $File
public "getParentFile"(): $File
public "mkdirs"(): boolean
public "setWritable"(arg0: boolean): boolean
public "setWritable"(arg0: boolean, arg1: boolean): boolean
public "setReadable"(arg0: boolean, arg1: boolean): boolean
public "setReadable"(arg0: boolean): boolean
public "setExecutable"(arg0: boolean, arg1: boolean): boolean
public "setExecutable"(arg0: boolean): boolean
public static "listRoots"(): ($File)[]
public static "createTempFile"(arg0: StringJS, arg1: StringJS): $File
public static "createTempFile"(arg0: StringJS, arg1: StringJS, arg2: $File$$Type): $File
public "canWrite"(): boolean
public "isFile"(): boolean
public "lastModified"(): long
public "deleteOnExit"(): void
public "listFiles"(arg0: $FileFilter$$Type): ($File)[]
public "listFiles"(arg0: $FilenameFilter$$Type): ($File)[]
public "listFiles"(): ($File)[]
public "setLastModified"(arg0: long): boolean
public "canExecute"(): boolean
public "getTotalSpace"(): long
public "getFreeSpace"(): long
public "getUsableSpace"(): long
public "toPath"(): $Path
get "name"(): StringJS
get "hidden"(): boolean
get "absolute"(): boolean
get "parent"(): StringJS
get "readOnly"(): boolean
get "path"(): StringJS
get "absolutePath"(): StringJS
get "directory"(): boolean
get "canonicalPath"(): StringJS
get "absoluteFile"(): $File
get "canonicalFile"(): $File
get "parentFile"(): $File
set "writable"(value: boolean)
set "readable"(value: boolean)
set "executable"(value: boolean)
get "file"(): boolean
get "totalSpace"(): long
get "freeSpace"(): long
get "usableSpace"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $File$$Type = ($Path$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $File$$Original = $File;}
declare module "java.io.OutputStream" {
import {$Closeable$$Interface} from "java.io.Closeable"
import {$Flushable$$Interface} from "java.io.Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $OutputStream implements $Closeable$$Interface, $Flushable$$Interface {
constructor()

public "flush"(): void
public "write"(arg0: (byte)[]): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "close"(): void
public static "nullOutputStream"(): $OutputStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputStream$$Type = ($OutputStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutputStream$$Original = $OutputStream;}
declare module "java.io.FilterOutputStream" {
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterOutputStream extends $OutputStream {
constructor(arg0: $OutputStream$$Type)

public "flush"(): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: (byte)[]): void
public "write"(arg0: integer): void
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterOutputStream$$Type = ($FilterOutputStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterOutputStream$$Original = $FilterOutputStream;}
declare module "java.io.DataOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataOutput$$Interface {
}

export class $DataOutput implements $DataOutput$$Interface {
 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: StringJS): void
 "writeBytes"(arg0: StringJS): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeLong"(arg0: long): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataOutput$$Type = ($DataOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataOutput$$Original = $DataOutput;}
declare module "java.io.FileFilter" {
import {$File, $File$$Type} from "java.io.File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileFilter$$Interface {

(arg0: $File): boolean
}

export class $FileFilter implements $FileFilter$$Interface {
 "accept"(arg0: $File$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileFilter$$Type = ((arg0: $File) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileFilter$$Original = $FileFilter;}
declare module "java.io.DataOutputStream" {
import {$FilterOutputStream} from "java.io.FilterOutputStream"
import {$DataOutput$$Interface} from "java.io.DataOutput"
import {$OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataOutputStream extends $FilterOutputStream implements $DataOutput$$Interface {
constructor(arg0: $OutputStream$$Type)

public "size"(): integer
public "flush"(): void
public "write"(arg0: integer): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "writeInt"(arg0: integer): void
public "writeUTF"(arg0: StringJS): void
public "writeBytes"(arg0: StringJS): void
public "writeChar"(arg0: integer): void
public "writeFloat"(arg0: float): void
public "writeBoolean"(arg0: boolean): void
public "writeByte"(arg0: integer): void
public "writeShort"(arg0: integer): void
public "writeLong"(arg0: long): void
public "writeDouble"(arg0: double): void
public "writeChars"(arg0: StringJS): void
public "write"(arg0: (byte)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataOutputStream$$Type = ($DataOutputStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataOutputStream$$Original = $DataOutputStream;}
declare module "java.io.Reader" {
import {$CharBuffer$$Type} from "java.nio.CharBuffer"
import {$Writer$$Type} from "java.io.Writer"
import {$Readable$$Interface} from "java.lang.Readable"
import {$Closeable$$Interface} from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reader implements $Readable$$Interface, $Closeable$$Interface {
public "ready"(): boolean
public static "nullReader"(): $Reader
public "reset"(): void
public "read"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "read"(arg0: $CharBuffer$$Type): integer
public "read"(): integer
public "read"(arg0: (character)[]): integer
public "close"(): void
public "mark"(arg0: integer): void
public "transferTo"(arg0: $Writer$$Type): long
public "skip"(arg0: long): long
public "markSupported"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reader$$Type = ($Reader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reader$$Original = $Reader;}
declare module "java.io.ObjectOutput" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$DataOutput$$Interface} from "java.io.DataOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectOutput$$Interface extends $DataOutput$$Interface, $AutoCloseable$$Interface {
}

export class $ObjectOutput implements $ObjectOutput$$Interface {
 "flush"(): void
 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeObject"(arg0: any): void
 "close"(): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: StringJS): void
 "writeBytes"(arg0: StringJS): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeLong"(arg0: long): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectOutput$$Type = ($ObjectOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectOutput$$Original = $ObjectOutput;}
declare module "java.io.PrintWriter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$File$$Type} from "java.io.File"
import {$Appendable} from "java.lang.Appendable"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$Locale$$Type} from "java.util.Locale"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintWriter extends $Writer {
constructor(arg0: StringJS, arg1: StringJS)
constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: StringJS)
constructor(arg0: $File$$Type)
constructor(arg0: $Writer$$Type)
constructor(arg0: $Writer$$Type, arg1: boolean)
constructor(arg0: $OutputStream$$Type)
constructor(arg0: $OutputStream$$Type, arg1: boolean)
constructor(arg0: $OutputStream$$Type, arg1: boolean, arg2: $Charset$$Type)

public "println"(arg0: (character)[]): void
public "println"(arg0: double): void
public "println"(arg0: float): void
public "println"(arg0: StringJS): void
public "println"(arg0: any): void
public "println"(): void
public "println"(arg0: character): void
public "println"(arg0: integer): void
public "println"(arg0: long): void
public "println"(arg0: boolean): void
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Writer
public "append"(arg0: character): $Writer
public "append"(arg0: charseq): $Appendable
public "flush"(): void
public "format"(arg0: $Locale$$Type, arg1: StringJS, ...arg2: (any)[]): $PrintWriter
public "format"(arg0: StringJS, ...arg1: (any)[]): $PrintWriter
public "printf"(arg0: StringJS, ...arg1: (any)[]): $PrintWriter
public "printf"(arg0: $Locale$$Type, arg1: StringJS, ...arg2: (any)[]): $PrintWriter
public "write"(arg0: integer): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "write"(arg0: (character)[]): void
public "write"(arg0: StringJS, arg1: integer, arg2: integer): void
public "write"(arg0: StringJS): void
public "print"(arg0: float): void
public "print"(arg0: long): void
public "print"(arg0: integer): void
public "print"(arg0: character): void
public "print"(arg0: boolean): void
public "print"(arg0: any): void
public "print"(arg0: StringJS): void
public "print"(arg0: (character)[]): void
public "print"(arg0: double): void
public "close"(): void
public "checkError"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintWriter$$Type = ($PrintWriter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrintWriter$$Original = $PrintWriter;}
declare module "java.io.InputStream" {
import {$Closeable$$Interface} from "java.io.Closeable"
import {$OutputStream$$Type} from "java.io.OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InputStream implements $Closeable$$Interface {
constructor()

public "reset"(): void
public "read"(arg0: (byte)[]): integer
public "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "read"(): integer
public "close"(): void
public "readAllBytes"(): (byte)[]
public "mark"(arg0: integer): void
public "readNBytes"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "readNBytes"(arg0: integer): (byte)[]
public "transferTo"(arg0: $OutputStream$$Type): long
public "skip"(arg0: long): long
public "available"(): integer
public "markSupported"(): boolean
public static "nullInputStream"(): $InputStream
public "skipNBytes"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputStream$$Type = ($InputStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputStream$$Original = $InputStream;}
declare module "java.io.BufferedWriter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedWriter extends $Writer {
constructor(arg0: $Writer$$Type)
constructor(arg0: $Writer$$Type, arg1: integer)

public "flush"(): void
public "write"(arg0: integer): void
public "write"(arg0: StringJS, arg1: integer, arg2: integer): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "newLine"(): void
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedWriter$$Type = ($BufferedWriter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferedWriter$$Original = $BufferedWriter;}
