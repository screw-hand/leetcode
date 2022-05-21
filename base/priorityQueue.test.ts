import { MaxPQ } from "./priorityQueue";

const nums = ["A", "O", "N", "P", "R", "S", "T"];

test(`MaxMQ init [${nums}]`, () => {
  const maxMQ = new MaxPQ<string>(nums.length);
  nums.forEach((x) => maxMQ.insert(x));
  expect(maxMQ.getPq()).toEqual(["T", "P", "S", "A", "O", "N", "R"]);
  expect(maxMQ.getN()).toEqual(7);

  maxMQ.insert("Z");

  expect(maxMQ.getPq()).toEqual(["Z", "T", "S", "P", "O", "N", "R", "A"]);
  expect(maxMQ.getN()).toEqual(8);

  expect(maxMQ.delMax()).toEqual("T");

  expect(maxMQ.getPq()).toEqual(["T", "P", "S", "A", "O", "N", "R"]);

  expect(maxMQ.getN()).toEqual(7);
});
