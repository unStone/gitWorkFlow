const { execCommand } = require("../src/exec");
const { gitFetchOrigin } = require("../command/gitOpration");

module.exports = cwd => {
  const extraOpt = {
    cwd
  };

  return new Promise((resolve, reject) => {
    let child;

    try {
      child = execCommand(extraOpt, gitFetchOrigin);
    } catch (e) {
      return reject(e);
    }
    resolve("");
  });
};
