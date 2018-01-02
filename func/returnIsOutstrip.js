const { execCommand } = require('../src/exec');
const { isOutstrip } = require('../command/gitOpration')

module.exports = (cwd, branchA, branchB) => {
  const extraOpt = {
    cwd,
  }

  return new Promise((resolve, reject) => {
    const command = isOutstrip(branchA, branchB);

    try {
      execCommand(extraOpt, command, (code, stdout, stderr) => {
        let outstrip = false;
        if(stdout === '') {
          outstrip = true
        }
        if(code === 0) {
          resolve(outstrip)
        }
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
      });
    } catch(e) {
      return reject(e)
    }
    
    // child.stdout.on('data', function(data) {
    //   console.log('data', data, a, b)
    //   // 持续性输出，暂未解决
    //   // console.log('gitOpration++++++++++++++++++++++++', chalk.magenta(data))
    //   resolve(data);
    // })
    
  })
}