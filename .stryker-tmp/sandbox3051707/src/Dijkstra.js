/**
 * Author: Samarth Jain
 * Dijkstra's Algorithm implementation in JavaScript
 * Dijkstra's Algorithm calculates the minimum distance between two nodes.
 * It is used to find the shortest path.
 * It uses graph data structure.
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
function createGraph(V, E) {
  if (stryMutAct_9fa48("242")) {
    {}
  } else {
    stryCov_9fa48("242");
    // V - Number of vertices in graph
    // E - Number of edges in graph (u,v,w)
    const adjList = stryMutAct_9fa48("243") ? ["Stryker was here"] : (stryCov_9fa48("243"), []); // Adjacency list
    for (let i = 0; stryMutAct_9fa48("246") ? i >= V : stryMutAct_9fa48("245") ? i <= V : stryMutAct_9fa48("244") ? false : (stryCov_9fa48("244", "245", "246"), i < V); stryMutAct_9fa48("247") ? i-- : (stryCov_9fa48("247"), i++)) {
      if (stryMutAct_9fa48("248")) {
        {}
      } else {
        stryCov_9fa48("248");
        adjList.push(stryMutAct_9fa48("249") ? ["Stryker was here"] : (stryCov_9fa48("249"), []));
      }
    }
    for (let i = 0; stryMutAct_9fa48("252") ? i >= E.length : stryMutAct_9fa48("251") ? i <= E.length : stryMutAct_9fa48("250") ? false : (stryCov_9fa48("250", "251", "252"), i < E.length); stryMutAct_9fa48("253") ? i-- : (stryCov_9fa48("253"), i++)) {
      if (stryMutAct_9fa48("254")) {
        {}
      } else {
        stryCov_9fa48("254");
        adjList[E[i][0]].push(stryMutAct_9fa48("255") ? [] : (stryCov_9fa48("255"), [E[i][1], E[i][2]]));
        adjList[E[i][1]].push(stryMutAct_9fa48("256") ? [] : (stryCov_9fa48("256"), [E[i][0], E[i][2]]));
      }
    }
    return adjList;
  }
}
function djikstra(graph, V, src) {
  if (stryMutAct_9fa48("257")) {
    {}
  } else {
    stryCov_9fa48("257");
    const vis = stryMutAct_9fa48("258") ? Array().fill(0) : (stryCov_9fa48("258"), Array(V).fill(0));
    const dist = stryMutAct_9fa48("259") ? ["Stryker was here"] : (stryCov_9fa48("259"), []);
    for (let i = 0; stryMutAct_9fa48("262") ? i >= V : stryMutAct_9fa48("261") ? i <= V : stryMutAct_9fa48("260") ? false : (stryCov_9fa48("260", "261", "262"), i < V); stryMutAct_9fa48("263") ? i-- : (stryCov_9fa48("263"), i++)) dist.push(stryMutAct_9fa48("264") ? [] : (stryCov_9fa48("264"), [10000, stryMutAct_9fa48("265") ? +1 : (stryCov_9fa48("265"), -1)]));
    dist[src][0] = 0;
    for (let i = 0; stryMutAct_9fa48("268") ? i >= V - 1 : stryMutAct_9fa48("267") ? i <= V - 1 : stryMutAct_9fa48("266") ? false : (stryCov_9fa48("266", "267", "268"), i < (stryMutAct_9fa48("269") ? V + 1 : (stryCov_9fa48("269"), V - 1))); stryMutAct_9fa48("270") ? i-- : (stryCov_9fa48("270"), i++)) {
      if (stryMutAct_9fa48("271")) {
        {}
      } else {
        stryCov_9fa48("271");
        let mn = stryMutAct_9fa48("272") ? +1 : (stryCov_9fa48("272"), -1);
        for (let j = 0; stryMutAct_9fa48("275") ? j >= V : stryMutAct_9fa48("274") ? j <= V : stryMutAct_9fa48("273") ? false : (stryCov_9fa48("273", "274", "275"), j < V); stryMutAct_9fa48("276") ? j-- : (stryCov_9fa48("276"), j++)) {
          if (stryMutAct_9fa48("277")) {
            {}
          } else {
            stryCov_9fa48("277");
            if (stryMutAct_9fa48("280") ? vis[j] !== 0 : stryMutAct_9fa48("279") ? false : stryMutAct_9fa48("278") ? true : (stryCov_9fa48("278", "279", "280"), vis[j] === 0)) {
              if (stryMutAct_9fa48("281")) {
                {}
              } else {
                stryCov_9fa48("281");
                if (stryMutAct_9fa48("284") ? mn === -1 && dist[j][0] < dist[mn][0] : stryMutAct_9fa48("283") ? false : stryMutAct_9fa48("282") ? true : (stryCov_9fa48("282", "283", "284"), (stryMutAct_9fa48("286") ? mn !== -1 : stryMutAct_9fa48("285") ? false : (stryCov_9fa48("285", "286"), mn === (stryMutAct_9fa48("287") ? +1 : (stryCov_9fa48("287"), -1)))) || (stryMutAct_9fa48("290") ? dist[j][0] >= dist[mn][0] : stryMutAct_9fa48("289") ? dist[j][0] <= dist[mn][0] : stryMutAct_9fa48("288") ? false : (stryCov_9fa48("288", "289", "290"), dist[j][0] < dist[mn][0])))) mn = j;
              }
            }
          }
        }
        vis[mn] = 1;
        for (let j = 0; stryMutAct_9fa48("293") ? j >= graph[mn].length : stryMutAct_9fa48("292") ? j <= graph[mn].length : stryMutAct_9fa48("291") ? false : (stryCov_9fa48("291", "292", "293"), j < graph[mn].length); stryMutAct_9fa48("294") ? j-- : (stryCov_9fa48("294"), j++)) {
          if (stryMutAct_9fa48("295")) {
            {}
          } else {
            stryCov_9fa48("295");
            const edge = graph[mn][j];
            if (stryMutAct_9fa48("298") ? vis[edge[0]] === 0 || dist[edge[0]][0] > dist[mn][0] + edge[1] : stryMutAct_9fa48("297") ? false : stryMutAct_9fa48("296") ? true : (stryCov_9fa48("296", "297", "298"), (stryMutAct_9fa48("300") ? vis[edge[0]] !== 0 : stryMutAct_9fa48("299") ? true : (stryCov_9fa48("299", "300"), vis[edge[0]] === 0)) && (stryMutAct_9fa48("303") ? dist[edge[0]][0] <= dist[mn][0] + edge[1] : stryMutAct_9fa48("302") ? dist[edge[0]][0] >= dist[mn][0] + edge[1] : stryMutAct_9fa48("301") ? true : (stryCov_9fa48("301", "302", "303"), dist[edge[0]][0] > (stryMutAct_9fa48("304") ? dist[mn][0] - edge[1] : (stryCov_9fa48("304"), dist[mn][0] + edge[1])))))) {
              if (stryMutAct_9fa48("305")) {
                {}
              } else {
                stryCov_9fa48("305");
                dist[edge[0]][0] = stryMutAct_9fa48("306") ? dist[mn][0] - edge[1] : (stryCov_9fa48("306"), dist[mn][0] + edge[1]);
                dist[edge[0]][1] = mn;
              }
            }
          }
        }
      }
    }
    return dist;
  }
}
export { createGraph, djikstra };

// const V = 9
// const E = [
//   [0, 1, 4],
//   [0, 7, 8],
//   [1, 7, 11],
//   [1, 2, 8],
//   [7, 8, 7],
//   [6, 7, 1],
//   [2, 8, 2],
//   [6, 8, 6],
//   [5, 6, 2],
//   [2, 5, 4],
//   [2, 3, 7],
//   [3, 5, 14],
//   [3, 4, 9],
//   [4, 5, 10]
// ]

// const graph = createGraph(V, E)
// const distances = djikstra(graph, V, 0)

/**
 * The first value in the array determines the minimum distance and the
 * second value represents the parent node from which the minimum distance has been calculated
 */