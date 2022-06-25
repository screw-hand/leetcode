import { ArrToListNode } from "../base/ArrToListNode";
import getIntersectionNode from "./160_相交链表";


const a = new ArrToListNode([4, 1]).listNode
const b = new ArrToListNode([5, 6, 1]).listNode
const c = new ArrToListNode([8, 4, 5]).listNode

let aLastNode = a
while (aLastNode && aLastNode.next) {
  aLastNode = aLastNode.next
}
if (aLastNode) {
  aLastNode.next = c
}

let bLastNode = b
while (bLastNode && bLastNode.next) {
  bLastNode = bLastNode.next
}
if (bLastNode) {
  bLastNode.next = c
}


const params1 = [
  a,
  b
]

const result1 = c

test (`getIntersectionNode ${params1[0]}, ${params1[1]}`, () => {
  const result = getIntersectionNode(
    params1[0],
    params1[1],
  )
  expect(result).toEqual(result1);
})
