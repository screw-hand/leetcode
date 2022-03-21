/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 */

/* 
[-1]\n2
*/

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

function rotate(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
};

// @lc code=end

