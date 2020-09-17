const db = require("quick.db");

module.exports = {
  name: "select",
  run: async (message, args, client) => {
    let playing = message.guild.roles.find(r => r.name === "Playing");
    let vote = message.guild.channels.find(c => c.name === "voting");
    let leader = message.guild.roles.find(r => r.name === "Quest Leader");
    if (!message.member.roles.has(leader.id))
      return await message.channel.send(
        `${message.author.username}, You are not the leader for this round!`
      );
    let arg = "";
    for (let i = 0; i < args.length; i++) {
      let req = await db.fetch(`req`);
      if (args.length != req)
        return await message.channel.send(
          `${message.author.username}, you need to select ${req} players to go on a quest!`
        );
      arg += args[i];
      if (i == args.length - 2) {
        arg += " & ";
      } else {
        if (i < args.length - 2) {
          arg += ", ";
        }
      }
    }
    let m = await vote.send(
      `${playing} ${message.author} decided to send	${arg} to go on a quest! Do you agree?`
    );
    await m.react("👍");
    await m.react("👎");
    db.set("af", "yes");
    message.member.removeRole(leader.id) 
  }
};
