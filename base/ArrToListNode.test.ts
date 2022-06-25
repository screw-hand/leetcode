import { ArrToListNode, ListNode } from "./ArrToListNode";

const arr1 = [1, 1, 2, 3, 4, 4, 5, 6];
test(`ArrToListNode [${arr1}]`, () => {
  const listNode = new ArrToListNode(arr1);
  listNode.forEach((item, index) => {
    expect(item.val).toEqual(arr1[index])
  });
});

// TODO jest throw Error
// test(`ArrTOListNode [${arr1}] findNodebyIndex method`, () => {
//   const listNode = new ArrToListNode(arr1);
//   const index0 = 0;
//   const indexMax = arr1.length - 1;
//   const indexOverMax = arr1.length + 1;

//   // expect(
//   //   listNode.findNodebyIndex(-1)
//   // ).toEqual(null);

//   expect(
//     listNode.findNodebyIndex(index0)
//   ).toEqual(
//     new ListNode(
//       arr1[index0],
//       new ArrToListNode(arr1.slice(index0 + 1)).listNode
//     )
//   )

//   expect(
//     listNode.findNodebyIndex(indexMax)
//   ).toEqual(
//     new ListNode(arr1[indexMax])
//   )

//   // expect( 
//   //   listNode.findNodebyIndex(indexOverMax)
//   // ).toThrow(new Error())
// })

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
  listNode.insert(subArr)
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
