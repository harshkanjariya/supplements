/**
 * @param {Number} millis
 * @return {Promise<void>}
 */
function delay(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

/**
 * get line number
 * @return {number}
 */
function lineNumber() {
    const err = new Error();
    const stack = err.stack.split(/\r\n|\n/);
    let currentLine = stack[2];
    let p = currentLine.lastIndexOf(':');
    currentLine = currentLine.substring(0, p);
    p = currentLine.lastIndexOf(':');
    currentLine = currentLine.substring(p + 1);
    return parseInt(currentLine);
}

module.exports = {
    delay,
    lineNumber,
}
