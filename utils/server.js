'use strict'

let server = {
    port: (process.env.PORT || 9000),
    mode: (process.env.MODE || 'development')
}

module.exports = server