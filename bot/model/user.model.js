const { Schema, model} = require('mongoose');


const userSchema = new Schema({
    id : Number,                //Униĸальный идентифиĸатор пользователя или бота
    first_name : String,
    last_name : String,
    username : String

});


module.exports = model('User', userSchema);