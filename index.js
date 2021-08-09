const routerBuilder = require('./router')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT ? process.env.PORT : 4000
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')

app.use(
    express.static(path.join(__dirname, '/public')),
    bodyParser.urlencoded({extended: false}),
    bodyParser.json(),
    express.json(),
    cors()
)

routerBuilder.buildRouter()
    .then(router => {
        app.use('/', router)
        app.listen(port, () => {
            console.log(`OGantry app listening at http://localhost:${port}`)
        });
    }).catch((err) => {
    console.error(err)
})