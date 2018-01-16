// 拿到所有分支
const gitAllBrach = `git branch -a`;
// 拿到所有线上分支
const gitOriginBrach = `git branch -r`;
// 拿到所有本地分支
const gitLocalBrach = `git branch`;
// pull 线上代码
const gitPull = `git pull`;
// fetch 分支
const gitFetchOrigin = `git fetch origin`;
// 删除本地分支
const gitDeleteBrach = branchName => `git branch -D ${branchName}`;
// 选择分支
const gitCheckoutBranch = branchName => `git checkout ${branchName}`;
// a分支 超前 b 分支的 commit
const isOutstrip = (a, b) => `git log --oneline ${a} ^${b}`;

// pm2 启动服务器
const pm2Start = (indexJs, num, name) =>
  `pm2 start ${indexJs} -i ${num} -n ${name}`;
// pm2 停止服务器
const pm2Stop = name => `pm2 stop ${name}`;

const npmInstallG = modules => `npm install -g ${modules}`;

module.exports = {
  gitAllBrach,
  gitOriginBrach,
  gitLocalBrach,
  gitPull,
  gitFetchOrigin,
  gitDeleteBrach,
  gitCheckoutBranch,
  isOutstrip,
  pm2Start,
  pm2Stop,
  npmInstallG
};
