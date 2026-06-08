import { KSAiTable } from "./ai.js";

// // entry.js
// export const initTable = async (cfg) => {
//     // debugger;
//     const table = new KSAiTable(cfg);
//     await table.init();   // ✅ THIS is missing
//     return table;
// };

// export const initVertical = async (cfg) => {
//     // debugger;
//     const table = new KSAiTable(cfg);
//     await table.initVertical();   // ✅ THIS is missing
//     return table;
// };

// export const initTableOnly = async (cfg) => {
//     // debugger;
//     const table = new KSAiTable(cfg);
//     await table.initTable();   // ✅ THIS is missing
//     return table;
// };

export const initShowTable = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.initShowTable();   // ✅ THIS is missing
    return table;
};

export const initCreate = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.initCreate();   // ✅ THIS is missing
    return table;
};

export const initTableWithFooter = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.initTableWithFooter();   // ✅ THIS is missing
    return table;
};

// v3.12