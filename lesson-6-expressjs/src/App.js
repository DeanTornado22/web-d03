const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const userRoute = require('./routers/userRoutes')
const postRoute = require('./routers/postRoutes')
const loginRoute = require('./routers/loginRoutes')

app.use(bodyParser.json())
app.use('/users', userRoute)
app.use('/posts', postRoute)
app.use('/login', loginRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
