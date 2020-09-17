const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "shop",
  run: async (message, args, client) => {
    return message.channel.send('<:denied:730345256914255902> The shop is closed for a rework!')
    let lang = await db.fetch(`lang_${message.author.id}`) 
    if (lang == null) db.set(`lang_${message.author.id}`)
    lang = await db.fetch(`lang_${message.author.id}`) 
    let title = await db.fetch(`${lang}.shop_title`) 
    let desc = await db.fetch(`${lang}.shop_desc`)
    let balance = await db.fetch(`money_${message.author.id}`);
    message.channel.send(
      new Discord.RichEmbed()
        .setTitle(`${title}`)
        .setColor(`#008800`)
        .setDescription(`${desc}${balance}<:10coins:692293179168522330>`)
        .setFooter(`Page 1/1`)
    );
  }
};
