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


// ** rename the file
// fs.rename("hey.txt", "hello.txt" , function(err){
//     if(err){
//       console.log("err")
  
//     }else{
//       console.log("done")
//     }
//   } )


// **copy the file
// fs.copyFile("hello.txt" , "./copy/hello.txt" , function(err){
//     if(err){
//       console.log("err")
  
//     }else{
//       console.log("done")
//     }
//   } )

// ** delete file
// fs.unlink("hello.txt" , function(err){
//     if(err){
//       console.log("err")
  
//     }else{
//       console.log("done")
//     }
//   } )

// ** remove the directory which is not empty 

fs.rm("./copy" , {recursive:true} , function(err){
    if(err){
      console.log("err")
  
    }else{
      console.log("done")
    }
  } )