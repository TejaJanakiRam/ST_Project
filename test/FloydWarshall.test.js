import { expect } from "chai";
import { FloydWarshall} from "../src/FloydWarshall.js"


describe('Floyd-Warshall Algorithm', () => {
    it('should find the shortest distances between nodes in the graph', () => {
      const inputGraph = [
        [0, 1, 2, Infinity],
        [1, 0, Infinity, Infinity],
        [2, Infinity, 0, 1],
        [Infinity, Infinity, 1, 0]
      ];
  
      const expectedOutput = [
        [0, 1, 2, 3],
        [1, 0, 3, 4],
        [2, 3, 0, 1],
        [3, 4, 1, 0]
      ];
  
      const result = FloydWarshall(inputGraph);
  
      // Test whether the result matches the expected output
      expect(result).to.deep.equal(expectedOutput);
    });
  });