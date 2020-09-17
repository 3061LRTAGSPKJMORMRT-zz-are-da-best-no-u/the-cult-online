const db = require("quick.db");

module.exports = {
  name: "lose",
  run: async (message, args, client) => {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      let xpReq;
      for (let i = 1; i < args.length; i++) {
        let pal = message.guild.members.find(m => m.nickname === i.toString());
        if (!pal) return;
        xpReq = await db.fetch(`xpreq_${pal.id}`);
        if (xpReq == null) db.set(`xpReq_${pal.id}`, 2000);
      }
      let xp;
      let team = args[0].toLowerCase();
      if (team == "village") {
        console.log(args.length);
        for (let x = 1; x < args.length; x++) {
          let guy = message.guild.members.find(m => m.nickname === args[x]);
          if (!guy)
            return await message.reply("User not found. Please try again!");
        }
        for (let x = 1; x < args.length; x++) {
          let guy = message.guild.members.find(m => m.nickname === args[x]);
          db.add(`xp_${guy.id}`, 15);
          xp = await db.fetch(`xp_${guy.id}`);
          db.add(`loses_${guy.id}`, 1);
          db.add(`loseVillage_${guy.id}`, 1);

          if (xp > xpReq) {
            db.add(`xp_${guy.id}`, -xpReq);
            db.add(`xpreq_${guy.id}`, 1000);
            db.add(`level_${guy.id}`, 1);
            message.channel.send(
              `Congrats ${guy}! You just leveled up! As a gift, gold have been awarded!`
            );
            db.add(`money_${guy.id}`, Math.floor(Math.random() * 45) + 5);
          }
        }
        message.channel.send("Done");
      } else if (team == "cultist") {
        for (let x = 1; x < args.length; x++) {
          let guy = message.guild.members.find(m => m.nickname === args[x]);
          if (!guy)
            return await message.reply("User not found. Please try again!");
        }
        for (let x = 1; x < args.length; x++) {
          let guy = message.guild.members.find(m => m.nickname === args[x]);
          db.add(`xp_${guy.id}`, 17);
          xp = await db.fetch(`xp_${guy.id}`);
          db.add(`loses_${guy.id}`, 1);
          db.add(`loseCult_${guy.id}`, 1);

          if (xp > xpReq) {
            db.add(`xpreq_${guy.id}`, 1000);
            db.add(`xp_${guy.id}`, -xpReq);
            db.add(`level_${guy.id}`, 1);
            message.channel.send(
              `Congrats ${guy}! You just leveled up! As a gift, gold have been awarded!`
            );
            db.add(`money_${guy.id}`, Math.floor(Math.random() * 45) + 5);
          }
        }
        message.channel.send("Done");
      } else if (team == "solo") {
        let guy = message.guild.members.find(m => m.nickname === args[1]);
        if (!guy)
          return await message.reply("User not found. Please try again!");
        db.add(`xp_${guy.id}`, 20);
        xp = await db.fetch(`xp_${guy.id}`);
        db.add(`loses_${guy.id}`, 1);
        db.add(`loseSolo_${guy.id}`, 1);

        if (xp > xpReq) {
          db.add(`xpreq_${guy.id}`, 1000);
          db.add(`xp_${guy.id}`, -xpReq);
          db.add(`level_${guy.id}`, 1);
          message.channel.send(
            `Congrats ${guy}! You just leveled up! As a gift, gold have been awarded!`
          );
          db.add(`money_${guy.id}`, Math.floor(Math.random() * 45) + 5);
        }
        message.channel.send("Done");
      } else {
        message.reply("Team not found. Please try again!");
      }
    }
  }
};
