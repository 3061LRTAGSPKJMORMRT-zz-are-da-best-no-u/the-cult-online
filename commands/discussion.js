module.exports = {
  name: 'discussion', 
  run: async (message, args, client) => {
    let discussion = message.guild.channels.find(channel => channel.name === 'discussion-chat') 
    let playing = message.guild.roles.find(role => role.name === 'Playing')
    discussion.send(
    	`<@&${playing.id}> Discussion has started!`
    )
    discussion.overwritePermissions(playing.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    })
} 
} 