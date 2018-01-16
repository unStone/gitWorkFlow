const { execCommand } = require('../src/exec');
const { gitPull } = require('../command/gitOpration');

module.exports = (cwd) => {
  const extraOpt = {
    cwd,
  }

  return new Promise((resolve, reject) => {
    let child
    try {
      child = execCommand(extraOpt, gitPull, (code, stdout, stderr) => {
        if(code === 0) return resolve();
      });
    } catch(e) {
      return reject(e)
    }
  })
}