const express = require('express')
const auth = require('./auth')

module.exports = function(server) {
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    // Rotas fechadas por autenticação -> Token JWT
    protectedApi.use(auth)

    // Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService.js')
    BillingCycle.register(protectedApi, '/billingCycles')

    // Rotas abertas -> sem autenticação
    const openApi = express.Router()
    server.use('/oapi', openApi)

    // Declarando as autenticações para as rotas login, signup e validateToken
    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}