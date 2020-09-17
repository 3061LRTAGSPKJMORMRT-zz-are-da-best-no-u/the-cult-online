const db = require("quick.db");
const Discord = require("discord.js");
const shuffle = require("shuffle-array");
let authors = [];
module.exports = {
  name: "newstart",
  aliases: ["ns"], //ye xD
  run: async (message, args, client) => {
    let allPlayers = await db.fetch("playerNumb");
    if (allPlayers < 4)
      return message.author.send(
        "You can't vote to start yet! You at least 4 players!"
      );
    let voted = await db.fetch(`voted_${message.author.id}`);
    let votes = await db.fetch(`votes`);
    if (voted == true) {
      return message.author.send(
        "You can't press start more than you already do."
      );
    }

    for (let i = 1; i <= allPlayers; i++) {
      let player = await db.fetch(`player_${i}`);
      let guy = client.users.get(player);
      guy.send(
        message.author.username +
          " voted to start! " +
          (votes + 1).toString() +
          "/" +
          allPlayers
      );
    }
    let roleemoji = ''
    for (let ro = 0;ro<allPlayers;ro++) {
      let guy = client.users.get(db.get(`player_${ro+1}`))
      let role = db.get(`role_${guy.id}`)
      let emo = role.toLowerCase()
      let emoj = emo.replace(" ", "_")
      let emoji = client.emojis.find(e => e.name === emoj)
      roleemoji += `${emoji} ${ro+1}. ${guy.tag}`
    }
    /* if (!authors.includes(message.author.id)) {
      authors.push(message.author.id);
      db.add(`votes`, 1);
      db.set(`voted_${message.author.id}`, true);
    }*/
    db.set(`voted_${message.author.id}`, true);
    db.add(`votes`, 1);

    if (votes + 1 == allPlayers) {
      db.set("started", true)
      let role = [
        "Villager",
        "Cultist",
        "Seer",
        "Cursed Villager",
        "Seer Apprentice",
        "Cult Shaman",
        "Aura Seer",
        "Fool"
      ];
      let roles = [];
      for (let i = 0; i < allPlayers; i++) {
        roles.push(role[i]);
      }
      shuffle(roles);
      for (let i = 1; i <= allPlayers; i++) {
        let player = await db.fetch(`player_${i}`);
        let guy = client.users.get(player);
        db.set(`role_${player}`, roles[i - 1]);
        guy.send(
          new Discord.RichEmbed()
            .setTitle("Player Number")
            .setDescription(`You are player number #${i}`)
            .setColor("#008800")
        );
        let name = await db.fetch(`name_${roles[i - 1]}`);
        let info = await db.fetch(`roleInfo_${roles[i - 1]}`);
        let thumbnail = await db.fetch(`thumbnail_${roles[i - 1]}`);
        guy.send(
          new Discord.RichEmbed()
            .setTitle(name)
            .setDescription(info)
            .setThumbnail(thumbnail)
            .setColor("#008800")
        );
      }
      db.set("discussion", false);
      let newQuest = true;
      setTimeout(function() {
        for (let t = 1; t <= allPlayers; t++) {
          let player = db.get(`player_${t}`);
          let guy = client.users.get(player);
          guy.send(
            new Discord.RichEmbed()
              .setTitle("Discussion")
              .setDescription("Players! Discussion has started!")
          );
        }
        db.set("discussion", true);
      }, 30000);

      setTimeout(function() {
        let s = 1;
        let questsFailed = db.get(`questsFailed`);
        let questsApproved = db.get(`questsApproved`);
        let questsSkipped = db.get(`questsSkipped`)
        if (!questsFailed) {
          db.set(`questsFailed`, 0)
          questsFailed = 0
        }
        if (!questsApproved) {
          db.set(`questsApproved`, 0)
          questsApproved = 0
        }
        if (!questsSkipped) {
          db.set(`questsSkipped`, 0)
          questsSkipped = 0
        }
        let game = setInterval(function() {
          let player = db.get(`player_${s}`);
          let guy = client.users.get(player);
          if (questsFailed == 3 || questsSkipped == 5) {
            for (let moron = 1; moron <= allPlayers; moron++) {
              let toSend = client.users.get(db.get(`player_${moron}`));
              toSend.send(
                new Discord.RichEmbed()
                  .setTitle("Game Over - Cultists won")
                  .setThumbnail(
                    "https://cdn.discordapp.com/emojis/584411510038724617.png"
                  )
                .setDescription(db.get("players"))
              );
              db.set(`joined_${toSend.id}`, null);
              db.set(`voted_${toSend.id}`, false);
              db.set(`player_${toSend.id}`, null);
              let ap = db.get("playerNumb");
              db.set("players", null);
              db.set("playerNumb", 0);
              clearInterval(game)
            }
          } else if (questsApproved == 3) {
            if (roles.includes("Seer")) {
              
            } else {
              for (let moron = 1; moron <= allPlayers; moron++) {
              let toSend = client.users.get(db.get(`player_${moron}`));
              toSend.send(
                new Discord.RichEmbed()
                  .setTitle("Game Over - Villager won")
                  .setThumbnail(
                    "https://cdn.discordapp.com/emojis/584414524426158080.png"
                  )
                .setDescription(db.get("players"))
              );
              db.set(`joined_${toSend.id}`, null);
              db.set(`voted_${toSend.id}`, false);
              db.set(`player_${toSend.id}`, null);
              let ap = db.get("playerNumb");
              db.set("players", null);
              db.set("playerNumb", 0);
              clearInterval(game)
            }
              
            }
          } else {
            let questLeader = client.users.get(db.get(`player_${s}`))
            for (let moron = 1; moron <= allPlayers; moron++) {
              let toSend = client.users.get(db.get(`player_${moron}`))
              toSend.send(new Discord.RichEmbed().setTitle(`Quest ${s}`))
            }
          }
        }, 30000);
      }, 30000);
    }
  }
};
