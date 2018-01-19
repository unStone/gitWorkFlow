const { execCommand } = require("../src/exec");
const { gitCheckoutBranch } = require("../command/gitOpration");

module.exports = (cwd, branch) => {
  const extraOpt = {
    cwd
  };

  const command = gitCheckoutBranch(branch);
  return new Promise((resolve, reject) => {
    try {
      execCommand(extraOpt, command, (code) => {
        if (code === 0) {
          resolve();
        }
      });
    } catch (e) {
      return reject(e);
    }
  });
};
