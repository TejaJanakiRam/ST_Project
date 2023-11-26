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
    if (stryMutAct_9fa48("187")) {
      {}
    } else {
      stryCov_9fa48("187");
      this.connections = {};
    }
  }
  addNode(node) {
    if (stryMutAct_9fa48("188")) {
      {}
    } else {
      stryCov_9fa48("188");
      // Function to add a node to the graph (connection represented by set)
      this.connections[node] = new Set();
    }
  }
  addEdge(node1, node2) {
    if (stryMutAct_9fa48("189")) {
      {}
    } else {
      stryCov_9fa48("189");
      // Function to add an edge (adds the node too if they are not present in the graph)
      if (stryMutAct_9fa48("192") ? false : stryMutAct_9fa48("191") ? true : stryMutAct_9fa48("190") ? node1 in this.connections : (stryCov_9fa48("190", "191", "192"), !(node1 in this.connections))) {
        if (stryMutAct_9fa48("193")) {
          {}
        } else {
          stryCov_9fa48("193");
          this.addNode(node1);
        }
      }
      if (stryMutAct_9fa48("196") ? false : stryMutAct_9fa48("195") ? true : stryMutAct_9fa48("194") ? node2 in this.connections : (stryCov_9fa48("194", "195", "196"), !(node2 in this.connections))) {
        if (stryMutAct_9fa48("197")) {
          {}
        } else {
          stryCov_9fa48("197");
          this.addNode(node2);
        }
      }
      this.connections[node1].add(node2);
      this.connections[node2].add(node1);
    }
  }
  DFSIterative(node, value) {
    if (stryMutAct_9fa48("198")) {
      {}
    } else {
      stryCov_9fa48("198");
      // DFS Function to search if a node with the given value is present in the graph
      const stack = stryMutAct_9fa48("199") ? [] : (stryCov_9fa48("199"), [node]);
      const visited = new Set();
      while (stryMutAct_9fa48("202") ? stack.length <= 0 : stryMutAct_9fa48("201") ? stack.length >= 0 : stryMutAct_9fa48("200") ? false : (stryCov_9fa48("200", "201", "202"), stack.length > 0)) {
        if (stryMutAct_9fa48("203")) {
          {}
        } else {
          stryCov_9fa48("203");
          const currNode = stack.pop();
          // if the current node contains the value being searched for, true is returned
          if (stryMutAct_9fa48("206") ? currNode !== value : stryMutAct_9fa48("205") ? false : stryMutAct_9fa48("204") ? true : (stryCov_9fa48("204", "205", "206"), currNode === value)) {
            if (stryMutAct_9fa48("207")) {
              {}
            } else {
              stryCov_9fa48("207");
              return stryMutAct_9fa48("208") ? false : (stryCov_9fa48("208"), true);
            }
          }
          // adding the current node to the visited set
          visited.add(currNode);
          // adding neighbours in the stack
          for (const neighbour of this.connections[currNode]) {
            if (stryMutAct_9fa48("209")) {
              {}
            } else {
              stryCov_9fa48("209");
              if (stryMutAct_9fa48("212") ? false : stryMutAct_9fa48("211") ? true : stryMutAct_9fa48("210") ? visited.has(neighbour) : (stryCov_9fa48("210", "211", "212"), !visited.has(neighbour))) {
                if (stryMutAct_9fa48("213")) {
                  {}
                } else {
                  stryCov_9fa48("213");
                  stack.push(neighbour);
                }
              }
            }
          }
        }
      }
      return stryMutAct_9fa48("214") ? true : (stryCov_9fa48("214"), false);
    }
  }
}
export { GraphUnweightedUndirected };

// Example

// const graph = new GraphUnweightedUndirected()
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(2, 4)
// graph.addEdge(3, 5)
// graph.DFSIterative(5, 1)
// graph.DFSIterative(5, 100)