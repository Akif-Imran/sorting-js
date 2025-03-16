/**
 * A merge sort implementation that sort the array in ascending order. Modifies the original array;
 * @param arr The arr to be sorted
 * @returns the original array as sorted.
 */
export const mergeSort = (arr: number[], l: number, r: number) => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);
  return arr;
};
export const merge = (arr: number[], l: number, m: number, r: number) => {
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);
  let li = 0,
    ri = 0,
    i = l;

  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }

  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
};
/* export const mergeSort = (arr: number[], l: number, r: number) => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);
  return arr;
};
export const merge = (arr: number[], l: number, m: number, r: number) => {
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);
  let i = l,
    li = 0,
    ri = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }

  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }

  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
}; */
/* export const mergeSort = (arr: number[], l: number, r: number): number[] => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);

  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);

  return arr;
};

const merge = (arr: number[], l: number, m: number, r: number) => {
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);
  let i = l,
    li = 0,
    ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }

  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
}; */
/* export const mergeSort = (arr: number[], l: number, r: number): number[] => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);
  return arr;
};
const merge = (arr: number[], L: number, M: number, R: number) => {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);
  let i = L,
    li = 0,
    ri = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }
  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
}; */
/* export const mergeSort = (arr: number[], l: number, r: number): number[] => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);
  return arr;
};
const merge = (arr: number[], L: number, M: number, R: number) => {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);
  let i = L,
    li = 0,
    ri = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }
  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
}; */
/* export const mergeSort = (arr: number[], l: number, r: number): number[] => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);

  return arr;
};

const merge = (arr: number[], L: number, M: number, R: number) => {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);
  let i = L,
    li = 0,
    ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }

  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }

  while (ri < right.length) {
    arr[i] = left[ri];
    ri += 1;
    i += 1;
  }
}; */
/* export const mergeSort = (arr: number[], l: number, r: number): number[] => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);

  return arr;
};
const merge = (arr: number[], L: number, M: number, R: number) => {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);
  let i = L,
    li = 0,
    ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }
  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
}; */
/* export const mergeSort = (arr: number[], l: number, r: number) => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const m = Math.floor((l + r) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
  return arr;
};
const merge = (arr: number[], L: number, M: number, R: number) => {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);
  let i = L,
    li = 0,
    ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }

  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
}; */
/* export const mergeSort = (arr: number[], l: number, r: number): number[] => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
  return arr;
};

const merge = (arr: number[], L: number, M: number, R: number) => {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);

  let i = L,
    li = 0,
    ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }
  while (li < left.length) {
    arr[i] = left[li];
    li += 1;
    i += 1;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri += 1;
    i += 1;
  }
}; */

/* export const mergeSort = (arr: number[], l: number, r: number): number[] => {
  if (arr.length === 0) return arr;
  if (l === r) return arr;

  const mid = Math.floor((l + r) / 2);

  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  merge(arr, l, mid, r);

  return arr;
};

const merge = (arr: number[], L: number, M: number, R: number) => {
  const left = arr.slice(L, M + 1);
  const right = arr.slice(M + 1, R + 1);
  let li = 0,
    ri = 0,
    i = L;

  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr[i] = left[li];
      li += 1;
    } else {
      arr[i] = right[ri];
      ri += 1;
    }
    i += 1;
  }
  while (li < left.length) {
    arr[i] = left[li];
    li++;
    i++;
  }
  while (ri < right.length) {
    arr[i] = right[ri];
    ri++;
    i++;
  }
}; */
