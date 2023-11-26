export function insertionSort(unsortedList) {
  const len = unsortedList.length;
  for (let i = 1; i < len; i++) {
    let j;
    const tmp = unsortedList[i]; // Copy of the current element.
    /* Check through the sorted part and compare with the number in tmp. If large, shift the number */
    for (j = i - 1; j >= 0 && unsortedList[j] > tmp; j--) {
      // Shift the number
      unsortedList[j + 1] = unsortedList[j];
    }
    // Insert the copied number at the correct position
    // in sorted part.
    unsortedList[j + 1] = tmp;
  }
}

/**
 * @function insertionSortAlternativeImplementation
 * @description InsertionSort is a stable sorting algorithm
 * @param {Integer[]} array - Array of integers
 * @return {Integer[]} - Sorted array
 * @see [InsertionSort](https://en.wikipedia.org/wiki/Quicksort)
 */

export function insertionSortAlternativeImplementation(array) {
  const length = array.length;
  if (length < 2) return array;

  for (let i = 1; i < length; i++) {
    // Take current element in array
    const currentItem = array[i];
    // Take index of previous element in array
    let j = i - 1;

    // While j >= 0 and previous element is greater than current element
    while (j >= 0 && array[j] > currentItem) {
      // Move previous, greater element towards the unsorted part
      array[j + 1] = array[j];
      j--;
    }
    // Insert currentItem number at the correct position in sorted part.
    array[j + 1] = currentItem;
  }
  // Return array sorted in ascending order
  return array;
}
