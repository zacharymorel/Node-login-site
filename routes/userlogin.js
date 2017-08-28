const User = require('../models/usersSchema.js')
// require objectId??

module.exports = app => {
  //Display a form to create a user and password
  app.get('/', (request, response) => {
    response.render('createUser')
  })

  // User.use(authenticate)

  //  Creates a User and Login in password
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
