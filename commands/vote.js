module.exports = {
  name: 'vote' ,
  run: async (message, args, client) => {
    if (message.channel.name == 'the-cult-chat' || message.channel.name == 'priv-minion' ) {
      let vote = message.guild.channels.find(c => c.name === 'voting')
    	vote.send(`${message.member.nickname} voted ${args[0]}`)
    } 
  } 
} 