const Discord = require("discord.js");

module.exports = {
  name: "mute",
  run: async (message, args, client) => {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return await message.channel.send(
        "Nope. Not gonna happen. Come back to me when you have the `MANAGE_ROLES` permission dummy."
      );
    let rol = message.guild.roles.find(r => r.name === "Muted");
    if (!rol)
      return await message.channel.send(
        "<:denied:730345256914255902> You need a role that is named `Muted` for this command to work! Pro users can set their muted role. Find out more by joining the support server!"
      );
    let guy =
      message.mentions.members.first() ||
      message.guild.members.find(m => m.nickname === args[0]) ||
      message.guild.members.find(m => m.id === args[0]) ||
      message.guild.members.find(m => m.user.username === args[0]);

    guy.addRole(rol.id);
    message.channel.send(
      new Discord.RichEmbed()
        .setTitle("A successful mute")
        .setDescription("You have succesfully muted a moron. Good job!")
        .addField(
          "Moderator:",
          `${message.author}\n${message.author.username}\n${message.author.id}`
        )
        .addField("User:", `${guy}\n${guy.user.username}\n${guy.id} `)
        .setColor("#537013")
        .setFooter("Hopefully this idiot learns their lesson.")
    );
  }
};
