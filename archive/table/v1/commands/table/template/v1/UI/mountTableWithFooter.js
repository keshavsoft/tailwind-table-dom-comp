import buildHeader from "../BuildTableVersions/V4/BuildHeaderVersions/V4/index.js";

// import { buildBody } from "../BuildTableVersions/V4/BuildBodyVersions/V5/start.js";

import createForm from "../BuildSearchForm/V1/createForm.js";
import buildDataLists from "../BuildDataLists/V2/addToDom.js";

// import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForCreate/V3/start.js";
// import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForCreate/V5/start.js";

import SearchFuncs from "../TableFirstRow/V3/SearchFuncs/V4/index.js";
import setFocus from "../UI/SetFocus/V3/index.js";

import buildBody from "../BuildTableVersions/V4/BuildBodyVersions/V6/start.js";

import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForBoth/V1/start.js";

import { buildFullUI } from "./compose/buildFullUI.js";

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
    inConfig
}) => {
    // debugger

    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const searchableColumnsConfig = dataStore.getSearchableColumnsConfig();

    const data = dataStore.getData();
    const showSerial = options.table.showSerial;
    const serialWidth = options.table.serialWidth;
    const showDataList = options.table.showDataList;
    const optionsWidth = options.table.optionsWidth;

    const dataListColumns = dataStore.getDataListColumns();

    const showTotals = options.table.showTotals;
    const showBalance = options.table.showBalance;
    const showFilterVerticalForm = options.showFilterVerticalForm;
    const showSearch = options.firstRow.showSearch;
    const showTotalsForSearch = options?.table?.showTotalsForSearch;
    const showBalanceForSearch = options?.table?.showBalanceForSearch;
    const showFooterRows = options?.table?.showFooterRows;

    const defaultRow = dataStore.getDefaultRow();
    const showSave = options?.table?.showSave;
    const showActions = options?.table?.showActions;
    const showFooter = options?.table?.showFooter;

    // debugger;
    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch,
        inUiClasses: uiClasses
    });
    // debugger;
    const tableBody = dom.getTableBody(containerEl);
    // console.log("tableBody : ", tableBody);

    if (showFilterVerticalForm) {
        const searchForm = createForm({
            inVisibleColumnsConfig: visibleColumnsConfig,
            inSearchableColumnsConfig: searchableColumnsConfig,
            inServices: services,
            inConfig
        });

        containerEl.prepend(searchForm);
    };

    buildHeader({
        inContainerEl: containerEl,
        inDom: dom,
        inThClassName: uiClasses?.thead?.thClass,
        inTrClassName: uiClasses?.thead?.trClass,
        inThSerialClassName: uiClasses?.thead?.thSerialClass,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial,
        inSerialWidth: serialWidth,
        inShowActions: showActions || showSave,
        inOptionsWidth: optionsWidth
    });

    buildBody({
        inDataStore: dataStore,
        inContainerEl: containerEl,
        inDom: dom,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial,
        inShowActions: showActions,
        inServices: services,
        inEndPoints: endPoints,
        inConfig,
        inTableBody: tableBody,
        inData: data
    });

    if (showFooter) {
        buildFooter({
            inServices: services,
            inEndPoints: endPoints,
            inTableFooter: dom.getTableFooter(containerEl),
            inOptions: options,
            inVisibleColumnsConfig: visibleColumnsConfig,
            inData: data,
            inShowSerial: showSerial,
            inShowTotals: showTotals,
            inShowBalance: showBalance,
            inShowTotalsForSearch: showTotalsForSearch,
            inShowBalanceForSearch: showBalanceForSearch,
            inShowFooterRows: showFooterRows,
            inDefaultRow: defaultRow,
            keys: visibleColumns,
            inDom: dom,
            inShowDataList: showDataList,
            inDataStore: dataStore,
            inShowSave: showSave,
            inTableBody: tableBody,
            inShowActions: showActions
        });
    };

    if (showDataList) {
        buildDataLists({
            inContainerEl: containerEl,
            inDataStore: dataStore,
            inDom: dom,
            inData: data,
            inDataListColumns: dataListColumns
        });
    };

    if (showSearch) {
        // for search vertical
        SearchFuncs({ inContainerEl: containerEl });
    };

    setFocus({ inContainerEl: containerEl });
};

export default startFunc;