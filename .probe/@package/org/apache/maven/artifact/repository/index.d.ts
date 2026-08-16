import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        setEnabled(arg0: boolean): void;
        getChecksumPolicy(): string;
        setChecksumPolicy(arg0: string): void;
        checkOutOfDate(arg0: $Date): boolean;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        getPrivateKey(): string;
        setUsername(arg0: string): void;
        getPassword(): string;
        setPassword(arg0: string): void;
        getUsername(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getPassphrase(): string;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        setId(arg0: string): void;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getLayout(): $ArtifactRepositoryLayout;
        getUrl(): string;
        getProxy(): $Proxy;
        setBlocked(arg0: boolean): void;
        setProxy(arg0: $Proxy): void;
        isBlocked(): boolean;
        setUrl(arg0: string): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        getBasedir(): string;
        pathOf(arg0: $Artifact): string;
        findVersions(arg0: $Artifact): $List<string>;
        setAuthentication(arg0: $Authentication): void;
        getAuthentication(): $Authentication;
        isProjectAware(): boolean;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get basedir(): string;
        get projectAware(): boolean;
        get uniqueVersion(): boolean;
    }
}
