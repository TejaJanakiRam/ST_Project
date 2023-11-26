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
class DisjointSetTreeNode {
  // Disjoint Set Node to store the parent and rank
  constructor(key) {
    if (stryMutAct_9fa48("442")) {
      {}
    } else {
      stryCov_9fa48("442");
      this.key = key;
      this.parent = this;
      this.rank = 0;
    }
  }
}
class DisjointSetTree {
  // Disjoint Set DataStructure
  constructor() {
    if (stryMutAct_9fa48("443")) {
      {}
    } else {
      stryCov_9fa48("443");
      // map to from node name to the node object
      this.map = {};
    }
  }
  makeSet(x) {
    if (stryMutAct_9fa48("444")) {
      {}
    } else {
      stryCov_9fa48("444");
      // Function to create a new set with x as its member
      this.map[x] = new DisjointSetTreeNode(x);
    }
  }
  findSet(x) {
    if (stryMutAct_9fa48("445")) {
      {}
    } else {
      stryCov_9fa48("445");
      // Function to find the set x belongs to (with path-compression)
      if (stryMutAct_9fa48("448") ? this.map[x] === this.map[x].parent : stryMutAct_9fa48("447") ? false : stryMutAct_9fa48("446") ? true : (stryCov_9fa48("446", "447", "448"), this.map[x] !== this.map[x].parent)) {
        if (stryMutAct_9fa48("449")) {
          {}
        } else {
          stryCov_9fa48("449");
          this.map[x].parent = this.findSet(this.map[x].parent.key);
        }
      }
      return this.map[x].parent;
    }
  }
  union(x, y) {
    if (stryMutAct_9fa48("450")) {
      {}
    } else {
      stryCov_9fa48("450");
      // Function to merge 2 disjoint sets
      this.link(this.findSet(x), this.findSet(y));
    }
  }
  link(x, y) {
    if (stryMutAct_9fa48("451")) {
      {}
    } else {
      stryCov_9fa48("451");
      // Helper function for union operation
      if (stryMutAct_9fa48("455") ? x.rank <= y.rank : stryMutAct_9fa48("454") ? x.rank >= y.rank : stryMutAct_9fa48("453") ? false : stryMutAct_9fa48("452") ? true : (stryCov_9fa48("452", "453", "454", "455"), x.rank > y.rank)) {
        if (stryMutAct_9fa48("456")) {
          {}
        } else {
          stryCov_9fa48("456");
          y.parent = x;
        }
      } else {
        if (stryMutAct_9fa48("457")) {
          {}
        } else {
          stryCov_9fa48("457");
          x.parent = y;
          if (stryMutAct_9fa48("460") ? x.rank !== y.rank : stryMutAct_9fa48("459") ? false : stryMutAct_9fa48("458") ? true : (stryCov_9fa48("458", "459", "460"), x.rank === y.rank)) {
            if (stryMutAct_9fa48("461")) {
              {}
            } else {
              stryCov_9fa48("461");
              stryMutAct_9fa48("462") ? y.rank -= 1 : (stryCov_9fa48("462"), y.rank += 1);
            }
          }
        }
      }
    }
  }
}
class GraphWeightedUndirectedAdjacencyList {
  // Weighted Undirected Graph class
  constructor() {
    if (stryMutAct_9fa48("463")) {
      {}
    } else {
      stryCov_9fa48("463");
      this.connections = {};
      this.nodes = 0;
    }
  }
  addNode(node) {
    if (stryMutAct_9fa48("464")) {
      {}
    } else {
      stryCov_9fa48("464");
      // Function to add a node to the graph (connection represented by set)
      this.connections[node] = {};
      stryMutAct_9fa48("465") ? this.nodes -= 1 : (stryCov_9fa48("465"), this.nodes += 1);
    }
  }
  addEdge(node1, node2, weight) {
    if (stryMutAct_9fa48("466")) {
      {}
    } else {
      stryCov_9fa48("466");
      // Function to add an edge (adds the node too if they are not present in the graph)
      if (stryMutAct_9fa48("469") ? false : stryMutAct_9fa48("468") ? true : stryMutAct_9fa48("467") ? node1 in this.connections : (stryCov_9fa48("467", "468", "469"), !(node1 in this.connections))) {
        if (stryMutAct_9fa48("470")) {
          {}
        } else {
          stryCov_9fa48("470");
          this.addNode(node1);
        }
      }
      if (stryMutAct_9fa48("473") ? false : stryMutAct_9fa48("472") ? true : stryMutAct_9fa48("471") ? node2 in this.connections : (stryCov_9fa48("471", "472", "473"), !(node2 in this.connections))) {
        if (stryMutAct_9fa48("474")) {
          {}
        } else {
          stryCov_9fa48("474");
          this.addNode(node2);
        }
      }
      this.connections[node1][node2] = weight;
      this.connections[node2][node1] = weight;
    }
  }
  KruskalMST() {
    if (stryMutAct_9fa48("475")) {
      {}
    } else {
      stryCov_9fa48("475");
      // Kruskal's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
      // Details: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
      // getting the edges in ascending order of weights
      const edges = stryMutAct_9fa48("476") ? ["Stryker was here"] : (stryCov_9fa48("476"), []);
      const seen = new Set();
      for (const start of Object.keys(this.connections)) {
        if (stryMutAct_9fa48("477")) {
          {}
        } else {
          stryCov_9fa48("477");
          for (const end of Object.keys(this.connections[start])) {
            if (stryMutAct_9fa48("478")) {
              {}
            } else {
              stryCov_9fa48("478");
              if (stryMutAct_9fa48("481") ? false : stryMutAct_9fa48("480") ? true : stryMutAct_9fa48("479") ? seen.has(`${start} ${end}`) : (stryCov_9fa48("479", "480", "481"), !seen.has(stryMutAct_9fa48("482") ? `` : (stryCov_9fa48("482"), `${start} ${end}`)))) {
                if (stryMutAct_9fa48("483")) {
                  {}
                } else {
                  stryCov_9fa48("483");
                  seen.add(stryMutAct_9fa48("484") ? `` : (stryCov_9fa48("484"), `${end} ${start}`));
                  edges.push(stryMutAct_9fa48("485") ? [] : (stryCov_9fa48("485"), [start, end, this.connections[start][end]]));
                }
              }
            }
          }
        }
      }
      stryMutAct_9fa48("486") ? edges : (stryCov_9fa48("486"), edges.sort(stryMutAct_9fa48("487") ? () => undefined : (stryCov_9fa48("487"), (a, b) => stryMutAct_9fa48("488") ? a[2] + b[2] : (stryCov_9fa48("488"), a[2] - b[2]))));
      // creating the disjoint set
      const disjointSet = new DisjointSetTree();
      Object.keys(this.connections).forEach(stryMutAct_9fa48("489") ? () => undefined : (stryCov_9fa48("489"), node => disjointSet.makeSet(node)));
      // MST generation
      const graph = new GraphWeightedUndirectedAdjacencyList();
      let numEdges = 0;
      let index = 0;
      while (stryMutAct_9fa48("492") ? numEdges >= this.nodes - 1 : stryMutAct_9fa48("491") ? numEdges <= this.nodes - 1 : stryMutAct_9fa48("490") ? false : (stryCov_9fa48("490", "491", "492"), numEdges < (stryMutAct_9fa48("493") ? this.nodes + 1 : (stryCov_9fa48("493"), this.nodes - 1)))) {
        if (stryMutAct_9fa48("494")) {
          {}
        } else {
          stryCov_9fa48("494");
          const [u, v, w] = edges[index];
          stryMutAct_9fa48("495") ? index -= 1 : (stryCov_9fa48("495"), index += 1);
          if (stryMutAct_9fa48("498") ? disjointSet.findSet(u) === disjointSet.findSet(v) : stryMutAct_9fa48("497") ? false : stryMutAct_9fa48("496") ? true : (stryCov_9fa48("496", "497", "498"), disjointSet.findSet(u) !== disjointSet.findSet(v))) {
            if (stryMutAct_9fa48("499")) {
              {}
            } else {
              stryCov_9fa48("499");
              stryMutAct_9fa48("500") ? numEdges -= 1 : (stryCov_9fa48("500"), numEdges += 1);
              graph.addEdge(u, v, w);
              disjointSet.union(u, v);
            }
          }
        }
      }
      return graph;
    }
  }
}
export { GraphWeightedUndirectedAdjacencyList };

// const graph = new GraphWeightedUndirectedAdjacencyList()
// graph.addEdge(1, 2, 1)
// graph.addEdge(2, 3, 2)
// graph.addEdge(3, 4, 1)
// graph.addEdge(3, 5, 100) // Removed in MST
// graph.addEdge(4, 5, 5)
// graph.KruskalMST()