/*
The Bellman–Ford algorithm is an algorithm that computes shortest paths
from a single source vertex to all of the other vertices in a weighted digraph.
It also detects negative weight cycle.

Complexity:
    Worst-case performance O(VE)
    Best-case performance O(E)
    Worst-case space complexity O(V)

Reference:
    https://en.wikipedia.org/wiki/Bellman–Ford_algorithm
    https://cp-algorithms.com/graph/bellman_ford.html

*/
// @ts-nocheck


/**
 *
 * @param graph Graph in the format (u, v, w) where
 *  the edge is from vertex u to v. And weight
 *  of the edge is w.
 * @param V Number of vertices in graph
 * @param E Number of edges in graph
 * @param src Starting node
 * @param dest Destination node
 * @returns Shortest distance from source to destination
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
function BellmanFord(graph, V, E, src, dest) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    // Initialize distance of all vertices as infinite.
    const dis = stryMutAct_9fa48("1") ? Array().fill(Infinity) : (stryCov_9fa48("1"), Array(V).fill(Infinity));
    // initialize distance of source as 0
    dis[src] = 0;

    // Relax all edges |V| - 1 times. A simple
    // shortest path from src to any other
    // vertex can have at-most |V| - 1 edges
    for (let i = 0; stryMutAct_9fa48("4") ? i >= V - 1 : stryMutAct_9fa48("3") ? i <= V - 1 : stryMutAct_9fa48("2") ? false : (stryCov_9fa48("2", "3", "4"), i < (stryMutAct_9fa48("5") ? V + 1 : (stryCov_9fa48("5"), V - 1))); stryMutAct_9fa48("6") ? i-- : (stryCov_9fa48("6"), i++)) {
      if (stryMutAct_9fa48("7")) {
        {}
      } else {
        stryCov_9fa48("7");
        for (let j = 0; stryMutAct_9fa48("10") ? j >= E : stryMutAct_9fa48("9") ? j <= E : stryMutAct_9fa48("8") ? false : (stryCov_9fa48("8", "9", "10"), j < E); stryMutAct_9fa48("11") ? j-- : (stryCov_9fa48("11"), j++)) {
          if (stryMutAct_9fa48("12")) {
            {}
          } else {
            stryCov_9fa48("12");
            if (stryMutAct_9fa48("16") ? dis[graph[j][0]] + graph[j][2] >= dis[graph[j][1]] : stryMutAct_9fa48("15") ? dis[graph[j][0]] + graph[j][2] <= dis[graph[j][1]] : stryMutAct_9fa48("14") ? false : stryMutAct_9fa48("13") ? true : (stryCov_9fa48("13", "14", "15", "16"), (stryMutAct_9fa48("17") ? dis[graph[j][0]] - graph[j][2] : (stryCov_9fa48("17"), dis[graph[j][0]] + graph[j][2])) < dis[graph[j][1]])) {
              if (stryMutAct_9fa48("18")) {
                {}
              } else {
                stryCov_9fa48("18");
                dis[graph[j][1]] = stryMutAct_9fa48("19") ? dis[graph[j][0]] - graph[j][2] : (stryCov_9fa48("19"), dis[graph[j][0]] + graph[j][2]);
              }
            }
          }
        }
      }
    }
    // check for negative-weight cycles.
    for (let i = 0; stryMutAct_9fa48("22") ? i >= E : stryMutAct_9fa48("21") ? i <= E : stryMutAct_9fa48("20") ? false : (stryCov_9fa48("20", "21", "22"), i < E); stryMutAct_9fa48("23") ? i-- : (stryCov_9fa48("23"), i++)) {
      if (stryMutAct_9fa48("24")) {
        {}
      } else {
        stryCov_9fa48("24");
        const x = graph[i][0];
        const y = graph[i][1];
        const weight = graph[i][2];
        if (stryMutAct_9fa48("27") ? dis[x] !== Infinity || dis[x] + weight < dis[y] : stryMutAct_9fa48("26") ? false : stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25", "26", "27"), (stryMutAct_9fa48("29") ? dis[x] === Infinity : stryMutAct_9fa48("28") ? true : (stryCov_9fa48("28", "29"), dis[x] !== Infinity)) && (stryMutAct_9fa48("32") ? dis[x] + weight >= dis[y] : stryMutAct_9fa48("31") ? dis[x] + weight <= dis[y] : stryMutAct_9fa48("30") ? true : (stryCov_9fa48("30", "31", "32"), (stryMutAct_9fa48("33") ? dis[x] - weight : (stryCov_9fa48("33"), dis[x] + weight)) < dis[y])))) {
          if (stryMutAct_9fa48("34")) {
            {}
          } else {
            stryCov_9fa48("34");
            return null;
          }
        }
      }
    }
    for (let i = 0; stryMutAct_9fa48("37") ? i >= V : stryMutAct_9fa48("36") ? i <= V : stryMutAct_9fa48("35") ? false : (stryCov_9fa48("35", "36", "37"), i < V); stryMutAct_9fa48("38") ? i-- : (stryCov_9fa48("38"), i++)) {
      if (stryMutAct_9fa48("39")) {
        {}
      } else {
        stryCov_9fa48("39");
        if (stryMutAct_9fa48("42") ? i !== dest : stryMutAct_9fa48("41") ? false : stryMutAct_9fa48("40") ? true : (stryCov_9fa48("40", "41", "42"), i === dest)) return dis[i];
      }
    }
  }
}
// const graph = [
//   [0, 1, 5],
//   [1, 2, -3],
//   [2, 0, 2],
// ];
// const V = 3; // Number of vertices
// const E = 3; // Number of edges
// const src = 0; // Source vertex
// const dest = 2; // Destination vertex
// console.log(BellmanFord(graph, V, E, src, dest));
export { BellmanFord };