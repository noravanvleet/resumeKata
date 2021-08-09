const { Router } = require('express')

const { seven } = require("./public/js/divideBy7Kata")

async function buildRouter() {
    let router = new Router()

    router.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

    router.post('/divideBySeven', (req, res) => {
        let input = req.body.input
        if(input) {
            let result = seven(input)
            res.status(200).json({"result" : result})
        }
    })

    return router
}

module.exports = {
    buildRouter: buildRouter
}