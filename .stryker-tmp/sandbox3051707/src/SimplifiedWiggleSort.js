/*
 * Wiggle sort sorts the array into a wave like array.
 * An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] <= arr[1] >= arr[2] <= arr[3] >= arr[4] <= …..
 * KEEP IN MIND: there are also more strict definitions of wiggle sort which use
 * the rule arr[0] < arr[1] > arr[2] < arr[3] > arr[4] < … but this function
 * allows for equality of values next to each other.
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
import { quickSelectSearch } from '../Search/QuickSelectSearch.js';
export const simplifiedWiggleSort = function (arr) {
  if (stryMutAct_9fa48("747")) {
    {}
  } else {
    stryCov_9fa48("747");
    // find Median using QuickSelect
    let median = quickSelectSearch(arr, Math.floor(stryMutAct_9fa48("748") ? arr.length * 2.0 : (stryCov_9fa48("748"), arr.length / 2.0)));
    median = median[Math.floor(stryMutAct_9fa48("749") ? arr.length * 2.0 : (stryCov_9fa48("749"), arr.length / 2.0))];
    const sorted = stryMutAct_9fa48("750") ? new Array() : (stryCov_9fa48("750"), new Array(arr.length));
    let smallerThanMedianIndx = 0;
    let greaterThanMedianIndx = stryMutAct_9fa48("751") ? arr.length - 1 + arr.length % 2 : (stryCov_9fa48("751"), (stryMutAct_9fa48("752") ? arr.length + 1 : (stryCov_9fa48("752"), arr.length - 1)) - (stryMutAct_9fa48("753") ? arr.length * 2 : (stryCov_9fa48("753"), arr.length % 2)));
    for (let i = 0; stryMutAct_9fa48("756") ? i >= arr.length : stryMutAct_9fa48("755") ? i <= arr.length : stryMutAct_9fa48("754") ? false : (stryCov_9fa48("754", "755", "756"), i < arr.length); stryMutAct_9fa48("757") ? i-- : (stryCov_9fa48("757"), i++)) {
      if (stryMutAct_9fa48("758")) {
        {}
      } else {
        stryCov_9fa48("758");
        if (stryMutAct_9fa48("762") ? arr[i] <= median : stryMutAct_9fa48("761") ? arr[i] >= median : stryMutAct_9fa48("760") ? false : stryMutAct_9fa48("759") ? true : (stryCov_9fa48("759", "760", "761", "762"), arr[i] > median)) {
          if (stryMutAct_9fa48("763")) {
            {}
          } else {
            stryCov_9fa48("763");
            sorted[greaterThanMedianIndx] = arr[i];
            stryMutAct_9fa48("764") ? greaterThanMedianIndx += 2 : (stryCov_9fa48("764"), greaterThanMedianIndx -= 2);
          }
        } else {
          if (stryMutAct_9fa48("765")) {
            {}
          } else {
            stryCov_9fa48("765");
            if (stryMutAct_9fa48("769") ? smallerThanMedianIndx >= arr.length : stryMutAct_9fa48("768") ? smallerThanMedianIndx <= arr.length : stryMutAct_9fa48("767") ? false : stryMutAct_9fa48("766") ? true : (stryCov_9fa48("766", "767", "768", "769"), smallerThanMedianIndx < arr.length)) {
              if (stryMutAct_9fa48("770")) {
                {}
              } else {
                stryCov_9fa48("770");
                sorted[smallerThanMedianIndx] = arr[i];
                stryMutAct_9fa48("771") ? smallerThanMedianIndx -= 2 : (stryCov_9fa48("771"), smallerThanMedianIndx += 2);
              }
            } else {
              if (stryMutAct_9fa48("772")) {
                {}
              } else {
                stryCov_9fa48("772");
                sorted[greaterThanMedianIndx] = arr[i];
                stryMutAct_9fa48("773") ? greaterThanMedianIndx += 2 : (stryCov_9fa48("773"), greaterThanMedianIndx -= 2);
              }
            }
          }
        }
      }
    }
    return sorted;
  }
};