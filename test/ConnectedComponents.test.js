import { expect } from "chai";
import { GraphUnweightedUndirectedAdjacencyList } from "../src/ConnectedComponents.js"; // Adjust the import path accordingly

describe("GraphUnweightedUndirectedAdjacencyList", () => {
  let graph;

  beforeEach(() => {
    graph = new GraphUnweightedUndirectedAdjacencyList();
  });

  it("should add nodes correctly", () => {
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");

    expect(graph.connections).to.have.keys("A", "B", "C");
  });

  it("should add edges correctly", () => {
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");

    expect(graph.connections["A"]).to.have.keys("B");
    expect(graph.connections["B"]).to.have.keys("A", "C");
    expect(graph.connections["C"]).to.have.keys("B");
  });

  it("should correctly identify connected components", () => {
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addEdge("A", "B");

    const components = graph.connectedComponents();
    expect(components).to.have.lengthOf(2); // Expecting three components for individual nodes
    expect(components).to.deep.include.members(["A"]); // Test node A as a component
    expect(components).to.deep.include.members(["C"]); // Test node C as a component
  });

  it("should handle an empty graph", () => {
    const components = graph.connectedComponents();
    expect(components).to.have.lengthOf(0); // Expecting zero components for an empty graph
  });

  // Add more test cases as needed to cover various scenarios
});
