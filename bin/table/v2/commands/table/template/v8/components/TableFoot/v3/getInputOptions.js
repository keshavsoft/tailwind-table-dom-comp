const getInputOptions = ({ inElement }) => {
    const localName =
        inElement.ksName || "";

    return {
        inType: inElement.ksType || "text",
        inPlaceholder: inElement.ksPlaceholder || "",
        inName: localName,
        inClassName: inElement.ksClassName ||
            "w-full border rounded px-2 py-1",
        inShowDataList: inElement.ksShowDataList,
        inColumnsConfig: inElement.ksInColumnsConfig || [],
        inOnChangeFunc: inElement.ksOnChangeFunc,
        inOnChangeType: inElement.ksOnChangeType,
        inOnKeyDown: inElement.ksOnKeyDown,
        inOnKeyDownType: inElement.ksOnKeyDownType,
        inRightAlign: inElement.ksRightAlign,
        inWidth: inElement.ksWidth
    };
};

export default getInputOptions;
