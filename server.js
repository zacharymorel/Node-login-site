const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const authenticate = (request, response, next) => {
  if (request.body.userName === 'foob' && request.body.password === 'doob') {
    next()
  } else {
    response.render('home')
  }
}

app.get('/', (request, response) => {
  response.render('home')
})

console.log(authenticate)
app.use(authenticate)

app.post('/login', (request, response) => {
  response.render('login', request.body)
})



app.listen(3000, () => {
  console.log('may the force be with you!');
})
