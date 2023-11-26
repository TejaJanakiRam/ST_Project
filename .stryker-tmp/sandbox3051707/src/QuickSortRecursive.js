/*
    Quicksort is the most popular sorting algorithm and there have
    lots of different implementations but the "recursive" or "Partition in place"
    is one of the most efficient implementations below we have discussed how to
    implement it.

    Partition in place => "in place" Partition in place indicates that we
    do not need any other space to store the auxiliary array and the term
    "partition" denotes that we split the list into two parts one is less
    than the pivot and the other is greater than the pivot and repeats this
    process recursively and breaks the problem into sub-problems and makes
    it singular so that the behavior or "divide and conquer" get involved
    too.

    Problem & Source of Explanation => https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html
*/
// @ts-nocheck


/**
 * Partition in place QuickSort.
 * @param {number[]} inputList list of values.
 * @param {number} low lower index for partition.
 * @param {number} high higher index for partition.
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
const quickSort = (inputList, low, high) => {
  if (stryMutAct_9fa48("635")) {
    {}
  } else {
    stryCov_9fa48("635");
    if (stryMutAct_9fa48("638") ? false : stryMutAct_9fa48("637") ? true : stryMutAct_9fa48("636") ? Array.isArray(inputList) : (stryCov_9fa48("636", "637", "638"), !Array.isArray(inputList))) {
      if (stryMutAct_9fa48("639")) {
        {}
      } else {
        stryCov_9fa48("639");
        throw new TypeError(stryMutAct_9fa48("640") ? "" : (stryCov_9fa48("640"), 'Please input a valid list or array.'));
      }
    }
    if (stryMutAct_9fa48("644") ? low >= high : stryMutAct_9fa48("643") ? low <= high : stryMutAct_9fa48("642") ? false : stryMutAct_9fa48("641") ? true : (stryCov_9fa48("641", "642", "643", "644"), low < high)) {
      if (stryMutAct_9fa48("645")) {
        {}
      } else {
        stryCov_9fa48("645");
        // get the partition index.
        const pIndex = partition(inputList, low, high);
        // recursively call the quickSort method again.
        quickSort(inputList, low, stryMutAct_9fa48("646") ? pIndex + 1 : (stryCov_9fa48("646"), pIndex - 1));
        quickSort(inputList, stryMutAct_9fa48("647") ? pIndex - 1 : (stryCov_9fa48("647"), pIndex + 1), high);
      }
    }
    return inputList;
  }
};

/**
 * Partition In Place method.
 * @param {number[]} partitionList list for partitioning.
 * @param {number} low lower index for partition.
 * @param {number} high higher index for partition.
 * @returns {number} `pIndex` pivot index value.
 */
const partition = (partitionList, low, high) => {
  if (stryMutAct_9fa48("648")) {
    {}
  } else {
    stryCov_9fa48("648");
    const pivot = partitionList[high];
    let pIndex = low;
    for (let index = low; stryMutAct_9fa48("651") ? index > high - 1 : stryMutAct_9fa48("650") ? index < high - 1 : stryMutAct_9fa48("649") ? false : (stryCov_9fa48("649", "650", "651"), index <= (stryMutAct_9fa48("652") ? high + 1 : (stryCov_9fa48("652"), high - 1))); stryMutAct_9fa48("653") ? index-- : (stryCov_9fa48("653"), index++)) {
      if (stryMutAct_9fa48("654")) {
        {}
      } else {
        stryCov_9fa48("654");
        if (stryMutAct_9fa48("658") ? partitionList[index] >= pivot : stryMutAct_9fa48("657") ? partitionList[index] <= pivot : stryMutAct_9fa48("656") ? false : stryMutAct_9fa48("655") ? true : (stryCov_9fa48("655", "656", "657", "658"), partitionList[index] < pivot)) {
          if (stryMutAct_9fa48("659")) {
            {}
          } else {
            stryCov_9fa48("659");
            // swap variables using array destructuring
            ;
            [partitionList[index], partitionList[pIndex]] = stryMutAct_9fa48("660") ? [] : (stryCov_9fa48("660"), [partitionList[pIndex], partitionList[index]]);
            stryMutAct_9fa48("661") ? pIndex -= 1 : (stryCov_9fa48("661"), pIndex += 1);
          }
        }
      }
    }
    ;
    [partitionList[pIndex], partitionList[high]] = stryMutAct_9fa48("662") ? [] : (stryCov_9fa48("662"), [partitionList[high], partitionList[pIndex]]);
    return pIndex;
  }
};
export { quickSort };