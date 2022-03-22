import twoSum from "./1_两数之和";

const a = twoSum([2, 7, 11, 15], 9);
const b = twoSum([3, 2, 4], 6);
const c = twoSum([3, 3], 6);

test("test case 1", () => {
  expect(a).toEqual([0, 1]);
});

test("test case 2", () => {
  expect(b).toEqual([0, 2]);
});

test("test case 3", () => {
  expect(c).toEqual([0, 1]);
});
