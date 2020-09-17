const memes = require("discord-meme-generator");
const Discord = require("discord.js");
module.exports = {
  name: "memes",
  aliases: ["meme"],
  run: async (message, args, client) => {
    memes
      .generate(client, message)
      .then(console.log("Meme Generated"))
      .catch(e => {
        message.channel.send("An error occurred.");
      });
  }
};
