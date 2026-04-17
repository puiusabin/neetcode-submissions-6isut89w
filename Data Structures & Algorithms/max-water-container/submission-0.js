class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r){
            const area = (r - l) * Math.min(heights[r], heights[l]);
            result = Math.max(result, area);

            if (heights[l] < heights[r]){
                l++;
            }else if (heights[r] > heights[l]){
                r--;
            }else{
                r--;
            }
        }
        return result;
    }
}
