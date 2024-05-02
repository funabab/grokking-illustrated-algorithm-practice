export function quicksort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[1];
  const less = arr.filter((item) => item < pivot);
  const greater = arr.filter((item) => item > pivot);
  return [...quicksort(less), pivot, ...quicksort(greater)];
}
