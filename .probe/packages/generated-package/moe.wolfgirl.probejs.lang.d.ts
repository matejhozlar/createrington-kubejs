declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType$Builder" {
import {$JSLambdaType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType"
import {$ParamDecl} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$List} from "java.util.List"
import {$BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSLambdaType$Builder {
 "arrowFunction": boolean
readonly "params": $List<($ParamDecl)>

constructor()

public "returnType"(type: $BaseType$$Type): $JSLambdaType$Builder
public "method"(): $JSLambdaType$Builder
public "param"(symbol: StringJS, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): $JSLambdaType$Builder
public "param"(symbol: StringJS, type: $BaseType$$Type, isOptional: boolean): $JSLambdaType$Builder
public "param"(symbol: StringJS, type: $BaseType$$Type): $JSLambdaType$Builder
public "build"(): $JSLambdaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$Builder$$Type = ($JSLambdaType$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSLambdaType$Builder$$Original = $JSLambdaType$Builder;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType" {
import {$ParamDecl, $ParamDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$MethodDecl} from "moe.wolfgirl.probejs.lang.typescript.code.member.MethodDecl"
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSLambdaType extends $BaseType {
readonly "params": $List<($ParamDecl)>
readonly "returnType": $BaseType

constructor(params: $List$$Type<($ParamDecl$$Type)>, returnType: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
public "asMethod"(methodName: StringJS): $MethodDecl
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$$Type = ($JSLambdaType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSLambdaType$$Original = $JSLambdaType;}
declare module "moe.wolfgirl.probejs.lang.snippet.Snippet" {
import {$Collection$$Type} from "java.util.Collection"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$List} from "java.util.List"
import {$Variable$$Type} from "moe.wolfgirl.probejs.lang.snippet.parts.Variable"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$JsonObject} from "com.google.gson.JsonObject"

export class $Snippet {
readonly "name": StringJS

constructor(name: StringJS)

public "newline"(): $Snippet
public "compile"(): $JsonObject
public "prefix"(prefix: StringJS): $Snippet
public "literal"(content: StringJS): $Snippet
public "description"(description: StringJS): $Snippet
public "registry"<T>(registry: $ResourceKey$$Type<($Registry<(T)>)>): $Snippet
public "getPrefixes"(): $List<(StringJS)>
public "choices"(choices: $Collection$$Type<(StringJS)>): $Snippet
public "choices"(enumeration: integer, choices: $Collection$$Type<(StringJS)>): $Snippet
public "variable"(variable: $Variable$$Type): $Snippet
public "tabStop"(): $Snippet
public "tabStop"(enumeration: integer, defaultValue: StringJS): $Snippet
public "tabStop"(enumeration: integer): $Snippet
get "prefixes"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Snippet$$Type = ($Snippet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Snippet$$Original = $Snippet;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$JSMemberType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSArrayType extends $JSMemberType {
readonly "members": $Collection<($JSParam)>

constructor(members: $Collection$$Type<($JSParam$$Type)>)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSArrayType$$Type = ($JSArrayType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSArrayType$$Original = $JSArrayType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSVariableType extends $BaseType {
readonly "symbol": StringJS
 "extendsType": $BaseType

constructor(symbol: StringJS, extendsType: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSVariableType$$Type = ($TSVariableType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TSVariableType$$Original = $TSVariableType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType$Intersection" {
import {$JSJoinedType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSJoinedType$Intersection extends $JSJoinedType {
readonly "types": $List<($BaseType)>
readonly "delimiter": StringJS

constructor(types: $List$$Type<($BaseType$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$Intersection$$Type = ($JSJoinedType$Intersection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSJoinedType$Intersection$$Original = $JSJoinedType$Intersection;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode" {
import {$Code} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"

export class $CommentableCode extends $Code {
readonly "comments": $List<(StringJS)>

constructor()

public "formatComments"(): $List<(StringJS)>
public "addCommentAtStart"(...comments: (StringJS)[]): void
public "newline"(...comments: (StringJS)[]): void
public "format"(declaration: $Declaration$$Type): $List<(StringJS)>
public "addComment"(...comments: (StringJS)[]): void
public "formatRaw"(declaration: $Declaration$$Type): $List<(StringJS)>
public "linebreak"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentableCode$$Type = ($CommentableCode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommentableCode$$Original = $CommentableCode;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl" {
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $ParamDecl {
 "name": StringJS
 "varArg": boolean
 "optional": boolean
 "type": $BaseType

constructor(name: StringJS, type: $BaseType$$Type, varArg: boolean, optional: boolean)

public static "formatParams"(params: $List$$Type<($ParamDecl$$Type)>, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): StringJS
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "format"(index: integer, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamDecl$$Type = ($ParamDecl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParamDecl$$Original = $ParamDecl;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo" {
import {$CachedMethodInfo$$Type} from "dev.latvian.mods.rhino.CachedMethodInfo"
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$VariableTypeInfo} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$TypeVariableHolder} from "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder"
import {$Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$ParamInfo} from "moe.wolfgirl.probejs.lang.java.clazz.members.ParamInfo"
import {$MethodInfo$MethodAttributes} from "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo$MethodAttributes"
import {$Method$$Type} from "java.lang.reflect.Method"

export class $MethodInfo extends $TypeVariableHolder {
readonly "variableTypes": $List<($VariableTypeInfo)>
readonly "name": StringJS
readonly "attributes": $MethodInfo$MethodAttributes
readonly "params": $List<($ParamInfo)>
 "returnType": $TypeInfo

constructor(name: StringJS, methodInfo: $CachedMethodInfo$$Type, original: $Method$$Type, remapper: $Map$$Type<(StringJS), ($TypeInfo$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$$Type = ($MethodInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodInfo$$Original = $MethodInfo;}
declare module "moe.wolfgirl.probejs.lang.snippet.SnippetDump" {
import {$Snippet} from "moe.wolfgirl.probejs.lang.snippet.Snippet"
import {$List} from "java.util.List"
import {$Path$$Type} from "java.nio.file.Path"

export class $SnippetDump {
 "snippets": $List<($Snippet)>

constructor()

public "writeTo"(path: $Path$$Type): void
public "snippet"(name: StringJS): $Snippet
public "fromDocs"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetDump$$Type = ($SnippetDump);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SnippetDump$$Original = $SnippetDump;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSTypeOfType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSTypeOfType extends $BaseType {
readonly "inner": $BaseType

constructor(inner: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSTypeOfType$$Type = ($JSTypeOfType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSTypeOfType$$Original = $JSTypeOfType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.Types" {
import {$JSPrimitiveType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSPrimitiveType"
import {$TSOptionalType} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSOptionalType"
import {$JSArrayType$Builder} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType$Builder"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$JSObjectType$Builder} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType$Builder"
import {$ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"
import {$ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$JSTypeOfType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSTypeOfType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TSParamType} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSParamType"
import {$TSVariableType} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType"
import {$JSJoinedType$Intersection} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType$Intersection"
import {$JSArrayType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType"
import {$ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$JSLambdaType$Builder} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSLambdaType$Builder"
import {$TSClassType} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSClassType"
import {$Class$$Type} from "java.lang.Class"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export interface $Types$$Interface {
}

export class $Types implements $Types$$Interface {
static readonly "NUMBER": $JSPrimitiveType
static readonly "NULL": $JSPrimitiveType
static readonly "EMPTY_ARRAY": $JSArrayType
static readonly "NEVER": $JSPrimitiveType
static readonly "STRING": $JSPrimitiveType
static readonly "THIS": $JSPrimitiveType
static readonly "UNKNOWN": $JSPrimitiveType
static readonly "ANY": $JSPrimitiveType
static readonly "VOID": $JSPrimitiveType
static readonly "OBJECT": $JSPrimitiveType
static readonly "BOOLEAN": $JSPrimitiveType

static "typeOf"(clazz: $Class$$Type<(never)>): $JSTypeOfType
static "typeOf"(classPath: $ClassPath$$Type): $JSTypeOfType
static "typeOf"(classType: $BaseType$$Type): $JSTypeOfType
static "type"(clazz: $Class$$Type<(never)>): $TSClassType
static "type"(classPath: $ClassPath$$Type): $TSClassType
static "filter"(type: $BaseType$$Type, typePredicate: $Predicate$$Type<($BaseType)>): $BaseType
static "generic"(symbol: StringJS, extendOn: $BaseType$$Type): $TSVariableType
static "generic"(symbol: StringJS): $TSVariableType
static "lambda"(): $JSLambdaType$Builder
static "optional"(type: $BaseType$$Type): $TSOptionalType
static "literal"(content: any): $JSPrimitiveType
static "or"(...types: ($BaseType$$Type)[]): $BaseType
static "object"(): $JSObjectType$Builder
static "and"(...types: ($BaseType$$Type)[]): $JSJoinedType$Intersection
static "ignoreContext"(type: $BaseType$$Type, formatType: $BaseType$FormatType$$Type): $BaseType
static "typeMaybeGeneric"(clazz: $Class$$Type<(never)>): $BaseType
static "ignoreImport"(type: $BaseType$$Type, importType: $ImportInfo$Type$$Type): $BaseType
static "primitive"(type: StringJS): $JSPrimitiveType
static "arrayOf"(): $JSArrayType$Builder
static "parameterized"(base: $BaseType$$Type, ...params: ($BaseType$$Type)[]): $TSParamType
static "custom"(formatter: $BiFunction$$Type<($Declaration), ($BaseType$FormatType), (StringJS)>, ...imports: ($ImportInfo$$Type)[]): $BaseType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Types$$Type = ($Types);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Types$$Original = $Types;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType$Builder" {
import {$JSArrayType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSArrayType"
import {$Collection} from "java.util.Collection"
import {$JSMemberType$Builder} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType$Builder"
import {$JSParam} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"

export class $JSArrayType$Builder extends $JSMemberType$Builder<($JSArrayType$Builder), ($JSArrayType)> {
readonly "members": $Collection<($JSParam)>

constructor()

public "build"(): $JSArrayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSArrayType$Builder$$Type = ($JSArrayType$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSArrayType$Builder$$Original = $JSArrayType$Builder;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo$MethodAttributes" {
import {$Method$$Type} from "java.lang.reflect.Method"

export class $MethodInfo$MethodAttributes {
readonly "isStatic": boolean
readonly "isDefault": boolean
readonly "isAbstract": boolean

constructor(method: $Method$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$MethodAttributes$$Type = ($MethodInfo$MethodAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodInfo$MethodAttributes$$Original = $MethodInfo$MethodAttributes;}
declare module "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder" {
import {$AnnotationHolder} from "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableTypeInfo} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$Annotation$$Type} from "java.lang.annotation.Annotation"
import {$List} from "java.util.List"

export class $TypeVariableHolder extends $AnnotationHolder {
readonly "variableTypes": $List<($VariableTypeInfo)>

constructor(variables: ($TypeVariable$$Type<(never)>)[], annotations: ($Annotation$$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeVariableHolder$$Type = ($TypeVariableHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeVariableHolder$$Original = $TypeVariableHolder;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.member.MethodDecl" {
import {$CommentableCode} from "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode"
import {$ParamDecl, $ParamDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$TSVariableType, $TSVariableType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType"
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$MethodDeclaration} from "moe.wolfgirl.probejs.lang.typescript.code.ts.MethodDeclaration"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $MethodDecl extends $CommentableCode {
 "isStatic": boolean
 "variableTypes": $List<($TSVariableType)>
readonly "comments": $List<(StringJS)>
 "name": StringJS
 "params": $List<($ParamDecl)>
 "isAbstract": boolean
 "isInterface": boolean
 "returnType": $BaseType
 "content": StringJS

constructor(name: StringJS, variableTypes: $List$$Type<($TSVariableType$$Type)>, params: $List$$Type<($ParamDecl$$Type)>, returnType: $BaseType$$Type)

public "getUsedImports"(): $Collection<($ImportInfo)>
public "formatRaw"(declaration: $Declaration$$Type): $List<(StringJS)>
public "asDeclaration"(): $MethodDeclaration
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodDecl$$Type = ($MethodDecl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodDecl$$Original = $MethodDecl;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$JSMemberType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType"
import {$JSParam, $JSParam$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSObjectType extends $JSMemberType {
readonly "members": $Collection<($JSParam)>

constructor(members: $Collection$$Type<($JSParam$$Type)>)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$$Type = ($JSObjectType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSObjectType$$Original = $JSObjectType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType$Builder" {
import {$JSObjectType} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSObjectType"
import {$Collection} from "java.util.Collection"
import {$JSMemberType$Builder} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType$Builder"
import {$JSParam} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSObjectType$Builder extends $JSMemberType$Builder<($JSObjectType$Builder), ($JSObjectType)> {
readonly "members": $Collection<($JSParam)>

constructor()

public "build"(): $BaseType
public "buildIndexed"(): $JSObjectType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$Builder$$Type = ($JSObjectType$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSObjectType$Builder$$Original = $JSObjectType$Builder;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType$Builder" {
import {$Collection} from "java.util.Collection"
import {$JSParam} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSMemberType$Builder<T extends $JSMemberType$Builder<(object), (object)>, O extends $BaseType> {
readonly "members": $Collection<($JSParam)>

constructor()

public "member"(name: StringJS, optional: boolean, type: $BaseType$$Type): T
public "member"(name: StringJS, type: $BaseType$$Type): T
public "build"(): O
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSMemberType$Builder$$Type<T, O> = ($JSMemberType$Builder<(T), (O)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSMemberType$Builder$$Original<T, O> = $JSMemberType$Builder<(T), (O)>;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.ClassPath" {
import {$List, $List$$Type} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Record} from "java.lang.Record"

export class $ClassPath extends $Record {
constructor(className: StringJS)
constructor(parts: $List$$Type<(StringJS)>)
constructor(clazz: $Class$$Type<(never)>)

public "getName"(): StringJS
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getPackage"(): $List<(StringJS)>
public "parts"(): $List<(StringJS)>
public "getClassPath"(): StringJS
public "getConcatenated"(sep: StringJS): StringJS
public "getClassPathJava"(): StringJS
public "getTypeScriptPath"(): StringJS
public "getGenerics"(): $List<(StringJS)>
public "getConcatenatedPackage"(sep: StringJS): StringJS
public "getDirPath"(base: $Path$$Type): $Path
public "getFileKey"(): StringJS
public "makePath"(base: $Path$$Type): $Path
get "name"(): StringJS
get "package"(): $List<(StringJS)>
get "classPath"(): StringJS
get "classPathJava"(): StringJS
get "typeScriptPath"(): StringJS
get "generics"(): $List<(StringJS)>
get "fileKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassPath$$Type = ({"parts"?: $List$$Type<(StringJS)>}) | ([parts?: $List$$Type<(StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassPath$$Original = $ClassPath;}
declare module "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder" {
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"

export class $AnnotationHolder {
constructor(annotations: ($Annotation$$Type)[])

public "getAnnotation"<T extends $Annotation>(type: $Class$$Type<(T)>): T
public "getAnnotations"<T extends $Annotation>(type: $Class$$Type<(T)>): $List<(T)>
public "getAnnotations"(): ($Annotation)[]
public "hasAnnotation"(annotation: $Class$$Type<($Annotation$$Type)>): boolean
get "annotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationHolder$$Type = ($AnnotationHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnnotationHolder$$Original = $AnnotationHolder;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.Clazz" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$ConstructorInfo} from "moe.wolfgirl.probejs.lang.java.clazz.members.ConstructorInfo"
import {$VariableTypeInfo} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$TypeVariableHolder} from "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder"
import {$FieldInfo} from "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo"
import {$Clazz$ClassAttribute} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassAttribute"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$ClassPath} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$MethodInfo} from "moe.wolfgirl.probejs.lang.java.clazz.members.MethodInfo"

export class $Clazz extends $TypeVariableHolder {
readonly "constructors": $List<($ConstructorInfo)>
readonly "interfaces": $List<($TypeInfo)>
readonly "variableTypes": $List<($VariableTypeInfo)>
 "recursionDepth": integer
readonly "superClass": $TypeInfo
readonly "methods": $List<($MethodInfo)>
readonly "classPath": $ClassPath
readonly "attribute": $Clazz$ClassAttribute
readonly "fields": $List<($FieldInfo)>

constructor(clazz: $Class$$Type<(never)>)

public "equals"(o: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$$Type = ($Clazz);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Clazz$$Original = $Clazz;}
declare module "moe.wolfgirl.probejs.lang.snippet.parts.Variable" {
import {$Enum} from "java.lang.Enum"
import {$SnippetPart$$Interface} from "moe.wolfgirl.probejs.lang.snippet.parts.SnippetPart"

export class $Variable extends $Enum<($Variable)> implements $SnippetPart$$Interface {
static readonly "CURRENT_MINUTE": $Variable
static readonly "CLIPBOARD": $Variable
static readonly "TM_FILEPATH": $Variable
static readonly "RELATIVE_FILEPATH": $Variable
static readonly "CURRENT_DAY_NAME_SHORT": $Variable
static readonly "TM_DIRECTORY": $Variable
static readonly "CURRENT_DAY_NAME": $Variable
static readonly "CURRENT_YEAR": $Variable
static readonly "BLOCK_COMMENT_END": $Variable
static readonly "UUID": $Variable
static readonly "RANDOM_HEX": $Variable
static readonly "WORKSPACE_FOLDER": $Variable
static readonly "CURRENT_MONTH": $Variable
static readonly "TM_CURRENT_LINE": $Variable
static readonly "CURRENT_HOUR": $Variable
static readonly "CURRENT_TIMEZONE_OFFSET": $Variable
static readonly "CURRENT_SECOND": $Variable
static readonly "CURSOR_NUMBER": $Variable
static readonly "BLOCK_COMMENT_START": $Variable
static readonly "RANDOM": $Variable
static readonly "WORKSPACE_NAME": $Variable
static readonly "TM_LINE_INDEX": $Variable
static readonly "CURRENT_YEAR_SHORT": $Variable
static readonly "CURSOR_INDEX": $Variable
static readonly "TM_FILENAME": $Variable
static readonly "LINE_COMMENT": $Variable
static readonly "CURRENT_SECONDS_UNIX": $Variable
static readonly "TM_CURRENT_WORD": $Variable
static readonly "CURRENT_MONTH_NAME_SHORT": $Variable
static readonly "TM_LINE_NUMBER": $Variable
static readonly "TM_FILENAME_BASE": $Variable
static readonly "TM_SELECTED_TEXT": $Variable
static readonly "CURRENT_MONTH_NAME": $Variable
static readonly "CURRENT_DATE": $Variable

public static "values"(): ($Variable)[]
public static "valueOf"(name: StringJS): $Variable
public "format"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variable$$Type = (("line_comment") | ("block_comment_end") | ("block_comment_start") | ("uuid") | ("random_hex") | ("random") | ("current_timezone_offset") | ("current_seconds_unix") | ("current_second") | ("current_minute") | ("current_hour") | ("current_day_name_short") | ("current_day_name") | ("current_date") | ("current_month_name_short") | ("current_month_name") | ("current_month") | ("current_year_short") | ("current_year") | ("cursor_number") | ("cursor_index") | ("workspace_folder") | ("workspace_name") | ("clipboard") | ("relative_filepath") | ("tm_filepath") | ("tm_directory") | ("tm_filename_base") | ("tm_filename") | ("tm_line_number") | ("tm_line_index") | ("tm_current_word") | ("tm_current_line") | ("tm_selected_text"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Variable$$Original = $Variable;}
declare module "moe.wolfgirl.probejs.lang.transpiler.TypeConverter" {
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$Map} from "java.util.Map"
import {$Class$$Type} from "java.lang.Class"
import {$ClassPath} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$ScriptManager, $ScriptManager$$Type} from "dev.latvian.mods.kubejs.script.ScriptManager"

export class $TypeConverter {
readonly "scriptManager": $ScriptManager
readonly "predefinedTypes": $Map<($ClassPath), ($BaseType)>

constructor(manager: $ScriptManager$$Type)

public "convertType"(typeInfo: $TypeInfo$$Type): $BaseType
public "convertType"(typeInfo: $TypeInfo$$Type, baseType: boolean): $BaseType
public "addType"(clazz: $Class$$Type<(never)>, type: $BaseType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeConverter$$Type = ($TypeConverter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeConverter$$Original = $TypeConverter;}
declare module "moe.wolfgirl.probejs.lang.typescript.TypeScriptFile" {
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$BufferedWriter$$Type} from "java.io.BufferedWriter"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Declaration} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$Class$$Type} from "java.lang.Class"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Path$$Type} from "java.nio.file.Path"

export class $TypeScriptFile {
readonly "classPath": $ClassPath
readonly "codeList": $List<($Code)>
readonly "declaration": $Declaration

constructor(self: $ClassPath$$Type)

public "format"(): StringJS
public "write"(writeTo: $Path$$Type): void
public "write"(writer: $BufferedWriter$$Type): void
public "addCode"(code: $Code$$Type): void
public "findCode"<T extends $Code>(type: $Class$$Type<(T)>): $Optional<(T)>
public "excludeSymbol"(name: StringJS): void
public "writeAsModule"(writer: $BufferedWriter$$Type): void
public "refreshImports"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeScriptFile$$Type = ($TypeScriptFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeScriptFile$$Original = $TypeScriptFile;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam" {
import {$Function$$Type} from "java.util.function.Function"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$Record} from "java.lang.Record"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSParam extends $Record {
constructor(name: StringJS, optional: boolean, type: $BaseType$$Type)

public "name"(): StringJS
public "type"(): $BaseType
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "format"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type, nameGetter: $Function$$Type<(StringJS), (StringJS)>): StringJS
public "optional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSParam$$Type = ({"optional"?: boolean, "type"?: $BaseType$$Type, "name"?: StringJS}) | ([optional?: boolean, type?: $BaseType$$Type, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSParam$$Original = $JSParam;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.ConstructorInfo" {
import {$VariableTypeInfo} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$TypeVariableHolder} from "moe.wolfgirl.probejs.lang.java.base.TypeVariableHolder"
import {$CachedConstructorInfo$$Type} from "dev.latvian.mods.rhino.CachedConstructorInfo"
import {$List} from "java.util.List"
import {$Constructor$$Type} from "java.lang.reflect.Constructor"
import {$ParamInfo} from "moe.wolfgirl.probejs.lang.java.clazz.members.ParamInfo"

export class $ConstructorInfo extends $TypeVariableHolder {
readonly "variableTypes": $List<($VariableTypeInfo)>
readonly "params": $List<($ParamInfo)>

constructor(arg0: $CachedConstructorInfo$$Type, original: $Constructor$$Type<(never)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructorInfo$$Type = ($ConstructorInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConstructorInfo$$Original = $ConstructorInfo;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type" {
import {$Enum} from "java.lang.Enum"

export class $ImportInfo$Type extends $Enum<($ImportInfo$Type)> {
static readonly "INTERFACE": $ImportInfo$Type
static readonly "ORIGINAL": $ImportInfo$Type
static readonly "TYPE": $ImportInfo$Type
static readonly "STATIC": $ImportInfo$Type

public static "values"(): ($ImportInfo$Type)[]
public static "valueOf"(name: StringJS): $ImportInfo$Type
public "applyTemplate"(name: StringJS): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImportInfo$Type$$Type = (("original") | ("type") | ("static") | ("interface"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImportInfo$Type$$Original = $ImportInfo$Type;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType" {
import {$Code} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$TSArrayType} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSArrayType"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $BaseType extends $Code {
constructor()

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "format"(declaration: $Declaration$$Type): $List<(StringJS)>
public "line"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): StringJS
public "asArray"(): $TSArrayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$$Type = ($BaseType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseType$$Original = $BaseType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSJoinedType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSJoinedType extends $BaseType {
readonly "types": $List<($BaseType)>
readonly "delimiter": StringJS

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$$Type = ($JSJoinedType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSJoinedType$$Original = $JSJoinedType;}
declare module "moe.wolfgirl.probejs.lang.snippet.parts.SnippetPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SnippetPart$$Interface {

(): StringJS
}

export class $SnippetPart implements $SnippetPart$$Interface {
 "format"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetPart$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SnippetPart$$Original = $SnippetPart;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo" {
import {$UnaryOperator} from "java.util.function.UnaryOperator"
import {$ImportInfo$Type, $ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Record} from "java.lang.Record"

export class $ImportInfo extends $Record {
static readonly "OUTPUT_TEMPLATE": StringJS
static readonly "INTERFACE_TEMPLATE": StringJS
static readonly "INPUT_TEMPLATE": StringJS
static readonly "STATIC_TEMPLATE": StringJS
static readonly "ORIGINAL": $UnaryOperator<(StringJS)>

constructor(classPath: $ClassPath$$Type, type: $ImportInfo$Type$$Type)

public static "type"(path: $ClassPath$$Type): $ImportInfo
public "type"(): $ImportInfo$Type
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "original"(path: $ClassPath$$Type): $ImportInfo
public "asType"(type: $ImportInfo$Type$$Type): $ImportInfo
public "classPath"(): $ClassPath
public static "itf"(path: $ClassPath$$Type): $ImportInfo
public static "importStatic"(path: $ClassPath$$Type): $ImportInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImportInfo$$Type = ({"classPath"?: $ClassPath$$Type, "type"?: $ImportInfo$Type$$Type}) | ([classPath?: $ClassPath$$Type, type?: $ImportInfo$Type$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImportInfo$$Original = $ImportInfo;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSClassType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$BaseType} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSClassType extends $BaseType {
 "classPath": $ClassPath

constructor(classPath: $ClassPath$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSClassType$$Type = ($TSClassType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TSClassType$$Original = $TSClassType;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassAttribute" {
import {$Clazz$ClassType} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassType"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Clazz$ClassAttribute {
readonly "raw": $Class<(never)>
readonly "type": $Clazz$ClassType
readonly "isAbstract": boolean
readonly "isInterface": boolean

constructor(clazz: $Class$$Type<(never)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassAttribute$$Type = ($Clazz$ClassAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Clazz$ClassAttribute$$Original = $Clazz$ClassAttribute;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.Code" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$Class} from "java.lang.Class"
import {$ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"

export class $Code {
constructor()

public "format"(declaration: $Declaration$$Type): $List<(StringJS)>
public "line"(declaration: $Declaration$$Type): StringJS
public "getClasses"(): $Collection<($Class<(never)>)>
public "getUsedImports"(): $Collection<($ImportInfo)>
public "getUsedImportsAs"(type: $ImportInfo$Type$$Type): $Collection<($ImportInfo)>
get "classes"(): $Collection<($Class<(never)>)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Code$$Type = ($Code);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Code$$Original = $Code;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped$Global" {
import {$Code} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$Wrapped} from "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"

export class $Wrapped$Global extends $Wrapped {
readonly "codes": $List<($Code)>
readonly "comments": $List<(StringJS)>

constructor()

public "formatRaw"(declaration: $Declaration$$Type): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$Global$$Type = ($Wrapped$Global);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Wrapped$Global$$Original = $Wrapped$Global;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSPrimitiveType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $JSPrimitiveType extends $BaseType {
readonly "content": StringJS

constructor(content: StringJS)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSPrimitiveType$$Type = ($JSPrimitiveType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSPrimitiveType$$Original = $JSPrimitiveType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSArrayType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSArrayType extends $BaseType {
 "component": $BaseType

constructor(component: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSArrayType$$Type = ($TSArrayType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TSArrayType$$Original = $TSArrayType;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo$FieldAttributes" {
import {$Field$$Type} from "java.lang.reflect.Field"

export class $FieldInfo$FieldAttributes {
readonly "isStatic": boolean
readonly "isFinal": boolean

constructor(field: $Field$$Type)

public "getStaticValue"(): any
get "staticValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$FieldAttributes$$Type = ($FieldInfo$FieldAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldInfo$FieldAttributes$$Original = $FieldInfo$FieldAttributes;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ts.MethodDeclaration" {
import {$CommentableCode} from "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode"
import {$ParamDecl, $ParamDecl$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.member.ParamDecl"
import {$TSVariableType, $TSVariableType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType"
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $MethodDeclaration extends $CommentableCode {
readonly "variableTypes": $List<($TSVariableType)>
readonly "comments": $List<(StringJS)>
 "name": StringJS
readonly "params": $List<($ParamDecl)>
 "returnType": $BaseType

constructor(name: StringJS, variableTypes: $List$$Type<($TSVariableType$$Type)>, params: $List$$Type<($ParamDecl$$Type)>, returnType: $BaseType$$Type)

public "getUsedImports"(): $Collection<($ImportInfo)>
public "formatRaw"(declaration: $Declaration$$Type): $List<(StringJS)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodDeclaration$$Type = ($MethodDeclaration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodDeclaration$$Original = $MethodDeclaration;}
declare module "moe.wolfgirl.probejs.lang.typescript.Declaration" {
import {$Map} from "java.util.Map"
import {$ImportInfo$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Reference} from "moe.wolfgirl.probejs.lang.typescript.Reference"

export class $Declaration {
readonly "references": $Map<($ClassPath), ($Reference)>

constructor()

public "addClass"(path: $ImportInfo$$Type): void
public "getSymbol"(path: $ClassPath$$Type): StringJS
public "exclude"(name: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Declaration$$Type = ($Declaration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Declaration$$Original = $Declaration;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType" {
import {$Enum} from "java.lang.Enum"

export class $BaseType$FormatType extends $Enum<($BaseType$FormatType)> {
static readonly "RETURN": $BaseType$FormatType
static readonly "INPUT": $BaseType$FormatType
static readonly "VARIABLE": $BaseType$FormatType

public static "values"(): ($BaseType$FormatType)[]
public static "valueOf"(name: StringJS): $BaseType$FormatType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$FormatType$$Type = (("input") | ("return") | ("variable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseType$FormatType$$Original = $BaseType$FormatType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSParamType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$List, $List$$Type} from "java.util.List"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSParamType extends $BaseType {
 "params": $List<($BaseType)>
 "baseType": $BaseType

constructor(baseType: $BaseType$$Type, params: $List$$Type<($BaseType$$Type)>)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSParamType$$Type = ($TSParamType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TSParamType$$Original = $TSParamType;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.ParamInfo" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"

export class $ParamInfo {
 "name": StringJS
 "type": $TypeInfo
readonly "varArgs": boolean

constructor(name: StringJS, type: $TypeInfo$$Type, varArgs: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamInfo$$Type = ($ParamInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParamInfo$$Original = $ParamInfo;}
declare module "moe.wolfgirl.probejs.lang.typescript.Reference" {
import {$ImportInfo$Type, $ImportInfo$Type$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo$Type"
import {$ClassPath, $ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$Record} from "java.lang.Record"

export class $Reference extends $Record {
constructor(classPath: $ClassPath$$Type, symbol: StringJS, types: $EnumSet$$Type<($ImportInfo$Type$$Type)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "types"(): $EnumSet<($ImportInfo$Type)>
public "classPath"(): $ClassPath
public "symbol"(): StringJS
public "getImport"(): StringJS
get "import"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference$$Type = ({"classPath"?: $ClassPath$$Type, "types"?: $EnumSet$$Type<($ImportInfo$Type$$Type)>, "symbol"?: StringJS}) | ([classPath?: $ClassPath$$Type, types?: $EnumSet$$Type<($ImportInfo$Type$$Type)>, symbol?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference$$Original = $Reference;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.Clazz$ClassType" {
import {$Enum} from "java.lang.Enum"

export class $Clazz$ClassType extends $Enum<($Clazz$ClassType)> {
static readonly "ENUM": $Clazz$ClassType
static readonly "INTERFACE": $Clazz$ClassType
static readonly "RECORD": $Clazz$ClassType
static readonly "CLASS": $Clazz$ClassType

public static "values"(): ($Clazz$ClassType)[]
public static "valueOf"(name: StringJS): $Clazz$ClassType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassType$$Type = (("interface") | ("enum") | ("record") | ("class"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Clazz$ClassType$$Original = $Clazz$ClassType;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.TSOptionalType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"
import {$BaseType, $BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$BaseType$FormatType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType$FormatType"

export class $TSOptionalType extends $BaseType {
 "component": $BaseType

constructor(component: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, input: $BaseType$FormatType$$Type): $List<(StringJS)>
public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSOptionalType$$Type = ($TSOptionalType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TSOptionalType$$Original = $TSOptionalType;}
declare module "moe.wolfgirl.probejs.lang.transpiler.Transpiler" {
import {$TypeConverter} from "moe.wolfgirl.probejs.lang.transpiler.TypeConverter"
import {$Clazz$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz"
import {$Map} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ClassPath} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$ScriptManager$$Type} from "dev.latvian.mods.kubejs.script.ScriptManager"
import {$TypeScriptFile} from "moe.wolfgirl.probejs.lang.typescript.TypeScriptFile"

export class $Transpiler {
readonly "typeConverter": $TypeConverter
readonly "rejectedClasses": $Set<($ClassPath)>

constructor(manager: $ScriptManager$$Type)

public "init"(): void
public "dump"(clazzes: $Collection$$Type<($Clazz$$Type)>): $Map<($ClassPath), ($TypeScriptFile)>
public "reject"(clazz: $Class$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transpiler$$Type = ($Transpiler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transpiler$$Original = $Transpiler;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped" {
import {$CommentableCode} from "moe.wolfgirl.probejs.lang.typescript.code.member.CommentableCode"
import {$Code, $Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$List} from "java.util.List"
import {$Declaration$$Type} from "moe.wolfgirl.probejs.lang.typescript.Declaration"

export class $Wrapped extends $CommentableCode {
readonly "codes": $List<($Code)>
readonly "comments": $List<(StringJS)>

constructor()

public "isEmpty"(): boolean
public "merge"(other: $Wrapped$$Type): void
public "getUsedImports"(): $Collection<($ImportInfo)>
public "addCode"(inner: $Code$$Type): void
public "formatRaw"(declaration: $Declaration$$Type): $List<(StringJS)>
get "empty"(): boolean
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$$Type = ($Wrapped);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Wrapped$$Original = $Wrapped;}
declare module "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo" {
import {$AnnotationHolder} from "moe.wolfgirl.probejs.lang.java.base.AnnotationHolder"
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$CachedFieldInfo$$Type} from "dev.latvian.mods.rhino.CachedFieldInfo"
import {$FieldInfo$FieldAttributes} from "moe.wolfgirl.probejs.lang.java.clazz.members.FieldInfo$FieldAttributes"
import {$Field$$Type} from "java.lang.reflect.Field"

export class $FieldInfo extends $AnnotationHolder {
readonly "name": StringJS
readonly "attributes": $FieldInfo$FieldAttributes
readonly "type": $TypeInfo

constructor(name: StringJS, fieldInfo: $CachedFieldInfo$$Type, original: $Field$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$$Type = ($FieldInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldInfo$$Original = $FieldInfo;}
declare module "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSMemberType" {
import {$Collection} from "java.util.Collection"
import {$ImportInfo} from "moe.wolfgirl.probejs.lang.typescript.code.ImportInfo"
import {$JSParam} from "moe.wolfgirl.probejs.lang.typescript.code.type.js.JSParam"
import {$BaseType} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $JSMemberType extends $BaseType {
readonly "members": $Collection<($JSParam)>

public "getUsedImports"(): $Collection<($ImportInfo)>
get "usedImports"(): $Collection<($ImportInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSMemberType$$Type = ($JSMemberType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSMemberType$$Original = $JSMemberType;}
declare module "moe.wolfgirl.probejs.lang.typescript.ScriptDump" {
import {$Transpiler} from "moe.wolfgirl.probejs.lang.transpiler.Transpiler"
import {$Code$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.Code"
import {$Map} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Wrapped$Global} from "moe.wolfgirl.probejs.lang.typescript.code.ts.Wrapped$Global"
import {$ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$Clazz, $Clazz$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.Clazz"
import {$Supplier} from "java.util.function.Supplier"
import {$ScriptType} from "dev.latvian.mods.kubejs.script.ScriptType"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ScriptManager, $ScriptManager$$Type} from "dev.latvian.mods.kubejs.script.ScriptManager"

export class $ScriptDump {
readonly "scriptPath": $Path
readonly "identifier": StringJS
readonly "transpiler": $Transpiler
readonly "manager": $ScriptManager
readonly "globals": $Map<(StringJS), ($Pair<($Collection<(StringJS)>), ($Wrapped$Global)>)>
static readonly "SERVER_DUMP": $Supplier<($ScriptDump)>
readonly "recordedClasses": $Set<($Clazz)>
static readonly "STARTUP_DUMP": $Supplier<($ScriptDump)>
 "total": integer
readonly "basePath": $Path
static readonly "PACKAGE_DUMP": $Supplier<($ScriptDump)>
readonly "scriptType": $ScriptType
 "dumped": integer
readonly "packageDump": boolean
static readonly "CLIENT_DUMP": $Supplier<($ScriptDump)>

constructor(manager: $ScriptManager$$Type, basePath: $Path$$Type, scriptPath: $Path$$Type, packageDump: boolean)

public "destroy"(): void
public "assignType"(classPath: $Class$$Type<(never)>, name: StringJS, type: $BaseType$$Type): void
public "assignType"(classPath: $Class$$Type<(never)>, type: $BaseType$$Type): void
public "assignType"(classPath: $ClassPath$$Type, name: StringJS, type: $BaseType$$Type): void
public "assignType"(classPath: $ClassPath$$Type, type: $BaseType$$Type): void
public "addGlobal"(identifier: StringJS, ...content: ($Code$$Type)[]): void
public "addGlobal"(identifier: StringJS, excludedNames: $Collection$$Type<(StringJS)>, ...content: ($Code$$Type)[]): void
public "ensureDumpFolder"(): $Path
public "dumpGlobal"(): void
public "acceptClasses"(classes: $Collection$$Type<($Clazz$$Type)>): void
public "retrieveClasses"(): $Set<($Class<(never)>)>
public "dumpClasses"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptDump$$Type = ($ScriptDump);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScriptDump$$Original = $ScriptDump;}
