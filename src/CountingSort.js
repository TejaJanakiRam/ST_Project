export const countingSort = (arr, min, max) => {
  // Create an auxiliary resultant array
  const res = [];
  // Create and initialize the frequency[count] array
  const count = new Array(max - min + 1).fill(0);
  // Populate the freq array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }
  // Create a prefix sum array out of the frequency[count] array
  count[0] -= 1;
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  // Populate the result array using the prefix sum array
  for (let i = arr.length - 1; i >= 0; i--) {
    res[count[arr[i] - min]] = arr[i];
    count[arr[i] - min]--;
  }
  return res;
};
