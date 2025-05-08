let n = 1000;

var arrStore = [];

function checkQPrime(n) {
    for (let i = 5; i <= n; i++) {
        let count = 0;
        for (let j = 2; j <= i/2; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            arrStore.push(i);
        }
    }
}
checkQPrime(n);
console.log(arrStore);