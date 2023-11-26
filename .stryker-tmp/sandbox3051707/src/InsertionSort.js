/* In insertion sort, we divide the initial unsorted array into two parts;
 * sorted part and unsorted part. Initially the sorted part just has one
 * element (Array of only 1 element is a sorted array). We then pick up
 * element one by one from unsorted part; insert into the sorted part at
 * the correct position and expand sorted part one element at a time.
 */
// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export function insertionSort(unsortedList) {
  if (stryMutAct_9fa48("354")) {
    {}
  } else {
    stryCov_9fa48("354");
    const len = unsortedList.length;
    for (let i = 1; stryMutAct_9fa48("357") ? i >= len : stryMutAct_9fa48("356") ? i <= len : stryMutAct_9fa48("355") ? false : (stryCov_9fa48("355", "356", "357"), i < len); stryMutAct_9fa48("358") ? i-- : (stryCov_9fa48("358"), i++)) {
      if (stryMutAct_9fa48("359")) {
        {}
      } else {
        stryCov_9fa48("359");
        let j;
        const tmp = unsortedList[i]; // Copy of the current element.
        /* Check through the sorted part and compare with the number in tmp. If large, shift the number */
        for (j = stryMutAct_9fa48("360") ? i + 1 : (stryCov_9fa48("360"), i - 1); stryMutAct_9fa48("362") ? j >= 0 || unsortedList[j] > tmp : stryMutAct_9fa48("361") ? false : (stryCov_9fa48("361", "362"), (stryMutAct_9fa48("365") ? j < 0 : stryMutAct_9fa48("364") ? j > 0 : stryMutAct_9fa48("363") ? true : (stryCov_9fa48("363", "364", "365"), j >= 0)) && (stryMutAct_9fa48("368") ? unsortedList[j] <= tmp : stryMutAct_9fa48("367") ? unsortedList[j] >= tmp : stryMutAct_9fa48("366") ? true : (stryCov_9fa48("366", "367", "368"), unsortedList[j] > tmp))); stryMutAct_9fa48("369") ? j++ : (stryCov_9fa48("369"), j--)) {
          if (stryMutAct_9fa48("370")) {
            {}
          } else {
            stryCov_9fa48("370");
            // Shift the number
            unsortedList[stryMutAct_9fa48("371") ? j - 1 : (stryCov_9fa48("371"), j + 1)] = unsortedList[j];
          }
        }
        // Insert the copied number at the correct position
        // in sorted part.
        unsortedList[stryMutAct_9fa48("372") ? j - 1 : (stryCov_9fa48("372"), j + 1)] = tmp;
      }
    }
  }
}

/**
 * @function insertionSortAlternativeImplementation
 * @description InsertionSort is a stable sorting algorithm
 * @param {Integer[]} array - Array of integers
 * @return {Integer[]} - Sorted array
 * @see [InsertionSort](https://en.wikipedia.org/wiki/Quicksort)
 */

/*
  * Big-O Analysis
      * Time Complexity
        - O(N^2) on average and worst case scenario
        - O(N) on best case scenario (when input array is already almost sorted)
      * Space Complexity
        - O(1)
*/

export function insertionSortAlternativeImplementation(array) {
  if (stryMutAct_9fa48("373")) {
    {}
  } else {
    stryCov_9fa48("373");
    const length = array.length;
    if (stryMutAct_9fa48("377") ? length >= 2 : stryMutAct_9fa48("376") ? length <= 2 : stryMutAct_9fa48("375") ? false : stryMutAct_9fa48("374") ? true : (stryCov_9fa48("374", "375", "376", "377"), length < 2)) return array;
    for (let i = 1; stryMutAct_9fa48("380") ? i >= length : stryMutAct_9fa48("379") ? i <= length : stryMutAct_9fa48("378") ? false : (stryCov_9fa48("378", "379", "380"), i < length); stryMutAct_9fa48("381") ? i-- : (stryCov_9fa48("381"), i++)) {
      if (stryMutAct_9fa48("382")) {
        {}
      } else {
        stryCov_9fa48("382");
        // Take current element in array
        const currentItem = array[i];
        // Take index of previous element in array
        let j = stryMutAct_9fa48("383") ? i + 1 : (stryCov_9fa48("383"), i - 1);

        // While j >= 0 and previous element is greater than current element
        while (stryMutAct_9fa48("385") ? j >= 0 || array[j] > currentItem : stryMutAct_9fa48("384") ? false : (stryCov_9fa48("384", "385"), (stryMutAct_9fa48("388") ? j < 0 : stryMutAct_9fa48("387") ? j > 0 : stryMutAct_9fa48("386") ? true : (stryCov_9fa48("386", "387", "388"), j >= 0)) && (stryMutAct_9fa48("391") ? array[j] <= currentItem : stryMutAct_9fa48("390") ? array[j] >= currentItem : stryMutAct_9fa48("389") ? true : (stryCov_9fa48("389", "390", "391"), array[j] > currentItem)))) {
          if (stryMutAct_9fa48("392")) {
            {}
          } else {
            stryCov_9fa48("392");
            // Move previous, greater element towards the unsorted part
            array[stryMutAct_9fa48("393") ? j - 1 : (stryCov_9fa48("393"), j + 1)] = array[j];
            stryMutAct_9fa48("394") ? j++ : (stryCov_9fa48("394"), j--);
          }
        }
        // Insert currentItem number at the correct position in sorted part.
        array[stryMutAct_9fa48("395") ? j - 1 : (stryCov_9fa48("395"), j + 1)] = currentItem;
      }
    }
    // Return array sorted in ascending order
    return array;
  }
}