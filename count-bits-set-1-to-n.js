// totalSetBitsFrom1ToN(4)
// runtime: unknown




























function totalSetBitsFrom1ToN(n) {
    let totalSetBitCount = 0;
    for (let number = 1; number <= n; number++) {
        totalSetBitCount += number.toString(2).split('1').length - 1;
    }
    return totalSetBitCount;
}

console.log(totalSetBitsFrom1ToN(4));
console.log(totalSetBitsFrom1ToN(17));
console.log(totalSetBitsFrom1ToN(30));

// https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/