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

  // it('should handle negative-weight cycles and return null', () => {
  //   const graph3 = [
  //     [0, -11, -5],
  //     [-1, -2, -3],
  //     [-2, 0, -2], // Negative-weight cycle
  //   ];
  //   const V3 = 3; // Number of vertices
  //   const E3 = 3; // Number of edges
  //   const src3 = 0; // Source vertex
  //   const dest3 = 1; // Destination vertex

  //   const result3 = BellmanFord(graph3, V3, E3, src3, dest3);
  //   expect(result3).to.be.null; // Should return null due to negative-weight cycle
  // });
});
