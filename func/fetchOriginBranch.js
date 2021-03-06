const { execCommand } = require("../src/exec");
const { gitFetchOrigin } = require("../command/gitOpration");

module.exports = cwd => {
  const extraOpt = {
    cwd
  };

  return new Promise((resolve, reject) => {
    try {
      child = execCommand(extraOpt, gitFetchOrigin, (code) => {
        if (code === 0) {
          resolve();
        }
      });
    } catch (e) {
      return reject(e);
    }
  });
};
