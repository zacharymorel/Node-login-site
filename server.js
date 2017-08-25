const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const userlogin = require('./routes/userlogin.js')
const app = express()

mongoose.connect('mongodb://localhost:27017/UserActivityDB')
mongoose.promise = global.promise

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.listen(3000, () => {
  console.log('may the force be with you!')
})
