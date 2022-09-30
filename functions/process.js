/**
 * @param {Number} millis
 * @return {Promise<void>}
 */
function delay(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

module.exports = {
    delay,
}
