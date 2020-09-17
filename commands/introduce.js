const Discord = require('discord.js'),
      db = require('quick.db'),
      fs = require('fs');

module.exports = {
  name: 'introduce',
  run: async(message, args, client) => {
    message.channel.send(
    	new Discord.RichEmbed()
      	.setColor("00CC00")
      	.setTitle("Welcome to The Cult Simulation in Discord!")
      	.setDescription("Hey there! Nice to meet you. Anyways, I'm the bot that will be handling the games. Although I can do it without narrators, I still want the good ol\' humans. Anyways, to start, follow the commands below!\n\n`+joingame` - You can join a game! If there are 20 players or the game has started, this command will be disabled!\n`+spectate` - You can spectate the game if you want to see how it works!\n`+narrate` - Just don't try this command, it's only for narrators!")	
    )
  }
}