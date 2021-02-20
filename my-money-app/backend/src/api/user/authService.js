const _ = require('lodash')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require('./user')
const env = require('../../.env')


const emailRegex = /\S+@\S+\.\S+/ // Regex para validar o email
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6, 20})/ // Regex para validar o password

// Função utilizada caso requisição de login retorne algum erro do banco de dados
const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => error.push(error.message))
    return res.status(400).json({ errors })
}

// Fazendo o Login
const login = (req, res, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''

    User.findOne({email}, (err, user) => {
        if(err) {
            return sendErrorsFromDB(res, err) 
        } else if (user && bcript.compareSync(password, user.password)) {
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: "1 day"
            })
            const { name, email } = user
            res.json({ name, email, token })
        } else {
            return res.status(400).send({ errors: ['Usuário/Senha inválidos.'] })
        }
    })
}

// Validando o Token 
const validateToken = (req, res, next) => {
    const token = req.body.token || ''

    jwt.verify(token, authSecret, function(err, decoded) {
        return res.status(200).send({ valid: !err })
    })
}

const signup = (req, res, next) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''

    if(!email.match(emailRegex)) {
        return res.status(400).send({ errors: ['O e-mail informado é inválido.'] }) 
    }

    if(!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                'Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, uma caracter especial(@#$%) e tamanho entra 6-20.'
            ]
        })
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if(!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({ errors: ['Senhas não conferem.'] })
    }

    User.findOne({email}, (err, user) => {
        if(err) {
            return sendErrorsFromDB(res, err)
        } else if(user) {
            return res.status(400).send({ errors: ['Usuário já esta cadastrado.']})
        } else {
            const newUser = new User({ name, email, password: passwordHash })
            
            newUser.save(err => {
                if(err) {
                    return sendErrorsFromDB(res, err)
                } else {
                    login(req, res, next)
                }
            })
        }
    })
}

module.exports = { login, validateToken, signup }