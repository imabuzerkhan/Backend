// const ages = [20 , 17 , 56 ]

// function checkadult (ages){
//   return ages >=18
// }
// const result = ages.filter(checkadult)
// console.log(result)



const studentdata = [
  
  {
    id: 1,
    name: "Alice Johnson",
    age: 15,
    grade: "10th",
    subjects: {
      Math: 95,
      English: 88,
      Science: 92
    }
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 16,
    grade: "11th",
    subjects: {
      Math: 78,
      English: 85,
      Science: 80
    }
  },
  {
    id: 3,
    name: "Charlie Brown",
    age: 15,
    grade: "10th",
    subjects: {
      Math: 85,
      English: 90,
      Science: 87
    }
  },
  {
    id: 4,
    name: "Daisy Miller",
    age: 17,
    grade: "12th",
    subjects: {
      Math: 88,
      English: 91,
      Science: 89
    }
  }
]

function findsub (studentdata){
  return studentdata.subjects
}

const results = studentdata.map(findsub)
console.log(results)