/*
  Source:
    https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm

  Complexity:
    O(|V|^3) where V is the set of vertices
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
const FloydWarshall = dist => {
  if (stryMutAct_9fa48("331")) {
    {}
  } else {
    stryCov_9fa48("331");
    // Input:- dist: 2D Array where dist[i][j] = edge weight b/w i and j
    // Output:- dist: 2D Array where dist[i][j] = shortest dist b/w i and j
    const n = dist.length;
    for (let k = 0; stryMutAct_9fa48("334") ? k >= n : stryMutAct_9fa48("333") ? k <= n : stryMutAct_9fa48("332") ? false : (stryCov_9fa48("332", "333", "334"), k < n); stryMutAct_9fa48("335") ? k-- : (stryCov_9fa48("335"), k++)) {
      if (stryMutAct_9fa48("336")) {
        {}
      } else {
        stryCov_9fa48("336");
        for (let i = 0; stryMutAct_9fa48("339") ? i >= n : stryMutAct_9fa48("338") ? i <= n : stryMutAct_9fa48("337") ? false : (stryCov_9fa48("337", "338", "339"), i < n); stryMutAct_9fa48("340") ? i-- : (stryCov_9fa48("340"), i++)) {
          if (stryMutAct_9fa48("341")) {
            {}
          } else {
            stryCov_9fa48("341");
            for (let j = 0; stryMutAct_9fa48("344") ? j >= n : stryMutAct_9fa48("343") ? j <= n : stryMutAct_9fa48("342") ? false : (stryCov_9fa48("342", "343", "344"), j < n); stryMutAct_9fa48("345") ? j-- : (stryCov_9fa48("345"), j++)) {
              if (stryMutAct_9fa48("346")) {
                {}
              } else {
                stryCov_9fa48("346");
                if (stryMutAct_9fa48("350") ? dist[i][j] <= dist[i][k] + dist[k][j] : stryMutAct_9fa48("349") ? dist[i][j] >= dist[i][k] + dist[k][j] : stryMutAct_9fa48("348") ? false : stryMutAct_9fa48("347") ? true : (stryCov_9fa48("347", "348", "349", "350"), dist[i][j] > (stryMutAct_9fa48("351") ? dist[i][k] - dist[k][j] : (stryCov_9fa48("351"), dist[i][k] + dist[k][j])))) {
                  if (stryMutAct_9fa48("352")) {
                    {}
                  } else {
                    stryCov_9fa48("352");
                    // dist from i to j via k is lesser than the current distance
                    dist[i][j] = stryMutAct_9fa48("353") ? dist[i][k] - dist[k][j] : (stryCov_9fa48("353"), dist[i][k] + dist[k][j]);
                  }
                }
              }
            }
          }
        }
      }
    }
    return dist;
  }
};
export { FloydWarshall };

// For the following graph (edge weights are shown in brackets)
//  4       1       dist[1][2] = dist[2][1] = 1
//   \  (2)/ \      dist[1][3] = dist[3][1] = 2
//    \   /   \(1)  dist[1][4] = dist[4][1] = Infinity
//  (1)\ /     \    dist[3][4] = dist[4][3] = 1
//      3       2   dist[2][4] = dist[4][2] = Infinity
//                  dist[2][3] = dist[3][2] = Infinity
// Output should be:
// [ [0, 1, 2, 3],
//   [1, 0, 3, 4],
//   [2, 3, 0, 1],
//   [3, 4, 1, 0] ]

// FloydWarshall(
//     [[0, 1, 2, Infinity],
//       [1, 0, Infinity, Infinity],
//       [2, Infinity, 0, 1],
//       [Infinity, Infinity, 1, 0]
//     ]
//   )