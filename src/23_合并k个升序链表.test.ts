import ListNode from "./237_删除链表中的节点";
import { mergeKLists } from "./23_合并k个升序链表";

const lists1 = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
const arr1 = [1, 1, 2, 3, 4, 4, 5, 6];
let result1: ListNode | null = null;
let i = 0;
let len = arr1.length;
result1 = new ListNode(arr1[i]);
i++;
let head = result1.next
while (i <= len) {
  console.log(arr1[i])
  head = new ListNode(arr1[i]);
  head = head.next;
  i++;
}
console.log(result1);

test(`mergeKLists ${lists1}`, () => {});
