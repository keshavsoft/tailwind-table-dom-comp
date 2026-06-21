import { buildFullUI } from "./compose/buildFullUI.js";

import buildHeader from "../BuildTableVersions/V4/BuildHeaderVersions/V4/index.js";

import buildBody from "../BuildTableVersions/V4/BuildBodyVersions/V6/start.js";
import searchFuncs from "../SearchFuncs/V4/index.js";
import setFocus from "../SetFocus/V4/index.js";
import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V9/CreateFooterRow/V3/start.js";

const startFunc = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks,
    inConfig,
    inShowFooter = false
}) => {
    debugger

    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const searchableColumnsConfig = dataStore.getSearchableColumnsConfig();

    const data = dataStore.getData();
    const showSerial = options.table.showSerial;
    const serialWidth = options.table.serialWidth;

    const dataListArray = dataStore.getDataList("AccountName");

    const dataListColumns = dataStore.getDataListColumns();

    const showTotals = options?.table?.showTotals;
    const showBalance = options?.table?.showBalance;
    const showFilterVerticalForm = options.showFilterVerticalForm;
    const showSearch = options.firstRow.showSearch;
    const showTotalsForSearch = options?.table?.showTotalsForSearch;
    const showBalanceForSearch = options?.table?.showBalanceForSearch;
    const showFooterRows = options?.table?.showFooterRows;

    const showActions = options?.table?.showActions;
    const showFooter = options?.table?.showFooter;
    const optionsWidth = options.table.optionsWidth;

    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch
    });

    buildHeader({
        inContainerEl: containerEl,
        inDom: dom,
        inThClassName: uiClasses?.thead?.thClass,
        inTrClassName: uiClasses?.thead?.trClass,
        inThSerialClassName: uiClasses?.thead?.thSerialClass,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial,
        inSerialWidth: serialWidth,
        inShowActions: showActions,
        inOptionsWidth: optionsWidth,
    });

    const tableBody = dom.getTableBody(containerEl);

    buildBody({
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial,
        inShowActions: showActions,
        inConfig,
        inTableBody: tableBody,
        inData: data
    });
    debugger;
    if (inShowFooter) {
        buildFooter({
            inTableFooter: dom.getTableFooter(containerEl),
            options,
            inVisibleColumnsConfig: visibleColumnsConfig,
            inData: data,
            inShowSerial: showSerial,
            inShowTotals: showTotals,
            inShowBalance: showBalance,
            inShowTotalsForSearch: showTotalsForSearch,
            inShowBalanceForSearch: showBalanceForSearch,
            inShowFooterRows: showFooterRows
        });
    };

    if (showSearch) {
        // for search vertical
        searchFuncs({ inContainerEl: containerEl });
    };

    setFocus({ inContainerEl: containerEl });
};

export default startFunc;

