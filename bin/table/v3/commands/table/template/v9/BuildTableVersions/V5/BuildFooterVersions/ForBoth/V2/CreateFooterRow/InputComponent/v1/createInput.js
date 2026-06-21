const createInput = ({
    inType = "text",
    key,
    className, inputClassName,
    inOnKeyDown, inColumnsConfig, inOnChangeType,
    inOnKeyDownType, showDataList, onChangeFunc, inRightAlign,
    inWidth
} = {}) => {
    const input = document.createElement("ks-table-footer-input");

    input.ksType = inType;
    input.ksPlaceholder = key;
    input.ksName = key;
    input.ksClassName = className;

    input.ksInputClassName = inputClassName;
    
    input.ksOnKeyDown = inOnKeyDown;
    input.ksOnKeyDownType = inOnKeyDownType;
    input.ksShowDataList = showDataList;
    input.ksInColumnsConfig = inColumnsConfig;

    input.ksOnChangeFunc = onChangeFunc;
    input.ksOnChangeType = inOnChangeType;

    input.ksRightAlign = inRightAlign;
    input.ksWidth = inWidth;

    return input;
};

export default createInput;
