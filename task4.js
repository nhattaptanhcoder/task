let n,m;

function checkPrime(num)
{
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 

}

function Prime(n,m){
    let arrStore = [];
    for (let i = n ; i<= m ; i++){
        if (checkPrime(i)){
            arrStore.push(i);
        }
    }
    return arrStore;
}

console.log(Prime(n,m));

