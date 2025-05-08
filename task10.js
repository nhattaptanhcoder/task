let n = 30;


function divisor(n) {
    let arrStore = [];
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            arrStore.push(i);
        }
    }
    return arrStore;
}

function countDivisor(n) {
    return divisor(n).length;
}
console.log(`cac uoc cua ${n} la : ${divisor(n)}`);
console.log(`so cac uoc cua ${n} la : ${countDivisor(n)}`);

 
function checkPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function countPrime(n) {
    let arr = divisor(n);
    let count = 0;
    arr.forEach(element => {
        if(checkPrime(element)) {
            count++;
        }
    });
    return count;
}

console.log(`so cac uoc nguyen to cua ${n} la : ${countPrime(n)}`);