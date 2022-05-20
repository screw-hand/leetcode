/**
 * 图文详解二叉堆，实现优先级队列
 * https://weread.qq.com/web/reader/99732570718ff67e997e35bk025324d028602522a2b2084https://mp.weixin.qq.com/s/o7tdyLiYm668dpUWd-x7Lg
 */

/* 二叉堆：存储在数组里的完全二叉树 */
class MaxPQ<T = number> {
  public pq: Array<T> = [];
  public N: number = 0;
  constructor(cap: number) {
    this.pq = new Array(cap + 1);
  }

  /* 返回当前队列最大元素 */
  public max(): T {
    return this.pq[1];
  }

  /* 插入元素e */
  public insert(e: T) {}

  /* 删除并返回当前队列中最大元素 */
  public delMax() {}

  /* 上浮第k个元素，以维护最大堆性质 */
  private swim(k: number) {}

  /* 下浮第k个元素，以维护最大堆性质 */
  private sink(k: number) {}

  /* 交换数组的两个元素 */
  private exch(i: number, j: number) {}

  /* 比较索引i的值是否比索引j的值小 */
  private less(i: number, j: number): boolean {
    return false;
  }

  /* 父节点索引 */
  parent(root: number): number {
    return Math.floor(root / 2);
  }

  /* 左孩子索引 */
  left(root: number): number {
    return Math.floor(root * 2);
  }

  /* 右孩子索引 */
  right(root: number): number {
    return root * 2 + 1;
  }
}

export { MaxPQ };
