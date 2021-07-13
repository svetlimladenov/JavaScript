/* eslint-disable max-len */

/**
 * Parser function, replacing custom tags with html tags
 * @param {String} selector String representing the html wrapper selector
 * @param {Jquery} $ The jQuery object
 */
const parse = function parse(selector, $) {
    const createRegularTag = function createNewString(index, string, symbol, closingTag, replaceString, isOpening) {
        const firstPart = string.slice(0, index);
        const secondPart = string.slice(index + symbol.length, string.length);
        const replaceTag = isOpening ? `<${replaceString}>` : `</${replaceString}>`;

        return `${firstPart}${replaceTag}${secondPart}`;
    };

    const createAnchorTag = function createAnchorTag(index, string, symbol, closingTag, replaceString, isOpening) {
        const firstPart = string.slice(0, index);
        const secondPart = string.slice(index + symbol.length, string.length);
        let linkText = "";
        let linkUrl = "";
        let afterAnchorTag = secondPart;
        if (isOpening) {
            const indexOfEndTag = secondPart.indexOf(closingTag);
            afterAnchorTag = secondPart.slice(indexOfEndTag, secondPart.length);
            if (indexOfEndTag > -1) {
                linkText = secondPart.slice(0, indexOfEndTag);
                linkUrl = linkText;
                const indexOfSeparator = linkText.indexOf("|");
                if (indexOfSeparator > -1) {
                    linkText = secondPart.slice(indexOfSeparator + 1, indexOfEndTag);
                    linkUrl = secondPart.slice(0, indexOfSeparator);
                }
            }
        }
        const replaceTag = isOpening ? `<${replaceString} href='${linkUrl}'> ${linkText}` : `</${replaceString}>`;

        return `${firstPart}${replaceTag}${afterAnchorTag}`;
    };

    function replace(line, openingSymbol, closingSymbol, replaceString, newStringAction) {
        let result = line;
        const index = line.indexOf(openingSymbol);
        if (index > -1) {
            const editedLine = newStringAction(index, line, openingSymbol, closingSymbol, replaceString, true);

            const closingIndex = editedLine.indexOf(closingSymbol);

            if (closingIndex > -1) {
                result = newStringAction(closingIndex, editedLine, openingSymbol, closingSymbol, replaceString, false);
                return replace(result, openingSymbol, closingSymbol, replaceString, newStringAction);
            }
        }

        return result;
    }

    const replaceTags = {
        bold: { tag: "b", openingString: "'''", closingString: "'''", newStringAction: createRegularTag },
        italic: { tag: "i", openingString: "''", closingString: "''", newStringAction: createRegularTag },
        heading3: { tag: "h3", openingString: "===", closingString: "===", newStringAction: createRegularTag },
        heading2: { tag: "h2", openingString: "==", closingString: "==", newStringAction: createRegularTag },
        heading1: { tag: "h1", openingString: "=", closingString: "=", newStringAction: createRegularTag },
        anchor: { tag: "a", openingString: "[[", closingString: "]]", newStringAction: createAnchorTag }
    };

    let result = $(`${selector}`).text().split("\n");
    Object.keys(replaceTags).forEach((key) => {
        const tag = replaceTags[key];
        result = result.map((x) => replace(x, tag.openingString, tag.closingString, tag.tag, tag.newStringAction));
    });

    result = result.map((line) => `<div>${line}</div>`);

    $(`${selector}`).html(result);
};
