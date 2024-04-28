export function binarySearch(
  haystack: number[],
  needle: number
): number | null {
  let low = 0,
    high = haystack.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const item = haystack[mid];
    if (item === needle) {
      return mid;
    } else if (item > needle) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}
