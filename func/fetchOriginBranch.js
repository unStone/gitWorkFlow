const { execCommand } = require('../src/exec');
const { gitFetchOrigin } = require('../command/gitOpration');

module.exports = (cwd) => {
  const extraOpt = {
    cwd,
  }

  return new Promise((resolve, reject) => {
    let child

    try {
      child = execCommand(extraOpt, gitFetchOrigin);
    } catch(e) {
      console.log('eeeee', e)
      return reject(e)
    }
    // child.stdout.on('data', function(data) {
    //   console.log('gitFetchgitFetch333', data)
    //   resolve(data);
    // })
    resolve('');
  })
}