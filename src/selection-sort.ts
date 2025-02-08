export const selectionSort = (arr: number[]) => {
  const LENGTH = arr.length;
  for (let i = 0; i < LENGTH; i++) {
    let min = [i, arr[i]]; //[index,value]
    for (let j = i + 1; j < LENGTH; j++) {
      if (arr[j] < min[1]) {
        min = [j, arr[j]];
      }
    }
    const temp = arr[i];
    arr[i] = min[1];
    arr[min[0]] = temp;
  }
  return arr;
};

console.log(selectionSort([9, 1, 8, 2, 7, 3, 6, 4, 5]));
