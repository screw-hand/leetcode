class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class ArrToListNode {
  public listNode: ListNode | null = null;
  public count: number = 0;
  constructor(arr: Array<number>) {
    const len = arr.length;
    if (!len) {
      return;
    }
    let header = new ListNode(arr[0]);
    this.count++;
    this.listNode = header;
    for (let i = 1; i < len; i++) {
      header.next = new ListNode(arr[i]);
      this.count++;
      header = header?.next;
    }
  }

  forEach(fn: (listNode: ListNode, index: number) => void) {
    let header = this.listNode;
    let index = 0;
    while (header && header.val) {
      fn(header, index);
      header = header.next;
      index++;
    }
  }

  toArr(): Array<number> {
    let arr: Array<number> = [];
    this.forEach((item) => arr.push(item.val));
    return arr;
  }
}

export { ArrToListNode };
