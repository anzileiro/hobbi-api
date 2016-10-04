'use strict'

const   Express       = require('express')
,       Compression   = require('compression')
,       Parser        = require('body-parser')
,       Server        = require('./configs/server')
,       App           = Express()

App.use(Compression())
App.use(Parser.json())
App.use(Parser.urlencoded({ extended: false }))

App.get('/app', (_request, _response) => {
  _response.status(200).json({
    status: 'working'
  })
})

App.listen(Server.port, () => {
  console.log(`Server running at localhost on port: ${ Server.port } in ${ Server.mode } mode`)
})