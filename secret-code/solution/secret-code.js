const { JSDOM } = require('jsdom');

/**
 * Determines if a given string is a valid number.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a number, false otherwise.
 */
function isNumber(str) {
    return !isNaN(Number(str));
}

/**
 * Fetches the HTML content from the given URL.
 * @param {string} url - The URL to fetch the document from.
 * @returns {Promise<string>} The HTML content of the document.
 */
async function fetchDocument(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch document: ${response.statusText}`);
    }
    return response.text();
}

/**
 * Parses the HTML content into a DOM object.
 * @param {string} html - The HTML content.
 * @returns {Document} The DOM object representing the HTML.
 */
function parseHTMLToDOM(html) {
    const dom = new JSDOM(html);
    return dom.window.document;
}

/**
 * Extracts table rows from the DOM.
 * @param {Document} document - The DOM document.
 * @returns {Array} Array of table row elements.
 */
function extractTableRows(document) {
    const table = document.querySelector('table');
    if (!table) {
        throw new Error('No table found in the document');
    }
    return Array.from(table.querySelectorAll('tr'));
}

/**
 * Groups grid data by Y-coordinate and identifies the maximum X-coordinate.
 * @param {Array} rows - Array of table row elements.
 * @returns {Object} An object grouping data by Y-coordinate.
 */
function groupDataByY(rows) {
    const groupedY = {};
    rows.forEach((row) => {
        const cells = Array.from(row.querySelectorAll('td'));
        const x = cells[0].textContent.trim();
        const char = cells[1].textContent.trim();
        const y = cells[2].textContent.trim();

        if (isNumber(y)) {
            if (!groupedY[y]) {
                groupedY[y] = {
                    maxX: 1,
                    chars: {}
                };
            }
            groupedY[y].chars[x] = char;
            if (Number(x) > groupedY[y].maxX) {
                groupedY[y].maxX = Number(x);
            }
        }
    });
    return groupedY;
}

/**
 * Sorts grouped data by Y-coordinate.
 * @param {Object} groupedY - The grouped data.
 * @returns {Object} The sorted grouped data.
 */
function sortGroupedData(groupedY) {
    return Object.fromEntries(
        Object.entries(groupedY).sort(([keyA], [keyB]) => Number(keyA) - Number(keyB))
    );
}

/**
 * Prints the grid based on sorted data.
 * @param {Object} sortedGroup - The sorted grouped data.
 */
function printGrid(sortedGroup) {
    Object.entries(sortedGroup).forEach(([key, items]) => {
        let line = "";
        for (let i = 0; i <= items.maxX; i++) {
            line += items.chars[i] || " ";
        }
        console.log(line);
    });
}

/**
 * Main function to fetch, parse, process, and print the grid from a Google Doc.
 * @param {string} url - The URL of the Google Doc.
 */
async function printGridFromDoc(url) {
    try {
        const html = await fetchDocument(url);
        const document = parseHTMLToDOM(html);
        const rows = extractTableRows(document);
        const groupedY = groupDataByY(rows);
        const sortedGroup = sortGroupedData(groupedY);
        printGrid(sortedGroup);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}