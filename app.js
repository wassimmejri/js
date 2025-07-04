const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.sendFile("./Views/home.html",{root: __dirname})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
