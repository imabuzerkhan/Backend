const fs = require('fs')
// how to create a file in node js
fs.writeFile("hey.txt" , "hello iam abuzer khan", function(err){
if(err){
  console.err("error")
}else{
  console.log("done")
}
} )