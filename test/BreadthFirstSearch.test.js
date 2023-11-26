import { breadthFirstSearch } from "../src/BreadthFirstSearch.js";
import { expect } from "chai";

describe("BreadthFirstSearch", () => {
  const graph = {
    A: ["B", "D"],
    B: ["E"],
    C: ["D"],
    D: ["A"],
    E: ["D"],
    F: ["G"],
    G: [],
  };

  it("should return the visited nodes", () => {
    expect(Array.from(breadthFirstSearch(graph, "C"))).to.eql([
      "C",
      "D",
      "A",
      "B",
      "E",
    ]);
    expect(Array.from(breadthFirstSearch(graph, "A"))).to.eql([
      "A",
      "B",
      "D",
      "E",
    ]);
    expect(Array.from(breadthFirstSearch(graph, "F"))).to.eql(["F", "G"]);
  });
});
