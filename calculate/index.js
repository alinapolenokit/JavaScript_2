function calculateNumbersSum(numbers) {
    if (numbers.length == 0) 
    return 0;
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
};

console.log(calculateNumbersSum([]));
console.log(calculateNumbersSum ([0, 1, 2, 4, 8]));
