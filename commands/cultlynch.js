module.exports = {
  name: "cultlynch",
  run: async (message, args, client) => {
    if (message.channel.name == "commands") {
      let discussion = message.guild.channels.find(
        c => c.name === "discussion-chat"
      );
      let content = '';
      for (let i = 0; i < args.length; i++) {
        content += args[i] + ' ' 
      }
      discussion.send(`The Cultist Lynched ${content}`);
    }
  }
};
