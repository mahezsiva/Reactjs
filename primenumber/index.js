console.log("prime numbers");

const newArray = [9,24,3,7];
const PrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
});

console.log(PrimeArray);