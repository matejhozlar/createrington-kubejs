import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Path, $PathType_, $NodeEvaluator, $PathFinder } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        setCanPassDoors(avoidSun: boolean): void;
        setCanOpenDoors(avoidSun: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        setAvoidSun(avoidSun: boolean): void;
        hasValidPathType(pathType: $PathType_): boolean;
        setCanWalkOverFences(avoidSun: boolean): void;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
        set avoidSun(value: boolean);
        set canWalkOverFences(value: boolean);
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $PathNavigation {
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        trimPath(): void;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        getGroundY(vec: $Vec3_): number;
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        shouldRecomputePath(pos: $BlockPos_): boolean;
        setCanFloat(canSwim: boolean): void;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        /**
         * Returns a path to one of the given targets or null
         */
        createPath(targets: $Set_<$BlockPos_>, regionOffset: number, offsetUpward: boolean, accuracy: number): $Path;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        createPath(targets: $Set_<$BlockPos_>, regionOffset: number, offsetUpward: boolean, accuracy: number, followRange: number): $Path;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        /**
         * If on ground or swimming and can swim
         */
        canUpdatePath(): boolean;
        getTempMobPos(): $Vec3;
        createPathFinder(maxVisitedNodes: number): $PathFinder;
        getTargetPos(): $BlockPos;
        /**
         * Sets the active `Path` to `null`.
         */
        followThePath(): void;
        /**
         * Checks if entity haven't been moved when last checked and if so, stops the current navigation.
         */
        doStuckDetection(positionVec3: $Vec3_): void;
        /**
         * Checks if the specified entity can safely walk to the specified location.
         */
        canMoveDirectly(posVec31: $Vec3_, posVec32: $Vec3_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        canCutCorner(pathType: $PathType_): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        static isClearForMovementBetween(mob: $Mob, pos1: $Vec3_, pos2: $Vec3_, allowSwimming: boolean): boolean;
        isStableDestination(pos: $BlockPos_): boolean;
        getMaxDistanceToWaypoint(): number;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
        get done(): boolean;
        get stuck(): boolean;
        get tempMobPos(): $Vec3;
        get targetPos(): $BlockPos;
        get inProgress(): boolean;
        set maxVisitedNodesMultiplier(value: number);
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        setCanPassDoors(canOpenDoors: boolean): void;
        setCanOpenDoors(canOpenDoors: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level_);
    }
}
