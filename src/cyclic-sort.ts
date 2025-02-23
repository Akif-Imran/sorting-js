/**
 * Cyclic sort algo, that sorts the array inplace in O(n) time provided the
 * values range from [1...n] where n is the length of the array.
 * @param arr an array of numbers to sort with values ranging from 1 to n (inclusive).
 * @returns the inplace sorted array
 */
export const cyclicSort = (arr: number[]) => {
  const LENGTH = arr.length;
  let i = 0;
  while (i < arr.length) {
    const correctIndex = arr[i] - 1;
    if (1 <= arr[i] && arr[i] <= LENGTH && arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
};

console.log(cyclicSort([3, 1, 2, 5, 4]));
console.log(cyclicSort([3, -1, 2, 7, 4]));
console.log(
  cyclicSort([16, 3, 17, 1, 15, -2, 20, 10, 9, 8, 25, 2, 18, 13, 14])
);
console.log(
  cyclicSort([
    100, 50, 30, 4, 25, 75, 7, 2, 60, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);
console.log(
  cyclicSort([
    5, 3, 20, 18, 2, 14, 7, 100, 99, 8, 11, 1, 6, 4, 13, 12, 10, 9, 17, 16, 15,
  ])
);
