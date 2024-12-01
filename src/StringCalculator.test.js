
import add from "./StringCalculator";

test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
})

test("return the number itself for single number", () => {
    expect(add("1")).toBe(1);
})

test("return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
})