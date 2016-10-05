'use strict'

let database = {
    url: (process.env.MONGODB_URI || '')
}

module.exports = database