const {
  execCommand,
  filterFinalBranch,
  gitStrTransToArr,
} = require('../src/exec');
const { gitOriginBrach } = require('../command/gitOpration')

module.exports = (cwd) => {
  const extraOpt = {
    cwd,
  }

  return new Promise((resolve, reject) => {
    let child

    try {
      child = execCommand(extraOpt, gitOriginBrach);
    } catch(e) {
      return reject(e)
    }
    child.stdout.on('data', function(data) {
      const arr = filterFinalBranch(gitStrTransToArr(data));
      resolve(arr);
    })
  })
}