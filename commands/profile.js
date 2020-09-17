const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "profile",
  run: async (message, args, client) => {
    let user;
    let title;
    let guy;
    if (!args[0]) {
      guy = message.guild.members.find(m => m.id === message.author.id);
      title = `${guy.user.username}`;
    } else if (!!message.mentions.users.first()) {
      guy = message.mentions.users.first();
      title = `${guy.username}`;
    } else {
      guy = message.guild.members.find(m => m.nickname === args[0]);
      if (!guy) {
        guy = message.guild.members.find(m => m.user.username === args[0]);
        if (!guy) {
          guy = message.guild.members.find(m => m.id === args[0]);
        }
        if (!guy) {
          guy = message.guild.members.find(m => m.id === message.author.id);
        }
      }
      title = `${guy.user.username}`;
    }
    let badges = await db.fetch(`badges_${guy.id}`);
    let bs = "";
    let xp = await db.fetch(`xp_${guy.id}`);
    let wins = await db.fetch(`wins_${guy.id}`);
    let loses = await db.fetch(`loses_${guy.id}`);
    let gold = await db.fetch(`money_${guy.id}`);
    let gamesPlayed = await db.fetch(`gamesPlayed_${guy.id}`);
    let ign = await db.fetch(`ign_${guy.id}`);
    let level = await db.fetch(`level_${guy.id}`);
    let winVillage = await db.fetch(`winVillage_${guy.id}`);
    let winCult = await db.fetch(`winCult_${guy.id}`);
    let winSolo = await db.fetch(`winSolo_${guy.id}`);
    let loseVillage = await db.fetch(`loseVillage_${guy.id}`);
    let loseCult = await db.fetch(`loseCult_${guy.id}`);
    let loseSolo = await db.fetch(`loseSolo_${guy.id}`);
    let skillPoints = await db.fetch(`skillPoints`);
    let xpReq = await db.fetch(`xpreq_${guy.id}`);
    if (xpReq == 0) xpReq = 2000;
    if (xp == null) xp = 0;
    if (level == null) level = 0;
    if (wins == null) wins = 0;
    if (loses == null) loses = 0;
    if (gold == null) gold = 0;
    if (gamesPlayed == null) gamesPlayed = 0;
    if (ign == null) ign = "Not Set";
    if (badges != null) {
      bs = "**__Badges__**\n";
      for (let i = 0; i < badges.length; i++) {
        bs += "-" + badges[i] + "\n";
      }
    }

    message.channel.send(
      new Discord.RichEmbed()
        .setTitle(`${title}'s Profile`)
        .setDescription(
          `**__Personal__**\n**In Game Name:** ${ign}\n**Personal Message:** Not Set\n**XP:** ${xp} / ${xpReq} \n**Level:** ${level}\n\n\n**__Stats__**\n\n**Wins:** ${wins}\n**Loses:** ${loses}\n\n**Wins as\n-Village:** ${winVillage}\n-**Cultist:** ${winCult}\n-**Solo:** ${winSolo}\n\n**Lost as\n-Village:** ${loseVillage}\n-**Cultist:** ${loseCult}\n**-Solo:** ${loseSolo}\n\n${bs}`
        )
        .setColor("#340659")
    );
  }
};
