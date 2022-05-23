import { MaxPQ, MinPQ } from "./priorityQueue";

const nums = ["A", "O", "N", "P", "R", "S", "T"];

test(`MaxMQ init [${nums}]`, () => {
  const maxMQ = new MaxPQ<string>(nums.length);
  nums.forEach((x) => maxMQ.insert(x));
  expect(maxMQ.getPq()).toEqual(["T", "P", "S", "A", "O", "N", "R"]);
  expect(maxMQ.getN()).toEqual(7);

  maxMQ.insert("Z");

  expect(maxMQ.getPq()).toEqual(["Z", "T", "S", "P", "O", "N", "R", "A"]);
  expect(maxMQ.getN()).toEqual(8);

  expect(maxMQ.delMax()).toEqual("Z");

  expect(maxMQ.getPq()).toEqual(["T", "P", "S", "A", "O", "N", "R"]);

  expect(maxMQ.getN()).toEqual(7);
});

test(`MinPQ init [${nums}]`, () => {
  const maxMQ = new MinPQ<string>(
    nums.length,
    (a, b) => a.charCodeAt(0) > b.charCodeAt(0)
  );
  nums.forEach((x) => maxMQ.insert(x));
  expect(maxMQ.getPq()).toEqual(["A", "O", "N", "P", "R", "S", "T"]);
  expect(maxMQ.getN()).toEqual(7);

  maxMQ.insert("Z");

  expect(maxMQ.getPq()).toEqual(["A", "O", "N", "P", "R", "S", "T", "Z"]);
  expect(maxMQ.getN()).toEqual(8);

  expect(maxMQ.delMin()).toEqual("O");

  expect(maxMQ.getPq()).toEqual(["O", "R", "N", "P", "Z", "S", "T"]);

  expect(maxMQ.getN()).toEqual(7);
});
