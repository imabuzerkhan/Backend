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


// ** You have an array of user objects and you want to extract only their IDs into a new array.


// ? without map


const darta = [
  {id:1 , name:"abuzer"},
  {id:2 , name:"abuzer"},
  {id:3 , name:"abuzer",}
]

const userid = []

for(let i=0 ; i< darta.length ; i++ ){
  userid.push(darta[i].id)
}
console.log(userid)


// ? with map

const data = [
  {id:2 , age:20},
  {id:4 , age:40},
  {id:6 , age:60}
]