import { expect } from "chai";
import {simplifiedWiggleSort} from '../src/SimplifiedWiggleSort'

describe('simplified wiggle sort', () => {
  it('simplified wiggle sort for chars', () => {
    const src = ['a', 'b', 'c'];
    expect(simplifiedWiggleSort(src)).to.eql(['a', 'c', 'b']);
  });

  it('wiggle sort with duplicates, even array', () => {
    const src = [2, 2, 1, 3];
    expect(simplifiedWiggleSort(src)).to.eql([1, 3, 2, 2]);
  });

  it('wiggle sort with duplicates, odd array', () => {
    const src = [1, 1, 1, 2, 4];
    expect(simplifiedWiggleSort(src)).to.eql([1, 4, 1, 2, 1]);
  });

  it(
    'simplified wiggle sort which leads to equal values next to ' +
      'each other',
    () => {
      const src = [3, 3, 5, 1];
      expect(simplifiedWiggleSort(src)).to.eql([1, 5, 3, 3]);
    }
  );
});

