const { cd } = require('../src/exec');

module.exports = (path) => {

  return new Promise((resolve, reject) => {
    let child

    try {
      cd(path);
      resolve();
    } catch(e) {
      return reject(e)
    }
  })
}