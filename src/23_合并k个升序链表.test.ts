import { ArrToListNode } from "../base/ArrToListNode";
import { mergeKLists } from "./23_合并k个升序链表";

const lists1 = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
const result1 = [1, 1, 2, 3, 4, 4, 5, 6];

const lists2 = [[]];

const result2: Array<number> = [];

const lists3 = [[], []];

const result3: Array<number> = [];

const lists4 = [[], [1]];

const result4: Array<number> = [1];

test(`mergeKLists [${lists1}]`, () => {
  const lists = lists1.map((x) => new ArrToListNode(x).listNode);
  const result = mergeKLists(lists);
  expect(result).toEqual(new ArrToListNode(result1).listNode);
});

// test(`mergeKLists [${lists2}]`, () => {
//   const lists = lists2.map(x => new ArrToListNode(x).listNode)
//   const result = mergeKLists(lists)
//   expect(result).toEqual(new ArrToListNode(result2).listNode)
// })

// test(`mergeKLists [${lists3}]`, () => {
//   const lists = lists3.map(x => new ArrToListNode(x).listNode)
//   const result = mergeKLists(lists)
//   expect(result).toEqual(new ArrToListNode(result3).listNode)
// })

// test(`mergeKLists [${lists4}]`, () => {
//   const lists = lists4.map(x => new ArrToListNode(x).listNode)
//   const result = mergeKLists(lists)
//   expect(result).toEqual(new ArrToListNode(result4).listNode)
// })
