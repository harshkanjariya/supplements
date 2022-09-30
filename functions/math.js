function toBinary(num) {
    let arr = [];
    while (num > 0) {
        arr.push(num % 2 ? 1 : 0);
        num = num >> 1;
    }
    return arr.reverse().join('');
}

function setupNumberProto() {
    Number.prototype.toBinary = function () {
        return toBinary(this);
    }
}

module.exports = {
    setupNumberProto,
    toBinary,
}
