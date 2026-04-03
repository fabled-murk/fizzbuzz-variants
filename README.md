# FizzBuzz Variants 🎯

Five different JavaScript implementations of the classic FizzBuzz problem, each showcasing a different programming technique.

## The Problem

Print numbers from 1 to 100, but:
- For multiples of **3**, print `"Fizz"` instead
- For multiples of **5**, print `"Buzz"` instead
- For multiples of **both 3 and 5**, print `"FizzBuzz"` instead

## Implementations

### 1. `classic.js` — If/Else

The textbook approach. Uses a simple `for` loop with `if/else if/else` branching to check divisibility with the modulo (`%`) operator.

**Pros:** Dead simple, easy to read, universally understood.  
**Cons:** Verbose; the `% 15` check is a special case that some consider inelegant.

```bash
node classic.js
```

---

### 2. `functional.js` — Functional / Declarative

Uses `Array.from()` to generate the range and `.map()` to transform each element. Builds the output string by concatenating conditional parts — the `|| String(i)` fallback kicks in when both parts are empty.

**Pros:** No mutation, single expression, concise.  
**Cons:** Allocates the entire array upfront; slightly harder to read for beginners.

```bash
node functional.js
```

---

### 3. `generator.js` — Generator Function

Uses `function*` and `yield` for lazy evaluation. Values are produced one at a time on demand, making this approach memory-efficient for very large ranges.

**Pros:** Lazy evaluation, composable with other iterators, memory-efficient.  
**Cons:** Requires understanding of the iterator protocol; slightly more ceremony to consume.

```bash
node generator.js
```

---

### 4. `bitwise.js` — Bitwise Operations

Completely avoids the modulo operator. Instead, it maintains cycling counters for 3 and 5, using bitwise AND and shift operations to reset them and build a 2-bit lookup index.

**Pros:** Demonstrates low-level thinking; no division or modulo at all.  
**Cons:** Significantly harder to read; the cleverness is the point, not the practicality.

```bash
node bitwise.js
```

---

### 5. `regex.js` — Regular Expressions

Converts each number to a unary (tally-mark) string representation, then tests divisibility using regex patterns. `/^(xxx)+$/` matches strings whose length is a multiple of 3, and `/^(xxxxx)+$/` does the same for 5.

**Pros:** Creative use of pattern matching; no arithmetic operators for divisibility.  
**Cons:** Extremely inefficient for large numbers (O(n) string allocation per check); purely a novelty.

```bash
node regex.js
```

---

## Running All Variants

```bash
for f in classic.js functional.js generator.js bitwise.js regex.js; do
  echo "=== $f ==="
  node "$f"
  echo
done
```

## Verifying Correctness

All five implementations produce identical output for any given input. You can verify:

```bash
diff <(node classic.js) <(node functional.js)
diff <(node classic.js) <(node generator.js)
diff <(node classic.js) <(node bitwise.js)
diff <(node classic.js) <(node regex.js)
```

## License

MIT
