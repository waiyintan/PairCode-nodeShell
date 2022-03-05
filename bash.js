const pwdExport = require('./pwd')
const lsExport = require('./ls')
const cat = require('./cat')

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ")

  if (cmd.length ===1 ) {
    if(cmd[0] === 'pwd') {
      pwdExport()
    } else if(cmd[0] === 'ls') {
      lsExport()
    }
  } else {
    cat(cmd[1])
  }

})
