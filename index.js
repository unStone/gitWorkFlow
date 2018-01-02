const gitOpration = require('./func/returnBranch');
const gitIsOutstrip = require('./func/returnIsOutstrip');
const gitCheckoutBranch = require('./func/checkoutBranch');
const gitPullBranch = require('./func/pullBranch');
const fetchOriginBranch = require('./func/fetchOriginBranch');
const cd = require('./func/cd');
const ls = require('./func/ls');
const cp = require('./func/cp');
const { isExist, isDir } = require('./func/fsJudge');

module.exports = {
  gitCheckoutBranch,
  gitIsOutstrip,
  gitOpration,
  gitPullBranch,
  fetchOriginBranch,
  isExist,
  isDir,
  cd,
  ls,
  cp,
}