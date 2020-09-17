const db = require("quick.db");

module.exports = {
  name: "tcend",
  run: async (message, args, client) => {
    let game = await db.fetch(`game_${message.guild.id}`);
    let joiningRole = message.guild.roles.find(role => role.name === "Joined");
    joiningRole.delete();
    message.guild.createRole({
      name: "Joined",
      color: "#000044"
    });
    if (!message.channel.name == "commands") {
      return;
    } else {
      if (!args) {
        message.channel.send("Please enter the team that won the match!");
      } else {
        client.channels
          .get("567789735670448138")
          .send(`Game ${game} ended! ${args[0]} won the match!`);
        db.set(`game_${message.guild.id}`, null);
        let host = db.get(`host_${message.author.id}`)
        if (host == null) db.set(`host_${message.author.id}`, 3)
        db.add(`host_${message.author.id}`, 1)
      	host = db.get(`host_${message.author.id}`) 
        if (host == 28) {
          client.channels.get('566263466768334851').send(`${message.author} has been promoted to a full narrator! Congrats 🎉`) 
          message.member.addRole("580836460232572938") 
          message.member.removeRole("581166570689134617")
        }
        if (host == 80) {
          client.channels.get('566263466768334851').send(`${message.author} has hosted enough games and is now promoted to a Supervisor! Congratulations.`)
          message.member.addRole('697764950617096213') 
        }
        if (host == 200) {
          db.push(`badges_${message.author.id}`, '<:hoster_badge:734295148355387484> **Hoster** - This user has hosted 200 games of The Cult Online!') 
        } 
        if (host == 500) {
          db.push(`badges_${message.author.id}`, '<:pro_hoster_badge:734295642100334672> **PRO Hoster** - This user has hosted 500 or more games!') 
        } 
      }
    }
  }
};
