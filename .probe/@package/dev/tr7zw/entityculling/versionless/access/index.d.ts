
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        isCulled(): boolean;
        setCulled(arg0: boolean): void;
        isForcedVisible(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isOutOfCamera(): boolean;
        setTimeout(): void;
        get forcedVisible(): boolean;
    }
}
