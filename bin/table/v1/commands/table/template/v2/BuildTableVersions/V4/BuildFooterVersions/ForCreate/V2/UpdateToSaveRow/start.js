const startFunc_old = ({ inColumnsConfig, inFindRow, inToSaveRow }) => {
    const localDataListColumns = inColumnsConfig.filter((element) => {
        return "dataListColumn" in element;
    });

    for (const [key, value] of Object.entries(inFindRow)) {
        const localFindDataListItem = localDataListColumns.find((element) => {
            return element.dataListColumn === key;
        });

        if (localFindDataListItem === undefined) continue;

        inToSaveRow[localFindDataListItem.columnName] = value;
    };
};

const startFunc = ({ inColumnsConfig, inFindRow, inToSaveRow }) => {
    // debugger;
    for (const [key, value] of Object.entries(inToSaveRow)) {
        if (key in inFindRow) {
            inToSaveRow[key] = inFindRow[key];
        };
    };
};

export { startFunc };