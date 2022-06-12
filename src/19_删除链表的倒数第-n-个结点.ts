/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


/**
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

function findFormEnd(header: ListNode, k: number): ListNode | null {
  let p1: ListNode | null = header;
  for (let i = 0; i < k; i++) {
    p1 = p1?.next || null;
  }
  let p2: ListNode | null = header;
  while (p1 !== null) {
    p1 = p1?.next || null;
    p2 = p2?.next || null;
  }
  return p2;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode = new ListNode(-1);
  dummy.next = head;
  let x = findFormEnd(dummy, n + 1);
  if (x && x.next) {
    x.next = x?.next?.next;
  }
  return dummy.next
};
// @lc code=end

export { removeNthFromEnd };