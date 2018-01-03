const { cd, cp, ls, rm, mv, mkdir } = require('../src/exec');

const $cd = (path) => {
  return new Promise((resolve, reject) => {
    let child

    try {
      cd(path);
      resolve();
    } catch(e) {
      return reject(e)
    }
  })
}

const $cp = (path, to) => {
  return new Promise((resolve, reject) => {
    let child

    try {
      cp('-r', path, to);
      resolve();
    } catch(e) {
      return reject(e)
    }
  })
}

const $ls = (path) => {
  return new Promise((resolve, reject) => {
    try {
      const arr = ls(path);
      resolve(arr);
    } catch(e) {
      return reject(e)
    }
  })
}

const $rm = (path) => {
  return new Promise((resolve, reject) => {
    try {
      rm('-rf', path);
      resolve();
    } catch(e) {
      return reject(e)
    }
  })
}
const $mv = (path, to) => {
  return new Promise((resolve, reject) => {
    try {
      mv(path, to);
      resolve();
    } catch(e) {
      return reject(e)
    }
  })
}

const $mkdir = (path) => {
  return new Promise((resolve, reject) => {
    try {
      mkdir(path);
      resolve();
    } catch(e) {
      return reject(e)
    }
  })
}


module.exports = {
  cd: $cd, 
  cp: $cp,
  ls: $ls,
  rm: $rm,
  mv: $mv,
  mkdir: $mkdir,
}