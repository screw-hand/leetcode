import { ArrToListNode, ListNode } from "./ArrToListNode";

const arr1 = [1, 1, 2, 3, 4, 4, 5, 6];
test(`ArrToListNode [${arr1}]`, () => {
  const listNode = new ArrToListNode(arr1);
  listNode.forEach((item, index) => {
    expect(item.val).toEqual(arr1[index])
  });
});

test(`ArrTOListNode [${arr1}] inset method`, () => {
  const subArr = [7, 8, 9]
  const listNode = new ArrToListNode(arr1);

  let arr = [-1, ...arr1]
  listNode.insert(-1, 0)
  expect(
    listNode.toArr()
  ).toEqual(
    new ArrToListNode(arr).toArr()
  )

  arr = [-1, 10, ...arr1]
  listNode.insert(10, 1)
  expect(
    listNode.toArr()
  ).toEqual(
    new ArrToListNode(arr).toArr()
  )

  arr = [...arr, ...subArr]
  listNode.conect(subArr)
  expect(
    listNode.toArr()
  ).toEqual(
    new ArrToListNode(arr).toArr()
  )

  expect(
    listNode.count
  ).toEqual(
    arr.length
  )
})
