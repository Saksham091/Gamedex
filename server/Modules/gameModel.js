const mongoose = require('mongoose')
const schema = mongoose.Schema

const gameSchema = new schema({
    name: {
        type: String
    },
    
    about: {
        type: String
    },

    genre: {
        type: String
    },

    releaseDate: {
        type: Date
    },

    minRequired: [
        {
            OS: {
                type: String
            },
            Processor: {
                type: String
            },
            Memory: {
                type: String
            },
            Graphics: {
                type: String
            },
            Storage: {
                type: String
            }
        }
    ],

    recRequired: [
        {
            OS: {
                type: String
            },
            Processor: {
                type: String
            },
            Memory: {
                type: String
            },
            Graphics: {
                type: String
            },
            Storage: {
                type: String
            }
        }
    ],

    gameplay: [
        {
            image: {
                type: Array
            },

            video: {
                type: String
            }
        }
    ],
    
    trailer: {
        type: String
    }
})

module.exports = mongoose.model("Games", gameSchema)