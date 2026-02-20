declare module "java.nio.file.OpenOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OpenOption$$Interface {
}

export class $OpenOption implements $OpenOption$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenOption$$Type = ($OpenOption);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpenOption$$Original = $OpenOption;}
declare module "java.nio.file.Watchable" {
import {$WatchService$$Type} from "java.nio.file.WatchService"
import {$WatchEvent$Kind$$Type} from "java.nio.file.WatchEvent$Kind"
import {$WatchEvent$Modifier$$Type} from "java.nio.file.WatchEvent$Modifier"
import {$WatchKey} from "java.nio.file.WatchKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Watchable$$Interface {
}

export class $Watchable implements $Watchable$$Interface {
 "register"(arg0: $WatchService$$Type, arg1: ($WatchEvent$Kind$$Type<(never)>)[], ...arg2: ($WatchEvent$Modifier$$Type)[]): $WatchKey
 "register"(arg0: $WatchService$$Type, ...arg1: ($WatchEvent$Kind$$Type<(never)>)[]): $WatchKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Watchable$$Type = ($Watchable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Watchable$$Original = $Watchable;}
declare module "java.nio.file.DirectoryStream" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$Consumer$$Type} from "java.util.function.Consumer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream$$Interface<T> extends $Closeable$$Interface, $Iterable$$Interface<(T)> {
[Symbol.iterator](): IterableIterator<T>;
}

