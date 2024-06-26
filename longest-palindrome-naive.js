function longestPalSubstr(str)
{
    let n = str.length;

    // All subStrings of length 1 are palindromes
    let maxLength = 1, start = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            console.log(i, j);
            let flag = 1;

            // Check if NOT palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;

            // If longest palindrome
            if (flag!=0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }

    console.log("Longest palindrome substring is: ");
    console.log(str.substring(start, start + maxLength - 1 + 1));

    return maxLength;
}

// Driver Code
let str = "12213443";
console.log("Length is: "  + longestPalSubstr(str));
// Longest palindrome substring is:
// 1221
// Length is: 4