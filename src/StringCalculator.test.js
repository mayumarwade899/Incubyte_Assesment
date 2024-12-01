
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

test("handles multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10)
})

test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6)
})

test("supoort different delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6)
})

