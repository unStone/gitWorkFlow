const shell = require('shelljs');

const baseOptions = {
  async: true
}

/**
 * 
 * @param {Obeject} extraOpt 
 * @param {String} command 
 */ 
const execCommand = (extraOpt, command, callback) => {
  if(!extraOpt.cwd) {
    throw new Error(
      "you must designated as the project's path"
    )
  }

  const opt = Object.assign({}, baseOptions, extraOpt);
  return shell.exec(command, opt, callback);
}

/**
 * filter all branch of project
 * @param {Array} gitBranchArr
 */ 
const filterFinalBranch = (gitBranchArr) => {
  return gitBranchArr.filter(items => {
    if(!items) {
      return false
    }
    if(items.indexOf('->') !== -1) {
      return false
    }
    return true;
  }).map(items => {
    const opt = items.replace(/(remotes\/|origin\/)/g, '').replace(/(\s|\*)/g, '');
    return opt;
  })
}

/**
 * String -> Array
 * @param {String} gitBranchStr 
 */ 
const gitStrTransToArr = (gitBranchStr) => {
  return gitBranchStr.split('\n');
}

const cd = shell.cd;
const ls = shell.ls;
const cp = shell.cp;
const rm = shell.rm;
const mv = shell.mv;
const mkdir = shell.mkdir;
const which = shell.which;
const touch = shell.touch;

module.exports = {
  cp,
  cd,
  ls,
  rm,
  mv,
  mkdir,
  which,
  touch,
  execCommand,
  filterFinalBranch,
  gitStrTransToArr,
}