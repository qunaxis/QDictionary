import mongoose from 'mongoose'
import User from '../models/auth'
import config from '../cfg.json'
import bluebird from 'bluebird'

mongoose.Promise = bluebird;

// TODO Добавить обработку ошибок подключения и автореконнект
export function connection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, (err) => {
        err ? console.error(error) : console.log('Server has been connected to MongoDB');
    });
}

export function createUser(data) {
    const user = new User({
        name: data.name,
        password: data.password,
        admin: data.admin
    });
    return user.save();
}


export function findUser(user) {
    return User.findOne(user).then(data => {
        return data;
    });
}
export function listOfUsers() {
    return User.find();
}
