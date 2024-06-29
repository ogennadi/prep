const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr, m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

console.table(permutator([1, 2, 3]))

// https://stackoverflow.com/questions/9960908/permutations-in-javascript

// main: var, recursive fn, fn call
// recursive fn: base case, loop