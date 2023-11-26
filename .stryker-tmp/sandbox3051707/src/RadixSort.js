/*
 * Radix sorts an integer array without comparing the integers.
 * It groups the integers by their digits which share the same
 * significant position.
 * For more information see: https://en.wikipedia.org/wiki/Radix_sort
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
export function radixSort(items, RADIX) {
  if (stryMutAct_9fa48("663")) {
    {}
  } else {
    stryCov_9fa48("663");
    // default radix is then because we usually count to base 10
    if (stryMutAct_9fa48("666") ? RADIX === undefined && RADIX < 1 : stryMutAct_9fa48("665") ? false : stryMutAct_9fa48("664") ? true : (stryCov_9fa48("664", "665", "666"), (stryMutAct_9fa48("668") ? RADIX !== undefined : stryMutAct_9fa48("667") ? false : (stryCov_9fa48("667", "668"), RADIX === undefined)) || (stryMutAct_9fa48("671") ? RADIX >= 1 : stryMutAct_9fa48("670") ? RADIX <= 1 : stryMutAct_9fa48("669") ? false : (stryCov_9fa48("669", "670", "671"), RADIX < 1)))) {
      if (stryMutAct_9fa48("672")) {
        {}
      } else {
        stryCov_9fa48("672");
        RADIX = 10;
      }
    }
    let maxLength = stryMutAct_9fa48("673") ? true : (stryCov_9fa48("673"), false);
    let placement = 1;
    while (stryMutAct_9fa48("675") ? false : stryMutAct_9fa48("674") ? maxLength : (stryCov_9fa48("674", "675"), !maxLength)) {
      if (stryMutAct_9fa48("676")) {
        {}
      } else {
        stryCov_9fa48("676");
        maxLength = stryMutAct_9fa48("677") ? false : (stryCov_9fa48("677"), true);
        const buckets = stryMutAct_9fa48("678") ? ["Stryker was here"] : (stryCov_9fa48("678"), []);
        for (let i = 0; stryMutAct_9fa48("681") ? i >= RADIX : stryMutAct_9fa48("680") ? i <= RADIX : stryMutAct_9fa48("679") ? false : (stryCov_9fa48("679", "680", "681"), i < RADIX); stryMutAct_9fa48("682") ? i-- : (stryCov_9fa48("682"), i++)) {
          if (stryMutAct_9fa48("683")) {
            {}
          } else {
            stryCov_9fa48("683");
            buckets.push(stryMutAct_9fa48("684") ? ["Stryker was here"] : (stryCov_9fa48("684"), []));
          }
        }
        for (let j = 0; stryMutAct_9fa48("687") ? j >= items.length : stryMutAct_9fa48("686") ? j <= items.length : stryMutAct_9fa48("685") ? false : (stryCov_9fa48("685", "686", "687"), j < items.length); stryMutAct_9fa48("688") ? j-- : (stryCov_9fa48("688"), j++)) {
          if (stryMutAct_9fa48("689")) {
            {}
          } else {
            stryCov_9fa48("689");
            const tmp = stryMutAct_9fa48("690") ? items[j] * placement : (stryCov_9fa48("690"), items[j] / placement);
            buckets[Math.floor(stryMutAct_9fa48("691") ? tmp * RADIX : (stryCov_9fa48("691"), tmp % RADIX))].push(items[j]);
            if (stryMutAct_9fa48("694") ? maxLength || tmp > 0 : stryMutAct_9fa48("693") ? false : stryMutAct_9fa48("692") ? true : (stryCov_9fa48("692", "693", "694"), maxLength && (stryMutAct_9fa48("697") ? tmp <= 0 : stryMutAct_9fa48("696") ? tmp >= 0 : stryMutAct_9fa48("695") ? true : (stryCov_9fa48("695", "696", "697"), tmp > 0)))) {
              if (stryMutAct_9fa48("698")) {
                {}
              } else {
                stryCov_9fa48("698");
                maxLength = stryMutAct_9fa48("699") ? true : (stryCov_9fa48("699"), false);
              }
            }
          }
        }
        let a = 0;
        for (let b = 0; stryMutAct_9fa48("702") ? b >= RADIX : stryMutAct_9fa48("701") ? b <= RADIX : stryMutAct_9fa48("700") ? false : (stryCov_9fa48("700", "701", "702"), b < RADIX); stryMutAct_9fa48("703") ? b-- : (stryCov_9fa48("703"), b++)) {
          if (stryMutAct_9fa48("704")) {
            {}
          } else {
            stryCov_9fa48("704");
            const buck = buckets[b];
            for (let k = 0; stryMutAct_9fa48("707") ? k >= buck.length : stryMutAct_9fa48("706") ? k <= buck.length : stryMutAct_9fa48("705") ? false : (stryCov_9fa48("705", "706", "707"), k < buck.length); stryMutAct_9fa48("708") ? k-- : (stryCov_9fa48("708"), k++)) {
              if (stryMutAct_9fa48("709")) {
                {}
              } else {
                stryCov_9fa48("709");
                items[a] = buck[k];
                stryMutAct_9fa48("710") ? a-- : (stryCov_9fa48("710"), a++);
              }
            }
          }
        }
        stryMutAct_9fa48("711") ? placement /= RADIX : (stryCov_9fa48("711"), placement *= RADIX);
      }
    }
    return items;
  }
}