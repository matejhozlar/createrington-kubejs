import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $Supplier_ } from "@package/java/util/function";
import { $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/fr/iglee42/createcasing/kubejs/builders" {
    export class $TransmissionSetBuilder {
        item(arg0: $Supplier_<$Item>): $TransmissionSetBuilder;
        shaft(): $TransmissionSetBuilder;
        cogwheel(): $TransmissionSetBuilder;
        everything(arg0: $Supplier_<$Item>): $TransmissionSetBuilder;
        notEncasable(): $TransmissionSetBuilder;
        largeCogwheel(): $TransmissionSetBuilder;
        sourceLine: $SourceLine;
        constructor(arg0: string);
    }
    export class $CasingSetBuilder {
        mixer(arg0: $ResourceLocation_): $CasingSetBuilder;
        fluids(): $CasingSetBuilder;
        shaft(): $CasingSetBuilder;
        cogwheel(arg0: $Supplier_<$CTSpriteShiftEntry> | null, arg1: $Supplier_<$CTSpriteShiftEntry> | null): $CasingSetBuilder;
        deployer(): $CasingSetBuilder;
        harvester(): $CasingSetBuilder;
        slicer(): $CasingSetBuilder;
        fluidPipe(): $CasingSetBuilder;
        casing(): $CasingSetBuilder;
        clutch(): $CasingSetBuilder;
        gearbox(): $CasingSetBuilder;
        gearshift(): $CasingSetBuilder;
        saw(): $CasingSetBuilder;
        belt(arg0: $Supplier_<$SpriteShiftEntry>, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $CasingSetBuilder;
        drill(arg0: $ResourceLocation_): $CasingSetBuilder;
        press(): $CasingSetBuilder;
        ctSprite(arg0: $Supplier_<$CTSpriteShiftEntry>): $CasingSetBuilder;
        autoClutch(): $CasingSetBuilder;
        everything(arg0: $Supplier_<$CTSpriteShiftEntry>, arg1: $Supplier_<$SpriteShiftEntry>, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $Supplier_<$CTSpriteShiftEntry> | null, arg5: $Supplier_<$CTSpriteShiftEntry> | null, arg6: $Supplier_<$PartialModel>, arg7: $Supplier_<$PartialModel>, arg8: $Supplier_<$PartialModel>, arg9: $ResourceLocation_, arg10: $ResourceLocation_, arg11: $ResourceLocation_): $CasingSetBuilder;
        depot(): $CasingSetBuilder;
        chainDrive(): $CasingSetBuilder;
        chainConveyor(arg0: $Supplier_<$PartialModel>, arg1: $Supplier_<$PartialModel>, arg2: $Supplier_<$PartialModel>): $CasingSetBuilder;
        roller(arg0: $ResourceLocation_): $CasingSetBuilder;
        encasedFan(): $CasingSetBuilder;
        plough(): $CasingSetBuilder;
        configurableGearbox(): $CasingSetBuilder;
        encasedCustomTransmissionBlocks(): $CasingSetBuilder;
        everythingExceptCasing(arg0: $Supplier_<$CTSpriteShiftEntry>, arg1: $Supplier_<$SpriteShiftEntry>, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $Supplier_<$CTSpriteShiftEntry> | null, arg5: $Supplier_<$CTSpriteShiftEntry> | null, arg6: $Supplier_<$PartialModel>, arg7: $Supplier_<$PartialModel>, arg8: $Supplier_<$PartialModel>, arg9: $ResourceLocation_, arg10: $ResourceLocation_, arg11: $ResourceLocation_): $CasingSetBuilder;
        encasedCustomLargeCogwheel(): $CasingSetBuilder;
        encasedCustomCogwheel(): $CasingSetBuilder;
        complexTransmissionBlocks(arg0: $Supplier_<$PartialModel>, arg1: $Supplier_<$PartialModel>, arg2: $Supplier_<$PartialModel>): $CasingSetBuilder;
        simpleTransmissions(arg0: $Supplier_<$CTSpriteShiftEntry> | null, arg1: $Supplier_<$CTSpriteShiftEntry> | null): $CasingSetBuilder;
        portableStorageInterface(): $CasingSetBuilder;
        encasedCustomPipe(): $CasingSetBuilder;
        largeCogwheel(): $CasingSetBuilder;
        contraptionBlocks(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $CasingSetBuilder;
        existingCasing(arg0: $ResourceLocation_): $CasingSetBuilder;
        processingBlocks(arg0: $ResourceLocation_): $CasingSetBuilder;
        chainGearshift(): $CasingSetBuilder;
        encasedCustomShaft(): $CasingSetBuilder;
        sourceLine: $SourceLine;
        constructor(arg0: string);
    }
}
