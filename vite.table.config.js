import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/table.js",
            name: "KSTable",
            formats: ["umd"],
            fileName: () => `${templateVersion}/kstablecomp.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};