let n = 10; 

function checkPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}


function Prime(n,){
    let arrStore = [];
    for (let i = 2 ; i<= n ; i++){
        if (checkPrime(i)){
            arrStore.push(i);
        }
    }
    return arrStore;
}

function sumPrime(n) {
    let arr = Prime(n);
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sumPrime(n));
