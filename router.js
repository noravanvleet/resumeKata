const { Router } = require('express')

async function buildRouter() {
    let router = new Router()

    router.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

    return router
}

module.exports = {
    buildRouter: buildRouter
}