

let sumOfArray = (arrayOfNumbers) => {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    }
    return sum;
}

// let myArray = [1, 2, 3, 4];
// console.log(sumOfArray(myArray));

module.exports = {
    sumOfArray: sumOfArray
}