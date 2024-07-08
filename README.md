## Find a solution to the N-queens problem
    nqueens(4, 4): [[]]
    base case and call addQueen
    
    addQueen(newRow, cols): bool
    var solution, var prevSolution, if in a loop in a loop, return
    
    hasConflict(newRow, newColumn, solution)
    if in a loop, then return.
Runtime: O(n!)

## Find the fewest coins to make change with
    minCoinChange([1 ,6 ,10, 25], 37)
    cache, recursive fn, fn call
    recursive fn: base cases, 3 vars, loop, update cache
    loop: update var, 2 ifs
runtime O(m * V)


## Find all permutations of an array
    permutator([1, 2, 3])
    permutator: result, recursive fn `permute`, fn call
    
    permute(array, soln): base case, loop over array
runtime: O(n!)

## Serialize a graph, breadth-first
    traverse(graph, 'a')
    3 vars, while loop on queue
    loop: pop stack, if
runtime: O(v+e)

## Serialize a graph, depth-first
    main: 3 vars, while loop on stack
    loop:  dequeue, if
runtime: O(n+m)

## Count the bits set
runtime: unknown

## Find the lowest common ancestor
    lca(root, p, q)
    if, 2 recursive calls, if, return
runtime: O(n)

## Find the longest palindrome in a string (Manacher's algorithm)
    longestPalSubstr("forgeeksskeegfor"));
    4 vars, loop
    loop: update vars, while loop, update vars, while loop
    while loop: if,  update vars
Runtime O(n)

## Find the maximum sub-array sum
    maxSubarray([-2, -3, 4, -1, -2, 1, 5, -3]);
    5 vars, loop
    loop: update var, 2 ifs
runtime: O(n)

## Find the maximum sub-array product
    3 vars, loop
Runtime: O(n)


## Find all occurrences of pattern in string
Runtime: unknown

## Find the missing number
Runtime: O(n)

## Are brackets in string balanced
    loop over string, 4 cases
Runtime: O(n)

## Find a longest repeating subsequence
    cache, 2 nested loops, if
Runtime: O(n^2)

## Find a longest common subsequence
    base case, recursive case, another base, another recursive
Runtime: O(n^2)

## Find all subsets of array
    2 nested loops, if
Runtime: O(2^n)

## Find a solution to fractional knapsack problem
Runtime: O(n * logn)

## Find a solution to 0/1 knapsack problem
    cache, 2 nested loops, if
Runtime: O(2^n)