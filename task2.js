var n = 3; 

function checkPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function Prime(n){
    let arrStore = [];
    for (let i = Math.pow(10, n-1 ); i < Math.pow(10 , n); i++) {
        if (checkPrime(i)) {
            arrStore.push(i);
        }
    }
    return arrStore;
}
console.log(Prime(n));