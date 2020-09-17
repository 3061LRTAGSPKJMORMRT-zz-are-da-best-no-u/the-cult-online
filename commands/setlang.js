const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "setlang",
  run: async (message, args, client) => {
    if (!args[0])
      return await message.channel.send(
        new Discord.RichEmbed()
          .setTitle("Available Languages")
          .setDescription(
            "The Languages that are available are:\n\nEnglish - `en`\nMalay - `ms`\nChinese (Traditional) - `zt`\nChinese (Simplified) - `zs`\nTurkish - `tr`\nVietnamese - `vi`\nDutch - `nl`\nSpanish - `es`"
          )
          .setColor("#317939")
          .setTimestamp()
      );
    if (args[0] == "ms") {
      message.react("👍");
      db.set(`lang_${message.author.id}`, "ms");
    } else if (args[0] == "en") {
      message.react("👍");

      db.set(`lang_${message.author.id}`, "en");
    } else if (args[0] == "zt") {
      message.react("👍");

      db.set(`lang_${message.author.id}`, "zt");
    } else if (args[0] == "zs") {
      message.react("👍");

      db.set(`lang_${message.author.id}`, "zs");
    } else if (args[0] == "vi") {
      message.react("👍");

      db.set(`lang_${message.author.id}`, "vi");
    } else if (args[0] == "tr") {
      message.react("👍");

      db.set(`lang_${message.author.id}`, "tr");
    } else if (args[0] == "nl") {
      message.react("👍");

      db.set(`lang_${message.author.id}`, "nl");
    } else if (args[0] == "es") {
      message.react("👍");

      db.set(`lang_${message.author.id}`, "es");
    }
  }
};
