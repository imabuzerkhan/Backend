// ! for each
// var array = [1,2,3,4]
// console.log(array)
 
// var newarray = array.forEach((value)=>{
//  const newarray = value+4
//  console.log(newarray)
// })

// const staff =[
//   { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//   { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//   { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//   { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
// ]
// staff.forEach((stafvalue)=>{
//   const stafvalueshow = `i am ${stafvalue.name} a staff of nepal business college and my age is ${stafvalue.age} and i earn ${stafvalue.salary}  per month and i m satisfaying with that  `
// console.log(stafvalueshow)
// })

// ** find index 

// staff.forEach((name, index)=>{
// const value = `number is ${index} : i am a ${name.name} a manazer of home  `
// console.log(value)
// })


// how to use the aaray argument in foreach
let newarray = [11,21,31]
newarray.forEach(( newarray , index ,  array)=>{
console.log(array)
})

let scores = [12, 55, 70];

scores.forEach((score, index, array) => {
  console.log(array);
});

// add value in foreach

const totalscore = [2,3,4]

let totalval = 1;
totalscore.forEach((score)=>{
  const allvalue = totalval + score
  console.log(allvalue)

})