import { fizzbuzz } from "./fizzbuzz";

test("fizzbuzz returns fizz, buzz, fizzbuzz or the number depending on divisiblity", () => {
  expect(fizzbuzz(1)).toBe(1);
  expect(fizzbuzz(2)).toBe(2);
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(4)).toBe(4);
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(6)).toBe("Fizz");
  expect(fizzbuzz(15)).toBe("FizzBuzz");
  expect(fizzbuzz(15.5)).toBe(15.5);
});
