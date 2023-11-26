class GraphUnweightedUndirected {
  // Unweighted Undirected Graph class
  constructor() {
    this.connections = {};
  }

  addNode(node) {
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set();
  }

  addEdge(node1, node2) {
    // Function to add an edge (adds the node too if they are not present in the graph)
    this.connections[node1].add(node2);
    this.connections[node2].add(node1);
  }

  DFSRecursive(node, value, visited = new Set()) {
    // DFS Function to search if a node with the given value is present in the graph
    // checking if the searching node has been found
    if (node === value) {
      return true;
    }
    // adding the current node to the visited set
    visited.add(node);
    // calling the helper function recursively for all unvisited nodes
    for (const neighbour of this.connections[node]) {
      if (!visited.has(neighbour)) {
        if (this.DFSRecursive(neighbour, value, visited)) {
          return true;
        }
      }
    }
    return false;
  }
}

export { GraphUnweightedUndirected };
