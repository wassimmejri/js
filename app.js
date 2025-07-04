const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.sendFile("./Views/home.html",{root: __dirname})
})



mongoose.connect('mongodb+srv://mejriwassim:tBPKk0k575s6jEXd@cluster0.tkj9mp3.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
. then( () => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
} )
.catch( (err) => {console.log(err)} );
