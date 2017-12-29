// 拿到所有分支
const gitAllBrach = `git branch -a`;
// 拿到所有线上分支
const gitOriginBrach = `git branch -r`;
// 拿到所有本地分支
const gitLocalBrach = `git branch`;
// 删除本地分支
const gitDeleteBrach = (branchName) => `git branch -D ${branchName}`;
// 选择分支
const gitCheckoutBranch = (branchName) => `git checkout ${branchName}`;
// a分支 超前 b 分支的 commit
const isOutstrip = (a, b) => `git log --oneline ${a} ^${b}`

module.exports = {
  gitAllBrach,
  gitOriginBrach,
  gitLocalBrach,
  gitDeleteBrach,
  gitCheckoutBranch,
  isOutstrip,
}