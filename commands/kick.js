const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "kick",
  run: async (message, args, client) => {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return await message.channel.send(
        message.author.username +
          ", you need the `KICK MEMBERS` permission to use this!"
      );
    let c = await db.fetch(`logchannel_${message.guild.id}`);
    if (c == null) {
      c = message.channel;
    }
    let logs = await db.fetch(`logs_${message.guild.id}`);
    if (logs == null) {
      db.set(`logs_${message.guild.id}`, 0);
      logs = await db.fetch(`logs_${message.guild.id}`);
    }
    let user;
    let guy;
    if (message.mentions.users.first()) {
      guy = message.mentions.users.first();
      user = guy.username + "#" + guy.tag;
    } else {
      guy =
        message.guild.members.find(m => m.id === args[0]) ||
        message.guild.members.find(m => m.nickname === args[0]) ||
        message.guild.members.find(m => m.user.username === args[0]);
      user = guy.user.tag;
    }
    let id = guy.id;

    c.send(
      new Discord.RichEmbed()
        .setTitle("Case " + (logs + 1))
        .setDescription("A user was kicked!\n\n")
        .addField(
          "Moderator: ",
          "**Mention**" +
            message.author +
            "\n**Username+Tag**:" +
            message.author.tag +
            "\n**ID**: " +
            message.author.id
        )
        .addField(
          "User",
          "**Mention**: <@" +
            id +
            ">\n**Username+Tag**: " +
            user +
            "**ID**: " +
            id
        )
        .setColor("#348930").setTimestamp() 
    );
    guy.kick();
  }
};
