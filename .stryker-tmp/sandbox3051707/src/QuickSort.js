/**
 * @function QuickSort
 * @description Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
 * @param {Integer[]} items - Array of integers
 * @return {Integer[]} - Sorted array.
 * @see [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
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
function quickSort(items) {
  if (stryMutAct_9fa48("615")) {
    {}
  } else {
    stryCov_9fa48("615");
    const length = items.length;
    if (stryMutAct_9fa48("619") ? length > 1 : stryMutAct_9fa48("618") ? length < 1 : stryMutAct_9fa48("617") ? false : stryMutAct_9fa48("616") ? true : (stryCov_9fa48("616", "617", "618", "619"), length <= 1)) {
      if (stryMutAct_9fa48("620")) {
        {}
      } else {
        stryCov_9fa48("620");
        return items;
      }
    }
    const PIVOT = items[0];
    const GREATER = stryMutAct_9fa48("621") ? ["Stryker was here"] : (stryCov_9fa48("621"), []);
    const LESSER = stryMutAct_9fa48("622") ? ["Stryker was here"] : (stryCov_9fa48("622"), []);
    for (let i = 1; stryMutAct_9fa48("625") ? i >= length : stryMutAct_9fa48("624") ? i <= length : stryMutAct_9fa48("623") ? false : (stryCov_9fa48("623", "624", "625"), i < length); stryMutAct_9fa48("626") ? i-- : (stryCov_9fa48("626"), i++)) {
      if (stryMutAct_9fa48("627")) {
        {}
      } else {
        stryCov_9fa48("627");
        if (stryMutAct_9fa48("631") ? items[i] <= PIVOT : stryMutAct_9fa48("630") ? items[i] >= PIVOT : stryMutAct_9fa48("629") ? false : stryMutAct_9fa48("628") ? true : (stryCov_9fa48("628", "629", "630", "631"), items[i] > PIVOT)) {
          if (stryMutAct_9fa48("632")) {
            {}
          } else {
            stryCov_9fa48("632");
            GREATER.push(items[i]);
          }
        } else {
          if (stryMutAct_9fa48("633")) {
            {}
          } else {
            stryCov_9fa48("633");
            LESSER.push(items[i]);
          }
        }
      }
    }
    const sorted = stryMutAct_9fa48("634") ? [] : (stryCov_9fa48("634"), [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)]);
    return sorted;
  }
}
export { quickSort };