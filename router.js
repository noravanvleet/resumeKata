const { Router } = require('express')

const { seven } = require("./public/js/divideBy7Kata")

async function buildRouter() {
    let router = new Router()

    router.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

    router.get('/divideBySeven', (req, res) => {
        let input = req.query.input
        if(input) {
            let result = seven(input, 0)
            res.status(200).json({"result" : result})
        } else {
            res.status(400).json({error:"Please send input"})
        }
    })

    return router
}

module.exports = {
    buildRouter: buildRouter
}