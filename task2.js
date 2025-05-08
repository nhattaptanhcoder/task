var n = 3; // Example input, you can change this value

function checkPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}

function Prime(n){
    let arrStore = [];
    for (let i = Math.pow(10, n-1 ); i <= Math.pow(10 , n); i++) {
        if (checkPrime(i)) {
            arrStore.push(i);
        }
    }
    return arrStore;
}
console.log(Prime(n));