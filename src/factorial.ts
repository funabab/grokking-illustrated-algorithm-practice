export function factorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  } else if (num < 0) {
    return num * factorial(Math.abs(num + 1));
  } else {
    return num * factorial(num - 1);
  }
}
