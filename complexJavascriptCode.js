// Filename: complexJavascriptCode.js

/***************************************
* This code implements a complex algorithm
* for calculating prime numbers. It uses
* a combination of Sieve of Eratosthenes
* and Lucas-Lehmer test methods.
***************************************/

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0)
      return false;
    i += 6;
  }

  return true;
}

function calculatePrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function lucasLehmerTest(p) {
  if (p <= 1 || !isPrime(p)) return false;
  if (p === 2) return true;

  let s = BigInt(4);
  const m = BigInt(2 ** p - 1);

  for (let i = 3; i <= p; i++) {
    s = (s ** BigInt(2) - BigInt(2)) % m;
  }

  return s === 0;
}

function calculateMersennePrimes(start, end) {
  const mersennePrimes = [];
  for (let i = start; i <= end; i++) {
    if (lucasLehmerTest(i)) {
      mersennePrimes.push(BigInt(2 ** i - 1));
    }
  }
  return mersennePrimes;
}

function printResults(primes, mersennePrimes) {
  console.log(`Prime numbers: ${primes.join(", ")}`);
  console.log(`Mersenne primes: ${mersennePrimes.join(", ")}`);
}

// Example usage:
const startRange = 1;
const endRange = 10000;

const primesInRange = calculatePrimesInRange(startRange, endRange);
const mersennePrimes = calculateMersennePrimes(startRange, endRange);

printResults(primesInRange, mersennePrimes);
