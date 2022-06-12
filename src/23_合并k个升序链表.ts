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
    const min = this.pq[1];
    this.exch(1, this.N);
    this.pq.pop();
    this.N--;
    this.sink(1);
    return min;
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
      if (this.right(k) <= this.N && this.moreThen(older, this.right(k))) {
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
    if (!this.pq[i]) {
      return false;
    } else if (!this.pq[j]) {
      return true;
    }
    // if (this.pq[i] === null && this.pq[j]){
    //   return true;
    // } else if (this.pq[j] === null) {
    //   return false;
    // }
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
  let dummy = new ListNode(-1); // 带前置空节点的链表
  let p: ListNode = dummy; // 指针
  let pq = new MinPQ<ListNode>(len, (a, b) => a.val > b.val); // 二叉堆队列
  for (let i = 0; i < len; i++) {
    const head = lists[i];
    if (head !== null) {
      pq.insert(head);
    }
  }

  while (pq.getPq().length > 0) {
    // 取出二叉堆最小值的链表放入p的下一个指向
    const node = pq.delMin();
    p.next = node;
    // 最小值的下一指向有值，加入二叉堆
    if (node.next !== null) {
      pq.insert(node.next);
    }
    p = p.next;
  }
  return dummy.next || null;
}
// @lc code=end

export { ListNode, mergeKLists };
