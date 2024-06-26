const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.statics.signup = async function (username, password) {
    // validation 
    const exists = await this.findOne({ username })
    if (exists) {
        throw Error("username already in use")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ username, password: hash })
    return user
}

UserSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username })

    if (!user) {
        throw Error("incorrext username")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("incorrect password")
    }

    return user
}

module.exports = mongoose.model('User', UserSchema);