import { expect } from "chai";
import { GraphUnweightedUndirected } from "../src/DepthFirstSearchRecursive.js"; // Adjust the import path accordingly

describe("GraphUnweightedUndirected", () => {
  let graph;

  beforeEach(() => {
    graph = new GraphUnweightedUndirected();
  });

  it("should add nodes correctly", () => {
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");

    expect(graph.connections).to.have.keys("A", "B", "C");
    expect(graph.connections["A"]).to.be.an.instanceOf(Set);
    expect(graph.connections["B"]).to.be.an.instanceOf(Set);
    expect(graph.connections["C"]).to.be.an.instanceOf(Set);
  });

  it("should add edges correctly", () => {
    graph.addNode("A");
    graph.addNode("B");
    graph.addEdge("A", "B");

    expect(graph.connections["A"]).to.have.keys("B");
    expect(graph.connections["B"]).to.have.keys("A");
  });

  it("should perform DFS correctly and find a node", () => {
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");

    const found = graph.DFSRecursive("A", "C");
    expect(found).to.equal(true); // Expecting to find node 'C' from node 'A'
  });

  it("should perform DFS correctly and not find a node", () => {
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");

    const found = graph.DFSRecursive("A", "D");
    expect(found).to.equal(false); // Expecting not to find node 'D' from node 'A'
  });

  it("should handle an empty graph for DFS", () => {
    graph.addNode("A");
    graph.addNode("B");
    const found = graph.DFSRecursive("A", "B");
    expect(found).to.equal(false); // Expecting not to find any node in an empty graph
  });

  // Code author didn't account for empty graphs without any node
});
