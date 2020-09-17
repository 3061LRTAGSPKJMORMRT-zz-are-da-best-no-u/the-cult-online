const Discord = require("discord.js")

module.exports = {
  name: 'botinfo',
  run: async (message, args, client) => {
    let ashish = client.users.get('552814709963751425').tag
    let night = client.users.get('325281667998810124').tag
    let aquamarine = client.users.get('620964363729371137').tag
    let m = `${ashish}\n${night}\n${aquamarine}`
    message.channel.send(
      new Discord.RichEmbed()
      .setTitle("The Cult Narrator Bot")
      .setThumbnail("https://cdn.discordapp.com/icons/565880459788025876/069af092ebbb51ced8a9f28686869bc4.jpg?size=512")
      .setColor("#762893")
      .addField("Developers", m)
      .addField("Created At", "Thu Apr 11 2019 15:23:09 GMT+0000 (Coordinated Universal Time)")
      .addField("Invite URL", "[Invite me](https://discordapp.com/oauth2/authorize?client_id=578945590210068490&scope=bot&permissions=2146958847)")
      .addField("Support Server", "[Support Server](https://discord.gg/XzgTK2m)")
      .addField("Go Pro", "[Subsribe Here](https://www.patreon.com/cultonline?fan_landing=true)")
    )
  }
}