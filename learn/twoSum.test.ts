import { TwoSumII, TwoSumIII } from "./twoSum";

const arr1 = [3, 2, 3, 5];
const target1 = 6;

test(`twoSumII [${arr1}], ${target1}`, () => {
  const twoSum = new TwoSumII();
  for (let i = 0; i < arr1.length; i++) {
    twoSum.add(arr1[i]);
  }
  const result = twoSum.find(target1);
  expect(twoSum.hashMap).toEqual({ 3: 2, 2: 1, 5: 1 });
  expect(result).toBeTruthy();
});

const arr2 = [3, 2, 3, 5];
const target2 = 7;

test(`twoSumII [${arr2}], ${target2}`, () => {
  const twoSum = new TwoSumII();
  for (let i = 0; i < arr2.length; i++) {
    twoSum.add(arr2[i]);
  }
  const result = twoSum.find(target2);
  expect(twoSum.hashMap).toEqual({ 3: 2, 2: 1, 5: 1 });
  expect(result).toBeTruthy();
});

test(`twoSumIII [${arr1}], ${target1}`, () => {
  const twoSum = new TwoSumIII();
  for (let i = 0; i < arr1.length; i++) {
    twoSum.add(arr1[i]);
  }
  const result = twoSum.find(target1);
  expect(result).toBeTruthy();
});

test(`twoSumIII [${arr2}], ${target2}`, () => {
  const twoSum = new TwoSumIII();
  for (let i = 0; i < arr2.length; i++) {
    twoSum.add(arr2[i]);
  }
  const result = twoSum.find(target2);
  expect(result).toBeTruthy();
});
