import { $LevelAccessor, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ISwitchDisabledEdge } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SignalBoundary, $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $TrackMaterial, $BezierConnection } from "@package/com/simibubi/create/content/trains/track";
import { $UUID, $List, $Map_, $UUID_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Vec3i } from "@package/net/minecraft/core";
import { $TrackObserver } from "@package/com/simibubi/create/content/trains/observer";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/graph" {
    export class $TrackEdge {
        getLength(): number;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $TrackNode, arg1: $TrackNode, arg2: $CompoundTag_, arg3: $TrackGraph, arg4: $DimensionPalette): $TrackEdge;
        getPosition(arg0: $TrackGraph, arg1: number): $Vec3;
        getEdgeData(): $EdgeData;
        canTravelTo(arg0: $TrackEdge): boolean;
        getTurn(): $BezierConnection;
        getTrackMaterial(): $TrackMaterial;
        getDirectionAt(arg0: number): $Vec3;
        incrementT(arg0: number, arg1: number): number;
        getNormal(arg0: $TrackGraph, arg1: number): $Vec3;
        getDirection(arg0: boolean): $Vec3;
        getIntersection(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: $TrackNode, arg4: $TrackNode): $Collection<number[]>;
        isTurn(): boolean;
        isInterDimensional(): boolean;
        getNormalSmoothed(arg0: $TrackGraph, arg1: number): $Vec3;
        getPositionSmoothed(arg0: $TrackGraph, arg1: number): $Vec3;
        node2: $TrackNode;
        node1: $TrackNode;
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $BezierConnection, arg3: $TrackMaterial);
        get length(): number;
        get edgeData(): $EdgeData;
        get trackMaterial(): $TrackMaterial;
        get interDimensional(): boolean;
    }
    export class $TrackGraph {
        isEmpty(): boolean;
        getBounds(arg0: $Level_): $TrackGraphBounds;
        write(arg0: $HolderLookup$Provider, arg1: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): $TrackGraph;
        transfer(arg0: $LevelAccessor, arg1: $TrackNode, arg2: $TrackGraph): void;
        getNode(arg0: number): $TrackNode;
        removeNode(arg0: $LevelAccessor, arg1: $TrackNodeLocation): boolean;
        getConnection(arg0: $Couple<$TrackNode>): $TrackEdge;
        getConnectionsFrom(arg0: $TrackNode): $Map<$TrackNode, $TrackEdge>;
        setNetId(arg0: number): void;
        getPoints<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>): $Collection<T>;
        tickPoints(arg0: boolean): void;
        locateNode(arg0: $Level_, arg1: $Vec3_): $TrackNode;
        locateNode(arg0: $TrackNodeLocation): $TrackNode;
        removePoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        setId(arg0: $UUID_): void;
        resolveIntersectingEdgeGroups(arg0: $Level_): void;
        findDisconnectedGraphs(arg0: $LevelAccessor, arg1: $Map_<number, $Pair<number, $UUID_>>): $Set<$TrackGraph>;
        addNode(arg0: $TrackNode): void;
        getChecksum(): number;
        getNodes(): $Set<$TrackNodeLocation>;
        putConnection(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge): boolean;
        addPoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: T): void;
        markDirty(): void;
        distanceToLocationSqr(arg0: $Level_, arg1: $Vec3_): number;
        getPoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        deferIntersectionUpdate(arg0: $TrackEdge): void;
        loadNode(arg0: $TrackNodeLocation, arg1: number, arg2: $Vec3_): void;
        disconnectNodes(arg0: $TrackNode, arg1: $TrackNode): void;
        addNodeIfAbsent(arg0: $TrackNode): boolean;
        transferAll(arg0: $TrackGraph): void;
        invalidateBounds(): void;
        createNodeIfAbsent(arg0: $TrackNodeLocation$DiscoveredLocation): boolean;
        connectNodes(arg0: $LevelAccessor, arg1: $TrackNodeLocation$DiscoveredLocation, arg2: $TrackNodeLocation$DiscoveredLocation, arg3: $BezierConnection): void;
        static nextGraphId(): number;
        static nextNodeId(): number;
        static graphNetIdGenerator: $AtomicInteger;
        static nodeNetIdGenerator: $AtomicInteger;
        color: $Color;
        id: $UUID;
        constructor();
        constructor(arg0: $UUID_);
        get empty(): boolean;
        set netId(value: number);
        get checksum(): number;
        get nodes(): $Set<$TrackNodeLocation>;
    }
    export class $TrackEdgeIntersection {
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrackEdgeIntersection;
        targets(arg0: $TrackNodeLocation, arg1: $TrackNodeLocation): boolean;
        isNear(arg0: number): boolean;
        groupId: $UUID;
        location: number;
        id: $UUID;
        targetLocation: number;
        target: $Couple<$TrackNodeLocation>;
        constructor();
    }
    export class $EdgePointType<T extends $TrackEdgePoint> {
        static register<T extends $TrackEdgePoint>(arg0: $ResourceLocation_, arg1: $Supplier_<T>): $EdgePointType<T>;
        static read(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): $TrackEdgePoint;
        getId(): $ResourceLocation;
        create(): T;
        static TYPES: $Map<$ResourceLocation, $EdgePointType<never>>;
        static SIGNAL: $EdgePointType<$SignalBoundary>;
        static STATION: $EdgePointType<$GlobalStation>;
        static OBSERVER: $EdgePointType<$TrackObserver>;
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<T>);
        get id(): $ResourceLocation;
    }
    export class $DiscoveredPath {
        path: $List<$Couple<$TrackNode>>;
        cost: number;
        distance: number;
        destination: $GlobalStation;
        constructor(arg0: number, arg1: number, arg2: $List_<$Couple<$TrackNode>>, arg3: $GlobalStation);
    }
    export class $TrackGraphBounds {
        beziers: $List<$BezierConnection>;
        box: $AABB;
        constructor(arg0: $TrackGraph, arg1: $ResourceKey_<$Level>);
    }
    export class $DimensionPalette {
        decode(arg0: number): $ResourceKey<$Level>;
        encode(arg0: $ResourceKey_<$Level>): number;
        write(arg0: $CompoundTag_): void;
        static read(arg0: $CompoundTag_): $DimensionPalette;
        send(arg0: $FriendlyByteBuf): void;
        static receive(arg0: $FriendlyByteBuf): $DimensionPalette;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DimensionPalette>;
        constructor();
        constructor(arg0: $List_<$ResourceKey_<$Level>>);
    }
    export class $TrackNode {
        getLocation(): $TrackNodeLocation;
        getNetId(): number;
        getNormal(): $Vec3;
        constructor(arg0: $TrackNodeLocation, arg1: number, arg2: $Vec3_);
        get location(): $TrackNodeLocation;
        get netId(): number;
        get normal(): $Vec3;
    }
    export class $TrackGraphLocation {
        edge: $Couple<$TrackNodeLocation>;
        position: number;
        graph: $TrackGraph;
        constructor();
    }
    export class $EdgeData implements $ISwitchDisabledEdge {
        get<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: number): T;
        next(arg0: number): $TrackEdgePoint;
        next<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: number): T;
        isEnabled(): boolean;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackEdge, arg2: $TrackGraph, arg3: $DimensionPalette): $EdgeData;
        isAutomatic(): boolean;
        getPoints(): $List<$TrackEdgePoint>;
        removePoint(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        setAutomatic(arg0: boolean): void;
        setEnabled(arg0: boolean): void;
        hasPoints(): boolean;
        addPoint<T extends $TrackEdgePoint>(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        setSingleSignalGroup(arg0: $TrackGraph, arg1: $UUID_): void;
        getEffectiveEdgeGroupId(arg0: $TrackGraph): $UUID;
        getSingleSignalGroup(): $UUID;
        hasSignalBoundaries(): boolean;
        setAutomaticallySelected(): void;
        getAutomaticallySelectedPriority(): number;
        isAutomaticallySelected(): boolean;
        ackAutomaticSelection(): void;
        addIntersection(arg0: $TrackGraph, arg1: $UUID_, arg2: number, arg3: $TrackNode, arg4: $TrackNode, arg5: number): void;
        removeIntersection(arg0: $TrackGraph, arg1: $UUID_): void;
        getIntersections(): $List<$TrackEdgeIntersection>;
        getGroupAtPosition(arg0: $TrackGraph, arg1: number): $UUID;
        hasIntersections(): boolean;
        refreshIntersectingSignalGroups(arg0: $TrackGraph): void;
        static passiveGroup: $UUID;
        constructor(arg0: $TrackEdge);
        get points(): $List<$TrackEdgePoint>;
        get automaticallySelectedPriority(): number;
        get intersections(): $List<$TrackEdgeIntersection>;
    }
    export class $TrackNodeLocation$DiscoveredLocation extends $TrackNodeLocation {
        getTurn(): $BezierConnection;
        withYOffset(arg0: number): $TrackNodeLocation$DiscoveredLocation;
        withDirection(arg0: $Vec3_): $TrackNodeLocation$DiscoveredLocation;
        materials(arg0: $TrackMaterial, arg1: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        getDirection(): $Vec3;
        withNormal(arg0: $Vec3_): $TrackNodeLocation$DiscoveredLocation;
        forceNode(): $TrackNodeLocation$DiscoveredLocation;
        materialA(arg0: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        materialB(arg0: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        viaTurn(arg0: $BezierConnection): $TrackNodeLocation$DiscoveredLocation;
        notInLineWith(arg0: $Vec3_): boolean;
        connectedViaTurn(): boolean;
        differentMaterials(): boolean;
        shouldForceNode(): boolean;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        yOffsetPixels: number;
        dimension: $ResourceKey<$Level>;
        constructor(arg0: $Level_, arg1: $Vec3_);
        constructor(arg0: $ResourceKey_<$Level>, arg1: $Vec3_);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        get turn(): $BezierConnection;
        get direction(): $Vec3;
    }
    export class $TrackNodeLocation extends $Vec3i {
        getLocation(): $Vec3;
        write(arg0: $DimensionPalette): $CompoundTag;
        "in"(arg0: $Level_): $TrackNodeLocation;
        "in"(arg0: $ResourceKey_<$Level>): $TrackNodeLocation;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrackNodeLocation;
        getDimension(): $ResourceKey<$Level>;
        send(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        allAdjacent(): $Collection<$BlockPos>;
        static receive(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): $TrackNodeLocation;
        equalsIgnoreDim(arg0: $Object): boolean;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        yOffsetPixels: number;
        dimension: $ResourceKey<$Level>;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $Vec3_);
        get location(): $Vec3;
    }
}
