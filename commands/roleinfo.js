const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "roleinfo",
  run: async (message, args, client) => {
    let content = "";
    for (let i = 0; i < args.length; i++) {
      if (parseInt(args.length - 1) == i) {
        content += args[i];
      } else {
        content += args[i] + " ";
      }
    }
    let name = await db.fetch(`name_${content}`) 
    let info = await db.fetch(`roleInfo_${content}`);
    let thumbnail = await db.fetch(`thumbnail_${content}`) 
    if (info === null || content == "")
      return await message.channel.send("No role found!");
		message.delete() 
    message.channel.send(
      new Discord.RichEmbed()
        .setTitle(content)
        .setDescription(info)
        .setThumbnail(thumbnail)
    );
    //const db = require('quick.db')
    //const Discord = require ('.js')
  }
};
