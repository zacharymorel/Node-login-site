const User = require('../models/usersSchema.js')
// require objectId??

module.exports = app => {
  //Display a form to check a user and password
  app.get('/', (request, response) => {
    response.render('checkUser')
  })

  // Checking user with DataBase
  app.post('/checkUser', (request, response) => {
    const username = request.body.userName
    const password = request.body.password

    User.authenticate(username, password, (err, user) => {
      if (user) {
        response.send('Success')
      } else {
        response.send('Nopes')
      }
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
      .then(doc => {
        response.redirect('/')
      })
      .catch(err => {
        response.redirect('/', { err })
      })
  })
}
