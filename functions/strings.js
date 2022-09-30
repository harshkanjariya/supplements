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

module.exports = {
    setupStringProto,
}
