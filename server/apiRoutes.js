import express from 'express'
import jwt from 'jsonwebtoken'
import request from 'request'

import * as db from './utils/db'
import config from './cfg.json'

let apiRoutes = express.Router();

apiRoutes.post('/signin', (req, res) => {
    db.findUser({ name: req.body.name }).then(user => {
        if (!user) {
            res.json({ status: false, message: 'Неверное имя пользователя' });
        } else if (user.password !== req.body.password) {
            res.json({ status: false, message: 'Неверный пароль' });
        } else {
            let token = jwt.sign(user, config.server.secret, {
                expiresIn: 86400
            });
            res.json({
                status: true,
                message: 'You are signed in!',
                token: token
            });
        }
    });
});


apiRoutes.post('/signup', (req, res) => {
    const user = req.body;
    db.findUser(user).then(data => {
        if(data) {
            res.json({
                status: false,
                message: 'Login is busy'
            });
            console.log(`Wrong try to signup`);
        } else {
            db.createUser(user).then(user => {
                res.json({
                    user,
                    status: true
                });
                console.log(`User ${user.name} has been signuped`);
            });
        }
    });
});

apiRoutes.use((req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, config.server.secret, (err, decoded) => {
            if (err) {
                return res.json({ status: false, message: 'Failed auth token' })
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).send({
            status: false,
            message: 'Invalid token'
        })
    }
});

apiRoutes.get('/users', (req, res) => {
    db.listOfUsers().then(data => {
        res.json({ data })
    })
});

apiRoutes.post('/translate', (req, res) => {
    request.post(config.api.url, { form: {
        key: config.api.key,
        lang: req.body.lang,
        text: req.body.text
    }}, (err, respond) => {
        if (!err) {
            const translate = JSON.parse(respond.body);
            res.json({ status: true, data: translate.def[0] });
        } else {
            res.json({ status: false, message: err });
        }
    })
});

module.exports = apiRoutes;
