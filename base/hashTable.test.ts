import HashTable from "./hashTable";

const hash = new HashTable();

console.log(hash.hashCode("Gandalf") + " - Gandalf");
console.log(hash.hashCode("John") + " - John");
console.log(hash.hashCode("Tyrion") + " - Tyrion");

test("HashTable init", () => {
  expect(hash.toStrFn).toBeTruthy();
  expect(hash.table).toBeTruthy();
});

test("HashTable put", () => {
  expect(hash.put("Gandalf", "gandalf@email.com")).toBeTruthy();
  expect(hash.put("John", "johnsnow@email.com")).toBeTruthy();
  expect(hash.put("Tyrion", "tyrion@email.com")).toBeTruthy();

  expect(hash.hashCode("Gandalf") + " - Gandalf").toBe("19 - Gandalf");
  expect(hash.hashCode("John") + " - John").toBe("29 - John");
  expect(hash.hashCode("Tyrion") + " - Tyrion").toBe("16 - Tyrion");
});

test("HashTable get", () => {
  expect(hash.get("Gandalf")).toBe("gandalf@email.com");
  expect(hash.get("Loiane")).toBe(undefined);
})

test('HashTable remove', () => {
  expect(hash.remove('Gandalf')).toBe(true);
  expect(hash.get('Gandalf')).toBe(undefined);
})
