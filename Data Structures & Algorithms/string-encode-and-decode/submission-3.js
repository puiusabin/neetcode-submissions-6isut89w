class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for(let str of strs){
            encodedStr += str.length + "#" + str;
        }
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStrs = [];
        let i = 0;
        while (i < str.length){
            let j = i;

            while (str[j] !== "#"){
                j++;
            }

            let length = parseInt(str.substring(i,j));

            let extractedStr = str.substring(j + 1, j + 1 + length);
            decodedStrs.push(extractedStr);

            i = j + 1 + length
        }
        return decodedStrs;
    }
}