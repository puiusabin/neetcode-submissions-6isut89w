class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        return s.replace(/[^a-zA-Z0-9]/gm, "").toLowerCase().split("").toReversed().join("") === s.replace(/[^a-zA-Z0-9]/gm, "").toLowerCase();

    }
}
