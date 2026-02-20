import {$CreativeModeTab} from "moe.wolfgirl.probejs.generated.registry.minecraft.CreativeModeTab"
import {$ParticleType} from "moe.wolfgirl.probejs.generated.registry.minecraft.ParticleType"
import {$SoundEvent} from "moe.wolfgirl.probejs.generated.registry.minecraft.SoundEvent"
import {$Item} from "moe.wolfgirl.probejs.generated.registry.minecraft.Item"
import {$Fluid} from "moe.wolfgirl.probejs.generated.registry.minecraft.Fluid"
import {$Block} from "moe.wolfgirl.probejs.generated.registry.minecraft.Block"
import {$ArmorMaterial} from "moe.wolfgirl.probejs.generated.registry.minecraft.ArmorMaterial"
import {$MobEffect} from "moe.wolfgirl.probejs.generated.registry.minecraft.MobEffect"
import {$Attribute} from "moe.wolfgirl.probejs.generated.registry.minecraft.Attribute"
import {$VillagerProfession} from "moe.wolfgirl.probejs.generated.registry.minecraft.VillagerProfession"
import {$FluidType} from "moe.wolfgirl.probejs.generated.registry.neoforge.FluidType"
import {$Potion} from "moe.wolfgirl.probejs.generated.registry.minecraft.Potion"
import {$VillagerType} from "moe.wolfgirl.probejs.generated.registry.minecraft.VillagerType"
import {$PointOfInterestType} from "moe.wolfgirl.probejs.generated.registry.minecraft.PointOfInterestType"
import {$CustomStat} from "moe.wolfgirl.probejs.generated.registry.minecraft.CustomStat"

declare global {
export namespace StartupEvents {
function registry(type: "armor_material", handler: (event: $ArmorMaterial) => void): void
function registry(type: "item", handler: (event: $Item) => void): void
function registry(type: "fluid", handler: (event: $Fluid) => void): void
function registry(type: "custom_stat", handler: (event: $CustomStat) => void): void
function registry(type: "block", handler: (event: $Block) => void): void
function registry(type: "villager_type", handler: (event: $VillagerType) => void): void
function registry(type: "mob_effect", handler: (event: $MobEffect) => void): void
function registry(type: "point_of_interest_type", handler: (event: $PointOfInterestType) => void): void
function registry(type: "creative_mode_tab", handler: (event: $CreativeModeTab) => void): void
function registry(type: "potion", handler: (event: $Potion) => void): void
function registry(type: "neoforge:fluid_type", handler: (event: $FluidType) => void): void
function registry(type: "attribute", handler: (event: $Attribute) => void): void
function registry(type: "sound_event", handler: (event: $SoundEvent) => void): void
function registry(type: "villager_profession", handler: (event: $VillagerProfession) => void): void
function registry(type: "particle_type", handler: (event: $ParticleType) => void): void
}
}