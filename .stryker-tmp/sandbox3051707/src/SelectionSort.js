/* The selection sort algorithm sorts an array by repeatedly finding the minimum element
 *(considering ascending order) from unsorted part and putting it at the beginning. The
 *algorithm maintains two subarrays in a given array.
 *1) The subarray which is already sorted.
 *2) Remaining subarray which is unsorted.
 *
 *In every iteration of selection sort, the minimum element (considering ascending order)
 *from the unsorted subarray is picked and moved to the sorted subarray.
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
export const selectionSort = list => {
  if (stryMutAct_9fa48("712")) {
    {}
  } else {
    stryCov_9fa48("712");
    if (stryMutAct_9fa48("715") ? false : stryMutAct_9fa48("714") ? true : stryMutAct_9fa48("713") ? Array.isArray(list) : (stryCov_9fa48("713", "714", "715"), !Array.isArray(list))) {
      if (stryMutAct_9fa48("716")) {
        {}
      } else {
        stryCov_9fa48("716");
        throw new TypeError(stryMutAct_9fa48("717") ? "" : (stryCov_9fa48("717"), 'Given input is not an array'));
      }
    }
    const items = stryMutAct_9fa48("718") ? [] : (stryCov_9fa48("718"), [...list]); // We don't want to modify the original array
    const length = items.length;
    for (let i = 0; stryMutAct_9fa48("721") ? i >= length - 1 : stryMutAct_9fa48("720") ? i <= length - 1 : stryMutAct_9fa48("719") ? false : (stryCov_9fa48("719", "720", "721"), i < (stryMutAct_9fa48("722") ? length + 1 : (stryCov_9fa48("722"), length - 1))); stryMutAct_9fa48("723") ? i-- : (stryCov_9fa48("723"), i++)) {
      if (stryMutAct_9fa48("724")) {
        {}
      } else {
        stryCov_9fa48("724");
        if (stryMutAct_9fa48("727") ? typeof items[i] === 'number' : stryMutAct_9fa48("726") ? false : stryMutAct_9fa48("725") ? true : (stryCov_9fa48("725", "726", "727"), typeof items[i] !== (stryMutAct_9fa48("728") ? "" : (stryCov_9fa48("728"), 'number')))) {
          if (stryMutAct_9fa48("729")) {
            {}
          } else {
            stryCov_9fa48("729");
            throw new TypeError(stryMutAct_9fa48("730") ? "" : (stryCov_9fa48("730"), 'One of the items in your array is not a number'));
          }
        }
        // Number of passes
        let min = i; // min holds the current minimum number position for each pass; i holds the Initial min number
        for (let j = stryMutAct_9fa48("731") ? i - 1 : (stryCov_9fa48("731"), i + 1); stryMutAct_9fa48("734") ? j >= length : stryMutAct_9fa48("733") ? j <= length : stryMutAct_9fa48("732") ? false : (stryCov_9fa48("732", "733", "734"), j < length); stryMutAct_9fa48("735") ? j-- : (stryCov_9fa48("735"), j++)) {
          if (stryMutAct_9fa48("736")) {
            {}
          } else {
            stryCov_9fa48("736");
            // Note that j = i + 1 as we only need to go through unsorted array
            if (stryMutAct_9fa48("740") ? items[j] >= items[min] : stryMutAct_9fa48("739") ? items[j] <= items[min] : stryMutAct_9fa48("738") ? false : stryMutAct_9fa48("737") ? true : (stryCov_9fa48("737", "738", "739", "740"), items[j] < items[min])) {
              if (stryMutAct_9fa48("741")) {
                {}
              } else {
                stryCov_9fa48("741");
                // Compare the numbers
                min = j; // Change the current min number position if a smaller num is found
              }
            }
          }
        }

        if (stryMutAct_9fa48("744") ? min === i : stryMutAct_9fa48("743") ? false : stryMutAct_9fa48("742") ? true : (stryCov_9fa48("742", "743", "744"), min !== i)) {
          if (stryMutAct_9fa48("745")) {
            {}
          } else {
            stryCov_9fa48("745");
            // After each pass, if the current min num != initial min num, exchange the position.
            // Swap the numbers
            ;
            [items[i], items[min]] = stryMutAct_9fa48("746") ? [] : (stryCov_9fa48("746"), [items[min], items[i]]);
          }
        }
      }
    }
    return items;
  }
};