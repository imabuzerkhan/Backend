// map method in js

// ** syntax of map method

//? new araay = newarray.map((currentvlaue , [index , [array]])=>{

// ?},thisArg )

// ** You have an array of numbers and you want to double each number in the array.

// ** without map

let number = [2, 4, 5, 6];
let doublenumber = [];

for (let i = 0; i < number.length; i++) {
  doublenumber.push(number[i] * 2);
}

console.log(doublenumber);

// ** with map

const currentnum = [2 ,4 ,7, 9]
const doublevalue = currentnum.map(num => num*2)
console.log(doublevalue)