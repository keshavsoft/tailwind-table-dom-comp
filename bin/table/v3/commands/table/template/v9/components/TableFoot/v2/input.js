import attachKeyDownEvent from "./AttachKeyDownEvent/v2/start.js";
import attachChangeEvent from "./attachChangeEvent.js";

const getInputOptions = ({ inElement }) => {
    const localName =
        inElement.ksName || "";

    return {
        inType: inElement.ksType || "text",
        inPlaceholder: inElement.ksPlaceholder || "",
        inName: localName,
        inClassName: inElement.ksClassName ||
            "w-full border rounded px-2 py-1",
        inShowDataList: inElement.ksShowDataList,
        inColumnsConfig: inElement.ksInColumnsConfig || [],
        inOnChangeFunc: inElement.ksOnChangeFunc,
        inOnChangeType: inElement.ksOnChangeType,
        inOnKeyDown: inElement.ksOnKeyDown,
        inOnKeyDownType: inElement.ksOnKeyDownType,
        inRightAlign: inElement.ksRightAlign,
        inWidth: inElement.ksWidth
    };
};

const applyTdStyle = ({
    inElement,
    inRightAlign,
    inWidth
}) => {
    const localClosestTd =
        inElement.closest("td");

    if (!localClosestTd) return;

    if (inWidth) {
        localClosestTd.style.width = inWidth;
    };

    if (inRightAlign) {
        localClosestTd.classList.add("text-right");
    };
};

const createInput = ({
    inType,
    inPlaceholder,
    inName,
    inClassName
}) => {
    const localInput =
        document.createElement("input");

    localInput.type = inType;
    localInput.placeholder = inPlaceholder;
    localInput.name = inName;
    localInput.setAttribute("class", inClassName);

    return localInput;
};

const getColumnConfig = ({
    inColumnsConfig,
    inName
}) => {
    return inColumnsConfig.find(
        localColumn => localColumn.columnName === inName
    );
};

const applyDataList = ({
    inInput,
    inName,
    inShowDataList,
    inColumnsConfig
}) => {
    const localColumnConfig =
        getColumnConfig({
            inColumnsConfig,
            inName
        });

    if (!inShowDataList) return;
    if (!localColumnConfig?.tableFooterDataListShow) return;

    inInput.setAttribute("list", `${inName}List`);
    inInput.dataset.dataListSource =
        localColumnConfig.dataListSource;
};

const attachEvents = ({
    inInput,
    inOnKeyDown,
    inOnKeyDownType,
    inOnChangeFunc,
    inOnChangeType
}) => {
    attachKeyDownEvent({
        input: inInput,
        inOnKeyDown,
        inOnKeyDownType
    });

    if (!inOnChangeType) return;

    attachChangeEvent({
        input: inInput,
        onChangeFunc: inOnChangeFunc,
        onChangeType: inOnChangeType
    });
};

const renderInput = ({
    inElement,
    inInput
}) => {
    inElement.replaceChildren(inInput);
};

class KsTableFooterInput extends HTMLElement {
    connectedCallback() {
        const localOptions =
            getInputOptions({
                inElement: this
            });

        applyTdStyle({
            inElement: this,
            inRightAlign: localOptions.inRightAlign,
            inWidth: localOptions.inWidth
        });

        const localInput =
            createInput(localOptions);

        applyDataList({
            inInput: localInput,
            inName: localOptions.inName,
            inShowDataList: localOptions.inShowDataList,
            inColumnsConfig: localOptions.inColumnsConfig
        });

        attachEvents({
            inInput: localInput,
            inOnKeyDown: localOptions.inOnKeyDown,
            inOnKeyDownType: localOptions.inOnKeyDownType,
            inOnChangeFunc: localOptions.inOnChangeFunc,
            inOnChangeType: localOptions.inOnChangeType
        });

        renderInput({
            inElement: this,
            inInput: localInput
        });
    }
}

if (!customElements.get("ks-table-footer-input")) {
    customElements.define("ks-table-footer-input", KsTableFooterInput);
}

export default KsTableFooterInput;
