let n = 30;

function checkPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; 
    }
    return true; 
}

function Prime(n){
    let arrStore = [];
    for (let i = 1 ; i<= n ; i++){
        if (checkPrime(i)){
            arrStore.push(i);
        }
    }
    return arrStore;
}


function reverseNumber(n) {
    let arr = Prime(n);
    let arrStore = [];
    for ( let i = 0 ; i < arr.length; i++){
        let res = 0;
       while (arr[i] > 0) {
            let tmp = arr[i] % 10;
            res = res * 10 + tmp;
            arr[i] = Math.floor(arr[i] / 10);
        }
        arrStore.push(res);
    }
    return arrStore;
}



function isReversePrime(n) {
    let arr = reverseNumber(n);
    for (let i = 0; i < arr.length; i++) {
        if (!checkPrime(arr[i])) {
            return false;
        }
    }
    return true;
}

function emirpNumber(n){
    let arr = Prime(n);
    let arrStore = [];
    for (let i = 0; i < arr.length; i++){
        if (isReversePrime(arr[i])){
            arrStore.push(arr[i]);
        }
    }
    return arrStore;
}
    
console.log(emirpNumber(n));

