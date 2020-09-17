const fetch = require("node-fetch")
const db = require("discord.js")
const botlister = require("botlister")

module.exports = {
  name: "bvote",
  run: async (message, args, client) => {
    let vote = new botlister(
      { 
        apiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6IjU0NDEyMzY1MjM1MDgwMzk2OSIsImlhdCI6MTU5OTg5MTQ1Mn0.sQ6C-vVDjbpvJ4Zb-9LkkBTTB4E6YNeUOhZLWNyJnO8', 
        defaultBotId: '544123652350803969' })
    vote = await botlister.getUpvoters()
    let voted = message.guild.members.find(m => m.id === message.author.id)
    if (!vote.includes(voted)) {
      message.channel.send("You haven't voted yet!")
    } else {
      if (db.get(`upvotes`).includes(message.author.id)) {
        return message.channel.send("You already claimed your coins!")
      } 
      message.channel.send("Done! Here are your coins!")
      db.add(`money_${message.author.id}`, 5)
      if (!db.get(`upvotes`)) {
        db.set(`upvotes`, [message.author.id])
      } else {
        db.push(`upvotes`, message.author.id)
      }
    }
  }
}