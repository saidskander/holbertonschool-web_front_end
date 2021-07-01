// Changing stack order using setTimeout
function countPrimeNumbers() {
  let count = 0;
  for (let x = 2; x <= 100; x++) {
    let prime = false;
    for (let j = 2; j <= x; j++) {
      if (x % j == 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      ++count;
    }
  }

  return count;
}

function loop() {
  for (let i = 0; i < 100; ++i) {
    countPrimeNumbers();
  }
}

let start = performance.now();
setTimeout(loop(), 0);
let end = performance.now();

let final = end - start;
console.log(`Execution time of calculating prime numbers 100 times was ${final} milliseconds.`);
