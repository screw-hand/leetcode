/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  console.log({
    headA,
    headB
  })
  let p1: ListNode | null = headA, p2: ListNode | null = headB;
  while (!Object.is(p1, p2)) {
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1?.next || null;
    }
    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2?.next || null;
    }
  }
  return p1;
};
// @lc code=end

export default getIntersectionNode;
