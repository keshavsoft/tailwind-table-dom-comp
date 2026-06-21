import { createFooterCell } from "./createFooterCell.js";

const startFunc = ({ keys, tr, options = {}, inDefaultRow, inTdClass,
    inShowDataList, onChangeFunc }) => {

    const defaultRow = inDefaultRow;

    keys.forEach(key => {
        const defaultValue = defaultRow[key];

        const createdFooterCell = createFooterCell({
            key,
            inDefaultValue: defaultValue,
            onChangeFunc,
            showDataList: inShowDataList,
            inColumnsConfig: options.inColumnsConfig,
            inTdClass
        });

        tr.appendChild(createdFooterCell);
    });
};

export { startFunc };
