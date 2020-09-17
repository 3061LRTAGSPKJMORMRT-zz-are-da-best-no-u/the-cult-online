const db = require("quick.db")

module.exports = {
  name: "bite",
  run: async (message, args, client) => {
    if (message.channel.name == "priv-cult-zombie") {
      let did = db.get(`did_${message.channel.id}`)
      if (did != null) return await message.channel.send("You already used your ability")
      let guy = message.guild.members.find(m => m.nickname === args[0]) || message.guild.members.find(m => m.user.username === args[0]) || message.guild.members.find(m => m.id === args[0])
      let ownself = message.guild.members.find(m => m.nickname === message.member.nickname)
      
    }
  }
}