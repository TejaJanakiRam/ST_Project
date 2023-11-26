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
class GraphUnweightedUndirectedAdjacencyList {
  // Unweighted Undirected Graph class
  constructor() {
    if (stryMutAct_9fa48("129")) {
      {}
    } else {
      stryCov_9fa48("129");
      this.connections = {};
    }
  }
  addNode(node) {
    if (stryMutAct_9fa48("130")) {
      {}
    } else {
      stryCov_9fa48("130");
      // Function to add a node to the graph (connection represented by set)
      this.connections[node] = new Set();
    }
  }
  addEdge(node1, node2) {
    if (stryMutAct_9fa48("131")) {
      {}
    } else {
      stryCov_9fa48("131");
      // Function to add an edge (adds the node too if they are not present in the graph)
      if (stryMutAct_9fa48("134") ? false : stryMutAct_9fa48("133") ? true : stryMutAct_9fa48("132") ? node1 in this.connections : (stryCov_9fa48("132", "133", "134"), !(node1 in this.connections))) {
        if (stryMutAct_9fa48("135")) {
          {}
        } else {
          stryCov_9fa48("135");
          this.addNode(node1);
        }
      }
      if (stryMutAct_9fa48("138") ? false : stryMutAct_9fa48("137") ? true : stryMutAct_9fa48("136") ? node2 in this.connections : (stryCov_9fa48("136", "137", "138"), !(node2 in this.connections))) {
        if (stryMutAct_9fa48("139")) {
          {}
        } else {
          stryCov_9fa48("139");
          this.addNode(node2);
        }
      }
      this.connections[node1].add(node2);
      this.connections[node2].add(node1);
    }
  }
  DFSComponent(components, node, visited) {
    if (stryMutAct_9fa48("140")) {
      {}
    } else {
      stryCov_9fa48("140");
      // Helper function to populate the visited set with the nodes in each component

      // adding the first visited node in the component to the array
      components.push(node);
      const stack = stryMutAct_9fa48("141") ? [] : (stryCov_9fa48("141"), [node]);
      // populating the visited set using DFS (Iterative)
      while (stryMutAct_9fa48("144") ? stack.length <= 0 : stryMutAct_9fa48("143") ? stack.length >= 0 : stryMutAct_9fa48("142") ? false : (stryCov_9fa48("142", "143", "144"), stack.length > 0)) {
        if (stryMutAct_9fa48("145")) {
          {}
        } else {
          stryCov_9fa48("145");
          const curr = stack.pop();
          visited.add(curr.toString());
          for (const neighbour of this.connections[curr].keys()) {
            if (stryMutAct_9fa48("146")) {
              {}
            } else {
              stryCov_9fa48("146");
              if (stryMutAct_9fa48("149") ? false : stryMutAct_9fa48("148") ? true : stryMutAct_9fa48("147") ? visited.has(neighbour.toString()) : (stryCov_9fa48("147", "148", "149"), !visited.has(neighbour.toString()))) {
                if (stryMutAct_9fa48("150")) {
                  {}
                } else {
                  stryCov_9fa48("150");
                  stack.push(neighbour);
                }
              }
            }
          }
        }
      }
    }
  }
  connectedComponents() {
    if (stryMutAct_9fa48("151")) {
      {}
    } else {
      stryCov_9fa48("151");
      // Function to generate the Connected Components
      // Result is an array containing 1 node from each component
      const visited = new Set();
      const components = stryMutAct_9fa48("152") ? ["Stryker was here"] : (stryCov_9fa48("152"), []);
      for (const node of Object.keys(this.connections)) {
        if (stryMutAct_9fa48("153")) {
          {}
        } else {
          stryCov_9fa48("153");
          if (stryMutAct_9fa48("156") ? false : stryMutAct_9fa48("155") ? true : stryMutAct_9fa48("154") ? visited.has(node.toString()) : (stryCov_9fa48("154", "155", "156"), !visited.has(node.toString()))) {
            if (stryMutAct_9fa48("157")) {
              {}
            } else {
              stryCov_9fa48("157");
              this.DFSComponent(components, node, visited);
            }
          }
        }
      }
      return components;
    }
  }
}
export { GraphUnweightedUndirectedAdjacencyList };

// Example

// const graph = new GraphUnweightedUndirectedAdjacencyList()
// graph.addEdge(1, 2) // Component 1
// graph.addEdge(3, 4) // Component 2
// graph.addEdge(3, 5) // Component 2
// const components = graph.connectedComponents()