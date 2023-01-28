const addEllipsis = (text, maxLength) => {
    if (text.length < maxLength) {
        return text;
    }
    let newStr = text.slice(0, maxLength);
    const lastSpaceIndex = newStr.lastIndexOf(" ");

    if (lastSpaceIndex !== -1) {
        newStr = newStr.slice(0, lastSpaceIndex);
    }

    return newStr.concat(" ...");
}

export { addEllipsis };