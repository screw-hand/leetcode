import Difference from "./difference";

let df;
const nums1 = [8, 2, 6, 3, 1];

test("Difference init []", () => {
  df = new Difference([]);
  console.log(df);
  expect(df).toEqual({ diff: [] });
});

test(`Difference: [${nums1}]`, () => {
  df = new Difference(nums1);
  expect(df.diff).toEqual([8, -6, 4, -3, -2]);
  df.increment(1, 3, 3);
  expect(df.diff).toEqual([8, -3, 4, -3, -5]);
  expect(df.result()).toEqual([8, 5, 9, 6, 1]);
});
