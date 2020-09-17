const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "tchost",
  run: async (message, args, client) => {
    let joiningRole = message.guild.roles.find(role => role.name === "Joined");
    console.log(joiningRole.id);
    let joiningChannel = message.guild.channels.find(
      channel => channel.name === "joined-link"
    );
    joiningChannel.overwritePermissions(joiningRole.id, {
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    let game = await db.fetch(`game_${message.guild.id}`);
    if (!args[0]) {
      return message.channel.send("You need to say a game code!");
    } else {
      if (game !== null) {
        message.reply(
          `A game is being hosted! The ID of the game is \`${game}\``
        );
      } else {
        db.set(`game_${message.guild.id}`, args[0]);
        client.channels.get("567789735670448138").send(
          `<@&569932748890832922>`,
          new Discord.RichEmbed()
            .setColor("#609313")
            .setTitle(`A new Game!`)
            .setDescription(
              `We are starting game ${args[0]}! Our host is ${message.author}. To join, type \`+join ${
                args[0]
              }\` in <#569931913104719882> to join the game!`
            )
        );
      }
    }
  }
};
