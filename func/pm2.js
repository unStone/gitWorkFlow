const { which, execCommand } = require('../src/exec');
const { pm2Start, pm2Stop } = require('../command/gitOpration')

const projectStart = (cwd, indexJs, name) => {
  const extraOpt = {
    cwd,
  }

  return new Promise((resolve, reject) => {
    let child;
    const command = pm2Start(indexJs, name);
    try {
      if (which('pm2')) {
        child = execCommand(extraOpt, command);
        resolve();
      }
    } catch(e) {
      return reject(e)
    }

    child.stdout.on('data', function(data) {
      resolve(data);
    })
  })
}

const projectStop = (cwd, indexJs) => {
  const extraOpt = {
    cwd,
  }

  return new Promise((resolve, reject) => {
    let child;
    const command = pm2Stop(indexJs);
    try {
      if (which('pm2')) {
        child = execCommand(extraOpt, command);
        resolve();
      }
    } catch(e) {
      return reject(e)
    }

    child.stdout.on('data', function(data) {
      resolve(data);
    })
  })
}

module.exports = {
  projectStart,
  projectStop,
}