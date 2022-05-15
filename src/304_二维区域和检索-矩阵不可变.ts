/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
class NumMatrix {
  preSum: Array<number[]> = [];

  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0].length;
    if (m === 0 || n === 0) return;

    this.preSum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const iSub1 = i - 1 >= 0 ? i - 1 : 0;
        const jSub1 = j - 1 >= 0 ? j - 1 : 0;
        // 计算每个矩阵 [0, 0, i, j] 的元素和
        const a = this.preSum[iSub1][j]; // prwRow-1前缀和，第一行为0
        const b = this.preSum[i][jSub1]; // preCol-1前缀和，第一列为0
        const c = matrix[iSub1][jSub1]; // 原坐标值
        const d = this.preSum[iSub1][jSub1]; // preRow-1 preCol-1 前缀和，第一行或第一列为0
        // 第一行 => b + c；
        // 第一列 a + c；
        this.preSum[i][j] = a + b + c - d;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      // 0,0 row2,col2 最大的那块
      this.preSum[row2 + 1][col2 + 1] -
      // 0,0, preRow (col要达到col2+1,row最小)
      this.preSum[row1][col2 + 1] -
      // 0,0, preCol (row要达到row2+1,col最小)
      this.preSum[row2 + 1][col1] +
      // 0,0, row1,col1（因为减掉的preRow，preCol，都有两个0,0, row1,col1，所以要加回来一次）
      this.preSum[row1][col1]
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

const a = numMatrix.sumRegion(2, 1, 4, 3);
const b = numMatrix.sumRegion(1, 1, 2, 2);
const c = numMatrix.sumRegion(1, 2, 2, 4);

console.log({
  a: a, // === 8,
  b: b, // === 11,
  c: c, // === 12,
});

export default NumMatrix;