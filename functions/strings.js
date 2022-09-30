function setupStringProto() {
    String.prototype.toCamelCase = function () {
        return this
            .replace(/\s(.)/g, function ($1) {
                return $1.toUpperCase();
            })
            .replace(/\s/g, '')
            .replace(/^(.)/, function ($1) {
                return $1.toLowerCase();
            });
    }
    String.prototype.toPascalCase = function () {
        return this
            .toLowerCase()
            .replace(/\s(.)/g, function ($1) {
                return $1.toUpperCase();
            })
            .replace(/\s/g, '')
            .replace(/^(.)/, function ($1) {
                return $1.toUpperCase();
            });
    }
    String.prototype.toKebabCase = function () {
        return this
            .replace(/\s/g, '-')
            .toLowerCase();
    }
}
/**
 * @param {Number} length
 * @param {{
 *     lowerCaseChars: boolean,
 *     upperCaseChars: boolean,
 *     numbers: boolean,
 *     symbols: boolean,
 *     allowedSymbols: string,
 * }} options
 * @return {string}
 */
function randomString(length, options = {
    lowerCaseChars: true,
    upperCaseChars: true,
    numbers: false,
    symbols: false,
    allowedSymbols: '@#$%^?&.,\'";:+-*/',
}) {
    let a = '';
    const n = length;
    if (options.upperCaseChars) {
        a += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (options.lowerCaseChars) {
        a += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (options.numbers) {
        a += '0123456789';
    }
    if (options.symbols) {
        a += options.allowedSymbols || '@#$%^?&.,\'";:+-*/';
    }
    let r = '';
    for (let i = 0; i < n; i++) {
        r += a[Math.floor(Math.random() * a.length)];
    }
    return r;
}

module.exports = {
    setupStringProto,
    randomString,
}
