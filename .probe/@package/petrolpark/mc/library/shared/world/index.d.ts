import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockStateAndEntity, $Conversion$RegisterConversionEvent } from "@package/petrolpark/mc/library/util";

declare module "@package/petrolpark/mc/library/shared/world" {
    export class $GoldConversion$RegisterGoldBlockConversionEvent extends $Conversion$RegisterConversionEvent<$Block> {
    }
    export class $GoldConversion$RegisterGoldItemStackConversionEvent extends $Conversion$RegisterConversionEvent<$ItemStack> {
    }
    export class $GoldConversion$RegisterGoldEntityConversionEvent extends $Conversion$RegisterConversionEvent<$Entity> {
    }
    export class $GoldConversion$RegisterGoldItemConversionEvent extends $Conversion$RegisterConversionEvent<$Item> {
    }
    export class $GoldConversion$RegisterGoldBlockStateConversionEvent extends $Conversion$RegisterConversionEvent<$BlockStateAndEntity> {
    }
}
