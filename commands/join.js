const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "join",
  run: async (message, args, client) => {
    let joiningChannel = client.channels.get("569932214805200908");
    let joiningRole = message.guild.roles.find(role => role.name === 'Joined')
    let code = await db.fetch(`game_${message.guild.id}`);
    if (message.guild.id != "565880459788025876") {
      return;
    } else {
      if (args[0] != code) {
        return await message.channel.send(
          `That's not the gamecode! Type \`+join ${code}\` to continue!`
        );
      } else {
          message.member.addRole(joiningRole.id) 
      }
    }
  }
};
