const addEllipsis = (textData, maxLength) => {
    const text = transformToText(textData.toString());
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

const transformToText = (textData) => {
    return textData.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

const contentfulJsonToHtmlText = (json) => {
    const text = json.content.reduce(
        (html, content) => {
            switch (content.nodeType) {
                case "heading-1":
                case "heading-2":
                case "heading-3":
                case "heading-4":
                    return (
                        html +
                        `<h2 class="text text-heading">${content.content[0].value}</h2>`
                    );
                case "paragraph":
                    return (
                        html +
                        `<h4 class="text">${content.content
                            .map((c) => {
                                let value = c.value;
                                if (c.marks && c.marks.find((mark) => mark.type === "bold")) {
                                    value = `<span class="text-heading">${value}</span>`;
                                }
                                if (c.data.uri) {
                                    value = `<a class="text-accent" href="${c.data.uri}">${c.content[0].value}</a>`;
                                }
                                return value;
                            })
                            .join("")}</h4>`
                    );
                case "unordered-list":
                    return (
                        html +
                        `<ul>${content.content
                            .map(
                                (c) =>
                                    `<li>
                                        <h4 class"text">
                                            ${c.content[0].content[0].value}
                                        </h4>
                                    </li>`
                            )
                            .join("")}</ul>`
                    );
                default:
                    return html;
            }
        },
        ""
    );

    return text;
}

export { addEllipsis, contentfulJsonToHtmlText };