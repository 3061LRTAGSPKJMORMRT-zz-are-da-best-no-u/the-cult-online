const Discord = require("discord.js"),
  db = require("quick.db"),
  fs = require("fs");

let available = true;
module.exports = {
  name: "joingame",
  description: "Ping!",
  run: async (message, args, client) => {
    let user = message.author
    let playing = message.guild.roles.get("584047417653985281")
    let players = playing.members.size + 1
   if (available === true) {
     if (playing.members.size > 20 && args[0] != "started" && args[0] != "ended")
       return await message.reply("The game is full! You can spectate though!")
     if (playing.members.size <= 20 && args[0] != "started" && args[0] != "ended") {
       message.member.addRole('584047417653985281')
       client.channels.get("584047758764146693").send(`${user} has joined the game!`)
       message.member.setNickname(players)
     }
   } else {
     message.reply("The game has started! You can spectate though!")
   }
    if (args[0] === "started" && message.member.hasPermission("KICK_MEMBERS")) {
      available = false
      message.react("👍")
    } else if (args[0] === 'ended' && message.member.hasPermission("KICK_MEMBERS")) {
      available = true
      message.react("👍")
    }
  }
};
