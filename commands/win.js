const db = require("quick.db");

module.exports = {
  name: "win",
  run: async (message, args, client) => {
    let xpReq;
    for (let i = 1; i < args.length; i++) {
      let pal = message.guild.members.find(m => m.nickname === i.toString());
      if (!pal) return;
      xpReq = await db.fetch(`xpreq_${pal.id}`);
      if (xpReq == null) db.set(`xpreq_${pal.id}`, 2000);
    }
    let xp;
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
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
          xpReq = await db.fetch(`xpreq_${guy.id}`);
          db.add(`wins_${guy.id}`, 1);
          db.add(`winVillage_${guy.id}`, 1);
          db.add(`xp_${guy.id}`, 50);
          xp = await db.fetch(`xp_${guy.id}`);
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
          xpReq = await db.fetch(`xpreq_${guy.id}`);
          db.add(`xp_${guy.id}`, 75);
          xp = await db.fetch(`xp_${guy.id}`);
          db.add(`winCult_${guy.id}`, 1);
          db.add(`wins_${guy.id}`, 1);

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
      } else if (team == "solo") {
        let guy = message.guild.members.find(m => m.nickname === args[1]);
        if (!guy)
          return await message.reply("User not found. Please try again!");
        xpReq = await db.fetch(`xpreq_${guy.id}`);
        db.add(`xp_${guy.id}`, 100);
        xp = await db.fetch(`xp_${guy.id}`);
        db.add(`wins_${guy.id}`, 1);
        db.add(`winSolo_${guy.id}`, 1);

        if (xp > xpReq) {
          db.add(`xp_${guy.id}`, -xpReq);
          db.add(`xpreq_${guy.id}`, 1000);
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
