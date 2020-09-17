const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
  name: "gstart",
  run: async (message, args, client) => {
    let c = message.mentions.channels.first() || message.channel;
    let role = await db.fetch(`gwarole_${message.guild.id}`);
    if (role == null) role =  "" 
      
    role = message.guild.roles.find(r => r.id === role)
    client.giveawaysManager.start(c, {
      time: ms(args[0]),
      prize: args.slice(2).join(" "),
      winnerCount: parseInt(args[1]),
      messages: {
        giveaway: role + "\n\n🎉🎉 **GIVEAWAY** 🎉🎉",
        giveawayEnded: role + "\n\n🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time remaining: **{duration}**!",
        inviteToParticipate: "React with <:cultist:579011246024556546> to participate!",
        winMessage: "Congratulations, {winners}! You won **{prize}**!",
        embedFooter: "Giveaways",
        noWinner:
          "<:not_available:689083576498913283> I could not decide a winner to choose!",
        hostedBy: "Hosted by: {user}",
        winners: "winner(s)",
        endedAt: "Ended at",
        units: {
          seconds: "seconds",
          minutes: "minutes",
          hours: "hours",
          days: "days"
        }
      }
    });
  }
};
