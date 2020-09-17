
  const Discord = require("discord.js");

  const db = require("quick.db");
  module.exports = {
    name: "am",
    run: async (message, args, client) => {
      if (!message.member.hasPermission("MANAGE_CHANNELS"))
        return await message.reply(
          "You need the `MANAGE CHANNELS` permission to run this command!"
        );

      if (!args[1]) return message.reply("Type a number!");
      if (isNaN(args[1])) return message.reply("Failed to ParseInt3!");
      let user = message.guild.members.find(m => m.nickname === args[0]);

      let balance = await db.fetch(`money_${user.id}`);
      let amount = parseInt(args[1]);
      message.channel.send("Done");
      db.add(`money_${user.id}`, amount);
    }
  };
