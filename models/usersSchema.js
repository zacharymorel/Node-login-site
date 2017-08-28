const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  userName: { type: String, require: true, unique: true },
  passwordHash: { type: String, required: true }
})

// VIRTUAL ATTRIBUTE
userSchema
  .virtual('password')
  .get(function() {
    return null
  })
  .set(function(value) {
    const hash = bcrypt.hashSync(value, 8)
    this.passwordHash = hash
  })

userSchema.methods.authenticate = function(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

userSchema.statics.authenticate = function(userName, password, done) {
  this.findOne({ userName: userName }, function(err, user) {
    if (err) {
      done(err, false)
    } else if (user && user.authenticate(password)) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
}

const User = mongoose.model('User', userSchema)
module.exports = User
