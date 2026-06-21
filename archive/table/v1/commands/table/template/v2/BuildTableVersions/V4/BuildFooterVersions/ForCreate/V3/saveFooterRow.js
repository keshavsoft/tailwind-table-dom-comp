import { validateRow } from "./Utils/validateRow.js";
// import { afterMutation } from "../../../../afterMutation.js";
import { getFooterPayload } from "./getFooterPayload.js";
import { showErrors } from "./DomManipulation/showErrors.js";
import { clearErrors } from "./DomManipulation/clearErrors.js";
import { clearFooterInputs } from "./DomManipulation/clearFooterInputs.js";

import { buildBody } from "../../../BuildBodyVersions/V4/start.js";
// import afterMutation from "./AfterMutation/V1/index.js";
import afterMutation from "../../../AfterMutation/V3/index.js";

const saveFooterRow = async ({
    inDataStore,
    inDom,
    inServices,
    inEndPoints,
    inContainerEl,
    inOptions,
    inColumnsConfig,
    inVisibleColumnsConfig,
    inShowActions,
    inShowSerial,
    inShowTable,
    inToSaveRow,
    tableOptions,
    inPayload,
    inTableBody
}) => {
    try {
        // debugger
        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload: inPayload
        });

        afterMutation({
            inDataStore, inServices, inEndPoints,
            inTableBody, inVisibleColumnsConfig,
            inShowSerial, inShowActions
        });
    } catch (err) {
        console.error(err);
        return;
    };

    // clearFooterInputs(tr);

    // await afterMutation({
    //     inServices,
    //     inEndPoints,
    //     inDataStore,
    //     inContainerEl,
    //     inDom,
    //     inOptions,
    //     focusFn: focusFooter,
    //     inVisibleColumns,
    //     inShowActions,
    //     inShowSerial,
    //     inShowTable,
    //     onDelete: tableOptions.onDelete
    // });
};

const focusFooter = ({ inContainerEl }) => {
    const el = inContainerEl.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );
    el?.focus();
};

export { saveFooterRow };