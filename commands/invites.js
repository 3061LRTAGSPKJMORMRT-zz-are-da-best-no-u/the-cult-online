const Discord = require('discord.js') 

module.exports = {
  name: "invites",
  run: async (message, args, client) => {
    let user = message.mentions.users.first() || message.author
    let img = user.displayAvatarURL
    message.guild
      .fetchInvites()
      .then(invites => {
        const userInvites = invites
          .array()
          .filter(o => o.inviter.id === user.id);
        var userInviteCount = 0;
        for (var i = 0; i < userInvites.length; i++) {
          var invite = userInvites[i];
          userInviteCount += invite["uses"];
        }
        message.channel.send(
          new Discord.RichEmbed()
          .setTitle(user.username + '\'s invites!')
          .setThumbnail(img) 
          .setColor('#5358AF')
          .setDescription(`${user.tag} has a total of **__${userInviteCount} invite(s)__**. Try inviting more people!`)
          .setFooter('')
        );
      })
      .catch(console.error);
  } /*else if (args) {
      let user = args[0]
      message.guild.fetchInvites()
 .then(invites => message.channel.send(invites.find(invite => invite.inviter.id === user)))
 .catch(message.channel.send(console.error));
    } */
};
