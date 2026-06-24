const createInput = ({
    inType = "text",
    key, inDataStore,
    className, inputClassName,
    inOnKeyDown, inColumnsConfig, inOnChangeType,
    inOnKeyDownType, showDataList, onChangeFunc, inRightAlign,
    inWidth, inDataListSource, inDataListFillName
} = {}) => {

    let input;

    if (inType === "number") {
        input = document.createElement("ks-table-footer-input");
    } else {
        input = document.createElement("ks-table-footer-input-dl");
    };

    input.ksType = inType;
    input.ksPlaceholder = key;
    input.ksName = key;
    input.ksClassName = className;

    input.ksInputClassName = inputClassName;

    input.ksOnKeyDown = inOnKeyDown;
    // input.ksOnKeyDownType = inOnKeyDownType;
    input.ksShowDataList = showDataList;
    input.ksInColumnsConfig = inColumnsConfig;

    // input.ksOnChangeFunc = onChangeFunc;
    input.ksOnChangeType = inOnChangeType;

    input.ksRightAlign = inRightAlign;
    input.ksWidth = inWidth;
    input.dataStore = inDataStore;

    input.setAttribute("ksDataListSource", inDataListSource);
    input.setAttribute("ksDataListFillName", inDataListFillName);
    input.setAttribute("ksOnKeyDownType", inOnKeyDownType);

    return input;
};

export default createInput;
