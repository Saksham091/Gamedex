const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    fristName: {
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
        lowercase: true,
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
        lowercase: true
    },

})

module.exports = mongoose.model("user", userSchema)