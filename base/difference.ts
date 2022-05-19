/**
 * LABULADONG 的算法网站
 * 小而美的算法技巧：差分数组
 * https://labuladong.gitee.io/algo/2/18/23/
 */

// 差分数组工具类
class Difference {
  // 差分数组
  public diff: number[] = [];

  /* 输入一个初始化数组，区间操作将在这个数组上进行 */
  constructor(nums: number[]) {
    if (nums.length <= 0) {
      return;
    }
    this.diff = new Array(nums.length);
    this.diff[0] = nums[0];
    for (let i = 1; i < this.diff.length; i++) {
      this.diff[i] = nums[i] - (nums[i - 1] || 0);
    }
  }

  /**
   * 给闭区间[i, j]增加val，可以是负数
   */
  public increment(i: number, j: number, val: number): void {
    this.diff[i] += val;
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }

  /* 返回结果数组 */
  public result(): number[] {
    let res = new Array(this.diff.length);
    res[0] = this.diff[0];
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = this.diff[i] + res[i - 1];
    }
    return res;
  }
}

export default Difference;
