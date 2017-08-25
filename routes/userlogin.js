const user = require('../models/userSchema.js')
// require objectId??

module.exports = app => {
  //make this in mongo
  //make a user schema
  //check again mongodb
  //just directly use a way to add the users and passwords in the mongodb-
  // const authenticate = (request, response, next) => {
  //   if (request.body.userName === 'foob' && request.body.password === 'doob') {
  //     next()
  //   } else {
  //     response.render('home')
  //   }
  // }

  app.get('/', (request, response) => {
    response.render('home')
  })

  app.use(authenticate)

  app.post('/login', (request, response) => {
    response.render('login', request.body)
  })
}
