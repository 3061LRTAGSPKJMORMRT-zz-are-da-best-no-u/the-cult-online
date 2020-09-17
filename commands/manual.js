const db = require("quick.db");

module.exports = {
  name: "manual",
  run: async (message, args, client) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return;
    } else {
      message.react("💋");
      let content = args[1];
      let day = await db.fetch(`dayCount_${message.guild.id}`);
      let night = await db.fetch(`nightCount_${message.guild.id}`);
      let amtD = day - day * 2 + 1;
      let amtN = night - night * 2 + 1;
      db.set(`dayCount_${message.guild.id}`, 0);
      db.set(`nightCount_${message.guild.id}`, 1);
      let guy = message.guild.members.find(m => m.nickname === args[0]);
      let role = await db.fetch(`role_${guy.id}`, args[1]);
      let real = args[1].toLowerCase();
      let channel = message.guild.channels.find(c => c.name === `priv-${real}`);
      let cultchat = message.guild.channels.find(
        c => c.name === "the-cult-chat"
      );
      if (!channel)
        return await message.reply("Channel not found! Please retry.");
      if (content.includes("-")) {
        content = content.replace(
          /(\w+)-(\w+)/g,
          (_, m1, m2) =>
            `${m1[0].toUpperCase()}${m1
              .slice(1)
              .toLowerCase()} ${m2[0].toUpperCase()}${m2
              .slice(1)
              .toLowerCase()}`
        );
      } else {
        content = `${content[0].toUpperCase()}${content
          .slice(1)
          .toLowerCase()}`;
        message.channel.send(content);
      }

      channel.overwritePermissions(guy.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true
      });
      if (real.includes("cult")) {
        cultchat.overwritePermissions(guy.id, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true,
          READ_MESSAGE_HISTORY: true
        });
      }
      db.set(`role_${guy.id}`, content);
      db.set(`aura_${guy.id}`, args[2]);
    }
  }
};
