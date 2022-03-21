/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 定义快慢指针，left为删除节点索引，right为链表长度
  // start为删除结点，end为链接末位（val有值，next为nul）
  // 通过right - left 找出删除节点
  let left = 0, right = 0;
  let end = head
  let start = head
  // 计算链表长度
  while (end?.val) {
    end = end.next
    right++
  }
  // 找出删除节点
  while (right - n > left) {
    start = start?.next || null
    left++
  }
  // 删除节点
  if (start?.next == null) {
    start = start?.next || null
  } else if (start) {
    start.val = start.next?.val || 0
    start.next = start.next?.next || null
  }
  return head
};
// @lc code=end

