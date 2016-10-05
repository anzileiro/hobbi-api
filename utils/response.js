'use strict'

const codes = {
    error: 500,
    created: 201,
    ok: 200,
    notFound: 404
}

let status = {
    error: {
        code: codes.error,
        message: 'error'
    },
    created: {
        code: codes.created,
        message: 'created'
    },
    ok: {
        code: codes.ok,
        message: 'ok'
    },
    notFound: {
        code: codes.notFound,
        message: 'not found'
    }
}

let it = (_response, _code, _status, _object) => {
    
    return _response.status(_code).json({
        status: _status,
        object: _object
    })

}

module.exports = {
    it: it,
    codes: codes,
    status: status
}