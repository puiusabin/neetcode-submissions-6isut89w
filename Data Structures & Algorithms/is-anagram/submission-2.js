class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let map = {}

        for(let char of s){
            if(map[char]){
                map[char]++
            }else {
                map[char] = 1;
            }
        }

        for (let char of t){
            if(!map[char]){
                return false
            }
            if (map[char] === 0){
                return false
            }
            map[char]--;
        }
        console.log(map)
        return true
    }
}