export class $DirectoryStream<T> implements $DirectoryStream$$Interface {
 "iterator"(): $Iterator<(T)>
 "close"(): void
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectoryStream$$Type<T> = ($DirectoryStream<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DirectoryStream$$Original<T> = $DirectoryStream<(T)>;}
declare module "java.nio.file.FileStore" {
import {$FileStoreAttributeView} from "java.nio.file.attribute.FileStoreAttributeView"
import {$Class$$Type} from "java.lang.Class"
import {$FileAttributeView$$Type} from "java.nio.file.attribute.FileAttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileStore {
public "getUnallocatedSpace"(): long
public "getBlockSize"(): long
public "supportsFileAttributeView"(arg0: $Class$$Type<($FileAttributeView$$Type)>): boolean
public "supportsFileAttributeView"(arg0: StringJS): boolean
public "getFileStoreAttributeView"<V extends $FileStoreAttributeView>(arg0: $Class$$Type<(V)>): V
public "name"(): StringJS
public "type"(): StringJS
public "isReadOnly"(): boolean
public "getTotalSpace"(): long
public "getUsableSpace"(): long
public "getAttribute"(arg0: StringJS): any
get "unallocatedSpace"(): long
get "blockSize"(): long
get "readOnly"(): boolean
get "totalSpace"(): long
get "usableSpace"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileStore$$Type = ($FileStore);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileStore$$Original = $FileStore;}
declare module "java.nio.file.WatchEvent" {
import {$WatchEvent$Kind} from "java.nio.file.WatchEvent$Kind"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$$Interface<T> {
}

export class $WatchEvent<T> implements $WatchEvent$$Interface {
 "context"(): T
 "count"(): integer
 "kind"(): $WatchEvent$Kind<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchEvent$$Type<T> = ($WatchEvent<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatchEvent$$Original<T> = $WatchEvent<(T)>;}
declare module "java.nio.file.PathMatcher" {
import {$Path, $Path$$Type} from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PathMatcher$$Interface {

(arg0: $Path): boolean
}

export class $PathMatcher implements $PathMatcher$$Interface {
 "matches"(arg0: $Path$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathMatcher$$Type = ((arg0: $Path) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PathMatcher$$Original = $PathMatcher;}
declare module "java.nio.file.AccessMode" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessMode extends $Enum<($AccessMode)> {
static readonly "READ": $AccessMode
static readonly "EXECUTE": $AccessMode
static readonly "WRITE": $AccessMode

public static "values"(): ($AccessMode)[]
public static "valueOf"(arg0: StringJS): $AccessMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessMode$$Type = (("read") | ("write") | ("execute"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessMode$$Original = $AccessMode;}
declare module "java.nio.file.LinkOption" {
import {$Enum} from "java.lang.Enum"
import {$OpenOption$$Interface} from "java.nio.file.OpenOption"
import {$CopyOption$$Interface} from "java.nio.file.CopyOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LinkOption extends $Enum<($LinkOption)> implements $OpenOption$$Interface, $CopyOption$$Interface {
static readonly "NOFOLLOW_LINKS": $LinkOption

public static "values"(): ($LinkOption)[]
public static "valueOf"(arg0: StringJS): $LinkOption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkOption$$Type = (("nofollow_links"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkOption$$Original = $LinkOption;}
declare module "java.nio.file.WatchKey" {
import {$WatchEvent} from "java.nio.file.WatchEvent"
import {$List} from "java.util.List"
import {$Watchable} from "java.nio.file.Watchable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchKey$$Interface {
get "valid"(): boolean
}

export class $WatchKey implements $WatchKey$$Interface {
 "reset"(): boolean
 "cancel"(): void
 "isValid"(): boolean
 "watchable"(): $Watchable
 "pollEvents"(): $List<($WatchEvent<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchKey$$Type = ($WatchKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatchKey$$Original = $WatchKey;}
declare module "java.nio.file.WatchService" {
import {$Closeable$$Interface} from "java.io.Closeable"
import {$WatchKey} from "java.nio.file.WatchKey"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchService$$Interface extends $Closeable$$Interface {
}

export class $WatchService implements $WatchService$$Interface {
 "close"(): void
 "poll"(arg0: long, arg1: $TimeUnit$$Type): $WatchKey
 "poll"(): $WatchKey
 "take"(): $WatchKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchService$$Type = ($WatchService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatchService$$Original = $WatchService;}
declare module "java.nio.file.FileSystem" {
import {$Iterable} from "java.lang.Iterable"
import {$WatchService} from "java.nio.file.WatchService"
import {$FileSystemProvider} from "java.nio.file.spi.FileSystemProvider"
import {$PathMatcher} from "java.nio.file.PathMatcher"
import {$Set} from "java.util.Set"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$FileStore} from "java.nio.file.FileStore"
import {$Path} from "java.nio.file.Path"
import {$UserPrincipalLookupService} from "java.nio.file.attribute.UserPrincipalLookupService"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystem implements $Closeable$$Interface {
public "isOpen"(): boolean
public "provider"(): $FileSystemProvider
public "close"(): void
public "getPath"(arg0: StringJS, ...arg1: (StringJS)[]): $Path
public "isReadOnly"(): boolean
public "getSeparator"(): StringJS
public "getRootDirectories"(): $Iterable<($Path)>
public "getFileStores"(): $Iterable<($FileStore)>
public "supportedFileAttributeViews"(): $Set<(StringJS)>
public "getPathMatcher"(arg0: StringJS): $PathMatcher
public "getUserPrincipalLookupService"(): $UserPrincipalLookupService
public "newWatchService"(): $WatchService
get "open"(): boolean
get "readOnly"(): boolean
get "separator"(): StringJS
get "rootDirectories"(): $Iterable<($Path)>
get "fileStores"(): $Iterable<($FileStore)>
get "userPrincipalLookupService"(): $UserPrincipalLookupService
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileSystem$$Type = ($FileSystem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileSystem$$Original = $FileSystem;}
declare module "java.nio.file.WatchEvent$Modifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Modifier$$Interface {

(): StringJS
}

export class $WatchEvent$Modifier implements $WatchEvent$Modifier$$Interface {
 "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchEvent$Modifier$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatchEvent$Modifier$$Original = $WatchEvent$Modifier;}
declare module "java.nio.file.Path" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$WatchService$$Type} from "java.nio.file.WatchService"
import {$Iterator} from "java.util.Iterator"
import {$File} from "java.io.File"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Spliterator} from "java.util.Spliterator"
import {$WatchEvent$Kind$$Type} from "java.nio.file.WatchEvent$Kind"
import {$LinkOption$$Type} from "java.nio.file.LinkOption"
import {$WatchEvent$Modifier$$Type} from "java.nio.file.WatchEvent$Modifier"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$URI, $URI$$Type} from "java.net.URI"
import {$WatchKey} from "java.nio.file.WatchKey"
import {$Watchable$$Interface} from "java.nio.file.Watchable"
import {$FileSystem} from "java.nio.file.FileSystem"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Path$$Interface extends $Comparable$$Interface<($Path)>, $Iterable$$Interface<($Path)>, $Watchable$$Interface {
[Symbol.iterator](): IterableIterator<$Path>;
get "absolute"(): boolean
get "parent"(): $Path
get "root"(): $Path
get "fileName"(): $Path
get "fileSystem"(): $FileSystem
get "nameCount"(): integer
}

export class $Path implements $Path$$Interface {
 "getName"(arg0: integer): $Path
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $Path$$Type): integer
 "compareTo"(arg0: any): integer
 "startsWith"(arg0: StringJS): boolean
 "startsWith"(arg0: $Path$$Type): boolean
 "iterator"(): $Iterator<($Path)>
static "of"(arg0: StringJS, ...arg1: (StringJS)[]): $Path
static "of"(arg0: $URI$$Type): $Path
 "endsWith"(arg0: StringJS): boolean
 "endsWith"(arg0: $Path$$Type): boolean
 "register"(arg0: $WatchService$$Type, arg1: ($WatchEvent$Kind$$Type<(never)>)[], ...arg2: ($WatchEvent$Modifier$$Type)[]): $WatchKey
 "register"(arg0: $WatchService$$Type, ...arg1: ($WatchEvent$Kind$$Type<(never)>)[]): $WatchKey
 "isAbsolute"(): boolean
 "resolve"(arg0: $Path$$Type): $Path
 "resolve"(arg0: StringJS): $Path
 "getParent"(): $Path
 "getRoot"(): $Path
 "toRealPath"(...arg0: ($LinkOption$$Type)[]): $Path
 "toFile"(): $File
 "getFileName"(): $Path
 "normalize"(): $Path
 "getFileSystem"(): $FileSystem
 "relativize"(arg0: $Path$$Type): $Path
 "getNameCount"(): integer
 "toAbsolutePath"(): $Path
 "resolveSibling"(arg0: $Path$$Type): $Path
 "resolveSibling"(arg0: StringJS): $Path
 "subpath"(arg0: integer, arg1: integer): $Path
 "toUri"(): $URI
 "spliterator"(): $Spliterator<($Path)>
 "forEach"(arg0: $Consumer$$Type<($Path)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Path$$Type = (StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Path$$Original = $Path;}
declare module "java.nio.file.WatchEvent$Kind" {
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Kind$$Interface<T> {
}

export class $WatchEvent$Kind<T> implements $WatchEvent$Kind$$Interface {
 "name"(): StringJS
 "type"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchEvent$Kind$$Type<T> = ($WatchEvent$Kind<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatchEvent$Kind$$Original<T> = $WatchEvent$Kind<(T)>;}
declare module "java.nio.file.CopyOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CopyOption$$Interface {
}

export class $CopyOption implements $CopyOption$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyOption$$Type = ($CopyOption);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopyOption$$Original = $CopyOption;}
declare module "java.nio.file.DirectoryStream$Filter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream$Filter$$Interface<T> {

(arg0: T): boolean
}

export class $DirectoryStream$Filter<T> implements $DirectoryStream$Filter$$Interface {
 "accept"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectoryStream$Filter$$Type<T> = ((arg0: T) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DirectoryStream$Filter$$Original<T> = $DirectoryStream$Filter<(T)>;}
