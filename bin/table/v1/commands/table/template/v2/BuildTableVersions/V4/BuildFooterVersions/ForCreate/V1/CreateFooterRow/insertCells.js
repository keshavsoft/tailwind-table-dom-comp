import { createFooterCell } from "./createFooterCell.js";

const startFunc = ({ keys, tr, options = {}, inDefaultRow, inTdClass,
    inShowDataList }) => {

    const defaultRow = inDefaultRow;
    // console.log("keys : ", keys);

    // debugger;
    keys.forEach(key => {
        const defaultValue = defaultRow[key];

        const createdFooterCell = createFooterCell({
            key,
            inDefaultValue: defaultValue,
            onChangeFunc: options.onChangeFunc,
            showDataList: inShowDataList,
            inColumnsConfig: options.inColumnsConfig,
            inTdClass
        });
        // debugger;
        tr.appendChild(createdFooterCell);

        // tr.appendChild(createFooterCell({
        //     key,
        //     inDefaultValue: defaultValue,
        //     onChangeFunc: options.onChangeFunc,
        //     showDataList: options.showDataList,
        //     inColumnsConfig: options.inColumnsConfig,
        //     inTdClass
        // }));
    });
};

export { startFunc };
