let n = 10;



function checkTPrime(n) {
     let arrStore = [];
    for (let i = 3; i <= n; i++) {
        let count = 0;
        for (let j = 2; j <= i/2; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 1) {
            arrStore.push(i);
        }
    }
    return arrStore;
}


console.log(checkTPrime(n));