import { describe, test, expect } from "bun:test";
import { quicksort } from "./quicksort";

describe("quicksort", () => {
  test("[] = []", () => {
    expect(quicksort([])).toEqual([]);
  });

  test("[1, 5, 2, 3] = [1, 2, 3, 5]", () => {
    expect(quicksort([1, 5, 2, 3])).toEqual([1, 2, 3, 5]);
  });

  test("[-1, 1, -5, 2, 3] = [-5, -1, 1, 2, 3]", () => {
    expect(quicksort([-1, 1, -5, 2, 3])).toEqual([-5, -1, 1, 2, 3]);
  });

  test("[1] = [1]", () => {
    expect(quicksort([1])).toEqual([1]);
  });

  test("[5, 1] = [1, 5]", () => {
    expect(quicksort([5, 1])).toEqual([1, 5]);
  });
});
