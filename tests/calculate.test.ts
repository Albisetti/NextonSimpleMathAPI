import { calculate } from "../index";

describe("calculate", () => {
  it("should return the correct result for a simple addition", () => {
    const expression = "1+2+3";
    const result = calculate(expression);
    expect(result).toBe(6);
  });

  it("should return the correct result for a simple subtraction", () => {
    const expression = "10-5-3";
    const result = calculate(expression);
    expect(result).toBe(2);
  });

  it("should return the correct result for a simple multiplication", () => {
    const expression = "5*2*3";
    const result = calculate(expression);
    expect(result).toBe(30);
  });

  it("should return the correct result for a simple division", () => {
    const expression = "50/5/2";
    const result = calculate(expression);
    expect(result).toBe(5);
  });

  it("should return the correct result for a more complex expression", () => {
    const expression = "10*(2+3)-8/2";
    const result = calculate(expression);
    expect(result).toBe(46);
  });

  it("should return the correct result for an expression with negative values", () => {
    const expression = "-2+5*3";
    const result = calculate(expression);
    expect(result).toBe(13);
  });
});
