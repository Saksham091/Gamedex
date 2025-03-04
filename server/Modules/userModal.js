const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },

    lastName: {
        type: String,
        require: true,
        trim: true
    },

    userName: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        index: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        require: true,
        trim: true,
        min: 8,
    },

    wishlist: {
        type: Array
    },

    playing: {
        type: Array
    },

    played: {
        type: Array
    }

})

module.exports = mongoose.model("user", userSchema)