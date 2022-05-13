/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
    nums: number[];
    preNums: number[];    

    constructor(nums: number[]) {
      this.nums = nums;
      this.preNums = new Array(nums.length + 1);
      for (let i = 0; i < this.preNums.length; i++) {
        this.preNums[i] = (this.preNums[i - 1] || 0) + (this.nums[i - 1]  || 0)
      }
    }

    sumRange(left: number, right: number): number {
      return this.preNums[right + 1] - this.preNums[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

