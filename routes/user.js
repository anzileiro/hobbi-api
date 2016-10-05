'use strict'

const   controller    = require('../controllers/user')

let routes = [
    {
        method: 'post',
        path: '/v1/user',
        handler: controller.create
    },
    {
        method: 'get',
        path: '/v1/user/:id',
        handler: controller.get
    }
]

module.exports = routes