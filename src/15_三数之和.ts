/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let low = 0;
  let hight = nums.length - 1;
  let res: number[][] = [];
  while (low < hight) {
    const left = nums[low];
    const right = nums[hight];
    const sum = left + right;
    if (sum === 0) {
      console.log({
        nums,
        left,
        right,
      });
      const arr = [left, right, 0].sort((a, b) => a - b);
      res.push(arr);
      // 跳过重复
      while (low < hight && nums[low] === left) {
        low++;
      }
      while (low < hight && nums[hight] === right) {
        hight--;
      }
    } else if (sum < 0) {
      while (low < hight && nums[low] === left) {
        low++;
      }
    } else if (sum > 0) {
      while (low < hight && nums[hight] === right) {
        hight--;
      }
    }
  }
  console.log(res);
  return res;
}
// @lc code=end

export default threeSum;
