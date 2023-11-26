import { quickSort } from "../src/QuickSort.js";
import { expect } from "chai";

describe("QuickSort", () => {
  it("should work for empty arrays", () => {
    expect(quickSort([])).to.eql([]);
  });

  it("should sort arrays correctly", () => {
    expect(quickSort([5, 4, 3, 10, 2, 1])).to.eql([1, 2, 3, 4, 5, 10]);
    expect(quickSort([5, 4])).to.eql([4, 5]);
    expect(quickSort([1, 2, 3])).to.eql([1, 2, 3]);
    expect(quickSort([0, 5, 3, 2, 2])).to.eql([0, 2, 2, 3, 5]);
  });
});
