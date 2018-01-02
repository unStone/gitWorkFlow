const { ls } = require('../src/exec');

module.exports = (path) => {

  return new Promise((resolve, reject) => {
    try {
      const arr = ls(path);
      resolve(arr);
    } catch(e) {
      return reject(e)
    }
  })
}