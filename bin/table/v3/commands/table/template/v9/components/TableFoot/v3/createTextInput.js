const createTextInput = ({
    inType,
    inPlaceholder,
    inName,
    inClassName
}) => {
    const localInput =
        document.createElement("input");

    localInput.type = inType;
    localInput.placeholder = inPlaceholder;
    localInput.name = inName;
    localInput.setAttribute("class", inClassName);

    return localInput;
};

export default createTextInput;
