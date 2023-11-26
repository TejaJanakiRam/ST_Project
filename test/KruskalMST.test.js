import { expect } from "chai";
import { GraphWeightedUndirectedAdjacencyList } from "../src/KruskalMST.js";

describe("Kruskal's Algorithm", () => {
  it("should generate a Minimum Spanning Tree (MST) for a graph", () => {
    // Create a new weighted undirected graph
    const graph = new GraphWeightedUndirectedAdjacencyList();

    // Add edges to the graph
    graph.addEdge(1, 2, 1);
    graph.addEdge(2, 3, 2);
    graph.addEdge(3, 4, 1);
    graph.addEdge(3, 5, 100); // This edge should be removed in the MST
    graph.addEdge(4, 5, 5);
    graph.addEdge(1, 1, 1);
    // graph.addEdge(6, 7, 4);
    // Apply Kruskal's MST algorithm
    const mst = graph.KruskalMST();

    // Check the generated MST edges
    const mstEdges = mst.connections;
    expect(mstEdges).to.deep.equal({
      1: { 2: 1 },
      2: { 1: 1, 3: 2 },
      3: { 2: 2, 4: 1 },
      4: { 3: 1, 5: 5 },
      5: { 4: 5 },
    });

    // Check that the removed edge is not present in the MST
    expect(mstEdges["3"]).to.not.have.property("5");
  });
  it("should generate minimum spanning tree (MST) using Kruskal's algorithm", () => {
    const graph = new GraphWeightedUndirectedAdjacencyList();
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addNode("D");
    graph.addNode("E");

    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 1);
    graph.addEdge("B", "C", 2);
    graph.addEdge("B", "D", 5);
    graph.addEdge("C", "D", 3);
    graph.addEdge("C", "E", 7);
    graph.addEdge("D", "E", 6);

    const mst = graph.KruskalMST();

    // Test the generated MST structure or any specific property
    // For instance, check if the number of edges in the MST is nodes - 1
    const numNodes = Object.keys(mst.connections).length;
    const numEdges = Object.values(mst.connections).reduce(
      (acc, edges) => acc + Object.keys(edges).length,
      0
    );
    const expectedNumEdges = numNodes - 1;
    expect(numEdges).to.equal(2 * expectedNumEdges);
  });

  it("should handle an empty graph", () => {
    const graph = new GraphWeightedUndirectedAdjacencyList();
    const mst = graph.KruskalMST();
    expect(Object.keys(mst.connections)).to.have.lengthOf(0); // MST of an empty graph should be empty
  });
});
