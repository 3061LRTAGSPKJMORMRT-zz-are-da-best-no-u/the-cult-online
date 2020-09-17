const db = require("quick.db");

module.exports = {
  name: "qs",
  run: async (message, args, client) => {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      let quest = message.guild.channels.find(c => c.name === "quest-status");
      let emote;
      if (args[1] == "approved") emote = ":tada:";
      if (args[1] == "failed") emote = "😔";
      let playing = message.guild.roles.find(r => r.name === "Playing");
      quest.send(`${playing} Quest ${args[0]} has been ${args[1]}! ${emote}`);
      db.set('af', 'no')
    }
  }
};
