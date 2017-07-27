const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.get('/', (request, response) => {
  response.render('home')
})

const authenticate = (request, response, next) => {
  if () {

  }
}



app.listen(3000, () => {
  console.log('may the force be with you!');
})
