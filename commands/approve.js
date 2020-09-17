const db = require('quick.db')

module.exports = {
  name: "approve",
  run: async (message, args, client) => {
    if (message.channel.name.includes("priv")) {
      let c = message.channel;
      if (c.name == "priv-noob-cultist" || c.name == "priv-grumpy-grandma") {
        let role = await db.fetch(`role_${message.author.id}`);
        return c.send(`${message.author.username}, because you are the ${role}, you must always fail this quest.`);
      }
      let af = await db.fetch('af') 
      if (af != 'yes') return await message.channel.send('There are no quests going on right now. What\'s the use?') 
      let commands = message.guild.channels.find(c => c.name === "commands");
      let hypno = message.guild.channels.filter(c => c.name === "priv-cult-hypnotizer")
      let hypnot = hypno.keyArray("id")
      let hypnotize
      for (let a = 0; a < hypnot.length ; a++) {
        let hynoti = db.get(`hypnotize_${hypnot[a]}`)
        if (hynoti == message.member.nickname) {
          hypnotize = true
          db.set(`hypnotize_${hypnot[a]}`, null)
        }
      }
      if (hypnotize == true) {
        commands.send(`${message.member.nickname} tried approving the quest but was hypnotized!`)
      }
      commands.send(`${message.member.nickname} approved the quest!`);
      message.react("👍");
    }
  }
};
