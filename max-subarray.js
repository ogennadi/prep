function maxSubarray(a){
    var bestSum = Number.MIN_SAFE_INTEGER
    var currentSum = 0;
    var start, end, s = 0;

    for (let i = 0; i < a.length; i++) {
        currentSum += a[i];

        if(bestSum < currentSum){
            bestSum = currentSum;
            start = s;
            end = i;
        }

        if(currentSum < 0){
            currentSum = 0;
            s = i+1;
        }
    }

    console.log("max: ", bestSum, " start: ", start, " end: ", end);
}

maxSubarray([-2, -3, 4, -1, -2, 1, 5, -3]);


/*
a = [-2, -3, 4, -1, -2, 1, 5, -3]

i       m_s_f   m_e_h   start   end     s
-INF    0       0       0       0
0        -2      0       0       0       1
1        -2      0       0       0       2
2        4       4       2       2       2
3        4       3       2       2       2
4        4       1       2       2       2
5        4       2       2       2       2
6        7       7       2       6       2
7        7       4       2       6       2
Maximum contiguous sum is 7
Starting index 2
Ending index 6
*/
