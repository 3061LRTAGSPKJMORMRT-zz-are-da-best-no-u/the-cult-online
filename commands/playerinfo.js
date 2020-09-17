const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "playerinfo",
  run: async (message, args, client) => {
    if (message.member.hasPermission("KICK_MEMBERS")) {        
      let content = '' 
      let playing = message.guild.roles.find(r => r.name === 'Playing') 
      for (let i = 1;i <= playing.members.size;i++) {
        let guy = message.guild.members.find(m => m.nickname === i.toString())
        let role = await db.fetch(`role_${guy.id}`) 
        let emo = role.toLowerCase()
        let newEmoji = emo.replace(" ", "_")
        let foundEmoji = message.guild.emojis.find(e => e.name === newEmoji)
        if (foundEmoji == null) foundEmoji = "" 
        content += foundEmoji + ' ' + i + '. ' + guy.user.tag + '\n' 
      } 
      message.channel.send(content)
    }
  }
};
