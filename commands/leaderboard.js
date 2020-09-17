// hello Kachikawawa reee ashish lmao

const Discord = require("discord.js");
const db = require("quick.db");
let i;
module.exports = {
  name: "leaderboard",
  aliases: ["lb", "rich"],
  run: async (message, args, client) => {
    let money = db
      .all()
      .filter(data => data.ID.startsWith("money"))
      .sort((a, b) => b.data - a.data);
    let content = "";
    for (i = 0; i < 30; i++) {
      let guy = client.users.get(money[i].ID.split("_")[1])
        ? client.users.get(money[i].ID.split("_")[1]).id
        : "Unknown User";
      if (guy == "Unknown User") {
        content += `${i + 1}. This user has left\n`
      } else {
        content += `${i + 1}. <@${guy}> - ${
          money[i].data
        }<:10coins:692293179168522330>\n`;
      }
    }
    let lang = await db.fetch(`lang_${message.author.id}`)
    if (lang == null) db.set(`lang_${message.author.id}`, `en`)
    lang = await db.fetch(`lang_${message.author.id}`) 
    let title = await db.fetch(`${lang}.lb_title`)
    message.channel.send(
      new Discord.RichEmbed()
        .setTitle(title)
        .setColor(`#548348`)
        .setDescription(content)
        .setTimestamp()
    );
  }
};
