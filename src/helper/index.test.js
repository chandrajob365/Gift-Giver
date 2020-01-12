import { maxNumber } from "./index";

describe("max_number", () => {
  describe("given an empty array", () => {
    it("returns an empty array", () => {
      expect(maxNumber([])).toEqual(0);
    });
  });
  describe("given an array of numbers", () => {
    it("returns an max value from array", () => {
      expect(maxNumber([1, 2, 3])).toEqual(3);
    });
  });
});
