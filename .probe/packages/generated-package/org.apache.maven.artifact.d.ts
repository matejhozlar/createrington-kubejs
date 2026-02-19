declare module "org.apache.maven.artifact.repository.ArtifactRepository" {
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$$Type} from "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"
import {$Proxy, $Proxy$$Type} from "org.apache.maven.repository.Proxy"
import {$ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import {$Authentication, $Authentication$$Type} from "org.apache.maven.artifact.repository.Authentication"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$$Type} from "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout"

export interface $ArtifactRepository$$Interface {
get "blocked"(): boolean
get "key"(): StringJS
get "id"(): StringJS
get "protocol"(): StringJS
set "id"(value: StringJS)
get "url"(): StringJS
get "snapshots"(): $ArtifactRepositoryPolicy
get "releases"(): $ArtifactRepositoryPolicy
set "layout"(value: $ArtifactRepositoryLayout$$Type)
get "layout"(): $ArtifactRepositoryLayout
get "blacklisted"(): boolean
get "proxy"(): $Proxy
get "uniqueVersion"(): boolean
set "authentication"(value: $Authentication$$Type)
get "authentication"(): $Authentication
set "blacklisted"(value: boolean)
get "projectAware"(): boolean
set "blocked"(value: boolean)
set "proxy"(value: $Proxy$$Type)
set "url"(value: StringJS)
get "basedir"(): StringJS
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
}

export class $ArtifactRepository implements $ArtifactRepository$$Interface {
 "isBlocked"(): boolean
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "getProtocol"(): StringJS
 "setId"(arg0: StringJS): void
 "getUrl"(): StringJS
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getReleases"(): $ArtifactRepositoryPolicy
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "getLayout"(): $ArtifactRepositoryLayout
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "getProxy"(): $Proxy
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "getAuthentication"(): $Authentication
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
 "isProjectAware"(): boolean
 "setBlocked"(arg0: boolean): void
 "setProxy"(arg0: $Proxy$$Type): void
 "setUrl"(arg0: StringJS): void
 "getBasedir"(): StringJS
 "pathOf"(arg0: $Artifact$$Type): StringJS
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
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
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export interface $ArtifactVersion$$Interface extends $Comparable$$Interface<($ArtifactVersion)> {
get "majorVersion"(): integer
get "minorVersion"(): integer
get "incrementalVersion"(): integer
get "buildNumber"(): integer
get "qualifier"(): StringJS
}

export class $ArtifactVersion implements $ArtifactVersion$$Interface {
 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "parseVersion"(arg0: StringJS): void
 "getBuildNumber"(): integer
 "getQualifier"(): StringJS
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
get "packaging"(): StringJS
get "addedToClasspath"(): boolean
get "directory"(): StringJS
get "includesDependencies"(): boolean
}

export class $ArtifactHandler implements $ArtifactHandler$$Interface {
static readonly "ROLE": StringJS

 "getLanguage"(): StringJS
 "getExtension"(): StringJS
 "getClassifier"(): StringJS
 "getPackaging"(): StringJS
 "isAddedToClasspath"(): boolean
 "getDirectory"(): StringJS
 "isIncludesDependencies"(): boolean
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
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isLowerBoundInclusive"(): boolean
public "isUpperBoundInclusive"(): boolean
public "getLowerBound"(): $ArtifactVersion
public "getUpperBound"(): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
get "lowerBoundInclusive"(): boolean
get "upperBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
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
 "getRemoteFilename"(): StringJS
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "extendedToString"(): StringJS
 "getBaseVersion"(): StringJS
 "storedInArtifactVersionDirectory"(): boolean
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
get "repository"(): $ArtifactRepository
set "file"(value: $File$$Type)
get "groupId"(): StringJS
get "selectedVersionKnown"(): boolean
get "dependencyTrail"(): $List<(StringJS)>
get "classifier"(): StringJS
get "artifactId"(): StringJS
get "selectedVersion"(): $ArtifactVersion
get "snapshot"(): boolean
set "version"(value: StringJS)
get "versionRange"(): $VersionRange
set "scope"(value: StringJS)
get "optional"(): boolean
set "groupId"(value: StringJS)
get "release"(): boolean
set "artifactId"(value: StringJS)
set "versionRange"(value: $VersionRange$$Type)
set "artifactHandler"(value: $ArtifactHandler$$Type)
get "metadataList"(): $Collection<($ArtifactMetadata)>
get "baseVersion"(): StringJS
set "resolved"(value: boolean)
set "dependencyTrail"(value: $List$$Type<(StringJS)>)
set "downloadUrl"(value: StringJS)
get "downloadUrl"(): StringJS
set "repository"(value: $ArtifactRepository$$Type)
set "resolvedVersion"(value: StringJS)
set "baseVersion"(value: StringJS)
set "optional"(value: boolean)
get "artifactHandler"(): $ArtifactHandler
set "dependencyFilter"(value: $ArtifactFilter$$Type)
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "availableVersions"(): $List<($ArtifactVersion)>
get "dependencyConflictId"(): StringJS
get "dependencyFilter"(): $ArtifactFilter
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
 "getRepository"(): $ArtifactRepository
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): StringJS
 "isSelectedVersionKnown"(): boolean
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "getDependencyTrail"(): $List<(StringJS)>
 "getClassifier"(): StringJS
 "getArtifactId"(): StringJS
 "getSelectedVersion"(): $ArtifactVersion
 "isSnapshot"(): boolean
 "setVersion"(arg0: StringJS): void
 "getVersionRange"(): $VersionRange
 "setScope"(arg0: StringJS): void
 "isOptional"(): boolean
 "setGroupId"(arg0: StringJS): void
 "isRelease"(): boolean
 "setArtifactId"(arg0: StringJS): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "getBaseVersion"(): StringJS
 "selectVersion"(arg0: StringJS): void
 "setResolved"(arg0: boolean): void
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "hasClassifier"(): boolean
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "setDownloadUrl"(arg0: StringJS): void
 "getDownloadUrl"(): StringJS
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "setResolvedVersion"(arg0: StringJS): void
 "setBaseVersion"(arg0: StringJS): void
 "setOptional"(arg0: boolean): void
 "getArtifactHandler"(): $ArtifactHandler
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "getDependencyConflictId"(): StringJS
 "getDependencyFilter"(): $ArtifactFilter
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
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "getRecommendedVersion"(): $ArtifactVersion
public static "createFromVersionSpec"(arg0: StringJS): $VersionRange
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "getRestrictions"(): $List<($Restriction)>
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "hasRestrictions"(): boolean
public static "createFromVersion"(arg0: StringJS): $VersionRange
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
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
