const { execCommand } = require('../src/exec');
const { gitPull } = require('../command/gitOpration');

module.exports = (cwd) => {
  const extraOpt = {
    cwd,
  }

  return new Promise((resolve, reject) => {
    let child

    try {
      child = execCommand(extraOpt, gitPull);
    } catch(e) {
      return reject(e)
    }
    child.stdout.on('data', function(data) {
      resolve(data);
    })
  })
}