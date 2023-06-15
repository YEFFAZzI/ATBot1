require("dotenv").config();
const User = require('./bot/model/user.model')
const mongoose = require('mongoose');
const db = require('./bot/connection/db.connection')

const Cat = mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'Cat' })
kitty.save().then(() => console.log('мяу'))

const newUser = new User({id: 123})
newUser.save().then(() => console.log('user'))
