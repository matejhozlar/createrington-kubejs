declare module "org.apache.maven.artifact.repository.ArtifactRepository" {
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$$Type} from "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"
import {$Proxy, $Proxy$$Type} from "org.apache.maven.repository.Proxy"
import {$ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$$Type} from "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout"
import {$Authentication, $Authentication$$Type} from "org.apache.maven.artifact.repository.Authentication"

export interface $ArtifactRepository$$Interface {
get "key"(): StringJS
get "id"(): StringJS
get "protocol"(): StringJS
get "proxy"(): $Proxy
get "blocked"(): boolean
get "blacklisted"(): boolean
set "id"(value: StringJS)
get "url"(): StringJS
set "layout"(value: $ArtifactRepositoryLayout$$Type)
set "url"(value: StringJS)
get "snapshots"(): $ArtifactRepositoryPolicy
get "releases"(): $ArtifactRepositoryPolicy
get "layout"(): $ArtifactRepositoryLayout
set "blocked"(value: boolean)
set "proxy"(value: $Proxy$$Type)
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "projectAware"(): boolean
set "authentication"(value: $Authentication$$Type)
get "authentication"(): $Authentication
get "uniqueVersion"(): boolean
set "blacklisted"(value: boolean)
get "basedir"(): StringJS
}

export class $ArtifactRepository implements $ArtifactRepository$$Interface {
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "getProtocol"(): StringJS
 "getProxy"(): $Proxy
 "isBlocked"(): boolean
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setId"(arg0: StringJS): void
 "getUrl"(): StringJS
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "setUrl"(arg0: StringJS): void
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getReleases"(): $ArtifactRepositoryPolicy
 "getLayout"(): $ArtifactRepositoryLayout
 "setBlocked"(arg0: boolean): void
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "setProxy"(arg0: $Proxy$$Type): void
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
 "isProjectAware"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "getAuthentication"(): $Authentication
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "pathOf"(arg0: $Artifact$$Type): StringJS
 "getBasedir"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepository$$Type = ($ArtifactRepository);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactRepository$$Original = $ArtifactRepository;}
declare module "org.apache.maven.artifact.resolver.filter.ArtifactFilter" {
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export interface $ArtifactFilter$$Interface {

(arg0: $Artifact): boolean
}

export class $ArtifactFilter implements $ArtifactFilter$$Interface {
 "include"(arg0: $Artifact$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactFilter$$Type = ((arg0: $Artifact) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactFilter$$Original = $ArtifactFilter;}
declare module "org.apache.maven.artifact.handler.ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler$$Interface {
get "language"(): StringJS
get "extension"(): StringJS
get "classifier"(): StringJS
get "directory"(): StringJS
get "includesDependencies"(): boolean
get "packaging"(): StringJS
get "addedToClasspath"(): boolean
}

export class $ArtifactHandler implements $ArtifactHandler$$Interface {
static readonly "ROLE": StringJS

