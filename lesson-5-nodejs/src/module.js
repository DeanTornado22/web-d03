const fs = require('fs')

function readFileSync() {
  const content = fs.readFileSync('./src/greeting.txt')
  return content.toString()
}

function readFileAsync() {
  fs.readFile('./src/greeting.txt', (err, data) => {
    if (err) throw err
    return data
  })
  return content.toString()
}

function readFileName() {
  console.log('FILE NAME :', __filename)
}
function readDirName() {
  console.log('DIR NAME :', __dirname)
}

module.exports = {
  readFileSync,
  readFileAsync,
  readFileName,
  readDirName,
}
