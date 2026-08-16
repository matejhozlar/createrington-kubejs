import { $Predicate_ } from "@package/java/util/function";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/world/entity/ai/targeting" {
    export class $TargetingConditions {
        test(attacker: $LivingEntity | null, target: $LivingEntity): boolean;
        copy(): $TargetingConditions;
        range(distance: number): $TargetingConditions;
        selector(customPredicate: $Predicate_<$LivingEntity> | null): $TargetingConditions;
        static forCombat(): $TargetingConditions;
        ignoreLineOfSight(): $TargetingConditions;
        static forNonCombat(): $TargetingConditions;
        ignoreInvisibilityTesting(): $TargetingConditions;
        static DEFAULT: $TargetingConditions;
    }
}
