/**
 * Regex FizzBuzz — uses pattern matching on unary (tally-mark) representations.
 *
 * How it works:
 *   - Each number i is converted to a string of i repeated characters ("x").
 *   - Divisibility by 3 is tested with /^(xxx)+$/ — matches strings whose
 *     length is a multiple of 3.
 *   - Divisibility by 5 is tested with /^(xxxxx)+$/ — same idea for 5.
 *   - No modulo operator is used anywhere.
 */
function fizzBuzzRegex(n) {
  const div3 = /^(xxx)+$/;
  const div5 = /^(xxxxx)+$/;

  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    const tally = "x".repeat(num);

    const fizz = div3.test(tally) ? "Fizz" : "";
    const buzz = div5.test(tally) ? "Buzz" : "";

    return fizz + buzz || String(num);
  });
}

// Run it
if (require.main === module) {
  console.log(fizzBuzzRegex(100).join("\n"));
}

module.exports = { fizzBuzzRegex };
