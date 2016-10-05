'use strict'

const   Md5     = require('md5')

let key = {
    generate(_string) {
        return Md5(`${ process.env.SALT_KEY }${ _string }${ process.env.END_KEY }`)
    }
}

module.exports = key