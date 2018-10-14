const fs = require('fs');
const path = require('path');

fs.watch(__dirname, (event, file)=>{
  console.log(file)
  console.log(event)
});