module.exports = function(req, res, next) {
    // '*' permitir que qualquer origem acesse a aplicação backend
    res.header('Access-Control-Allow-Origin', '*') 
    res.header('Access-Control-Allow-Methods', ['GET, POST, OPTIONS, PUT, PATCH, DELETE'])
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requeted-With, Content-Type, Accept')
    next()
}