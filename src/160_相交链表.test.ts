import { ArrToListNode } from "../base/ArrToListNode";
import getIntersectionNode from "./160_相交链表";
import { ListNode } from "./23_合并k个升序链表";


const a: ArrToListNode| ListNode = new ArrToListNode([4, 1])
const b: ArrToListNode | ListNode = new ArrToListNode([5, 6, 1])
const c = new ArrToListNode([8, 4, 5]).listNode as ListNode

const params1 = [
  a.conect(c).listNode,
  b.conect(c).listNode
]

const result1 = c

test (`getIntersectionNode ${params1[0]}, ${params1[1]}`, () => {
  const result = getIntersectionNode(
    params1[0],
    params1[1],
  )
  expect(result).toEqual(result1);
})
