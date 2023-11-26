import { insertionSortAlternativeImplementation,insertionSort } from "../src/InsertionSort.js";
import { expect } from "chai";

describe("insertionSortAlternativeImplementation", () => {
  it('should sort an array using insertionSort', () => {
    const unsortedList = [5, 2, 9, 1, 5, 6];
    const sortedList = [1, 2, 5, 5, 6, 9];
    
    insertionSort(unsortedList);
    expect(unsortedList).to.deep.equal(sortedList);
  });

  it('should sort an array using insertionSortAlternativeImplementation', () => {
    const unsortedList = [5, 2, 9, 1, 5, 6];
    const sortedList = [1, 2, 5, 5, 6, 9];

    const result = insertionSortAlternativeImplementation([...unsortedList]);
    expect(result).to.deep.equal(sortedList);
  });

  it('should handle an empty array for insertionSort', () => {
    const unsortedList = [];
    const sortedList = [];

    insertionSort(unsortedList);
    expect(unsortedList).to.deep.equal(sortedList);
  });

  it('should handle an empty array for insertionSortAlternativeImplementation', () => {
    const unsortedList = [];
    const sortedList = [];

    const result = insertionSortAlternativeImplementation([...unsortedList]);
    expect(result).to.deep.equal(sortedList);
  });

  it('should handle an array with a single element for insertionSort', () => {
    const unsortedList = [42];
    const sortedList = [42];

    insertionSort(unsortedList);
    expect(unsortedList).to.deep.equal(sortedList);
  });

  it('should handle an array with a single element for insertionSortAlternativeImplementation', () => {
    const unsortedList = [42];
    const sortedList = [42];

    const result = insertionSortAlternativeImplementation([...unsortedList]);
    expect(result).to.deep.equal(sortedList);
  });

  it("expects to work with empty array", () => {
    expect(insertionSortAlternativeImplementation([])).to.eql([]);
  });

  it("expects to return input array when array.length is less than 2", () => {
    const input = [3];
    expect(insertionSortAlternativeImplementation(input)).to.eql(input);
  });

  it("expects to return array sorted in ascending order", () => {
    expect(insertionSortAlternativeImplementation([14, 11])).to.eql([11, 14]);
    expect(insertionSortAlternativeImplementation([21, 22, 23])).to.eql([
      21, 22, 23,
    ]);
    expect(insertionSortAlternativeImplementation([1, 3, 2, 3, 7, 2])).to.eql([
      1, 2, 2, 3, 3, 7,
    ]);
    expect(insertionSortAlternativeImplementation([1, 6, 4, 5, 9, 2])).to.eql([
      1, 2, 4, 5, 6, 9,
    ]);
  });
});
