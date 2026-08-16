import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getPage(arg0: $CreativeModeTab_): number;
        getPageCount(): number;
        switchToNextPage(): boolean;
        hasAdditionalPages(): boolean;
        switchToPage(arg0: number): boolean;
        getCurrentPage(): number;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        getSelectedItemGroup(): $CreativeModeTab;
        switchToPreviousPage(): boolean;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        get pageCount(): number;
        get currentPage(): number;
    }
}
