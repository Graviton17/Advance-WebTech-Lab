import { useState, useMemo } from "react";

// Simulates a heavy computation
function findPrimes(limit) {
  console.log(`⚙️ Computing primes up to ${limit}...`);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

export default function UseMemoDemo() {
  const [limit, setLimit] = useState(100);
  const [darkBg, setDarkBg] = useState(false); // Unrelated state change

  // ✅ useMemo: Only re-runs findPrimes when `limit` changes
  const primes = useMemo(() => findPrimes(limit), [limit]);

  return (
    <div
      className="demo-card"
      style={{
        background: darkBg ? "#1e1e2e" : "",
        color: darkBg ? "#fff" : "",
      }}
    >
      <h2>🧮 useMemo</h2>
      <p className="concept">
        <strong>Concept:</strong> Memoizes the <em>result</em> of an expensive
        computation. The function re-runs only when its dependencies change,
        preventing redundant work on unrelated re-renders.
      </p>

      <div className="btn-row">
        <label>
          Limit:&nbsp;
          <input
            type="range"
            min="10"
            max="500"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          />
          <strong> {limit}</strong>
        </label>
      </div>

      <button onClick={() => setDarkBg((b) => !b)}>
        🎨 Toggle BG (won't recompute primes)
      </button>

      <p>
        Found <strong>{primes.length}</strong> primes up to {limit}
      </p>
      <p className="code-preview">
        {primes.slice(0, 20).join(", ")}
        {primes.length > 20 ? " …" : ""}
      </p>
      <p className="hint">
        👀 Open console — notice recompute only happens when limit changes!
      </p>
    </div>
  );
}
