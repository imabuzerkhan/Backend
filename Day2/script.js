const fs = require('fs')
// ** how to create a file in node js
// fs.writeFile("hey.txt" , "hello iam abuzer khan", function(err){
// if(err){
//   console.err("error")
// }else{
//   console.log("done")
// }
// } )

// ** append file
// fs.appendFile( "kaise hai bhai log", function(err){
//   if(err){
//     console.log("err")

//   }else{
//     console.log("done")
//   }
// })

fs.rename("hey.txt", "hello.txt" , function(err){
    if(err){
      console.log("err")
  
    }else{
      console.log("done")
    }
  } )