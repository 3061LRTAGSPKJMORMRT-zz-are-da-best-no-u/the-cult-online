const db = require("quick.db");

module.exports = {
  name: "setprefix",
  run: async (message, args, client) => {
    if (message.channel.type == 'dm') return await message.channel.send('<:denied:730345256914255902> Yeah no. You can\'t set your prefixes in dms dumb.') 
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return await message.channel.send(
        "<:denied:730345256914255902> It looks like you don't have the `MANAGE SERVER` Permissions. Come back to me once you have it ok."
      );
    if (!args[0]) return await message.channel.send('<:denied:730345256914255902> I may be a bot but I\'m not that dumb. You need to give an argument to set the prefix duh.') 
    db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send('<:success:730345372295233557> You have successfully changed the bot\'s prefix! It\'s new prefix is now `' + args[0] + '`!')
  }
};
