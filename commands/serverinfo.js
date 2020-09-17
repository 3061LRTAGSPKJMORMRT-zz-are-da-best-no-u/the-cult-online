const Discord = require("discord.js")

module.exports = {
  name: 'serverinfo',
  run: async (message, args, client) => {
    if (message.channel.type == "dm") return message.channel.send("<:denied:730345256914255902> This command is only available in servers!")
    let owner = message.guild.members.find(m => m.id === message.guild.ownerID) 
    message.channel.send(
      new Discord.RichEmbed()
      .setTitle(message.guild.name)
      .setColor("#869101")
      .setThumbnail(message.guild.iconURL)
      .addField("Owner", owner.user.tag, true)
      .addField("Guild ID", message.guild.id, true)
      .addField("Created At", message.guild.createdAt, true)
      .addField("Region", message.guild.region, true)
      .addField("Verification Level", message.guild.verificationLevel, true)
      .addField("Total Members", message.guild.memberCount + " members", true)
      .addField("Total Roles", message.guild.roles.size + " roles", true)
      .addField("Total Channels", message.guild.channels.size + " channels", true)
      .addField("Total Emotes", message.guild.emojis.size + " emojis", true)
      
    )
  }
}