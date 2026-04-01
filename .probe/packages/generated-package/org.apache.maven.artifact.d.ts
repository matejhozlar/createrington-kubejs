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
get "releases"(): $ArtifactRepositoryPolicy
get "snapshots"(): $ArtifactRepositoryPolicy
get "proxy"(): $Proxy
get "url"(): StringJS
get "layout"(): $ArtifactRepositoryLayout
get "blocked"(): boolean
set "proxy"(value: $Proxy$$Type)
set "id"(value: StringJS)
set "layout"(value: $ArtifactRepositoryLayout$$Type)
set "blocked"(value: boolean)
get "blacklisted"(): boolean
set "url"(value: StringJS)
get "basedir"(): StringJS
set "authentication"(value: $Authentication$$Type)
get "projectAware"(): boolean
get "authentication"(): $Authentication
get "uniqueVersion"(): boolean
set "blacklisted"(value: boolean)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
}

export class $ArtifactRepository implements $ArtifactRepository$$Interface {
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "getProtocol"(): StringJS
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getProxy"(): $Proxy
 "getUrl"(): StringJS
 "getLayout"(): $ArtifactRepositoryLayout
 "isBlocked"(): boolean
 "setProxy"(arg0: $Proxy$$Type): void
 "setId"(arg0: StringJS): void
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "setBlocked"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setUrl"(arg0: StringJS): void
 "pathOf"(arg0: $Artifact$$Type): StringJS
 "getBasedir"(): StringJS
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
 "setAuthentication"(arg0: $Authentication$$Type): void
 "isProjectAware"(): boolean
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
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
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
get "artifactId"(): StringJS
get "groupId"(): StringJS
get "baseVersion"(): StringJS
get "remoteFilename"(): StringJS
}

export class $ArtifactMetadata implements $ArtifactMetadata$$Interface {
 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getArtifactId"(): StringJS
 "getGroupId"(): StringJS
 "storedInArtifactVersionDirectory"(): boolean
 "getBaseVersion"(): StringJS
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "extendedToString"(): StringJS
 "getRemoteFilename"(): StringJS
 "storedInGroupDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
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
get "buildNumber"(): integer
get "qualifier"(): StringJS
get "incrementalVersion"(): integer
}

export class $ArtifactVersion implements $ArtifactVersion$$Interface {
 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "parseVersion"(arg0: StringJS): void
 "getBuildNumber"(): integer
 "getQualifier"(): StringJS
 "getIncrementalVersion"(): integer
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
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "getLowerBound"(): $ArtifactVersion
public "getUpperBound"(): $ArtifactVersion
public "isLowerBoundInclusive"(): boolean
public "isUpperBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
get "lowerBoundInclusive"(): boolean
get "upperBoundInclusive"(): boolean
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
get "id"(): StringJS
get "type"(): StringJS
get "scope"(): StringJS
get "resolved"(): boolean
set "release"(value: boolean)
get "file"(): $File
get "version"(): StringJS
get "dependencyTrail"(): $List<(StringJS)>
get "selectedVersion"(): $ArtifactVersion
get "artifactId"(): StringJS
get "classifier"(): StringJS
get "versionRange"(): $VersionRange
get "groupId"(): StringJS
set "file"(value: $File$$Type)
get "selectedVersionKnown"(): boolean
get "repository"(): $ArtifactRepository
set "version"(value: StringJS)
get "optional"(): boolean
set "scope"(value: StringJS)
get "snapshot"(): boolean
get "release"(): boolean
set "groupId"(value: StringJS)
set "versionRange"(value: $VersionRange$$Type)
get "artifactHandler"(): $ArtifactHandler
set "artifactId"(value: StringJS)
get "baseVersion"(): StringJS
set "dependencyTrail"(value: $List$$Type<(StringJS)>)
get "metadataList"(): $Collection<($ArtifactMetadata)>
set "repository"(value: $ArtifactRepository$$Type)
get "downloadUrl"(): StringJS
set "artifactHandler"(value: $ArtifactHandler$$Type)
set "optional"(value: boolean)
set "downloadUrl"(value: StringJS)
set "resolved"(value: boolean)
set "baseVersion"(value: StringJS)
set "resolvedVersion"(value: StringJS)
get "availableVersions"(): $List<($ArtifactVersion)>
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "dependencyFilter"(): $ArtifactFilter
get "dependencyConflictId"(): StringJS
set "dependencyFilter"(value: $ArtifactFilter$$Type)
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

 "getId"(): StringJS
 "getType"(): StringJS
 "getScope"(): StringJS
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): StringJS
 "getDependencyTrail"(): $List<(StringJS)>
 "getSelectedVersion"(): $ArtifactVersion
 "getArtifactId"(): StringJS
 "getClassifier"(): StringJS
 "getVersionRange"(): $VersionRange
 "getGroupId"(): StringJS
 "setFile"(arg0: $File$$Type): void
 "isSelectedVersionKnown"(): boolean
 "getRepository"(): $ArtifactRepository
 "setVersion"(arg0: StringJS): void
 "isOptional"(): boolean
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "setScope"(arg0: StringJS): void
 "isSnapshot"(): boolean
 "isRelease"(): boolean
 "setGroupId"(arg0: StringJS): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "getArtifactHandler"(): $ArtifactHandler
 "selectVersion"(arg0: StringJS): void
 "setArtifactId"(arg0: StringJS): void
 "hasClassifier"(): boolean
 "getBaseVersion"(): StringJS
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "getDownloadUrl"(): StringJS
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "setOptional"(arg0: boolean): void
 "setDownloadUrl"(arg0: StringJS): void
 "setResolved"(arg0: boolean): void
 "setBaseVersion"(arg0: StringJS): void
 "setResolvedVersion"(arg0: StringJS): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyFilter"(): $ArtifactFilter
 "getDependencyConflictId"(): StringJS
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
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
public "getRestrictions"(): $List<($Restriction)>
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "hasRestrictions"(): boolean
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public static "createFromVersion"(arg0: StringJS): $VersionRange
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public static "createFromVersionSpec"(arg0: StringJS): $VersionRange
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
get "restrictions"(): $List<($Restriction)>
get "recommendedVersion"(): $ArtifactVersion
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
