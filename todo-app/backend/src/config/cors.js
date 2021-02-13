const { render } = require("./server")

module.exports = function(req, resp, next) {
    // '*' permitir que qualquer origem acesse a aplicação
    res.header('Access-Control-Allow-Origin', '*') 
    res.header('Access-Control-Allow-Methods', ['GET, POST, OPTIONS, PUT, PATCH, DELETE'])
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}