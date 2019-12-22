const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastname: String,
    avatar: String
});

module.exports = model('User', userSchema);