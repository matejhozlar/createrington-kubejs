import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityMass$MassResolution } from "@package/me/yassigame/sable_beyond/api/mass";

declare module "@package/me/yassigame/sable_beyond/neoforge/integration/kubejs/bindings" {
    export class $SableBeyondEntityMassJS {
        /**
         * Is entity has mass enabled
         * 
         * @param entity The entity to see if the mass is enabled
         */
        isMassAppliedEntity(entity: $Entity): boolean;
        /**
         * Get NBT key of sable beyond mass
         */
        getNbtKey(): string;
        /**
         * Set the Sable Beyond mass NBT override on an entity
         * 
         * @param entity The entity to write mass NBT on
         * @param mass The mass value to store
         */
        setMassNbt(entity: $Entity, mass: number): number;
        /**
         * Get the configured Sable Beyond living entity mass formula
         */
        getLivingEntityFormula(): string;
        /**
         * Get sable beyond volume multiplier
         */
        getVolumeMultiplier(): number;
        /**
         * Resolve the mass of an entity
         * 
         * @param entity The entity to resolve the mass from
         */
        resolveMass(entity: $Entity): number;
        /**
         * Resolve the mass info of an entity
         * 
         * @param entity The entity to resolve the mass info from
         */
        resolveMassInfo(entity: $Entity): $EntityMass$MassResolution;
        /**
         * Get sable beyond base mass
         */
        getBaseMass(): number;
        /**
         * Clear the Sable Beyond mass NBT override from an entity
         * 
         * @param entity The entity to clear mass NBT from
         */
        clearMassNbt(entity: $Entity): void;
        /**
         * Resolve a custom mass formula for any entity. Living entities and item entities get extra variables.
         * 
         * @param entity The entity used to build formula variables
         * @param formula The formula to evaluate
         */
        resolveCustomEntityFormula(entity: $Entity, formula: string): number;
        constructor();
        get nbtKey(): string;
        get livingEntityFormula(): string;
        get volumeMultiplier(): number;
        get baseMass(): number;
    }
}
