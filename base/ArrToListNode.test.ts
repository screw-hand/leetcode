import { ArrToListNode } from "./ArrToListNode";

const arr1 = [1, 1, 2, 3, 4, 4, 5, 6];
test(`ArrToListNode [${arr1}]`, () => {
  const listNode = new ArrToListNode(arr1);
  listNode.forEach((item, index) => {
    expect(item.val).toEqual(arr1[index])
  });
});
