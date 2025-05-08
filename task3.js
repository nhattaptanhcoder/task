
let n ;

let divisor = function (n) {
    let arrStore = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arrStore.push(i);
        }
    }
    return arrStore;
}
let sumDivisor = function (n) {
    let arr = divisor(n);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function countDivisors(n) {
    return divisor(n).length;
}

function checkPrime(divisor) {
    if ( divisor <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(divisor); i++) {
        if (divisor % i === 0) return false;
    }
    return true;
}

function divisorPrime(n) {
    let arrStore = [];
    n.forEach(element => {
        if (checkPrime(element)) {
            arrStore.push(element);
        }
    });
    return arrStore;
}

let countDivisorPrime = function (n) {
    let arr = divisor(n);
    let count = 0;
    arr.forEach(element => {
        if (checkPrime(element)) {
            count++;
        }
    });
    return count;
}


let sumDivisorPrime = function (n) {
    let arr = divisor(n);
    let sum = 0;
    arr.forEach(element => {
        if (checkPrime(element)) {
            sum += element;
        }
    });
    return sum;
}

let total = function (n) {
    let sum = n + sumDivisor(n) + countDivisors(n) - sumDivisorPrime(n) - countDivisorPrime(n);
    return sum;
}



console.log("Tong can tim la : " + total(n));