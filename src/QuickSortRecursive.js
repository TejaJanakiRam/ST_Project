/**
 * Partition in place QuickSort.
 * @param {number[]} inputList list of values.
 * @param {number} low lower index for partition.
 * @param {number} high higher index for partition.
 */
const quickSort = (inputList, low, high) => {
  if (!Array.isArray(inputList)) {
    throw new TypeError("Please input a valid list or array.");
  }
  if (low < high) {
    // get the partition index.
    const pIndex = partition(inputList, low, high);
    // recursively call the quickSort method again.
    quickSort(inputList, low, pIndex - 1);
    quickSort(inputList, pIndex + 1, high);
  }
  return inputList;
};

/**
 * Partition In Place method.
 * @param {number[]} partitionList list for partitioning.
 * @param {number} low lower index for partition.
 * @param {number} high higher index for partition.
 * @returns {number} `pIndex` pivot index value.
 */
const partition = (partitionList, low, high) => {
  const pivot = partitionList[high];
  let pIndex = low;
  for (let index = low; index <= high - 1; index++) {
    if (partitionList[index] < pivot) {
      // swap variables using array destructuring
      [partitionList[index], partitionList[pIndex]] = [
        partitionList[pIndex],
        partitionList[index],
      ];
      pIndex += 1;
    }
  }
  [partitionList[pIndex], partitionList[high]] = [
    partitionList[high],
    partitionList[pIndex],
  ];
  return pIndex;
};

export { quickSort };
