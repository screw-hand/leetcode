/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

function middleNode(head: ListNode | null): ListNode | null {
  // 定义快慢指针，最终分别指向链表的末位节点和中间节点
  // 快指针最终指向null，因为“如果有两个中间结点，则返回第二个中间结点。”
  let slow = head, fast = head;
  while (fast?.next) {
    slow = slow?.next || null;
    fast = fast.next?.next || null;
  }
  return slow
};
// @lc code=end

