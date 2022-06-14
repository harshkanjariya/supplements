function toBinary(n) {
    let arr = [];
    while (n > 0) {
        arr.push(n % 2 ? 1 : 0);
        n = n >> 1;
    }
    return arr.reverse().join('');
}

module.exports = {
    toBinary,
}
