const db = require("quick.db")

module.exports = {
  name: "hypnotize",
  run: async (message, args, client) => {
    if (message.channel.name == "priv-cult-hypnotizer") {
      let did = await db.fetch(`did_${message.guild.id}`)
      if (did != null) return await message.channel.send("You already used your ability!")
      let guy = message.guild.members.find(m => m.nickname === args[0]) || message.guild.members.find(m => m.id === args[0]) || message.guild.members.find(m => m.user.username === args[0])
      let ownself = message.guild.members.find(m => m.nickname === message.member.nickname)
      if (!guy || guy == ownself || !guy.roles.has("584047417653985281")) return await message.channel.send("Invalid Target!")
      if (db.get(`role_${guy.id}`) == "Seer" || db.get(`role_${guy.id}`) == "Prince" || db.get(`role_${guy.id}`) == "Grumpy Grandma" || db.get(`role_${guy.id}`) == "Headhunter" || db.get(`role_${guy.id}`) == "Fool") {
        message.channel.send("Sadly, your target was one of Seer, Prince, Grumpy Grandma, Fool, Headhunter")
        message.guild.channels.get("584374656677445642").send("The Cult Hypnotizer<:cult_hypnotizer:737654910413176903> decided to hypnotize **" + guy.nickname + " " + guy.user.username + "** but failed. They were one of Seer, Prince, Grumpy Grandma, Fool, Headhunter")
      } else {
        db.set(`hypnotized_${message.channel.id}`, guy.nickname)
        message.react("👍")
      }
      db.set(`did_${message.channel.id}`, "1")
    }
  }
}