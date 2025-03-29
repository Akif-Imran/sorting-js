/**
 * This is binary search standard algo.
 * @param arr arr to search in
 * @param target value to look for
 * @time O(n log n)
 * @space O(1)
 * @returns the value index when found otherwise the index where value should be at.
 */
export const binarySearch = (arr: number[], target: number) => {
  if (arr.length === 0) return -1;
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}
/* export const binarySearch = (arr: number[], target: number) => {
  if (arr.length === 0) return -1;
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}; */
/* export const binarySearch = (arr: number[], target: number): number => {
  if (arr.length === 0) return -1;
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}; */

/* export const binarySearch = (arr: number[], target: number): number => {
  if (arr.length === 0) return -1;
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
      return m;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}; */
/* export const binarySearch = (arr: number[], target: number): number => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}; */
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 4)); //2 or -1
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 15)); //7
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 1)); //0
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 9)); //4
