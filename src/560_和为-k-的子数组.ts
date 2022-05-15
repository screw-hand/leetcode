/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  const n = nums.length;
  // map 前缀和:前缀和出现次数
  const preSum = new Map<number, number>();
  preSum.set(0, 1);
  let res = 0,
    sum0ToI = 0;

  for (let i = 0; i < n; i++) {
    sum0ToI += nums[i];
    // 前缀和nums[0...j]
    const sum0ToJ = sum0ToI - k;
    if (preSum.has(sum0ToJ)) {
      res += preSum.get(sum0ToJ) || 0;
    }
    preSum.set(sum0ToI, (preSum.get(sum0ToI) || 0) + 1);
  }

  return res;
}
// @lc code=end

const a = subarraySum([1,1,1],2)
const b = subarraySum([1,2,3],3)
const c = subarraySum([-1, -1, 1], 0);

console.log({
  a, // 2
  b, // 2
  c, // 1
});
