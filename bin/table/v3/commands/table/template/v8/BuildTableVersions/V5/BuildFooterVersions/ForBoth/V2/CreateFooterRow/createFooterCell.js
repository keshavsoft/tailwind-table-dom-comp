import inputComponent from "./InputComponent/v1/createInput.js";

const createFooterCell = ({ key, onChangeFunc, showDataList, inColumnsConfig,
    inDefaultValue, inTdClass = "px-4 py-2 border", inAllowOnChange = false, inOnChangeType,
    inOnKeyDown, inOnKeyDownType, inDefaultRow, inType, inRightAlign,
    inWidth, inputClassName }) => {

    let localChangeFunc;

    const td = document.createElement("td");
    td.className = inTdClass;

    if (inAllowOnChange) {
        localChangeFunc = onChangeFunc;
    };
    // console.log("hhhhhh : ", inputClassName);

    const input = inputComponent({
        key, onChangeFunc: localChangeFunc, inOnKeyDown, inOnKeyDownType,
        showDataList, inColumnsConfig, inDefaultValue, inOnChangeType,
        inDefaultRow, inType, inRightAlign, inWidth, inputClassName
    });

    const div = document.createElement("div");
    div.className = "calc-message";

    td.appendChild(input);
    td.appendChild(div);

    return td;
};

export { createFooterCell };