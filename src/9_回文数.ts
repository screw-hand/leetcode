/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let str = x.toString()
  let len = str.length
  for (let i = 0; i < (len - 1) / 2; i++) {
    if (str[i] !== str[(len + 1) / 2]) {
      return false
    }
  }
  return true;
};
// @lc code=end

// isPalindrome(121)
// isPalindrome(-121)
isPalindrome(10)
isPalindrome(-101)
