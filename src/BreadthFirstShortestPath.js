import Queue from "./Queue.js";

export function breadthFirstShortestPath(graph, startNode, targetNode) {
  // check if startNode & targetNode are identical
  if (startNode === targetNode) {
    return [startNode];
  }

  // visited keeps track of all nodes visited
  const visited = new Set();

  // queue contains the paths to be explored in the future
  const initialPath = [startNode];
  const queue = new Queue();
  queue.enqueue(initialPath);

  while (!queue.isEmpty()) {
    // start with the queue's first path
    const path = queue.dequeue();
    const node = path[path.length - 1];

    // explore this node if it hasn't been visited yet
    if (!visited.has(node)) {
      // mark the node as visited
      visited.add(node);

      const neighbors = graph[node];

      // create a new path in the queue for each neighbor
      for (let i = 0; i < neighbors.length; i++) {
        const newPath = path.concat([neighbors[i]]);

        // the first path to contain the target node is the shortest path
        if (neighbors[i] === targetNode) {
          return newPath;
        }

        // queue the new path
        queue.enqueue(newPath);
      }
    }
  }

  // the target node was not reachable
  return [];
}
