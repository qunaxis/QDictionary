import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import apiRoutes from './apiRoutes'
import * as db from './utils/db'


import config from './cfg.json'

let app = express();

app.use(morgan('dev'));

db.connection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', (req, res) => {

});
app.use('/api/v1/', apiRoutes);

app.listen(config.server.port, err => {
    err ?  console.error(err) : console.log(`Server has started on ${config.server.port}`);
});
