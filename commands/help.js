const Discord = require("discord.js");

module.exports = {
  name: "help",
  run: async (message, args, client) => {
    let img =
      "https://cdn.glitch.com/58008aaf-c401-4d2d-9b65-44ac0f8c66ee%2Fsketch-1592925369640.png?v=1592925393369";
    if (!args[0]) {
      message.channel.send(
        new Discord.RichEmbed()
          .setTitle("Help")
          .setDescription(
            "Help Modules. To see a module, do `+help <module>`. You can also do `+help <module> <command>` to see what commands are available!\n\n\n**__Modules__**\n\n:one: - 🔒 Moderation\n\n:two: - 💰 Economy\n\n:three: - ⚙️ Utility\n\n:four: - 🎮 Games\n\n:five: - 😃 Fun\n\n:six: - 🤑 Premium"
          )
          .setThumbnail(
            "https://cdn.discordapp.com/icons/584044607910969386/6964825d52b7258fad4fa065f7e5e67b.jpg?size=512"
          )
          .setColor("#123456")
          .setImage(img)
          .setFooter("Thanks for supporting The Cult, you rock! ♥")
      );
    } else {
      args[0].toLowerCase();
      if (args[0].includes("moderation")) {
        message.channel.send(
          new Discord.RichEmbed()
            .setTitle("Module: Moderation")
            .setDescription(
              "To see the info of a command, do `help moderation <command>`\n\n**__Commands__**\n`kick`\n`ban`\n`mute`\n`unmute`\n`unban`\n`warn`\n`clearwarnings`\n`warnings`"
            )
            .setThumbnail(
              "https://cdn.discordapp.com/icons/584044607910969386/6964825d52b7258fad4fa065f7e5e67b.jpg?size=512"
            )
            .setColor("#234567")
            .setImage(img)
            .setFooter(
              "Remember to add the prefix if you are gonna use that command 😉."
            )
        );
      } else if (args[0].includes("economy")) {
        message.channel.send(
          new Discord.RichEmbed()
            .setTitle("Module: Economy")
            .setDescription(
              "To see the info of a command, do `help economy <command>`\n\n**__Commands__**\n`daily`\n`lb`\n`leaderboard`\n`shop`\n`buy`\n`bal`\n`balance`"
            )
            .setThumbnail(
              "https://cdn.discordapp.com/icons/584044607910969386/6964825d52b7258fad4fa065f7e5e67b.jpg?size=512"
            )
            .setColor("#993188")
            .setImage(img)
            .setFooter(
              "Remember to add the prefix if you are gonna use that command 😉."
            )
        );
      } else if (args[0].includes("utilit")) {
        message.channel.send(
          new Discord.RichEmbed()
            .setTitle("Module: Utility")
            .setDescription(
              "To see the info of a command, do `help utility <command>`\n\n**__Commands__**\n`help`\n`ping`\n`setlang`\n`setprefix`\n`botinfo`\n`serverinfo`"
            )
            .setThumbnail(
              "https://cdn.discordapp.com/icons/584044607910969386/6964825d52b7258fad4fa065f7e5e67b.jpg?size=512"
            )
            .setColor("#310938")
            .setImage(img)
            .setFooter(
              "Remember to add the prefix if you are gonna use that command 😉."
            )
        );
      } else if (args[0].includes("games")) {
        message.channel.send(
          "<:denied:730345256914255902> Yeah not now. This module is under construction!"
        );
      } else if (args[0].includes("fun")) {
        message.channel.send(
          new Discord.RichEmbed()
            .setTitle("Module: Fun")
            .setDescription(
              "To see the info of a command, do `help fun <command>`\n\n**__Commands__**\n`profile`\n`flip`\n`gstart`\n`roleinfo`\n`memes`"
            )
            .setThumbnail(
              "https://cdn.discordapp.com/icons/584044607910969386/6964825d52b7258fad4fa065f7e5e67b.jpg?size=512"
            )
            .setColor("#892789")
            .setImage(img)
            .setFooter(
              "Remember to add the prefix if you are gonna use that command 😉."
            )
        );
      } else if (args[0].includes("premium") || args[0].includes("pro")) {
        message.channel.send(
          new Discord.RichEmbed()
            .setTitle("Module: Premium")
            .setDescription(
              "To see the info of a command, do `+help premium <command>`\n\n**__Commands__**\n`weekly`\n`play`\n`setpremiumserver`\n`lottery`"
            )
            .setThumbnail(
              "https://cdn.discordapp.com/icons/584044607910969386/6964825d52b7258fad4fa065f7e5e67b.jpg?size=512"
            )
            .setColor("#3800A5")
            .setImage(img)
            .setFooter(
              "Remember to add the prefix if you are gonna use that command 😉."
            )
        );
      }
    }
  }
};
