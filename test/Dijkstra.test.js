import { expect } from "chai";

import { djikstra,createGraph } from '../src/Dijkstra.js';
describe('Dijkstra\'s Algorithm', () => {
  it('should find the shortest path and distances in the graph', () => {
    const V = 9;
    const E = [
      [0, 1, 4],
      [0, 7, 8],
      [1, 7, 11],
      [1, 2, 8],
      [7, 8, 7],
      [6, 7, 1],
      [2, 8, 2],
      [6, 8, 6],
      [5, 6, 2],
      [2, 5, 4],
      [2, 3, 7],
      [3, 5, 14],
      [3, 4, 9],
      [4, 5, 10]
    ];

    const graph = createGraph(V, E);
    const distances = djikstra(graph, V, 0);

    // Test specific cases or assertions based on the expected output
    expect(distances[1]).to.deep.equal([4, 0]); // The shortest distance from 0 to 1 is 4, and the parent node is 0
    expect(distances[5]).to.deep.equal([11, 6]); // The shortest distance from 0 to 5 is 11 and the parent node is 6
    // Add more assertions based on your specific graph and expected results
  });
});
