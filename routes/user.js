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
    },
    {
        method: 'get',
        path: '/app',
        handler: (_request, _response) => {
            _response.status(200).json({ status: 'working', message: 'look https://github.com/anzileiro/hobbi-api' })
        }
    }
]

module.exports = routes