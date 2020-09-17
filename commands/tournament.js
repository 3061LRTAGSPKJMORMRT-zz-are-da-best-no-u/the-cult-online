const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "tournament",
  run: async (message, args, client) => {
    if (args.length == 0) {
      message.channel.send(
        new Discord.RichEmbed()
          .setTitle("Tournament Info")
          .setColor("A3406E")
          .addField(
            "First:",
            "Players register and pay 250<:5coin:692293093205999677>. "
          )
          .addField(
            "Second:",
            "Registration ends. Players are put into groups of 4 - 6."
          )
          .addField(
            "Third:",
            "Every group selects a leader. Then leaders from each group will play a game. The groups choose a new leader and this goes on until all the groups have no new leaders."
          )
          .addField(
            "Fourth:",
            "The lowest 30% from the registered player will be disqualified. The rest of the players are now put into different groups."
          )
          .addField(
            "Fifth:",
            "Players now will fight in their group. The winner of every group will be go to the finals."
          )
          .addField(
            "Sixth:",
            "The top players fight each other. There can only be one winner."
          )
          .addField("Prize:", "-Coins\n-A badge on profile\n-Discord Role")
          .addField(
            "Role List for Placements",
            "<:villager:579012137364619264> <:cultist:579011246024556546> <:fool:579029775197405204> <:headhunter:737678241942470697> <:merchant:707017469885415475> <:seer:579031275503878144> <:minion:585492428845481995> "
          )
          .addField(
            "Role List for Tournaments",
            "<:minion:585492428845481995> <:fool:579029775197405204> <:headhunter:737678241942470697> <:villager:579012137364619264> <:seer:579031275503878144> <:cultist:579011246024556546>"
          )
      );
    } else if (args.length == 1) {
      if (args[0] == "join") {
        let balance = await db.fetch(`money_${message.author.id}`);
        if (balance < 250)
          return await message.channel.send(
            "Sorry, but you need 250 coins to join the tournament!"
          );
        let participant = await db.fetch(`participant`);
        if (participant.includes(message.author.id))
          return await message.channel.send(
            "Why would you want to join the tournament when you already joined? Or do you want to waste money? "
          );
        db.subtract(`money_${message.author.id}`, 250);
        db.push(`participant`, message.author.id);
        message.channel.send('<:success:730345372295233557> You have succesfully participated in the tournament! You can\'t un-participate anymore!') 
      } else if (args[0] == "participant") {
        let participant = await db.fetch(`participant`);
        let ij = "";
        for (let i = 0; i < participant.length; i++) {
          let guy = message.guild.members.find(m => m.id == participant[i]);
          guy = guy.user.tag;
          ij += `${i + 1}. ${guy}\n`;
        }
        message.channel.send(
          new Discord.RichEmbed().setTitle("Participants").setDescription(ij)
        );
      } else {
        message.channel.send(
          "Did you mean `+tournament join` or `+tournament participant`?"
        );
      }
    }
  }
};
