const gitOpration = require("./func/returnBranch");
const gitIsOutstrip = require("./func/returnIsOutstrip");
const gitCheckoutBranch = require("./func/checkoutBranch");
const gitPullBranch = require("./func/pullBranch");
const fetchOriginBranch = require("./func/fetchOriginBranch");
const { cp, cd, ls, rm, mv, mkdir } = require("./func/easyCommand");
const { isExist, isDir } = require("./func/fsJudge");
const { projectStart, projectStop } = require("./func/pm2");
const { touch } = "./src/exec.js";

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
  rm,
  mv,
  mkdir,
  touch,
  projectStart,
  projectStop
};
