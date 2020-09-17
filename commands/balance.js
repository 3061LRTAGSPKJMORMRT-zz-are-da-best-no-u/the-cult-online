const Discord = require("discord.js");

const db = require("quick.db");
module.exports = {
  name: "balance",
  aliases: ["bal"],
  run: async (message, args, client) => {
    let lang = await db.fetch(`lang_${message.author.id}`);
    console.log(lang);
    if (lang === null) db.set(`lang_${message.author.id}`, `en`)
    lang = await db.fetch(`lang_${message.author.id}`) 
    console.log(lang);
    let footerMessage;
    let user = message.mentions.users.first() || message.author;
    let balance = await db.fetch(`money_${user.id}`);

    if (balance === null || balance === undefined) balance = 0;

    if (balance < 1000) {
      footerMessage = await db.fetch(`${lang}.balance_footer_poor`);
    } else {
      footerMessage = await db.fetch(`${lang}.balance_footer_rich`);
    }
    let title = await db.fetch(`${lang}.balance_title`);
    let description = await db.fetch(`${lang}.balance_description`);
    message.channel.send(
      new Discord.RichEmbed()
        .setTitle(user.username + title)
        .setDescription(
          user + description + balance + " <:10coins:692293179168522330>!"
        )
        .setFooter(footerMessage)
    );
  }
};
