import {$MobEffectUtil} from "dev.latvian.mods.kubejs.util.MobEffectUtil"
import {$Stats} from "net.minecraft.stats.Stats"
import {$StringUtilsWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.StringUtilsWrapper"
import {$FluidAmounts} from "dev.latvian.mods.kubejs.util.FluidAmounts"
import {$ID} from "dev.latvian.mods.kubejs.util.ID"
import {$UtilsWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.UtilsWrapper"
import {$Vector3f} from "org.joml.Vector3f"
import {$SizedIngredientWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.SizedIngredientWrapper"
import {$NBTWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.NBTWrapper"
import {$ItemWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.ItemWrapper"
import {$FuelType} from "com.lightning.northstar.contraption.FuelType"
import {$Types} from "moe.wolfgirl.probejs.lang.typescript.code.type.Types"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$IngredientWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.IngredientWrapper"
import {$Items} from "net.minecraft.world.item.Items"
import {$JsonUtils} from "dev.latvian.mods.kubejs.util.JsonUtils"
import {$ImmutableCollections$MapN} from "java.util.ImmutableCollections$MapN"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Vector4f} from "org.joml.Vector4f"
import {$Duration} from "java.time.Duration"
import {$RotationAxis} from "dev.latvian.mods.kubejs.util.RotationAxis"
import {$JavaWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.JavaWrapper"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$TextWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.TextWrapper"
import {$BlockStateProperties} from "net.minecraft.world.level.block.state.properties.BlockStateProperties"
import {$ConsoleJS} from "dev.latvian.mods.kubejs.script.ConsoleJS"
import {$FluidWrapper} from "dev.latvian.mods.kubejs.fluid.FluidWrapper"
import {$ColorWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.ColorWrapper"
import {$JsonIO} from "dev.latvian.mods.kubejs.util.JsonIO"
import {$ParticleOptionsWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.ParticleOptionsWrapper"
import {$BlockWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.BlockWrapper"
import {$DataMapWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.DataMapWrapper"
import {$UUIDWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.UUIDWrapper"
import {$AABBWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.AABBWrapper"
import {$BlockStatePredicate} from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import {$Matrix4f} from "org.joml.Matrix4f"
import {$Math} from "java.lang.Math"
import {$RegistryWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.RegistryWrapper"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$TextIcons} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.TextIcons"
import {$NBTIOWrapper} from "dev.latvian.mods.kubejs.util.NBTIOWrapper"
import {$EntitySelectorWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.EntitySelectorWrapper"
import {$DirectionWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.DirectionWrapper"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$Long} from "java.lang.Long"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$NotificationToastData} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$PlatformWrapper} from "dev.latvian.mods.kubejs.script.PlatformWrapper"
import {$Probe} from "moe.wolfgirl.probejs.plugin.Probe"
import {$Blocks} from "net.minecraft.world.level.block.Blocks"
import {$HashMap} from "java.util.HashMap"
import {$Matrix3f} from "org.joml.Matrix3f"
import {$NativeEventWrapper} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.NativeEventWrapper"
import {$KMath} from "dev.latvian.mods.kubejs.plugin.builtin.wrapper.KMath"

declare global {
const Types: typeof $Types
const Facing: typeof $DirectionWrapper
const GLFWInput: $ImmutableCollections$MapN
const ParticleOptions: typeof $ParticleOptionsWrapper
const Platform: typeof $PlatformWrapper
const RotationAxis: typeof $RotationAxis
const FuelType: typeof $FuelType
const DataMap: typeof $DataMapWrapper
const TextIcons: typeof $TextIcons
const Item: typeof $ItemWrapper
const Items: typeof $Items
const MINUTE: $Long
const BlockPos: typeof $BlockPos
const ID: typeof $ID
const UUID: typeof $UUIDWrapper
const Client: $Minecraft
const ProbeJS: $Probe
const NativeEvents: typeof $NativeEventWrapper
const SoundType: typeof $SoundType
const MobEffectUtil: typeof $MobEffectUtil
const NBT: typeof $NBTWrapper
const Fluid: typeof $FluidWrapper
const Color: typeof $ColorWrapper
const Duration: typeof $Duration
const NBTIO: typeof $NBTIOWrapper
const Matrix4f: typeof $Matrix4f
const KMath: typeof $KMath
const Stats: typeof $Stats
const Block: typeof $BlockWrapper
const JavaMath: typeof $Math
const HOUR: $Long
const global: $HashMap
const Direction: typeof $DirectionWrapper
const Vec4f: typeof $Vector4f
const Notification: typeof $NotificationToastData
const JsonUtils: typeof $JsonUtils
const Matrix3f: typeof $Matrix3f
const StringUtils: typeof $StringUtilsWrapper
const BlockProperties: typeof $BlockStateProperties
const Component: typeof $TextWrapper
const console: $ConsoleJS
const Java: typeof $JavaWrapper
const JsonIO: typeof $JsonIO
const Vec3i: typeof $Vec3i
const EntitySelector: typeof $EntitySelectorWrapper
const Blocks: typeof $Blocks
const DamageSource: typeof $DamageSource
const SizedIngredient: typeof $SizedIngredientWrapper
const Quaternionf: typeof $Quaternionf
const Text: typeof $TextWrapper
const Registry: typeof $RegistryWrapper
const Vec3f: typeof $Vector3f
const Vec3d: typeof $Vec3
const Utils: typeof $UtilsWrapper
const Ingredient: typeof $IngredientWrapper
const SECOND: $Long
const BlockStatePredicate: typeof $BlockStatePredicate
const AABB: typeof $AABBWrapper
const FluidAmounts: typeof $FluidAmounts
}