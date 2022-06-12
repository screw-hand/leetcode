/**
 * LABULADONG 的算法网站
 * 返回链接的倒数第K个节点
 * https://labuladong.gitee.io
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function findFormEnd(header: ListNode, k: number): ListNode | null {
  let p1: ListNode | null = header;
  // p1先走n步
  for (let i = 0; i < k; i++) {
    p1 = p1?.next || null;
  }
  // p1、p2同时走n-k步
  let p2: ListNode | null = header;
  while (p1 !== null) {
    p1 = p1?.next || null;
    p2 = p2?.next || null;
  }
  // p2现在指向n-k
  return p2;
}

export { findFormEnd };