const http = require('http')
const modules = require('./module.js')

const { readFileSync, readFileAsync, readFileName, readDirName } = modules
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World vdsv')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)

  //BLOCKING
  console.log('START')
  console.log('Content Sync:', readFileSync())
  // console.log('Content Async:', readFileAsync())
  console.log('END')
  readFileName
  readDirName
})
