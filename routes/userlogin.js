const User = require('../models/usersSchema.js')
// require objectId??

module.exports = app => {
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

  // User.use(authenticate)

  app.post('/login', (request, response) => {
    User.create(request.body)
      .then(docs => {
        response.redirect('/')
      })
      .catch(err => {
        response.redirect('/', { err })
      })
  })
}