 "getLanguage"(): StringJS
 "getExtension"(): StringJS
 "getClassifier"(): StringJS
 "getDirectory"(): StringJS
 "isIncludesDependencies"(): boolean
 "getPackaging"(): StringJS
 "isAddedToClasspath"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactHandler$$Type = ($ArtifactHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactHandler$$Original = $ArtifactHandler;}
declare module "org.apache.maven.artifact.metadata.ArtifactMetadata" {
import {$ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactMetadata$$Type as $ArtifactMetadata$0$$Type, $ArtifactMetadata$$Interface as $ArtifactMetadata$0$$Interface} from "org.apache.maven.repository.legacy.metadata.ArtifactMetadata"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata$$Interface extends $ArtifactMetadata$0$$Interface {
get "key"(): any
get "groupId"(): StringJS
get "artifactId"(): StringJS
get "remoteFilename"(): StringJS
get "baseVersion"(): StringJS
}

export class $ArtifactMetadata implements $ArtifactMetadata$$Interface {
 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "storedInArtifactVersionDirectory"(): boolean
 "storedInGroupDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "getRemoteFilename"(): StringJS
 "extendedToString"(): StringJS
 "getBaseVersion"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$$Type = ($ArtifactMetadata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactMetadata$$Original = $ArtifactMetadata;}
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export interface $ArtifactVersion$$Interface extends $Comparable$$Interface<($ArtifactVersion)> {
get "majorVersion"(): integer
get "minorVersion"(): integer
get "incrementalVersion"(): integer
get "qualifier"(): StringJS
get "buildNumber"(): integer
}

export class $ArtifactVersion implements $ArtifactVersion$$Interface {
 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "getQualifier"(): StringJS
 "parseVersion"(arg0: StringJS): void
 "getBuildNumber"(): integer
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$$Type = ($ArtifactVersion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactVersion$$Original = $ArtifactVersion;}
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isUpperBoundInclusive"(): boolean
public "isLowerBoundInclusive"(): boolean
public "getUpperBound"(): $ArtifactVersion
public "getLowerBound"(): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
get "upperBoundInclusive"(): boolean
get "lowerBoundInclusive"(): boolean
get "upperBound"(): $ArtifactVersion
get "lowerBound"(): $ArtifactVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$$Type = ($Restriction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Restriction$$Original = $Restriction;}
declare module "org.apache.maven.artifact.Artifact" {
import {$ArtifactFilter, $ArtifactFilter$$Type} from "org.apache.maven.artifact.resolver.filter.ArtifactFilter"
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Pattern} from "java.util.regex.Pattern"
import {$Collection} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ArtifactHandler, $ArtifactHandler$$Type} from "org.apache.maven.artifact.handler.ArtifactHandler"
import {$List, $List$$Type} from "java.util.List"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"

export interface $Artifact$$Interface extends $Comparable$$Interface<($Artifact)> {
get "release"(): boolean
get "id"(): StringJS
get "type"(): StringJS
get "scope"(): StringJS
get "resolved"(): boolean
set "release"(value: boolean)
get "file"(): $File
get "version"(): StringJS
set "version"(value: StringJS)
get "snapshot"(): boolean
get "repository"(): $ArtifactRepository
set "file"(value: $File$$Type)
get "groupId"(): StringJS
get "versionRange"(): $VersionRange
get "selectedVersionKnown"(): boolean
get "selectedVersion"(): $ArtifactVersion
get "classifier"(): StringJS
get "artifactId"(): StringJS
get "dependencyTrail"(): $List<(StringJS)>
get "optional"(): boolean
set "scope"(value: StringJS)
get "baseVersion"(): StringJS
set "baseVersion"(value: StringJS)
set "repository"(value: $ArtifactRepository$$Type)
set "artifactId"(value: StringJS)
set "optional"(value: boolean)
set "downloadUrl"(value: StringJS)
get "artifactHandler"(): $ArtifactHandler
set "resolvedVersion"(value: StringJS)
get "metadataList"(): $Collection<($ArtifactMetadata)>
set "versionRange"(value: $VersionRange$$Type)
set "artifactHandler"(value: $ArtifactHandler$$Type)
set "dependencyTrail"(value: $List$$Type<(StringJS)>)
set "resolved"(value: boolean)
get "downloadUrl"(): StringJS
set "groupId"(value: StringJS)
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "dependencyFilter"(): $ArtifactFilter
get "availableVersions"(): $List<($ArtifactVersion)>
set "dependencyFilter"(value: $ArtifactFilter$$Type)
get "dependencyConflictId"(): StringJS
}

export class $Artifact implements $Artifact$$Interface {
static readonly "VERSION_FILE_PATTERN": $Pattern
static readonly "SCOPE_RUNTIME": StringJS
static readonly "SCOPE_TEST": StringJS
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": StringJS
static readonly "SCOPE_IMPORT": StringJS
static readonly "SCOPE_PROVIDED": StringJS
static readonly "RELEASE_VERSION": StringJS
static readonly "SCOPE_SYSTEM": StringJS
static readonly "SNAPSHOT_VERSION": StringJS
static readonly "SCOPE_COMPILE": StringJS
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": StringJS
static readonly "LATEST_VERSION": StringJS

 "isRelease"(): boolean
 "getId"(): StringJS
 "getType"(): StringJS
 "getScope"(): StringJS
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): StringJS
 "setVersion"(arg0: StringJS): void
 "isSnapshot"(): boolean
 "getRepository"(): $ArtifactRepository
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): StringJS
 "getVersionRange"(): $VersionRange
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "isSelectedVersionKnown"(): boolean
 "getSelectedVersion"(): $ArtifactVersion
 "getClassifier"(): StringJS
 "getArtifactId"(): StringJS
 "getDependencyTrail"(): $List<(StringJS)>
 "isOptional"(): boolean
 "setScope"(arg0: StringJS): void
 "hasClassifier"(): boolean
 "getBaseVersion"(): StringJS
 "selectVersion"(arg0: StringJS): void
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "setBaseVersion"(arg0: StringJS): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "setArtifactId"(arg0: StringJS): void
 "setOptional"(arg0: boolean): void
 "setDownloadUrl"(arg0: StringJS): void
 "getArtifactHandler"(): $ArtifactHandler
 "setResolvedVersion"(arg0: StringJS): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "setResolved"(arg0: boolean): void
 "getDownloadUrl"(): StringJS
 "setGroupId"(arg0: StringJS): void
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyFilter"(): $ArtifactFilter
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getDependencyConflictId"(): StringJS
 "compareTo"(arg0: $Artifact$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$$Type = ($Artifact);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Artifact$$Original = $Artifact;}
declare module "org.apache.maven.artifact.versioning.VersionRange" {
import {$Restriction} from "org.apache.maven.artifact.versioning.Restriction"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export class $VersionRange {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public static "createFromVersionSpec"(arg0: StringJS): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public "getRestrictions"(): $List<($Restriction)>
public "hasRestrictions"(): boolean
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public static "createFromVersion"(arg0: StringJS): $VersionRange
get "recommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$$Type = ($VersionRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VersionRange$$Original = $VersionRange;}
