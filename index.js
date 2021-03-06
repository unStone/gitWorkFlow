const gitOpration = require("./func/returnBranch");
const gitIsOutstrip = require("./func/returnIsOutstrip");
const gitCheckoutBranch = require("./func/checkoutBranch");
const gitPullBranch = require("./func/pullBranch");
const fetchOriginBranch = require("./func/fetchOriginBranch");
const { cp, cd, ls, rm, mv, mkdir, tail } = require("./func/easyCommand");
const { isExist, isDir } = require("./func/fsJudge");
const { projectStart, projectStop } = require("./func/pm2");
const { touch, sed, cat, echo, exit } = require("./src/exec.js");
const { installModules } = require("./func/installMoudules");

module.exports = {
  gitCheckoutBranch,
  fetchOriginBranch,
  gitPullBranch,
  gitIsOutstrip,
  gitOpration,
  isExist,
  isDir,
  exit,
  echo,
  cat,
  cd,
  ls,
  cp,
  rm,
  mv,
  sed,
  tail,
  mkdir,
  touch,
  projectStop,
  projectStart,
  installModules
};
