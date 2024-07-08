function knapSack(W , wt , val , n)
{
    var cache = Array(W + 1).fill(0);

    for (i = 0; i < n; i++) {
        for (currW = W; currW >= 0; currW--) {
            if (wt[i] <= currW)
                cache[currW] = Math.max(cache[currW], cache[currW - wt[i]] + val[i]);
        }
        console.log(cache)
    }

    return cache[W];
}

// Driver code
var values  = [ 3, 4, 5 ];
var weights = [ 2, 3, 4 ];
var W = 5;
var n = values.length;
console.log(knapSack(W, weights, values, n));

// https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/