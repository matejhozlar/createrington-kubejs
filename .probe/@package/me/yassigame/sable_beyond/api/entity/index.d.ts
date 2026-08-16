import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/me/yassigame/sable_beyond/api/entity" {
    export class $SableBeyondEntityMassNbtAccess {
    }
    export interface $SableBeyondEntityMassNbtAccess {
        getMassNbt(): $CompoundTag;
        get massNbt(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $SableBeyondEntityMassNbtAccess}.
     */
    export type $SableBeyondEntityMassNbtAccess_ = (() => $CompoundTag_);
}
