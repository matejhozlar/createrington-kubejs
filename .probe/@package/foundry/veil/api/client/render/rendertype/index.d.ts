import { $RenderStateShard$TexturingStateShard, $RenderType$OutlineProperty, $RenderStateShard$LineStateShard, $RenderStateShard$OverlayStateShard, $RenderStateShard$CullStateShard, $RenderStateShard$TransparencyStateShard, $RenderType$OutlineProperty_, $RenderStateShard$EmptyTextureStateShard, $RenderType$CompositeState, $RenderStateShard$OutputStateShard, $RenderStateShard$ShaderStateShard, $RenderStateShard$WriteMaskStateShard, $RenderStateShard$DepthTestStateShard, $RenderStateShard, $RenderStateShard$LightmapStateShard, $RenderStateShard$ColorLogicStateShard, $RenderStateShard$LayeringStateShard } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
export * as layer from "@package/foundry/veil/api/client/render/rendertype/layer";

declare module "@package/foundry/veil/api/client/render/rendertype" {
    export class $VeilRenderTypeBuilder {
    }
    export interface $VeilRenderTypeBuilder {
        create(arg0: $RenderType$OutlineProperty_): $RenderType$CompositeState;
        create(arg0: boolean): $RenderType$CompositeState;
        colorLogicState(arg0: $RenderStateShard$ColorLogicStateShard): $VeilRenderTypeBuilder;
        writeMaskState(arg0: $RenderStateShard$WriteMaskStateShard): $VeilRenderTypeBuilder;
        depthTestState(arg0: $RenderStateShard$DepthTestStateShard): $VeilRenderTypeBuilder;
        texturingState(arg0: $RenderStateShard$TexturingStateShard): $VeilRenderTypeBuilder;
        lightmapState(arg0: $RenderStateShard$LightmapStateShard): $VeilRenderTypeBuilder;
        layeringState(arg0: $RenderStateShard$LayeringStateShard): $VeilRenderTypeBuilder;
        transparencyState(arg0: $RenderStateShard$TransparencyStateShard): $VeilRenderTypeBuilder;
        shaderState(arg0: $RenderStateShard$ShaderStateShard): $VeilRenderTypeBuilder;
        overlayState(arg0: $RenderStateShard$OverlayStateShard): $VeilRenderTypeBuilder;
        cullState(arg0: $RenderStateShard$CullStateShard): $VeilRenderTypeBuilder;
        textureState(arg0: $RenderStateShard$EmptyTextureStateShard): $VeilRenderTypeBuilder;
        outputState(arg0: $RenderStateShard$OutputStateShard): $VeilRenderTypeBuilder;
        lineState(arg0: $RenderStateShard$LineStateShard): $VeilRenderTypeBuilder;
        addLayer(arg0: $RenderStateShard): $VeilRenderTypeBuilder;
    }
    export class $VeilRenderTypeAccessor {
    }
    export interface $VeilRenderTypeAccessor {
        states(): $List<$RenderStateShard>;
        colorLogicState(): $RenderStateShard$ColorLogicStateShard;
        writeMaskState(): $RenderStateShard$WriteMaskStateShard;
        depthTestState(): $RenderStateShard$DepthTestStateShard;
        veilShaderId(): $ResourceLocation;
        texturingState(): $RenderStateShard$TexturingStateShard;
        lightmapState(): $RenderStateShard$LightmapStateShard;
        layeringState(): $RenderStateShard$LayeringStateShard;
        transparencyState(): $RenderStateShard$TransparencyStateShard;
        shaderState(): $RenderStateShard$ShaderStateShard;
        overlayState(): $RenderStateShard$OverlayStateShard;
        cullState(): $RenderStateShard$CullStateShard;
        textureState(): $RenderStateShard$EmptyTextureStateShard;
        outlineProperty(): $RenderType$OutlineProperty;
        outputState(): $RenderStateShard$OutputStateShard;
        lineState(): $RenderStateShard$LineStateShard;
    }
}
