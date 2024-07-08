function allPermutations(array){
    var result = []

    function permute(array, solution){
        if(array.length == 0){
            result.push(solution)
        }else{
            for (let i = 0; i < array.length; i++) {
                let clone = array.slice();
                let next = clone.splice(i, 1)
                permute(clone, solution.concat(next))
            }
        }
    }

    permute(array, [])
    return result;
}

console.table(allPermutations([1, 2, 3]))

// https://stackoverflow.com/questions/9960908/permutations-in-javascript
