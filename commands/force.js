const db = require("quick.db") 

module.exports = {
  name: "force",
  run: async (message, args, client) => {
    if (message.channel.name == "priv-idiot") {
      let did = db.get(`did_${message.channel.id}`)
      if (did != null) return await message.channel.send("You already used your ability!")
      let guy = message.guild.members.find(m => m.nickname === args[0]) || message.guild.members.find(m => m.user.username === args[0]) || message.guild.members.find(m => m.id === args[0])
      let ownself = message.guild.members.find(m => m.nickname === message.member.nickname)
      if (!ownself.roles.has("584047417653985281") || !guy.roles.has("584047417653985281") || guy == ownself || !guy) return await message.channel.send("Target could not be found!")
      if (db.get(`role_${guy.id}`) == "Seer" || db.get(`role_${guy.id}`) == "Prince" || db.get(`role_${guy.id}`) == "Grumpy Grandma" || db.get(`role_${guy.id}`) == "Cult Leader"|| db.get(`role_${guy.id}`) == "Headhunter" || db.get(`role_${guy.id}`) == "Fool") {
        message.channel.send("Sadly, your target was one of Seer, Prince, Grumpy Grandma, Cult Leader, Fool, Headhunter")
      } else {
        db.set(`idiotized_{message.channel.id}`, guy.nickname)
        message.react("👍")
      }
      
      db.set(`did_${message.channel.id}`, null)
      
    }
  }
}