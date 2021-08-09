const { Router } = require('express')

const {seven} = require("./public/js/divideBy7Kata")

async function buildRouter() {
    let router = new Router()

    router.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

    router.get('/divideBySeven', (req, res) => {
        let request = req.query.input
        let answer = seven(request)
        res = res.json({ answer: answer })
     })

    return router
}

module.exports = {
    buildRouter: buildRouter
}