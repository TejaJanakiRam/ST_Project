import { expect } from "chai";
import { quickSelectSearch } from "../src/QuickSelectSearch.js";

describe('quickSelectSearch', () => {
    // it('should correctly find the kth smallest element in an array', () => {
    //   // Test case 1
    //   const array1 = [3, 1, 4, 1, 5, 9, 2, 6];
    //   const k1 = 3;
    //   const result1 = quickSelectSearch(array1, k1);
    //   const expected1 = [2, 1, 1, 3, 5, 9, 4, 6];
    //   expect(result1).to.deep.equal(expected1);
  
    //   // Test case 2
    //   const array2 = [5, 2, 1, 7, 3, 8, 6, 4];
    //   const k2 = 4;
    //   const result2 = quickSelectSearch(array2, k2);
    //   const expected2 = [2, 1, 3, 4, 5, 8, 6, 7];
    //   expect(result2).to.deep.equal(expected2);
  
    //   // Test case 3
    //   const array3 = [10, 7, 8, 9, 1, 5];
    //   const k3 = 2;
    //   const result3 = quickSelectSearch(array3, k3);
    //   const expected3 = [1, 5, 8, 9, 10, 7];
    //   expect(result3).to.deep.equal(expected3);
    // });
  
    it('should throw an error for invalid arguments', () => {
      // Test case with an empty array
      const arrayEmpty = [];
      const kEmpty = 1;
      expect(() => quickSelectSearch(arrayEmpty, kEmpty)).to.throw('Invalid arguments');
  
      // Test case with k greater than array length
      const arrayInvalid = [1, 2, 3];
      const kInvalid = 4;
      expect(() => quickSelectSearch(arrayInvalid, kInvalid)).to.throw('Invalid arguments');
    });
  });
  