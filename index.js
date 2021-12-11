

const data = require("./data");
const sum = require("./sum");
const arrayShuffle = require("./node_modules/lodash/_arrayShuffle");
const numberArray = require("./data");



console.log(data.name);
console.log(data.hometown);
console.log(sum.sumOfArray(data.numberArray))

//from lodash
console.log(arrayShuffle(data.numberArray));

