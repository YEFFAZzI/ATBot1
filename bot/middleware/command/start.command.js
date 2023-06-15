
const bot = require("../../connection/token.connection");
const db = require("../../connection/db.connection");
const User = require('../../model/user.model')



module.exports = bot.start(async (ctx) => {

   const from = ctx.update.message.from

   try {
      const newUser = new User({username : JSON.stringify(from, null,2)})
      newUser.save().then(() => console.log('user создан'))

      return ctx.replyWithHTML(`Hi, <b>${JSON.stringify(ctx.update,null,2)}</b>!`);
   } catch (e) {
      console.log(e);
   }
});