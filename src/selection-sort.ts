export const selectionSort = (arr: number[]) => {
  const LENGTH = arr.length;
  for (let i = 0; i < LENGTH - 1; i++) {
    let min = i;
    for (let j = i + 1; j < LENGTH; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log(selectionSort([9, 1, 8, 2, 7, 3, 6, 4, 5]));
