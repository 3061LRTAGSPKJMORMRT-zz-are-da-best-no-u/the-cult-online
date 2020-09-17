const db = require("quick.db");
const d = require("discord.js");

module.exports = {
  name: "pwarnings",
  run: async (message, args, client) => {
    if (message.member.roles.has("580836460232572938") || message.member.roles.has('584049421185056799')) {
      let guy =
        message.mentions.users.first() ||
        message.guild.members.find(m => m.nickname === args[0]) ||
        message.guild.members.find(m => m.user.username === args[0]) ||
        message.guild.members.find(m => m.id === args[0]);
      let warnings = await db.fetch(`gwarning_${guy.id}`);
      message.channel.send(
        new d.RichEmbed()
          .setTitle(`${guy.user.username}'s Game Warnings!`)
          .setDescription(warnings)
          .setColor("#991001")
      );
    } else {
      message.channel.send(
        message.author.username +
          ", you need the `Game Narrator` role to use this command!"
      );
    }
  }
};
