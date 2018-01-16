const { which, execCommand } = require("../src/exec");
const { pm2Start, pm2Stop } = require("../command/gitOpration");

const projectStart = (cwd, indexJs, num, name) => {
  const extraOpt = {
    cwd
  };

  return new Promise((resolve, reject) => {
    let child;
    const command = pm2Start(indexJs, num, name);
    try {
      if (which("pm2")) {
        child = execCommand(extraOpt, command);
        resolve();
      } else {
        reject("pm2 is not find");
      }
    } catch (e) {
      return reject(e);
    }

    child.stdout.on("data", function(data) {
      resolve(data);
    });
  });
};

const projectStop = (cwd, name) => {
  const extraOpt = {
    cwd
  };

  return new Promise((resolve, reject) => {
    let child;
    const command = pm2Stop(name);
    if (which("pm2")) {
      child = execCommand(extraOpt, command);
      resolve();
    } else {
      reject("pm2 is not find");
    }

    child.stdout.on("data", function(data) {
      resolve(data);
    });
  });
};

module.exports = {
  projectStart,
  projectStop
};
