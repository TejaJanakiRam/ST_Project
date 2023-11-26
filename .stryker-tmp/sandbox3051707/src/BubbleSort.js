/* Bubble Sort is an algorithm to sort an array. It
 *  compares adjacent element and swaps their position
 *  The big O on bubble sort in worst and best case is O(N^2).
 *  Not efficient.
 *  Somehow if the array is sorted or nearly sorted then we can optimize bubble sort by adding a flag.
 *
 *  In bubble sort, we keep iterating while something was swapped in
 *  the previous inner-loop iteration. By swapped I mean, in the
 *  inner loop iteration, we check each number if the number proceeding
 *  it is greater than itself, if so we swap them.
 *
 *  Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
 *  Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort
 */
// @ts-nocheck


/**
 * Using 2 for loops.
 */function stryNS_9fa48() {
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
export function bubbleSort(items) {
  if (stryMutAct_9fa48("82")) {
    {}
  } else {
    stryCov_9fa48("82");
    const length = items.length;
    let noSwaps;
    for (let i = length; stryMutAct_9fa48("85") ? i <= 0 : stryMutAct_9fa48("84") ? i >= 0 : stryMutAct_9fa48("83") ? false : (stryCov_9fa48("83", "84", "85"), i > 0); stryMutAct_9fa48("86") ? i++ : (stryCov_9fa48("86"), i--)) {
      if (stryMutAct_9fa48("87")) {
        {}
      } else {
        stryCov_9fa48("87");
        // flag for optimization
        noSwaps = stryMutAct_9fa48("88") ? false : (stryCov_9fa48("88"), true);
        // Number of passes
        for (let j = 0; stryMutAct_9fa48("91") ? j >= i - 1 : stryMutAct_9fa48("90") ? j <= i - 1 : stryMutAct_9fa48("89") ? false : (stryCov_9fa48("89", "90", "91"), j < (stryMutAct_9fa48("92") ? i + 1 : (stryCov_9fa48("92"), i - 1))); stryMutAct_9fa48("93") ? j-- : (stryCov_9fa48("93"), j++)) {
          if (stryMutAct_9fa48("94")) {
            {}
          } else {
            stryCov_9fa48("94");
            // Compare the adjacent positions
            if (stryMutAct_9fa48("98") ? items[j] <= items[j + 1] : stryMutAct_9fa48("97") ? items[j] >= items[j + 1] : stryMutAct_9fa48("96") ? false : stryMutAct_9fa48("95") ? true : (stryCov_9fa48("95", "96", "97", "98"), items[j] > items[stryMutAct_9fa48("99") ? j - 1 : (stryCov_9fa48("99"), j + 1)])) {
              if (stryMutAct_9fa48("100")) {
                {}
              } else {
                stryCov_9fa48("100");
                // Swap the numbers
                ;
                [items[j], items[stryMutAct_9fa48("101") ? j - 1 : (stryCov_9fa48("101"), j + 1)]] = stryMutAct_9fa48("102") ? [] : (stryCov_9fa48("102"), [items[stryMutAct_9fa48("103") ? j - 1 : (stryCov_9fa48("103"), j + 1)], items[j]]);
                noSwaps = stryMutAct_9fa48("104") ? true : (stryCov_9fa48("104"), false);
              }
            }
          }
        }
        if (stryMutAct_9fa48("106") ? false : stryMutAct_9fa48("105") ? true : (stryCov_9fa48("105", "106"), noSwaps)) {
          if (stryMutAct_9fa48("107")) {
            {}
          } else {
            stryCov_9fa48("107");
            break;
          }
        }
      }
    }
    return items;
  }
}

/**
 * Using a while loop and a for loop.
 */
export function alternativeBubbleSort(arr) {
  if (stryMutAct_9fa48("108")) {
    {}
  } else {
    stryCov_9fa48("108");
    let swapped = stryMutAct_9fa48("109") ? false : (stryCov_9fa48("109"), true);
    while (stryMutAct_9fa48("110") ? false : (stryCov_9fa48("110"), swapped)) {
      if (stryMutAct_9fa48("111")) {
        {}
      } else {
        stryCov_9fa48("111");
        swapped = stryMutAct_9fa48("112") ? true : (stryCov_9fa48("112"), false);
        for (let i = 0; stryMutAct_9fa48("115") ? i >= arr.length - 1 : stryMutAct_9fa48("114") ? i <= arr.length - 1 : stryMutAct_9fa48("113") ? false : (stryCov_9fa48("113", "114", "115"), i < (stryMutAct_9fa48("116") ? arr.length + 1 : (stryCov_9fa48("116"), arr.length - 1))); stryMutAct_9fa48("117") ? i-- : (stryCov_9fa48("117"), i++)) {
          if (stryMutAct_9fa48("118")) {
            {}
          } else {
            stryCov_9fa48("118");
            if (stryMutAct_9fa48("122") ? arr[i] <= arr[i + 1] : stryMutAct_9fa48("121") ? arr[i] >= arr[i + 1] : stryMutAct_9fa48("120") ? false : stryMutAct_9fa48("119") ? true : (stryCov_9fa48("119", "120", "121", "122"), arr[i] > arr[stryMutAct_9fa48("123") ? i - 1 : (stryCov_9fa48("123"), i + 1)])) {
              if (stryMutAct_9fa48("124")) {
                {}
              } else {
                stryCov_9fa48("124");
                ;
                [arr[i], arr[stryMutAct_9fa48("125") ? i - 1 : (stryCov_9fa48("125"), i + 1)]] = stryMutAct_9fa48("126") ? [] : (stryCov_9fa48("126"), [arr[stryMutAct_9fa48("127") ? i - 1 : (stryCov_9fa48("127"), i + 1)], arr[i]]);
                swapped = stryMutAct_9fa48("128") ? false : (stryCov_9fa48("128"), true);
              }
            }
          }
        }
      }
    }
    return arr;
  }
}