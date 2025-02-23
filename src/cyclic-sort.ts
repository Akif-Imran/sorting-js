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