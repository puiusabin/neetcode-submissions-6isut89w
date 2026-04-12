class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums)
        let maxSequence = 0;
        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            if(numsSet.has(num - 1)) continue;

            let length = 0;
            
            while(numsSet.has(num)){
                length++;
                num++;
            }
            if(length > maxSequence) maxSequence = length;

        }
        return maxSequence;
    }
}
