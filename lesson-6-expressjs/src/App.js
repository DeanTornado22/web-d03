const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const userRoute = require('./routers/userRoutes')

app.use(bodyParser.json())
app.use('/users', userRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
