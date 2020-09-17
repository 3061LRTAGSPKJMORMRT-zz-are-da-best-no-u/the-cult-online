const db = require("quick.db");

module.exports = {
  name: "fail",
  run: async (message, args, client) => {
    if (message.channel.name.includes("priv")) {
      let c = message.channel.name;
      if (
        c == "priv-cultist" ||
        c == "priv-minion" ||
        c == "priv-noob-cultist" ||
        c == "priv-cult-leader" ||
        c == "priv-cult-shaman" ||
        c == "priv-grumpy-grandma" || 
        c == "priv-cult-hypnotizer" ||
        c == "priv-cult-zombie"
      ) {
        let af = await db.fetch("af");
        if (af == "no")
          return await message.channel.send(
            "There are no quests going on right now. What's the use?"
          );

        let commands = message.guild.channels.find(c => c.name === "commands");
        commands.send(`${message.member.nickname} decided to fail this quest!`);
        message.react("👍");
      } else {
        message.channel.send(
          "Because you belong to the village team, you must always choose success."
        );
      }
    }
  }
};
