const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: { type: String, require: [true, 'You need to enter a username!'] unique: true },
  passwordHash: {type: String, required: true}
})


const User = mongoose.model('User', userSchema)

module.exports = User
