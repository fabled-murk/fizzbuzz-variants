/**
 * Generator FizzBuzz — uses function* and yield for lazy evaluation.
 * Values are produced on demand, making this memory-efficient for large ranges.
 */
function* fizzBuzzGenerator(n) {
  for (let i = 1; i <= n; i++) {
    const fizz = i % 3 === 0 ? "Fizz" : "";
    const buzz = i % 5 === 0 ? "Buzz" : "";
    yield fizz + buzz || String(i);
  }
}

// Run it
if (require.main === module) {
  for (const value of fizzBuzzGenerator(100)) {
    console.log(value);
  }
}

module.exports = { fizzBuzzGenerator };
