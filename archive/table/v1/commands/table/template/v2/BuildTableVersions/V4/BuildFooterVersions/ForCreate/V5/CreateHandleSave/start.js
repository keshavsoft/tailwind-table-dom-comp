import { saveFooterRow } from "../saveFooterRow.js";

const startFunc = async ({ inServices, inEndPoints, inPayload, inDataStore, inTableBody,
    inVisibleColumnsConfig, inShowSerial, inShowActions, inCurrentTarget
}) => {

    await saveFooterRow({
        inServices, inEndPoints, inPayload, inDataStore, inTableBody,
        inVisibleColumnsConfig, inShowSerial, inShowActions, inCurrentTarget
    });
};

export { startFunc };