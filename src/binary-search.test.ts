import { describe, test, expect } from "bun:test";
import { binarySearch } from "./binary-search";

describe("binary search", () => {
  const haystack = [1, 3, 5, 7, 9];
  test("Number exist in array", () => {
    expect(binarySearch(haystack, 3)).toBe(1);
  });

  test("Number does not exist in array", () => {
    expect(binarySearch(haystack, -1)).toBe(null);
  });
});
