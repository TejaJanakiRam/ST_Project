import { expect } from "chai";
import { BellmanFord } from "../src/BellmanFord.js";

describe("BellmanFord Function", () => {
  it("Test Case 1", () => {
    const V = 5;
    const E = 8;
    const destination = 3;
    const graph = [
      [0, 1, -1],
      [0, 2, 4],
      [1, 2, 3],
      [1, 3, 2],
      [1, 4, 2],
      [3, 2, 5],
      [3, 1, 1],
      [4, 3, -3],
    ];
    const dist = BellmanFord(graph, V, E, 0, destination);
    expect(dist).to.eql(-2);
  });

  it("Test Case 2", () => {
    const V = 6;
    const E = 9;
    const destination = 4;
    const graph = [
      [0, 1, 3],
      [0, 3, 6],
      [0, 5, -1],
      [1, 2, -3],
      [1, 4, -2],
      [5, 2, 5],
      [2, 3, 1],
      [4, 3, 5],
      [5, 4, 2],
    ];
    const dist = BellmanFord(graph, V, E, 0, destination);
    expect(dist).to.eql(1);
  });
  it("should find the shortest path between vertices in a graph with positive weights", () => {
    const graph = [
      [0, 1, 5],
      [1, 2, 3],
      [2, 3, 2],
      [0, 3, 8],
      [1, 3, 1],
    ];
    const V = 4;
    const E = 5;
    const src = 0;
    const dest = 3;
    const shortestPath = BellmanFord(graph, V, E, src, dest);
    expect(shortestPath).to.equal(6); // Expecting the shortest path from source to destination
  });

  it("should handle a graph with negative-weight cycles and return null", () => {
    const graph = [
      [1, 0, -5],
      [0, 1, -5],
      [1, 2, -3],
      [2, 0, 2],
    ];
    const V = 3;
    const E = 3;
    const src = 0;
    const dest = 2;
    const shortestPath = BellmanFord(graph, V, E, src, dest);
    expect(shortestPath).to.equal(null); // Expecting null due to the presence of negative-weight cycles
  });

  it("should handle a graph with no path from source to destination", () => {
    const graph = [
      [0, 1, 5],
      [1, 2, 3],
      [2, 3, 2],
    ];
    const V = 4;
    const E = 3;
    const src = 0;
    const dest = 4;
    const shortestPath = BellmanFord(graph, V, E, src, dest);
    expect(shortestPath).to.equal(Infinity); // Expecting Infinity as there's no path from source to destination
  });

  it("should handle a single-node graph with no edges", () => {
    const graph = [];
    const V = 1;
    const E = 0;
    const src = 0;
    const dest = 0;
    const shortestPath = BellmanFord(graph, V, E, src, dest);
    expect(shortestPath).to.equal(0); // Expecting 0 as it's the only node, source and destination are the same
  });
});
