import { describe, test, expect } from "bun:test";
import { count, max, search, sum } from "./recursion_excercise";

describe("Recursion Summation", () => {
  test("sum([1,2,3]) = 5", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  test("sum([]) = 0", () => {
    expect(sum([])).toBe(0);
  });

  test("sum([7]) = 7", () => {
    expect(sum([7])).toBe(7);
  });
});

describe("Recursion Count", () => {
  test("count([1,2,3]) = 3", () => {
    expect(count([1, 2, 3])).toBe(3);
  });

  test("count([]) = 0", () => {
    expect(count([])).toBe(0);
  });

  test("count([7]) = 7", () => {
    expect(count([7])).toBe(1);
  });
});

describe("Recursion Max", () => {
  test("max([1,2,3]) = 3", () => {
    expect(max([1, 2, 3])).toBe(3);
  });

  test("max([]) = 0", () => {
    expect(max([])).toBe(0);
  });

  test("max([7]) = 7", () => {
    expect(max([7])).toBe(7);
  });

  test("max([1, 5, 10, 3]) = 10", () => {
    expect(max([1, 5, 10, 3])).toBe(10);
  });
});

describe("Recursion Search", () => {
  test("search(2, [1,2,3]) = true", () => {
    expect(search(2, [1, 2, 3])).toBe(true);
  });

  test("search(7, []) = false", () => {
    expect(search(7, [])).toBe(false);
  });

  test("search(7, [7]) = true", () => {
    expect(search(7, [7])).toBe(true);
  });

  test("search(-1, [1, 3, 5, 10]) = false", () => {
    expect(search(-1, [1, 3, 5, 10])).toBe(false);
  });
});
