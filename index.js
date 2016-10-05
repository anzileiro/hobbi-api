'use strict'

const   Express           = require('express')
,       Compression       = require('compression')
,       Parser            = require('body-parser')
,       Mongoose          = require('mongoose')
,       Bluebird          = require('bluebird')
,       Server            = require('./utils/server')
,       Database          = require('./utils/database')
,       UserController    = require('./controllers/user')
,       UserRoute         = require('./routes/user')
,       App               = Express()

Mongoose.Promise = Bluebird
Mongoose.connect(Database.url)

App.use(Compression())
App.use(Parser.json())
App.use(Parser.urlencoded({ extended: false }))

UserRoute.forEach((_) => {
  App[_.method]([_.path], [_.handler])
})

App.listen(Server.port, () => {
  console.log(`Server running at localhost on port: ${ Server.port } in ${ Server.mode } mode`)
})
