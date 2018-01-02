const { cp } = require('../src/exec');

module.exports = (path, to) => {

  return new Promise((resolve, reject) => {
    let child

    try {
      cp(path, to);
      resolve();
    } catch(e) {
      return reject(e)
    }
  })
}