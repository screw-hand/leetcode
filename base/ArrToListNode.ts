/**
 * 数组转换成链表
 */

type t = number;

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

  constructor(arr: Array<t>) {
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

  // 通过索引寻找节点
  findNodebyIndex (index: number, listNode: ListNode | null = this.listNode): ListNode | null {
    let current = 0;
    let header = listNode;
    while (current !== index) {
      header = header?.next || null;
      current++;
    }
    return header || null;
  }

  // 遍历节点
  forEach(fn: (listNode: ListNode, index: number) => void) {
    let header = this.listNode;
    let index = 0;
    while (header && header.val) {
      fn(header, index);
      header = header.next;
      index++;
    }
  }

  // 转换为数组
  toArr(): Array<t> {
    let arr: Array<t> = [];
    this.forEach((item) => arr.push(item.val));
    return arr;
  }

  // 往指定位置插入节点
  insert(val: number, index: number = this.count) {
    let dempList: ListNode = new ListNode(
      -1,
      this.listNode
    )
    let prevNode = this.findNodebyIndex(index, dempList)

    if (!prevNode) {
      throw new Error(`index值无效`)
    }

    prevNode.next = new ListNode(val, prevNode.next || null);
    this.listNode = dempList.next;
    this.count++;

    return this;
  }

  // 连接链表
  conect(list: ListNode | Array<t>, index: number = this.count) {
    let dempList: ListNode = new ListNode(
      -1,
      this.listNode
    )
    const subListNode: ListNode | null =
      list instanceof Array ?
        new ArrToListNode(list).listNode :
        list;
    let subLastNode = subListNode;
    let len = 0;
    let prevNode = this.findNodebyIndex(index, dempList)
    while (subLastNode !== null && subLastNode.next !== null) {
      subLastNode = subLastNode.next;
      len++;
    }
    len++;
    if (prevNode) {
      const nextNode = prevNode.next;
      prevNode.next = subListNode;
      if (subLastNode) {
        subLastNode.next = nextNode
      }
      this.count += len;
      this.listNode = dempList.next;
    }

    return this;
  }
}

export { ListNode, ArrToListNode };
