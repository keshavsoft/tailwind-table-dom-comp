import { startFunc as createFooterRow } from "../CreateFooterRow/start.js";

const startFunc = ({
    inData,
    keys,
    inOnSaveFunc,
    onChangeFunc,
    inVisibleColumnsConfig,
    inDefaultRow,
    inShowSerial,
    inShowDataList,
    inShowSave
}) => {
    // debugger

    const localTr = createFooterRow({
        keys,
        options: {
            showSerial: false,
            showDataList: false,
            inColumnsConfig: inVisibleColumnsConfig,
            onChangeFunc
        },
        inDefaultRow,
        inTdClass: "px-4 py-2 border",
        inSerialClass: "",
        inShowSerial,
        inShowDataList,
        inShowSave,
        inOnSaveFunc
    });

    return localTr;
};

export { startFunc };