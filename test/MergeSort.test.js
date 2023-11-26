import { merge, mergeSort } from "../src/MergeSort.js";
import { expect } from "chai";

describe("merge", () => {
  it("should merge arrays correctly", () => {
    expect(merge([5, 4], [1, 2, 3])).to.eql([1, 2, 3, 5, 4]);
    expect(merge([], [1, 2])).to.eql([1, 2]);
    expect(merge([1, 2, 3], [1])).to.eql([1, 1, 2, 3]);
    expect(merge([], [])).to.eql([]);
  });
});

describe("MergeSort", () => {
  it("should work for empty arrays", () => {
    expect(mergeSort([])).to.eql([]);
  });

  it("should sort arrays correctly", () => {
    expect(mergeSort([5, 4])).to.eql([4, 5]);
    expect(mergeSort([8, 4, 10, 15, 9])).to.eql([4, 8, 9, 10, 15]);
    expect(mergeSort([1, 2, 3])).to.eql([1, 2, 3]);
    expect(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])).to.eql([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
