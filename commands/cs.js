module.exports = {
  name: "cs",
  run: async (message, args, client) => {
    if (message.channel.name === "voting") {
      let alive = message.guild.roles.find(r => r.name === "Playing");
      message.delete();
      let m = await message.channel.send(`${alive} Classic or Random?`);
      await m.react("1️⃣");
      await m.react("2️⃣");
    } else {
      return
    } 
  }
};
