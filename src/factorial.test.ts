import { describe, test, expect } from "bun:test";
import { factorial } from "./factorial";

describe("Factorial", () => {
  test("Factorial of -1 = -1", () => {
    expect(factorial(-1)).toBe(-1);
  });

  test("Factorial of -5 = -120", () => {
    expect(factorial(-5)).toBe(-120);
  });

  test("Factorial of 0! = 1", () => {
    expect(factorial(0)).toBe(1);
  });

  test("1! = 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("5! = 120", () => {
    expect(factorial(5)).toBe(120);
  });

  test("3! = 6", () => {
    expect(factorial(3)).toBe(6);
  });
});
