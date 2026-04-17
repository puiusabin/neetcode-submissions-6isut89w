class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Early exit: Not enough numbers to form a triplet
        if (nums.length < 3) return [];

        let result = [];
        nums.sort((a, b) => a - b); 

        for (let i = 0; i < nums.length - 2; i++) {
            const value = nums[i];


            if (i > 0 && value === nums[i - 1]) continue;
            
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = value + nums[left] + nums[right];

                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    result.push([value, nums[left], nums[right]]);
                    
                    left++;

                    while (nums[left] === nums[left - 1] && left < right) {
                        left++;
                    }
                }
            }
        }
        return result;
    }
}