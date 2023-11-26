function solve(graph, s) {
  const solutions = {};
  const distances = {};

  solutions[s] = [s];
  distances[s] = 0;

  while (true) {
    let p = null;
    let neighbor = null;
    let dist = Infinity;

    for (const node in solutions) {
      const ndist = distances[node];
      const adj = graph[node];

      for (const a in adj) {
        if (solutions[a]) {
          continue;
        }

        const d = adj[a] + ndist;
        if (d < dist) {
          p = solutions[node];
          neighbor = a;
          dist = d;
        }
      }
    }

    // no more solutions
    if (dist === Infinity) {
      break;
    }

    // extend parent's solution path
    solutions[neighbor] = p.concat(neighbor);
    // store distance for the neighbor
    distances[neighbor] = dist;
  }

  return { solutions, distances };
}

// const graph = {
//   A: { B: 4, C: 2 },
//   B: { A: 4, C: 5, D: 10 },
//   C: { A: 2, B: 5, D: 3 },
//   D: { B: 10, C: 3 },
// };
// console.log(solve(graph, "A"));
export { solve };
