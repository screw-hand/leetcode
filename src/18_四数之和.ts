/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (39.33%)
 * Likes:    1163
 * Dislikes: 0
 * Total Accepted:    285.9K
 * Total Submissions: 727.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  const len = nums.length;
  if (len < 4) {
    return [];
  }
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; i++) {
    // 跳过重复的nums[i]值
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 预先计算，第一次的四数之和，由于已经排序
    // 此时若最小四数之和仍然大于target
    // 则说明没必须继续循环，直接终止循环
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    // 预先计算，最后一次四数之和
    // 若仍然小于target，则可直接跳过本次循环
    // (i值不够)
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      // 跳过重复的nums[j]值
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      // 仍然是计算当前最小四数之和，若大于target，终止循环
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      // 仍然是计算最大值的四数之和
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
        continue;
      }
      let l = j + 1;
      let r = len - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          // 跳过重复的l
          while (l < r && nums[l] === nums[++l]) {}
          // 跳过重复的r
          while (l < r && nums[r] === nums[--r]) {}
        } else if (sum < target) {
          // 跳过重复的l
          while (l < r && nums[l] === nums[++l]) {}
        } else if (sum > target) {
          // 跳过重复的r
          while (l < r && nums[r] === nums[--r]) {}
        }
      }
    }
  }

  return res;
}
// @lc code=end

export default fourSum;
