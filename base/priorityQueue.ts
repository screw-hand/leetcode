/**
 * 图文详解二叉堆，实现优先级队列
 * https://weread.qq.com/web/reader/99732570718ff67e997e35bk025324d028602522a2b2084https://mp.weixin.qq.com/s/o7tdyLiYm668dpUWd-x7Lg
 */

/* 二叉堆：存储在数组里的完全二叉树 */
class MaxPQ<T = number> {
  private pq: Array<T> = [];
  private N: number = 0;
  constructor(cap: number) {
    this.pq = new Array(cap + 1);
  }

  /* 返回当前队列最大元素 */
  public max(): T {
    return this.pq[1];
  }

  /* 插入元素e */
  public insert(e: T) {
    this.N++;
    this.pq[this.N] = e;
    this.swim(this.N);
  }

  /* 删除并返回当前队列中最大元素 */
  public delMax() {
    this.exch(1, this.N);
    this.pq.pop();
    this.N--;
    this.sink(1);
    return this.max();
  }

  /* 上浮第k个元素，以维护最大堆性质 */
  private swim(k: number) {
    while (k > 1 && this.less(this.parent(k), k)) {
      this.exch(this.parent(k), k);
      k = this.parent(k);
    }
  }

  /* 下浮第k个元素，以维护最大堆性质 */
  private sink(k: number) {
    while (this.left(k) <= this.N) {
      const older = this.less(this.left(k), this.right(k))
        ? this.right(k)
        : this.left(k);

      if (this.less(older, k)) {
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

  /* 比较索引i的值是否比索引j的值小 */
  private less(i: number, j: number): boolean {
    return this.pq[i] < this.pq[j];
  }

  /* 父节点索引 */
  parent(root: number): number {
    return Math.floor(root / 2);
  }

  /* 左孩子索引 */
  left(root: number): number {
    return root * 2;
  }

  /* 右孩子索引 */
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

export { MaxPQ, MinPQ };
