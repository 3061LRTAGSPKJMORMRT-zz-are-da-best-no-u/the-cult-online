const db = require("quick.db");
const Discord = require("discord.js");
const shuffle = require("shuffle-array");

module.exports = {
  name: "newjoingame",
  aliases : ["njg"],
  run: async (message, args, client) => {
    if (db.get("started") == true) return await message.channel.send("The game has started! Please try again later")
    let currentUser = message.author.username;
    let players = await db.fetch("players");
    let num = await db.fetch("playerNumb");
    let joined = await db.fetch(`joined_${message.author.id}`);
    if (joined === true)
      return message.author.send("You already joined a game!");
    if (players == null) players = "";
    currentUser = currentUser.replace("*", "\*");
    currentUser = currentUser.replace("~", "\~");
    currentUser = currentUser.replace("_", "\_");
    currentUser = currentUser.replace("|", "\|");
    currentUser = currentUser.replace("`", "\`");
    players = players.replace("*", "\*");
    players = players.replace("~", "\~");
    players = players.replace("_", "\_");
    players = players.replace("`", "`");
    players = players.replace("|", "\|");

    num = num + 1;
    //if (players == null) players =  "";
    db.set(`player_${num}`, message.author.id);
    for (let i = 1; i <= num; i++) {
      let guy = await db.fetch(`player_${i}`);
      let player = client.users.find(u => u.id === guy);
      player.send(
        new Discord.RichEmbed()
          .setTitle(message.author.username + " has joined the game!")
          .setDescription(players + num + ". " + currentUser)
      );
    }

    db.set("players", players + num + ". " + currentUser + "\n");
    db.add("playerNumb", 1);
    db.set(`joined_${message.author.id}`, true);
		db.set("discussion", true) 
    if (num == 20) {
      for (let i = 1; i <= num; i++) {
        let guy = await db.fetch(`player_${i}`);
        let player = client.users.get(guy);
        player.send("Game is starting. The chat is disabled!");
      }
      db.set("chatDisabled", true);
      let roles = [
        "Villager",
        "Cultist",
        "Seer",
        "Cursed Villager",
        "Seer Apprentice",
        "Cult Shaman",
        "Aura Seer",
        "Fool",
        "Mason",
        "Mason",
        "Minion",
        "Detective",
        "Grumpy Grandma",
        "Prince",
        "Minion",
        "Merchant",
        "Cult Leader",
        "Mason",
        "Aura Seer",
        "Noob Cultist"
      ];
      let roleToPlay = [];
      for (let i = 0; i < num; i++) {
        roleToPlay.push(roles[i]);
      }
      shuffle(roleToPlay);
      for (let i = 1; i <= num; i++) {
        db.set(`role_{i}`, roleToPlay[i]) 
        let guy = await db.fetch(`player_${i}`)
        let player = client.users.get(guy)
        let info = await db.fetch(`roleInfo_${roleToPlay[i]}`)  
        player.send(info)
      }
    }
  }
};
