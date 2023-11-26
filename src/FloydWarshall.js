const FloydWarshall = (dist) => {
  // Input:- dist: 2D Array where dist[i][j] = edge weight b/w i and j
  // Output:- dist: 2D Array where dist[i][j] = shortest dist b/w i and j
  const n = dist.length;
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          // dist from i to j via k is lesser than the current distance
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};

export { FloydWarshall };
