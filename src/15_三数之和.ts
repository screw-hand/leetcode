/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

/* 
// fail
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
  return res;
}
*/

/* 
// 暴力解法，运行超时。
// Time Limit Exceeded
// 315/318 cases passed (N/A)
function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  if (nums === null || nums.length < 3) {
    return res;
  }
  const temp = new Set<string>();

  nums.sort((a, b) => a - b);

  // O(N³)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          temp.add(
            [nums[i], nums[j], nums[k]].sort((a, b) => a - b).toString()
          );
        }
      }
    }
  }
  res = [...temp].map((x) => x.split(",").map((x) => Number(x)));
  return res;
}
 */

/* 
function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  if (nums === null || nums.length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);

  const len = nums.length;

  // O(n²)
  for (let i = 0; i < len - 2; i++) {
    //去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 在 i + 1 ... nums.length - 1 中查找相加等于 -nums[i] 的两个数
    const target = -nums[i];
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[++left]) {}
        while (left < right && nums[right] === nums[--right]) {}
      } else if (sum < target) {
        while (left < right && nums[left] === nums[++left]) {}
      } else if (sum > target) {
        while (left < right && nums[right] === nums[--right]) {}
      }
    }
  }

  return res;
}
*/

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  if (nums === null || nums.length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);

  const len = nums.length;

  // O(n²)
  for (let i = 0; i < len - 2; i++) {
    //去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 在 i + 1 ... nums.length - 1 中查找相加等于 -nums[i] 的两个数
    const target = -nums[i];
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[++left]) {}
        while (left < right && nums[right] === nums[--right]) {}
      } else if (sum < target) {
        while (left < right && nums[left] === nums[++left]) {}
      } else if (sum > target) {
        while (left < right && nums[right] === nums[--right]) {}
      }
    }
  }

  return res;
}
// @lc code=end

export default threeSum;
