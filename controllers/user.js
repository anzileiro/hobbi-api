'use strict'

const   Md5         = require('md5')
,       Key         = require('../utils/key')
,       Model       = require('../models/user')
,       Response    = require('../utils/response')

let controller = {

    create: (_request, _response) => {

        let promise = new Model({
            name: _request.body.name,
            email: _request.body.email,
            password: Key.generate(_request.body.password),
            location: {
                lat: _request.body.location.lat,
                long: _request.body.location.long,
                address: _request.body.location.address
            },
            salary: {
                min: _request.body.salary.min,
                max: _request.body.salary.max
            },
            github: {
                id: _request.body.github.id,
                login: _request.body.github.login,
                url: _request.body.github.url,
                avatar_url: _request.body.github.avatar_url
            }
        }).save()
        
        promise.then((_object, _error) => {
            
            if (_error) {
                
                return Response.it(_response, Response.codes.error, Response.status.error, _error)

            } else {
                
                return Response.it(_response, Response.codes.created, Response.status.created, _object)
            
            }

        }).catch((_error) => {
            
            return Response.it(_response, Response.codes.error, Response.status.error, _error)
        
        })
    },

    get: (_request, _response) => {

        let model = Model.findOne({ _id: _request.params.id })

        model.then((_object, _error) => {


            if (_error) {
                
                return Response.it(_response, Response.codes.error, Response.status.error, _error)

            } else {
                
                if (!_object) {

                    return Response.it(_response, Response.codes.notFound, Response.status.notFound, _object)
                
                }

                return Response.it(_response, Response.codes.ok, Response.status.ok, _object)
            
            }

        }).catch((_error) => {

            return Response.it(_response, Response.codes.error, Response.status.error, _error)

        })
    }

}

module.exports = controller