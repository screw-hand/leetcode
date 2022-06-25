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

  protected checkIndex (index: number) {
    if (index < 0 || index > this.count) {
      throw new Error(`index不是一个有效值, index应在0~${this.count}之间`);
    }
    return true;
  }

  // 通过索引寻找节点
  findNodebyIndex (index: number, listNode: ListNode | null = this.listNode): ListNode | null {
    //const checkIndex = this.checkIndex(index);
    // if (!checkIndex) {
    //   return null
    // }
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
  insert(val: number | ListNode | Array<t>, index = this.count) {
    let dempList: ListNode = new ListNode(
      -1,
      this.listNode
    )
    let prevNode = this.findNodebyIndex(index, dempList)

    if (!prevNode) {
      throw new Error(`index值无效`)
    }

    if (typeof val === 'number') {
      prevNode.next = new ListNode(val, prevNode.next || null)
      this.count++;
    } else {
      const subListNode: ListNode | null =
        val instanceof Array ?
          new ArrToListNode(val).listNode :
          val;
      let subLastNode = subListNode;
      let len = 0;
      while (subLastNode !== null && subLastNode.next !== null) {
        subLastNode = subLastNode.next;
        len++;
      }
      len++;
      const nextNode = prevNode.next;
      prevNode.next = subListNode;
      if (subLastNode) {
        subLastNode.next = nextNode
      }
      
      this.count += len;
    }

    this.listNode = dempList.next;

    return this;
  }
}

export { ListNode, ArrToListNode };
