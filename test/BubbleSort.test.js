import { alternativeBubbleSort, bubbleSort } from "../src/BubbleSort.js";
import { expect } from "chai";

describe("bubbleSort", () => {
  it("should sort arrays correctly", () => {
    expect(bubbleSort([5, 4, 1, 2, 3])).to.eql([1, 2, 3, 4, 5]);
    expect(bubbleSort([])).to.eql([]);
    expect(bubbleSort([1, 2, 3])).to.eql([1, 2, 3]);
    expect(bubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).to.eql([
      1, 2, 5, 6, 7, 8, 12, 14,
    ]);
    expect(bubbleSort([5, 6, 7, 8, 9, 4])).to.eql([4, 5, 6, 7, 8, 9]);
    expect(bubbleSort([20, 30, 40])).to.eql([20, 30, 40]);
    expect(bubbleSort([2, 1, 3])).to.eql([1, 2, 3]);
    expect(bubbleSort([10, 15, 16, 100])).to.eql([10, 15, 16, 100]);
    expect(bubbleSort([10, 9, 11])).to.eql([9, 10, 11]);
    expect(bubbleSort([10, 9, 12])).to.eql([9, 10, 12]);
    expect(bubbleSort([3, 2, 1])).to.eql([1, 2, 3]);
    expect(bubbleSort([10, 9, 8])).to.eql([8, 9, 10]);
  });
});

describe("alternativeBubbleSort", () => {
  it("should sort arrays correctly", () => {
    expect(alternativeBubbleSort([5, 4, 1, 2, 3])).to.eql([1, 2, 3, 4, 5]);
    expect(alternativeBubbleSort([])).to.eql([]);
    expect(alternativeBubbleSort([1, 2, 3])).to.eql([1, 2, 3]);
    expect(alternativeBubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).to.eql([
      1, 2, 5, 6, 7, 8, 12, 14,
    ]);
    expect(alternativeBubbleSort([5, 6, 7, 8, 9, 4])).to.eql([
      4, 5, 6, 7, 8, 9,
    ]);
    expect(alternativeBubbleSort([20, 30, 40])).to.eql([20, 30, 40]);
    expect(alternativeBubbleSort([2, 1, 3])).to.eql([1, 2, 3]);
    expect(alternativeBubbleSort([10, 15, 16, 100])).to.eql([10, 15, 16, 100]);
    expect(alternativeBubbleSort([10, 9, 11])).to.eql([9, 10, 11]);
    expect(alternativeBubbleSort([10, 9, 12])).to.eql([9, 10, 12]);
    expect(alternativeBubbleSort([3, 2, 1])).to.eql([1, 2, 3]);
    expect(alternativeBubbleSort([10, 9, 8])).to.eql([8, 9, 10]);
  });
});
