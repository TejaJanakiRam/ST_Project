/**
 * Author: Adrito Mukherjee
 * Kosaraju's Algorithm implementation in Javascript
 * Kosaraju's Algorithm finds all the connected components in a Directed Acyclic Graph (DAG)
 * It uses Stack data structure to store the Topological Sorted Order of vertices and also Graph data structure
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm
 *
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
class Kosaraju {
  constructor(graph) {
    if (stryMutAct_9fa48("396")) {
      {}
    } else {
      stryCov_9fa48("396");
      this.connections = {};
      this.reverseConnections = {};
      this.stronglyConnectedComponents = stryMutAct_9fa48("397") ? ["Stryker was here"] : (stryCov_9fa48("397"), []);
      for (const [i, j] of graph) {
        if (stryMutAct_9fa48("398")) {
          {}
        } else {
          stryCov_9fa48("398");
          this.addEdge(i, j);
        }
      }
      this.topoSort();
      return this.kosaraju();
    }
  }
  addNode(node) {
    if (stryMutAct_9fa48("399")) {
      {}
    } else {
      stryCov_9fa48("399");
      // Function to add a node to the graph (connection represented by set)
      this.connections[node] = new Set();
      this.reverseConnections[node] = new Set();
      this.topoSorted = stryMutAct_9fa48("400") ? ["Stryker was here"] : (stryCov_9fa48("400"), []);
    }
  }
  addEdge(node1, node2) {
    if (stryMutAct_9fa48("401")) {
      {}
    } else {
      stryCov_9fa48("401");
      // Function to add an edge (adds the node too if they are not present in the graph)
      if (stryMutAct_9fa48("404") ? !(node1 in this.connections) && !(node1 in this.reverseConnections) : stryMutAct_9fa48("403") ? false : stryMutAct_9fa48("402") ? true : (stryCov_9fa48("402", "403", "404"), (stryMutAct_9fa48("405") ? node1 in this.connections : (stryCov_9fa48("405"), !(node1 in this.connections))) || (stryMutAct_9fa48("406") ? node1 in this.reverseConnections : (stryCov_9fa48("406"), !(node1 in this.reverseConnections))))) {
        if (stryMutAct_9fa48("407")) {
          {}
        } else {
          stryCov_9fa48("407");
          this.addNode(node1);
        }
      }
      if (stryMutAct_9fa48("410") ? !(node2 in this.connections) && !(node2 in this.reverseConnections) : stryMutAct_9fa48("409") ? false : stryMutAct_9fa48("408") ? true : (stryCov_9fa48("408", "409", "410"), (stryMutAct_9fa48("411") ? node2 in this.connections : (stryCov_9fa48("411"), !(node2 in this.connections))) || (stryMutAct_9fa48("412") ? node2 in this.reverseConnections : (stryCov_9fa48("412"), !(node2 in this.reverseConnections))))) {
        if (stryMutAct_9fa48("413")) {
          {}
        } else {
          stryCov_9fa48("413");
          this.addNode(node2);
        }
      }
      this.connections[node1].add(node2);
      this.reverseConnections[node2].add(node1);
    }
  }
  dfsTopoSort(node, visited) {
    if (stryMutAct_9fa48("414")) {
      {}
    } else {
      stryCov_9fa48("414");
      visited.add(node);
      for (const child of this.connections[node]) {
        if (stryMutAct_9fa48("415")) {
          {}
        } else {
          stryCov_9fa48("415");
          if (stryMutAct_9fa48("418") ? false : stryMutAct_9fa48("417") ? true : stryMutAct_9fa48("416") ? visited.has(child) : (stryCov_9fa48("416", "417", "418"), !visited.has(child))) this.dfsTopoSort(child, visited);
        }
      }
      this.topoSorted.push(node);
    }
  }
  topoSort() {
    if (stryMutAct_9fa48("419")) {
      {}
    } else {
      stryCov_9fa48("419");
      // Function to perform topological sorting
      const visited = new Set();
      const nodes = Object.keys(this.connections).map(stryMutAct_9fa48("420") ? () => undefined : (stryCov_9fa48("420"), key => Number(key)));
      for (const node of nodes) {
        if (stryMutAct_9fa48("421")) {
          {}
        } else {
          stryCov_9fa48("421");
          if (stryMutAct_9fa48("424") ? false : stryMutAct_9fa48("423") ? true : stryMutAct_9fa48("422") ? visited.has(node) : (stryCov_9fa48("422", "423", "424"), !visited.has(node))) this.dfsTopoSort(node, visited);
        }
      }
    }
  }
  dfsKosaraju(node, visited) {
    if (stryMutAct_9fa48("425")) {
      {}
    } else {
      stryCov_9fa48("425");
      visited.add(node);
      this.stronglyConnectedComponents[stryMutAct_9fa48("426") ? this.stronglyConnectedComponents.length + 1 : (stryCov_9fa48("426"), this.stronglyConnectedComponents.length - 1)].push(node);
      for (const child of this.reverseConnections[node]) {
        if (stryMutAct_9fa48("427")) {
          {}
        } else {
          stryCov_9fa48("427");
          if (stryMutAct_9fa48("430") ? false : stryMutAct_9fa48("429") ? true : stryMutAct_9fa48("428") ? visited.has(child) : (stryCov_9fa48("428", "429", "430"), !visited.has(child))) this.dfsKosaraju(child, visited);
        }
      }
    }
  }
  kosaraju() {
    if (stryMutAct_9fa48("431")) {
      {}
    } else {
      stryCov_9fa48("431");
      // Function to perform Kosaraju Algorithm
      const visited = new Set();
      while (stryMutAct_9fa48("434") ? this.topoSorted.length <= 0 : stryMutAct_9fa48("433") ? this.topoSorted.length >= 0 : stryMutAct_9fa48("432") ? false : (stryCov_9fa48("432", "433", "434"), this.topoSorted.length > 0)) {
        if (stryMutAct_9fa48("435")) {
          {}
        } else {
          stryCov_9fa48("435");
          const node = this.topoSorted.pop();
          if (stryMutAct_9fa48("438") ? false : stryMutAct_9fa48("437") ? true : stryMutAct_9fa48("436") ? visited.has(node) : (stryCov_9fa48("436", "437", "438"), !visited.has(node))) {
            if (stryMutAct_9fa48("439")) {
              {}
            } else {
              stryCov_9fa48("439");
              this.stronglyConnectedComponents.push(stryMutAct_9fa48("440") ? ["Stryker was here"] : (stryCov_9fa48("440"), []));
              this.dfsKosaraju(node, visited);
            }
          }
        }
      }
      return this.stronglyConnectedComponents;
    }
  }
}
function kosaraju(graph) {
  if (stryMutAct_9fa48("441")) {
    {}
  } else {
    stryCov_9fa48("441");
    const stronglyConnectedComponents = new Kosaraju(graph);
    return stronglyConnectedComponents;
  }
}
export { kosaraju };

// kosaraju([
//   [1, 2],
//   [2, 3],
//   [3, 1],
//   [2, 4],
//   [4, 5],
//   [5, 6],
//   [6, 4],
// ])

// [ [ 1, 3, 2 ], [ 4, 6, 5 ] ]