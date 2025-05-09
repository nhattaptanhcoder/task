let n = 20;

function checkPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function Prime(n) {
  let arrStore = [];
  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) {
      arrStore.push(i);
    }
  }
  return arrStore;
}

function CheckSumMinusPrime(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let a = arr[i];
        let b = arr[j];
        let sum = a + b;
        let minus = Math.abs(a - b);
  
        if (checkPrime(sum) && checkPrime(minus)) {
          result.push([a, b]);
        }
      }
    }
    return result;
  }

function printResult() {
    let primes = Prime(n);
    const result = CheckSumMinusPrime(primes);
  if (result) {
    result.forEach((pair) => {
      console.log(`${pair}`);
    }
);
  }
}
 
printResult();