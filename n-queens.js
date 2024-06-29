function nqueens(rowsi, columns) {
    if (rowsi <= 0){
        return [[]]
    }else{
        return addQueen(rowsi-1, columns)
    }
}

function addQueen(newRow, cols){
    var solutions = []
    var prev = nqueens(newRow, cols)
    for (let i = 0; i < prev.length; i++) {
        var soln = prev[i];
        for(var newCol = 0; newCol < cols; newCol++){
            if(!hasConflict(newRow, newCol, soln)){
                solutions.push(soln.concat([newCol]))
            }
        }
    }
    return solutions;
}

function hasConflict(newRow, newColumn, solution){
    for(var i = 0; i < newRow; i++){
        if(solution[i] === newColumn ||
        solution[i]+i === newColumn + newRow ||
            solution[i]-i === newColumn - newRow){
            return true
        }
    }
    return false;
}

console.table(nqueens(4, 4))

// https://rosettacode.org/wiki/N-queens_problem#JavaScript