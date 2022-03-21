/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */


// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  // 定义坐标移动（上右下左）
  const
    dx: number[] = [1, 0, 0, -1],
    dy: number[] = [0, 1, -1, 0],
    m = image[0].length,
    n = image.length,
    q: [number, number][] = []

  let currColor = image[sr][sc]

  if (currColor === newColor) {
    return image
  }

  q.push([sr, sc])
  image[sr][sc] = newColor

  while (q.length !== 0) {
    const curr = q.shift() as [number, number]
    let x = curr[0]
    let y = curr[1]

    for (let i = 0; i < 4; i++) {
      const mx = x + dx[i], my = y + dy[i]
      if (mx >= 0 && mx < n && my >= 0 && my < m && image[mx][my] === currColor) {
        q.push([mx, my])
        image[mx][my] = newColor
      }
    }
  }

  return image
};
// @lc code=end
