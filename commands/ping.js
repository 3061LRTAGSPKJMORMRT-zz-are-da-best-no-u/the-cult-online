const Discord = require("discord.js");
const db = require('quick.db') 

module.exports = {
  name: "ping",
  run: async (message, args, client) => {
    let lang = await db.fetch(`lang_${message.author.id}`) 
    if (lang == null) db.set(`lang_${message.author.id}`, `en`)
    lang = await db.fetch(`lang_${message.author.id}`) 
    let pinging = await db.fetch(`${lang}.ping_before_edit`) 
    let guy = message.author.id;
    let latency = client.ping;
    let pong = Math.round(latency * 10) / 10;
    message.channel
      .send(pinging)
      .then(msg => {
        setTimeout(function() {
          msg.edit("Pong! **`" + pong + " ms`**");
        }, 1000);
      });
  }
};
// test
//.then(msg => {setTimeout(function() {msg.edit('Database has successfully reset. Happy hunting 🐺')}, 10000)}