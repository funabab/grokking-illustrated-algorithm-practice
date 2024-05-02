export function sum(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

export function count(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return 1 + count(arr.slice(1));
}

export function max(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    const a = arr[1];
    const b = max(arr.slice(1));
    return a > b ? a : b;
  }
}

export function search(needle: number, haystack: number[]): boolean {
  if (haystack.length === 0) {
    return false;
  }
  const mid = Math.floor(haystack.length / 2);
  const item = haystack[mid];

  if (item === needle) {
    return true;
  } else if (item > mid) {
    return search(needle, haystack.slice(mid + 1));
  } else {
    return search(needle, haystack.slice(0, mid));
  }
}
