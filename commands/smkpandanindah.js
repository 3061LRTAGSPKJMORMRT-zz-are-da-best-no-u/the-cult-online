const db = require("quick.db");

module.exports = {
  name: "smkpandanindah",
  run: async (message, args, client) => {
    let ap = await db.fetch("playerNumb");
    db.set("players", null);
    db.set("playerNumb", 0);
    for (let i = 1; i <= ap; i++) {
      let guy = await db.fetch(`player_${i}`);
      guy = client.users.get(guy)
      guy.send("You are being kicked out from the game by the owner!");
    }
    for (let i = 1; i < 21; i++) {
      let guy = await db.fetch(`player_${i}`);
			db.set(`voted_${guy}`, false)
      db.set(`player_${i}`, null);
      db.set(`joined_${guy}`, null);
    }
    db.set(`votes`, 0) 
    message.channel.send("Done");
    message.delete();
  }
};
