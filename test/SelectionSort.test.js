import { selectionSort } from "../src/SelectionSort.js";
import { expect } from "chai";

describe("selectionSort", () => {
  it("expects to return the array sorted in ascending order", () => {
    const toSort = [5, 6, 7, 8, 1, 2, 12, 14];
    const expected = [1, 2, 5, 6, 7, 8, 12, 14];

    expect(selectionSort(toSort)).to.eql(expected);
  });

  it("expects to throw if it is not a valid array", () => {
    expect(() => selectionSort("abc")).to.throw("Given input is not an array");
    expect(() => selectionSort(123)).to.throw("Given input is not an array");
    expect(() => selectionSort({})).to.throw("Given input is not an array");
    expect(() => selectionSort(null)).to.throw("Given input is not an array");
    expect(() => selectionSort()).to.throw("Given input is not an array");
  });

  it("expects to throw if one of the elements in the array is not a number", () => {
    expect(() => selectionSort([1, "x", 2])).to.throw(
      "One of the items in your array is not a number"
    );
  });
});
