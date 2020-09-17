const Discord = require("discord.js");

module.exports = {
  name: "clean",
  aliases: ["purge", "clear", "delete"],
  run: async (message, args, client) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return await message.channel.send('<:denied:730345256914255902> No. Come back to me when you have the `MANAGE CHANNELS` permission.') 
    let clean = parseInt(args[0]) 
    if (!typeof clean == 'number' || !isFinite(clean)) return await message.channel.send('<:denied:730345256914255902> Please ensure that the number you give me is valid. I\'m not clearing because I can\'t count letters ok. ') 
    message.delete()
    message.channel.send("Deleting messages... ").then(m =>
      setTimeout(function() {
        m.delete()
     		message.channel.bulkDelete(clean)
      }, 3000)
    );
  }
};

