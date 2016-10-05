'use strict'

const   Mongoose    = require('mongoose')
,       Schema      = Mongoose.Schema

let model = new Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    location: {
        lat: String,
        long: String,
        address: String
    },
    salary: {
        min: Number,
        max: Number
    },
    github: {
        id: Number,
        login: String,
        url: String,
        avatar_url: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = Mongoose.model('user', model)