let n = 3000;


function divisor(n) {
    let arrStore = [];
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            arrStore.push(i);
        }
    }
    return arrStore;
}


let sumDivisor = function (n) {
    let arr = divisor(n);
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}



function checkFriendDigits(a,b) {
    if (a === sumDivisor(b) && b === sumDivisor(a) && a !== b) {
        return true;
    }
    return false;
}



function printFriendDigits(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            if (checkFriendDigits(i,j) ) {
                console.log(`(${i}, ${j})`);
            }
        }
    }
}



printFriendDigits(n);
