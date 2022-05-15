/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  const n = nums.length;
  let preSum: number[] = [];
  preSum[0] = 0;
  let res = 0;

  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }

  // console.log(preSum);

  // 循环preSum,从1开始，达到数组长度为最后一轮循环
  for (let i = 1; i <= n; i++) {
    // 循环数组,从0开始，小于i，
    for (let j = 0; j < i; j++) {
      if (preSum[i] - preSum[j] === k) {
        res++;
      }
    }
  }

  return res;
}
// @lc code=end

// const a = subarraySum([1,1,1],2)
// const b = subarraySum([1,2,3],3)
const c = subarraySum([-1, -1, 1], 0);

console.log({
  // a, // 2
  // b, // 2
  c, // == 1
});
