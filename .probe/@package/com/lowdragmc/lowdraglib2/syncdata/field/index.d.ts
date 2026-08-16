import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedKey {
        getName(): string;
        getFieldAccessor(): $IAccessor<never>;
        getContentType(): $Type;
        isLazy(): boolean;
        createRef(arg0: $Object): $IRef<never>;
        isDrop(): boolean;
        isReadOnlyManaged(): boolean;
        isDestSync(): boolean;
        isPersist(): boolean;
        getPersistentKey(): string;
        getRawField(): $Field;
        getDeserializeMethod(): $Method;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        getOnDirtyMethod(): $Method;
        getClazzType(): $Class<never>;
        static getClazzType(arg0: $Type): $Class<never>;
        getSerializeMethod(): $Method;
        setPersistentKey(arg0: string): void;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get name(): string;
        get fieldAccessor(): $IAccessor<never>;
        get contentType(): $Type;
        get lazy(): boolean;
        get drop(): boolean;
        get readOnlyManaged(): boolean;
        get destSync(): boolean;
        get persist(): boolean;
        get rawField(): $Field;
        get deserializeMethod(): $Method;
        get onDirtyMethod(): $Method;
        get serializeMethod(): $Method;
    }
}
