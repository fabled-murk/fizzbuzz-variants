/**
 * Classic FizzBuzz — straightforward if/else approach.
 * The most common implementation you'll see in interviews.
 */
function fizzBuzzClassic(n) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(String(i));
    }
  }
  return results;
}

// Run it
if (require.main === module) {
  console.log(fizzBuzzClassic(100).join("\n"));
}

module.exports = { fizzBuzzClassic };
