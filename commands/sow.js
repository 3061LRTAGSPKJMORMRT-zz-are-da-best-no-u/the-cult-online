let sentMessage = sentMessage => sentMessage.react;
module.exports = {
  name: "sow",
  run: async (message, args, client) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return;
    } else {
      let channel = message.channel
      channel.bulkDelete(1)
      let m = await message.channel.send(
        "<@&584047417653985281> Start or Wait?"
      );
      await m.react("👍");
      await m.react("👎");
    }
  }
};
