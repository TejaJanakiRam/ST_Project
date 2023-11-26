import { expect } from "chai";
import { GraphWeightedUndirectedAdjacencyList } from "../src/KruskalMST.js";

describe('Kruskal\'s Algorithm', () => {
    it('should generate a Minimum Spanning Tree (MST) for a graph', () => {
      // Create a new weighted undirected graph
      const graph = new GraphWeightedUndirectedAdjacencyList();
  
      // Add edges to the graph
      graph.addEdge(1, 2, 1);
      graph.addEdge(2, 3, 2);
      graph.addEdge(3, 4, 1);
      graph.addEdge(3, 5, 100); // This edge should be removed in the MST
      graph.addEdge(4, 5, 5);
  
      // Apply Kruskal's MST algorithm
      const mst = graph.KruskalMST();
  
      // Check the generated MST edges
      const mstEdges = mst.connections;
      expect(mstEdges).to.deep.equal({
        '1': { '2': 1 },
        '2': { '1': 1, '3': 2 },
        '3': { '2': 2, '4': 1 },
        '4': { '3': 1, '5': 5 },
        '5': { '4': 5 }
      });
  
      // Check that the removed edge is not present in the MST
      expect(mstEdges['3']).to.not.have.property('5');
    });
  });
  