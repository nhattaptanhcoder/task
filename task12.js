let n = 10000;

function checkPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
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


function sumPrime(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}


function checkSumPrime(n) {
    
    let arr = Prime(n);
    for ( let i = 0; i <= arr.length-4; i++){
        let arrStore = [];
        let count = 0;
        while ( count < 4 ){
            arrStore.push(arr[i + count]);
            count++;
        }
          if (checkPrime(sumPrime(arrStore))){
            console.log(arrStore);
          }
    }
    
}
checkSumPrime(n);
