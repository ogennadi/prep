// nqueens(4, 4): [[]]
// base case and call

// addQueen(newRow, cols): bool
//2 vars, if in a loop in a loop, return

// hasConflict(newRow, newColumn, solution)
// if in a loop, then return.

// Runtime: O(n!)













































function nqueens(rows, columns) {
    if (rows <= 0){
        return [[]]
    }else{
        return addQueen(rows-1, columns)
    }
}

function addQueen(row, columns){
    var solutions = []
    var prev = nqueens(row, columns)
    for (var soln of prev) {
        for(var column = 0; column < columns; column++){
            if(!hasConflict(row, column, soln)){
                solutions.push(soln.concat([column]))
            }
        }
    }
    return solutions;
}

function hasConflict(row, column, solution){
    for(var i = 0; i < row; i++){
        if(solution[i]   === column ||
           solution[i]+i === column + row ||
           solution[i]-i === column - row){
            return true
        }
    }
    return false;
}

console.table(nqueens(4, 4))

// https://rosettacode.org/wiki/N-queens_problem#JavaScript