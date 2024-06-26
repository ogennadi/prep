function longestPalSubstr(s) {
    const n = s.length;
    let start = 0, len = 1;
    let low, hi;

    for (let i = 0; i < n; i++) {
       // Find the longest palindromic substring of even size
        low = i - 1;
        hi = i;

        while (low >= 0 && hi < n && s[low] === s[hi]) {
            if (hi - low + 1 > len) {
                start = low;
                len = hi - low + 1;
            }
            low--;
            hi++;
        }

        // Find the longest palindromic substring of odd size
        low = i - 1;
        hi = i + 1;

        while (low >= 0 && hi < n && s[low] === s[hi]) {
            if (hi - low + 1 > len) {
                start = low;
                len = hi - low + 1;
            }
            low--;
            hi++;
        }
    }

    console.log("Longest palindrome substring is: ");
    console.log(s.substring(start, start + len - 1 + 1));

    return len;
}

const str = "forgeeksskeegfor";
console.log("\nLength is: " + longestPalSubstr(str));