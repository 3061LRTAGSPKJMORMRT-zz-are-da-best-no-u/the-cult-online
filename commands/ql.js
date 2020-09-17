const db = require('quick.db') 

module.exports = {
  name: 'ql',
  run: async (message, args, client) => {
    if (!message.channel.name == 'commands')  return 
    let playing = message.guild.roles.find(r => r.name === 'Playing')
    let discussion = message.guild.channels.find(c => c.name === 'discussion-chat')
    let guy = message.guild.members.find(m => m.nickname === args[1])
    if (!guy) return await message.channel.send(`The player with the nickname ${args[1]} doesn't exist!`) 
    if (!args[2]) return await message.channel.send('You did not set on how many players required to go on this quest!') 
    discussion.send(`${playing} Quest ${args[0]} is starting! Our leader is ${guy}! Select ${args[2]} players to go on a quest!`)
    db.set(`req`, parseInt(args[2]))
    guy.addRole('721959976503083028')
  }
} 