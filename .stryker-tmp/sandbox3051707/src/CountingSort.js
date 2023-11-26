/**
 * Counting sort is an algorithm for sorting a collection
 * of objects according to keys that are small integers.
 *
 * It is an integer sorting algorithm.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Counting_sort
 * Animated Visual: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
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
export const countingSort = (arr, min, max) => {
  if (stryMutAct_9fa48("158")) {
    {}
  } else {
    stryCov_9fa48("158");
    // Create an auxiliary resultant array
    const res = stryMutAct_9fa48("159") ? ["Stryker was here"] : (stryCov_9fa48("159"), []);
    // Create and initialize the frequency[count] array
    const count = (stryMutAct_9fa48("160") ? new Array() : (stryCov_9fa48("160"), new Array(stryMutAct_9fa48("161") ? max - min - 1 : (stryCov_9fa48("161"), (stryMutAct_9fa48("162") ? max + min : (stryCov_9fa48("162"), max - min)) + 1)))).fill(0);
    // Populate the freq array
    for (let i = 0; stryMutAct_9fa48("165") ? i >= arr.length : stryMutAct_9fa48("164") ? i <= arr.length : stryMutAct_9fa48("163") ? false : (stryCov_9fa48("163", "164", "165"), i < arr.length); stryMutAct_9fa48("166") ? i-- : (stryCov_9fa48("166"), i++)) {
      if (stryMutAct_9fa48("167")) {
        {}
      } else {
        stryCov_9fa48("167");
        stryMutAct_9fa48("168") ? count[arr[i] - min]-- : (stryCov_9fa48("168"), count[stryMutAct_9fa48("169") ? arr[i] + min : (stryCov_9fa48("169"), arr[i] - min)]++);
      }
    }
    // Create a prefix sum array out of the frequency[count] array
    stryMutAct_9fa48("170") ? count[0] += 1 : (stryCov_9fa48("170"), count[0] -= 1);
    for (let i = 1; stryMutAct_9fa48("173") ? i >= count.length : stryMutAct_9fa48("172") ? i <= count.length : stryMutAct_9fa48("171") ? false : (stryCov_9fa48("171", "172", "173"), i < count.length); stryMutAct_9fa48("174") ? i-- : (stryCov_9fa48("174"), i++)) {
      if (stryMutAct_9fa48("175")) {
        {}
      } else {
        stryCov_9fa48("175");
        stryMutAct_9fa48("176") ? count[i] -= count[i - 1] : (stryCov_9fa48("176"), count[i] += count[stryMutAct_9fa48("177") ? i + 1 : (stryCov_9fa48("177"), i - 1)]);
      }
    }
    // Populate the result array using the prefix sum array
    for (let i = stryMutAct_9fa48("178") ? arr.length + 1 : (stryCov_9fa48("178"), arr.length - 1); stryMutAct_9fa48("181") ? i < 0 : stryMutAct_9fa48("180") ? i > 0 : stryMutAct_9fa48("179") ? false : (stryCov_9fa48("179", "180", "181"), i >= 0); stryMutAct_9fa48("182") ? i++ : (stryCov_9fa48("182"), i--)) {
      if (stryMutAct_9fa48("183")) {
        {}
      } else {
        stryCov_9fa48("183");
        res[count[stryMutAct_9fa48("184") ? arr[i] + min : (stryCov_9fa48("184"), arr[i] - min)]] = arr[i];
        stryMutAct_9fa48("185") ? count[arr[i] - min]++ : (stryCov_9fa48("185"), count[stryMutAct_9fa48("186") ? arr[i] + min : (stryCov_9fa48("186"), arr[i] - min)]--);
      }
    }
    return res;
  }
};

/**
 * Implementation of Counting Sort
 */
// const array = [3, 0, 2, 5, 4, 1]
// countingSort(array, 0, 5)