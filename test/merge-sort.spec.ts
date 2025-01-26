// mergeSort.test.js
// Import Bun's test functions
import { describe, it, expect } from "bun:test";

// Import the mergeSort function
// Adjust the import path based on your project structure
import { mergeSort } from "@src/merge-sort";

// Test Suite for Merge Sort Algorithm
describe("Merge Sort Algorithm", () => {
  // Basic Functionality Tests
  describe("Basic Functionality", () => {
    it("should return an empty array when input is empty", () => {
      const input: number[] = [];
      const expected: number[] = [];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should return the same array when it contains only one element", () => {
      const input = [42];
      const expected = [42];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });
  });

  // General Sorting Tests
  describe("General Cases", () => {
    it("should correctly sort an already sorted array", () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [1, 2, 3, 4, 5];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should correctly sort a reverse-sorted array", () => {
      const input = [5, 4, 3, 2, 1];
      const expected = [1, 2, 3, 4, 5];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should correctly sort an array with duplicate elements", () => {
      const input = [3, 1, 2, 3, 4, 2];
      const expected = [1, 2, 2, 3, 3, 4];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should correctly sort an array with negative numbers", () => {
      const input = [0, -10, 5, -3, 8, -1];
      const expected = [-10, -3, -1, 0, 5, 8];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should correctly sort an array with all identical elements", () => {
      const input = [7, 7, 7, 7, 7];
      const expected = [7, 7, 7, 7, 7];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should correctly sort a large array", () => {
      const input = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
      const expected = [...input].sort((a, b) => a - b);
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should handle arrays with even number of elements", () => {
      const input = [10, 7, 8, 9, 1, 5];
      const expected = [1, 5, 7, 8, 9, 10];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should handle arrays with odd number of elements", () => {
      const input = [12, 11, 13, 5, 6, 7];
      const expected = [5, 6, 7, 11, 12, 13];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should handle arrays with floating point numbers", () => {
      const input = [3.5, 2.1, 5.6, 1.2, 4.8];
      const expected = [1.2, 2.1, 3.5, 4.8, 5.6];
      expect(mergeSort(input, 0, input.length - 1)).toEqual(expected);
    });

    it("should mutate the original array", () => {
      const input = [4, 2, 5, 1, 3];
      const copy = [...input];
      mergeSort(input, 0, input.length - 1);
      expect(input[0]).toBe(1);
    });
  });
});
