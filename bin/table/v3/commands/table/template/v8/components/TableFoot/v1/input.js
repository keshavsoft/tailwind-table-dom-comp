import attachKeyDownEvent from "./AttachKeyDownEvent/v2/start.js";
import attachChangeEvent from "./attachChangeEvent.js";

class KsTableFooterInput extends HTMLElement {
    connectedCallback() {
        const onKeyDown = this.ksOnKeyDown;
        const onKeyDownType = this.ksOnKeyDownType;
        const name = this.ksName || "";
        const className = this.ksClassName || "w-full border rounded px-2 py-1";
        // const className = this.ksClassName || "border rounded px-2 py-1";

        const type = this.ksType;
        const placeholder = this.ksPlaceholder;
        const showDataList = this.ksShowDataList;
        const inColumnsConfig = this.ksInColumnsConfig;
        const onChangeFunc = this.ksOnChangeFunc;
        const onChangeType = this.ksOnChangeType;

        const rightAlign = this.ksRightAlign;
        const width = this.ksWidth;

        const input = document.createElement("input");


        const closestTd = this.closest("td");

        if (closestTd) {
            console.log("type : ", closestTd, rightAlign, width);
            closestTd.style.width = width;

            console.log("closestTd", closestTd);
            console.log("width", width);
            closestTd.style.width = width;
            console.log("after", closestTd.getAttribute("style"));

            if (rightAlign) {
                closestTd.classList.add("text-right");
            };
        };

        input.type = type;
        input.placeholder = placeholder;
        input.name = name;
        input.setAttribute("class", className);

        const findColumn = inColumnsConfig.find(
            element => element.columnName === name
        );

        if (showDataList && findColumn?.tableFooterDataListShow) {
            input.setAttribute("list", `${name}List`);
            input.dataset.dataListSource =
                findColumn.dataListSource;
        }

        attachKeyDownEvent({
            input, inOnKeyDown: onKeyDown,
            inOnKeyDownType: onKeyDownType
        });

        if (onChangeType) {
            attachChangeEvent({ input, onChangeFunc: onChangeFunc, onChangeType });
        };

        this.appendChild(input);
    }
}

customElements.define("ks-table-footer-input", KsTableFooterInput);

export default {};
