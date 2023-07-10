export default function minFiltersShowAllInfo(
  arr,
  totalPollution = 0,
  filterCount = 0
) {
  let numberOfFactories = 0;
  let finalCreatedPollution;
  let feed = arr.map((item) => parseFloat(item)).filter((num) => !isNaN(num));
  let sortedArray = feed.sort((a, b) => a - b).reverse();
  let sortedArrayResultAcc = feed.reduce((sum, val) => sum + val, 0);

  //Stoper
  if (sortedArrayResultAcc < totalPollution / 2) {
    numberOfFactories = sortedArray.length;
    finalCreatedPollution = sortedArrayResultAcc;

    return {
      filterCount,
      numberOfFactories,
      totalPollution,
      finalCreatedPollution,
    };
  }

  let element = sortedArray[0] / 2;
  sortedArray[0] = element;
  ++filterCount;

  return minFiltersShowAllInfo(sortedArray, totalPollution, filterCount);
}
