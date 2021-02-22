const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
    // verificando se é uma requisiçãoo do tipo OPTIONS -> CORS 
    // nesse caso a requisição OPTIONS é enviada para saber quais são as origins permitidas para acessar aplicação  
    /*  
        A verificação é reliazada para que o middleware não bloqueie requisições do tipo OPTIONS executando next() 
        para ir para o próximo requisição
    */
    if(req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        
        if(!token) {
            return res.status(403).send({ errors: ['No token provided.'] })
        }

        jwt.verify(token, env.authSecret, function (err, decoded) {
            if(err) {
                return res.status(403).send({
                    errors: ['Failed to authorization token.']
                })
            } else {
                // req.decoded = decoded
                next()
            }
        }) 
    }
}