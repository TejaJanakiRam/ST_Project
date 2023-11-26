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
class GraphUnweightedUndirected {
  // Unweighted Undirected Graph class
  constructor() {
    if (stryMutAct_9fa48("215")) {
      {}
    } else {
      stryCov_9fa48("215");
      this.connections = {};
    }
  }
  addNode(node) {
    if (stryMutAct_9fa48("216")) {
      {}
    } else {
      stryCov_9fa48("216");
      // Function to add a node to the graph (connection represented by set)
      this.connections[node] = new Set();
    }
  }
  addEdge(node1, node2) {
    if (stryMutAct_9fa48("217")) {
      {}
    } else {
      stryCov_9fa48("217");
      // Function to add an edge (adds the node too if they are not present in the graph)
      if (stryMutAct_9fa48("220") ? false : stryMutAct_9fa48("219") ? true : stryMutAct_9fa48("218") ? node1 in this.connections : (stryCov_9fa48("218", "219", "220"), !(node1 in this.connections))) {
        if (stryMutAct_9fa48("221")) {
          {}
        } else {
          stryCov_9fa48("221");
          this.addNode(node1);
        }
      }
      if (stryMutAct_9fa48("224") ? false : stryMutAct_9fa48("223") ? true : stryMutAct_9fa48("222") ? node2 in this.connections : (stryCov_9fa48("222", "223", "224"), !(node2 in this.connections))) {
        if (stryMutAct_9fa48("225")) {
          {}
        } else {
          stryCov_9fa48("225");
          this.addNode(node2);
        }
      }
      this.connections[node1].add(node2);
      this.connections[node2].add(node1);
    }
  }
  DFSRecursive(node, value, visited = new Set()) {
    if (stryMutAct_9fa48("226")) {
      {}
    } else {
      stryCov_9fa48("226");
      // DFS Function to search if a node with the given value is present in the graph
      // checking if the searching node has been found
      if (stryMutAct_9fa48("229") ? node !== value : stryMutAct_9fa48("228") ? false : stryMutAct_9fa48("227") ? true : (stryCov_9fa48("227", "228", "229"), node === value)) {
        if (stryMutAct_9fa48("230")) {
          {}
        } else {
          stryCov_9fa48("230");
          return stryMutAct_9fa48("231") ? false : (stryCov_9fa48("231"), true);
        }
      }
      // adding the current node to the visited set
      visited.add(node);
      // calling the helper function recursively for all unvisited nodes
      for (const neighbour of this.connections[node]) {
        if (stryMutAct_9fa48("232")) {
          {}
        } else {
          stryCov_9fa48("232");
          if (stryMutAct_9fa48("235") ? false : stryMutAct_9fa48("234") ? true : stryMutAct_9fa48("233") ? visited.has(neighbour) : (stryCov_9fa48("233", "234", "235"), !visited.has(neighbour))) {
            if (stryMutAct_9fa48("236")) {
              {}
            } else {
              stryCov_9fa48("236");
              if (stryMutAct_9fa48("238") ? false : stryMutAct_9fa48("237") ? true : (stryCov_9fa48("237", "238"), this.DFSRecursive(neighbour, value, visited))) {
                if (stryMutAct_9fa48("239")) {
                  {}
                } else {
                  stryCov_9fa48("239");
                  return stryMutAct_9fa48("240") ? false : (stryCov_9fa48("240"), true);
                }
              }
            }
          }
        }
      }
      return stryMutAct_9fa48("241") ? true : (stryCov_9fa48("241"), false);
    }
  }
}
export { GraphUnweightedUndirected };

// const graph = new GraphUnweightedUndirected()
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(2, 4)
// graph.addEdge(3, 5)
// graph.DFSRecursive(5, 1)
// graph.DFSRecursive(5, 100)