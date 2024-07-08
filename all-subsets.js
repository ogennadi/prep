// Function to find the subsets of the given array
function findSubsets(nums, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                process.stdout.write(nums[j] + " ");
            }
        }
        console.log();
    }
}

// Driver Code
let arr = [1, 2, 3, 4];
let n = arr.length;
findSubsets(arr, n);

// https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/