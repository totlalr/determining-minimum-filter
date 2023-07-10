export default function minFilters(arr, totalPollution = 0, filterCount = 0) {
  let sortedArray = arr.sort((a, b) => a - b).reverse();
  let sortedArrayResultAcc = arr.reduce((sum, val) => sum + val, 0);

  //Stoper
  if (sortedArrayResultAcc < totalPollution / 2) {
    return filterCount;
  }

  let element = sortedArray[0] / 2;
  sortedArray[0] = element;
  ++filterCount;

  return minFilters(sortedArray, totalPollution, filterCount);
}
