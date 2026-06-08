import { startFunc as insertRowCells } from "./insertCells.js";
import { appendFooterSaveCell } from "./appendFooterSaveCell.js";

const startFunc = ({ keys, options, inDefaultRow, inTdClass,
    inSerialClass, inShowSerial, inShowDataList, inShowSave = false,
    inOnSaveFunc, onChangeFunc
}) => {
    // debugger;
    const tr = document.createElement("tr");

    if (inShowSerial) tr.appendChild(getSerialColumn({ inSerialClass }));

    insertRowCells({
        keys, tr, options, inDefaultRow, inTdClass,
        inShowDataList, onChangeFunc
    });

    if (inShowSave) tr.appendChild(appendFooterSaveCell({ inOnSaveFunc }));

    return tr;
};

const getSerialColumn = ({ inSerialClass }) => {
    const thIndex = document.createElement("td");
    thIndex.className = inSerialClass;

    return thIndex
};

export { startFunc };
