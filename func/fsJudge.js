const fs = require('fs');
  
const isExist = (path) => {  
  return fs.existsSync(path);  
}  

const isDir = (path) => {  
  return isExist(path) && fs.statSync(path).isDirectory();  
}

module.exports = {
  isExist,
  isDir,
}