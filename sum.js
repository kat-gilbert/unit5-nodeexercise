

let sumOfArray = (arrayOfNumbers) => {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    }
    return sum;
}

module.exports = {
    sumOfArray: sumOfArray
}