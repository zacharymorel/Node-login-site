const User = require('../models/usersSchema.js')
// require objectId??

module.exports = app => {
  //Display a form to check a user and password
  app.get('/', (request, response) => {
    response.render('checkUser')
  })

  // logic to find one that has to match existsing user entry
  app.post('/checkUser', (request, response) => {
    User.authenticate(request.body)
      .then(user => {
        if (user) {
          response.send('Success')
        } else {
          response.send('Nopes')
        }
      })
      .catch(err => {
        response.send('Err')
      })
  })

  // User.use(authenticate)

  // Create User Form
  app.get('/createUser', (request, response) => {
    response.render('createUser')
  })

  //  Creates a User and Login in password
  app.post('/createUser', (request, response) => {
    User.create(request.body)
      .then(docs => {
        response.redirect('/')
      })
      .catch(err => {
        response.redirect('/', { err })
      })
  })
}
