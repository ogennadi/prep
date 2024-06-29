function minCoinChange(coins, amount) {
    const cache = [];

    const makeChange = (value) => {
        if (!value) return [];
        if (cache[value]) return cache[value];

        let min = [];
        let newMin;
        let newAmount;

        for (const coin of coins){
            newAmount = value - coin;

            if(newAmount >= 0) {
                newMin = makeChange(newAmount);
            }

            if ( (newMin.length < min.length - 1) || !min.length ){
                min = [coin].concat(newMin)
            }
        }

        cache[value] = min;
        return min;
    }

    console.log( makeChange(amount) );
}

minCoinChange([1 ,6 ,10, 25], 37)

// main: cache, recursive fn, fn call
// recursive fn: base cases, 3 vars, loop, update cache
// loop: update var, 2 ifs