/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

/*
// 暴力枚举法 
// 时间 O(N²)
// 空间 O(1)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const first: number = nums[i]
      const second: number = nums[j]
      if (first + second === target) {
        return [i, j]
      } 
    }
  }
  return [];
}
*/

/*
// hashMap
// 时间 O(N)
// 空间 O(N)
function twoSum(nums: number[], target: number): number[] {
  // 使用hashMap,收集已遍历的的不匹配值
  // key为具体值，value为索引（题目要求返回索引）
  // for遍历数组，每次判断target减去当前的值是否在hasMap中
  // 无则使用hashMap收集值，有则返回hashMap[value]以及i
  let hashMap: { [key: string]: number } = {};
  const len = nums.length;
  for (let i = len - 1; i >= 0; i--) {
    const val = nums[i];
    const step = target - val;
    if (hashMap[step] !== undefined) {
      return [i, hashMap[step]];
    } else {
      hashMap[val] = i;
    }
  }
  return [];
}
*/

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  return [];
}
// @lc code=end

export default twoSum;
