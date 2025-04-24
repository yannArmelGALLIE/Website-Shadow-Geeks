const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    gender: {type: String, required: true},
    birthday: {type: Date, required: true},
    region: {type: String, required: true},
    imgUrl: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
