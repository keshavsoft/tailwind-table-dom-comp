import { initShowTable }
    from "../bin/table/v1/commands/table/template/v3/entry.js";

(async () => {
    window.KSTableCompVersion = "v1.3";

    window.KSTableComp = {};

    window.KSTableComp.initShowTable = initShowTable;
})();