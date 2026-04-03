/**
 * Functional FizzBuzz — uses Array.from, map, and no mutation.
 * Demonstrates a declarative, expression-oriented style.
 */
function fizzBuzzFunctional(n) {
  return Array.from({ length: n }, (_, i) => i + 1).map((i) => {
    const fizz = i % 3 === 0 ? "Fizz" : "";
    const buzz = i % 5 === 0 ? "Buzz" : "";
    return fizz + buzz || String(i);
  });
}

// Run it
if (require.main === module) {
  console.log(fizzBuzzFunctional(100).join("\n"));
}

module.exports = { fizzBuzzFunctional };
