import { breadthFirstShortestPath } from "../src/BreadthFirstShortestPath.js";
import { expect } from "chai";

describe("BreadthFirstShortestPath", () => {
  const graph = {
    A: ["B", "D"],
    B: ["E"],
    C: ["D"],
    D: ["A"],
    E: ["D"],
    F: ["G"],
    G: [],
  };
  /*
        A <-> B
        ʌ     |
        |     |
        v     v
  C --> D <-- E

  F --> G
  */

  it("should return the visited nodes", () => {
    expect(breadthFirstShortestPath(graph, "C", "E")).to.eql([
      "C",
      "D",
      "A",
      "B",
      "E",
    ]);
    expect(breadthFirstShortestPath(graph, "E", "B")).to.eql([
      "E",
      "D",
      "A",
      "B",
    ]);
    expect(breadthFirstShortestPath(graph, "F", "G")).to.eql(["F", "G"]);
    expect(breadthFirstShortestPath(graph, "A", "G")).to.eql([]);
    expect(breadthFirstShortestPath(graph, "C", "C")).to.eql([
      "C",
    ]);
  });
});
