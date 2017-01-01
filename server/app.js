import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackconfig from '../webpack.config'

import apiRoutes from './apiRoutes'
import * as db from './utils/db'


import config from './cfg.json'

let app = express()

let compiler = webpack(webpackconfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackconfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(morgan('dev'))

db.connection()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.use('/api/v1/', apiRoutes)

app.listen(config.server.port, err => {
    err ?  console.error(err) : console.log(`Server has started on ${config.server.port}`)
})
