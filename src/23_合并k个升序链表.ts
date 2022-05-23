/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
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

class MinPQ<T = number> {
  private pq: Array<T> = [];
  private N: number = 0;
  private sort: (a: T, b: T) => boolean;

  constructor(cap: number, sort: (a: T, b: T) => boolean) {
    this.pq = new Array(cap + 1);
    this.sort = sort;
  }

  /* 返回当前队列最小元素 */
  public min(): T {
    return this.pq[1];
  }

  /* 插入元素e */
  public insert(e: T) {
    this.N++;
    this.pq[this.N] = e;
    this.swim(this.N);
  }

  /* 删除并返回当前队列中最小元素 */
  public delMin() {
    this.exch(1, this.N);
    this.pq.pop();
    this.N--;
    this.sink(1);
    return this.min();
  }

  /* 上浮第k个元素 */
  private swim(k: number) {
    while (k > 1 && this.moreThen(this.parent(k), k)) {
      this.exch(this.parent(k), k);
      k = this.parent(k);
    }
  }

  /* 下浮第k个元素 */
  private sink(k: number) {
    while (this.left(k) <= this.N) {
      let older = this.left(k);
      if (this.moreThen(this.right(k), this.left(k))) {
        older = this.right(k);
      }
      if (this.moreThen(older, k)) {
        break;
      }
      this.exch(older, k);
      k = older;
    }
  }

  /* 交换数组的两个元素 */
  private exch(i: number, j: number) {
    const temp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = temp;
  }

  /* 比较索引i的值是否比索引j的值大 */
  private moreThen(i: number, j: number): boolean {
    return this.sort(this.pq[i], this.pq[j]);
  }

  parent(root: number): number {
    return Math.floor(root / 2);
  }

  left(root: number): number {
    return root * 2;
  }

  right(root: number): number {
    return root * 2 + 1;
  }

  getPq() {
    const pq = [...this.pq];
    pq.shift();
    return pq;
  }

  getN() {
    return this.N;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const len = lists.length;
  if (len === 0) return null;
  let dummy = new ListNode(-1);
  let p = dummy;
  let pq = new MinPQ<ListNode>(len, (a, b) => a.val > b.val);
  for (let i = 0; i < len; i++) {
    const head = lists[i];
    if (head !== null) {
      pq.insert(head);
    }
  }
  while (pq.getPq().length) {
    const node: ListNode = pq.min();
    pq.delMin();
    p.next = node;
    if (node.next !== null) {
      pq.insert(node.next);
    }
    p = p.next;
  }
  return dummy.next;
}
// @lc code=end

export { ListNode, mergeKLists };
