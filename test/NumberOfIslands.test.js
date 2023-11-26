import { islands } from '../NumberOfIslands'
import { expect } from "chai";


describe('Number of Islands', () => {
  it('should count three islands in the graph', () => {
    const graph = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ];
    expect(islands(graph)).to.equal(3);
  });

  it('should count one island in the graph', () => {
    const graph = [
      ['1', '1'],
      ['1', '1'],
      ['0', '0'],
      ['0', '0']
    ];
    expect(islands(graph)).to.equal(1);
  });

  it('should count zero islands in the graph', () => {
    const graph = [
      ['0', '0'],
      ['0', '0']
    ];
    expect(islands(graph)).to.equal(0);
  });
});

