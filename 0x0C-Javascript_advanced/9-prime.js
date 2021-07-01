// Prime numbers & timing execution
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


let start = performance.now();
countPrimeNumbers();
let end = performance.now();

let result = end - start;
console.log(`Execution time of printing countPrimeNumbers was ${result} milliseconds.`);
