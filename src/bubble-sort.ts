/**
 * The bubble sort algorithm is used to sort array.
 * @time O(n^2)
 * @space O(1)
 * @param arr arr to be sorted
 * @returns the original in-place sorted array
 */
export const bubbleSort = (arr: number[]) => {
  const LENGTH = arr.length;
  for (let i = 0; i < LENGTH; i++) {
    for (let j = 1; j < LENGTH - i; j++) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([9, 1, 8, 2, 7, 3, 6, 4, 5]));
