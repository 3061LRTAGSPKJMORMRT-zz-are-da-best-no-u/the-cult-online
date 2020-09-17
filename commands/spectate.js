module.exports = {
  name: 'spectate',
  run: async (message, args, client) => {
    if (message.member.roles.has('584047417653985281')) {
      message.member.removeRole('584047417653985281') 
    } 
    message.member.addRole('586566791992573954')
    message.member.setNickname(`Spectator`)
  } 
} 