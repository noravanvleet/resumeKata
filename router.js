const { Router } = require('express')

async function buildRouter() {
    let router = new Router()

    router.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

    router.get('/seven', (req, res) => {

    })

    router.get('/seven', (req, res) => {
        let request = req.body
        let answer = mathKata(request)
        //Take the data send and run it through the Kata
        //Send back the solution
        res.json({ answer: answer })
    })
    return router
}


module.exports = {
    buildRouter: buildRouter
}