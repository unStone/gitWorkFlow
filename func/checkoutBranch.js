const { execCommand } = require('../src/exec');
const { gitCheckoutBranch } = require('../command/gitOpration');

module.exports = (cwd, branch) => {
  const extraOpt = {
    cwd,
  }

  const command = gitCheckoutBranch(branch)
  return new Promise((resolve, reject) => {
    let child

    try {
      child = execCommand(extraOpt, command);
    } catch(e) {
      return reject(e)
    }
    child.stdout.on('data', function(data) {
      console.log('checkoutcheckoutcheckout', data)
      resolve(data);
    })
  })
}