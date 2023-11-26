export const selectionSort = (list) => {
  if (!Array.isArray(list)) {
    throw new TypeError("Given input is not an array");
  }
  const items = [...list]; // We don't want to modify the original array
  const length = items.length;
  for (let i = 0; i < length - 1; i++) {
    if (typeof items[i] !== "number") {
      throw new TypeError("One of the items in your array is not a number");
    }
    // Number of passes
    let min = i; // min holds the current minimum number position for each pass; i holds the Initial min number
    for (let j = i + 1; j < length; j++) {
      // Note that j = i + 1 as we only need to go through unsorted array
      if (items[j] < items[min]) {
        // Compare the numbers
        min = j; // Change the current min number position if a smaller num is found
      }
    }
    if (min !== i) {
      // After each pass, if the current min num != initial min num, exchange the position.
      // Swap the numbers
      [items[i], items[min]] = [items[min], items[i]];
    }
  }
  return items;
};
