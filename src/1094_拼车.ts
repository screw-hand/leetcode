/*
 * @lc app=leetcode.cn id=1094 lang=typescript
 *
 * [1094] 拼车
 */

/* [[2,1,5],[3,3,7]]\n5 */

// @lc code=start
class Difference {
  public diff: number[] = [];
  public len: number = 0;

  constructor(nums: number[]) {
    if (nums.length < 1) {
      return
    }
    this.len = nums.length;
    this.diff[0] = nums[0];
    for (let i = 1; i < this.len; i++) {
      this.diff[i] = nums[i] - (nums[i - 1] || 0);
    }
  }

  increment(i: number, j: number, val: number) {
    this.diff[i] += val;
    if (j + 1 < this.len) {
      this.diff[j + 1] -= val;
    }
  }

  result(): number[] {
    let res: number[] = [];
    res[0] = this.diff[0];
    for (let i = 1; i < this.len; i++) {
      res[i] = this.diff[i] + res[i - 1];
    }
    return res;
  }
}
function carPooling(trips: number[][], capacity: number): boolean {
  let nums: number[] = new Array(1001).fill(0);
  const difference = new Difference(nums);
  const len = trips.length;
  for (let x = 0; x < len; x++) {
    const trip = trips[x];
    let val = trip[0];
    let i = trip[1];
    let j = trip[2] - 1;
    difference.increment(i, j, val);
  }
  const result: number[] = difference.result();
  console.log({
    diff: difference.diff,
    result
  })
  return result.every(x => capacity >= x);
};
// @lc code=end

export { Difference, carPooling };