declare module "net.neoforged.neoforgespi.IIssueReporting" {
import {$ModLoadingIssue, $ModLoadingIssue$$Type} from "net.neoforged.fml.ModLoadingIssue"

export interface $IIssueReporting$$Interface {

(arg0: $ModLoadingIssue): void
}

export class $IIssueReporting implements $IIssueReporting$$Interface {
 "addIssue"(arg0: $ModLoadingIssue$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIssueReporting$$Type = ((arg0: $ModLoadingIssue) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIssueReporting$$Original = $IIssueReporting;}
