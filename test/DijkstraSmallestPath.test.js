import { expect } from "chai";
import { solve } from "../src/DijkstraSmallestPath.js";

describe("solve", () => {
  it("should find the shortest path and distances in the graph", () => {
    const graph = {
      A: { B: 4, C: 2 },
      B: { A: 4, C: 5, D: 10 },
      C: { A: 2, B: 5, D: 3 },
      D: { B: 10, C: 3 },
    };

    const result = solve(graph, "A");

    // Check the solutions
    expect(result.solutions).to.deep.equal({
      A: ["A"],
      C: ["A", "C"],
      B: ["A", "B"],
      D: ["A", "C", "D"],
    });

    // Check the distances
    expect(result.distances).to.deep.equal({ A: 0, C: 2, B: 4, D: 5 });
  });
});
