import fourSum from "./18_四数之和";

test("test case 1", () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);
});

test("test case 2", () => {
  expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
});

test("test case 3", () => {
  expect(fourSum([0, -5, 5, 1, 1, 2, -5, 5, -3], -11)).toEqual([
    [-5, -5, -3, 2],
  ]);
});
