import { islands } from "../src/NumberOfIslands.js";
import { expect } from "chai";

describe("Number of Islands", () => {
  it("should count three islands in the graph", () => {
    const graph = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(islands(graph)).to.eql(3);
  });

  it("should count one island in the graph", () => {
    const graph = [
      ["1", "1"],
      ["1", "1"],
      ["0", "0"],
      ["0", "0"],
    ];
    expect(islands(graph)).to.eql(1);
  });

  it("should count zero islands in the graph", () => {
    const graph = [
      ["0", "0"],
      ["0", "0"],
    ];
    expect(islands(graph)).to.eql(0);
  });
});
