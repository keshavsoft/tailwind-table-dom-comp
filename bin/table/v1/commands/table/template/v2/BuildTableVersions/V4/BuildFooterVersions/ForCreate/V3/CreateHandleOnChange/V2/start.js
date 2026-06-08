import { startFunc as updateToSaveRow } from "../../UpdateToSaveRow/start.js";

const startFunc = ({
    inDataStore,
    inColumnsConfig,
    inToSaveRow,
    inCurrentTarget
}) => {
    onDataListChange({
        inCurrentTarget, inDataStore,
        inColumnsConfig,
        inToSaveRow
    });

    // return localFunction;
};

const onDataListChange = ({ inCurrentTarget, inDataStore,
    inColumnsConfig,
    inToSaveRow
}) => {
    const localCurrentTarget = inCurrentTarget;
    const inputName = localCurrentTarget.name;

    const localCurrentValue = localCurrentTarget.value;

    const localFindRow = findRow({
        dataStoreName: inputName,
        inDataListSource: localCurrentTarget.dataset.dataListSource,
        inValueToFind: localCurrentValue,
        inDataStore
    });

    if (localFindRow === undefined) return;

    updateToSaveRow({
        inColumnsConfig,
        inFindRow: localFindRow,
        inToSaveRow
    });

    console.log("inToSaveRow : ", inToSaveRow);

};

const findRow = ({ dataStoreName, inDataListSource, inValueToFind, inDataStore }) => {
    const localDataListItems =
        inDataStore.getDataList(dataStoreName);

    const localDataListSource = inDataListSource;

    const localToFindColumn = localDataListSource.split(".")[1];

    const localFindRow = localDataListItems.find((element) => {
        return element[localToFindColumn] === inValueToFind;
    });

    return localFindRow;
};

export default startFunc;