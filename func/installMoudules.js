const { which, execCommand } = require("../src/exec");
const { npmInstallG } = require("../command/gitOpration")

const installYarn = extraOpt => {
  return new Promise((resolve, reject) => {
    const command = npmInstallG('yarn');
    try {
      execCommand(extraOpt, command, (code) => {
        if(code === 0) return resolve();
      });
    } catch(e) {
      reject(e);
    }
  })
};

const installmodulesWithCache = (extraOpt, resolve, reject) => {
  const command = npmInstallG('yarn add');
  try {
    execCommand(extraOpt, command, (code) => {
      console.log('installMoudules-------------', code)
      if(code === 0) return resolve();
    });
  } catch(e) {
    reject(e);
  }
}

const installModules = (cwd) => {
  return new Promise((resolve, reject) => {

    const extraOpt = {
      cwd
    };

    if (!which("yarn")) {
      installYarn(extraOpt)
        .then(() => {
          return installmodulesWithCache(extraOpt, resolve, reject);
        });
      return;
    }
    installmodulesWithCache(extraOpt, resolve, reject)
  })
};

module.exports = {
  installModules
};
