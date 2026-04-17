class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        nums.sort((a, b) => a - b);

        for (const [i, value] of nums.entries()){
            if (i > 0 && value === nums[i-1])
                continue;
            
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right){
                const threeSum = value + nums[left] + nums[right]

                if (threeSum > 0){
                    right--;
                }else if (threeSum < 0){
                    left++;
                }else{
                    result.push([value, nums[left], nums[right]])

                    left++;

                    while (nums[left] === nums[left - 1] && left < right){
                        left++
                    }
                }
            }
        }
        return result;
    }
}
