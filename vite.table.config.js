import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Get highest table version
const tableDir = path.join(__dirname, "bin", "table");
const tableVersions = fs.readdirSync(tableDir)
    .filter(n => /^v\d+$/.test(n))
    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
const maxTableVersion = tableVersions.at(-1);

if (!maxTableVersion) {
    throw new Error("No table version found in bin/table");
}

// 2. Get highest template version under that table version
const templateDir = path.join(tableDir, maxTableVersion, "commands", "table", "template");
const templateVersions = fs.readdirSync(templateDir)
    .filter(n => /^v\d+$/.test(n))
    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
const maxTemplateVersion = templateVersions.at(-1);

if (!maxTemplateVersion) {
    throw new Error(`No template version found in ${templateDir}`);
}

// Safety check: Prevent overwriting any existing non-empty directory in dist/ for this version
const distDir = path.join(__dirname, "dist");
const targetDistDir = path.join(distDir, maxTemplateVersion);

if (fs.existsSync(targetDistDir)) {
    const files = fs.readdirSync(targetDistDir);
    if (files.length > 0) {
        throw new Error(`\n\n[Conflict] Directory "dist/${maxTemplateVersion}" already exists and is not empty.\nAborting build to protect existing files in dist.\n\n`);
    }
}

// Ensure src directory exists
const srcDir = path.join(__dirname, "src");
if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
}

// 3. Write src/version.js
const versionFilePath = path.join(srcDir, "version.js");
const versionFileContent = `// src/version.js (automatically generated)
export const templateVersion = "${maxTemplateVersion}";
`;
fs.writeFileSync(versionFilePath, versionFileContent, "utf8");

// 4. Write src/table.js
const tableFilePath = path.join(srcDir, "table.js");
const tableFileContent = `import { initShowTable }
    from "../bin/table/${maxTableVersion}/commands/table/template/${maxTemplateVersion}/entry.js";

(async () => {
    window.KSTableCompVersion = "${maxTableVersion}.${maxTemplateVersion.slice(1)}";

    window.KSTableComp = {};

    window.KSTableComp.initShowTable = initShowTable;
})();
`;
fs.writeFileSync(tableFilePath, tableFileContent, "utf8");

export default {
    publicDir: false,
    build: {
        lib: {
            entry: "src/table.js",
            name: "KSTable",
            formats: ["umd"],
            fileName: () => `${maxTemplateVersion}/kstablecomp.js`
        },
        outDir: "dist",
        emptyOutDir: false
    }
};