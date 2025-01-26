import { describe, it, expect, beforeAll } from "bun:test";
import { binarySearch } from "@src/binary-search";

let arr1: number[];
let arr2: number[];
let arr3: number[];
let arr4: number[];
let arr5: number[];

beforeAll(() => {
  arr1 = [1, 3, 5, 7, 9, 11, 13, 15];
  arr2 = [-15, -10, -5, 0, 5, 10, 15];
  arr3 = [2, 4, 4, 6, 6, 8, 8, 10];
  arr4 = [7];
  arr5 = [];
});
describe("tests for binary searching algorithm", () => {
  describe("when values are not found", () => {
    it("should return -1 for arr1 when target is not present", () => {
      expect(binarySearch(arr1, 2)).toBe(-1);
      expect(binarySearch(arr1, 4)).toBe(-1);
      expect(binarySearch(arr1, 16)).toBe(-1);
    });

    it("should return -1 for arr2 when target is not present", () => {
      expect(binarySearch(arr2, -12)).toBe(-1);
      expect(binarySearch(arr2, 7)).toBe(-1);
      expect(binarySearch(arr2, 20)).toBe(-1);
    });

    it("should return -1 for arr3 when target is not present", () => {
      expect(binarySearch(arr3, 1)).toBe(-1);
      expect(binarySearch(arr3, 3)).toBe(-1);
      expect(binarySearch(arr3, 7)).toBe(-1);
      expect(binarySearch(arr3, 11)).toBe(-1);
    });

    it("should return -1 for arr4 when target is not present", () => {
      expect(binarySearch(arr4, 0)).toBe(-1);
      expect(binarySearch(arr4, 5)).toBe(-1);
      expect(binarySearch(arr4, 8)).toBe(-1);
    });

    it("should return -1 for arr5 (empty array) for any target", () => {
      expect(binarySearch(arr5, 1)).toBe(-1);
      expect(binarySearch(arr5, -1)).toBe(-1);
      expect(binarySearch(arr5, 100)).toBe(-1);
    });
  });
  describe("when values are start of array", () => {
    it("should return correct index for arr1", () => {
      expect(binarySearch(arr1, 1)).toBe(0); // First element
    });

    it("should return correct index for arr2", () => {
      expect(binarySearch(arr2, -15)).toBe(0); // First element
    });

    it("should return correct index for arr3", () => {
      expect(binarySearch(arr3, 2)).toBe(0); // First element
    });

    it("should return correct index for arr4", () => {
      expect(binarySearch(arr4, 7)).toBe(0); // Only element
    });

    it("should return -1 for arr5 (empty array)", () => {
      expect(binarySearch(arr5, 0)).toBe(-1); // No elements
    });
  });
  describe("when values are end of array", () => {
    it("should return correct index for arr1", () => {
      expect(binarySearch(arr1, 15)).toBe(arr1.length - 1); // Last element
    });

    it("should return correct index for arr2", () => {
      expect(binarySearch(arr2, 15)).toBe(arr2.length - 1); // Last element
    });

    it("should return correct index for arr3", () => {
      expect(binarySearch(arr3, 10)).toBe(arr3.length - 1); // Last element
    });

    it("should return correct index for arr4", () => {
      expect(binarySearch(arr4, 7)).toBe(0); // Only element is also the last
    });

    it("should return -1 for arr5 (empty array)", () => {
      expect(binarySearch(arr5, 100)).toBe(-1); // No elements
    });
  });
  describe("when values are middle of array", () => {
    it("should return correct index for arr1", () => {
      expect(binarySearch(arr1, 7)).toBe(3); // Middle element
      expect(binarySearch(arr1, 9)).toBe(4);
      expect(binarySearch(arr1, 5)).toBe(2);
    });

    it("should return correct index for arr2", () => {
      expect(binarySearch(arr2, -5)).toBe(2);
      expect(binarySearch(arr2, 0)).toBe(3);
      expect(binarySearch(arr2, 5)).toBe(4);
      expect(binarySearch(arr2, 10)).toBe(5);
    });

    it("should return correct index for arr3", () => {
      // Note: arr3 has duplicate values. binarySearch may return any valid index.
      // Here, we assume it returns the first occurrence.
      expect(binarySearch(arr3, 4)).toBe(1); // First 4 at index 1
      expect(binarySearch(arr3, 6)).toBe(3); // First 6 at index 3
      expect(binarySearch(arr3, 8)).toBe(5); // First 8 at index 5
    });

    it("should return correct index for arr4", () => {
      expect(binarySearch(arr4, 7)).toBe(0); // Only element is also the middle
    });

    it("should return -1 for arr5 (empty array)", () => {
      expect(binarySearch(arr5, 50)).toBe(-1); // No elements
    });
  });
});
