import { cloneArray } from "./cloneArray";

test("clones array properly", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});

test("accepts arrays of different types", () => {
  const numberArray = [1, 2, 3];
  const stringArray = ["a", "b", "c"];
  const mixedTypesArray = ["a", "b", "c", 1, 2, 3, { d: 4 }, true];
  expect(cloneArray(numberArray)).toEqual(numberArray);
  expect(cloneArray(numberArray)).not.toBe(numberArray);

  expect(cloneArray(stringArray)).toEqual(stringArray);
  expect(cloneArray(stringArray)).not.toBe(stringArray);
  
  expect(cloneArray(mixedTypesArray)).toEqual(mixedTypesArray);
  expect(cloneArray(mixedTypesArray)).not.toBe(mixedTypesArray);
});
