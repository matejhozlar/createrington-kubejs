import { $Collection } from "@package/java/util";
import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        mark(arg0: string): void;
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static setActive(arg0: boolean): void;
        static getProfiler(arg0: string): $Profiler;
        static printAuditSummary(): void;
        getSections(): $Collection<$Profiler$Section>;
        printSummary(): void;
        static getProfilers(): $Collection<$Profiler>;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
        static set active(value: boolean);
        get sections(): $Collection<$Profiler$Section>;
        static get profilers(): $Collection<$Profiler>;
    }
    export class $Profiler$Section {
        getName(): string;
        end(): $Profiler$Section;
        next(arg0: string): $Profiler$Section;
        getCount(): number;
        getTime(): number;
        getSeconds(): number;
        getTotalSeconds(): number;
        isRoot(): boolean;
        getInfo(): string;
        setInfo(arg0: string): void;
        isFine(): boolean;
        getTimes(): number[];
        getTotalAverageTime(): number;
        getBaseName(): string;
        getTotalCount(): number;
        getTotalTime(): number;
        getAverageTime(): number;
        get name(): string;
        get count(): number;
        get time(): number;
        get seconds(): number;
        get totalSeconds(): number;
        get root(): boolean;
        get fine(): boolean;
        get times(): number[];
        get totalAverageTime(): number;
        get baseName(): string;
        get totalCount(): number;
        get totalTime(): number;
        get averageTime(): number;
    }
}
