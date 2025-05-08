let n = 10;

function checkPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; 
    }
    return true; 
}

function Prime(n){
    let arrStore = [];
    for (let i = 2 ; i<= n ; i++){
        if (checkPrime(i)){
            arrStore.push(i);
        }
    }
    return arrStore;
}

console.log(Prime(n));

function countPrime(n) {
    return Prime(n).length;
}

console.log(countPrime(n));