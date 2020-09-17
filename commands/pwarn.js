const db = require("quick.db");
module.exports = {
  name: "pwarn",
  run: async (message, args, client) => {
    if (
      message.member.roles.has("580836460232572938") ||
      message.member.roles.has("584049421185056799")
    ) {
      let guy =
        message.mentions.users.first() ||
        message.guild.members.find(m => m.nickname === args[0]) ||
        message.guild.members.find(m => m.user.username === args[0]) ||
        message.guild.members.find(m => m.id === args[0]);
      db.add(`gwarn_${guy.id}`, 1);
      let warnings = await db.fetch(`gwarning_${guy.id}\n`);
      let warns = await db.fetch(`gwarn_${guy.id}`);
      if (warnings == null) warnings = "";
      let reason = "";
      for (let i = 1; i < args.length; i++) {
        reason += args[i] + " ";
      }
      db.set(`gwarning_${guy.id}`, `${warnings}\`${warns}\` - ${reason}`);
      message.channel.send(`Warned \`${guy.user.tag}\` for \`${reason}\`!`);
    } else {
      message.channel.send(
        message.author.username +
          ", you need the `Game Narrator` role to use this command!"
      );
    }
  }
};
