declare module "java.nio.file.spi.FileSystemProvider" {
import {$SeekableByteChannel} from "java.nio.channels.SeekableByteChannel"
import {$AccessMode$$Type} from "java.nio.file.AccessMode"
import {$AsynchronousFileChannel} from "java.nio.channels.AsynchronousFileChannel"
import {$DirectoryStream} from "java.nio.file.DirectoryStream"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$DirectoryStream$Filter$$Type} from "java.nio.file.DirectoryStream$Filter"
import {$FileAttribute$$Type} from "java.nio.file.attribute.FileAttribute"
import {$ExecutorService$$Type} from "java.util.concurrent.ExecutorService"
import {$CopyOption$$Type} from "java.nio.file.CopyOption"
import {$FileStore} from "java.nio.file.FileStore"
import {$LinkOption$$Type} from "java.nio.file.LinkOption"
import {$OutputStream} from "java.io.OutputStream"
import {$BasicFileAttributes} from "java.nio.file.attribute.BasicFileAttributes"
import {$FileAttributeView} from "java.nio.file.attribute.FileAttributeView"
import {$URI$$Type} from "java.net.URI"
import {$Set$$Type} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$OpenOption$$Type} from "java.nio.file.OpenOption"
import {$InputStream} from "java.io.InputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$FileChannel} from "java.nio.channels.FileChannel"
import {$FileSystem} from "java.nio.file.FileSystem"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystemProvider {
public "isHidden"(arg0: $Path$$Type): boolean
public "delete"(arg0: $Path$$Type): void
public "checkAccess"(arg0: $Path$$Type, ...arg1: ($AccessMode$$Type)[]): void
public "copy"(arg0: $Path$$Type, arg1: $Path$$Type, ...arg2: ($CopyOption$$Type)[]): void
public "getScheme"(): StringJS
public "getPath"(arg0: $URI$$Type): $Path
public "exists"(arg0: $Path$$Type, ...arg1: ($LinkOption$$Type)[]): boolean
public "createDirectory"(arg0: $Path$$Type, ...arg1: ($FileAttribute$$Type<(never)>)[]): void
public "getFileSystem"(arg0: $URI$$Type): $FileSystem
public static "installedProviders"(): $List<($FileSystemProvider)>
public "newFileSystem"(arg0: $URI$$Type, arg1: $Map$$Type<(StringJS), (never)>): $FileSystem
public "newFileSystem"(arg0: $Path$$Type, arg1: $Map$$Type<(StringJS), (never)>): $FileSystem
public "newInputStream"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $InputStream
public "newOutputStream"(arg0: $Path$$Type, ...arg1: ($OpenOption$$Type)[]): $OutputStream
public "newByteChannel"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, ...arg2: ($FileAttribute$$Type<(never)>)[]): $SeekableByteChannel
public "newDirectoryStream"(arg0: $Path$$Type, arg1: $DirectoryStream$Filter$$Type<($Path)>): $DirectoryStream<($Path)>
public "createSymbolicLink"(arg0: $Path$$Type, arg1: $Path$$Type, ...arg2: ($FileAttribute$$Type<(never)>)[]): void
public "createLink"(arg0: $Path$$Type, arg1: $Path$$Type): void
public "deleteIfExists"(arg0: $Path$$Type): boolean
public "move"(arg0: $Path$$Type, arg1: $Path$$Type, ...arg2: ($CopyOption$$Type)[]): void
public "readSymbolicLink"(arg0: $Path$$Type): $Path
public "getFileStore"(arg0: $Path$$Type): $FileStore
public "isSameFile"(arg0: $Path$$Type, arg1: $Path$$Type): boolean
public "getFileAttributeView"<V extends $FileAttributeView>(arg0: $Path$$Type, arg1: $Class$$Type<(V)>, ...arg2: ($LinkOption$$Type)[]): V
public "readAttributes"<A extends $BasicFileAttributes>(arg0: $Path$$Type, arg1: $Class$$Type<(A)>, ...arg2: ($LinkOption$$Type)[]): A
public "readAttributes"(arg0: $Path$$Type, arg1: StringJS, ...arg2: ($LinkOption$$Type)[]): $Map<(StringJS), (any)>
public "setAttribute"(arg0: $Path$$Type, arg1: StringJS, arg2: any, ...arg3: ($LinkOption$$Type)[]): void
public "readAttributesIfExists"<A extends $BasicFileAttributes>(arg0: $Path$$Type, arg1: $Class$$Type<(A)>, ...arg2: ($LinkOption$$Type)[]): A
public "newFileChannel"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, ...arg2: ($FileAttribute$$Type<(never)>)[]): $FileChannel
public "newAsynchronousFileChannel"(arg0: $Path$$Type, arg1: $Set$$Type<($OpenOption$$Type)>, arg2: $ExecutorService$$Type, ...arg3: ($FileAttribute$$Type<(never)>)[]): $AsynchronousFileChannel
get "scheme"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileSystemProvider$$Type = ($FileSystemProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileSystemProvider$$Original = $FileSystemProvider;}
