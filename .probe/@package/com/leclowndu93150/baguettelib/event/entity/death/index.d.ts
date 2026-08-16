import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/leclowndu93150/baguettelib/event/entity/death" {
    export class $LivingDeathEvent$Pre extends $LivingDeathEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
    }
    export class $LivingDeathEvent extends $Event {
        getSource(): $DamageSource;
        getEntity(): $LivingEntity;
        get source(): $DamageSource;
        get entity(): $LivingEntity;
    }
    export class $PlayerDeathEvent extends $LivingDeathEvent {
        getPlayer(): $Player;
        get player(): $Player;
    }
    export class $LivingDeathEvent$Post extends $LivingDeathEvent {
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
    }
    export class $PlayerDeathEvent$Post extends $PlayerDeathEvent {
        constructor(arg0: $Player, arg1: $DamageSource_);
    }
    export class $PlayerDeathEvent$Pre extends $PlayerDeathEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $DamageSource_);
    }
}
