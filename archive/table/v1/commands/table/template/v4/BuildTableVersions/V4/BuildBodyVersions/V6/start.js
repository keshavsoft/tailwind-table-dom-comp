import { buildRow } from "./buildRow.js";

const buildBody = ({ inShowSerial = false,
    inVisibleColumnsConfig, inShowActions,
    inTableBody, inData
}) => {
    const dataToShow = inData;
    const tableBody = inTableBody;

    tableBody.innerHTML = '';

    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial,
            inShowActions
        });

        tableBody.appendChild(row);
    });
};

export default buildBody;