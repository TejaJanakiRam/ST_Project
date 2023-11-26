import { radixSort } from '../src/RadixSort'
import { expect } from "chai";

describe('Radix Sort', () => {
  it('should sort the array [4, 3, 2, 1] to [1, 2, 3, 4]', () => {
    const arr = [4, 3, 2, 1];
    const res = radixSort(arr, 10);
    expect(res).to.eql([1, 2, 3, 4]);
  });

  it('should handle an empty array and return []', () => {
    const arr = [];
    const res = radixSort(arr, 10);
    expect(res).to.eql([]);
  });

  it('should sort the array [14, 16, 10, 12] to [10, 12, 14, 16]', () => {
    const arr = [14, 16, 10, 12];
    const res = radixSort(arr, 10);
    expect(res).to.eql([10, 12, 14, 16]);
  });
});

