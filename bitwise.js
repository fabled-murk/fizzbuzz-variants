/**
 * Bitwise FizzBuzz — avoids the modulo operator entirely.
 * Uses a lookup table indexed by a cycling 4-bit state to determine output.
 *
 * How it works:
 *   - We maintain two counters (c3 and c5) that cycle through 3 and 5
 *     respectively, resetting to 0 when they reach their target.
 *   - A 2-bit flag is built: bit 0 = divisible by 3, bit 1 = divisible by 5.
 *   - The flag indexes into a lookup table: [number, "Fizz", "Buzz", "FizzBuzz"].
 */
function fizzBuzzBitwise(n) {
  const results = [];
  let c3 = 0;
  let c5 = 0;

  for (let i = 1; i <= n; i++) {
    c3++;
    c5++;

    // (c3 === 3) coerced to 1 or 0
    const d3 = (c3 === 3) | 0;
    const d5 = (c5 === 5) | 0;

    // Reset counters: when d3 is 1, ~(-1) = ~0xFFFFFFFF = 0, so c3 &= 0 resets
    c3 &= ~(-d3);
    c5 &= ~(-d5);

    // Build a 2-bit index: bit0 = fizz, bit1 = buzz
    const index = d3 | (d5 << 1);

    const lookup = [String(i), "Fizz", "Buzz", "FizzBuzz"];
    results.push(lookup[index]);
  }

  return results;
}

// Run it
if (require.main === module) {
  console.log(fizzBuzzBitwise(100).join("\n"));
}

module.exports = { fizzBuzzBitwise };
