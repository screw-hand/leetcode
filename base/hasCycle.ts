class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 判断链表是否包含环
function hasCycle(head: ListNode) {
  let slow: ListNode | null = head, fast: ListNode | null = head;
  while (slow !== null && fast !== null) {
    slow = slow.next || null;
    fast = fast.next?.next || null;
    if (Object.is(slow, fast)) {
      return true;
    }
  }
  return false;
}

// 判断链表是否有环，并返回环的起点
function detectCycle(head: ListNode): ListNode | null {
  let slow: ListNode | null = head, fast: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next || null;
    slow = slow?.next || null;
    if (Object.is(fast, slow)) {
      break;
    }
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  slow = head;
  while (!Object.is(slow, fast)) {
    fast = fast?.next || null;
    slow = slow?.next || null;
  }
  return slow;
}


export {
  hasCycle,
  detectCycle
};
