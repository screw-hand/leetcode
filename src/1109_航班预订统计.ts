/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
class Difference {
  public diff: number[] = [];
  public len: number = 0;

  constructor(nums: number[]) {
    this.diff[0] = nums[0];
    this.len = nums.length;
    for (let i = 1; i < this.len; i++) {
      this.diff[i] = nums[i] - (nums[i - 1] || 0);
    }
  }

  public increment(i: number, j: number, val: number) {
    this.diff[i] += val;
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }

  public result(): number[] {
    let res: number[] = [];
    res[0] = this.diff[0];
    for (let i = 1; i < this.len; i++) {
      res[i] = this.diff[i] + res[i - 1];
    }
    return res;
  }
}

function corpFlightBookings(bookings: number[][], n: number): number[] {
  const nums = new Array(n).fill(0);
  const df = new Difference(nums);
  const len = bookings.length;
  for (let i = 0; i < len; i++) {
    const booking = bookings[i];
    const left = booking[0] - 1;
    const right = booking[1] - 1;
    const val = booking[2];
    df.increment(left, right, val);
  }
  return df.result();
}
// @lc code=end
