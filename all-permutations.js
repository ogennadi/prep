// permutator([1, 2, 3])
// permutator: result, recursive fn `permute`, fn call

// permute(array, soln): base case, loop over array

// runtime: O(n!)









































const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                let m1 = m.concat(next);
                console.log(curr, m1)
                permute(curr, m1)
            }
        }
    }

    permute(inputArr)

    return result;
}

console.table(permutator([1, 2, 3]))

// https://stackoverflow.com/questions/9960908/permutations-in-javascript
